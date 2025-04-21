import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASLKdboiKsUTtiXhTPi7EmUJi_X8wE-Cw",
  authDomain: "paneerposting69.firebaseapp.com",
  projectId: "paneerposting69",
  storageBucket: "paneerposting69.firebasestorage.app",
  messagingSenderId: "523643036204",
  appId: "1:523643036204:web:7180f2dbfda677abc92789",
  measurementId: "G-1B2DCGQJ01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function () {
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      window.location.href = 'paneerposting-website.html';
    });
  }

  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = document.getElementById("identifier"); // user email
      const passwordInput = document.getElementById("password"); // user password

      if (!emailInput || !passwordInput) {
        alert("Login form elements not found.");
        return;
      }

      const email = emailInput.value;
      const password = passwordInput.value;

      // Firebase Auth login
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Login successful
          localStorage.setItem("loggedIn", "true"); // optional
          window.location.href = "admin-dashboard.html"; // change to your page if needed
        })
        .catch((error) => {
          alert("Invalid email or password");
          console.error("Login error:", error.message);
        });
    });
  }
});
