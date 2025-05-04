---
widget: blank
active: true
weight: 1
title: ""
design:
  background:
    color: "#2b2524"
    text_color_light: true
  css_class: header-wave-block
markup: html
---

<div class="wave-stack">
  <!-- Back wave -->
  <svg viewBox="0 0 1440 320" class="wave-svg back-wave" preserveAspectRatio="none">
    <path fill="#1e1b1a" d="M0,0 C360,80 1080,0 1440,80 L1440,0 L0,0 Z"></path>
  </svg>

  <!-- Middle wave -->
  <svg viewBox="0 0 1440 320" class="wave-svg middle-wave" preserveAspectRatio="none">
    <path fill="#2b2524" d="M0,0 C360,120 1080,-20 1440,60 L1440,0 L0,0 Z"></path>
  </svg>

  <!-- Gold wave -->
  <svg viewBox="0 0 1440 320" class="wave-svg gold-wave" preserveAspectRatio="none">
    <defs>
      <linearGradient id="goldGradientHeader" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stop-color="#aa8949" />
        <stop offset="100%" stop-color="#f0e6c2" />
      </linearGradient>
    </defs>
    <path fill="url(#goldGradientHeader)" d="M0,0 C360,100 1080,-40 1440,60 L1440,0 L0,0 Z"></path>
  </svg>
</div>
