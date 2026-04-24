const FAV_KEY = 'adl_favorites';

function loadFavs() {
  try {
    const raw = localStorage.getItem(FAV_KEY);
    return raw ? JSON.parse(raw) : { version: 1, restaurants: [], dishes: [], notes: {} };
  } catch {
    return { version: 1, restaurants: [], dishes: [], notes: {} };
  }
}

function saveFavs(data) {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify({ ...data, saved_at: Date.now() }));
  } catch {}
}

function isFav(type, id) {
  return (loadFavs()[type] || []).includes(id);
}

function toggleFav(type, id) {
  const data = loadFavs();
  if (!Array.isArray(data[type])) data[type] = [];
  const idx = data[type].indexOf(id);
  if (idx === -1) { data[type].push(id); } else { data[type].splice(idx, 1); }
  saveFavs(data);
  return idx === -1;
}

function getFavCount() {
  const d = loadFavs();
  return (d.restaurants || []).length + (d.dishes || []).length;
}

function addNote(type, id, note) {
  const data = loadFavs();
  if (!data.notes) data.notes = {};
  data.notes[type + '_' + id] = note;
  saveFavs(data);
}

export { loadFavs, isFav, toggleFav, getFavCount, addNote };
