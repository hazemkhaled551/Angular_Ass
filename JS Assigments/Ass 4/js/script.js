$(document).ready(function () {
  $(".compony-banner .owl-carousel").owlCarousel({
    loop: true,

    nav: true,
    items: 5,
  });
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 8,
      },
    },
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
  });
});

// counter banner function

let day = document.querySelector(".day-count .number");
let hour = document.querySelector(".hour-count .number");
let min = document.querySelector(".min-count .number");
let sec = document.querySelector(".sec-count .number");

function counter() {
  let counterDate = new Date("Dec 31, 2025 23:59:59").getTime();
  let now = new Date().getTime();
  let distance = counterDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.innerHTML = days < 10 ? `0${days}` : days;
  hour.innerHTML = hours < 10 ? `0${hours}` : hours;
  min.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  sec.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

setInterval(counter, 1000);
// async function filterData() {
//   let res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
//   let data = await res.json();

//   console.log(data.data);

//   // تجميع حسب الكاتيجوري
//   let grouped = data.data.reduce((acc, item) => {
//     if (!acc[item.category.name]) {
//       acc[item.category.name] = [];
//     }
//     acc[item.category.name].push({
//       image: item.images[0],
//       title: item.title,
//       price: item.price,
//     });
//     return acc;
//   }, {});

//   console.log(grouped);

//   disGategory(grouped);
// }

// let owl = document.querySelector(".owl-carousel");

// function disGategory(data) {
//   Object.entries(data).forEach(([category, items]) => {
//     // ناخد أول منتج من الكاتيجوري
//     let firstItem = items[0];
//     console.log(category);

//     $(".owl-carousel").trigger("add.owl.carousel", [
//       `
//         <div class="item">
//           <div class="img">
//             <img src="${firstItem.image}" alt="${firstItem.title}" />
//           </div>
//           <div class="text">
//             <h6>${category}</h6
//             <p>${items.length > 10 ? "10+" : items.length} items</p>
//           </div>
//         </div>
//       `,
//     ]);
//   });

//   $(".owl-carousel").trigger("refresh.owl.carousel");
// }

// filterData();
