document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Form submission logic would go here
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  });