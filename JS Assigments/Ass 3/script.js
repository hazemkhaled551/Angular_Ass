var products = [];
async function getData() {
  var response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
  var data = await response.json();
  products = data.data;
  disPro();
}
getData();

function disPro() {
  for (let i = 0; i < products.length; i++) {
    allpro = ``;
    allpro += `   <div class="col-md-4">
     <div class="card ">
          <img src="${products[i].imageCover}" class="card-img-top" alt="..." />
          <div class="card-body">
          <span>${products[i].brand.name}</span>
            <h5 class="card-title">${products[i].title}</h5>
            <p class="card-text">
             ${
               products[i].description.split(" ").slice(0, 10).join(" ") + "..."
             }
             </p>
             <span>${products[i].price}$</span>
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>`;

    document.querySelector(".row").innerHTML += allpro;
  }
}

async function signup() {
  var data = {
    name: document.getElementById("userName").value,
    email: document.getElementById("userEmail").value,
    password: document.getElementById("userPass").value,
    rePassword: document.getElementById("userRePass").value,
    phone: document.getElementById("userPhone").value,
  };
  var res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  var user = await res.json();
  console.log(user);
  if (user.message == "success") {
    document.querySelector(".signup").classList.add("d-none");
    document.querySelector(".signin").classList.remove("d-none");
  }
  localStorage.setItem("user", JSON.stringify(user));
}
async function signin() {
  var data = {
    email: document.getElementById("Email").value,
    password: document.getElementById("Pass").value,
  };
  var res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  var user = await res.json();
  console.log(user);
  if (user.message == "success") {
    document.querySelector(".signin").classList.add("d-none");
    document.querySelector(".products").classList.remove("d-none");
  }
  localStorage.setItem("user", JSON.stringify(user));
}

let btn = document.querySelector("#signup");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  signup();
});
let btn2 = document.querySelector("#signin");
btn2.addEventListener("click", function (e) {
  e.preventDefault();
  signin();
});

let btn3 = document.querySelector("#haveAccount");
btn3.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".signup").classList.add("d-none");
  document.querySelector(".signin").classList.remove("d-none");
});
