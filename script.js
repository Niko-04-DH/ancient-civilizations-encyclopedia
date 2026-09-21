/* Ambient Canvas Particle Engine */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 45;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedY = Math.random() * 0.4 - 0.2;
    this.speedX = Math.random() * 0.4 - 0.2;
    this.opacity = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* 3D Glass Tilt Card Physics */
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

/* Digital Archive Database (Modal Engine) */
const archiveData = {
  egypt: {
    title: "Ancient Egypt // Acoustic Subterranean Horizon",
    epoch: "c. 3100 – 30 BCE &bull; Lower Nile Basin",
    content: `
      <p style="color: #8b94a5; line-height: 1.6; margin-bottom: 1rem;">
        Beyond ceremonial functions, the Giza complex incorporates hard diorite drill cores with high spiral penetration rates, multi-ton granite beams engineered inside the King's Chamber, and true-north cardinal accuracy down to fractions of a degree.
      </p>
      <div style="background: rgba(212, 175, 55, 0.08); border-left: 3px solid #d4af37; padding: 0.85rem; margin-bottom: 1rem;">
        <strong style="color: #f3f5f8;">Acoustic Metric:</strong> Internal granite resonance matches ~110-120 Hz, inducing sustained alpha/theta states in neuro-acoustic testing.
      </div>
      <p style="color: #8b94a5; font-size: 0.9rem;">
        Scholarly consensus categorizes monuments as dynastic tombs; anomalous research posits reuse of older megalithic foundations dating closer to the wet African period.
      </p>
    `
  },
  gobekli: {
    title: "Göbekli Tepe Horizon // The 12,000 YA Boundary",
    epoch: "c. 9600 BCE &bull; Anatolia / Upper Mesopotamia",
    content: `
      <p style="color: #8b94a5; line-height: 1.6; margin-bottom: 1rem;">
        Discovered by Klaus Schmidt, Göbekli Tepe completely shattered the old textbook timeline (farming → settlement → religion → megaliths). It proves massive 20-ton T-pillars with intricate high-relief animal carvings were engineered prior to metal tools or settled agriculture.
      </p>
      <div style="background: rgba(230, 154, 53, 0.08); border-left: 3px solid #e69a35; padding: 0.85rem; margin-bottom: 1rem;">
        <strong style="color: #f3f5f8;">Younger Dryas Alignment:</strong> The construction era coincides precisely with the catastrophic Younger Dryas meltwater phase (c. 11,600 years ago).
      </div>
      <p style="color: #8b94a5; font-size: 0.9rem;">
        The entire complex was intentionally buried under thousands of tons of clean soil, functioning as a deliberate time-capsule of pre-flood cosmological knowledge.
      </p>
    `
  },
  indus: {
    title: "Indus Valley (Harappan) // Hydraulic Civilization",
    epoch: "c. 3300 – 1300 BCE &bull; Indus & Ghaggar-Hakra Basin",
    content: `
      <p style="color: #8b94a5; line-height: 1.6; margin-bottom: 1rem;">
        Encompassing Mohenjo-daro, Harappa, Dholavira, and Lothal. Featuring strictly standardized baked bricks with the 4:2:1 ratio, covered municipal sewage, and zero palaces or weapon-heavy fortifications.
      </p>
      <div style="background: rgba(72, 187, 120, 0.08); border-left: 3px solid #68d391; padding: 0.85rem; margin-bottom: 1rem;">
        <strong style="color: #f3f5f8;">Maritime Engineering:</strong> Lothal contains the world's earliest known engineered tidal dock, navigating siltation via sluice gates.
      </div>
    `
  },
  angkor: {
    title: "Angkor Wat Complex // Sacred Central Processing Unit",
    epoch: "c. 1100 CE &bull; Pre-Khmer Sacred Grid",
    content: `
      <p style="color: #8b94a5; line-height: 1.6; margin-bottom: 1rem;">
        LIDAR surveys revealed that Angkor Wat is merely the center of an enormous subterranean geometric grid. Its layout mirrors circuit board micro-architecture designed to regulate massive fluid water flows and solar alignments across equinoxes.
      </p>
      <div style="background: rgba(212, 175, 55, 0.08); border-left: 3px solid #d4af37; padding: 0.85rem; margin-bottom: 1rem;">
        <strong style="color: #f3f5f8;">Concentric Geometry:</strong> Axial symmetries organize flow and mental attention, harmonizing human perception with seasonal astrological transitions.
      </div>
    `
  }
};

function openArchiveModal(civKey) {
  const modal = document.getElementById('archive-modal');
  const body = document.getElementById('modal-body');
  const data = archiveData[civKey];

  if (!data) return;

  body.innerHTML = `
    <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #d4af37; text-transform: uppercase;">${data.epoch}</span>
    <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin: 0.5rem 0 1.25rem; color: #f3f5f8;">${data.title}</h3>
    ${data.content}
  `;

  modal.style.display = 'flex';
}

function closeArchiveModal() {
  document.getElementById('archive-modal').style.display = 'none';
}

window.addEventListener('click', e => {
  const modal = document.getElementById('archive-modal');
  if (e.target === modal) {
    closeArchiveModal();
  }
});
