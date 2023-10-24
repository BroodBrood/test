Splitting();

const pacman = document.querySelector('.pacman');

pacman.addEventListener('mouseover', () => {
  pacman.style.transform = 'rotate(0deg)';
});

pacman.addEventListener('mouseout', () => {
  pacman.style.transform = 'rotate(0deg)';
});
