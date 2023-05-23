// Get the navbar element and the links within it
var navbar = document.querySelector('.navbar');
var links = navbar.querySelectorAll('.navbar-left a');

// Add click event listeners to the links
links.forEach(function(link) {
  link.addEventListener('click', function() {
    // Remove the 'button-active' class from all links
    links.forEach(function(link) {
      link.classList.remove('button-active');
      link.classList.remove('char');
    });

    // Add the 'button-active' class to the clicked link
    this.classList.add('button-active');
    this.classList.add('char');
  });
});
