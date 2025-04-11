document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    const adminLoginForm = document.getElementById('adminLoginForm');
    
    closeBtn.addEventListener('click', function() {
      window.location.href = 'paneerposting-website.html'; // Redirect to home page
    });
    
    adminLoginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // This is a simplified example. In a real application, authentication
      // would be handled server-side with proper security measures.
      if (username === 'admin' && password === 'admin123') {
        // Store admin login status in localStorage
        localStorage.setItem('adminLoggedIn', 'true');
        
        // Redirect to admin dashboard
        window.location.href = 'admin-dashboard.html';
      } else {
        alert('Invalid admin credentials. Please try again.');
      }
    });
  });