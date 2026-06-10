/* ===========================
   MAIN JS
   =========================== */

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Close on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Animate timeline items on scroll (Intersection Observer)
const timelineItems = document.querySelectorAll('.timeline-item[data-aos]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
timelineItems.forEach(item => observer.observe(item));

// Smooth active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}`
            ? 'var(--accent)'
            : '';
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach(s => sectionObserver.observe(s));

// Skill tag hover ripple (lightweight)
document.querySelectorAll('.skill-tags span').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.transform = 'scale(1.05)';
  });
  tag.addEventListener('mouseleave', () => {
    tag.style.transform = '';
  });
});

// ---- Floating particle canvas ----
const heroSection = document.querySelector('.hero');
const canvas = document.createElement('canvas');
canvas.className = 'hero-canvas';
heroSection.appendChild(canvas);
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width  = heroSection.offsetWidth;
  canvas.height = heroSection.offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const PARTICLE_COUNT = 60;
const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
  x:  Math.random() * canvas.width,
  y:  Math.random() * canvas.height,
  r:  Math.random() * 1.4 + 0.3,
  dx: (Math.random() - 0.5) * 0.35,
  dy: (Math.random() - 0.5) * 0.35,
  o:  Math.random() * 0.45 + 0.08,
}));

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(147, 197, 253, ${p.o})`;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// ---- Generic scroll reveal ----
const revealObs = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  }),
  { threshold: 0.1 }
);

// Section labels & titles
document.querySelectorAll('.section-label, .section-title').forEach(el => {
  el.classList.add('reveal');
  revealObs.observe(el);
});

// About
document.querySelectorAll('.about-text, .about-info-card').forEach(el => {
  el.classList.add('reveal');
  revealObs.observe(el);
});

// Skill categories — staggered
document.querySelectorAll('.skill-category').forEach((el, i) => {
  el.classList.add('reveal', `reveal-d${(i % 6) + 1}`);
  revealObs.observe(el);
});

// Cert & education cards — staggered
document.querySelectorAll('.cert-card, .edu-card').forEach((el, i) => {
  el.classList.add('reveal', `reveal-d${Math.min(i + 1, 6)}`);
  revealObs.observe(el);
});

// Contact items — staggered
document.querySelectorAll('.contact-item').forEach((el, i) => {
  el.classList.add('reveal', `reveal-d${i + 1}`);
  revealObs.observe(el);
});
