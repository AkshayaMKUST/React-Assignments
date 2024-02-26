// Function for validating the password
function validatePassword() {
var password = document.getElementById("pass").value;
var confirmPassword = document.getElementById("confirmPassword").value;
var passwordError = document.getElementById("password-error");
var confirmPasswordError = document.getElementById("confirmPassword-error");

passwordError.innerHTML = "";
confirmPasswordError.innerHTML = "";

if (password.length < 8) {
passwordError.innerHTML = "Password must be at least 8 characters long";
return;
}

if (password !== confirmPassword) {
confirmPasswordError.innerHTML = "Passwords do not match";
return;
}
}


// Function for storing data that is entered through html forms
function storeData(){
let user = document.getElementById("username").value;
var first = document.getElementById("firstname").value;
var last = document.getElementById("lastname").value;
var em = document.getElementById("email").value;
var pass = document.getElementById("pass").value;
var phone = document.getElementById("number").value;
var dob = document.getElementById("dob").value;
var g = document.querySelector('input[name="gender"]:checked').value;

  var photoInput = document.getElementById("photo");
  var photo = photoInput.files[0];

let userData = JSON.parse(localStorage.getItem("userData")) || [];

userData.push({
  username: user,
  password: pass,
  firstname: first,
  lastname: last,
  email: em,
  phonenumber: phone,
  dateofbirth: dob,
  gender: g,
  photo: photo ? photo.name : null
});

localStorage.setItem("userData", JSON.stringify(userData));
sessionStorage.setItem("loggedInUsername", user);
window.location.href = 'profilepage.html';
return false;

}


// Function for handling and redirecting login to  the profile page
function handleLogin() {
var username = document.getElementById("login-username").value;
var password = document.getElementById("login-pass").value;

if (checkLogin(username, password)) {
  sessionStorage.setItem("loggedInUsername", username);
  window.location.href='profilepage.html';
  return false;
} else {
  alert('Invalid username or password');
}
}

// Function for checking if the username & password matches with one in localStorage
function checkLogin(username, password) {
let userData = JSON.parse(localStorage.getItem("userData")) || [];
return userData.some(user => user.username === username && user.password === password);
}

