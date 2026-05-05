const signinForm = document.getElementById("signinForm");
const loginEmailError = document.getElementById("loginEmailError");
const loginPasswordError = document.getElementById("loginPasswordError");
const loginFailedError = document.getElementById("loginFailedError");

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    showError(loginEmailError, "Email is required");
    return;
  }

  if (!emailRegex.test(email)) {
    showError(
      loginEmailError,
      "Please enter a valid email address (e.g., example@mail.com)",
    );
    return;
  }

  if (password === "") {
    showError(loginPasswordError, "Password is required");
    return;
  }

 

  let users = JSON.parse(localStorage.getItem("users")) || [];


  
  const foundUser = users.find(user => user.email === email && user.password === password)

  if (foundUser) {
    // saving login state
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", foundUser.fullname);

    window.location.href = "home.html";
  } else {
    showError(loginFailedError, "Invalid email or password");
  }
});



const isAlreadyloggedIn = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    window.location.href = "home.html";
  }
};

isAlreadyloggedIn();
