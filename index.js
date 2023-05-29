const projectCards = document.querySelectorAll('.project-card');

// Add touch event listeners to project cards
projectCards.forEach(card => {
  card.addEventListener('touchstart', () => {
    // Add touch-active class on touchstart event
    card.classList.add('touch-active');
  });

  card.addEventListener('touchend', () => {
    // Remove touch-active class on touchend event
    card.classList.remove('touch-active');
  });
});