const timeGreetings = [
  { range: [6, 11],  text: "Breakfast brain? Let's fix that.",    gradient: "linear-gradient(135deg, #F4A026 0%, #FECC00 100%)" },
  { range: [11, 15], text: "It's lunch. Don't overthink this.",   gradient: "linear-gradient(135deg, #F4A026 0%, #C73E3A 100%)" },
  { range: [15, 18], text: "Snack o'clock or an early dinner?",   gradient: "linear-gradient(135deg, #C73E3A 0%, #5C3A21 100%)" },
  { range: [18, 23], text: "Dinner call. Loud and clear.",        gradient: "linear-gradient(135deg, #C73E3A 0%, #14343B 100%)" },
  { range: [23, 24], text: "It's late. We both know why you're here.", gradient: "linear-gradient(135deg, #14343B 0%, #1F1B16 100%)" },
  { range: [0, 6],   text: "It's late. We both know why you're here.", gradient: "linear-gradient(135deg, #14343B 0%, #1F1B16 100%)" }
];

function applyTimeGreeting() {
  const hour = new Date().getHours();
  const match = timeGreetings.find(g => hour >= g.range[0] && hour < g.range[1]);
  if (!match) return;

  const greetingEl = document.getElementById('hero-greeting');
  const heroEl = document.querySelector('.hero');

  if (greetingEl) greetingEl.textContent = match.text;
  if (heroEl) heroEl.style.background = match.gradient;
}

applyTimeGreeting();
