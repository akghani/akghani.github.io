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

<div class="wave-stack">
  <!-- Back wave -->
  <svg viewBox="0 0 1440 320" class="wave-svg back-wave" preserveAspectRatio="none">
    <path fill="#1e1b1a" fill-opacity="1" d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"></path>
  </svg>

  <!-- Middle wave -->
  <svg viewBox="0 0 1440 320" class="wave-svg middle-wave" preserveAspectRatio="none">
    <path fill="#2b2524" fill-opacity="1" d="M0,180 C360,120 1080,240 1440,120 L1440,320 L0,320 Z"></path>
  </svg>

  <!-- Gold wave on top -->
  <svg viewBox="0 0 1440 320" class="wave-svg gold-wave" preserveAspectRatio="none">
    <defs>
      <linearGradient id="goldGradientFooter" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stop-color="#aa8949" />
        <stop offset="100%" stop-color="#f0e6c2" />
      </linearGradient>
    </defs>
    <path fill="url(#goldGradientFooter)" d="M0,200 C360,100 1080,300 1440,200 L1440,320 L0,320 Z"></path>
  </svg>
</div>

<div class="footer-content">
  <p>© 2025 Abdelkarim el Ghani · All rights reserved</p>
  <p>
    <a href="https://www.linkedin.com/in/your-profile" target="_blank">LinkedIn</a> ·
    <a href="https://github.com/akghani" target="_blank">GitHub</a>
  </p>
</div>
