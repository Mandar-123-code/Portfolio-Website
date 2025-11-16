// ------------ GLOBAL SELECTORS ------------
const $ = (q) => document.querySelector(q);
const $$ = (q) => Array.from(document.querySelectorAll(q));

// ------------ MOBILE MENU ------------
const hamburger = $('#hamburger');
const mobileMenu = $('#mobileMenu');

hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// ------------ THEME TOGGLE ------------
const themeToggle = $('#themeToggle');
const themeToggleMobile = $('#themeToggleMobile');

function setTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  const icon = isDark ? "🌙" : "☀️";
  if (themeToggle) themeToggle.textContent = icon;
  if (themeToggleMobile) themeToggleMobile.textContent = icon;
}

// Apply saved theme or default to light
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark");

// Toggle theme on click
[themeToggle, themeToggleMobile].forEach(btn => {
  btn?.addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('dark');
    setTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});

// ------------ TYPEWRITER ------------
const typeEl = $('#typewriter');
const phrases = ['Frontend Developer', 'React • JavaScript • Tailwind', 'I build real-world web apps'];
let pi = 0, ci = 0, typing = true;

function tick() {
  const cur = phrases[pi];
  if (typing) {
    ci++;
    typeEl.textContent = cur.slice(0, ci);
    if (ci === cur.length) { typing = false; setTimeout(tick, 1200); return; }
  } else {
    ci--;
    typeEl.textContent = cur.slice(0, ci);
    if (ci === 0) { typing = true; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(tick, typing ? 80 : 40);
}
tick();

// ------------ HEADER SCROLL & BACK TO TOP ------------
const header = $('header');
const toTop = $('#toTop');

window.addEventListener('scroll', () => {
  header?.classList.toggle('backdrop-blur', window.scrollY > 40);
  header?.classList.toggle('bg-black/40', window.scrollY > 40);
  header?.classList.toggle('border-b', window.scrollY > 40);
  header?.classList.toggle('border-white/6', window.scrollY > 40);

  toTop?.classList.toggle('hidden', window.scrollY <= 400);
});

toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ------------ PROJECT FILTERS ------------
const filterBtns = $$('.filter-btn');
const projectCards = $$('.project-card');

filterBtns.forEach(btn => btn.addEventListener('click', () => {
  filterBtns.forEach(b => b.classList.remove('filter-active'));
  btn.classList.add('filter-active');

  const filter = btn.dataset.filter;
  projectCards.forEach(card => {
    const types = card.dataset.type.split(' ');
    card.classList.toggle('hidden', filter !== 'all' && !types.includes(filter));
  });
}));

// ------------ CONTACT FORM ------------
const contactForm = $('#contactForm');
contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  alert("EmailJS removed — form not connected.");
  contactForm.reset();
});
$('#clearForm')?.addEventListener('click', () => contactForm?.reset());

// ------------ SMOOTH SCROLL ------------
$$('nav a, #contactCTABtn, #projectsCTABtn, #resumeBtn').forEach(a => {
  a.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      $(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ------------ ACCESSIBILITY (TAB OUTLINE) ------------
document.addEventListener('keydown', e => {
  if (e.key === 'Tab') document.documentElement.classList.add('show-focus');
});
