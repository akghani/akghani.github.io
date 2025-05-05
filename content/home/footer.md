---
widget: blank
active: true
weight: 80

title: ""
design:
  background:
    color: "#2b2524"
    text_color_light: true
  css_class: footer-wave-block
markup: html
---

<!-- Navbar scroll‐spy -->
<script>
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
</script>

<!-- Section reveal on scroll -->
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const opts = { threshold: 0.2 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add("revealed");
          io.unobserve(target);
        }
      });
    }, opts);

    document.querySelectorAll(".section").forEach((sec) => {
      sec.classList.add("pre-reveal");
      io.observe(sec);
    });
  });
</script>


<script>
  document.querySelectorAll("a, button, .btn").forEach(el => {
    el.classList.add("clickable");
    el.addEventListener("click", e => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--ripple-x", (e.clientX - rect.left - 50) + "px");
      el.style.setProperty("--ripple-y", (e.clientY - rect.top - 50) + "px");
    });
  });
</script>




<!-- Mouse‐tracked shimmer overlay -->
<script>
  document.body.addEventListener('mousemove', e => {
    document.body.style.setProperty(
      '--x',
      (e.clientX / window.innerWidth * 100) + '%'
    );
    document.body.style.setProperty(
      '--y',
      (e.clientY / window.innerHeight * 100) + '%'
    );
  });
</script>

<div class="wave-stack">
  <!-- Back wave -->
  <svg viewBox="0 0 1440 320" class="wave-svg back-wave" preserveAspectRatio="none">
    <path fill="#1e1b1a" fill-opacity="1"
          d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"></path>
  </svg>
  <!-- Middle wave -->
  <svg viewBox="0 0 1440 320" class="wave-svg middle-wave" preserveAspectRatio="none">
    <path fill="#2b2524" fill-opacity="1"
          d="M0,180 C360,120 1080,240 1440,120 L1440,320 L0,320 Z"></path>
  </svg>
  <!-- Gold wave -->
  <svg viewBox="0 0 1440 320" class="wave-svg gold-wave" preserveAspectRatio="none">
    <defs>
      <linearGradient id="goldGradientFooter" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stop-color="#aa8949" />
        <stop offset="100%" stop-color="#f0e6c2" />
      </linearGradient>
    </defs>
    <path fill="url(#goldGradientFooter)"
          d="M0,200 C360,100 1080,300 1440,200 L1440,320 L0,320 Z"></path>
  </svg>
</div>

<div class="footer-content">
  <p>© 2025 Abdelkarim el Ghani · All rights reserved</p>
  <p>
    <a href="https://www.linkedin.com/in/your-profile" target="_blank">LinkedIn</a> ·
    <a href="https://github.com/akghani" target="_blank">GitHub</a>
  </p>
</div>
