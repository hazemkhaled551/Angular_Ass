let imgs = document.querySelectorAll("img");
let layer = document.querySelector(".layer");
let imgBox = document.querySelector(".img-box");
let closeBtn = document.querySelector(".fa-square-xmark");
let preBtn = document.querySelector(".fa-angle-left");
let nextBtn = document.querySelector(".fa-angle-right");
let curIndex = 0;

function next() {
  curIndex++;
  if (curIndex >= imgs.length) {
    curIndex = 0;
  }
  imgBox.style.backgroundImage = `url(${imgs[curIndex].src})`;
}

function pre() {
  curIndex--;
  if (curIndex < 0) {
    curIndex = imgs.length - 1;
  }
  imgBox.style.backgroundImage = `url(${imgs[curIndex].src})`;
}

function close() {
  layer.classList.add("d-none");
}
nextBtn.addEventListener("click", next);

preBtn.addEventListener("click", pre);

closeBtn.addEventListener("click", close);

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function () {
    layer.classList.remove("d-none");
    imgBox.style.backgroundImage = `url(${imgs[i].src})`;
    curIndex = i;
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    close();
  }
  if (e.key === "ArrowRight") {
    next();
  }
  if (e.key === "ArrowLeft") {
    pre();
  }
});
