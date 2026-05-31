/* ══════════════════════════════════════════
   SeniorCare AI — PFE 2025-2026 — Navigation
   ══════════════════════════════════════════ */

const SLIDE_FILES = [
  'slides/sc_slide01_title.html',
  'slides/sc_slide02_plan.html',
  'slides/sc_slide03_intro.html',
  'slides/sc_slide04_problematique.html',
  'slides/sc_slide05_solution.html',
  'slides/sc_slide06_comparaison.html',
  'slides/sc_slide07_besoins_f.html',
  'slides/sc_slide08_besoins_nf.html',
  'slides/sc_slide09_architecture.html',
  'slides/sc_slide10_scrum.html',
  'slides/sc_slide11_equipe.html',
  'slides/sc_slide12_usecase.html',
  'slides/sc_slide13_bdd.html',
  'slides/sc_slide14_realisation.html',
  'slides/sc_slide15_conclusion.html',
  'slides/sc_slide16_perspectives.html',
  'slides/sc_slide17_merci.html'
];

const TOTAL = SLIDE_FILES.length;
let current = 0;

/* ── HUD / dots / progress helpers ── */
function updateHUD(index) {
  const hud = document.getElementById('hud');
  if (hud) hud.textContent = (index + 1) + ' / ' + TOTAL;
}
function updateDots(index) {
  document.querySelectorAll('#dots .dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}
function updateProgress(index) {
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = ((index + 1) / TOTAL) * 100 + '%';
}

/* ── Slide loader (with file:// iframe fallback) ── */
async function loadSlide(index) {
  const file = SLIDE_FILES[index];
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error('fetch failed');
    const html = await res.text();
    document.getElementById('slide-container').innerHTML = html;
  } catch(e) {
    const iframe = document.createElement('iframe');
    iframe.src = file;
    iframe.style.cssText = 'width:100%;height:100%;border:none;';
    const c = document.getElementById('slide-container');
    c.innerHTML = '';
    c.appendChild(iframe);
  }
  updateHUD(index);
  updateDots(index);
  updateProgress(index);
  setTimeout(animateCounters, 100);
}

/* ── Navigation ── */
function goTo(index) {
  if (index < 0 || index >= TOTAL) return;
  current = index;
  loadSlide(current);
}
function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

/* ── Keyboard ── */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
    e.preventDefault();
    next();
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    prev();
  }
  if (e.key === 'Home') goTo(0);
  if (e.key === 'End') goTo(TOTAL - 1);
});

/* ── Touch swipe ── */
let touchStartX = 0;
document.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
document.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
}, { passive: true });

/* ── Particles ── */
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const pts = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    a: Math.random() * 0.5 + 0.1
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,188,212,' + p.a + ')';
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ── Counter animation (data-count) ── */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    if (el.dataset.counted === '1') return;
    el.dataset.counted = '1';

    const raw = el.dataset.count;
    const target = parseFloat(raw);
    const isFloat = raw.includes('.');
    const dec = isFloat ? (raw.split('.')[1] || '').length : 0;

    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      el.textContent = isFloat ? start.toFixed(dec) : Math.floor(start);
      if (start >= target) {
        clearInterval(timer);
        el.textContent = isFloat ? target.toFixed(dec) : target;
      }
    }, 30);
  });
}

/* ── Init ── */
window.addEventListener('load', () => {
  initParticles();

  // Build dots
  const dotsEl = document.getElementById('dots');
  if (dotsEl) {
    SLIDE_FILES.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'dot';
      d.onclick = () => goTo(i);
      dotsEl.appendChild(d);
    });
  }

  goTo(0);
});

/* ── Expose globals for inline slide scripts ── */
window.animateCounters = animateCounters;
window.goTo = goTo;
window.next = next;
window.prev = prev;
