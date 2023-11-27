const hamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

menuClicked = () => (header.classList.contains('open') ? header.classList.remove('open') : header.classList.add('open')); 

hamburger.addEventListener('click', menuClicked);