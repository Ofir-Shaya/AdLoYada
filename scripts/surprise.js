import { selectMood } from './mood.js';

const confettiEmojis = ['🍕', '🥘', '🍣', '🌯', '🍔', '🥗', '🍛', '🥙', '🍜', '🍱'];

function launchConfetti() {
  const count = 18;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.top = `${-50 + Math.random() * -100}px`;
      piece.style.animationDuration = `${1.5 + Math.random() * 1}s`;
      piece.style.animationDelay = `${Math.random() * 0.4}s`;
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 2500);
    }, i * 40);
  }
}

function initSurpriseButton() {
  const btn = document.getElementById('surprise-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    selectMood(randomMood.id);
    launchConfetti();
    document.getElementById('mood-section').scrollIntoView({ behavior: 'smooth' });
  });
}

export { initSurpriseButton };
