const logoutButton = document.getElementById('logoutBtn')


const loggedInUsername = localStorage.getItem("currentUser");
const welcomeEl = document.getElementById("welcome")

if(welcomeEl && loggedInUsername){
  welcomeEl.textContent = `${loggedInUsername}`
}

const isLoggedIn = localStorage.getItem("isLoggedIn");

if(isLoggedIn !== "true"){
    window.location.href = "signin.html"
}


const logout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");

    alert("Successfully Logged Out");
  location.href = "signin.html";

};


logoutButton.addEventListener('click', logout);