/**
 * HYDROWAVE — HOME 2 SCRIPTS
 * Interactive pool bundle builder: pick one option per step, watch the bundle
 * price update, and unlock 15% off once all four steps are filled.
 */

const RITUAL_STEPS = [
  {
    key: 'shell',
    label: 'Pool Shell',
    icon: 'ph-waves',
    options: [
      { name: 'Bespoke Fiberglass Shell', price: 18000, note: 'Pre-molded shell · algae-resistant gelcoat', best: 'Fast installation & low care' },
      { name: 'Concrete Custom Shell', price: 26000, note: 'Custom steel gunite · shapes to any space', best: 'Bespoke designs & deep ends' }
    ]
  },
  {
    key: 'finish',
    label: 'Interior Finish',
    icon: 'ph-paint-brush',
    options: [
      { name: 'Pearl Gel Plaster', price: 2500, note: 'Smooth aggregate plaster · highly durable', best: 'Clean, classical appearance' },
      { name: 'Waterline Glass Tile', price: 5000, note: 'Shimmering waterline tiles · luxury styling', best: 'Infinity looks & architectural designs' }
    ]
  },
  {
    key: 'equipment',
    label: 'Equipment Pack',
    icon: 'ph-wrench',
    options: [
      { name: 'ECO Pump & Sand Filter', price: 2150, note: 'Variable pump · sand filtration', best: 'Low energy & standard filtering' },
      { name: 'Smart Automation Pack', price: 3500, note: 'Robotic cleaner · Wi-Fi chemical control', best: 'Self-cleaning & smart-phone schedules' }
    ]
  },
  {
    key: 'maintenance',
    label: 'Annual Service',
    icon: 'ph-calendar-check',
    options: [
      { name: 'Monthly Seasonal Plan', price: 1200, note: 'Spring open / winter close + monthly checkups', best: 'Cost-efficient seasonal care' },
      { name: 'Weekly Premium Care', price: 2800, note: 'Weekly cleaning + all chemicals included', best: 'Completely hands-off luxury care' }
    ]
  }
];

const BUNDLE_DISCOUNT = 0.15;

let activeStepIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initReviewSlider();

  const builder = document.getElementById('ritualBuilder');
  if (!builder) return;

  // stepKey -> option index, or null when the step is skipped
  const picks = { shell: 0, finish: 1, equipment: 1, maintenance: 0 };

  renderSteps(picks);
  updateSummary(picks);

  builder.addEventListener('click', e => {
    const option = e.target.closest('.ritual-option');
    if (option) {
      const { step, index } = option.dataset;
      const current = picks[step];
      // Clicking the selected option again skips that step
      picks[step] = current === Number(index) ? null : Number(index);

      renderSteps(picks);
      updateSummary(picks);
      return;
    }

    const tab = e.target.closest('.step-tab');
    if (tab) {
      activeStepIndex = Number(tab.dataset.stepIdx);
      renderSteps(picks);
      updateSummary(picks);
      return;
    }

    const nextBtn = e.target.closest('#ritualNextStep');
    if (nextBtn) {
      if (activeStepIndex < RITUAL_STEPS.length - 1) {
        activeStepIndex++;
        renderSteps(picks);
      } else {
        // Scroll to checkout on completion
        const summary = document.querySelector('.ritual-summary');
        if (summary) {
          summary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
      return;
    }

    const prevBtn = e.target.closest('#ritualPrevStep');
    if (prevBtn) {
      if (activeStepIndex > 0) {
        activeStepIndex--;
        renderSteps(picks);
      }
      return;
    }
  });

  const reset = document.getElementById('ritualReset');
  if (reset) {
    reset.addEventListener('click', () => {
      Object.keys(picks).forEach(k => { picks[k] = null; });
      activeStepIndex = 0;
      renderSteps(picks);
      updateSummary(picks);
    });
  }
});

// ==========================================
// TESTIMONIAL SLIDER
// ==========================================
const REVIEWS = [
  {
    name: 'Priya N.',
    photo: 'assets/images/review-portrait-1.jpg',
    meta: 'Soil Ground · Bundle: Fiberglass Shell, Pearl Plaster, ECO Pump, Weekly Care',
    when: '6 weeks in',
    rating: 5,
    result: 'Pool completed in record time',
    quote: 'I opted for the complete AquaVista bundle instead of coordinating separate contractors. By week three the excavation was complete, the fiberglass shell was craned in, and my kids were swimming before summer started!'
  },
  {
    name: 'Daniel R.',
    photo: 'assets/images/review-portrait-2.jpg',
    meta: 'Rocky Ground · Bundle: Custom Concrete Shell, Glass Tile, Smart Automation, Weekly Care',
    when: '3 months in',
    rating: 5,
    result: 'Exceeded our design expectations',
    quote: 'I always assumed our sloped, rocky yard would be a nightmare. AquaVista handled the civil engineering and retaining walls seamlessly. The custom concrete pool fits our landscape perfectly and looks spectacular.'
  },
  {
    name: 'Amelia K.',
    photo: 'assets/images/review-portrait-3.jpg',
    meta: 'Narrow Access · Bundle: Plunge Shell, Pearl Plaster, ECO Pump, Seasonal Care',
    when: '2 months in',
    rating: 5,
    result: 'Fits perfectly in a small courtyard',
    quote: 'We have a tight side gate under 1.5m and narrow setbacks. The micro-excavator got in easily, and the pre-cast plunge shell was craned over our house in one morning with zero disruption to the neighborhood.'
  },
  {
    name: 'Tomas L.',
    photo: 'assets/images/review-portrait-4.jpg',
    meta: 'Sloped Yard · Bundle: Custom Concrete Shell, Glass Tile, Smart Automation, Weekly Care',
    when: '5 weeks in',
    rating: 4.5,
    result: 'Integrated terracing looks spectacular',
    quote: 'Our yard slopes down 15 degrees. AquaVista built a stunning infinity concrete pool with terraced retaining walls that doubles as an outdoor design feature. The water balance is perfectly controlled on my phone.'
  }
];

function initReviewSlider() {
  const root = document.getElementById('reviewSlider');
  if (!root) return;

  const photo = document.getElementById('reviewPhoto');
  const quote = document.getElementById('reviewQuote');
  const name = document.getElementById('reviewName');
  const meta = document.getElementById('reviewMeta');
  const when = document.getElementById('reviewWhen');
  const stars = document.getElementById('reviewStars');
  const result = document.getElementById('reviewResult');
  const counter = document.getElementById('reviewCounter');
  const dots = document.getElementById('reviewDots');
  const thumbs = document.getElementById('reviewThumbs');

  let current = 0;
  let timer = null;

  dots.innerHTML = REVIEWS
    .map((r, i) => `<button class="review-dot" data-go="${i}" aria-label="Review ${i + 1} by ${r.name}"></button>`)
    .join('');

  thumbs.innerHTML = REVIEWS.map((r, i) => `
    <button class="review-thumb" data-go="${i}">
      <img src="${r.photo}" alt="" loading="lazy" width="34" height="34">
      <span>${r.name}</span>
    </button>`).join('');

  function starMarkup(rating) {
    let out = '';
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) out += '<i class="ph-fill ph-star"></i>';
      else if (i === Math.floor(rating) && rating % 1 >= 0.5) out += '<i class="ph-fill ph-star-half"></i>';
      else out += '<i class="ph ph-star"></i>';
    }
    return out;
  }

  function show(index) {
    current = (index + REVIEWS.length) % REVIEWS.length;
    const r = REVIEWS[current];

    photo.src = r.photo;
    photo.alt = r.name;
    quote.textContent = r.quote;
    name.textContent = r.name;
    meta.textContent = r.meta;
    when.textContent = r.when;
    stars.innerHTML = starMarkup(r.rating);
    result.innerHTML = `<i class="ph ph-trend-up"></i> ${r.result}`;
    counter.textContent =
      `${String(current + 1).padStart(2, '0')} / ${String(REVIEWS.length).padStart(2, '0')}`;

    // Replay the entrance animation on the text column
    const body = quote.closest('.review-body');
    body.classList.remove('review-fade');
    void body.offsetWidth;
    body.classList.add('review-fade');

    dots.querySelectorAll('.review-dot')
      .forEach((d, i) => d.classList.toggle('active', i === current));
    thumbs.querySelectorAll('.review-thumb')
      .forEach((t, i) => t.classList.toggle('active', i === current));
  }

  function play() {
    stop();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => show(current + 1), 7000);
  }

  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function goTo(index) {
    show(index);
    play();
  }

  document.getElementById('reviewPrev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('reviewNext').addEventListener('click', () => goTo(current + 1));

  [dots, thumbs].forEach(group => {
    group.addEventListener('click', e => {
      const btn = e.target.closest('[data-go]');
      if (btn) goTo(Number(btn.dataset.go));
    });
  });

  // Pause while the reader is actually looking at it
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', play);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', play);

  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  show(0);
  play();
}

function renderSteps(picks) {
  const wrap = document.getElementById('ritualSteps');
  if (!wrap) return;

  // Render step tabs tracker navigation
  const tabs = RITUAL_STEPS.map((step, i) => {
    const isSelected = picks[step.key] !== null;
    const isActive = activeStepIndex === i;
    const statusClass = isActive ? 'active' : (isSelected ? 'completed' : '');
    const iconHtml = isSelected ? '<i class="ph ph-check-circle-fill"></i>' : `<i class="ph ${step.icon}"></i>`;
    
    return `
      <button class="step-tab ${statusClass}" data-step-idx="${i}">
        <span class="step-tab-icon">${iconHtml}</span>
        <div class="step-tab-info">
          <span class="step-tab-meta">Step 0${i + 1}</span>
          <span class="step-tab-label">${step.label}</span>
        </div>
      </button>
    `;
  }).join('');

  // Active step options rendering
  const step = RITUAL_STEPS[activeStepIndex];
  const chosen = picks[step.key];

  const options = step.options.map((opt, index) => `
    <button class="ritual-option${chosen === index ? ' selected' : ''}"
            data-step="${step.key}" data-index="${index}"
            aria-pressed="${chosen === index}">
      <span class="ritual-check"><i class="ph ph-check"></i></span>
      <span class="ritual-option-body">
        <span class="ritual-name">${opt.name}</span>
        <span class="ritual-note">${opt.note}</span>
        <span class="ritual-best">Best for ${opt.best}</span>
      </span>
      <span class="ritual-price">$${opt.price.toLocaleString()}</span>
    </button>`).join('');

  wrap.innerHTML = `
    <div class="ritual-wizard">
      <div class="ritual-steps-nav">
        ${tabs}
      </div>
      <div class="ritual-active-panel">
        <div class="ritual-step-head">
          <span class="ritual-step-num"><i class="ph ${step.icon}"></i></span>
          <div>
            <span class="ritual-step-meta">Step 0${activeStepIndex + 1} of ${RITUAL_STEPS.length}</span>
            <h3>Choose your ${step.label}</h3>
          </div>
        </div>
        <div class="ritual-options-grid">${options}</div>
        
        <div class="ritual-nav-buttons">
          <button class="btn btn-outline" id="ritualPrevStep" ${activeStepIndex === 0 ? 'disabled' : ''}>
            <i class="ph ph-arrow-left"></i> Back
          </button>
          <button class="btn btn-primary" id="ritualNextStep">
            ${activeStepIndex === RITUAL_STEPS.length - 1 ? 'Finish & Review' : 'Next Step <i class="ph ph-arrow-right"></i>'}
          </button>
        </div>
      </div>
    </div>
  `;
}

function updateSummary(picks) {
  const listWrap = document.getElementById('ritualList');
  const priceSub = document.getElementById('ritualSubtotal');
  const priceDisc = document.getElementById('ritualDiscount');
  const priceTotal = document.getElementById('ritualTotal');
  const discountRow = document.getElementById('discountRow');
  const checkoutBtn = document.getElementById('ritualCheckout');
  const badgeWrap = document.getElementById('ritualBadgeWrap');

  if (!listWrap) return;

  const selectedOptions = [];
  let subtotal = 0;

  RITUAL_STEPS.forEach(step => {
    const chosenIdx = picks[step.key];
    if (chosenIdx !== null) {
      const opt = step.options[chosenIdx];
      selectedOptions.push({ stepLabel: step.label, ...opt });
      subtotal += opt.price;
    }
  });

  // Render items checklist
  listWrap.innerHTML = RITUAL_STEPS.map((step, i) => {
    const chosenIdx = picks[step.key];
    if (chosenIdx === null) {
      return `
        <div class="summary-item missing">
          <i class="ph ph-circle"></i>
          <span>Step 0${i + 1} — Select your ${step.label}</span>
        </div>`;
    }
    const opt = step.options[chosenIdx];
    return `
      <div class="summary-item">
        <i class="ph ph-check-circle-fill" style="color: var(--color-accent)"></i>
        <div>
          <strong>${opt.name}</strong>
          <span>$${opt.price.toLocaleString()}</span>
        </div>
      </div>`;
  }).join('');

  const isFullBundle = selectedOptions.length === RITUAL_STEPS.length;

  if (priceSub) priceSub.textContent = `$${subtotal.toLocaleString()}`;

  if (isFullBundle) {
    const discount = subtotal * BUNDLE_DISCOUNT;
    const finalTotal = subtotal - discount;

    if (discountRow) discountRow.style.display = 'flex';
    if (priceDisc) priceDisc.textContent = `-$${discount.toLocaleString()}`;
    if (priceTotal) priceTotal.textContent = `$${finalTotal.toLocaleString()}`;
    if (checkoutBtn) {
      checkoutBtn.disabled = false;
      checkoutBtn.innerHTML = `Book Bundle &amp; Save 15% <i class="ph ph-arrow-right"></i>`;
    }
    if (badgeWrap) {
      badgeWrap.innerHTML = `<span class="badge badge-glow animate-pulse">15% Bundle Discount Unlocked!</span>`;
    }
  } else {
    if (discountRow) discountRow.style.display = 'none';
    if (priceTotal) priceTotal.textContent = `$${subtotal.toLocaleString()}`;
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.innerHTML = `Select all 4 steps to unlock discount`;
    }
    if (badgeWrap) {
      badgeWrap.innerHTML = '';
    }
  }
}
