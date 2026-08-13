// --- Theme & RTL Toggle Logic (Event Delegation) ---
const htmlElement = document.documentElement;

// Check local storage for initial state
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);

const currentDir = localStorage.getItem('dir') || 'ltr';
htmlElement.setAttribute('dir', currentDir);

document.addEventListener('click', (e) => {
  // Theme toggle
  const themeBtn = e.target.closest('#theme-toggle');
  if (themeBtn) {
    e.preventDefault();
    const current = htmlElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  }
  
  // RTL toggle
  const rtlBtn = e.target.closest('#rtl-toggle');
  if (rtlBtn) {
    e.preventDefault();
    const current = htmlElement.getAttribute('dir');
    const newDir = current === 'rtl' ? 'ltr' : 'rtl';
    htmlElement.setAttribute('dir', newDir);
    localStorage.setItem('dir', newDir);
    updateRTLIcon(newDir);
  }
});

function updateThemeIcon(theme) {
  const themeToggles = document.querySelectorAll('#theme-toggle');
  themeToggles.forEach(toggle => {
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  });
}

function updateRTLIcon(dir) {
  const rtlToggles = document.querySelectorAll('#rtl-toggle');
  rtlToggles.forEach(toggle => {
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.className = 'fas fa-right-left';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Update icons initially if element exists (now DOM is ready)
  updateThemeIcon(currentTheme);
  updateRTLIcon(currentDir);


  // --- Scroll Animations (Intersection Observer) ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // observer.unobserve(entry.target); // Uncomment to run only once
      }
    });
  };

  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // --- Sticky Navbar ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  }

  // --- Mobile Menu Toggle ---
  const mobileMenuToggle = document.querySelector('.navbar-toggler');
  const mobileMenu = document.querySelector('.navbar-collapse');
  const body = document.body;

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      // Toggle logic is handled by Bootstrap, but we lock scroll
      setTimeout(() => {
        if (mobileMenu.classList.contains('show')) {
          body.style.overflow = 'hidden';
        } else {
          body.style.overflow = '';
        }
      }, 350);
    });
  }
});
