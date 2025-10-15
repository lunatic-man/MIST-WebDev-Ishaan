// script.js

// Wait for the page to fully load
window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');

  // Attach a click event to each link
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); 

      const href = link.getAttribute('href');
      const isExternal = href.startsWith('http');

      
      const message = isExternal
        ? `You're about to visit an external site:\n${href}\n\nDo you want to continue?`
        : `You're navigating within the site:\n${href}\n\nContinue?`;

      const confirmVisit = confirm(message);

      if (confirmVisit) {
        window.location.href = href; 
      } else {
        alert('Navigation cancelled.');
      }
    });
  });
});
