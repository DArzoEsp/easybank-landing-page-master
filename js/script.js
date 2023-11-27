const hamburger = document.querySelector('#btnHamburger');  // selecting hamburger id
const body = document.querySelector('body');
const header = document.querySelector('.header');   // selecting header class
const overlay = document.querySelector('.overlay'); // selecting overlay class
const fadeElems = document.querySelectorAll('.has-fade');   // selecting all has fade class

// close and open hamburger menu                                 
menuClicked = () => {
    if (header.classList.contains('open')) {
        body.classList.remove('noscroll');
        header.classList.remove('open');                            // removes previous opening
        fadeElems.forEach((e) => e.classList.add('fade-out'));      // fades out with the overlay and menu option
        fadeElems.forEach((e) => e.classList.remove('fade-in'));    // removes it for multiple times of clicks
        overlay.classList.remove('fade-in');                        // removes fade in for multiple clicks
        overlay.classList.add('fade-out');                          // appealing animation of fading out
    } else {
        body.classList.add('noscroll');
        header.classList.add('open');   
        fadeElems.forEach((e) => e.classList.add('fade-in'));       // fades in the overlay with the overlay and menu options
        fadeElems.forEach((e) => e.classList.remove('fade-out'));  
        overlay.classList.remove('fade-out');   
        overlay.classList.add('fade-in');
    }

}; 

// when menu is clicked do the function above
hamburger.addEventListener('click', menuClicked);

