/**
 * HYDROWAVE — HOME PAGE SCRIPTS
 * Interactive pool planner: pick a ground type and a design focus, and the
 * catalogue is scored live to build a custom four-step installation plan.
 */

const ROUTINE_CATALOGUE = [
  {
    name: 'Bespoke Fiberglass Shell',
    step: 'Shell',
    category: 'shells',
    price: 18000,
    hero: '10m x 4m · Algae-resistant',
    skin: ['soil', 'narrow'],
    concerns: ['recreation', 'easy'],
    why: 'Premium fiberglass mold that goes in quickly and resists algae growth.'
  },
  {
    name: 'Concrete Custom Shell',
    step: 'Shell',
    category: 'shells',
    price: 26000,
    hero: 'Bespoke size · Structural Gunite',
    skin: ['soil', 'rock', 'slope'],
    concerns: ['aesthetic', 'exercise'],
    why: 'Ultimate design flexibility. Double-reinforced shell crafted to any shape.'
  },
  {
    name: 'Compact Plunge Shell',
    step: 'Shell',
    category: 'shells',
    price: 12000,
    hero: '4m x 2.5m · Pre-Cast Concrete',
    skin: ['narrow', 'soil'],
    concerns: ['easy', 'recreation'],
    why: 'Designed for tight setbacks, small yards, or courtyards with quick installation.'
  },
  {
    name: 'Soil Site Excavation',
    step: 'Excavation',
    category: 'excavations',
    price: 3500,
    hero: 'Laser grading · Dirt hauling',
    skin: ['soil'],
    concerns: ['recreation', 'easy', 'exercise', 'aesthetic'],
    why: 'Standard excavating and earth clearing for flat, clean soil properties.'
  },
  {
    name: 'Rocky Terrain Excavation',
    step: 'Excavation',
    category: 'excavations',
    price: 6500,
    hero: 'Hydraulic rock breaking',
    skin: ['rock'],
    concerns: ['recreation', 'easy', 'exercise', 'aesthetic'],
    why: 'Heavy machinery and rock hammering to clear shale, sandstone, or granite.'
  },
  {
    name: 'Sloped Yard Excavation',
    step: 'Excavation',
    category: 'excavations',
    price: 8000,
    hero: 'Terraced grading & drainage',
    skin: ['slope'],
    concerns: ['aesthetic', 'recreation'],
    why: 'Leveling and earth retention for sloped sites. Prepares for retaining walls.'
  },
  {
    name: 'Narrow Access Excavation',
    step: 'Excavation',
    category: 'excavations',
    price: 4800,
    hero: 'Micro machinery prep',
    skin: ['narrow'],
    concerns: ['easy', 'aesthetic'],
    why: 'Micro-diggers and conveyors designed to access yards with tight entryways.'
  },
  {
    name: 'AquaFlow ECO Sand Filter',
    step: 'Equipment',
    category: 'equipment',
    price: 950,
    hero: 'Active glass media filtration',
    skin: ['soil', 'rock', 'slope', 'narrow'],
    concerns: ['easy', 'recreation'],
    why: 'Low-maintenance filter tank utilizing active glass beads for clear water.'
  },
  {
    name: 'AquaSpeed ECO Pump',
    step: 'Equipment',
    category: 'equipment',
    price: 1200,
    hero: 'Variable speed quiet motor',
    skin: ['soil', 'rock', 'slope', 'narrow'],
    concerns: ['easy', 'exercise', 'aesthetic'],
    why: 'Whisper-quiet water circulation that reduces energy use by up to 70%.'
  },
  {
    name: 'RoboClimb Smart Cleaner',
    step: 'Equipment',
    category: 'equipment',
    price: 1400,
    hero: 'App-controlled scrubbing robot',
    skin: ['soil', 'rock', 'slope', 'narrow'],
    concerns: ['easy', 'recreation'],
    why: 'Climbs and scrubs floor, walls, and waterlines. Completely automated.'
  },
  {
    name: 'Seasonal Open/Close Plan',
    step: 'Service',
    category: 'service',
    price: 800,
    hero: 'Annual open & close care',
    skin: ['soil', 'rock', 'slope', 'narrow'],
    concerns: ['recreation', 'exercise'],
    why: 'Prioritized spring reopening, winter line blowouts, and chemical starters.'
  },
  {
    name: 'Weekly Premium Service',
    step: 'Service',
    category: 'service',
    price: 2800,
    hero: 'Full cleaning & chemical supply',
    skin: ['soil', 'rock', 'slope', 'narrow'],
    concerns: ['easy', 'aesthetic'],
    why: 'Includes weekly water testing, brushing, vacuuming, and all chemicals.'
  }
];

const STEP_ORDER = ['Shell', 'Excavation', 'Equipment', 'Service'];

const STEP_ICONS = {
  Shell: 'ph-waves',
  Excavation: 'ph-shovel',
  Equipment: 'ph-wrench',
  Service: 'ph-calendar-check'
};

const CONCERN_LABELS = {
  recreation: 'Family Recreation',
  aesthetic: 'Luxury & Aesthetics',
  exercise: 'Fitness & Laps',
  easy: 'Low Maintenance'
};

document.addEventListener('DOMContentLoaded', () => {
  const finder = document.getElementById('routineFinder');
  if (!finder) return;

  const state = { skin: 'soil', concern: 'recreation' };

  finder.querySelectorAll('input[name="rfSkin"]').forEach(input => {
    input.addEventListener('change', () => {
      state.skin = input.value;
      buildRoutine(state);
    });
  });

  finder.querySelectorAll('input[name="rfConcern"]').forEach(input => {
    input.addEventListener('change', () => {
      state.concern = input.value;
      buildRoutine(state);
    });
  });

  buildRoutine(state);
});

// Score every product, then take the winner of each of the four steps.
function buildRoutine(state) {
  const picks = STEP_ORDER.map(step => {
    const candidates = ROUTINE_CATALOGUE
      .filter(p => p.step === step)
      .map(p => ({ product: p, score: scoreProduct(p, state) }))
      .sort((a, b) => b.score - a.score);

    return candidates[0].product;
  });

  renderRoutine(picks, state);
}

function scoreProduct(product, state) {
  let score = 0;
  if (product.skin.includes(state.skin)) score += 3;
  if (product.concerns.includes(state.concern)) score += 2;
  return score;
}

function renderRoutine(picks, state) {
  const grid = document.getElementById('routineResult');
  const total = document.getElementById('routineTotal');
  const summary = document.getElementById('routineSummary');
  const shopLink = document.getElementById('routineShopLink');
  if (!grid) return;

  grid.innerHTML = picks.map((p, i) => `
    <div class="routine-card" style="--card-delay: ${i * 60}ms">
      <div class="routine-card-head">
        <span class="routine-step-icon"><i class="ph ${STEP_ICONS[p.step]}"></i></span>
        <span class="routine-step-name">Step ${i + 1} — ${p.step}</span>
      </div>
      <h4>${p.name}</h4>
      <span class="badge">${p.hero}</span>
      <p>${p.why}</p>
      <div class="routine-card-foot">
        <span class="routine-price">$${p.price.toLocaleString()}</span>
        <a href="services.html?category=${p.category}" class="link-arrow">View</a>
      </div>
    </div>`).join('');

  // Re-trigger the entrance animation on every rebuild
  grid.querySelectorAll('.routine-card').forEach(card => {
    card.classList.remove('pop-in');
    void card.offsetWidth;
    card.classList.add('pop-in');
  });

  const sum = picks.reduce((acc, p) => acc + p.price, 0);
  if (total) total.textContent = `$${sum.toLocaleString()}`;

  if (summary) {
    let groundLabel = 'Standard Soil';
    if (state.skin === 'rock') groundLabel = 'Rocky Ground';
    if (state.skin === 'slope') groundLabel = 'Sloped Yard';
    if (state.skin === 'narrow') groundLabel = 'Narrow Access';

    summary.innerHTML = `A 4-step installation & maintenance package for <strong>${groundLabel}</strong>, focused on <strong>${CONCERN_LABELS[state.concern]}</strong>.`;
  }

  if (shopLink) {
    shopLink.href = `services.html?skin=${state.skin}`;
  }
}
