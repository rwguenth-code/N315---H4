import home from "../pages/home.js";
import about from "../pages/about.js";
import { showToast } from "./utility.js";

const app = document.getElementById("app");

function router() {
  const hash = location.hash || "#home";

  app.innerHTML = "";

  switch (hash) {
    case "#about":
      app.appendChild(about());
      break;

    default:
      app.appendChild(home());
  }
}

window.addEventListener("hashchange", router);

router();

const loginBtn = document.getElementById("loginBtn");

const loginModal = document.getElementById("loginModal");

const closeModal = document.getElementById("closeModal");

loginBtn.addEventListener("click", () => {
  loginModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  loginModal.classList.add("hidden");
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();

  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    showToast("All fields must be filled out.", "error");

    return;
  }

  if (!email.includes("@")) {
    showToast("Enter a valid email address.", "error");

    return;
  }

  if (password.length < 6) {
    showToast("Password must be at least 6 characters.", "error");

    return;
  }

  showToast("Login successful!", "success");

  loginModal.classList.add("hidden");
});
