// script.js

// Random fact feature
const facts = [
  "Aristotle classified animals based on how they moved — air, land, or water.",
  "Linnaeus introduced the binomial nomenclature system used even today.",
  "Taxonomy helps scientists understand evolutionary relationships.",
  "The modern system adds 'Domain' as the highest level of classification.",
  "Carl Linnaeus was nicknamed the 'Father of Modern Taxonomy'."
];

window.addEventListener('load', () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  const factBox = document.getElementById('fact-box');
  
  factBox.textContent = "🧠 Did you know? " + randomFact;
  factBox.classList.remove('hidden');
  
  // Fade in
  setTimeout(() => {
    factBox.classList.add('opacity-100');
    factBox.classList.remove('opacity-0');
  }, 100);
  
  // Fade out after 6 seconds
  setTimeout(() => {
    factBox.classList.add('opacity-0');
    factBox.classList.remove('opacity-100');
  }, 6000);
  
  // Hide completely after fade
  setTimeout(() => {
    factBox.classList.add('hidden');
  }, 7000);
});



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
