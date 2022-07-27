const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// toggles active class on both hamburger and navMenu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// removes active class when link is clicked so menu goes away
document.querySelectorAll('.nav-link').forEach(link => link.
  addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));