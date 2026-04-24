import { buildMoodPills, buildStickyChips, buildPlatformCards, buildCuisineCards } from './mood.js';
import { initSurpriseButton } from './surprise.js';

function initStickyNav() {
  const nav = document.getElementById('sticky-nav');
  if (!nav) return;

  const heroBottom = document.querySelector('.hero')?.getBoundingClientRect().bottom ?? 400;

  const observer = new IntersectionObserver(([entry]) => {
    nav.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0 });

  const hero = document.querySelector('.hero');
  if (hero) observer.observe(hero);
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initHeroEmojis() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const emojis = ['🍕', '🥗', '🍣', '🌯', '🍛', '🥙', '🧆', '🫔', '🍱'];
  emojis.forEach((emoji, i) => {
    const el = document.createElement('span');
    el.className = 'hero-emoji-bg';
    el.textContent = emoji;
    el.style.left = `${10 + (i * 10)}%`;
    el.style.animationDuration = `${12 + i * 3}s`;
    el.style.animationDelay = `${i * 1.5}s`;
    hero.appendChild(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildMoodPills();
  buildStickyChips();
  buildPlatformCards();
  buildCuisineCards();
  initSurpriseButton();
  initStickyNav();
  initScrollReveal();
  initHeroEmojis();

  setTimeout(initScrollReveal, 300);
});
