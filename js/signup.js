document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    const signupForm = document.getElementById('signupForm');
    
    closeBtn.addEventListener('click', function() {
      window.location.href = 'paneerposting-website.html'; // Redirect to home page
    });
    
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Form submission logic would go here
      alert('Account created successfully! Please log in.');
      window.location.href = 'login.html'; // Redirect to login page
    });
  });
