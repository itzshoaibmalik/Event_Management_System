// /* Created by Tivotal */

// let menu = document.querySelector("#menu-bars");
// let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// };

// let themeToggler = document.querySelector(".theme-toggler");
// let toggleBtn = document.querySelector(".toggle-btn");

// toggleBtn.onclick = () => {
//   themeToggler.classList.toggle("active");
// };

// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");
//   themeToggler.classList.remove("active");
// };

// document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
//   btn.onclick = () => {
//     let color = btn.style.background;
//     document.querySelector(":root").style.setProperty("--theme-color", color);
//   };
// });

// var swiper = new Swiper(".home-slider", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2,
//     slideShadows: true,
//   },
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
// });

// var swiper = new Swiper(".review-slider", {
//   slidesPerView: 1,
//   grabCursor: true,
//   loop: true,
//   spaceBetween: 10,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     700: {
//       slidesPerView: 2,
//     },
//     1050: {
//       slidesPerView: 3,
//     },
//   },
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
// });



/* Created by Tivotal */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
    enabled: true
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    enabled: true
  },
});



// REVIEW SLIDER 
// Get the review slider element
var reviewSlider = document.querySelector(".review-slider");

// Check if the review slider element exists
if (reviewSlider) {
  // Create a new Swiper instance for the review slider
  var swiper = new Swiper(reviewSlider, {
    // Configuration options for the review slider
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    rewind: true,
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      enabled: true
    },
  });

  // Add event listeners for the review slider
  swiper.on("slideChange", function () {
    console.log("Slide changed");
  });

  swiper.on("slideChangeTransitionEnd", function () {
    console.log("Slide change transition ended");
  });

  swiper.on("slideChangeTransitionStart", function () {
    console.log("Slide change transition started");
  });
} else {
  console.error("Review slider element not found");
}