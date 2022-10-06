// navbar menuplation 
let navbar = document.querySelector(".header .navbar")

// open navbar 
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.add("active");
}

// close navbar
document.querySelector("#close-navbar").onclick = () => {
    navbar.classList.remove("active");
};

// login and register btn toggle 
let registerBtn = document.querySelector(".account-form .register-btn");
let loginBtn = document.querySelector(".account-form .login-btn");

// function for toggle register btn
registerBtn.onclick = () => {
    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
    document.querySelector(".account-form .login-form").classList.remove("active");
    document.querySelector(".account-form .register-form").classList.add("active");
};

// function for toggle login btn 
loginBtn.onclick = () => {
    registerBtn.classList.remove("active");
    loginBtn.classList.add("active");
    document.querySelector(".account-form .login-form").classList.add("active");
    document.querySelector(".account-form .register-form").classList.remove("active");
};


// account form menuplation 
let accountForm = document.querySelector(".account-form")

// open account form, account btn is from header
document.querySelector("#account-btn").onclick = () => {
    accountForm.classList.add("active");
}


// close account form
document.querySelector("#close-form").onclick = () => {
    accountForm.classList.remove("active");
};

// home swiper menuplation
var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    grabCursor: true,
  });


// review section slider 
var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    }
  });
