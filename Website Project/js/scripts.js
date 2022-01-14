/* CSCI 1170 Assignment 3 JavaScript file */

/* HTML DOM Style background Property.
   Author: W3Schools. 
   URL: https://www.w3schools.com/jsref/prop_style_background.asp
   Date Accessed: 15 Mar 2021
   */ 

/* Dark Mode: CSS-Tricks
   Author: Adhuham
   URL: https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#toggling-themes
   Date Accessed: 15 Mar 2021
 */ 


//The button is selected
const btn = document.querySelector(".btn-dark-mode");

 // The event listener is added to listen for the button to be clicked 
btn.addEventListener("click", function () {

  // Add and remove the .dark-mode to the body 
  document.body.classList.toggle("dark-mode");
});

