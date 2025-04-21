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
      const usernameInput = document.getElementById("identifier"); // fixed ID
      const passwordInput = document.getElementById("password");
      if (!usernameInput || !passwordInput) {
        alert("Login form elements not found.");
        return;
      }
      const username = usernameInput.value;
      const password = passwordInput.value;
      if (
        username === adminCredentials.username &&
        password === adminCredentials.password
      ) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "admin-dashboard.html";
      } else {
        alert("Invalid username or password");
      }
    });
  }
});
