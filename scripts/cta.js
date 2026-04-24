const P_NAMES = { talabat: 'Talabat', deliveroo: 'Deliveroo', noon: 'Noon Food', keeta: 'Keeta', careem: 'Careem' };
const P_COLORS = { talabat: '#FF5A00', deliveroo: '#00CCBC', noon: '#FECC00', keeta: '#FF6B35', careem: '#1DBF73' };

function eta(platformId) {
  const mins = { talabat: 38, deliveroo: 30, noon: 45, keeta: 40, careem: 38 }[platformId] || 35;
  const t = new Date(Date.now() + mins * 60000);
  return t.toLocaleTimeString('en-AE', { hour: '2-digit', minute: '2-digit', hour12: true });
}

function buildCTACards(mood) {
  const p1 = mood.platforms[0];
  const p2 = mood.platforms[1] || p1;
  const firstDish = mood.dishes[0];
  const dishName = typeof firstDish === 'object' ? firstDish.name : firstDish;
  const shortDish = dishName.split(' ').slice(0, 3).join(' ');

  const CUISINE_MAP = { pizza:'italian', burgers:'american', shawarma:'lebanese', thai:'thai' };
  const cuisineIds = mood.cuisines.map(function(c) { var k = c.toLowerCase(); return CUISINE_MAP[k] || k; });
  const matchRest = (typeof restaurants !== 'undefined' ? restaurants : []).find(function(r) {
    return cuisineIds.includes(r.cuisine_id);
  });

  const searchUrl = (typeof platformLinks !== 'undefined' && platformLinks[p1])
    ? platformLinks[p1].search(shortDish) : '#';
  const dealsUrl = (typeof platformLinks !== 'undefined' && platformLinks[p2])
    ? platformLinks[p2].deals : '#';

  const menuCard = matchRest ? `
    <a href="${matchRest.platforms.deliveroo || matchRest.platforms.talabat || '#'}" target="_blank" rel="noopener" class="cta-card" data-adl-cta="menu" style="--cta-color:${P_COLORS[p1] || '#F4A026'}">
      <div class="cta-icon">🧾</div>
      <div class="cta-body">
        <div class="cta-headline">Live menu at ${matchRest.name}</div>
        <div class="cta-sub">${matchRest.knownFor}</div>
      </div>
      <span class="cta-arrow">→</span>
    </a>` : '';

  const waText = matchRest
    ? 'Ordering from ' + matchRest.name + ' tonight\n- ' + dishName + '\n\nWho\'s in? 🙋'
    : 'Ordering ' + dishName + ' tonight\n\nWho\'s in? 🙋';

  return `<div class="cta-cards">
    <a href="${searchUrl}" target="_blank" rel="noopener" class="cta-card" data-adl-cta="search" style="--cta-color:${P_COLORS[p1] || '#F4A026'}">
      <div class="cta-icon">🔍</div>
      <div class="cta-body">
        <div class="cta-headline">${shortDish} on ${P_NAMES[p1]}</div>
        <div class="cta-sub">Pre-sorted by delivery time · ETA ~${eta(p1)}</div>
      </div>
      <span class="cta-arrow">→</span>
    </a>
    <a href="${dealsUrl}" target="_blank" rel="noopener" class="cta-card" data-adl-cta="deals" style="--cta-color:${P_COLORS[p2] || '#F4A026'}">
      <div class="cta-icon">🔥</div>
      <div class="cta-body">
        <div class="cta-headline">Today's deals on ${P_NAMES[p2]}</div>
        <div class="cta-sub">Some of our picks have active offers right now</div>
      </div>
      <span class="cta-arrow">→</span>
    </a>
    ${menuCard}
    <button class="cta-card cta-share" data-wa="${encodeURIComponent(waText)}" style="--cta-color:#25D366">
      <div class="cta-icon">📲</div>
      <div class="cta-body">
        <div class="cta-headline">Copy group order message</div>
        <div class="cta-sub">Paste into your WhatsApp chat. Done.</div>
      </div>
      <span class="cta-arrow cta-copy-label">Copy</span>
    </button>
  </div>`;
}

export { buildCTACards };
