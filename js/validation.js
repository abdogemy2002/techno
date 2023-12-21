var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
var title = document.querySelectorAll("lr-title");


var loginUsername = LoginForm.querySelector("input[type='text']");
var loginPassword = LoginForm.querySelector("input[type='password']");
var loginWarning = LoginForm.querySelector("#loginWarning");

var regUsername = RegForm.querySelector("input[type='text']");
var regEmail = RegForm.querySelector("input[type='email']");
var regPassword = RegForm.querySelector("input[type='password']");
var regWarning = RegForm.querySelector("#regWarning");

LoginForm.addEventListener("input", function () {
  validateLoginInputs();
});

RegForm.addEventListener("input", function () {
  validateRegisterInputs();
});

function validateLoginInputs() {
  var username = loginUsername.value;
  var password = loginPassword.value;

  if (username.trim() === "" || password.trim() === "") {
    loginWarning.textContent = "Username and password are required.";
  } else {
    loginWarning.textContent = "";
  }
}

function validateRegisterInputs() {
  var username = regUsername.value;
  var email = regEmail.value;
  var password = regPassword.value;

  if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
    regWarning.textContent = "All fields are required.";
  } else if (password.trim().length < 5) {
    regWarning.textContent = "Password must be at least 5 characters long.";
  } else if (!isValidEmail(email)) {
    regWarning.textContent = "Invalid email format.";
  } else {
    regWarning.textContent = "";
  }
}

function isValidEmail(email) {
  var em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return em.test(email);
}


var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
var title = document.querySelectorAll(".lr-title")

title[0].addEventListener("click", function () {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
  
})
title[1].addEventListener("click", function () {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
})


