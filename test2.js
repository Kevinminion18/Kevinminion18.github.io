// script.js
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  function setActiveLink(section) {
      navLinks.forEach(link => {
          link.classList.toggle('active', '#' + section.id === link.getAttribute('href'));
      });
  }

  window.addEventListener('scroll', () => {
      let current = "";
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollY >= (sectionTop - sectionHeight / 3)) {
              current = section.getAttribute('id');
          }
      });
      setActiveLink(document.getElementById(current));
  });


  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
          });
      });
  });
});
