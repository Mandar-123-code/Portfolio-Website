// -------------------- GLOBAL SELECTORS --------------------
const $ = (q) => document.querySelector(q);
const $$ = (q) => Array.from(document.querySelectorAll(q));

// -------------------- THEME TOGGLE --------------------
const themeToggle = $('#themeToggle');
const themeToggleMobile = $('#themeToggleMobile');

function setTheme(isDark) {
  if (isDark) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');

  const icon = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  if (themeToggle) themeToggle.textContent = icon;
  if (themeToggleMobile) themeToggleMobile.textContent = icon;
}

// Apply saved theme or default to dark
const saved = localStorage.getItem('theme');
const isDark = saved ? saved === 'dark' : true; // default to dark
setTheme(isDark);


// Desktop toggle
themeToggle?.addEventListener('click', () => {
  const isDark = !document.documentElement.classList.contains('dark');
  setTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mobile toggle (optional, if mobile button exists)
themeToggleMobile?.addEventListener('click', () => {
  const isDark = !document.documentElement.classList.contains('dark');
  setTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// -------------------- BACK TO TOP BUTTON --------------------
const toTop = $('#toTop');
window.addEventListener('scroll', () => {
  if(toTop) {
    if(window.scrollY > 400) toTop.classList.remove('hidden');
    else toTop.classList.add('hidden');
  }
});

toTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// -------------------- ACCESSIBILITY (TAB OUTLINE) --------------------
document.addEventListener('keydown', e => { 
  if(e.key === 'Tab') document.documentElement.classList.add('show-focus'); 
});


// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const closeIcon = document.getElementById('closeIcon');

hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');

  // Toggle icons
  hamburgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});
