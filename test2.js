// script.js
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  function setActiveLink() {
      let current = "";
      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollY >= (sectionTop - sectionHeight / 3)) {
              current = section.getAttribute('id');
          }
      });
      navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
  }

  window.addEventListener('scroll', setActiveLink);

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href.startsWith('#')) {
              e.preventDefault();
              const targetSection = document.querySelector(href);
              if (targetSection) {
                  window.scrollTo({
                      top: targetSection.offsetTop,
                      behavior: 'smooth'
                  });
              }
          }
      });
  });
});

