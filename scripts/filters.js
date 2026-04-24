const FILTER_KEY = 'adl_quality_filter';
const TIER_ORDER = ['quick_eats', 'cloud_kitchen', 'casual', 'upscale', 'fine'];

function getFilter() {
  return localStorage.getItem(FILTER_KEY) || 'all';
}

function setFilter(val) {
  localStorage.setItem(FILTER_KEY, val);
}

function restaurantMeetsFilter(r, filter) {
  if (filter === 'all') return true;
  if (filter === 'quality') return !r.isCloudKitchen && (r.qualityTier === 'upscale' || r.qualityTier === 'fine');
  if (filter === 'no-cloud') return !r.isCloudKitchen && r.qualityTier !== 'quick_eats';
  return true;
}

function dishMeetsFilter(dish, filter) {
  if (filter === 'all') return true;
  const tier = dish.minTier || 'casual';
  const idx = TIER_ORDER.indexOf(tier);
  if (filter === 'quality') return idx >= TIER_ORDER.indexOf('upscale');
  if (filter === 'no-cloud') return idx >= TIER_ORDER.indexOf('casual');
  return true;
}

export { getFilter, setFilter, restaurantMeetsFilter, dishMeetsFilter };
