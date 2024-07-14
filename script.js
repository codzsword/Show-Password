const passwordField = document.querySelector(".input-control");
const eyeIcon = document.querySelector("#icon");

eyeIcon.addEventListener("click", function () {
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  eyeIcon.classList.toggle("bx-hide");
  eyeIcon.classList.toggle("bx-show");
});
