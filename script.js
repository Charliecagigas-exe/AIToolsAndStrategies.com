/*Code for hamburger dropdown menu*/
// Select the hamburger menu and the dropdown menu
var hamburger = document.querySelector('.hamburger');
var dropdownMenu = document.querySelector('.dropdown-menu');

// Add an event listener to the hamburger menu
hamburger.addEventListener('click', function() {
  // Toggle the 'show' class on the dropdown menu
  dropdownMenu.classList.toggle('show');
});