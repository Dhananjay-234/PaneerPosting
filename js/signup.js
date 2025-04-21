// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
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

document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.querySelector('.close-btn');
  const signupForm = document.getElementById('signupForm');
  
  // Close button redirects to home page
  closeBtn.addEventListener('click', function() {
    window.location.href = 'paneerposting-website.html'; // Redirect to home page
  });

  // Signup form submission event
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get user input from form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase user registration logic
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully created user
        const user = userCredential.user;
        alert('Account created successfully! Please log in.');
        window.location.href = 'login.html'; // Redirect to login page
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Error: ' + errorMessage); // Display error message
      });
  });
});
