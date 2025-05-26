
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // prevent weird behaviors
      const destination = link.getAttribute('href');
      window.location.href = destination;
    });
  });