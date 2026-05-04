const signupForm = document.getElementById("signupForm");
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

// For form validation error
function showError(element, message) {
  element.textContent = message;
  element.style.display = "block";
}

// For form validation error hide
function hideError(element) {
  element.style.display = "none";
}

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

togglePassword.addEventListener("click", () => {
  toggleVisibility("password", "togglePassword");
});

toggleConfirmPassword.addEventListener("click", () => {
  toggleVisibility("confirmPassword", "toggleConfirmPassword");
});

// Register Form submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const fullname = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phone").value.trim();
  const city = document.getElementById("city").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const cityError = document.getElementById("cityError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  [
    nameError,
    emailError,
    phoneError,
    cityError,
    passwordError,
    confirmPasswordError,
  ].forEach(hideError);

  // Name validation
  if (fullname === "") {
    showError(nameError, "Name is required");
    isValid = false;
  } else if (fullname.length < 3) {
    showError(nameError, "Name must be at least 3 characters");
    isValid = false;
  } else if (fullname.length > 30) {
    showError(nameError, "Name must be less than 30 characters");
    isValid = false;
  }

  //  Email validation
  if (email === "") {
    showError(emailError, "Email is required");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    showError(
      emailError,
      "Please enter a valid email address (e.g., example@mail.com)",
    );
    isValid = false;
  }

  // Phone number validating
  if (phoneNumber === "") {
    showError(phoneError, "Phone Number is required");
    isValid = false;
  } else if (!phoneRegex.test(phoneNumber)) {
    showError(phoneError, "Enter a valid 10-digit Indian mobile number");
    isValid = false;
  }

  // city validation
  if (city === "") {
    showError(cityError, "City is required");
    isValid = false;
  } else if (city !== city.toUpperCase()) {
    showError(cityError, "City must be in uppercase");
    isValid = false;
  }

  // Password validation
  if (password === "") {
    showError(passwordError, "Password is required");
    isValid = false;
  } else if (!passwordRegex.test(password)) {
    showError(
      passwordError,
      "Password must be 8+ characters with an uppercase letter, number, and special character",
    );
    isValid = false;
  }

  // Confirm Password validation
  if (confirmPassword === "") {
    showError(confirmPasswordError, "Confirm Password is required");
    isValid = false;
  } else if (password !== confirmPassword) {
    showError(confirmPasswordError, "Passwords do not match");
    isValid = false;
  }

  if (!isValid) return;

  const user = {
    fullname,
    email,
    phoneNumber,
    city,
    password,
    confirmPassword,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Successfully registered");
  location.href = "signin.html"
  
});
