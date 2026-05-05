const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");


// Toggle password and confirm password
const toggleVisibility = (inputId, btnId) => {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  const icon = btn.querySelector("i");

  const isHidden = input.type === "password";

  input.type = isHidden ? "text" : "password";

  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
};

if(togglePassword){
togglePassword.addEventListener("click", () => {
  toggleVisibility("password", "togglePassword");
});

}

if(toggleConfirmPassword){
toggleConfirmPassword.addEventListener("click", () => {
  toggleVisibility("confirmPassword", "toggleConfirmPassword");
});
}




// For form validation error
function showError(element, message) {
  element.textContent = message;
  element.style.display = "block";
}

// For form validation error hide
function hideError(element) {
  element.style.display = "none";
}

