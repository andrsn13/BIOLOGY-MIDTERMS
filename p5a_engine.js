/* =====================================================================
   ENGINE: helpers, saved state, Punnett calculator, lab, token expansion
   ===================================================================== */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const strip = h => String(h).replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
const DAY = 86400000;
const INTERVALS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 14 };
const SCOPES = { core: ['core'], sup: ['core', 'sup'], all: ['core', 'sup', 'oth'] };
const SCOPE_LABEL = { core: 'Core only', sup: 'Core + Supporting', all: 'Everything' };
const TIER_LABEL = { core: 'Core', sup: 'Supporting', oth: 'Others' };
const MOD = id => MODS.find(m => m.id === id);
const CARD = id => CARDS.find(c => c.id === id);

/* ---------- saved state (safe if storage is unavailable) ---------- */
const KEY = 'cellgen-study-v1';
let S = { done: {}, visited: {}, cards: {}, set: { scope: 'core', typed: false }, theme: null };
try {
  const raw = localStorage.getItem(KEY);
  if (raw) { const p = JSON.parse(raw); S = Object.assign(S, p); S.set = Object.assign({ scope: 'core', typed: false }, p.set || {}); }
} catch (e) { /* storage unavailable: progress lives only in this tab */ }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }

/* ---------- reading time ---------- */
function modMins(m) {
  const txt = [...m.core, ...m.sup].map(i => strip(i.b)).join(' ') + ' ' + m.oth.map(o => strip(o.d)).join(' ');
  const words = txt.split(/\s+/).filter(Boolean).length;
  const figs = (JSON.stringify(m).match(/\{\{(fig|pun)/g) || []).length;
  return Math.max(5, Math.round(words / 170 + figs * 0.75));
}

/* =====================================================================
   PUNNETT ENGINE
   ===================================================================== */
const TRAITS = {
  flower: { L: 'P', dom: 'purple', rec: 'white', name: 'Pea flower color (P purple, p white)' },
  coat: { L: 'B', dom: 'black', rec: 'brown', name: 'Guinea pig or rabbit coat (B black, b brown)' },
  pod: { L: 'G', dom: 'green', rec: 'yellow', name: 'Pea pod color (G green, g yellow)' },
  shape: { L: 'R', dom: 'round', rec: 'wrinkled', name: 'Pea seed shape (R round, r wrinkled)' },
  color: { L: 'Y', dom: 'yellow', rec: 'green', name: 'Pea seed color (Y yellow, y green)' }
};
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const isUp = ch => ch === ch.toUpperCase();
const norm = g => g.split('').sort((x, y) => (isUp(x) ? 0 : 1) - (isUp(y) ? 0 : 1)).join('');
const gametesOf = (kind, g) => {
  if (kind === 'mono') return [g[0], g[1]];
  const out = []; for (const x of g.slice(0, 2)) for (const y of g.slice(2)) out.push(x + y); return out;
};
const cellGeno = (kind, r, c) => kind === 'mono' ? norm(r + c) : norm(r[0] + c[0]) + norm(r[1] + c[1]);
const phenOf = (kind, trait, g) => {
  if (kind === 'mono') { const t = TRAITS[trait]; return /[A-Z]/.test(g) ? t.dom : t.rec; }
  return (/R/.test(g.slice(0, 2)) ? 'round' : 'wrinkled') + ', ' + (/Y/.test(g.slice(2)) ? 'yellow' : 'green');
};
const PCLS = { 'round, yellow': 'p-a', 'round, green': 'p-b', 'wrinkled, yellow': 'p-c', 'wrinkled, green': 'p-d' };
function punCompute(kind, trait, a, b) {
  const rows = gametesOf(kind, a), cols = gametesOf(kind, b);
  const cells = rows.map(r => cols.map(c => cellGeno(kind, r, c)));
  const flat = cells.flat(), total = flat.length;
  let genoOrder = [];
  if (kind === 'mono') { const L = TRAITS[trait].L, l = L.toLowerCase(); genoOrder = [L + L, L + l, l + l]; }
  else for (const s of ['RR', 'Rr', 'rr']) for (const y of ['YY', 'Yy', 'yy']) genoOrder.push(s + y);
  const geno = genoOrder.map(g => [g, flat.filter(x => x === g).length]).filter(x => x[1] > 0);
  let phenOrder = kind === 'mono' ? [TRAITS[trait].dom, TRAITS[trait].rec] : ['round, yellow', 'round, green', 'wrinkled, yellow', 'wrinkled, green'];
  const cls = p => kind === 'mono' ? (p === TRAITS[trait].dom ? 'p-a' : 'p-b') : PCLS[p];
  const pheno = phenOrder.map(p => [p, flat.filter(x => phenOf(kind, trait, x) === p).length, cls(p)]).filter(x => x[1] > 0);
  return { rows, cols, cells, geno, pheno, total, cls: g => cls(phenOf(kind, trait, g)) };
}
const ratioStr = (items, fmt) => {
  const g = items.map(x => x[1]).reduce(gcd);
  return items.map(x => `${x[1] / g} ${fmt(x)}`).join(' : ');
};
const pctStr = x => Number((x * 100).toFixed(2)) + '%';
function punTable(r, kind) {
  let h = `<table class="pun${kind === 'di' ? ' di' : ''}"><caption class="sr">Punnett square: top row is one parent's gametes, left column is the other parent's gametes</caption><thead><tr><th scope="col"></th>${r.cols.map(c => `<th scope="col">${c}</th>`).join('')}</tr></thead><tbody>`;
  r.cells.forEach((row, i) => { h += `<tr><th scope="row">${r.rows[i]}</th>${row.map(c => `<td class="${r.cls(c)}">${c}</td>`).join('')}</tr>`; });
  return h + '</tbody></table>';
}
function punStatic(kind, trait, a, b) {
  const r = punCompute(kind, trait, a, b);
  return `<div class="lab" style="padding:10px 14px;margin:12px 0"><p style="margin:0 0 4px"><strong><em>${a}</em> \u00D7 <em>${b}</em></strong></p>${punTable(r, kind)}
<p style="font-size:.92rem;margin:.2em 0 0;max-width:none">Genotypes: ${ratioStr(r.geno, x => `<em>${x[0]}</em>`)}.<br>Phenotypes: ${ratioStr(r.pheno, x => x[0])}.</p></div>`;
}
function punResults(r) {
  const li = (x, inner) => `<li>${inner}: ${x[1]}/${r.total} (${pctStr(x[1] / r.total)})</li>`;
  return `<div class="res"><div><h5>Genotypes</h5><ul>${r.geno.map(x => li(x, `<em>${x[0]}</em>`)).join('')}</ul><p style="font-size:.92rem;margin:.4em 0 0">Ratio: ${ratioStr(r.geno, x => `<em>${x[0]}</em>`)}</p></div>
<div><h5>Phenotypes</h5><ul>${r.pheno.map(x => li(x, `<span class="swatch ${x[2]}"></span>${x[0]}`)).join('')}</ul><p style="font-size:.92rem;margin:.4em 0 0">Ratio: ${ratioStr(r.pheno, x => x[0])}</p></div></div>
<p style="font-size:.88rem;color:var(--ink2);margin:.6em 0 0">Probability = boxes with that outcome \u00F7 ${r.total} boxes.</p>`;
}

/* ---------- interactive lab ---------- */
const labHTML = () => `<div class="lab" data-lab><h4>Punnett lab</h4>
<div class="chips" role="group" aria-label="Cross type"><button type="button" data-mode="mono" aria-pressed="true">One characteristic</button><button type="button" data-mode="di" aria-pressed="false">Two characteristics</button></div>
<div class="presets" data-presets aria-label="Presets from the deck"></div><div class="row" data-controls></div><div data-out aria-live="polite"></div></div>`;
function labInit(root) {
  const el = $('[data-lab]', root), pre = $('[data-presets]', el), ctl = $('[data-controls]', el), out = $('[data-out]', el);
  const L = { mode: 'mono', trait: 'flower', ai: 0, bi: 2, da: 'RRYY', db: 'rryy' };
  const monoOpts = t => { const U = TRAITS[t].L, l = U.toLowerCase(); return [[U + U, 'homozygous dominant'], [U + l, 'heterozygous'], [l + l, 'homozygous recessive']]; };
  const DI = ['RRYY', 'RRYy', 'RRyy', 'RrYY', 'RrYy', 'Rryy', 'rrYY', 'rrYy', 'rryy'];
  const sel = (id, label, opts, val) => `<label>${label}<select data-k="${id}">${opts.map(o => `<option value="${o[0]}"${String(o[0]) === String(val) ? ' selected' : ''}>${o[1]}</option>`).join('')}</select></label>`;
  const MONO_P = [['Ex 1: PP \u00D7 pp', 'flower', 0, 2], ['Ex 2: BB \u00D7 Bb', 'coat', 0, 1], ['Ex 3: Bb \u00D7 Bb', 'coat', 1, 1], ['Testcross: BB \u00D7 bb', 'coat', 0, 2], ['Testcross: Bb \u00D7 bb', 'coat', 1, 2]];
  const DI_P = [['Ex 1: RRYY \u00D7 rryy', 'RRYY', 'rryy'], ['Ex 2: RrYy \u00D7 RrYy', 'RrYy', 'RrYy']];
  const results = () => {
    let r;
    if (L.mode === 'mono') { const o = monoOpts(L.trait); r = punCompute('mono', L.trait, o[L.ai][0], o[L.bi][0]); }
    else r = punCompute('di', null, L.da, L.db);
    out.innerHTML = `<div style="overflow-x:auto">${punTable(r, L.mode)}</div>${punResults(r)}`;
  };
  const controls = () => {
    $$('[data-mode]', el).forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === L.mode)));
    if (L.mode === 'mono') {
      const o = monoOpts(L.trait).map((x, i) => [i, `${x[0]} (${x[1]})`]);
      ctl.innerHTML = sel('trait', 'Characteristic', Object.keys(TRAITS).filter(k => k !== 'dummy').map(k => [k, TRAITS[k].name]), L.trait) + sel('ai', 'Parent 1', o, L.ai) + sel('bi', 'Parent 2', o, L.bi);
      pre.innerHTML = MONO_P.map((p, i) => `<button type="button" data-p="${i}">${p[0]}</button>`).join('');
    } else {
      const o = DI.map(g => [g, g]);
      ctl.innerHTML = sel('da', 'Parent 1 (seed shape R, seed color Y)', o, L.da) + sel('db', 'Parent 2', o, L.db);
      pre.innerHTML = DI_P.map((p, i) => `<button type="button" data-p="${i}">${p[0]}</button>`).join('');
    }
    $$('select', ctl).forEach(s => s.addEventListener('change', () => { const k = s.dataset.k; L[k] = (k === 'ai' || k === 'bi') ? +s.value : s.value; if (k === 'trait') { controls(); } results(); }));
    $$('[data-p]', pre).forEach(b => b.addEventListener('click', () => {
      const i = +b.dataset.p;
      if (L.mode === 'mono') { const p = MONO_P[i]; L.trait = p[1]; L.ai = p[2]; L.bi = p[3]; } else { L.da = DI_P[i][1]; L.db = DI_P[i][2]; }
      controls(); results();
    }));
  };
  $$('[data-mode]', el).forEach(b => b.addEventListener('click', () => { L.mode = b.dataset.mode; controls(); results(); }));
  controls(); results();
}

/* ---------- registry additions + token expansion ---------- */
FIGS.lab = () => ({ html: labHTML(), init: labInit });
function expand(html) {
  const inits = [];
  const out = html.replace(/\{\{(fig|pun):([^}]+)\}\}/g, (m, k, v) => {
    if (k === 'fig') {
      if (!FIGS[v]) throw new Error('Unknown figure token: ' + v);
      const f = FIGS[v](); if (f.init) inits.push(f.init); return f.html;
    }
    const p = v.split(':');
    return p[0] === 'mono' ? punStatic('mono', p[1], p[2], p[3]) : punStatic('di', null, p[1], p[2]);
  });
  return { html: out, inits };
}
