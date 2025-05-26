// Paragraph fade-in on load
document.addEventListener('DOMContentLoaded', () => {
  const paras = document.querySelectorAll('.about-blur p');
  paras.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200 + i * 200);
  });
});

// 3D hover tilt effect
const aboutCard = document.querySelector('.about-blur');
if (aboutCard) {
  aboutCard.addEventListener('mousemove', e => {
    const rect = aboutCard.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width/2) / (rect.width/2);
    const y = (e.clientY - rect.top - rect.height/2) / (rect.height/2);
    aboutCard.style.transform = `rotateX(${y * 5}deg) rotateY(${x * 5}deg)`;
  });
  aboutCard.addEventListener('mouseleave', () => {
    aboutCard.style.transform = '';
  });
}