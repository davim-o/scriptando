const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', String(expanded));
  });
}

const slides = Array.from(document.querySelectorAll('.hero-slide'));
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
};

if (slides.length > 0) {
  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);
  setInterval(nextSlide, 5000);
}

const counter = document.querySelector('.counter');
if (counter) {
  const target = Number(counter.dataset.target) || 0;
  const durationMs = 1800;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / durationMs, 1);
    const value = Math.floor(progress * target);
    counter.textContent = value.toLocaleString('pt-BR');

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
}
