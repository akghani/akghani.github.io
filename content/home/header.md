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
    <path fill="#1e1b1a" fill-opacity="1" d="M0,160 C360,240 1080,80 1440,160 L1440,0 L0,0 Z"></path>
  </svg>

  <!-- Middle wave -->
  <svg viewBox="0 0 1440 320" class="wave-svg middle-wave" preserveAspectRatio="none">
    <path fill="#2b2524" fill-opacity="1" d="M0,180 C360,120 1080,240 1440,120 L1440,0 L0,0 Z"></path>
  </svg>

  <!-- Gold wave on top -->
  <svg viewBox="0 0 1440 320" class="wave-svg gold-wave" preserveAspectRatio="none">
    <defs>
      <linearGradient id="goldGradientHeader" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stop-color="#aa8949" />
        <stop offset="100%" stop-color="#f0e6c2" />
      </linearGradient>
    </defs>
    <path fill="url(#goldGradientHeader)" d="M0,200 C360,100 1080,300 1440,200 L1440,0 L0,0 Z"></path>
  </svg>
</div>
