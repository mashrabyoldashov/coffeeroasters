const elHamburgerBtn = document.querySelector(".hamburger-link");
const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', ()=> {
  elHeader.classList.toggle('header--open');
})