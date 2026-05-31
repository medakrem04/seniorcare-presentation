/**
 * SeniorCare AI — Presentation Navigation
 * Keyboard, click, and dot-based slide control
 */

const TOTAL = 17;
let current = 1;

function init() {
  const dotsEl = document.getElementById('dots');
  for (let i = 1; i <= TOTAL; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 1 ? ' on' : '');
    d.title = 'Slide ' + i;
    d.onclick = () => goto(i);
    dotsEl.appendChild(d);
  }
  updateCounter();
}

function goto(n) {
  if (n < 1 || n > TOTAL) return;
  document.querySelector(`.slide[data-n="${current}"]`).classList.remove('active');
  document.getElementById('dots').children[current - 1].classList.remove('on');
  current = n;
  document.querySelector(`.slide[data-n="${current}"]`).classList.add('active');
  document.getElementById('dots').children[current - 1].classList.add('on');
  document.getElementById('pb').disabled = current === 1;
  document.getElementById('nb').disabled = current === TOTAL;
  updateCounter();
}

function go(dir) {
  goto(current + dir);
}

function updateCounter() {
  const el = document.querySelector('.slide-num');
  if (el) el.textContent = String(current).padStart(2, '0') + ' / ' + String(TOTAL).padStart(2, '0');
}

document.addEventListener('keydown', e => {
  if (['ArrowRight', 'ArrowDown', ' '].includes(e.key)) { e.preventDefault(); go(1); }
  if (['ArrowLeft', 'ArrowUp'].includes(e.key))          { e.preventDefault(); go(-1); }
  if (e.key === 'f' || e.key === 'F') {
    document.fullscreenElement
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen();
  }
});

document.addEventListener('DOMContentLoaded', init);
