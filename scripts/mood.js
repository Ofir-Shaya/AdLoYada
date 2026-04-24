const platformColors = {
  talabat:  '#FF5A00',
  deliveroo: '#00CCBC',
  noon:     '#FECC00',
  keeta:    '#FF6B35',
  careem:   '#1DBF73'
};

const platformUrls = {
  talabat:  'https://www.talabat.com',
  deliveroo: 'https://www.deliveroo.ae',
  noon:     'https://www.noon.com/uae-en/food',
  keeta:    'https://www.keeta.com',
  careem:   'https://www.careem.com/en-ae/food'
};

const platformNames = {
  talabat: 'Talabat', deliveroo: 'Deliveroo', noon: 'Noon Food', keeta: 'Keeta', careem: 'Careem'
};

let currentMood = null;

function buildMoodPills() {
  const grid = document.getElementById('mood-grid');
  if (!grid) return;

  const tilts = [-3, 1, -2, 2, -1, 3, -2, 1, -3];
  moods.forEach((mood, i) => {
    const pill = document.createElement('button');
    pill.className = 'mood-pill';
    pill.dataset.moodId = mood.id;
    pill.style.setProperty('--tilt', tilts[i % tilts.length]);
    pill.innerHTML = `<span class="pill-emoji">${mood.emoji}</span>${mood.label}`;
    pill.addEventListener('click', () => selectMood(mood.id));
    grid.appendChild(pill);
  });
}

function buildStickyChips() {
  const container = document.getElementById('sticky-mood-chips');
  if (!container) return;

  moods.forEach(mood => {
    const chip = document.createElement('button');
    chip.className = 'sticky-chip';
    chip.dataset.moodId = mood.id;
    chip.textContent = `${mood.emoji} ${mood.label}`;
    chip.addEventListener('click', () => {
      selectMood(mood.id);
      document.getElementById('mood-section').scrollIntoView({ behavior: 'smooth' });
    });
    container.appendChild(chip);
  });
}

function selectMood(moodId) {
  const mood = moods.find(m => m.id === moodId);
  if (!mood) return;
  currentMood = moodId;

  document.querySelectorAll('.mood-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.moodId === moodId);
  });
  document.querySelectorAll('.sticky-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.moodId === moodId);
  });

  document.body.dataset.mood = moodId;
  renderRecommendation(mood);

  const recEl = document.getElementById('recommendation');
  if (recEl) {
    setTimeout(() => {
      recEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}

function renderRecommendation(mood) {
  const panel = document.getElementById('recommendation');
  if (!panel) return;

  panel.classList.remove('visible');

  const platformBadges = mood.platforms.map(pid => {
    const color = platformColors[pid] || '#ccc';
    const url = platformUrls[pid] || '#';
    const name = platformNames[pid] || pid;
    return `<a href="${url}" target="_blank" rel="noopener" class="rec-platform-badge" style="background:${color}">${name}</a>`;
  }).join('');

  const dishesList = mood.dishes.map(d => `<li>${d}</li>`).join('');
  const cuisinesList = mood.cuisines.map(c => `<span style="background:rgba(244,160,38,0.15);color:var(--saffron);padding:0.2rem 0.6rem;border-radius:100px;font-size:0.8rem;">${c}</span>`).join(' ');

  panel.innerHTML = `
    <div class="rec-header">
      <span class="rec-emoji-big">${mood.emoji}</span>
      <div>
        <div class="rec-label">Tonight's pick</div>
        <div class="rec-title">${mood.label}</div>
        <div class="rec-tagline">${mood.tagline}</div>
      </div>
    </div>
    <div class="rec-grid">
      <div class="rec-card animate-rec-card" style="animation-delay:0s">
        <div class="rec-card-title">Order these</div>
        <ul class="rec-dishes">${dishesList}</ul>
      </div>
      <div class="rec-card animate-rec-card" style="animation-delay:0.08s">
        <div class="rec-card-title">Cuisine vibes</div>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:1rem">${cuisinesList}</div>
        <div class="rec-card-title">Best on</div>
        <div class="rec-platforms">${platformBadges}</div>
      </div>
    </div>
    <div class="rec-tip">
      <strong>Dubai tip:</strong> ${mood.dubaiTip}
    </div>
  `;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      panel.classList.add('visible');
    });
  });
}

function buildPlatformCards() {
  const container = document.getElementById('platforms-container');
  if (!container) return;

  platforms.forEach(p => {
    const card = document.createElement('a');
    card.href = p.url;
    card.target = '_blank';
    card.rel = 'noopener';
    card.className = 'platform-card reveal';
    card.style.setProperty('--platform-color', p.color);
    card.style.borderLeftColor = p.color;

    card.innerHTML = `
      <div class="platform-name" style="color:${p.color}">${p.name}</div>
      <div class="platform-vibe">${p.vibe}</div>
      <div class="platform-best">${p.bestFor}</div>
      <div class="platform-meta">
        <span class="platform-time">⏱ ${p.deliveryTime}</span>
        <span class="platform-price">${p.priceTier}</span>
      </div>
      <div class="platform-weakness">Heads up: ${p.weakness}</div>
    `;
    container.appendChild(card);
  });
}

function buildCuisineCards() {
  const container = document.getElementById('cuisines-container');
  if (!container) return;

  cuisines.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = `cuisine-card reveal reveal-delay-${(i % 4) + 1}`;

    const platformTags = c.platforms.map(pid => {
      const color = platformColors[pid] || '#ccc';
      const name = platformNames[pid] || pid;
      return `<span style="background:${color}20;color:${color};font-size:0.7rem;padding:0.2rem 0.5rem;border-radius:100px;font-weight:600">${name}</span>`;
    }).join('');

    card.innerHTML = `
      <div class="cuisine-emoji">${c.emoji}</div>
      <div class="cuisine-name">${c.name}</div>
      <div class="cuisine-personality">"${c.personality}"</div>
      <div class="cuisine-order"><strong>Order this:</strong> ${c.orderThis}</div>
      <div class="cuisine-areas"><span class="cuisine-areas-icon">📍</span> ${c.bestAreas}</div>
      <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.75rem">${platformTags}</div>
    `;
    container.appendChild(card);
  });
}

export { buildMoodPills, buildStickyChips, buildPlatformCards, buildCuisineCards, selectMood };
export { currentMood };
