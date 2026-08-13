document.addEventListener('DOMContentLoaded', () => {
  // --- Sidebar Toggle Logic ---
  const sidebar = document.getElementById('dashboard-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const toggleBtn = document.getElementById('sidebar-toggle');
  const closeBtn = document.getElementById('sidebar-close');

  function toggleSidebar() {
    sidebar.classList.toggle('show');
    sidebarOverlay.classList.toggle('show');
    if (sidebar.classList.contains('show')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  if (toggleBtn) toggleBtn.addEventListener('click', toggleSidebar);
  if (closeBtn) closeBtn.addEventListener('click', toggleSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', toggleSidebar);

  // --- SPA Navigation Logic ---
  const navLinks = document.querySelectorAll('.sidebar-menu .nav-link');
  const sections = document.querySelectorAll('.dashboard-section');

  navLinks.forEach(link => {
    if(link.id === 'logout-btn') return; // Skip logout

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      
      // Update links
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Update sections
      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');

      // Close sidebar on mobile after clicking
      if (window.innerWidth < 992 && sidebar.classList.contains('show')) {
        toggleSidebar();
      }
      
      // If navigating to scores, render chart
      if (targetId === 'scores-section' && !window.chartRendered) {
        renderScoreChart();
        window.chartRendered = true;
      }
    });
  });

  // --- Chart.js Integration ---
  function renderScoreChart() {
    const ctx = document.getElementById('scoreChart');
    if (!ctx) return;
    
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#cbd5e1' : '#64748b';
    const gridColor = isDark ? '#334155' : '#e2e8f0';

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6'],
        datasets: [{
          label: 'Score Percentage',
          data: [65, 72, 78, 85, 88, 94],
          borderColor: '#f59e0b', // secondary
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          borderWidth: 3,
          pointBackgroundColor: '#1e293b', // primary
          pointBorderColor: '#f59e0b',
          pointRadius: 5,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: { color: textColor },
            grid: { color: gridColor }
          },
          x: {
            ticks: { color: textColor },
            grid: { display: false }
          }
        }
      }
    });
  }

  // --- Mock Test Logic (Demo) ---
  const startTestBtn = document.getElementById('start-test-btn');
  const testIntro = document.getElementById('test-intro');
  const testActive = document.getElementById('test-active');
  const testResults = document.getElementById('test-results');
  const submitTestBtn = document.getElementById('submit-test-btn');
  const retakeTestBtn = document.getElementById('retake-test-btn');
  const optionBtns = document.querySelectorAll('.test-options .btn');

  if (startTestBtn) {
    startTestBtn.addEventListener('click', () => {
      testIntro.classList.add('d-none');
      testActive.classList.remove('d-none');
      startTimer();
    });
  }

  // Option selection
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      optionBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  if (submitTestBtn) {
    submitTestBtn.addEventListener('click', () => {
      clearInterval(timerInterval);
      testActive.classList.add('d-none');
      testResults.classList.remove('d-none');
    });
  }

  if (retakeTestBtn) {
    retakeTestBtn.addEventListener('click', () => {
      testResults.classList.add('d-none');
      testIntro.classList.remove('d-none');
      optionBtns.forEach(b => b.classList.remove('selected'));
    });
  }

  let timerInterval;
  function startTimer() {
    let minutes = 45;
    let seconds = 0;
    const display = document.getElementById('test-timer');
    
    timerInterval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval);
          submitTestBtn.click(); // Auto submit
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }

  // --- Booking Form Demo ---
  const dashBookingForm = document.getElementById('dashBookingForm');
  if (dashBookingForm) {
    dashBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Practical Session Booked Successfully! It will appear in your upcoming sessions.');
      dashBookingForm.reset();
      
      // Navigate back to dashboard home
      document.querySelector('[data-target="dashboard-home"]').click();
    });
  }

  // --- Logout ---
  const logoutBtn = document.getElementById('logout-btn');
  if(logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = "index.html";
    });
  }
});
