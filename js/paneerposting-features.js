document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality here
    const featureBoxes = document.querySelectorAll('.feature-box');
    
    featureBoxes.forEach(box => {
      box.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f0f7ff';
      });
      
      box.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#f9f9f9';
      });
    });
  });