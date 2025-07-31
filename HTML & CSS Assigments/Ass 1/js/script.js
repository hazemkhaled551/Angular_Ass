$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      1000: {
        items: 2,
        dots: false,
      },
    },
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });
});

// top button
const scrollToTopBtn = document.getElementsByClassName("top-button")[0];
const nav =  document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
 
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
  if (window.scrollY > 30) {
   nav.style.position = "fixed";
   nav.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
  } else {
    nav.style.position = "absolute";
    nav.style.backgroundColor = "transparent"
  }
 
  
});


scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0, 
    behavior: "smooth",
    speed: 1000
  });
});






const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
