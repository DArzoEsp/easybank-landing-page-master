const hamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

// close and open hamburger menu                                      // close
menuClicked = () => {
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } else {
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }

}; 

// when menu is clicked do the function above
hamburger.addEventListener('click', menuClicked);

