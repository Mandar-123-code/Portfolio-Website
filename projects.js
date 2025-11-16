// -------------------- GLOBAL SELECTORS --------------------
const $ = (q) => document.querySelector(q);
const $$ = (q) => Array.from(document.querySelectorAll(q));

// -------------------- THEME TOGGLE --------------------
const themeToggle = $('#themeToggle');
const themeToggleMobile = $('#themeToggleMobile');

function setTheme(isDark) {
  if (isDark) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');

  const icon = isDark ? "🌙" : "☀️";
  if (themeToggle) themeToggle.textContent = icon;
  if (themeToggleMobile) themeToggleMobile.textContent = icon;
}

// Apply saved theme or default light
const saved = localStorage.getItem('theme');
setTheme(saved === 'dark');

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

// Smooth scroll to top
toTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// -------------------- ACCESSIBILITY (TAB OUTLINE) --------------------
document.addEventListener('keydown', e => { 
  if(e.key === 'Tab') document.documentElement.classList.add('show-focus'); 
});
