/* =====================================================================
   VIEWS, REVIEW ENGINE, GUIDE BAR, ROUTER
   ===================================================================== */
let SESS = null;
let JUST = null;
const TABS = ['core', 'sup', 'oth'];
const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

/* ---------- card statistics ---------- */
const cardsFor = (deck, scope) => CARDS.filter(c => (deck === 'mix' ? !!S.done[c.m] : c.m === deck) && SCOPES[scope].includes(c.tier));
const isDue = (c, now) => { const st = S.cards[c.id]; return !st || st.due <= now; };
const dueIn = (deck, scope) => cardsFor(deck, scope).filter(c => isDue(c, Date.now()));
const deckSeen = mid => CARDS.some(c => c.m === mid && S.cards[c.id]);
const doneCount = () => MODS.filter(m => S.done[m.id]).length;
const dueTotal = () => dueIn('mix', S.set.scope).length;
const reviewTarget = () => doneCount() >= 2 ? 'mix' : (MODS.find(m => S.done[m.id]) || {}).id;
function nextTab(mid) { return TABS.find(t => !S.visited[mid + ':' + t]) || 'core'; }

function nextStep() {
  const fresh = MODS.find(m => S.done[m.id] && !deckSeen(m.id));
  if (fresh) return { t: `Review Deck ${fresh.n}`, msg: `You finished Module ${fresh.n}. Test yourself on it now, while it is fresh.`, href: '#/review/run/' + fresh.id };
  const due = dueTotal(), undone = MODS.find(m => !S.done[m.id]);
  if (due >= 10 && reviewTarget()) return { t: `Review ${due} due cards`, msg: `${due} cards are due. Clear them before adding new material.`, href: '#/review/run/' + reviewTarget() };
  if (undone) {
    const started = MODS.some(m => S.visited[m.id + ':core']);
    return { t: started ? `Continue Module ${undone.n}` : 'Start Module 1', msg: `Next up: Module ${undone.n}, ${undone.title}.`, href: `#/learn/${undone.id}/${nextTab(undone.id)}` };
  }
  if (due > 0) return { t: `Review ${due} due cards`, msg: `All modules are done. ${due} cards are due.`, href: '#/review/run/mix' };
  return { t: 'Open the review hub', msg: 'All modules are done and nothing is due. Come back when cards fall due.', href: '#/review' };
}

/* ---------- guide bar and header ---------- */
function setGuide(g) {
  const el = $('#guide');
  el.innerHTML = `<div class="msg"><strong>${g.label}</strong>${g.msg}</div><div class="acts">${(g.acts || []).map((a, i) => a.href
    ? `<a class="btn ${a.cls || ''}" href="${a.href}">${a.t}</a>`
    : `<button type="button" class="btn ${a.cls || ''}" data-ga="${i}"${a.dis ? ' disabled' : ''}>${a.t}</button>`).join('')}</div>`;
  $$('[data-ga]', el).forEach(b => b.addEventListener('click', () => g.acts[+b.dataset.ga].fn()));
}
const setWhere = h => { $('#where').innerHTML = h; };
function mount(html, inits) {
  const v = $('#view'); v.innerHTML = html;
  (inits || []).forEach(([sel, fn]) => { const r = sel === null ? v : $(sel, v); if (r) fn(r); });
}

/* ---------- START ---------- */
function viewStart() {
  document.title = 'Cell Reproduction and Genetics: Study Path';
  const ns = nextStep(), done = doneCount();
  const mins = ids => ids.reduce((n, id) => n + modMins(MOD(id)), 0);
  const cmin = ids => Math.round(CARDS.filter(c => ids.includes(c.m) && c.tier === 'core').length * 0.5);
  const plan = [
    ['Day 1', 'Expose Modules 1 to 3. After each module, review its deck once.', `about ${mins(['m1', 'm2', 'm3']) + cmin(['m1', 'm2', 'm3'])} min`],
    ['Day 2', 'Clear the cards that are due, then Expose Modules 4 and 5 and review them.', `about ${mins(['m4', 'm5']) + cmin(['m4', 'm5']) + 6} min`],
    ['Day 3', 'Clear due cards, then Expose Modules 6 to 8 and review them.', `about ${mins(['m6', 'm7', 'm8']) + cmin(['m6', 'm7', 'm8']) + 6} min`],
    ['Day 5', 'Mixed review with Core + Supporting. Cards from every module are interleaved.', '15 to 20 min'],
    ['Day 9', 'Mixed review with Everything, including the Others cards.', '15 to 20 min'],
    ['After that', 'Open Review whenever cards are due, until most sit in boxes 4 and 5.', '10 min']
  ];
  mount(`<p class="kicker">A guided study path built from two slide decks</p>
<h1>From DNA to Punnett squares</h1>
<p class="lede">Eight modules that build on one another, then flashcards that test them. It covers everything in <strong>3.1 Cell Reproduction</strong> and <strong>4.1 Genetics and Biotechnology</strong>, with extra time spent where the ideas matter most.</p>
<div class="callout link"><p><strong>${done ? 'Your next step.' : 'Begin here.'}</strong> ${ns.msg} <a class="btn sm" style="margin-left:6px" href="${ns.href}">${ns.t}</a></p></div>

<h2 style="margin-top:34px">How the path works</h2>
<ol class="phases">
  <li><h3>1. Expose</h3><p>Read eight modules in order. Each teaches one idea set and builds on the last. No quizzes here.</p></li>
  <li><h3>2. Review</h3><p>Flashcards only, kept separate on purpose. You answer first, then flip. Each deck opens when you finish its module.</p></li>
  <li><h3>3. Reference</h3><p>Glossary, a slide-by-slide coverage map, notes on mistakes in the slides, and the evidence behind this design.</p></li>
</ol>

<h2>Selective depth: three tabs in every module</h2>
<div class="depth">
  <div><span class="tier t-core">Core</span><span>The few ideas that explain the most. Full explanation, a diagram, a worked example and a prompt to explain it to yourself. Spend most of your time here.</span></div>
  <div><span class="tier t-sup">Supporting</span><span>Ideas that sharpen the core. Shorter treatment; read once.</span></div>
  <div><span class="tier t-oth">Others</span><span>Detail-level facts, labels and trivia. Skim as a list. Nothing in Core depends on them, but nothing from the slides is left out, and they have their own review cards.</span></div>
</div>

<h2>The path</h2>
<ul class="modlist">${MODS.map(m => `<li><a href="#/learn/${m.id}/${nextTab(m.id)}"><span class="mn">${m.n}</span><span><span class="mt">${m.title}</span><br><span class="ms">${m.q}</span></span><span class="ms">${S.done[m.id] ? 'Done' : modMins(m) + ' min'}</span></a></li>`).join('')}</ul>

<h2>A spaced plan</h2>
<p>Memory improves when practice is spread over days. The plan below uses that; the card scheduler enforces it.</p>
<div class="tbl plan"><table><thead><tr><th>When</th><th>What to do</th><th>Time</th></tr></thead><tbody>${plan.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div>

<h2>What is and is not in the slides</h2>
<p>The Genetics and Biotechnology deck is titled for biotechnology, but its 67 slides stop at dihybrid crosses. No biotechnology topics appear, so none were added. A few slide mistakes are flagged in Reference, and anything that goes beyond the slides is labelled as such.</p>
<p><strong>Slide tags.</strong> Each item ends with where it came from: <strong>CR</strong> is the Cell Reproduction deck, <strong>GB</strong> is the Genetics and Biotechnology deck, followed by the slide number.</p>`);
  setWhere('<strong>Start</strong>');
  setGuide({ label: done ? 'Where you are' : 'Welcome', msg: ns.msg, acts: [{ t: ns.t, href: ns.href }] });
}

/* ---------- LEARN ---------- */
function viewLearn(mid, tab) {
  const m = MOD(mid);
  if (!m) { location.hash = '#/start'; return; }
  tab = TABS.includes(tab) ? tab : 'core';
  S.visited[mid + ':' + tab] = true; save();
  document.title = `Module ${m.n}: ${m.title}`;
  const items = m[tab], inits = [];
  const tabMsg = {
    core: 'These are the highest-leverage ideas in the module. Read them in order. Try to answer each "Explain it to yourself" prompt before you open it.',
    sup: 'These ideas add precision to the core. Read them once; each is short.',
    oth: 'Detail-level facts, labels and trivia. Skim once. They have their own cards in Review, and nothing in Core depends on them.'
  }[tab];
  let body = '';
  if (tab === 'oth') {
    body = `<dl class="oth">${items.map((o, i) => `<div class="oth-row" data-item="${i}"><dt>${o.t}</dt><dd>${o.d}<span class="src">${o.s}</span></dd></div>`).join('')}</dl>`;
  } else {
    body = items.map((it, i) => {
      const e = expand(it.b); e.inits.forEach(f => inits.push([`[data-item="${i}"]`, f]));
      return tab === 'core'
        ? `<section class="core-item" data-item="${i}"><h3>${it.h}</h3>${e.html}<p class="src">${it.s}</p></section>`
        : `<section class="sup-item" data-item="${i}"><h4>${it.h}</h4>${e.html}<p class="src">${it.s}</p></section>`;
    }).join('');
  }
  const vis = TABS.filter(t => S.visited[mid + ':' + t]).length;
  mount(`<p class="kicker">Module ${m.n} of ${MODS.length}, about ${modMins(m)} minutes</p>
<h1>${m.title}</h1>
<p class="lede">${m.q}</p>
<p style="font-size:.95rem;color:var(--ink2);margin-top:8px"><strong>Builds on:</strong> ${m.needs}</p>
<div class="objectives"><h2>By the end of this module you can</h2><ul>${m.obj.map(o => `<li>${o}</li>`).join('')}</ul></div>
<div class="tabs" role="tablist" aria-label="Depth of treatment">${TABS.map(t => `<a role="tab" id="tab-${t}" href="#/learn/${mid}/${t}" aria-selected="${t === tab}" aria-controls="panel"><span>${TIER_LABEL[t]}</span><span class="n">${m[t].length}</span>${S.visited[mid + ':' + t] && t !== tab ? '<span class="tick" aria-label="opened">\u2713</span>' : ''}</a>`).join('')}</div>
<div id="panel" role="tabpanel" aria-labelledby="tab-${tab}">
<p class="tabguide"><span class="tier t-${tab}">${TIER_LABEL[tab]}</span> &nbsp;${tabMsg}</p>${body}</div>`, inits);
  setWhere(`<strong>Phase 1: Expose</strong> Module ${m.n} of ${MODS.length}, ${TIER_LABEL[tab]}`);

  const idx = TABS.indexOf(tab), nm = MODS[MODS.indexOf(m) + 1];
  if (tab === 'core') setGuide({ label: `Module ${m.n}, step 1 of 3`, msg: `Read the Core tab top to bottom. About ${Math.max(3, Math.round(modMins(m) * 0.6))} minutes.`, acts: [{ t: 'Next: Supporting', href: `#/learn/${mid}/sup` }] });
  else if (tab === 'sup') setGuide({ label: `Module ${m.n}, step 2 of 3`, msg: 'Read the Supporting ideas once. Then skim Others.', acts: [{ t: 'Back to Core', href: `#/learn/${mid}/core`, cls: 'ghost' }, { t: 'Next: Others', href: `#/learn/${mid}/oth` }] });
  else if (S.done[mid]) setGuide({ label: `Module ${m.n} is done`, msg: 'You can reread, test yourself, or move on.', acts: [{ t: `Review Deck ${m.n}`, href: '#/review/run/' + mid, cls: 'ghost' }].concat(nm ? [{ t: `Module ${nm.n}`, href: `#/learn/${nm.id}/core` }] : [{ t: 'Open review hub', href: '#/review' }]) });
  else {
    const ready = vis === 3;
    setGuide({
      label: `Module ${m.n}, step 3 of 3`,
      msg: ready ? 'Skim the Others list, then finish the module. Next you will test yourself on it with flashcards.' : 'Open the Core and Supporting tabs first, then finish the module.',
      acts: [{ t: 'Back to Supporting', href: `#/learn/${mid}/sup`, cls: 'ghost' }, { t: `Finish Module ${m.n}`, dis: !ready, fn: () => { S.done[mid] = true; JUST = mid; save(); location.hash = '#/review'; } }]
    });
  }
}

/* ---------- REVIEW HUB ---------- */
function viewReview() {
  document.title = 'Review with flashcards';
  const scope = S.set.scope, n = doneCount(), now = Date.now();
  const box = [0, 0, 0, 0, 0, 0];
  CARDS.forEach(c => { if (S.done[c.m]) { const st = S.cards[c.id]; box[st ? st.b : 0]++; } });
  const mx = Math.max(1, ...box);
  const blabel = ['New', 'Box 1: due now', 'Box 2: 1 day', 'Box 3: 3 days', 'Box 4: 7 days', 'Box 5: 14 days'];
  const decks = MODS.map(m => {
    const open = !!S.done[m.id], all = cardsFor(m.id, scope), due = all.filter(c => isDue(c, now));
    const all2 = CARDS.filter(c => c.m === m.id && SCOPES[scope].includes(c.tier));
    const mast = all2.filter(c => (S.cards[c.id] || { b: 0 }).b >= 4).length;
    if (!open) return `<li class="deck lockd"><div><h3>Deck ${m.n}: ${m.title}</h3><div class="stats">${all2.length} cards in this scope. Opens when you finish Module ${m.n}.</div></div><a class="btn sm ghost" href="#/learn/${m.id}/${nextTab(m.id)}">Go to Module ${m.n}</a></li>`;
    return `<li class="deck"><div><h3>Deck ${m.n}: ${m.title}</h3><div class="stats">${all2.length} cards, ${due.length} due, ${mast} in boxes 4 and 5${JUST === m.id ? ' (just unlocked)' : ''}</div></div>${due.length ? `<a class="btn sm" href="#/review/run/${m.id}">Review ${due.length} due</a>` : `<a class="btn sm ghost" href="#/review/run/${m.id}/all">Practice anyway</a>`}<div class="bar" role="img" aria-label="${mast} of ${all2.length} mastered"><i style="width:${all2.length ? mast / all2.length * 100 : 0}%"></i></div></li>`;
  }).join('');
  const mixDue = dueIn('mix', scope).length;
  const mixCard = n >= 2
    ? `<li class="deck"><div><h3>Mixed review: all finished modules, interleaved</h3><div class="stats">${cardsFor('mix', scope).length} cards, ${mixDue} due. Shuffling modules together trains you to tell similar ideas apart.</div></div>${mixDue ? `<a class="btn sm" href="#/review/run/mix">Review ${mixDue} due</a>` : `<a class="btn sm ghost" href="#/review/run/mix/all">Practice anyway</a>`}</li>`
    : `<li class="deck lockd"><div><h3>Mixed review</h3><div class="stats">Opens after you finish two modules.</div></div></li>`;
  const banner = JUST ? `<div class="callout link"><p><strong>Module ${MOD(JUST).n} is exposed.</strong> Test yourself on it now, while it is fresh. A first retrieval soon after reading is what the scheduler builds on.</p></div>` : '';
  mount(`<p class="kicker">Phase 2 of 3</p><h1>Review with flashcards</h1>
<p class="lede">This is where you test yourself. Read the question, answer from memory (say it, or type it), flip, then rate yourself honestly.</p>
${banner}
<div class="callout note"><p><strong>How the scheduler works.</strong> Cards live in five boxes. "Got it" moves a card up a box and delays its return (1, 3, 7, then 14 days). "Missed" sends it to Box 1. Cards you miss come back a few cards later in the same session. Sessions are capped at 20 cards.</p></div>
<h2 style="margin-top:26px">Choose how deep to go</h2>
<div class="chips" role="group" aria-label="Card scope">${Object.keys(SCOPES).map(k => `<button type="button" data-scope="${k}" aria-pressed="${k === scope}">${SCOPE_LABEL[k]}</button>`).join('')}</div>
<p style="font-size:.95rem">Start with <strong>Core only</strong>. Add Supporting after a few sessions, and Everything once Core feels easy.</p>
<label style="display:flex;gap:10px;align-items:flex-start;margin:10px 0 20px;max-width:68ch"><input type="checkbox" id="typedchk" ${S.set.typed ? 'checked' : ''} style="margin-top:6px"><span>Type my answer before flipping. Slower, but producing an answer yourself tends to stick better than just thinking it.</span></label>
${n ? `<h2>Where your cards are</h2><div class="boxes" role="img" aria-label="Cards per box: ${box.map((b, i) => blabel[i] + ' ' + b).join(', ')}">${box.map((b, i) => `<div><b>${b}</b><span class="col"><i style="height:${b / mx * 100}%"></i></span>${blabel[i]}</div>`).join('')}</div>` : ''}
<h2>Decks</h2><ul class="decks">${mixCard}${decks}</ul>`);
  $$('[data-scope]').forEach(b => b.addEventListener('click', () => { S.set.scope = b.dataset.scope; save(); viewReview(); }));
  $('#typedchk').addEventListener('change', e => { S.set.typed = e.target.checked; save(); });
  setWhere('<strong>Phase 2: Review</strong> Hub');
  if (!n) setGuide({ label: 'Review opens as you learn', msg: 'Each deck unlocks when you finish its module. Start with Module 1.', acts: [{ t: 'Go to Module 1', href: '#/learn/m1/core' }] });
  else { const ns = nextStep(); setGuide({ label: 'Your next step', msg: ns.msg, acts: [{ t: ns.t, href: ns.href }] }); }
  JUST = null;
}

/* ---------- REVIEW SESSION ---------- */
function deckTitle(d) { return d === 'mix' ? 'Mixed review' : `Deck ${MOD(d).n}: ${MOD(d).title}`; }
function lockedView(msg, href, label) {
  mount(`<h1>Not open yet</h1><p class="lede">${msg}</p><p><a class="btn" href="${href}">${label}</a></p>`);
  setWhere('<strong>Phase 2: Review</strong>'); setGuide({ label: 'Expose comes first', msg, acts: [{ t: label, href }] });
}
function startSession(deck, ignoreDue) {
  const scope = S.set.scope, now = Date.now();
  let pool = cardsFor(deck, scope);
  if (!ignoreDue) pool = pool.filter(c => isDue(c, now));
  const order = { core: 0, sup: 1, oth: 2 };
  pool = deck === 'mix' ? shuffle(pool) : shuffle(pool).sort((a, b) => order[a.tier] - order[b.tier]);
  const batch = pool.slice(0, 20);
  SESS = { deck, scope, ignoreDue, queue: batch.map(c => c.id), total: batch.length, more: pool.length - batch.length, fin: new Set(), seen: {}, first: {}, flipped: false, active: true };
  if (!batch.length) { endSession(); return; }
  renderCard();
}
function renderCard() {
  const id = SESS.queue[0];
  if (!id) { endSession(); return; }
  const c = CARD(id), m = MOD(c.m), q = expand(c.q), a = expand(c.a);
  const pct = SESS.fin.size / SESS.total * 100;
  mount(`<div class="sess-head"><div class="meta"><strong>${deckTitle(SESS.deck)}</strong> (${SCOPE_LABEL[SESS.scope]})</div><div class="meta">${SESS.fin.size} of ${SESS.total} done, ${SESS.queue.length} left in queue</div></div>
<div class="bar hema" role="progressbar" aria-valuemin="0" aria-valuemax="${SESS.total}" aria-valuenow="${SESS.fin.size}" aria-label="Session progress"><i style="width:${pct}%"></i></div>
<div class="fc-wrap"><div class="fc" id="fc">
 <div class="face front" id="front"><div class="tags"><span>Module ${m.n}</span><span class="tier t-${c.tier}">${TIER_LABEL[c.tier]}</span><span>${c.type}</span></div>
  <div class="q">${q.html}</div>
  ${S.set.typed ? '<label class="sr" for="typed">Your answer</label><textarea id="typed" placeholder="Type or say your answer first"></textarea>' : ''}
  <div class="flipbar"><button type="button" class="btn" id="flip">Show answer</button><span style="font-size:.85rem;color:var(--ink2)">or press Space</span></div></div>
 <div class="face back" id="back" aria-hidden="true"><div class="tags"><span>Answer</span></div>
  <div class="typed" id="typedshow" hidden></div>
  <div class="a">${a.html}</div>
  <div class="why">${c.why ? esc(c.why) + ' ' : ''}Slides: ${c.s}</div></div>
</div></div>
<div class="rate" id="rate" hidden>
 <button type="button" class="miss" data-r="miss">Missed it<small>Key 1. Back in a few cards</small></button>
 <button type="button" class="shaky" data-r="shaky">Shaky<small>Key 2. One more look</small></button>
 <button type="button" class="got" data-r="got">Got it<small>Key 3. Moves up a box</small></button></div>`);
  $('#back').inert = true;
  $('#flip').addEventListener('click', flip);
  $$('[data-r]').forEach(b => b.addEventListener('click', () => rate(b.dataset.r)));
  setWhere(`<strong>Phase 2: Review</strong> ${deckTitle(SESS.deck)}`);
  setSessionGuide();
  const t = $('#typed'); if (t) t.focus({ preventScroll: true }); else $('#flip').focus({ preventScroll: true });
}
function setSessionGuide() {
  setGuide({
    label: SESS.deck === 'mix' ? 'Mixed review: modules are interleaved on purpose' : 'Review',
    msg: SESS.flipped ? 'Rate honestly. Missed cards return in a few cards; "Got it" lengthens the gap before you see the card again.' : 'Answer from memory first, aloud or typed, then flip. Peeking early weakens the benefit.',
    acts: [{ t: 'End session', cls: 'ghost', fn: endSession }]
  });
}
function flip() {
  if (!SESS || SESS.flipped) return;
  SESS.flipped = true;
  const t = $('#typed'), show = $('#typedshow');
  if (t && t.value.trim()) { show.hidden = false; show.innerHTML = '<b>Your answer:</b> ' + esc(t.value.trim()); }
  $('#fc').classList.add('flipped');
  $('#front').setAttribute('aria-hidden', 'true'); $('#front').inert = true;
  $('#back').removeAttribute('aria-hidden'); $('#back').inert = false;
  $('#rate').hidden = false;
  setSessionGuide();
  $('[data-r="got"]').focus({ preventScroll: true });
}
function rate(r) {
  if (!SESS || !SESS.flipped) return;
  const id = SESS.queue.shift();
  SESS.seen[id] = (SESS.seen[id] || 0) + 1;
  if (!(id in SESS.first)) {
    SESS.first[id] = r;
    const st = S.cards[id] || { b: 1, due: 0, n: 0, l: 0 };
    st.n++;
    if (r === 'got') st.b = Math.min(5, st.b + 1);
    else if (r === 'miss') { st.b = 1; st.l++; }
    st.due = Date.now() + (r === 'miss' ? 0 : INTERVALS[st.b] * DAY);
    S.cards[id] = st; save();
  }
  if (r === 'got') SESS.fin.add(id);
  else if (r === 'shaky') { if (SESS.seen[id] >= 2) SESS.fin.add(id); else SESS.queue.push(id); }
  else { if (SESS.seen[id] >= 3) SESS.fin.add(id); else SESS.queue.splice(Math.min(3, SESS.queue.length), 0, id); }
  SESS.flipped = false;
  renderCard();
  window.scrollTo(0, 0);
}
function endSession() {
  if (!SESS) return;
  const s = SESS, vals = Object.values(s.first), cnt = k => vals.filter(v => v === k).length;
  const nowDue = dueIn(s.deck, s.scope).length;
  const undone = MODS.find(m => !S.done[m.id]);
  s.active = false;
  if (!vals.length) {
    mount(`<h1>Nothing due in this deck</h1><p class="lede">Every card here is scheduled for later. Reviewing before a card is due works, but spaced practice works better.</p><p><a class="btn" href="#/review/run/${s.deck}/all">Practice anyway</a> <a class="btn ghost" href="#/review">Back to the hub</a></p>`);
    setWhere('<strong>Phase 2: Review</strong>'); setGuide({ label: 'All caught up', msg: 'Nothing is due here. Move on to new material or come back later.', acts: undone ? [{ t: `Module ${undone.n}`, href: `#/learn/${undone.id}/${nextTab(undone.id)}` }] : [{ t: 'Back to the hub', href: '#/review' }] });
    SESS = null; return;
  }
  const soon = Object.keys(s.first).map(id => S.cards[id].due).filter(d => d > Date.now()).sort()[0];
  mount(`<p class="kicker">Session complete</p><h1>${vals.length} card${vals.length === 1 ? '' : 's'} reviewed</h1>
<div class="tbl" style="max-width:420px"><table><tbody><tr><td>Got it first time</td><td class="num"><strong>${cnt('got')}</strong></td></tr><tr><td>Shaky</td><td class="num"><strong>${cnt('shaky')}</strong></td></tr><tr><td>Missed</td><td class="num"><strong>${cnt('miss')}</strong></td></tr></tbody></table></div>
<p>${cnt('miss') + cnt('shaky') ? 'Cards you missed or found shaky are due again soon; that is the system working.' : 'Clean run. Those cards now wait longer before they come back.'}${soon ? ` The next of these cards is due ${soon - Date.now() < DAY * 1.5 ? 'tomorrow' : 'in about ' + Math.round((soon - Date.now()) / DAY) + ' days'}.` : ''}</p>
${s.more > 0 ? `<p>${s.more} more card${s.more === 1 ? ' is' : 's are'} due in this deck. A second batch right now helps less than coming back later, but it is your call.</p>` : ''}`);
  setWhere('<strong>Phase 2: Review</strong> Done');
  const acts = [];
  if (nowDue > 0) acts.push({ t: `Next batch (${Math.min(20, nowDue)})`, cls: 'ghost', fn: () => startSession(s.deck, false) });
  acts.push(undone ? { t: `Module ${undone.n}`, href: `#/learn/${undone.id}/${nextTab(undone.id)}` } : { t: 'Review hub', href: '#/review' });
  setGuide({ label: 'What now', msg: undone ? `Keep going: Module ${undone.n} is next. Come back to Review for due cards in a day or two.` : 'All modules are done. Return when cards fall due.', acts });
  SESS = null;
}
document.addEventListener('keydown', e => {
  if (!SESS || !SESS.active) return;
  const tag = (e.target.tagName || '').toLowerCase();
  if (!SESS.flipped) {
    if ((e.key === ' ' && tag !== 'textarea' && tag !== 'button') || (e.key === 'Enter' && (e.ctrlKey || e.metaKey))) { e.preventDefault(); flip(); }
  } else if (['1', '2', '3'].includes(e.key) && tag !== 'textarea') { e.preventDefault(); rate(['miss', 'shaky', 'got'][+e.key - 1]); }
});

/* ---------- REFERENCE ---------- */
const REF_TABS = [['gloss', 'Glossary'], ['map', 'Coverage map'], ['notes', 'Notes on the source'], ['evidence', 'Evidence']];
function refNav(cur) { return `<div class="refnav">${REF_TABS.map(([k, t]) => `<a href="#/ref/${k}"${k === cur ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</div>`; }
function viewRef(sub) {
  sub = REF_TABS.some(t => t[0] === sub) ? sub : 'gloss';
  document.title = 'Reference: ' + REF_TABS.find(t => t[0] === sub)[1];
  let html = `<p class="kicker">Phase 3 of 3</p><h1>Reference</h1>${refNav(sub)}`;
  if (sub === 'gloss') {
    html += `<p>${GLOSS.length} terms from both decks. Each links to the module that teaches it.</p><label class="sr" for="gs">Search the glossary</label><input id="gs" class="gloss-search" type="search" placeholder="Search terms or definitions"><ul class="gl" id="gl">${GLOSS.map(g => `<li data-t="${esc((g[0] + ' ' + strip(g[1])).toLowerCase())}"><b>${g[0]}</b><span>${g[1]}<span class="where"><a href="#/learn/${g[2]}/core">Module ${MOD(g[2]).n}</a>, slides ${g[3]}</span></span></li>`).join('')}</ul><p id="gnone" hidden>No matching terms.</p>`;
  } else if (sub === 'map') {
    html += `<p>Every slide in both decks is accounted for. "CR" is Cell Reproduction (53 slides); "GB" is Genetics and Biotechnology (67 slides).</p><div class="tbl"><table><thead><tr><th>Deck</th><th>Slides</th><th>Content</th><th>Module</th><th>Where it sits</th></tr></thead><tbody>${COVER.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3] ? r[3].split(', ').map(x => `<a href="#/learn/${x}/core">${MOD(x).n}</a>`).join(', ') : ''}</td><td>${r[4]}</td></tr>`).join('')}</tbody></table></div>
<h2>What is in the path</h2><div class="tbl"><table><thead><tr><th>Module</th><th class="num">Core items</th><th class="num">Supporting items</th><th class="num">Others items</th><th class="num">Core cards</th><th class="num">Supporting cards</th><th class="num">Others cards</th></tr></thead><tbody>${MODS.map(m => { const k = t => CARDS.filter(c => c.m === m.id && c.tier === t).length; return `<tr><td><a href="#/learn/${m.id}/core">${m.n}. ${m.title}</a></td><td class="num">${m.core.length}</td><td class="num">${m.sup.length}</td><td class="num">${m.oth.length}</td><td class="num">${k('core')}</td><td class="num">${k('sup')}</td><td class="num">${k('oth')}</td></tr>`; }).join('')}<tr><td><strong>Total</strong></td><td class="num">${MODS.reduce((n, m) => n + m.core.length, 0)}</td><td class="num">${MODS.reduce((n, m) => n + m.sup.length, 0)}</td><td class="num">${MODS.reduce((n, m) => n + m.oth.length, 0)}</td><td class="num">${CARDS.filter(c => c.tier === 'core').length}</td><td class="num">${CARDS.filter(c => c.tier === 'sup').length}</td><td class="num">${CARDS.filter(c => c.tier === 'oth').length}</td></tr></tbody></table></div>`;
  } else if (sub === 'notes') {
    html += `<p>Places where the slides are loose, inconsistent or wrong, and what this path does about each.</p><ul class="notes">${NOTES.map(n => `<li><h3>${n[0]}</h3><p>${n[1]}</p></li>`).join('')}</ul>
<h2>Everything here that goes beyond the slides</h2><ul>${BEYOND.map(b => `<li>${b}</li>`).join('')}</ul>`;
  } else {
    html += `<p>The way this path is built follows published research on how people learn. Findings differ by task and learner, so treat these as good bets, not guarantees.</p><div class="tbl"><table><thead><tr><th>Principle</th><th>What research found</th><th>Where it shows up here</th><th>Sources</th></tr></thead><tbody>${EVID.map(r => `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</tbody></table></div>
<h2>References</h2><ul class="refs">${REFS.map(r => `<li>${r}</li>`).join('')}</ul>`;
  }
  mount(html);
  if (sub === 'gloss') {
    $('#gs').addEventListener('input', e => {
      const v = e.target.value.trim().toLowerCase(); let shown = 0;
      $$('#gl li').forEach(li => { const ok = !v || li.dataset.t.includes(v); li.hidden = !ok; if (ok) shown++; });
      $('#gnone').hidden = shown > 0;
    });
  }
  setWhere('<strong>Reference</strong> ' + REF_TABS.find(t => t[0] === sub)[1]);
  const ns = nextStep(); setGuide({ label: 'Back on the path', msg: ns.msg, acts: [{ t: ns.t, href: ns.href }] });
}

/* ---------- RAIL ---------- */
function renderRail(r) {
  const mods = MODS.map(m => {
    const vis = TABS.filter(t => S.visited[m.id + ':' + t]).length, st = S.done[m.id] ? 'done' : vis ? 'half' : '';
    const on = r[0] === 'learn' && r[1] === m.id;
    return `<li><a href="#/learn/${m.id}/${nextTab(m.id)}"${on ? ' aria-current="page"' : ''}><span class="dot ${st}"></span><span>${m.n}. ${m.title}</span><span class="meta">${S.done[m.id] ? 'done' : modMins(m) + ' min'}</span></a></li>`;
  }).join('');
  const n = doneCount(), due = dueTotal();
  $('#rail').innerHTML = `<p class="brand">Cell Reproduction and Genetics</p><p class="brand-sub">Study path from two slide decks</p>
<ul class="nav"><li><a href="#/start"${r[0] === 'start' ? ' aria-current="page"' : ''}><span class="dot ${n ? 'done' : ''}"></span><span>Start and plan</span></a></li></ul>
<h2>Phase 1: Expose</h2><p class="phase-note">Read in order. ${n} of ${MODS.length} done.</p><ul class="nav">${mods}</ul>
<h2>Phase 2: Review</h2><p class="phase-note">Flashcards. Decks open as you finish modules.</p><ul class="nav"><li><a href="#/review"${r[0] === 'review' ? ' aria-current="page"' : ''}><span class="dot ${n ? '' : 'lock'}"></span><span>Review hub</span><span class="meta">${n ? due + ' due' : 'locked'}</span></a></li></ul>
<h2>Phase 3: Reference</h2><ul class="nav">${REF_TABS.map(([k, t]) => `<li><a href="#/ref/${k}"${r[0] === 'ref' && (r[1] || 'gloss') === k ? ' aria-current="page"' : ''}><span class="dot"></span><span>${t}</span></a></li>`).join('')}</ul>`;
}

/* ---------- ROUTER ---------- */
function route() {
  const r = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
  if (!r[0]) r[0] = 'start';
  if (SESS && !(r[0] === 'review' && r[1] === 'run')) SESS.active = false;
  try {
    if (r[0] === 'learn') viewLearn(r[1], r[2]);
    else if (r[0] === 'review' && r[1] === 'run') {
      const d = r[2];
      if (d === 'mix') { if (doneCount() < 2) lockedView('Mixed review opens after you finish two modules.', '#/review', 'Back to the hub'); else startSession('mix', r[3] === 'all'); }
      else if (!MOD(d)) location.hash = '#/review';
      else if (!S.done[d]) lockedView(`Deck ${MOD(d).n} opens when you finish Module ${MOD(d).n}. Expose comes before Review.`, `#/learn/${d}/${nextTab(d)}`, `Go to Module ${MOD(d).n}`);
      else startSession(d, r[3] === 'all');
    }
    else if (r[0] === 'review') viewReview();
    else if (r[0] === 'ref') viewRef(r[1]);
    else viewStart();
  } catch (err) {
    console.error(err);
    $('#view').innerHTML = `<h1>Something went wrong</h1><p>This page could not be drawn. Go back to <a href="#/start">the start page</a>.</p>`;
  }
  renderRail(r);
  $('#rail').classList.remove('open'); $('#scrim').classList.remove('on'); $('#pathbtn').setAttribute('aria-expanded', 'false');
  if (!(r[0] === 'review' && r[1] === 'run')) { window.scrollTo(0, 0); }
}

/* ---------- boot ---------- */
function applyTheme() { if (S.theme) document.documentElement.setAttribute('data-theme', S.theme); else document.documentElement.removeAttribute('data-theme'); }
$('#themebtn').addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme') || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  S.theme = cur === 'dark' ? 'light' : 'dark'; applyTheme(); save();
});
$('#pathbtn').addEventListener('click', () => { const o = $('#rail').classList.toggle('open'); $('#scrim').classList.toggle('on', o); $('#pathbtn').setAttribute('aria-expanded', String(o)); });
$('#scrim').addEventListener('click', () => { $('#rail').classList.remove('open'); $('#scrim').classList.remove('on'); $('#pathbtn').setAttribute('aria-expanded', 'false'); });
applyTheme();
window.addEventListener('hashchange', route);
route();
