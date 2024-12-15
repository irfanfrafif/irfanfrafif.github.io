function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

// JavaScript for opening and closing the side navbar
const menuToggle = document.getElementById('menu-toggle');
const closeNav = document.getElementById('close-nav');
const sideNavbar = document.getElementById('side-navbar');

// Open the navbar
menuToggle.addEventListener('click', () => {
  sideNavbar.style.right = '0';
});

// Close the navbar
closeNav.addEventListener('click', () => {
  sideNavbar.style.right = '-250px';
});