'use strict';
/* =====================================================================
   FIGURES: every diagram is generated here so it follows the theme tokens
   ===================================================================== */
const LC = 'var(--hema)', SC = 'var(--eosin)', AM = 'var(--amber)';
const svg = (w, h, label, inner, cls) => `<svg viewBox="0 0 ${w} ${h}" class="${cls || ''}" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
const figure = (inner, cap) => `<figure><div class="fig">${inner}</div><figcaption>${cap}</figcaption></figure>`;
const T = (x, y, s, cls, anchor) => `<text x="${x}" y="${y}" class="${cls || 'sv-t'}" text-anchor="${anchor || 'middle'}">${s}</text>`;
const TL = (x, y, lines, cls, anchor, lh) => lines.map((s, i) => T(x, y + i * (lh || 15), s, cls || 'sv-t2', anchor)).join('');
const arrow = (x1, y1, x2, y2) => {
  const a = Math.atan2(y2 - y1, x2 - x1), s = 8;
  const p = [[x2, y2], [x2 - s * Math.cos(a - .45), y2 - s * Math.sin(a - .45)], [x2 - s * Math.cos(a + .45), y2 - s * Math.sin(a + .45)]].map(q => q.map(n => n.toFixed(1)).join(',')).join(' ');
  return `<line class="sv-arrow" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><polygon points="${p}" fill="var(--ink2)"/>`;
};

/* chromosome shapes */
const cell = (cx, cy, rx, ry) => `<ellipse class="sv-cell" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"/>`;
const nuc = (cx, cy, r) => `<circle class="sv-nuc" cx="${cx}" cy="${cy}" r="${r}"/>`;
const sw = h => Math.max(4, h * .28);
const cX = (x, y, h, c) => `<path d="M${x - h * .3} ${y - h} L${x + h * .3} ${y + h} M${x + h * .3} ${y - h} L${x - h * .3} ${y + h}" stroke="${c}" stroke-width="${sw(h)}" stroke-linecap="round" fill="none"/><circle cx="${x}" cy="${y}" r="${Math.max(2.4, h * .11)}" fill="var(--surface)"/>`;
const cV = (x, y, h, c, up, rot) => {
  const d = up ? -1 : 1;
  const p = `<path d="M${x - h * .34} ${y - d * h} L${x} ${y} L${x + h * .34} ${y - d * h}" stroke="${c}" stroke-width="${sw(h)}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
  return rot ? `<g transform="rotate(${rot} ${x} ${y})">${p}</g>` : p;
};
const rod = (x, y, h, c) => `<line x1="${x}" y1="${y - h}" x2="${x}" y2="${y + h}" stroke="${c}" stroke-width="${sw(h)}" stroke-linecap="round"/>`;
const squig = (x, y, w, c) => `<path d="M${x - w} ${y} q${w / 4} -9 ${w / 2} 0 t${w / 2} 0 t${w / 2} 0 t${w / 2} 0" stroke="${c}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
const pole = (x, y) => `<circle cx="${x}" cy="${y}" r="4.5" fill="var(--eosin)"/><circle cx="${x}" cy="${y}" r="9" fill="none" stroke="var(--eosin)" stroke-width="1.5"/>`;
const fib = (x1, y1, x2, y2) => `<line class="sv-thin" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
const dumbbell = (cx, cy, r, w, off, vertical) => {
  const p = `M${cx} ${cy - w} C${cx + 12} ${cy - w} ${cx + off - 12} ${cy - r} ${cx + off} ${cy - r} A${r} ${r} 0 0 1 ${cx + off} ${cy + r} C${cx + off - 12} ${cy + r} ${cx + 12} ${cy + w} ${cx} ${cy + w} C${cx - 12} ${cy + w} ${cx - off + 12} ${cy + r} ${cx - off} ${cy + r} A${r} ${r} 0 0 1 ${cx - off} ${cy - r} C${cx - off + 12} ${cy - r} ${cx - 12} ${cy - w} ${cx} ${cy - w} Z`;
  return `<path class="sv-cell" d="${p}" ${vertical ? `transform="rotate(90 ${cx} ${cy})"` : ''}/>`;
};

/* ---------- 1. DNA packaging ---------- */
function figPacking() {
  let h = '';
  // panel 1: double helix
  let a = '', b = '', rungs = '';
  const N = 48;
  for (let i = 0; i <= N; i++) {
    const y = 28 + i * (140 / N), ph = i * 2 * Math.PI / 16;
    const x1 = 75 + 16 * Math.sin(ph), x2 = 75 - 16 * Math.sin(ph);
    a += (i ? 'L' : 'M') + x1.toFixed(1) + ' ' + y.toFixed(1);
    b += (i ? 'L' : 'M') + x2.toFixed(1) + ' ' + y.toFixed(1);
    if (i % 3 === 0) rungs += `<line x1="${x1.toFixed(1)}" y1="${y.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--amber)" stroke-width="2"/>`;
  }
  h += rungs + `<path d="${a}" stroke="${LC}" stroke-width="3.5" fill="none"/><path d="${b}" stroke="${SC}" stroke-width="3.5" fill="none"/>`;
  // panel 2: DNA on histones
  [42, 80, 118, 156].forEach(y => { h += `<ellipse cx="230" cy="${y}" rx="19" ry="8" fill="none" stroke="${LC}" stroke-width="3"/><circle cx="230" cy="${y}" r="11" fill="${SC}" opacity=".9"/>`; });
  h += `<path d="M230 53 V69 M230 91 V107 M230 129 V145" stroke="${LC}" stroke-width="3"/>`;
  // panel 3: further coiling
  for (let i = 0; i < 10; i++) h += `<ellipse cx="385" cy="${34 + i * 14.5}" rx="22" ry="7" fill="none" stroke="${LC}" stroke-width="4"/>`;
  // panel 4: coil within chromosome
  for (let i = 0; i < 6; i++) h += `<ellipse cx="540" cy="${42 + i * 23}" rx="34" ry="11" fill="none" stroke="${LC}" stroke-width="8"/>`;
  // panel 5: nucleus + chromosome
  h += `<circle class="sv-nuc" cx="695" cy="95" r="66"/>` + squig(690, 52, 26, SC) + squig(700, 138, 26, SC) + cX(695, 95, 34, LC);
  [[98, 202], [256, 356], [412, 502], [584, 622]].forEach(([a, b]) => { h += arrow(a, 95, b, 95); });
  const labs = [[75, 'DNA double helix'], [230, 'DNA wrapped on histones'], [385, 'Further coiling'], [540, 'Coil within chromosome'], [695, 'Chromosome in the nucleus']];
  labs.forEach(([x, s], i) => { h += T(x, 192, s, 'sv-b') + T(x, 208, 'Level ' + (i + 1), 'sv-t2'); });
  return figure(svg(780, 218, 'DNA packaging from double helix to chromosome in five levels', h),
    'From the slide: the double helix wraps around histones, coils, coils again, and becomes a rod-shaped chromosome as the cell prepares to divide. Levels are schematic, not to scale.');
}

/* ---------- 2. chromosome anatomy ---------- */
function figChromosome() {
  let h = '';
  h += `<path d="M92 30 L120 115 L92 200" stroke="${LC}" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
  h += `<path d="M148 30 L120 115 L148 200" stroke="${LC}" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".72"/>`;
  h += `<circle cx="120" cy="115" r="9" fill="${SC}" stroke="var(--surface)" stroke-width="2"/>`;
  h += `<ellipse cx="104" cy="122" rx="4" ry="8" fill="${AM}"/><ellipse cx="136" cy="122" rx="4" ry="8" fill="${AM}"/>`;
  h += `<line class="sv-thin" x1="160" y1="60" x2="198" y2="60"/>` + T(204, 64, 'Sister chromatid (one of two identical copies)', 'sv-t', 'start');
  h += `<line class="sv-thin" x1="130" y1="108" x2="198" y2="100"/>` + T(204, 104, 'Centromere: holds the sisters together', 'sv-t', 'start');
  h += `<line class="sv-thin" x1="141" y1="126" x2="198" y2="138"/>` + T(204, 142, 'Kinetochore: spindle fibers attach here', 'sv-t', 'start');
  // chromatin
  h += `<path d="M262 190 q16 -26 32 0 t32 0 t32 0 t32 0 M274 204 q14 -22 28 0 t28 0 t28 0 t28 0" stroke="${LC}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
  h += T(204, 176, 'Chromatin: the less tightly coiled DNA-protein complex', 'sv-t', 'start');
  h += T(120, 222, 'Duplicated chromosome (as seen in mitosis)', 'sv-t2');
  return figure(svg(620, 232, 'Annotated duplicated chromosome showing sister chromatids, centromere, kinetochore, and loose chromatin', h),
    'Chromatin and chromosomes are the same DNA-protein material at different coiling levels. The sister chromatids appear once DNA has been copied.');
}

/* ---------- 3. karyotype strip ---------- */
function figKaryo() {
  let h = '';
  for (let i = 1; i <= 22; i++) {
    const x = 22 + (i - 1) * 32, hh = 92 - (i - 1) * (60 / 21);
    h += `<rect x="${x - 8}" y="22" width="8" height="${hh.toFixed(1)}" rx="4" fill="${LC}"/><rect x="${x + 2}" y="22" width="8" height="${hh.toFixed(1)}" rx="4" fill="${LC}" opacity=".75"/>` + T(x + 1, 132, i, 'sv-t2');
  }
  const sx = 22 + 22 * 32 + 8;
  h += `<rect x="${sx - 8}" y="22" width="10" height="70" rx="5" fill="${SC}"/><rect x="${sx + 8}" y="22" width="8" height="38" rx="4" fill="${AM}"/>` + T(sx - 3, 132, 'X', 'sv-b') + T(sx + 12, 132, 'Y', 'sv-b');
  h += `<path d="M14 142 H${22 + 21 * 32 + 12}" stroke="var(--ink2)" stroke-width="1.5"/>` + T(14 + (22 + 21 * 32 + 12 - 14) / 2, 160, '22 homologous pairs of autosomes (44 chromosomes)', 'sv-t');
  h += `<path d="M${sx - 12} 142 H${sx + 22}" stroke="var(--ink2)" stroke-width="1.5"/>` + T(sx + 6, 160, 'Sex pair', 'sv-t');
  return figure(svg(780, 172, 'Human karyotype layout: 22 autosome pairs plus the X and Y sex chromosomes', h),
    'Schematic karyotype (not a real photomicrograph). A normal human cell has 46 chromosomes: 44 autosomes in 22 pairs plus 2 sex chromosomes (XX in females, XY in males).');
}

/* ---------- 4. binary fission ---------- */
function figFission(labels) {
  const cy = 70, loop = (x, y, rx, ry) => `<ellipse cx="${x}" cy="${y}" rx="${rx || 14}" ry="${ry || 9}" fill="none" stroke="${LC}" stroke-width="3.5"/>`;
  const cap = (cx, w, hh) => `<rect x="${cx - w / 2}" y="${cy - (hh || 64) / 2}" width="${w}" height="${hh || 64}" rx="${(hh || 64) / 2}" class="sv-cell"/>`;
  let h = '';
  h += cap(62, 100) + loop(62, cy);
  h += cap(200, 100) + loop(188, cy - 3) + loop(212, cy + 3);
  h += cap(372, 168) + loop(330, cy) + loop(414, cy) + `<line x1="372" y1="${cy - 24}" x2="372" y2="${cy + 24}" stroke="${AM}" stroke-width="3" stroke-dasharray="4 3"/>`;
  h += dumbbell(556, cy, 30, 15, 36, false) + loop(520, cy) + loop(592, cy);
  h += cap(745, 56, 60) + cap(810, 56, 60) + loop(745, cy, 11, 8) + loop(810, cy, 11, 8);
  [[116, 146], [254, 284], [460, 486], [626, 712]].forEach(([a, b]) => { h += arrow(a, cy, b, cy); });
  if (labels) {
    const L = [
      [62, ['1. Start: one', 'circular chromosome']],
      [200, ['2. DNA is copied: two', 'identical chromosomes', 'attach to the membrane']],
      [372, ['3. New membrane grows', 'between the copies; cell', 'reaches about 2x its size']],
      [556, ['4. Membrane pushes in;', 'cell constricts like a', 'squeezed balloon']],
      [778, ['5. New cell wall: two', 'independent cells,', 'one chromosome each']]
    ];
    L.forEach(([x, ls]) => { h += TL(x, 128, ls, 'sv-t2', 'middle', 15); });
  }
  return svg(880, labels ? 190 : 110, 'Binary fission in five steps: DNA copied, membrane grows between copies, cell constricts, two cells result', h);
}
const figFissionFull = () => figure(figFission(true), 'Binary fission in a prokaryote: two genetically identical cells from one. Based on the slide figure and its step list.');

/* ---------- 5. Mendel P -> F1 -> F2 ---------- */
function figMendelPath() {
  const dot = (x, y, purple, lab) => `<circle cx="${x}" cy="${y}" r="15" fill="${purple ? 'var(--flower)' : 'var(--surface)'}" stroke="var(--ink2)" stroke-width="2"/>` + T(x, y + 34, lab, 'sv-gt');
  let h = '';
  h += dot(62, 66, true, 'PP') + dot(132, 66, false, 'pp') + T(97, 71, '\u00D7', 'sv-b');
  h += TL(97, 130, ['P generation', 'true-breeding parents'], 'sv-b', 'middle', 16);
  h += arrow(190, 66, 270, 66) + T(230, 52, 'cross-pollinate', 'sv-t2');
  [305, 337, 369, 401].forEach(x => { h += dot(x, 66, true, 'Pp'); });
  h += TL(353, 130, ['F1 generation', 'all purple'], 'sv-b', 'middle', 16);
  h += arrow(450, 66, 530, 66) + T(490, 52, 'self-pollinate', 'sv-t2');
  [[590, 1, 'PP'], [624, 1, 'Pp'], [658, 1, 'Pp'], [692, 0, 'pp']].forEach(([x, p, l]) => { h += dot(x, 66, p, l); });
  h += TL(641, 130, ['F2 generation', '3 purple : 1 white'], 'sv-b', 'middle', 16);
  h += T(641, 166, "Mendel's count: 705 purple : 224 white", 'sv-t2');
  return figure(svg(780, 182, 'Mendel cross: true-breeding purple and white parents give all purple F1, then three purple to one white in F2', h),
    'Modern allele letters (P = purple, p = white) applied to the slide figure. Purple is dominant, so PP and Pp both look purple.');
}

/* ---------- 6. Mendel evidence chart ---------- */
const MENDEL = [
  ['Seed color', 'yellow', 'green', 6022, 2001],
  ['Seed shape', 'round', 'wrinkled', 5474, 1850],
  ['Pod shape', 'inflated', 'constricted', 882, 299],
  ['Stem length', 'tall', 'short', 787, 277],
  ['Flower color', 'purple', 'white', 705, 224],
  ['Flower position', 'axial', 'terminal', 651, 207],
  ['Pod color', 'green', 'yellow', 428, 152]
];
function figMendelChart() {
  const x0 = 200, W = 380, rowH = 40, y0 = 46;
  let h = '';
  h += `<rect x="${x0}" y="14" width="12" height="12" fill="${LC}"/>` + T(x0 + 18, 25, 'dominant trait', 'sv-t2', 'start') + `<rect x="${x0 + 118}" y="14" width="12" height="12" fill="${SC}"/>` + T(x0 + 136, 25, 'recessive trait', 'sv-t2', 'start');
  MENDEL.forEach((r, i) => {
    const y = y0 + i * rowH, n = r[3] + r[4], p = r[3] / n, bw = W * p;
    h += T(x0 - 10, y + 15, r[0], 'sv-b', 'end') + T(x0 - 10, y + 30, 'n = ' + n.toLocaleString('en-US'), 'sv-t2', 'end');
    h += `<rect x="${x0}" y="${y + 4}" width="${bw.toFixed(1)}" height="26" fill="${LC}"/><rect x="${(x0 + bw).toFixed(1)}" y="${y + 4}" width="${(W - bw).toFixed(1)}" height="26" fill="${SC}"/>`;
    h += T(x0 + 8, y + 22, (p * 100).toFixed(1) + '%', 'sv-b', 'start').replace('class="sv-b"', 'class="sv-b" style="fill:var(--on-hema)"');
    h += T(x0 + W + 12, y + 14, r[3].toLocaleString('en-US') + ' : ' + r[4].toLocaleString('en-US'), 'sv-t', 'start') + T(x0 + W + 12, y + 30, (r[3] / r[4]).toFixed(2) + ' : 1  (' + r[1] + ' : ' + r[2] + ')', 'sv-t2', 'start');
  });
  const lx = x0 + W * .75;
  h += `<line x1="${lx}" y1="36" x2="${lx}" y2="${y0 + MENDEL.length * rowH}" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4"/>` + T(lx, 38, 'predicted 75% (3 : 1)', 'sv-b');
  return figure(svg(860, y0 + MENDEL.length * rowH + 8, 'Bar chart of Mendel F2 results for seven characteristics, each close to 75 percent dominant', h),
    "Drawn from the slides' Table 9-1 counts. Rows are sorted by sample size: the two biggest samples land closest to the 75% line, while the smaller ones wander a little more.");
}

/* ---------- 7. Cell cycle wheel (interactive) ---------- */
const WHEEL = [
  { k: 'g1', a0: 250, a1: 360, lab: 'G1', fill: 0.30, col: LC, d: '<strong>G1 (growth).</strong> Right after division the offspring cells are about half the original size. In G1 they grow to mature size. "G" stands for gap: G1 is the time gap after cell division and before DNA replication.' },
  { k: 's', a0: 0, a1: 85, lab: 'S', fill: 0.58, col: LC, d: "<strong>S (synthesis).</strong> The cell's DNA is copied. After this, every chromosome consists of two identical sister chromatids." },
  { k: 'g2', a0: 85, a1: 175, lab: 'G2', fill: 0.18, col: LC, d: '<strong>G2 (growth and preparation).</strong> The time gap after DNA synthesis and before cell division. The cell prepares to divide.' },
  { k: 'm', a0: 175, a1: 215, lab: 'M', fill: 0.5, col: 'var(--pea)', d: '<strong>Mitosis.</strong> The nucleus divides: prophase, metaphase, anaphase, telophase (Module 4).' },
  { k: 'c', a0: 215, a1: 250, lab: 'C', fill: 0.28, col: 'var(--pea)', d: '<strong>Cytokinesis.</strong> The cytoplasm divides, finishing the two daughter cells.' }
];
function figWheel() {
  const cx = 215, cy = 195, r0 = 78, r1 = 140;
  const P = (r, a) => [cx + r * Math.sin(a * Math.PI / 180), cy - r * Math.cos(a * Math.PI / 180)];
  let h = '';
  WHEEL.forEach(s => {
    const [x1, y1] = P(r1, s.a0), [x2, y2] = P(r1, s.a1), [x3, y3] = P(r0, s.a1), [x4, y4] = P(r0, s.a0), big = (s.a1 - s.a0) > 180 ? 1 : 0;
    h += `<path class="sv-seg" tabindex="0" role="button" data-seg="${s.k}" aria-label="${s.lab}: show details" d="M${x1.toFixed(1)} ${y1.toFixed(1)} A${r1} ${r1} 0 ${big} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} L${x3.toFixed(1)} ${y3.toFixed(1)} A${r0} ${r0} 0 ${big} 0 ${x4.toFixed(1)} ${y4.toFixed(1)} Z" fill="${s.col}" fill-opacity="${s.fill}"/>`;
    const [tx, ty] = P((r0 + r1) / 2, (s.a0 + s.a1) / 2);
    h += `<text x="${tx.toFixed(1)}" y="${(ty + 5).toFixed(1)}" class="sv-b" text-anchor="middle" pointer-events="none" style="font-size:16px">${s.lab}</text>`;
  });
  h += T(cx, cy - 6, 'Cell cycle', 'sv-b') + T(cx, cy + 12, 'clockwise', 'sv-t2');
  const [gx, gy] = P(r1 + 30, 305);
  h += `<circle class="sv-seg" tabindex="0" role="button" data-seg="g0" aria-label="G0: show details" cx="${gx.toFixed(1)}" cy="${gy.toFixed(1)}" r="26" fill="var(--ink2)" fill-opacity=".22"/>` + T(gx.toFixed(1), (gy + 5).toFixed(1), 'G0', 'sv-b').replace('<text', '<text pointer-events="none"');
  const [lx, ly] = P(r1, 305);
  h += `<line class="sv-thin" x1="${lx.toFixed(1)}" y1="${ly.toFixed(1)}" x2="${(gx + 14).toFixed(1)}" y2="${(gy + 18).toFixed(1)}"/>`;
  h += T(30, 24, 'Interphase = G1 + S + G2', 'sv-t', 'start') + T(30, 42, 'Cell division = M + C', 'sv-t', 'start');
  h += arrow(cx + 40, cy + 150, cx - 10, cy + 150);
  return svg(430, 362, 'Cell cycle wheel with G1, S, G2, mitosis, cytokinesis and the G0 side branch', h, 'narrow');
}
function initWheel(root) {
  const box = root.querySelector('[data-wheel-desc]');
  const show = k => {
    const s = WHEEL.find(w => w.k === k);
    box.innerHTML = k === 'g0' ? '<strong>G0 (resting state).</strong> A cell can exit the cycle, usually from G1. In G0 it does not copy its DNA and does not prepare to divide. Many cells in the human body are in G0; for example, fully developed central nervous system cells stop dividing at maturity and normally never divide again.' : s.d;
    root.querySelectorAll('[data-seg]').forEach(e => e.classList.toggle('on', e.dataset.seg === k));
  };
  root.querySelectorAll('[data-seg]').forEach(e => {
    e.addEventListener('click', () => show(e.dataset.seg));
    e.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); show(e.dataset.seg); } });
  });
}
const wheelFig = () => ({
  html: figure(`<div data-wheel>${figWheel()}</div>`, 'Slice sizes are illustrative. Select any slice, or the G0 circle, to read what happens there.') +
    '<div class="callout note" data-wheel-desc aria-live="polite">Select a part of the wheel to see what happens there. Start with G1 and go clockwise.</div>',
  init: initWheel
});

/* ---------- 8. Stage viewers (mitosis, meiosis) ---------- */
const interphaseDraw = () => cell(180, 150, 125, 112) + nuc(180, 150, 62) + `<circle cx="206" cy="166" r="9" fill="var(--eosin)" opacity=".45"/>` +
  squig(178, 122, 24, LC) + squig(178, 140, 24, SC) + squig(172, 158, 22, SC) + squig(178, 176, 24, LC);
const MITOSIS = [
  { n: 'Before: interphase', t: 'Interphase: DNA has been copied', cnt: 'Human cell: 46 chromosomes, each already two chromatids (92 chromatids).',
    b: ['DNA was copied in S phase, so each chromosome now has two identical sister chromatids.', 'The DNA is still loosely coiled as chromatin.', 'G2 follows: the cell grows and prepares to divide.'],
    d: interphaseDraw },
  { n: 'Prophase', t: 'Prophase: the first phase', cnt: 'Human cell: 46 chromosomes, each with 2 sister chromatids.',
    b: ['DNA shortens and coils tightly into rod-shaped chromosomes visible with a light microscope.', 'The nucleolus disintegrates inside the nucleus.', 'Centrioles divide and move apart; spindle fibers begin to form.', 'The two parts of each chromosome are the sister chromatids.'],
    d: () => cell(180, 150, 125, 112) + nuc(180, 150, 62) + cX(158, 128, 22, LC) + cX(206, 124, 15, SC) + cX(152, 176, 15, SC) + cX(208, 174, 22, LC) +
      pole(180, 52) + pole(180, 248) + fib(180, 60, 150, 92) + fib(180, 60, 210, 92) + fib(180, 240, 150, 208) + fib(180, 240, 210, 208) },
  { n: 'Metaphase', t: 'Metaphase: the second phase', cnt: 'Human cell: 46 chromosomes lined up at the center.',
    b: ['Kinetochore fibers move the chromosomes to the center of the dividing cell.', 'Chromosomes are easiest to identify under the microscope in this phase.'],
    d: () => { const xs = [[125, 22, LC], [160, 15, SC], [200, 15, SC], [235, 22, LC]]; let s = cell(180, 150, 125, 112) + pole(180, 40) + pole(180, 260) + `<path class="sv-thin" d="M180 46 Q40 150 180 254" stroke-dasharray="4 3"/><path class="sv-thin" d="M180 46 Q320 150 180 254" stroke-dasharray="4 3"/>`; xs.forEach(([x, h, c]) => { s += fib(180, 46, x, 148) + fib(180, 254, x, 152) + cX(x, 150, h, c); }); return s; } },
  { n: 'Anaphase', t: 'Anaphase: the third phase', cnt: 'Human cell: 92 separated chromosomes, 46 heading to each pole.',
    b: ['The chromatids of each chromosome separate at the centromere.', 'They move, centromere first, toward opposite poles.', 'Once separated, each chromatid is counted as an individual chromosome.'],
    d: () => { const xs = [[125, 22, LC], [160, 15, SC], [200, 15, SC], [235, 22, LC]]; let s = cell(180, 150, 118, 124) + pole(180, 36) + pole(180, 264); xs.forEach(([x, h, c]) => { s += fib(180, 40, x, 98) + fib(180, 260, x, 202) + cV(x, 100, h, c, true) + cV(x, 200, h, c, false); }); return s; } },
  { n: 'Telophase + cytokinesis', t: 'Telophase: the fourth phase (with cytokinesis)', cnt: 'Human: two daughter cells, 46 chromosomes in each.',
    b: ['Chromosomes reach opposite ends; the spindle fibers disassemble.', 'Chromosomes uncoil back into less tightly coiled chromatin.', 'A nuclear envelope forms around each set and a nucleolus forms in each new cell.', 'Cytokinesis pinches the cytoplasm in two at the cleavage furrow.'],
    d: () => dumbbell(180, 150, 60, 22, 52, true) + nuc(180, 98, 36) + nuc(180, 202, 36) +
      [[98], [202]].map(([y]) => squig(180, y - 12, 14, LC) + squig(180, y - 4, 14, SC) + squig(180, y + 4, 14, SC) + squig(180, y + 12, 14, LC)).join('') +
      arrow(100, 150, 128, 150) + arrow(260, 150, 232, 150) }
];
const MEIOSIS = [
  { n: 'Interphase', t: 'Interphase: DNA replicates once', cnt: 'Human cell: 46 chromosomes, each now 2 identical chromatids.',
    b: ['Replication of DNA in preparation for meiosis.', 'After replication, each chromosome comprises 2 identical chromatids.'],
    d: interphaseDraw },
  { n: 'Prophase I', t: 'Prophase I', cnt: 'Human cell: 46 chromosomes = 23 homologous pairs.',
    b: ['Chromosomes condense into visible X-shaped structures.', 'Homologous chromosomes pair up.', 'Crossing-over (recombination) happens here, in prophase I of meiosis 1.'],
    d: () => cell(180, 150, 125, 112) + nuc(180, 150, 62) + cX(150, 126, 18, LC) + cX(172, 126, 18, LC) + cX(150, 176, 12, SC) + cX(168, 176, 12, SC) +
      `<circle cx="161" cy="120" r="6" fill="none" stroke="${AM}" stroke-width="2.5"/>` + T(252, 112, 'chiasma', 'sv-t2', 'start') + `<line class="sv-thin" x1="249" y1="110" x2="170" y2="119"/>` + pole(180, 52) + pole(180, 248) },
  { n: 'Metaphase I', t: 'Metaphase I', cnt: 'Human cell: 23 pairs lined up across the middle.',
    b: ['Paired chromosomes line up along the middle of the cell.', 'Compare with mitosis, where single chromosomes line up, not pairs.'],
    d: () => cell(180, 150, 125, 112) + pole(180, 40) + pole(180, 260) + `<line x1="62" y1="150" x2="298" y2="150" class="sv-thin" stroke-dasharray="5 4"/>` +
      fib(180, 46, 125, 108) + fib(180, 254, 125, 192) + fib(180, 46, 235, 120) + fib(180, 254, 235, 180) +
      cX(125, 128, 17, LC) + cX(125, 172, 17, LC) + cX(235, 134, 12, SC) + cX(235, 166, 12, SC) },
  { n: 'Anaphase I', t: 'Anaphase I', cnt: 'Human cell: 23 chromosomes (still doubled) move to each pole.',
    b: ['The pairs of chromosomes separate and move to opposing poles.', 'Either one of each pair can go to either pole.'],
    d: () => cell(180, 150, 118, 124) + pole(180, 36) + pole(180, 264) + fib(180, 42, 125, 80) + fib(180, 42, 235, 90) + fib(180, 258, 125, 220) + fib(180, 258, 235, 210) +
      cX(125, 100, 17, LC) + cX(235, 106, 12, SC) + cX(125, 200, 17, LC) + cX(235, 194, 12, SC) },
  { n: 'Telophase I', t: 'Telophase I', cnt: 'Human: 2 cells, 23 chromosomes each (each chromosome still 2 chromatids).',
    b: ['Nuclear membranes reform.', 'The cell divides and 2 daughter cells are formed, each with 23 chromosomes.'],
    d: () => dumbbell(180, 150, 60, 22, 52, true) + nuc(180, 98, 36) + nuc(180, 202, 36) + cX(166, 98, 13, LC) + cX(196, 98, 9, SC) + cX(166, 202, 13, LC) + cX(196, 202, 9, SC) },
  { n: 'Prophase II', t: 'Prophase II', cnt: 'Human: 2 cells, 23 chromosomes each. No new DNA copying.',
    b: ['There are now 2 cells.', 'DNA does not replicate again.'],
    d: () => cell(180, 82, 84, 66) + cell(180, 218, 84, 66) + nuc(180, 82, 40) + nuc(180, 218, 40) + cX(163, 82, 14, LC) + cX(198, 82, 10, SC) + cX(163, 218, 14, LC) + cX(198, 218, 10, SC) },
  { n: 'Metaphase II', t: 'Metaphase II', cnt: 'Human: in each cell, 23 single-file chromosomes at the middle.',
    b: ['Individual chromosomes line up along the middle of each cell.'],
    d: () => cell(180, 82, 84, 66) + cell(180, 218, 84, 66) + pole(108, 82) + pole(252, 82) + pole(108, 218) + pole(252, 218) +
      fib(108, 82, 178, 68) + fib(252, 82, 182, 68) + fib(108, 82, 178, 100) + fib(252, 82, 182, 100) + fib(108, 218, 178, 204) + fib(252, 218, 182, 204) + fib(108, 218, 178, 236) + fib(252, 218, 182, 236) +
      cX(180, 68, 13, LC) + cX(180, 100, 9, SC) + cX(180, 204, 13, LC) + cX(180, 236, 9, SC) },
  { n: 'Anaphase II', t: 'Anaphase II', cnt: 'Human: each cell holds 46 separated chromosomes, 23 heading each way.',
    b: ['The chromosome copies (chromatids) separate and move to opposing poles.'],
    d: () => cell(180, 82, 84, 66) + cell(180, 218, 84, 66) +
      cV(142, 68, 13, LC, true, -90) + cV(142, 100, 9, SC, true, -90) + cV(218, 68, 13, LC, true, 90) + cV(218, 100, 9, SC, true, 90) +
      cV(142, 204, 13, LC, true, -90) + cV(142, 236, 9, SC, true, -90) + cV(218, 204, 13, LC, true, 90) + cV(218, 236, 9, SC, true, 90) },
  { n: 'Telophase II', t: 'Telophase II: the products', cnt: 'Human: 4 haploid cells, 23 single chromosomes each.',
    b: ['Nuclear membranes reform. There are 4 new haploid daughter cells.', 'In males, 4 sperm cells are produced.', 'In females, 1 egg cell and 3 polar bodies are produced; polar bodies do not function as sex cells.'],
    d: () => [[112, 92], [248, 92], [112, 208], [248, 208]].map(([x, y]) => cell(x, y, 58, 52) + nuc(x, y, 30) + rod(x - 8, y, 13, LC) + rod(x + 9, y, 9, SC)).join('') }
];
function stageViewer(key, stages, cap) {
  const id = 'sv-' + key;
  return {
    html: `<div class="lab" id="${id}"><div class="stagebar" role="group" aria-label="Choose a stage">` +
      stages.map((s, i) => `<button type="button" data-i="${i}" aria-pressed="${i === 0 ? 'true' : 'false'}">${s.n}</button>`).join('') +
      `</div><div class="stagebox"><div class="fig" data-draw></div><div class="desc" aria-live="polite" data-desc></div></div><p class="src" style="margin-top:10px">${cap}</p></div>`,
    init: root => {
      const box = root.querySelector('#' + id), draw = box.querySelector('[data-draw]'), desc = box.querySelector('[data-desc]');
      const show = i => {
        const s = stages[i];
        draw.innerHTML = svg(360, 300, s.t + ' diagram', s.d(), 'narrow');
        desc.innerHTML = `<h4>${s.t}</h4><ul>${s.b.map(x => '<li>' + x + '</li>').join('')}</ul><p class="src" style="margin-top:6px">${s.cnt}</p>`;
        box.querySelectorAll('.stagebar button').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.i === i)));
      };
      box.querySelectorAll('.stagebar button').forEach(b => b.addEventListener('click', () => show(+b.dataset.i)));
      show(0);
    }
  };
}
const mitosisFig = () => stageViewer('mit', MITOSIS, 'Model cell with 2n = 4 (two long, two short chromosomes) so the picture stays readable. The counts line uses a human cell (46) and is worked out from the slides.');
const meiosisFig = () => stageViewer('mei', MEIOSIS, 'Same 2n = 4 model: the two long chromosomes are a homologous pair, and so are the two short ones. Counts use a human cell (46) and are worked out from the slides.');

/* ---------- 9. Ledger tables ---------- */
const ledgerMitosis = () => `<div class="tbl"><table><thead><tr><th>Moment</th><th class="num">Chromosomes in the cell</th><th class="num">Chromatids per chromosome</th><th class="num">DNA in the cell (G1 cell = 1)</th><th class="num">Cells</th></tr></thead><tbody>
<tr><td>G1 (before copying)</td><td class="num">46</td><td class="num">1</td><td class="num">1</td><td class="num">1</td></tr>
<tr><td>After S phase and G2</td><td class="num">46</td><td class="num">2</td><td class="num">2</td><td class="num">1</td></tr>
<tr><td>Prophase and metaphase</td><td class="num">46</td><td class="num">2</td><td class="num">2</td><td class="num">1</td></tr>
<tr><td>Anaphase</td><td class="num">92</td><td class="num">1</td><td class="num">2</td><td class="num">1</td></tr>
<tr><td>After telophase and cytokinesis</td><td class="num">46 in each</td><td class="num">1</td><td class="num">1 in each</td><td class="num">2</td></tr></tbody></table></div>`;
const ledgerMeiosis = () => `<div class="tbl"><table><thead><tr><th>Moment</th><th class="num">Chromosomes per cell</th><th class="num">Chromatids per chromosome</th><th class="num">DNA per cell (G1 cell = 1)</th><th class="num">Cells</th></tr></thead><tbody>
<tr><td>G1 (before copying)</td><td class="num">46</td><td class="num">1</td><td class="num">1</td><td class="num">1</td></tr>
<tr><td>After S phase, prophase I, metaphase I</td><td class="num">46 (23 pairs)</td><td class="num">2</td><td class="num">2</td><td class="num">1</td></tr>
<tr><td>After meiosis I (telophase I)</td><td class="num">23</td><td class="num">2</td><td class="num">1 in each</td><td class="num">2</td></tr>
<tr><td>Prophase II and metaphase II</td><td class="num">23</td><td class="num">2</td><td class="num">1 in each</td><td class="num">2</td></tr>
<tr><td>Anaphase II</td><td class="num">46 (separated)</td><td class="num">1</td><td class="num">1 in each</td><td class="num">2</td></tr>
<tr><td>After meiosis II (telophase II)</td><td class="num">23</td><td class="num">1</td><td class="num">0.5 in each</td><td class="num">4</td></tr></tbody></table></div>`;

/* figure registry used by the Learn pages */
const FIGS = {
  packing: () => ({ html: figPacking() }),
  chromosome: () => ({ html: figChromosome() }),
  karyo: () => ({ html: figKaryo() }),
  fission: () => ({ html: figFissionFull() }),
  wheel: wheelFig,
  mitosis: mitosisFig,
  meiosis: meiosisFig,
  ledgerM: () => ({ html: ledgerMitosis() }),
  ledgerE: () => ({ html: ledgerMeiosis() }),
  mendelpath: () => ({ html: figMendelPath() }),
  mendelchart: () => ({ html: figMendelChart() })
};
