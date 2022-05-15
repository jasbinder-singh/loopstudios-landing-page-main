'use strict';

/**
 * navbar toggle
 */


  const navToggleBtn = document.querySelector('.nav_mobile_menu');
  const navList = document.querySelector('.nav_list');
  console.log(navToggleBtn);

  navToggleBtn.addEventListener('click',()=>{
    navToggleBtn.classList.toggle("active");
    navList.classList.toggle("active");
  });

// const header = document.querySelector("[data-header]");
// const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
// const navLinks = document.querySelectorAll("[data-navbar-link]");

// navToggleBtn.addEventListener("click", function (e) {
//   e.classList.toggle("active");
//   header.classList.toggle("nav-active");
// });

// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].addEventListener("click", function () {
//     header.classList.toggle("nav-active");
//     navToggleBtn.classList.toggle("active");
//   });
// }



// /**
//  * header scroll active state & go to top
//  */

// const goTopBtn = document.querySelector("[data-go-top]");

// window.addEventListener("scroll", function () {

//   if (window.scrollY >= 100) {
//     header.classList.add("active");
//     goTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     goTopBtn.classList.remove("active");
//   }

// });