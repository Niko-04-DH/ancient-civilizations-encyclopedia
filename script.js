/* =========================================================
   CHRONOS ARCHIVE // Progressive Archival Engine & Database
   ========================================================= */

const ARCHIVE_DATABASE = {
  civilizations: [
    {
      id: "egypt",
      name: "Ancient Egypt",
      period: "c. 3100 – 30 BCE",
      region: "Nile Valley",
      evidence: "documented",
      img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
      summary: "Precision megalithic masonry, geodetic True-North cardinal alignment, and internal granite chambers tuned to resonant frequencies.",
      tabs: {
        "Overview": `
          <h4 class="reader-heading">Civilizational Foundations</h4>
          <p>Ancient Egypt developed along the fertile banks of the Nile River, depending upon annual inundation to cultivate surplus grain that sustained a complex central administrative state. The civilization endured for over three millennia across the Early Dynastic, Old Kingdom, Middle Kingdom, and New Kingdom periods.</p>
          <div class="reader-callout">
            <strong>HISTORICAL SIGNIFICANCE:</strong> Beyond monumental funerary architecture, Egyptian society established formalized legal codes, medical papyri, surveying geometry, and a 365-day solar calendar that directly influenced the Julian calendar.
          </div>
        `,
        "Architecture & Engineering": `
          <h4 class="reader-heading">Megalithic Construction & Quarrying</h4>
          <p>The construction of the Great Pyramid of Giza incorporates approximately 2.3 million limestone and granite blocks, ranging from 2.5 to over 50 metric tons. Megalithic rose granite used in the King's Chamber ceiling beams was quarried at Aswan and transported over 800 kilometers downriver via Nile flood barges.</p>
          <p>Documented physical tools include dolerite pounders, copper and bronze chisels, wooden wedges with water-expansion splitting, and quartz-sand slurry saws. However, high-feed rate cylindrical core drill marks found in hard basalt at Abusir and diorite vessels from the Early Dynastic period remain active subjects of engineering study.</p>
          <div class="reader-callout">
            <strong>VERIFIED GEODETIC SURVEY:</strong> The Great Pyramid is aligned to True North within 3/60ths of a single degree (less than 4 minutes of arc), demonstrating mastery of stellar transit observation prior to the magnetic compass.
          </div>
        `,
        "Astronomy & Acoustics": `
          <h4 class="reader-heading">Resonance & Celestial Navigation</h4>
          <p>Astronomical orientation was conducted using plumb-line sighting tools, observing circumpolar stars like Thuban (Alpha Draconis), which served as the Pole Star in the 3rd millennium BCE.</p>
          <p>Acoustic measurements conducted within the King's Chamber identify a prominent resonance frequency near 117–121 Hz. While physical acoustic reinforcement is documented, hypotheses proposing these chambers acted as infrasonic psycho-acoustic transformers or acoustic levitation devices remain speculative without contemporary written papyrological confirmation.</p>
        `,
        "Primary Sources": `
          <h4 class="reader-heading">Surviving Papyri & Field Documentation</h4>
          <ul class="reader-sources-list">
            <li><strong>Diary of Merer (c. 2550 BCE):</strong> Papyrus logbook discovered at Wadi al-Jarf describing limestone transport from Tura to Giza under overseer Merer.</li>
            <li><strong>Rhind Mathematical Papyrus (c. 1550 BCE):</strong> Foundational geometry, fractions, and seked slopes for pyramid inclination.</li>
            <li><strong>Edwin Smith Papyrus (c. 1600 BCE):</strong> Traumatic surgery, anatomy, and cranial sutures based on empirical diagnosis.</li>
          </ul>
        `
      },
      related: ["antikythera", "geometry", "acoustics", "alignment"]
    },
    {
      id: "gobekli",
      name: "Göbekli Tepe Horizon",
      period: "c. 9600 – 8000 BCE",
      region: "Upper Mesopotamia (Anatolia)",
      evidence: "documented",
      img: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?auto=format&fit=crop&w=800&q=80",
      summary: "Predates domesticated agriculture. Monumental monolithic T-pillars erected at the Younger Dryas boundary and intentionally backfilled.",
      tabs: {
        "Overview": `
          <h4 class="reader-heading">The Pre-Pottery Neolithic Paradigm Shift</h4>
          <p>Excavated under the direction of archaeologist Klaus Schmidt (German Archaeological Institute), Göbekli Tepe overturned the orthodox sequence that settled agriculture must precede monumental architecture. Hunter-gatherer bands congregated to erect multi-ton circular megalithic enclosures centuries before wheat domestication or ceramic pottery appeared.</p>
          <div class="reader-callout">
            <strong>CHRONOLOGICAL PLACEMENT:</strong> Radiocarbon dating of pedogenic carbonate layers firmly anchors the oldest megalithic strata to approximately 9600 BCE—coinciding directly with the termination of the Younger Dryas cold period.
          </div>
        `,
        "Megalithic Construction": `
          <h4 class="reader-heading">T-Pillar Engineering & High Relief</h4>
          <p>Enclosures feature pairs of central T-shaped limestone pillars reaching heights of up to 5.5 meters and weighing between 10 and 20 tons. Extracted from adjacent limestone plateaus using flint picks, wooden wedges, and levering fulcrums.</p>
          <p>The pillars exhibit master-level bas-relief and high-relief zoomorphic carvings (vultures, foxes, scorpions, boars) executed directly into the hard stone without bronze or iron tooling.</p>
        `,
        "The Intentional Burial": `
          <h4 class="reader-heading">Deliberate Deposition & Preservation</h4>
          <p>The site was systematically and deliberately backfilled with hundreds of cubic meters of limestone debris, animal bones, and flint tools around 8000 BCE. This intentional entombment protected the carvings from Holocene erosion for ten millennia.</p>
        `,
        "Sources & References": `
          <ul class="reader-sources-list">
            <li>Schmidt, K. (2006). <em>Sie bauten die ersten Tempel: Das rätselhafte Heiligtum der Steinzeitjäger</em>. Verlag C.H. Beck.</li>
            <li>Dietrich, O., et al. (2012). "The role of cult and feasting in the emergence of Neolithic communities." <em>Antiquity</em>, 86(333).</li>
          </ul>
        `
      },
      related: ["younger-dryas", "geometry", "acoustics"]
    },
    {
      id: "indus",
      name: "Indus Valley (Harappan)",
      period: "c. 3300 – 1300 BCE",
      region: "South Asia (Indus Basin)",
      evidence: "documented",
      img: "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=800&q=80",
      summary: "Strict standardized baked brick ratios (4:2:1), underground covered municipal sanitation, and tidal dock maritime locks at Lothal.",
      tabs: {
        "Overview": `
          <h4 class="reader-heading">The First Standardized Urban Civilization</h4>
          <p>Spanning over 1 million square kilometers across modern Pakistan and northwestern India, the Harappan civilization flourished around the Indus and Ghaggar-Hakra river systems. Cities like Mohenjo-daro, Harappa, Dholavira, and Rakhigarhi accommodated populations up to 40,000 people without identifiable monarchical palaces.</p>
        `,
        "Hydraulics & Grid Urbanism": `
          <h4 class="reader-heading">Municipal Drainage & Kiln Engineering</h4>
          <p>Harappan cities were planned on orthogonal grid layouts aligned cardinal directions. Residential units featured private bathrooms connected directly via terracotta pipes into covered municipal brick drainage networks running below street levels.</p>
          <div class="reader-callout">
            <strong>STANDARDIZED METROLOGY:</strong> Baked bricks across all sites strictly conformed to the 4:2:1 dimensional proportion (Length : Breadth : Thickness), ensuring maximum structural tensile strength in bonding.
          </div>
        `,
        "Maritime Engineering": `
          <h4 class="reader-heading">The Lothal Tidal Basin</h4>
          <p>At Lothal in Gujarat, Harappan engineers constructed a massive trapezoidal burnt-brick basin (214 × 36 meters) identified as an engineered tidal dock, navigating siltation via sluice gates.</p>
        `,
        "Decipherment Status": `
          <div class="reader-callout">
            <strong>UNDECIPHERED INSCRIPTIONS:</strong> Over 4,000 steatite stamp seals featuring the Indus script exist, but lack a bilingual inscription (like the Rosetta Stone). The script remains officially undeciphered.
          </div>
        `
      },
      related: ["antikythera", "geometry", "younger-dryas"]
    },
    {
      id: "angkor",
      name: "Angkor Grid Complex",
      period: "c. 802 – 1431 CE",
      region: "Southeast Asia (Cambodia)",
      evidence: "documented",
      img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
      summary: "LIDAR airborne surveys revealed vast concentric hydraulic grids, axial solar alignments, and circuit-like water regulation basins.",
      tabs: {
        "Overview": `
          <h4 class="reader-heading">The Hydraulic Megacity</h4>
          <p>Centering around Angkor Wat and Angkor Thom, the Khmer Empire engineered an urban network that sustained nearly 750,000 inhabitants. Airborne LIDAR surveys demonstrated that Angkor was a vast low-density hydraulic megacity.</p>
        `,
        "Geometric & Water Engineering": `
          <h4 class="reader-heading">Reservoirs & Axial Symmetry</h4>
          <p>Two monumental artificial reservoirs—the West Baray (8 km × 2.1 km) and East Baray—stored over 100 million cubic meters of monsoon runoff to control seasonal flooding, feed three rice harvests annually, and stabilize temple foundations through water-table hydrostatic pressure.</p>
          <div class="reader-callout">
            <strong>CIRCUIT-LIKE CONCENTRIC PLANNING:</strong> Visual similarities to integrated circuits result from fractal Hindu-Buddhist cosmology executed with strict geometric symmetry, axial moats, and hydraulic flow-routing.
          </div>
        `,
        "Solar Alignments": `
          <h4 class="reader-heading">Spring Equinox Alignment</h4>
          <p>On the morning of the Spring Equinox, observers standing at the western entrance causeway see the rising sun crest directly over the central lotus tower of Angkor Wat—demonstrating rigorous astronomical surveying.</p>
        `
      },
      related: ["geometry", "alignment", "acoustics"]
    }
  ],

  knowledge: [
    {
      id: "geometry",
      title: "Sacred Geometry, Pi & Phi",
      icon: "📐",
      evidence: "debated",
      summary: "Mathematical analysis of spherical coordinates, circle squaring, and golden ratio proportions across Giza, Babylon, and Greece.",
      tabs: {
        "What is Sacred Geometry?": `
          <h4 class="reader-heading">Historical Geometric Proportioning</h4>
          <p>Ancient builders viewed geometry as practical spatial truth (geometria: 'earth measurement'). Basic constructions using string pegs and right-angle triangles allowed large structures to be laid out without digital tools.</p>
        `,
        "The Constant Pi": `
          <h4 class="reader-heading">Documentation of Circular Ratios</h4>
          <p><strong>Rhind Papyrus (Egypt, c. 1550 BCE):</strong> Problem 50 gives an approximation of Pi approximately equal to 3.1605.</p>
          <p><strong>Babylonian Tablets (Susa, c. 1900 BCE):</strong> Used 3.125.</p>
          <p><strong>Archimedes of Syracuse (c. 250 BCE):</strong> First rigorous mathematical proof bounding Pi between 3.1408 and 3.1428 using 96-sided polygons.</p>
          <div class="reader-callout">
            <strong>THE GIZA DEBATE:</strong> The perimeter of the Great Pyramid divided by twice its height yields approximately 3.1415. Scholarship debates whether this was deliberate or the result of using a rolling drum wheel to measure base lengths.
          </div>
        `,
        "The Constant Phi (Golden Ratio)": `
          <h4 class="reader-heading">Golden Section: Facts vs Retrospective Fitting</h4>
          <p>First rigorously defined by Euclid of Alexandria in <em>Elements</em> as 'extreme and mean ratio'.</p>
          <div class="reader-callout">
            <strong>CRITICAL ARCHAEOLOGICAL DISTINCTION:</strong> While enthusiasts frequently overlay the Golden Spiral on the Parthenon or Great Pyramid, laser measurements often show proportions align just as closely with integer ratios (like 4:9 in the Parthenon).
          </div>
        `
      },
      related: ["egypt", "angkor", "antikythera", "alignment"]
    },
    {
      id: "acoustics",
      title: "Archaeological Acoustics & Infrasound",
      icon: "🔊",
      evidence: "hypothesis",
      summary: "Empirical studies of resonant chambers, 110–120 Hz hypogeum acoustics, and psychological impacts of sonic standing waves.",
      tabs: {
        "Acoustic Resonance": `
          <h4 class="reader-heading">Physics of Stone Resonators</h4>
          <p>When an enclosed architectural space has dimensions that are multiples of specific sound wavelengths, sound waves reflect between parallel stone walls to produce standing waves and resonant amplification (Helmholtz resonance).</p>
        `,
        "The 110–120 Hz Phenomenon": `
          <h4 class="reader-heading">Measurements at Hal Saflieni & Giza</h4>
          <p>Studies conducted by acoustic researchers at the underground megalithic Hal Saflieni Hypogeum in Malta and cairn chambers in the UK detected pronounced resonant frequency peaks between 110 Hz and 122 Hz.</p>
          <p>Neuro-acoustic testing indicated that frequencies in the 110 Hz range can shift brain activity in the prefrontal cortex toward alpha/theta patterns.</p>
          <div class="reader-callout">
            <strong>EVIDENCE BOUNDARY:</strong> The acoustic resonance of stone chambers is a physical, measurable reality. However, assertions that ancients used acoustics for antigravity stone levitation lack physical evidence.
          </div>
        `
      },
      related: ["egypt", "geometry", "younger-dryas"]
    },
    {
      id: "alignment",
      title: "Geodetic & Solar Alignments",
      icon: "🧭",
      evidence: "documented",
      summary: "True-North orientation surveying methods, solstitial shadow projections, and stellar transit observation before optical telescopes.",
      tabs: {
        "True North Precision": `
          <h4 class="reader-heading">The Giza & Mesoamerican Baseline</h4>
          <p>True North differs from Magnetic North. The Great Pyramid is oriented to geodetic north within 0.067 degrees. At Teotihuacan in Mexico, the Street of the Dead is oriented 15.5 degrees east of north, matching the Pleiades setting horizon.</p>
        `,
        "Surveying Techniques": `
          <h4 class="reader-heading">How Ancients Determined Alignment</h4>
          <p><strong>1. Shadow Gnomon Method:</strong> Erecting a vertical staff inside a circle and marking morning and afternoon shadows.</p>
          <p><strong>2. Simultaneous Stellar Transit:</strong> Observing pairs of opposing circumpolar stars through a plumb-line.</p>
        `
      },
      related: ["egypt", "angkor", "geometry"]
    },
    {
      id: "younger-dryas",
      title: "Younger Dryas & Global Deluge Traditions",
      icon: "🌊",
      evidence: "debated",
      summary: "Climatological meltwater pulses (12.8k–11.6k YA) evaluated alongside universal flood narratives and Vedic Yuga transition models.",
      tabs: {
        "Paleoclimate Evidence": `
          <h4 class="reader-heading">The Younger Dryas Boundary (YDB)</h4>
          <p>The Younger Dryas (c. 12,800 to 11,650 calibrated years ago) was a period of abrupt, severe cooling that interrupted the deglaciation of the Northern Hemisphere, followed by rapid warming and sudden Meltwater Pulses.</p>
        `,
        "Mythology vs Geology": `
          <h4 class="reader-heading">Universal Deluge Narratives</h4>
          <p>Over 200 cultures maintain ancestral flood narratives: <em>The Epic of Gilgamesh</em>, Genesis, Hindu scriptures (Manu & Matsya Avatar), and Mesoamerican traditions.</p>
          <div class="reader-callout">
            <strong>SCHOLARLY DISTINCTION:</strong> Shared narratives reflect memory of catastrophic post-glacial sea-level rises that submerged continental shelves, but do not substantiate a single instantaneous global wave covering highest mountain peaks.
          </div>
        `
      },
      related: ["gobekli", "egypt", "acoustics"]
    }
  ],

  discoveries: [
    {
      id: "antikythera",
      title: "The Antikythera Mechanism",
      location: "Off Antikythera, Greece",
      period: "c. 200 – 60 BCE",
      evidence: "documented",
      summary: "The world's earliest known analogue mechanical computer, predicting eclipses, lunar anomalies, and planetary cycles using differential gear trains.",
      tabs: {
        "Overview": `
          <h4 class="reader-heading">Discovery & Micro-CT Imaging</h4>
          <p>Recovered in 1901 by Greek sponge divers from a shipwreck at a depth of 45 meters, the device consists of 30 surviving bronze gear wheels housed within a wooden frame.</p>
        `,
        "Mechanical Operation": `
          <h4 class="reader-heading">Calculating Epicyclic Anomalies</h4>
          <ul class="reader-sources-list">
            <li><strong>Metonic Cycle:</strong> 235 lunar months tracked across a 19-year calendar.</li>
            <li><strong>Saros Cycle:</strong> 223-month eclipse prediction spiral.</li>
            <li><strong>Variable Lunar Speed:</strong> Replicated Hipparchus's lunar anomaly theory using an eccentric pin-and-slot gear mechanism.</li>
          </ul>
        `
      },
      related: ["geometry", "egypt", "indus"]
    }
  ],

  mysteries: [
    {
      id: "hard-stone-drilling",
      title: "Precision Hard-Stone Extraction & Core Drilling",
      evidence: "debated",
      summary: "Examining cylindrical core drill holes in diorite, basalt, and rose granite with micro-groove feed spirals.",
      tabs: {
        "The Phenomenon": `
          <h4 class="reader-heading">Hardness & Tooling Contradictions</h4>
          <p>Diorite and granite drill cores from Giza and Abusir exhibit continuous spiral striations with a feed pitch of up to 2.5 mm per revolution. Given that diorite rates 7 on Mohs scale and pure copper is only 3, simple copper drilling requires abrasive quartz or corundum slurry.</p>
        `,
        "Experimental Archaeology": `
          <h4 class="reader-heading">Stocks & Modern Replications</h4>
          <p>Denys Stocks demonstrated that copper tube drills with fine quartz sand slurry can cut granite, but achieved penetration rates of only a few millimeters per hour. The high uniform pressure on specific museum cores remains an open engineering inquiry.</p>
        `
      },
      related: ["egypt", "geometry", "younger-dryas"]
    },
    {
      id: "megalithic-logistics",
      title: "Multi-Hundred Ton Monolithic Logistics",
      evidence: "documented",
      summary: "Moving the Trilithon stones at Baalbek (800+ tons) and the Ramesseum Colossus across natural terrain without combustion engines.",
      tabs: {
        "Documented Levers vs Unexplained Limits": `
          <h4 class="reader-heading">Mechanical Advantage & Friction</h4>
          <p>Roman and Egyptian records document capstans, pulleys, and sledge lubrication.</p>
          <p>However, the 800-ton Trilithon blocks at Baalbek in Lebanon were elevated into a terrace wall 7 meters above ground, posing extreme challenges to ancient timber tensile strength under concentrated load points.</p>
        `
      },
      related: ["egypt", "gobekli", "geometry"]
    }
  ],

  timeline: [
    {
      id: "t1",
      period: "c. 10,800 – 9,600 BCE",
      title: "Younger Dryas Boundary & Göbekli Horizon",
      desc: "Abrupt paleoclimatic oscillation, catastrophic meltwater release, and intentional burial of monolithic stone sanctuaries across Upper Mesopotamia.",
      archiveRef: "gobekli"
    },
    {
      id: "t2",
      period: "c. 3300 – 1900 BCE",
      title: "Indus & Sumerian Urban Apex",
      desc: "Orthogonal grid urbanism, covered municipal sanitation, and maritime trade routes connecting Dilmun, Magan, and Meluhha.",
      archiveRef: "indus"
    },
    {
      id: "t3",
      period: "c. 2600 – 2400 BCE",
      title: "Old Kingdom Megalithic Pyramid Construction",
      desc: "Erection of the Giza monuments displaying geodetic True North alignment, deep core drilling, and internal granite Helmholtz acoustics.",
      archiveRef: "egypt"
    },
    {
      id: "t4",
      period: "c. 3102 BCE – Present",
      title: "Traditional Kali Yuga Chronology",
      desc: "Vedic civilizational model documenting the transition toward material density, social fragmentation, and loss of integrated ancient sciences.",
      archiveRef: "younger-dryas"
    }
  ]
};

// 2. Ambient Particle Canvas Animation
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const count = 40;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class DustParticle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.4;
      this.speedX = Math.random() * 0.3 - 0.15;
      this.speedY = Math.random() * 0.3 - 0.15;
      this.opacity = Math.random() * 0.45 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) particles.push(new DustParticle());

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
}

// 3. Render Functions for Grids
function renderCivilizations() {
  const grid = document.getElementById('civilizationsGrid');
  if (!grid) return;

  grid.innerHTML = ARCHIVE_DATABASE.civilizations.map(c => `
    <article class="civ-card glass-panel" onclick="openArchiveReader('civilizations', '${c.id}')">
      <div class="card-img-wrap">
        <img src="${c.img}" alt="${c.name}" class="card-img" loading="lazy">
        <div class="card-img-overlay"></div>
        <span class="card-period-tag">${c.period}</span>
      </div>
      <div class="card-body">
        <span class="card-region">${c.region}</span>
        <h3 class="civ-title">${c.name}</h3>
        <p class="civ-desc">${c.summary}</p>
        <div class="card-footer">
          <span class="badge-evidence ${c.evidence}">${c.evidence}</span>
          <span class="card-open-prompt">ACCESS ARCHIVE &rarr;</span>
        </div>
      </div>
    </article>
  `).join('');
}

function renderKnowledge() {
  const grid = document.getElementById('knowledgeGrid');
  if (!grid) return;

  grid.innerHTML = ARCHIVE_DATABASE.knowledge.map(k => `
    <article class="knowledge-card glass-panel" onclick="openArchiveReader('knowledge', '${k.id}')">
      <div>
        <div class="k-icon-wrap">${k.icon}</div>
        <h3 class="k-title">${k.title}</h3>
        <p class="k-desc">${k.summary}</p>
      </div>
      <div class="k-meta">
        <span class="badge-evidence ${k.evidence}">${k.evidence}</span>
        <span class="card-open-prompt">READ MONOGRAPH &rarr;</span>
      </div>
    </article>
  `).join('');
}

function renderDiscoveries() {
  const grid = document.getElementById('discoveriesGrid');
  if (!grid) return;

  grid.innerHTML = ARCHIVE_DATABASE.discoveries.map(d => `
    <article class="discovery-card glass-panel" onclick="openArchiveReader('discoveries', '${d.id}')">
      <span class="discovery-loc">${d.location} &bull; ${d.period}</span>
      <h3 class="discovery-title">${d.title}</h3>
      <p class="discovery-excerpt">${d.summary}</p>
      <div class="card-footer">
        <span class="badge-evidence ${d.evidence}">${d.evidence}</span>
        <span class="card-open-prompt">INSPECT REPORT &rarr;</span>
      </div>
    </article>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('timelineTree');
  if (!container) return;

  container.innerHTML = ARCHIVE_DATABASE.timeline.map(t => `
    <div class="timeline-node" onclick="openArchiveByRef('${t.archiveRef}')">
      <div class="node-marker"></div>
      <div class="node-content glass-panel">
        <span class="node-date">${t.period}</span>
        <h4 class="node-title">${t.title}</h4>
        <p class="node-text">${t.desc}</p>
        <span class="card-open-prompt">VIEW CHRONOLOGICAL CONTEXT &rarr;</span>
      </div>
    </div>
  `).join('');
}

function renderMysteries() {
  const grid = document.getElementById('mysteryGrid');
  if (!grid) return;

  grid.innerHTML = ARCHIVE_DATABASE.mysteries.map(m => `
    <article class="mystery-card glass-panel" onclick="openArchiveReader('mysteries', '${m.id}')">
      <span class="badge-evidence ${m.evidence}">${m.evidence}</span>
      <h3 class="mystery-heading">${m.title}</h3>
      <p class="mystery-body">${m.summary}</p>
      <div class="card-footer">
        <span class="card-open-prompt">EXAMINE INQUIRY &rarr;</span>
      </div>
    </article>
  `).join('');
}

// 4. Archive Reader Engine (Progressive Disclosure)
function openArchiveReader(categoryKey, itemId) {
  const category = ARCHIVE_DATABASE[categoryKey];
  if (!category) return;
  const item = category.find(x => x.id === itemId);
  if (!item) return;

  const modal = document.getElementById('archiveReaderModal');
  const catLabel = document.getElementById('readerCategory');
  const badge = document.getElementById('readerBadge');
  const tabsBar = document.getElementById('readerTabsBar');
  const body = document.getElementById('readerBody');
  const chips = document.getElementById('readerRelatedChips');

  catLabel.textContent = categoryKey.toUpperCase() + " // ARCHIVE";
  badge.textContent = (item.evidence || 'DOCUMENTED').toUpperCase();
  badge.className = `badge-evidence ${item.evidence || 'documented'}`;

  // Build Tabs
  const tabKeys = Object.keys(item.tabs);
  tabsBar.innerHTML = tabKeys.map((tab, idx) => `
    <button class="reader-tab-btn ${idx === 0 ? 'active' : ''}" onclick="switchReaderTab('${categoryKey}', '${itemId}', '${tab}', this)">
      ${tab}
    </button>
  `).join('');

  // Initial Tab Content
  body.innerHTML = `
    <h2 class="reader-article-title">${item.name || item.title}</h2>
    <div class="reader-article-sub">${item.period || item.location || 'ARCHIVAL SURVEY'}</div>
    <div class="reader-section-block">
      ${item.tabs[tabKeys[0]]}
    </div>
  `;

  // Related Topics Chips
  if (item.related && item.related.length > 0) {
    chips.innerHTML = item.related.map(relId => {
      const relItem = findItemGlobally(relId);
      if (!relItem) return '';
      return `<span class="related-chip" onclick="openArchiveByRef('${relId}')">${relItem.name || relItem.title} ↗</span>`;
    }).join('');
  } else {
    chips.innerHTML = '<span class="text-dim">No further indexed references.</span>';
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function switchReaderTab(categoryKey, itemId, tabName, btnEl) {
  document.querySelectorAll('.reader-tab-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');

  const item = ARCHIVE_DATABASE[categoryKey].find(x => x.id === itemId);
  if (!item) return;

  const body = document.getElementById('readerBody');
  body.innerHTML = `
    <h2 class="reader-article-title">${item.name || item.title}</h2>
    <div class="reader-article-sub">${tabName.toUpperCase()} &bull; ${item.period || ''}</div>
    <div class="reader-section-block">
      ${item.tabs[tabName]}
    </div>
  `;
}

function closeArchiveReader() {
  const modal = document.getElementById('archiveReaderModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';
}

function findItemGlobally(itemId) {
  for (const cat in ARCHIVE_DATABASE) {
    const found = ARCHIVE_DATABASE[cat].find(x => x.id === itemId);
    if (found) return { ...found, category: cat };
  }
  return null;
}

function openArchiveByRef(refId) {
  const found = findItemGlobally(refId);
  if (found) {
    openArchiveReader(found.category, found.id);
  }
}

// 5. Global Client-side Search Engine
function initSearch() {
  const openBtn = document.getElementById('searchOpenBtn');
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('archiveSearchInput');
  const results = document.getElementById('searchResults');
  if (!openBtn || !modal || !input) return;

  openBtn.addEventListener('click', openSearchModal);

  window.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === 'Escape') {
      closeSearchModal();
      closeArchiveReader();
    }
  });

  input.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    if (q.length < 2) {
      results.innerHTML = '<p class="search-hint">Type keywords like "Antikythera", "Pi", "Acoustics", "Egypt", or "Younger Dryas"...</p>';
      return;
    }

    const matches = [];
    for (const catKey of ['civilizations', 'knowledge', 'discoveries', 'mysteries']) {
      ARCHIVE_DATABASE[catKey].forEach(item => {
        const text = `${item.name || item.title} ${item.summary} ${JSON.stringify(item.tabs)}`.toLowerCase();
        if (text.includes(q)) {
          matches.push({ item, catKey });
        }
      });
    }

    if (matches.length === 0) {
      results.innerHTML = `<p class="search-hint">No archival records matching "${q}".</p>`;
      return;
    }

    results.innerHTML = matches.map(({ item, catKey }) => `
      <div class="search-result-item" onclick="closeSearchModal(); openArchiveReader('${catKey}', '${item.id}')">
        <div class="search-item-header">
          <span class="search-item-title">${item.name || item.title}</span>
          <span class="search-item-type">${catKey.toUpperCase()}</span>
        </div>
        <p class="search-item-desc">${item.summary.substring(0, 110)}...</p>
      </div>
    `).join('');
  });
}

function openSearchModal() {
  const modal = document.getElementById('searchModal');
  if (!modal) return;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  setTimeout(() => {
    const input = document.getElementById('archiveSearchInput');
    if (input) input.focus();
  }, 50);
}

function closeSearchModal() {
  const modal = document.getElementById('searchModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

// 6. Bootstrap Architecture
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  renderCivilizations();
  renderKnowledge();
  renderDiscoveries();
  renderTimeline();
  renderMysteries();
  initSearch();
});