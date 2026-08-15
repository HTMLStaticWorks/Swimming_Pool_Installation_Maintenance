/**
 * HYDROWAVE — SERVICES CATALOGUE
 * Catalogue rendering, category + ground-type filtering, search, sort,
 * pool specification accordions, and site-visit consultation booking flow.
 */

// ==========================================
// CATALOGUE IMAGES (Data URIs for instant premium vector rendering)
// ==========================================
const IMG = {
  fiberglassShell: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23e8f1f5"/><rect x="50" y="60" width="400" height="280" rx="30" fill="%230ea5e9" stroke="%23ffffff" stroke-width="10"/><path d="M 100 90 L 160 90 M 100 120 L 140 120 M 100 150 L 120 150" stroke="%23ffffff" stroke-width="6" stroke-linecap="round"/><path d="M 60 200 C 150 220 350 220 440 200" stroke="rgba(255,255,255,0.4)" stroke-width="4" fill="none"/></svg>',
  concreteShell: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23dbe7ee"/><path d="M 80 120 C 100 60, 400 60, 420 150 C 440 240, 260 340, 180 320 C 100 300, 60 180, 80 120 Z" fill="%230ea5e9" stroke="%23ffffff" stroke-width="10"/><path d="M 110 140 L 160 110" stroke="%23ffffff" stroke-width="6" stroke-linecap="round"/><path d="M 120 160 L 170 130" stroke="%23ffffff" stroke-width="6" stroke-linecap="round"/></svg>',
  plungeShell: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23e8f1f5"/><rect x="100" y="60" width="300" height="280" rx="20" fill="%230082c8" stroke="%23ffffff" stroke-width="10"/><rect x="130" y="90" width="240" height="70" rx="10" fill="rgba(255,255,255,0.25)"/></svg>',
  soilExc: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23e8f1f5"/><path d="M 50 300 L 450 300 L 410 150 L 90 150 Z" fill="%238c6239" opacity="0.7"/><path d="M 150 250 L 350 250" stroke="%23ffffff" stroke-width="6" stroke-linecap="round"/></svg>',
  rockExc: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23dbe7ee"/><path d="M 50 320 L 450 320 L 410 180 L 90 180 Z" fill="%23545b62"/><path d="M 120 280 L 160 220 L 220 260 L 280 200 L 340 280" stroke="%23ffc107" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  slopeExc: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23e8f1f5"/><path d="M 50 120 L 450 280 L 450 350 L 50 350 Z" fill="%237c8f7b" opacity="0.8"/><rect x="280" y="220" width="120" height="100" fill="%23b2bec3" stroke="%2395a5a6" stroke-width="4"/></svg>',
  narrowExc: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23e8f1f5"/><path d="M 180 80 L 320 80 L 320 320 L 180 320 Z" fill="%23b2bec3" opacity="0.5"/><rect x="210" y="120" width="80" height="160" rx="10" fill="%23ffc107" stroke="%23e0a800" stroke-width="4"/></svg>',
  sandFilter: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23e8f1f5"/><circle cx="250" cy="220" r="110" fill="%237f8c8d" stroke="%2334495e" stroke-width="8"/><rect x="230" y="60" width="40" height="60" fill="%232c3e50"/><path d="M 210 110 L 290 110" stroke="%2334495e" stroke-width="6"/></svg>',
  ecoPump: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23dbe7ee"/><rect x="120" y="160" width="160" height="140" rx="10" fill="%232d3436"/><rect x="280" y="190" width="110" height="100" rx="50" fill="%2314b8a6"/><path d="M 200 160 L 200 100 H 250" stroke="%232d3436" stroke-width="12" stroke-linecap="round"/></svg>',
  roboCleaner: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23e8f1f5"/><rect x="140" y="140" width="220" height="140" rx="30" fill="%230ea5e9" stroke="%230082c8" stroke-width="8"/><circle cx="180" cy="280" r="30" fill="%232d3436"/><circle cx="320" cy="280" r="30" fill="%232d3436"/><path d="M 170 140 L 250 80 L 330 140" stroke="%23ffffff" stroke-width="8" fill="none" stroke-linecap="round"/></svg>',
  basicSeason: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23e8f1f5"/><rect x="150" y="80" width="200" height="260" rx="10" fill="%23ffffff" stroke="%23b2bec3" stroke-width="6"/><path d="M 180 140 L 220 180 L 320 100" stroke="%2314b8a6" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M 180 230 L 220 270 L 320 190" stroke="%2314b8a6" stroke-width="8" stroke-linecap="round" fill="none"/></svg>',
  weeklyCare: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" fill="none"><rect width="500" height="400" fill="%23dbe7ee"/><rect x="150" y="80" width="200" height="260" rx="10" fill="%23ffffff" stroke="%23b2bec3" stroke-width="6"/><path d="M 190 130 H 310 M 190 180 H 310 M 190 230 H 310 M 190 280 H 260" stroke="%230ea5e9" stroke-width="6" stroke-linecap="round"/><path d="M 130 60 H 370" stroke="%230ea5e9" stroke-width="8" stroke-linecap="round"/></svg>'
};

const PRODUCTS = [
  {
    id: 'fiberglass-pool-shell',
    name: 'Bespoke Fiberglass Shell',
    category: 'shells',
    categoryLabel: 'Pool Shells',
    tagline: 'Premium pre-molded fiberglass shell. Fast installation, ultra-smooth finish, and algae-resistant gelcoat.',
    size: '10m x 4m',
    price: 18000,
    rating: 4.9,
    reviews: 142,
    badge: 'Popular',
    featured: 1,
    skin: ['soil', 'narrow'],
    concerns: ['recreation', 'easy'],
    img: IMG.fiberglassShell,
    tint: 'rose',
    focus: '50% 50%',
    actives: [
      { name: 'Gelcoat Finish', pct: '100%', role: 'Smooth, non-porous finish that reduces chemical usage.' },
      { name: 'Structural Core', pct: 'Composite', role: 'Woven fiberglass roving with high tensile strength.' },
      { name: 'Warranty', pct: 'Lifetime', role: 'Full structural warranty on pool shell integrity.' }
    ],
    base: 'ISO-NPG Gelcoat, Vinyl Ester Resin, Fiberglass Roving, Coremat Reinforcement.',
    freeFrom: ['Algae Stains', 'Osmotic Blistering', 'Rough Seams'],
    ph: '7.2 - 7.6 (ideal pool chemistry)',
    patch: 'Designed for daily recreational use. Low maintenance required.'
  },
  {
    id: 'concrete-custom-shell',
    name: 'Concrete Custom Shell',
    category: 'shells',
    categoryLabel: 'Pool Shells',
    tagline: 'Custom-engineered concrete/gunite shell. Crafted to any bespoke size, layout, or depth configuration.',
    size: 'Custom Size',
    price: 26000,
    rating: 5.0,
    reviews: 98,
    badge: 'Premium',
    featured: 2,
    skin: ['soil', 'rock', 'slope'],
    concerns: ['aesthetic', 'exercise'],
    img: IMG.concreteShell,
    tint: 'sage',
    focus: '50% 50%',
    actives: [
      { name: 'Rebar Reinforcement', pct: 'Grade 60', role: 'Heavy-duty steel cage construction.' },
      { name: 'Gunite Concrete', pct: '4000 PSI', role: 'High-density, structurally engineered concrete.' },
      { name: 'Bespoke Tiling', pct: 'Waterline', role: 'Waterline glass tiling accents in various shades.' }
    ],
    base: 'Shotcrete/Gunite, Grade 60 Steel Rebar, Waterline Plaster, Glass/Ceramic water-tiles.',
    freeFrom: ['Shape Limits', 'Access Restrictions', 'Settling cracks'],
    ph: '7.2 - 7.6',
    patch: 'Requires plaster or aggregate interior finish. Built to last generations.'
  },
  {
    id: 'plunge-pool-shell',
    name: 'Compact Plunge Shell',
    category: 'shells',
    categoryLabel: 'Pool Shells',
    tagline: 'Pre-cast concrete plunge shell. Perfect for small properties, courtyards, and narrow setbacks.',
    size: '4m x 2.5m',
    price: 12000,
    rating: 4.8,
    reviews: 74,
    badge: 'Compact',
    featured: 3,
    skin: ['narrow', 'soil'],
    concerns: ['easy', 'recreation'],
    img: IMG.plungeShell,
    tint: 'cream',
    focus: '50% 50%',
    actives: [
      { name: 'Pre-Cast Concrete', pct: '5000 PSI', role: 'Manufactured under controlled conditions for supreme strength.' },
      { name: 'Integrated Bench', pct: 'Seating', role: 'Molded bench seating for relaxation and soaking.' },
      { name: 'Fast Installation', pct: 'Crane-In', role: 'Delivered complete and craned directly into position.' }
    ],
    base: 'Reinforced Pre-cast Concrete, Glass Pearl Interior Finish, Integrated Pool Fittings.',
    freeFrom: ['Long Excavations', 'Yard disruption', 'Wasted space'],
    ph: '7.2 - 7.6',
    patch: 'Excellent space saver. Easily heated for year-round spa use.'
  },
  {
    id: 'soil-excavation',
    name: 'Soil Site Excavation',
    category: 'excavations',
    categoryLabel: 'Excavation',
    tagline: 'Standard earth excavation and dirt removal. Best for flat yards with standard soil or clay ground.',
    size: 'Standard Yard',
    price: 3500,
    rating: 4.7,
    reviews: 182,
    badge: '',
    featured: 4,
    skin: ['soil'],
    concerns: ['recreation', 'easy', 'exercise', 'aesthetic'],
    img: IMG.soilExc,
    tint: 'amber',
    focus: '50% 50%',
    actives: [
      { name: 'Precision Digging', pct: 'Laser-guided', role: 'Ensures exact shell depth and level installation.' },
      { name: 'Soil Hauling', pct: '100% Cleared', role: 'Removal and disposal of excavated soil and grass.' },
      { name: 'Access Mats', pct: 'Protection', role: 'Protective ground boards to shield remaining lawn.' }
    ],
    base: 'Excavation machinery, dirt haulers, level lasers.',
    freeFrom: ['Hidden fees', 'Lawn damage', 'Dig errors'],
    ph: 'n/a',
    patch: 'Requires a minimum 2.5-meter entry gate clearance.'
  },
  {
    id: 'rock-excavation',
    name: 'Rocky Terrain Excavation',
    category: 'excavations',
    categoryLabel: 'Excavation',
    tagline: 'Heavy site preparation utilizing hydraulic rock hammers to break rock and shale deposits.',
    size: 'Rocky Yard',
    price: 6500,
    rating: 4.9,
    reviews: 56,
    badge: 'Specialist',
    featured: 5,
    skin: ['rock'],
    concerns: ['recreation', 'easy', 'exercise', 'aesthetic'],
    img: IMG.rockExc,
    tint: 'sage',
    focus: '50% 50%',
    actives: [
      { name: 'Hydraulic Hammering', pct: '3-Ton', role: 'Breaks down sandstone, granite, or bedrock.' },
      { name: 'Shoring Walls', pct: 'Safety', role: 'Bracing gravel and loose rock layers during excavating.' },
      { name: 'Rock Hauling', pct: 'Disposal', role: 'Transport and disposal of heavy stone debris.' }
    ],
    base: 'Excavator rock-hammer attachment, shoring structures, dump trucks.',
    freeFrom: ['Cave-ins', 'Delays', 'Equipment failure'],
    ph: 'n/a',
    patch: 'Recommended for yards located on rocky ridges or coastal areas.'
  },
  {
    id: 'slope-excavation',
    name: 'Sloped Yard Excavation',
    category: 'excavations',
    categoryLabel: 'Excavation',
    tagline: 'Terraced excavation designed for sloped properties. Prepares ground for retaining walls.',
    size: 'Sloped Yard',
    price: 8000,
    rating: 4.8,
    reviews: 64,
    badge: 'Engineering',
    featured: 6,
    skin: ['slope'],
    concerns: ['aesthetic', 'recreation'],
    img: IMG.slopeExc,
    tint: 'rose',
    focus: '50% 50%',
    actives: [
      { name: 'Terracing Excavation', pct: 'Multi-level', role: 'Cuts and fills slope to establish level pools.' },
      { name: 'Drainage Grading', pct: 'Structural', role: 'Diverts ground runoff water away from pool foundations.' },
      { name: 'Wall Anchors', pct: 'Preparation', role: 'Pre-drilling foundations for retaining structural support.' }
    ],
    base: 'Caterpillar excavators, drainage conduits, earth-anchor drills.',
    freeFrom: ['Slop slides', 'Runoff pooling', 'Foundation shifting'],
    ph: 'n/a',
    patch: 'Requires geotechnical survey and civil engineering plans.'
  },
  {
    id: 'narrow-access-excavation',
    name: 'Narrow Access Excavation',
    category: 'excavations',
    categoryLabel: 'Excavation',
    tagline: 'Micro-excavation designed for urban properties with side gates under 1.5 meters.',
    size: 'Tight Access',
    price: 4800,
    rating: 4.6,
    reviews: 41,
    badge: 'Urban',
    featured: 7,
    skin: ['narrow'],
    concerns: ['easy', 'aesthetic'],
    img: IMG.narrowExc,
    tint: 'cream',
    focus: '50% 50%',
    actives: [
      { name: 'Micro Machinery', pct: '1.2-Tonne', role: 'Compact excavator fitted with rubber tracks.' },
      { name: 'Utility Locating', pct: 'Precision', role: 'Detailed hand-digging around plumbing/power.' },
      { name: 'Conveyor Transport', pct: 'Muck-out', role: 'Automated conveyor belts to haul dirt out.' }
    ],
    base: 'Micro excavators, conveyor transport grids, hand tools.',
    freeFrom: ['Wall demolition', 'Property line disputes', 'Lawn collapse'],
    ph: 'n/a',
    patch: 'Fits through standard domestic doorways and garden gates.'
  },
  {
    id: 'aquaflow-sand-filter',
    name: 'AquaFlow ECO Sand Filter',
    category: 'equipment',
    categoryLabel: 'Pool Equipment',
    tagline: 'High-performance filtration system utilizing eco glass media for ultra-clear pool water.',
    size: '24" Tank',
    price: 950,
    rating: 4.8,
    reviews: 219,
    badge: 'Essential',
    featured: 8,
    skin: ['soil', 'rock', 'slope', 'narrow'],
    concerns: ['easy', 'recreation'],
    img: IMG.sandFilter,
    tint: 'amber',
    focus: '50% 50%',
    actives: [
      { name: 'Eco Glass Media', pct: 'Active', role: 'Filters down to 5 microns (compared to 20 for sand).' },
      { name: 'Multi-port Valve', pct: '6-Way', role: 'Easy dial settings for backwash, rinse, filter.' },
      { name: 'Fiberglass Tank', pct: 'Reinforced', role: 'Tough, UV-proof body built for hot climates.' }
    ],
    base: 'High-density Polyethylene, Activated Glass Pearls, Stainless clamp rings.',
    freeFrom: ['Cloudy water', 'Frequent sand replacement', 'High pressure drops'],
    ph: 'n/a',
    patch: 'Requires backwashing once a month. Glass media lasts up to 10 years.'
  },
  {
    id: 'aquaspeed-variable-pump',
    name: 'AquaSpeed ECO Pump',
    category: 'equipment',
    categoryLabel: 'Pool Equipment',
    tagline: 'High-efficiency, variable speed circulation pump. Quiet operation, saving up to 70% energy costs.',
    size: '1.5 HP ECO',
    price: 1200,
    rating: 4.9,
    reviews: 167,
    badge: 'Best seller',
    featured: 9,
    skin: ['soil', 'rock', 'slope', 'narrow'],
    concerns: ['easy', 'exercise', 'aesthetic'],
    img: IMG.ecoPump,
    tint: 'sage',
    focus: '50% 50%',
    actives: [
      { name: 'Variable Speed Motor', pct: 'ECO-Smart', role: 'Adjusts RPM dynamically for low-energy filtering.' },
      { name: 'WhisperQuiet Tech', pct: '45 dBA', role: 'Double-walled pump body reduces motor hum.' },
      { name: 'Pre-Filter Basket', pct: 'Oversized', role: 'Catches leaves and reduces cleaning frequency.' }
    ],
    base: 'Cast aluminum motor body, Noryl impeller, clear polycarbonate strainer lid.',
    freeFrom: ['Noise pollution', 'Huge energy bills', 'Dry run damage'],
    ph: 'n/a',
    patch: 'Energy Star certified. Compatible with all automated sanitizers.'
  },
  {
    id: 'roboclimb-smart-cleaner',
    name: 'RoboClimb Smart Cleaner',
    category: 'equipment',
    categoryLabel: 'Pool Equipment',
    tagline: 'Automated electric pool vacuum crawler. Climbs and scrubs floor, walls, and waterline.',
    size: 'All Surfaces',
    price: 1400,
    rating: 4.8,
    reviews: 132,
    badge: 'Automation',
    featured: 10,
    skin: ['soil', 'rock', 'slope', 'narrow'],
    concerns: ['easy', 'recreation'],
    img: IMG.roboCleaner,
    tint: 'rose',
    focus: '50% 50%',
    actives: [
      { name: 'Wall Climbing Scrub', pct: 'Active', role: 'Dual scrubbing brushes remove organic slime.' },
      { name: 'Cartridge Filtration', pct: 'Ultra-fine', role: 'Collects fine dust, sand, and large leaf debris.' },
      { name: 'App Control', pct: 'Wi-Fi', role: 'Schedule cleaning routines and steer cleaner remotely.' }
    ],
    base: 'High-torque traction motors, active scrubbing rollers, pleated cartridges.',
    freeFrom: ['Manual vacuuming', 'Clogged wall lines', 'Boost pumps'],
    ph: 'n/a',
    patch: 'Plug & Play operation. Clean filters weekly for maximum suction.'
  },
  {
    id: 'basic-season-prep',
    name: 'Seasonal Open/Close Plan',
    category: 'service',
    categoryLabel: 'Maintenance',
    tagline: 'Annual plan featuring professional pool opening in spring and winter closing prep.',
    size: 'Annual Plan',
    price: 800,
    rating: 4.7,
    reviews: 110,
    badge: 'Basic Care',
    featured: 11,
    skin: ['soil', 'rock', 'slope', 'narrow'],
    concerns: ['recreation', 'exercise'],
    img: IMG.basicSeason,
    tint: 'cream',
    focus: '50% 50%',
    actives: [
      { name: 'Winterization Prep', pct: 'Autumn', role: 'Blowing pool plumbing lines and adding anti-freeze.' },
      { name: 'Spring Reopening', pct: 'Spring', role: 'Removing winter covers, starting pump systems.' },
      { name: 'Chemical Treatment', pct: 'Opening', role: 'Initial high-strength shock treatment to balance water.' }
    ],
    base: 'Water winterizer chemicals, freeze plugs, shock sanitizers.',
    freeFrom: ['Frozen pipes', 'Green spring swamp', 'Equipment lockups'],
    ph: '7.2 - 7.6',
    patch: 'Includes booking priority for opening/closing appointments.'
  },
  {
    id: 'ultimate-weekly-care',
    name: 'Weekly Premium Service',
    category: 'service',
    categoryLabel: 'Maintenance',
    tagline: 'Full maintenance program: weekly cleaning, chemical balancing, and chemical supplies included.',
    size: 'Annual Service',
    price: 2800,
    rating: 4.9,
    reviews: 198,
    badge: 'Maintenance',
    featured: 12,
    skin: ['soil', 'rock', 'slope', 'narrow'],
    concerns: ['easy', 'aesthetic'],
    img: IMG.weeklyCare,
    tint: 'rose',
    focus: '50% 50%',
    actives: [
      { name: 'Weekly Water Test', pct: '7-Point', role: 'Digital analysis of chlorine, pH, alkalinity, hardness.' },
      { name: 'Debris Vacuuming', pct: 'Manual', role: 'Netting surface, vacuuming floor, brushing pool walls.' },
      { name: 'Chemical Supplies', pct: 'Unlimited', role: 'All chlorine, pH adjusters, and shock included.' }
    ],
    base: 'Liquid chlorine, pH increments, sanitizing shock, brushing tools.',
    freeFrom: ['Water testing guesswork', 'Chemical shopping', 'Green pool anxiety'],
    ph: '7.4 (target)',
    patch: 'Service reports sent via email immediately after every visit.'
  }
];

const SKIN_LABELS = {
  all: 'All ground types',
  soil: 'Standard Soil',
  rock: 'Rocky Ground',
  slope: 'Sloped Yard',
  narrow: 'Narrow Access'
};

// Current view state
const state = {
  category: 'all',
  skin: 'all',
  concern: 'all',
  sort: 'featured',
  search: ''
};

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('productsGrid')) return;
  bindControls();
  applyFilters();
  initEnquiryModal();
  initConsultForm();
  readQueryParams();
});

// ==========================================
// RENDERING
// ==========================================
function starMarkup(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let out = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) out += '<i class="ph-fill ph-star"></i>';
    else if (i === full && half) out += '<i class="ph-fill ph-star-half"></i>';
    else out += '<i class="ph ph-star"></i>';
  }
  return out;
}

function productCard(p, index) {
  const skinChips = p.skin
    .map(s => `<span class="skin-pill">${SKIN_LABELS[s] || s}</span>`)
    .join('');

  const actives = p.actives.map(a => `
        <li class="ingredient-row">
          <div class="ingredient-head">
            <span class="ingredient-name">${a.name}</span>
            <span class="ingredient-pct">${a.pct}</span>
          </div>
          <span class="ingredient-desc">${a.role}</span>
        </li>`).join('');

  const freeFrom = p.freeFrom
    .map(f => `<span class="free-chip"><i class="ph ph-prohibit"></i>${f}</span>`)
    .join('');

  const delay = `delay-${(index % 4) + 1}`;

  return `
  <article class="product-card animate-on-scroll ${delay}" data-id="${p.id}" data-category="${p.category}"
           data-skin-types="${p.skin.join(',')}" data-concerns="${p.concerns.join(',')}">
    <div class="product-img-wrapper tint-${p.tint}">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <span class="product-size">${p.size}</span>
      <img src="${p.img}" alt="${p.name}" loading="lazy" style="object-position:${p.focus}">
    </div>

    <span class="product-tag">${p.categoryLabel}</span>
    <h3 class="product-title">${p.name}</h3>

    <div class="product-rating">
      <span class="stars">${starMarkup(p.rating)}</span>
      <span>${p.rating.toFixed(1)} <span class="text-faint">(${p.reviews})</span></span>
    </div>

    <p class="product-desc">${p.tagline}</p>

    <div class="skin-pill-row" aria-label="Suits these ground types">${skinChips}</div>

    <div class="product-foot">
      <span class="product-price">$${p.price}</span>
      <button class="btn btn-primary btn-sm enquire-btn" data-product="${p.name}">Enquire</button>
    </div>

    <div class="ingredient-accordion">
      <button class="accordion-toggle" aria-expanded="false">
        <span><i class="ph ph-wrench"></i> What's included / Specs</span>
        <i class="ph ph-caret-down"></i>
      </button>
      <div class="accordion-content">
        <div class="accordion-content-inner">
          <p class="ingredient-label">Key Specifications</p>
          <ul class="ingredient-list">${actives}</ul>

          <p class="ingredient-label">Free From / Guarantees</p>
          <div class="free-row">${freeFrom}</div>

          <div class="ingredient-meta">
            <span><i class="ph ph-drop-half"></i> pH Limit: ${p.ph}</span>
            <span><i class="ph ph-shield-check"></i> ${p.patch}</span>
          </div>

          <p class="ingredient-label">Material Composition</p>
          <p class="inci-text">${p.base}</p>
        </div>
      </div>
    </div>
  </article>`;
}

function render(list) {
  const grid = document.getElementById('productsGrid');
  const empty = document.getElementById('emptyState');
  const count = document.getElementById('resultCount');

  grid.innerHTML = list.map(productCard).join('');

  if (count) {
    count.textContent = list.length === 1
      ? '1 item'
      : `${list.length} items`;
  }

  if (empty) empty.style.display = list.length ? 'none' : 'block';

  initAccordions();
  revealCards();
}

// Cards are injected after the global observer has run, so reveal them here.
function revealCards() {
  const cards = document.querySelectorAll('#productsGrid .animate-on-scroll');
  if (!('IntersectionObserver' in window)) {
    cards.forEach(c => c.classList.add('fade-in-up'));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  cards.forEach(c => io.observe(c));
}

// ==========================================
// FILTER / SORT
// ==========================================
function applyFilters() {
  const term = state.search.trim().toLowerCase();

  let list = PRODUCTS.filter(p => {
    if (state.category !== 'all' && p.category !== state.category) return false;
    if (state.skin !== 'all' && !p.skin.includes(state.skin)) return false;
    if (state.concern !== 'all' && !p.concerns.includes(state.concern)) return false;

    if (term) {
      const haystack = [
        p.name, p.tagline, p.categoryLabel, p.base,
        p.actives.map(a => a.name).join(' ')
      ].join(' ').toLowerCase();
      if (!haystack.includes(term)) return false;
    }
    return true;
  });

  switch (state.sort) {
    case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
    case 'price-desc': list.sort((a, b) => b.price - a.price); break;
    case 'rating':     list.sort((a, b) => b.rating - a.rating); break;
    default:           list.sort((a, b) => a.featured - b.featured);
  }

  render(list);
  updateActiveSummary();
}

function updateActiveSummary() {
  const el = document.getElementById('activeFilters');
  if (!el) return;

  const bits = [];
  if (state.category !== 'all') {
    const cat = PRODUCTS.find(p => p.category === state.category);
    bits.push({ key: 'category', label: cat ? cat.categoryLabel : state.category });
  }
  if (state.skin !== 'all') bits.push({ key: 'skin', label: SKIN_LABELS[state.skin] });
  if (state.concern !== 'all') bits.push({ key: 'concern', label: titleCase(state.concern) });
  if (state.search.trim()) bits.push({ key: 'search', label: `“${state.search.trim()}”` });

  el.innerHTML = bits.length
    ? bits.map(b => `<button class="active-filter" data-clear="${b.key}">${b.label} <i class="ph ph-x"></i></button>`).join('') +
      `<button class="active-filter clear-all" data-clear="all">Clear all</button>`
    : '';

  el.querySelectorAll('[data-clear]').forEach(btn => {
    btn.addEventListener('click', () => clearFilter(btn.dataset.clear));
  });
}

function clearFilter(key) {
  if (key === 'all') {
    state.category = 'all';
    state.skin = 'all';
    state.concern = 'all';
    state.search = '';
  } else if (key === 'search') {
    state.search = '';
  } else {
    state[key] = 'all';
  }
  syncControls();
  applyFilters();
}

function titleCase(str) {
  if (str === 'recreation') return 'Family Recreation';
  if (str === 'aesthetic') return 'Luxury & Aesthetics';
  if (str === 'exercise') return 'Fitness & Lap Swimming';
  if (str === 'easy') return 'Low-Maintenance';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Push state back into the visible controls
function syncControls() {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === state.skin);
  });
  document.querySelectorAll('.category-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.category === state.category);
  });
  const concern = document.getElementById('concernSelect');
  if (concern) concern.value = state.concern;
  const sort = document.getElementById('sortSelect');
  if (sort) sort.value = state.sort;
  const search = document.getElementById('productSearch');
  if (search) search.value = state.search;
}

function bindControls() {
  // Ground-type chips
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.skin = btn.dataset.filter;
      syncControls();
      applyFilters();
    });
  });

  // Category tabs + category cards
  document.querySelectorAll('.category-tab, .category-jump').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      state.category = btn.dataset.category;
      syncControls();
      applyFilters();
      const grid = document.getElementById('catalogue');
      if (grid && btn.classList.contains('category-jump')) {
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const concern = document.getElementById('concernSelect');
  if (concern) concern.addEventListener('change', () => {
    state.concern = concern.value;
    applyFilters();
  });

  const sort = document.getElementById('sortSelect');
  if (sort) sort.addEventListener('change', () => {
    state.sort = sort.value;
    applyFilters();
  });

  const search = document.getElementById('productSearch');
  if (search) {
    let t;
    search.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        state.search = search.value;
        applyFilters();
      }, 200);
    });
  }

  const reset = document.getElementById('resetFilters');
  if (reset) reset.addEventListener('click', () => clearFilter('all'));
}

// Allow deep links like services.html?category=shells&skin=soil
function readQueryParams() {
  const params = new URLSearchParams(window.location.search);
  let touched = false;

  const cat = params.get('category');
  if (cat && PRODUCTS.some(p => p.category === cat)) { state.category = cat; touched = true; }

  const skin = params.get('skin');
  if (skin && SKIN_LABELS[skin]) { state.skin = skin; touched = true; }

  if (touched) {
    syncControls();
    applyFilters();
  }
}

// ==========================================
// SPECIFICATION ACCORDIONS
// ==========================================
function initAccordions() {
  document.querySelectorAll('.accordion-toggle').forEach(acc => {
    if (acc.dataset.bound) return;
    acc.dataset.bound = 'true';

    acc.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const isOpen = this.classList.toggle('active');
      this.setAttribute('aria-expanded', String(isOpen));
      content.style.maxHeight = isOpen ? content.scrollHeight + 'px' : null;
    });
  });
}

// ==========================================
// SITE CONSULTATION / ENQUIRY MODAL
// ==========================================
function initEnquiryModal() {
  const overlay = document.getElementById('enquiryModal');
  if (!overlay) return;

  const closeEls = overlay.querySelectorAll('[data-close-modal]');
  const productField = document.getElementById('enquiryProduct');
  const note = document.getElementById('enquiryNote');
  const form = document.getElementById('enquiryForm');

  function open(productName) {
    if (productField) productField.value = productName || 'General enquiry';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    const first = overlay.querySelector('input:not([readonly]), textarea');
    if (first) setTimeout(() => first.focus(), 260);
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (note) note.classList.remove('show');
    if (form) form.reset();
    form && form.querySelectorAll('.form-group').forEach(g => g.classList.remove('invalid'));
    form && form.querySelectorAll('.form-control').forEach(c => c.classList.remove('form-error'));
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('.enquire-btn');
    if (btn) open(btn.dataset.product);
  });

  closeEls.forEach(el => el.addEventListener('click', close));
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) close();
  });

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validateForm(form)) return;
      if (note) {
        note.innerHTML = '<i class="ph ph-check-circle"></i> Thanks — our pool design team will reply within one working day.';
        note.classList.add('show');
      }
      form.reset();
      if (productField) productField.value = productField.defaultValue;
      setTimeout(close, 2600);
    });
  }
}

// ==========================================
// SITE VISIT FORM
// ==========================================
function initConsultForm() {
  const form = document.getElementById('consultForm');
  if (!form) return;

  const note = document.getElementById('consultNote');

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateForm(form)) return;

    if (note) {
      note.innerHTML = '<i class="ph ph-check-circle"></i> Your site visit request is in. Our engineering team will contact you to schedule within 48 hours.';
      note.classList.add('show');
      note.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    form.reset();
  });

  // Clear the error state as soon as the field looks right
  form.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('input', () => {
      if (field.classList.contains('form-error') && fieldIsValid(field)) {
        field.classList.remove('form-error');
        field.closest('.form-group').classList.remove('invalid');
      }
    });
  });
}

// ==========================================
// SHARED VALIDATION
// ==========================================
function fieldIsValid(field) {
  const value = field.value.trim();
  if (field.hasAttribute('required') && !value) return false;
  if (field.type === 'email' && value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }
  return true;
}

function validateForm(form) {
  let ok = true;

  form.querySelectorAll('.form-control[required], .form-control[type="email"]').forEach(field => {
    const group = field.closest('.form-group');
    if (fieldIsValid(field)) {
      field.classList.remove('form-error');
      group && group.classList.remove('invalid');
    } else {
      field.classList.add('form-error');
      group && group.classList.add('invalid');
      if (ok) field.focus();
      ok = false;
    }
  });

  return ok;
}
