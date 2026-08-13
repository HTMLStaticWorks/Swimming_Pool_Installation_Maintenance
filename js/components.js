const globalHeaderHTML = `
  <header class="site-header">
    <nav class="navbar navbar-expand-xl">
      <div class="container">
        <!-- Logo -->
        <a class="brand-logo" href="index.html">
          <img src="assets/images/branding/driveready-logo.svg" alt="AquaPro Pools Logo" class="logo-light">
          <img src="assets/images/branding/driveready-logo-dark.svg" alt="AquaPro Pools Logo" class="logo-dark">
        </a>
        
        <!-- Mobile Toggle -->
        <button class="navbar-toggler border-0 px-2" type="button" data-bs-toggle="collapse" data-bs-toggle="target" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars fs-2 text-muted"></i>
        </button>
        
        <!-- Nav Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="index.html" data-nav="home-1">Home 1</a></li>
            <li class="nav-item"><a class="nav-link" href="home-2.html" data-nav="home-2">Home 2</a></li>
            <li class="nav-item"><a class="nav-link" href="about.html" data-nav="about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="services.html" data-nav="services">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="pricing.html" data-nav="pricing">Pricing</a></li>
            <li class="nav-item"><a class="nav-link" href="blog.html" data-nav="blog">Blog</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html" data-nav="contact">Contact</a></li>
          </ul>
          
          <!-- Actions -->
          <div class="d-flex align-items-center gap-3">
            <a href="#" id="theme-toggle" class="nav-link" aria-label="Toggle Theme"><i class="fas fa-moon"></i></a>
            <a href="#" id="rtl-toggle" class="nav-link" aria-label="Toggle RTL"><i class="fas fa-right-left"></i></a>
            <a href="register.html" class="btn-primary-brand btn-sm">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- Spacer to prevent content from hiding behind the fixed header -->
  <div class="header-spacer" style="height: 76px; display: block;"></div>
`;

const globalFooterHTML = `
  <footer>
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <a class="brand-logo mb-4" href="index.html">
            <img src="assets/images/branding/driveready-logo.svg" alt="AquaPro Pools Logo" class="logo-light">
            <img src="assets/images/branding/driveready-logo-dark.svg" alt="AquaPro Pools Logo" class="logo-dark">
          </a>
          <p class="mb-4 text-muted">Premium swimming pool design, installation, and maintenance services dedicated to creating and preserving your backyard oasis.</p>
          <div class="d-flex gap-3">
            <a href="#" class="social-icon-btn" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon-btn" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon-btn" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="about.html">About Us</a></li>
            <li class="mb-2"><a href="pricing.html">Pricing Plans</a></li>
            <li class="mb-2"><a href="gallery.html">Our Gallery</a></li>
            <li class="mb-2"><a href="contact.html">Contact Us</a></li>
            <li class="mb-2"><a href="booking.html">Book Site Visit</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5>Services</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="services.html">Custom Pool Design</a></li>
            <li class="mb-2"><a href="services.html">Pool Installation</a></li>
            <li class="mb-2"><a href="services.html">Maintenance Packages</a></li>
            <li class="mb-2"><a href="services.html">Chemical Supplies</a></li>
            <li class="mb-2"><a href="services.html">Pool Remodeling</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5>Contact Info</h5>
          <ul class="list-unstyled text-muted">
            <li class="mb-3 d-flex align-items-start gap-3">
              <i class="fas fa-map-marker-alt mt-1 text-secondary"></i>
              <span>456 Aquamarine Way, Suite 100, Crystal Coast, FL 33101</span>
            </li>
            <li class="mb-3 d-flex align-items-center gap-3">
              <i class="fas fa-phone-alt text-secondary"></i>
              <span>+1 (555) 766-5777</span>
            </li>
            <li class="mb-3 d-flex align-items-center gap-3">
              <i class="fas fa-envelope text-secondary"></i>
              <span>hello@aquapropools.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-center">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p class="mb-2 mb-md-0 text-muted">&copy; 2026 AquaPro Pools. All Rights Reserved.</p>
          <div class="d-flex align-items-center gap-4 mt-3 mt-md-0">
            <div class="d-flex gap-3">
              <a href="#" class="text-muted" style="font-size: 0.875rem;">Privacy Policy</a>
              <a href="#" class="text-muted" style="font-size: 0.875rem;">Terms of Service</a>
            </div>
            <a href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" class="text-white rounded-circle shadow-sm flex-shrink-0" style="background-color: var(--secondary); width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; text-decoration: none;" title="Back to Top">
              <i class="fas fa-chevron-up"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  // Inject Header
  const headerContainer = document.getElementById("global-header");
  if (headerContainer) {
    headerContainer.innerHTML = globalHeaderHTML;
    
    // Determine active page
    const path = window.location.pathname;
    let page = path.split("/").pop();
    if (!page || page === "") page = "index.html";
    
    // Map files to active nav items
    let activeNav = "home-1";
    if (page === "home-2.html") activeNav = "home-2";
    else if (page.includes("about")) activeNav = "about";
    else if (page.includes("service")) activeNav = "services";
    else if (page.includes("pricing")) activeNav = "pricing";
    else if (page.includes("blog")) activeNav = "blog";
    else if (page.includes("contact")) activeNav = "contact";

    // Set active states
    const activeEl = document.querySelector(`[data-nav="${activeNav}"]`);
    if (activeEl) {
      activeEl.classList.add("active");
    }

    // Re-bind theme/rtl toggles which are newly injected
    if (typeof bindToggles === 'function') {
      bindToggles();
    }
  }

  // Inject Footer
  const footerContainer = document.getElementById("global-footer");
  if (footerContainer) {
    footerContainer.innerHTML = globalFooterHTML;
  }
});
