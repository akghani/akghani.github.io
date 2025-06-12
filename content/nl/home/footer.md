---
widget: blank
active: false
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


<!-- Ripple on click, only for buttons & .btn -->
<script>
  document.querySelectorAll("button, .btn").forEach(el => {
    el.classList.add("clickable");
    el.addEventListener("click", e => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty(
        "--ripple-x",
        (e.clientX - rect.left - 50) + "px"
      );
      el.style.setProperty(
        "--ripple-y",
        (e.clientY - rect.top - 50) + "px"
      );
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



<div class="footer-content">
  <p>© 2025 Abdelkarim el Ghani · All rights reserved</p>
  <p>
    <a href="https://www.linkedin.com/in/abdelkarimelghani" target="_blank">LinkedIn</a> ·
    <a href="https://github.com/akghani" target="_blank">GitHub</a>
  </p>
</div>
