/* =====================================================================
   FIGURES, continued
   ===================================================================== */
function figMitFlow() {
  const cy = 74;
  const co = (x, y, r) => `<circle class="sv-cell" cx="${x}" cy="${y}" r="${r}"/>`;
  let h = '';
  // 1. interphase cell, DNA once
  h += co(80, cy, 46) + nuc(80, cy, 22) + squig(80, cy, 10, LC);
  // 2. DNA copied
  h += co(250, cy, 46) + nuc(250, cy, 22) + squig(250, cy - 7, 10, LC) + squig(250, cy + 7, 10, SC);
  // 3. mitosis: DNA split, cell elongating
  h += dumbbell(425, cy, 38, 20, 40, true) + squig(425, cy - 26, 10, LC) + squig(425, cy + 26, 10, SC);
  // 4. two cells
  h += co(585, cy, 34) + nuc(585, cy, 16) + squig(585, cy, 8, LC) + co(670, cy, 34) + nuc(670, cy, 16) + squig(670, cy, 8, SC);
  [[134, 192], [304, 360], [490, 538]].forEach(([a, b]) => { h += arrow(a, cy, b, cy); });
  h += TL(80, 148, ['Interphase', 'DNA is copied'], 'sv-b', 'middle', 16);
  h += TL(425, 148, ['Mitosis', 'DNA is split equally', 'into two daughter cells'], 'sv-b', 'middle', 16);
  h += TL(627, 148, ['Cytokinesis', 'parent cell is', 'cleaved in half'], 'sv-b', 'middle', 16);
  h += T(250, 148, 'Each chromosome now', 'sv-t2') + T(250, 163, 'has 2 sister chromatids', 'sv-t2');
  return figure(svg(740, 186, 'Interphase copies DNA, mitosis splits it equally, cytokinesis cleaves the parent cell in half', h),
    'The three-step summary from the deck: DNA is copied (interphase), split equally (mitosis), and the parent cell is cleaved in half (cytokinesis).');
}

function figOutcomes() {
  const c = (x, y, n, big) => `<circle class="sv-cell" cx="${x}" cy="${y}" r="${big ? 28 : 24}"/>` + T(x, y + 5, n, 'sv-b');
  let h = '';
  // mitosis (left)
  h += T(150, 22, 'Mitosis', 'sv-b') + T(150, 38, 'diploid cell to two diploid cells', 'sv-t2');
  h += c(150, 78, '2n=46', true);
  h += arrow(135, 108, 100, 152) + arrow(165, 108, 200, 152);
  h += c(95, 184, '2n=46') + c(205, 184, '2n=46');
  h += TL(150, 230, ['2 cells', 'genetically identical to the parent'], 'sv-t', 'middle', 16);
  h += `<line x1="390" y1="14" x2="390" y2="252" class="sv-thin" stroke-dasharray="3 4"/>`;
  // meiosis (right)
  h += T(600, 22, 'Meiosis', 'sv-b') + T(600, 38, 'diploid cell to four haploid cells', 'sv-t2');
  h += c(600, 78, '2n=46', true);
  h += arrow(585, 108, 535, 128) + arrow(615, 108, 665, 128);
  h += c(520, 152, 'n=23') + c(680, 152, 'n=23');
  h += T(430, 156, 'Meiosis I', 'sv-t2', 'start');
  h += arrow(506, 172, 470, 196) + arrow(534, 172, 560, 196) + arrow(666, 172, 640, 196) + arrow(694, 172, 730, 196);
  h += c(455, 218, 'n=23') + c(570, 218, 'n=23') + c(630, 218, 'n=23') + c(745, 218, 'n=23');
  h += T(430, 240, 'Meiosis II', 'sv-t2', 'start');
  h += TL(600, 266, ['4 cells', 'genetically different from the parent and from each other'], 'sv-t', 'middle', 16);
  return figure(svg(780, 296, 'Mitosis gives two identical diploid cells; meiosis gives four haploid cells', h),
    'Counts use human cells. Meiosis involves two divisions but only one round of DNA replication, so the four cells end up with half the parent number of chromosomes.');
}

function figLocus() {
  const pair = (x, a1, a2, label, sub, c1, c2) => {
    let s = `<line x1="${x - 16}" y1="30" x2="${x - 16}" y2="150" stroke="${LC}" stroke-width="14" stroke-linecap="round"/><line x1="${x + 16}" y1="30" x2="${x + 16}" y2="150" stroke="${LC}" stroke-width="14" stroke-linecap="round" opacity=".72"/>`;
    s += `<rect x="${x - 25}" y="76" width="18" height="12" fill="${c1}"/><rect x="${x + 7}" y="76" width="18" height="12" fill="${c2}"/>`;
    s += `<text x="${x - 16}" y="106" class="sv-gt" text-anchor="middle" style="font-size:20px">${a1}</text><text x="${x + 16}" y="106" class="sv-gt" text-anchor="middle" style="font-size:20px">${a2}</text>`;
    s += T(x, 176, label, 'sv-b') + T(x, 194, sub, 'sv-t2');
    return s;
  };
  let h = '';
  h += pair(110, 'P', 'P', 'PP', 'homozygous dominant: purple', LC, LC);
  h += pair(300, 'P', 'p', 'Pp', 'heterozygous: purple', LC, SC);
  h += pair(490, 'p', 'p', 'pp', 'homozygous recessive: white', SC, SC);
  h += `<line class="sv-thin" x1="520" y1="58" x2="560" y2="42"/>` + T(566, 40, 'the gene sits at the same', 'sv-t2', 'start') + T(566, 54, 'position on both chromosomes', 'sv-t2', 'start');
  h += T(30, 18, 'Each pair of bars is one homologous pair', 'sv-t2', 'start');
  return figure(svg(780, 200, 'Three homologous pairs showing the flower color gene with alleles PP, Pp and pp', h),
    'A gene sits at the same spot on both chromosomes of a homologous pair. The two chromosomes can carry the same allele (PP or pp) or different alleles (Pp).');
}

/* a tiny binary-fission diagram for flashcards */
const fissionMini = () => `<div class="fig" style="max-width:560px;margin:8px 0">${svg(880, 110, 'Diagram: a cell with a loop of DNA copies the DNA, begins to divide, then becomes two cells', figFissionInner())}</div>`;
function figFissionInner() {
  // re-use figFission(false) markup but strip the wrapper svg
  const s = figFission(false);
  return s.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
}

Object.assign(FIGS, {
  mitflow: () => ({ html: figMitFlow() }),
  outcomes: () => ({ html: figOutcomes() }),
  locus: () => ({ html: figLocus() }),
  fissionMini: () => ({ html: fissionMini() })
});
