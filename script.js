const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');

menuToggle.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
