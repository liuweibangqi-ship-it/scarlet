const menuBtn = document.getElementById('menuBtn');
const globalNav = document.getElementById('globalNav');

menuBtn.addEventListener('click', () => {
  globalNav.classList.toggle('active');
});

document.querySelectorAll('nav a, .card, .btn').forEach(link => {
  link.addEventListener('click', () => {
    globalNav.classList.remove('active');
  });
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 80 ? 'rgba(255,250,246,.96)' : 'rgba(255,250,246,.86)';
});
