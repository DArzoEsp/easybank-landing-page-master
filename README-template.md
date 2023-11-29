# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Helper Methods
- CSS Grid and Flexbox
- Mobile-first workflow
- BEM style
- [SASS]

### What I learned

I learned how to use helper methods and how helpful using a mixins are for make a responsive layout
I learned the how to use grid-template-areas and grid-area
I learned about how to properly make a landing page from pixel to pixel perfection
I learned about animations transitions and transformation
I learned about javascript and how it interacts with css and html5

```html
  <header class="header">                                               <!--  start of navbar -->
    <div class="overlay has-fade"></div>
    <nav class="container container--pall flex flex-jc-sb flex-ai-c "> 
```
```css
  &.col2 {

      @include breakpoint-up(large) {
          grid-area: links2;
      }

      @include breakpoint-down(medium) {
          &:not(:last-child) {
              margin-bottom: 1.875rem;  
          }
      }

      // Breakpoints

// 600px, 1024px, 1400px
$breakpoints-up: ("medium": "40em", "large": "64em", "x-large": "87.5em");

// 639px, 1023px, 1399px
$breakpoints-down: ("small": "39.9375em", "medium": "63.9375em", "large": "87.4375em");

@mixin breakpoint-up($size) {
    @media (min-width: map-get($breakpoints-up, $size)) {
        @content;
    }
}

@mixin breakpoint-down($size) {    
    @media (max-width: map-get($breakpoints-down, $size)) {
        @content;
    }
}
```
```js
const hamburger = document.querySelector('#btnHamburger');  // selecting hamburger id
const body = document.querySelector('body');
const header = document.querySelector('.header');   // selecting header class
const overlay = document.querySelector('.overlay'); // selecting overlay class
const fadeElems = document.querySelectorAll('.has-fade');   // selecting all has fade class

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
```



### Continued development

I wanted to see how to properly do an overlay when menu is clicked as well as making sure it is not buggy such as when you
open the menu and while it is still open you increase screen size and it doesn't disappear.

### Useful resources

- [resource 1](https://css-tricks.com/) - This helped me with grid and flex box. I enjoyed this resource for helping correctly format and understand grid and flex more in depth
- [resource 2](https://www.atlassian.com/agile) - This is an amazing method of working. It makes work flow much more efficient and less buggy at the end of the day

## Author

- Website - [David Arzola-Espero](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

I referenced several videos such as codercoder and tsoding the most. Grateful for their content.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
