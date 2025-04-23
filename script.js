// Script to handle button interaction
document.addEventListener("DOMContentLoaded", function() {
  const contactButton = document.querySelector(".button");
  
  if (contactButton) {
    contactButton.addEventListener("click", function() {
      alert("Thank you for contacting us! We will get back to you shortly.");
    });
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});