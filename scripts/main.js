import { buildMoodPills, buildStickyChips, buildFilterBar, buildPlatformCards, buildCuisineCards, openFavDrawer, refreshSavedBadge } from './mood.js';
import { initSurpriseButton } from './surprise.js';

function initStickyNav() {
  const nav = document.getElementById('sticky-nav');
  if (!nav) return;
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const observer = new IntersectionObserver(function(entries) {
    nav.classList.toggle('visible', !entries[0].isIntersecting);
  }, { threshold: 0 });
  observer.observe(hero);
}

function initScrollReveal() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
}

function initHeroEmojis() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  ['🍕','🥗','🍣','🌯','🍛','🥙','🧆','🫔','🍱'].forEach(function(emoji, i) {
    const el = document.createElement('span');
    el.className = 'hero-emoji-bg';
    el.textContent = emoji;
    el.style.left = (10 + i * 10) + '%';
    el.style.animationDuration = (12 + i * 3) + 's';
    el.style.animationDelay = (i * 1.5) + 's';
    hero.appendChild(el);
  });
}

function initFavButton() {
  const btn = document.getElementById('saved-badge');
  if (btn) btn.addEventListener('click', openFavDrawer);
  const overlay = document.getElementById('fav-overlay');
  if (overlay) overlay.addEventListener('click', function() {
    document.getElementById('fav-drawer')?.classList.remove('open');
    overlay.classList.remove('visible');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  buildMoodPills();
  buildStickyChips();
  buildFilterBar();
  buildPlatformCards();
  buildCuisineCards();
  initSurpriseButton();
  initStickyNav();
  initHeroEmojis();
  initFavButton();
  refreshSavedBadge();
  setTimeout(initScrollReveal, 300);
});
