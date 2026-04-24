import { isFav, toggleFav, getFavCount } from './favorites.js';
import { getFilter, setFilter, restaurantMeetsFilter, dishMeetsFilter } from './filters.js';
import { buildCTACards } from './cta.js';

const P_COLORS = { talabat: '#FF5A00', deliveroo: '#00CCBC', noon: '#FECC00', keeta: '#FF6B35', careem: '#1DBF73' };
const P_NAMES  = { talabat: 'Talabat', deliveroo: 'Deliveroo', noon: 'Noon Food', keeta: 'Keeta', careem: 'Careem' };
const CUISINE_TO_ID = { lebanese:'lebanese', indian:'indian', italian:'italian', japanese:'japanese', emirati:'emirati', pakistani:'pakistani', korean:'korean', filipino:'filipino', ethiopian:'ethiopian', mediterranean:'mediterranean', steakhouse:'steakhouse', american:'american', chinese:'chinese', egyptian:'egyptian', pizza:'italian', burgers:'american', shawarma:'lebanese', thai:'thai' };

let currentMood = null;

function refreshSavedBadge() {
  const count = getFavCount();
  const badge = document.getElementById('saved-badge');
  const num   = document.getElementById('saved-count');
  if (badge) badge.hidden = count === 0;
  if (num)   num.textContent = count;
}

// ── MOOD PILLS ──────────────────────────────────────────────────────────────
function buildMoodPills() {
  const grid = document.getElementById('mood-grid');
  if (!grid) return;
  const tilts = [-3, 1, -2, 2, -1, 3, -2, 1, -3];
  moods.forEach(function(mood, i) {
    const pill = document.createElement('button');
    pill.className = 'mood-pill';
    pill.dataset.moodId = mood.id;
    pill.style.setProperty('--tilt', tilts[i % tilts.length]);
    pill.innerHTML = '<span class="pill-emoji">' + mood.emoji + '</span>' + mood.label;
    pill.addEventListener('click', function() { selectMood(mood.id); });
    grid.appendChild(pill);
  });
}

function buildStickyChips() {
  const container = document.getElementById('sticky-mood-chips');
  if (!container) return;
  moods.forEach(function(mood) {
    const chip = document.createElement('button');
    chip.className = 'sticky-chip';
    chip.dataset.moodId = mood.id;
    chip.textContent = mood.emoji + ' ' + mood.label;
    chip.addEventListener('click', function() {
      selectMood(mood.id);
      document.getElementById('mood-section').scrollIntoView({ behavior: 'smooth' });
    });
    container.appendChild(chip);
  });
}

// ── QUALITY FILTER BAR ───────────────────────────────────────────────────────
function buildFilterBar() {
  const bar = document.getElementById('quality-filter-bar');
  if (!bar) return;
  const current = getFilter();
  const filters = [
    { id: 'all',      label: 'All places' },
    { id: 'no-cloud', label: 'No cloud kitchens' },
    { id: 'quality',  label: '✦ Quality dining only' }
  ];
  bar.innerHTML = '<span class="filter-label">Filter:</span>';
  filters.forEach(function(f) {
    const btn = document.createElement('button');
    btn.className = 'filter-pill' + (f.id === current ? ' active' : '');
    btn.dataset.filterId = f.id;
    btn.textContent = f.label;
    btn.addEventListener('click', function() {
      setFilter(f.id);
      bar.querySelectorAll('.filter-pill').forEach(function(b) {
        b.classList.toggle('active', b.dataset.filterId === f.id);
      });
      if (currentMood) renderRecommendation(moods.find(function(m) { return m.id === currentMood; }));
    });
    bar.appendChild(btn);
  });
}

// ── SELECT MOOD ──────────────────────────────────────────────────────────────
function selectMood(moodId) {
  const mood = moods.find(function(m) { return m.id === moodId; });
  if (!mood) return;
  currentMood = moodId;

  document.querySelectorAll('.mood-pill').forEach(function(p) {
    p.classList.toggle('active', p.dataset.moodId === moodId);
  });
  document.querySelectorAll('.sticky-chip').forEach(function(c) {
    c.classList.toggle('active', c.dataset.moodId === moodId);
  });
  document.body.dataset.mood = moodId;
  renderRecommendation(mood);

  const recEl = document.getElementById('recommendation');
  if (recEl) setTimeout(function() { recEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 120);
}

// ── RENDER RECOMMENDATION ────────────────────────────────────────────────────
function renderRecommendation(mood) {
  const panel = document.getElementById('recommendation');
  if (!panel) return;
  panel.classList.remove('visible');

  const filter = getFilter();

  // Platform badges
  const platformBadges = mood.platforms.map(function(pid) {
    const url = (typeof platformLinks !== 'undefined' && platformLinks[pid]) ? platformLinks[pid].deals : '#';
    return '<a href="' + url + '" target="_blank" rel="noopener" class="rec-platform-badge" style="background:' + (P_COLORS[pid] || '#ccc') + '">' + (P_NAMES[pid] || pid) + '</a>';
  }).join('');

  // Cuisine tags
  const cuisineTags = mood.cuisines.map(function(c) {
    return '<span class="cuisine-tag">' + c + '</span>';
  }).join('');

  // Dishes with nutrition + hearts
  const dishesHTML = mood.dishes.map(function(dish) {
    const name = typeof dish === 'object' ? dish.name : dish;
    const id   = typeof dish === 'object' ? dish.id : null;
    const nut  = typeof dish === 'object' ? dish.nutrition : null;
    const tier = typeof dish === 'object' ? dish.minTier : 'casual';
    const dimmed = !dishMeetsFilter({ minTier: tier }, filter);
    const saved = id ? isFav('dishes', id) : false;

    let nutHTML = '';
    if (nut) {
      nutHTML = '<div class="dish-nutrition"><span>' + nut.calories + ' cal</span><span>' + nut.protein + 'g protein</span><span>' + nut.carbs + 'g carbs</span><span>' + nut.fat + 'g fat</span><small>' + nut.portion + '</small></div>';
    }
    const heartHTML = id ? '<button class="heart-btn' + (saved ? ' saved' : '') + '" data-type="dishes" data-id="' + id + '" aria-label="Save dish">' + (saved ? '♥' : '♡') + '</button>' : '';
    const dimClass = dimmed ? ' dish-dimmed' : '';

    return '<li class="dish-item' + dimClass + '" data-dish-id="' + (id || '') + '">' +
      '<div class="dish-main"><span class="dish-arrow">→</span><span class="dish-name">' + name + '</span></div>' +
      heartHTML + nutHTML + '</li>';
  }).join('');

  // Restaurant picks
  const cuisineIds = mood.cuisines.map(function(c) { return CUISINE_TO_ID[c.toLowerCase()] || c.toLowerCase(); });
  const matchedRests = (typeof restaurants !== 'undefined' ? restaurants : []).filter(function(r) {
    return cuisineIds.includes(r.cuisine_id) && restaurantMeetsFilter(r, filter);
  }).slice(0, 3);

  let restsHTML = '';
  if (matchedRests.length) {
    const cards = matchedRests.map(function(r) {
      const saved = isFav('restaurants', r.id);
      const tierLabels = { quick_eats: 'Quick eats', cloud_kitchen: 'Cloud kitchen', casual: 'Casual', upscale: 'Upscale ✦', fine: 'Fine dining ✦✦' };
      const tierBadge = '<span class="tier-badge tier-' + r.qualityTier + '">' + (tierLabels[r.qualityTier] || r.qualityTier) + '</span>';
      const platformLinks2 = Object.entries(r.platforms || {}).map(function(entry) {
        const pid = entry[0]; const url = entry[1];
        return '<a href="' + url + '" target="_blank" rel="noopener" class="rest-platform-link" style="border-color:' + (P_COLORS[pid] || '#ccc') + ';color:' + (P_COLORS[pid] || '#ccc') + '">' + (P_NAMES[pid] || pid) + '</a>';
      }).join('');
      return '<div class="rest-card">' +
        '<div class="rest-card-top">' +
          '<div><div class="rest-name">' + r.name + '</div>' + tierBadge + '</div>' +
          '<button class="heart-btn' + (saved ? ' saved' : '') + '" data-type="restaurants" data-id="' + r.id + '" aria-label="Save restaurant">' + (saved ? '♥' : '♡') + '</button>' +
        '</div>' +
        '<div class="rest-specialty">' + r.specialty + '</div>' +
        '<div class="rest-meta"><span class="rest-price">' + r.priceRange + '</span><span class="rest-areas">📍 ' + r.areas.slice(0,2).join(', ') + '</span></div>' +
        '<div class="rest-platforms">' + platformLinks2 + '</div>' +
      '</div>';
    }).join('');
    restsHTML = '<div class="restaurant-picks"><div class="rec-card-title">Where to order from</div><div class="rest-grid">' + cards + '</div></div>';
  } else if (filter !== 'all') {
    restsHTML = '<div class="restaurant-picks filter-warning">No ' + (filter === 'quality' ? 'upscale/fine dining' : 'non-cloud') + ' spots matched for this mood. <button class="filter-reset-btn">Show all places</button></div>';
  }

  // CTA cards
  const ctaHTML = buildCTACards(mood);

  panel.innerHTML =
    '<div class="rec-header">' +
      '<span class="rec-emoji-big">' + mood.emoji + '</span>' +
      '<div><div class="rec-label">Tonight\'s pick</div>' +
      '<div class="rec-title">' + mood.label + '</div>' +
      '<div class="rec-tagline">' + mood.tagline + '</div></div>' +
    '</div>' +
    '<div class="rec-grid">' +
      '<div class="rec-card animate-rec-card">' +
        '<div class="rec-card-title">Order these</div>' +
        '<ul class="rec-dishes">' + dishesHTML + '</ul>' +
      '</div>' +
      '<div class="rec-card animate-rec-card" style="animation-delay:0.08s">' +
        '<div class="rec-card-title">Cuisine vibes</div>' +
        '<div class="cuisine-tags">' + cuisineTags + '</div>' +
        '<div class="rec-card-title" style="margin-top:1rem">Best on</div>' +
        '<div class="rec-platforms">' + platformBadges + '</div>' +
      '</div>' +
    '</div>' +
    restsHTML +
    ctaHTML +
    '<div class="rec-tip"><strong>Dubai tip:</strong> ' + mood.dubaiTip + '</div>';

  // Wire up heart buttons
  panel.querySelectorAll('.heart-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const type = btn.dataset.type;
      const id   = btn.dataset.id;
      const added = toggleFav(type, id);
      btn.textContent = added ? '♥' : '♡';
      btn.classList.toggle('saved', added);
      refreshSavedBadge();
      renderFavDrawer();
    });
  });

  // Wire up filter reset buttons
  panel.querySelectorAll('.filter-reset-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      setFilter('all');
      document.querySelectorAll('.filter-pill').forEach(function(p) {
        p.classList.toggle('active', p.dataset.filterId === 'all');
      });
      renderRecommendation(mood);
    });
  });

  // Wire up WhatsApp share buttons
  panel.querySelectorAll('.cta-share').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const text = decodeURIComponent(btn.dataset.wa || '');
      navigator.clipboard.writeText(text).then(function() {
        const label = btn.querySelector('.cta-copy-label');
        if (label) { label.textContent = 'Copied!'; setTimeout(function() { label.textContent = 'Copy'; }, 2000); }
      }).catch(function() {});
    });
  });

  requestAnimationFrame(function() { requestAnimationFrame(function() { panel.classList.add('visible'); }); });
}

// ── PLATFORM CARDS ───────────────────────────────────────────────────────────
function buildPlatformCards() {
  const container = document.getElementById('platforms-container');
  if (!container) return;
  platforms.forEach(function(p) {
    const card = document.createElement('a');
    card.href = p.url; card.target = '_blank'; card.rel = 'noopener';
    card.className = 'platform-card reveal';
    card.style.setProperty('--platform-color', p.color);
    card.style.borderLeftColor = p.color;
    card.innerHTML =
      '<div class="platform-name" style="color:' + p.color + '">' + p.name + '</div>' +
      '<div class="platform-vibe">' + p.vibe + '</div>' +
      '<div class="platform-best">' + p.bestFor + '</div>' +
      '<div class="platform-meta"><span class="platform-time">⏱ ' + p.deliveryTime + '</span><span class="platform-price">' + p.priceTier + '</span></div>' +
      '<div class="platform-weakness">Heads up: ' + p.weakness + '</div>';
    container.appendChild(card);
  });
}

// ── CUISINE CARDS ────────────────────────────────────────────────────────────
function buildCuisineCards() {
  const container = document.getElementById('cuisines-container');
  if (!container) return;
  cuisines.forEach(function(c, i) {
    const card = document.createElement('div');
    card.className = 'cuisine-card reveal reveal-delay-' + ((i % 4) + 1);
    const platformTags = (c.platforms || []).map(function(pid) {
      return '<span style="background:' + (P_COLORS[pid] || '#ccc') + '20;color:' + (P_COLORS[pid] || '#ccc') + ';font-size:0.7rem;padding:0.2rem 0.5rem;border-radius:100px;font-weight:600">' + (P_NAMES[pid] || pid) + '</span>';
    }).join('');
    card.innerHTML =
      '<div class="cuisine-emoji">' + c.emoji + '</div>' +
      '<div class="cuisine-name">' + c.name + '</div>' +
      '<div class="cuisine-personality">"' + c.personality + '"</div>' +
      '<div class="cuisine-order"><strong>Order this:</strong> ' + c.orderThis + '</div>' +
      '<div class="cuisine-areas"><span class="cuisine-areas-icon">📍</span> ' + c.bestAreas + '</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.75rem">' + platformTags + '</div>';
    container.appendChild(card);
  });
}

// ── FAVORITES DRAWER ─────────────────────────────────────────────────────────
function renderFavDrawer() {
  const drawer = document.getElementById('fav-drawer');
  if (!drawer) return;
  const { restaurants: savedRests = [], dishes: savedDishes = [] } = (function() {
    try { return JSON.parse(localStorage.getItem('adl_favorites') || '{}'); } catch { return {}; }
  })();

  const allDishes = moods.reduce(function(acc, m) {
    m.dishes.forEach(function(d) { if (typeof d === 'object') acc[d.id] = { dish: d, mood: m.label }; });
    return acc;
  }, {});
  const allRests = (typeof restaurants !== 'undefined' ? restaurants : []).reduce(function(acc, r) { acc[r.id] = r; return acc; }, {});

  let html = '<div class="fav-drawer-header"><span class="fav-drawer-title">Saved</span><button class="fav-drawer-close" id="fav-drawer-close">✕</button></div>';

  if (!savedRests.length && !savedDishes.length) {
    html += '<div class="fav-empty">Nothing saved yet.<br>Heart the places and dishes you want.</div>';
  } else {
    if (savedRests.length) {
      html += '<div class="fav-section-title">Saved places</div>';
      savedRests.forEach(function(id) {
        const r = allRests[id];
        if (!r) return;
        const links = Object.entries(r.platforms || {}).map(function(entry) {
          return '<a href="' + entry[1] + '" target="_blank" rel="noopener" style="color:' + (P_COLORS[entry[0]] || '#ccc') + '">' + (P_NAMES[entry[0]] || entry[0]) + '</a>';
        }).join(' · ');
        html += '<div class="fav-item"><div class="fav-item-name">' + r.name + ' <span class="fav-item-price">' + r.priceRange + '</span></div><div class="fav-item-sub">' + links + '</div><button class="fav-remove" data-type="restaurants" data-id="' + id + '">remove</button></div>';
      });
    }
    if (savedDishes.length) {
      html += '<div class="fav-section-title">Saved dishes</div>';
      savedDishes.forEach(function(id) {
        const entry = allDishes[id];
        if (!entry) return;
        html += '<div class="fav-item"><div class="fav-item-name">' + entry.dish.name + '</div><div class="fav-item-sub">' + entry.mood + ' · ' + entry.dish.nutrition.calories + ' cal</div><button class="fav-remove" data-type="dishes" data-id="' + id + '">remove</button></div>';
      });
    }
  }
  drawer.innerHTML = html;

  const closeBtn = document.getElementById('fav-drawer-close');
  if (closeBtn) closeBtn.addEventListener('click', closeFavDrawer);

  drawer.querySelectorAll('.fav-remove').forEach(function(btn) {
    btn.addEventListener('click', function() {
      toggleFav(btn.dataset.type, btn.dataset.id);
      refreshSavedBadge();
      renderFavDrawer();
      if (currentMood) renderRecommendation(moods.find(function(m) { return m.id === currentMood; }));
    });
  });
}

function openFavDrawer() {
  const drawer = document.getElementById('fav-drawer');
  const overlay = document.getElementById('fav-overlay');
  if (drawer)  { renderFavDrawer(); drawer.classList.add('open'); }
  if (overlay) overlay.classList.add('visible');
}

function closeFavDrawer() {
  const drawer = document.getElementById('fav-drawer');
  const overlay = document.getElementById('fav-overlay');
  if (drawer)  drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('visible');
}

export { buildMoodPills, buildStickyChips, buildFilterBar, buildPlatformCards, buildCuisineCards, selectMood, openFavDrawer, refreshSavedBadge };
