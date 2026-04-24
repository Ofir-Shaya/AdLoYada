import { selectMood } from './mood.js';

function initSearch() {
  const input = document.getElementById('site-search');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  function normalize(str) { return str.toLowerCase().trim(); }

  function buildIndex() {
    var index = [];

    // Moods
    (typeof moods !== 'undefined' ? moods : []).forEach(function(m) {
      index.push({ type: 'mood', label: m.emoji + ' ' + m.label, sub: m.tagline, id: m.id });
      m.dishes.forEach(function(d) {
        var name = typeof d === 'object' ? d.name : d;
        var cal  = typeof d === 'object' ? d.nutrition.calories + ' cal' : '';
        index.push({ type: 'dish', label: name, sub: m.label + (cal ? ' · ' + cal : ''), moodId: m.id });
      });
    });

    // Restaurants
    (typeof restaurants !== 'undefined' ? restaurants : []).forEach(function(r) {
      index.push({ type: 'restaurant', label: r.name, sub: r.priceRange + ' · ' + r.areas.slice(0,2).join(', '), id: r.id, url: r.platforms.talabat || r.platforms.deliveroo || '#' });
    });

    // Cuisines
    (typeof cuisines !== 'undefined' ? cuisines : []).forEach(function(c) {
      index.push({ type: 'cuisine', label: c.emoji + ' ' + c.name, sub: c.personality.slice(0, 60) + '…', id: c.id });
    });

    return index;
  }

  var index = [];
  var debounceTimer;

  function doSearch(query) {
    if (!index.length) index = buildIndex();
    var q = normalize(query);
    if (q.length < 2) { results.hidden = true; return; }

    var hits = index.filter(function(item) {
      return normalize(item.label).includes(q) || normalize(item.sub || '').includes(q);
    }).slice(0, 8);

    if (!hits.length) { results.hidden = true; return; }

    var typeIcon = { mood: '🎯', dish: '🍽', restaurant: '📍', cuisine: '🌍' };
    results.innerHTML = hits.map(function(h) {
      return '<div class="search-result-item" data-type="' + h.type + '" data-id="' + (h.id || '') + '" data-mood="' + (h.moodId || '') + '" data-url="' + (h.url || '') + '">' +
        '<span class="sr-icon">' + (typeIcon[h.type] || '') + '</span>' +
        '<div class="sr-body"><div class="sr-label">' + h.label + '</div><div class="sr-sub">' + (h.sub || '') + '</div></div>' +
        '<span class="sr-type">' + h.type + '</span>' +
      '</div>';
    }).join('');

    results.querySelectorAll('.search-result-item').forEach(function(el) {
      el.addEventListener('click', function() {
        var type = el.dataset.type;
        var moodId = el.dataset.mood || el.dataset.id;
        if (type === 'mood' || type === 'dish') {
          selectMood(moodId);
          document.getElementById('mood-section').scrollIntoView({ behavior: 'smooth' });
        } else if (type === 'restaurant') {
          var url = el.dataset.url;
          if (url && url !== '#') window.open(url, '_blank', 'noopener');
        } else if (type === 'cuisine') {
          document.getElementById('cuisines').scrollIntoView({ behavior: 'smooth' });
        }
        results.hidden = true;
        input.value = '';
      });
    });

    results.hidden = false;
  }

  input.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() { doSearch(input.value); }, 180);
  });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { results.hidden = true; input.blur(); }
  });

  document.addEventListener('click', function(e) {
    if (!input.contains(e.target) && !results.contains(e.target)) results.hidden = true;
  });
}

export { initSearch };
