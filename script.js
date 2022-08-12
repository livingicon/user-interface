// HAMBURGER MENU
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




// IMAGE CAROUSEL
const carouselImg = document.querySelector('.carouselImg');
const carouselBtn = document.querySelectorAll('.carouselBtn');
const numberOfImages = document.querySelectorAll('.carouselImg img').length;
let imageIndex = 1;
let translateX = 0;

carouselBtn.forEach(button => {
  button.addEventListener('click', event => {
    if (event.target.id === 'previousBtn') {
      if (imageIndex !== 1) { // if not the first image
        imageIndex--;
        translateX += 300; // setting new translateX variable
      }
    } else {
      if (imageIndex !== numberOfImages) { // if not the last image
        imageIndex++;
        translateX -= 300; // setting new translateX variable
      }
    }
    carouselImg.style.transform = `translateX(${translateX}px)`; // updating the transform property of carouselImg container to the new current translateX variable from above
  });
});