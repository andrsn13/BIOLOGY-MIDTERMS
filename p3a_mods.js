/* =====================================================================
   CONTENT. Slide tags: CR = "3.1 Cell Reproduction" deck, GB = "4.1 Genetics and Biotechnology" deck.
   Tiers: core = highest leverage, sup = supporting, oth = everything else (still covered).
   ===================================================================== */
const think = (q, a) => `<details class="explain"><summary>Explain it to yourself: ${q}</summary><div class="ans"><p>${a}</p></div></details>`;
const note = (cls, strong, html) => `<div class="callout ${cls}"><p><strong>${strong}</strong> ${html}</p></div>`;
const tb = (h, rows) => `<div class="tbl"><table><thead><tr>${h.map(x => `<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const gt = s => `<span class="gt">${s}</span>`;

const MODS = [];

/* ---------------------------------------------------------------- M1 */
MODS.push({
  id: 'm1', n: 1, title: 'DNA and RNA',
  q: 'What is the information, and what puts it to work?',
  needs: 'This is the starting point. Nothing is assumed.',
  obj: [
    'Say what DNA stores and what makes it special among molecules (it copies itself).',
    'State how RNA differs from DNA in strands and bases, and how RNA is made.',
    'Name the three types of RNA and what each one does.'
  ],
  core: [
    {
      h: 'DNA is the blueprint: it stores information and copies itself', s: 'CR 2',
      b: `<p>DNA's function is to <strong>store and transfer genetic information</strong>. It is built from four bases: <strong>adenine (A), guanine (G), cytosine (C) and thymine (T)</strong>.</p>
<p>One property drives most of this path: DNA is <strong>self-replicating</strong>. A cell can make a copy of its own DNA. That copying is the S phase of the cell cycle (Module 3), and it is why a dividing cell can hand a full set of instructions to each daughter cell.</p>
${think('Why might a cell keep a protected master copy and use something else to do the work?', 'A working copy can be made, used and thrown away without risking the master. That fits the slides, which say DNA is protected by proteins and has several repair mechanisms, while RNA is the worker. (This is a way of thinking about the slides, not a statement from them.)')}`
    },
    {
      h: 'RNA is the worker: single strand, uracil, made from DNA', s: 'CR 3',
      b: `<p>The deck's image: DNA is the blueprint and <strong>RNA is the worker who puts the blueprint instructions into action</strong>. Three facts define RNA:</p>
<ul><li><strong>Single strand.</strong> This lets RNA fold into complex three-dimensional shapes.</li>
<li><strong>Uracil instead of thymine.</strong> RNA has no thymine. Uracil (U) bonds with adenine (A).</li>
<li><strong>Made from DNA.</strong> RNA is synthesized from DNA by a process called <strong>transcription</strong>.</li></ul>
${tb(['', 'DNA', 'RNA'], [
        ['Job', 'Stores and transfers genetic information', 'Puts the instructions into action'],
        ['Bases', 'A, G, C and <strong>T</strong>', 'A, G, C and <strong>U</strong> (no thymine)'],
        ['Strands', 'Double helix (as drawn in the deck\u2019s figures)', 'Single strand, folds into 3-D shapes'],
        ['Making more', 'Self-replicating', 'Synthesized from DNA (transcription)']
      ])}
${note('link', 'Why this comes first.', 'Every later module is about what happens to DNA: it is packaged (Module 2), copied and divided (Modules 3 to 5), and inherited (Modules 6 to 8).')}`
    }
  ],
  sup: [
    {
      h: 'The three RNAs and their jobs', s: 'CR 4',
      b: `${tb(['RNA type', 'Job (slide wording)', 'Hook'], [
        ['<strong>Messenger RNA (mRNA)</strong>', 'Carries codes from DNA to sites of protein synthesis on ribosomes in the cell cytoplasm', 'Messenger = message'],
        ['<strong>Transfer RNA (tRNA)</strong>', 'Carries amino acids to ribosomes', 'Transfer = transport'],
        ['<strong>Ribosomal RNA (rRNA)</strong>', 'Combines with proteins to form ribosomes and translates information from mRNA and tRNA', 'Ribosomal = ribosome']
      ])}`
    }
  ],
  oth: [
    { t: 'DNA: location', d: 'The cell\u2019s nucleus; some is found in mitochondria.', s: 'CR 2' },
    { t: 'RNA: location', d: 'The nucleolus of cells, and some in the cytoplasm.', s: 'CR 3' },
    { t: 'DNA: reactivity', d: 'Protected by proteins; contains multiple repair mechanisms; stable under alkaline conditions. More vulnerable to damage from ultraviolet light than RNA.', s: 'CR 2' },
    { t: 'RNA: reactivity', d: 'More resistant to UV damage than DNA.', s: 'CR 3' },
    { t: 'The deck\u2019s five comparison headings', d: 'Structure, Function, Location in Cells, Replication, Reactivity. Core covers structure, function and replication; the rows above cover location and reactivity.', s: 'CR 2\u20133' }
  ]
});

/* ---------------------------------------------------------------- M2 */
MODS.push({
  id: 'm2', n: 2, title: 'Chromosomes: packaging and counting DNA',
  q: 'How is that information packaged, and how do we count it?',
  needs: 'Module 1: DNA is a very long information molecule that can copy itself.',
  obj: [
    'Explain how about three billion nucleotides fit inside a nucleus.',
    'Tell chromatin, chromosome, chromatid and centromere apart, and count chromosomes correctly.',
    'Use diploid (2n) and haploid (n) with human numbers.'
  ],
  core: [
    {
      h: 'Packing: DNA wraps on histones and coils into chromosomes', s: 'CR 5\u20139',
      b: `<p>The DNA in a human cell is estimated at <strong>about three billion nucleotides</strong>. It fits in the nucleus because it is coiled and packed in an organized way. In eukaryotic cells DNA wraps tightly around proteins called <strong>histones</strong>, which help maintain the shape of the chromosome and aid tight packing.</p>
<p>As a cell prepares to divide, the DNA coils even further and twists into compact, rod-shaped <strong>chromosomes</strong>. A chromosome is a threadlike structure made of protein and a single molecule of DNA, and it carries genomic information from cell to cell.</p>
{{fig:packing}}
${think('Why would a cell coil its DNA even tighter just before it divides?', 'Compact rods are easier to move and share out than a long loose thread. This is an inference; the slides only say DNA coils further as the cell prepares to divide. In Module 4 you will watch the rods being lined up and pulled apart.')}`
    },
    {
      h: 'Four look-alike words: chromatin, chromosome, chromatid, centromere', s: 'CR 10',
      b: `{{fig:chromosome}}
${tb(['Term', 'What it is', 'Hook'], [
        ['<strong>Chromatin</strong>', 'The less tightly coiled DNA-protein complex', 'loose'],
        ['<strong>Chromosome</strong>', 'The compact rod of DNA and protein that the cell shares out when it divides', 'packed'],
        ['<strong>Chromatid</strong>', 'The strand of a chromosome that becomes visible during mitosis or meiosis. After DNA is copied, each chromosome has two identical <em>sister</em> chromatids', 'one of two copies'],
        ['<strong>Centromere</strong>', 'The region that holds the two sister chromatids together during mitosis', 'the joint']
      ])}
${note('warn', 'Counting rule.', 'Count centromeres, not arms. A copied chromosome with two sister chromatids is still <strong>one</strong> chromosome. Only when the chromatids separate at the centromere (anaphase, Module 4) does each one count as its own chromosome. This rule follows from the slides\u2019 anaphase description and is the key to every counting question later.')}`
    },
    {
      h: 'Diploid (2n) and haploid (n): counting sets', s: 'CR 14',
      b: `<p>A <strong>diploid</strong> cell has two sets of chromosomes (2n): two of each autosome type, forming homologous pairs, plus two sex chromosomes. In humans that is <strong>46 chromosomes, or 23 pairs</strong>. A <strong>haploid</strong> cell (1n) has one of each pair: <strong>23</strong> in humans.</p>
${tb(['', 'Diploid (2n)', 'Haploid (n)'], [
        ['Sets of chromosomes', '2', '1'],
        ['Human number', '46 (23 pairs)', '23'],
        ['Which human cells', 'All except reproductive cells', 'Reproductive cells: sperm and egg'],
        ['Per homologous pair', '2 autosomes', '1 autosome']
      ])}
${note('link', 'Looking ahead.', 'Mitosis keeps 2n as 2n (Module 4). Meiosis turns 2n into n (Module 5). Fertilization joins two haploid cells and restores 2n.')}`
    }
  ],
  sup: [
    {
      h: 'Sex chromosomes and autosomes', s: 'CR 12',
      b: `<p><strong>Sex chromosomes</strong> determine the sex of an organism and may also carry genes for other characteristics. In humans they are X or Y: <strong>XX is female, XY is male</strong>. <strong>Autosomes</strong> are all the other chromosomes. Of the 46 human chromosomes, 2 are sex chromosomes and <strong>44 are autosomes</strong>.</p>`
    },
    {
      h: 'Karyotype', s: 'CR 13',
      b: `<p>A <strong>karyotype</strong> is a photomicrograph of the chromosomes in a normal dividing cell, sorted into pairs. A human karyotype shows <strong>22 homologous pairs of autosomes and 2 sex chromosomes</strong>.</p>{{fig:karyo}}`
    },
    {
      h: 'Prokaryotic chromosomes are a different design', s: 'GB 2\u20133',
      b: `<p>The deck's first review question asks which statement about prokaryotic chromosomes is true. The answer it gives: a prokaryotic chromosome consists of <strong>a circular DNA molecule</strong>. It is not described as DNA wrapped tightly around histones; that packaging belongs to eukaryotes. (This is the textbook generalization; see the note about exceptions in Reference.)</p>`
    }
  ],
  oth: [
    {
      t: 'Chromosome numbers of various species', s: 'CR 11',
      d: `<p>Slide table, plus two corrections from published values.</p>${tb(['Organism', 'Number on the slide', 'Note'], [
        ['Adder\u2019s tongue fern', '1,262', 'Most in the table'],
        ['Carrot', '18', ''], ['Cat', '32', '<strong>Published value is 38</strong>'], ['Chimpanzee', '48', ''], ['Dog', '78', 'More than a human'],
        ['Earthworm', '36', ''], ['Fruit fly', '8', 'Fewest in the table'], ['Garden pea', '20', '<strong>Published value is 14</strong> (Mendel\u2019s species)'],
        ['Gorilla', '48', ''], ['Horse', '64', ''], ['Human', '46', ''], ['Lettuce', '18', ''], ['Orangutan', '48', ''], ['Sand dollar', '52', '']
      ])}<p>Takeaway: chromosome number does not track how complex an organism is. If a test is built from the slide, expect the slide\u2019s numbers, but know the corrected ones.</p>`
    },
    { t: 'Packaging levels as labelled on the slide', d: 'Cell, then coil within chromosome, then further coiling within coil, then DNA and histones, then DNA double helix.', s: 'CR 7' },
    { t: 'Eukaryotic cell diagram labels', d: 'Eukaryotic cell, chromosome, nucleus, histones, DNA.', s: 'CR 9' },
    { t: 'Chromatid photograph', d: 'A stained chromosome with the centromere and the two chromatids labelled.', s: 'CR 10' }
  ]
});

/* ---------------------------------------------------------------- M3 */
MODS.push({
  id: 'm3', n: 3, title: 'Cell division and the cell cycle',
  q: 'How does a cell make a copy of itself?',
  needs: 'Module 1: DNA copies itself. Module 2: chromosomes, chromatids and 2n.',
  obj: [
    'Describe binary fission and contrast it with division in eukaryotes.',
    'Put G1, S, G2, mitosis and cytokinesis in order and say what each does.',
    'Define interphase, mitosis and cytokinesis without mixing them up.'
  ],
  core: [
    {
      h: 'Every division is copy, then split. Prokaryotes use binary fission', s: 'CR 16\u201318, GB 10\u201313',
      b: `<p><strong>Cell division</strong> (also called cell reproduction) is the process by which cells produce offspring cells. It differs in prokaryotes and eukaryotes, but the result is the same: <strong>two cells from one</strong>. For most prokaryotes it happens by <strong>binary fission</strong>, in which two identical cells are produced from one cell.</p>
{{fig:fission}}
<ol><li>The DNA is copied, giving two identical chromosomes attached to the inside of the inner cell membrane.</li>
<li>A new cell membrane begins to develop between the two DNA copies.</li>
<li>The cell grows until it reaches about twice its original size.</li>
<li>New material is added, the growing membrane pushes inward, and the cell constricts in the center, like a balloon squeezed in the middle.</li>
<li>A new cell wall forms around the new membrane. The cell splits into two independent cells, each with one of the identical chromosomes.</li></ol>
${note('link', 'The deck\u2019s own analogy.', 'Prokaryote : binary fission :: eukaryote : <strong>mitosis</strong> (review question 5).')}`
    },
    {
      h: 'Eukaryotes divide the nucleus and the cytoplasm', s: 'CR 19',
      b: `<p>In eukaryotic cell division <strong>both the cytoplasm and the nucleus divide</strong>. There are two kinds of eukaryotic cell division: <strong>mitosis</strong> (Module 4) and <strong>meiosis</strong> (Module 5). Both begin from the same fact you already know: the DNA has been copied first.</p>`
    },
    {
      h: 'The cell cycle: the orderly sequence from one division to the next', s: 'CR 20\u201323',
      b: `<p>The <strong>cell cycle</strong> is an orderly set of stages between the time a cell divides and the time the resulting daughter cells divide. It has two big parts: <strong>interphase</strong> (the time between cell divisions) and <strong>cell division</strong> itself.</p>
{{fig:wheel}}
${tb(['Phase', 'What happens', 'Slide wording for "G"'], [
        ['<strong>G1</strong>', 'Offspring cells (about half the original size after division) grow to mature size', 'Time gap after cell division, before DNA replication'],
        ['<strong>S</strong>', 'The cell\u2019s DNA is copied (synthesized)', ''],
        ['<strong>G2</strong>', 'The cell prepares for division', 'Time gap after DNA synthesis, before cell division'],
        ['<strong>Mitosis (M)</strong>', 'The <em>nucleus</em> divides', ''],
        ['<strong>Cytokinesis (C)</strong>', 'The <em>cytoplasm</em> divides', '']
      ])}
<p>During cell division the chromosomes and cytoplasm are equally divided between the two offspring cells. Cell division = <strong>mitosis + cytokinesis</strong>.</p>
${note('warn', 'Common slip.', 'Interphase is the time <em>between</em> divisions, but it is busy: growth (G1), copying (S) and preparing (G2). The state where a cell is not preparing to divide is <strong>G0</strong>, not interphase.')}
${think('Which phase must come before mitosis can work, and why?', 'S phase. Mitosis splits the DNA equally into two cells, so there must be two copies to share out. This is the same copy-then-split logic as binary fission.')}`
    }
  ],
  sup: [
    {
      h: 'G0: leaving the cycle', s: 'CR 24',
      b: `<p>Cells can exit the cell cycle, usually from G1, and enter a state called <strong>G0</strong>. In G0 a cell does not copy its DNA and does not prepare for division. Many cells in the human body are in G0. For example, fully developed cells of the central nervous system stop dividing at maturity and normally never divide again.</p>`
    }
  ],
  oth: [
    { t: 'Prokaryote offspring label', d: 'The deck\u2019s fission figure labels the two offspring as identical haploid cells.', s: 'CR 17' },
    { t: 'Stage ring diagram', d: 'The ring shows G1, S phase, G2, then mitosis, with the nondividing G0 branch leaving from G1.', s: 'CR 25' },
    { t: 'Cell-cycle slide wording', d: 'One phase of the cycle is cell division; the time between cell divisions is called interphase.', s: 'CR 20' },
    { t: 'Where the copies attach', d: 'In binary fission the two chromosomes attach to the inside of the inner cell membrane.', s: 'CR 18' }
  ]
});

/* ---------------------------------------------------------------- M4 */
MODS.push({
  id: 'm4', n: 4, title: 'Mitosis',
  q: 'How does a cell split its copied DNA exactly in two?',
  needs: 'Module 2: chromatids and the counting rule. Module 3: S phase copies DNA, mitosis divides the nucleus.',
  obj: [
    'State what mitosis produces and the situations that need it.',
    'Name the four phases in order with the signature event of each.',
    'Track chromosome number, chromatids and DNA amount through mitosis.'
  ],
  core: [
    {
      h: 'What mitosis produces, and what it is for', s: 'CR 26\u201327, 36',
      b: `<p>Mitosis results in new cells whose genetic material is <strong>identical</strong> to that of the original cell. A diploid cell makes two diploid daughter cells.</p>
{{fig:mitflow}}
<p>It is needed whenever cells must be made as exact copies:</p>
<ul><li><strong>Growth and development.</strong> An organism grows from its first cell, the zygote.</li>
<li><strong>Repair.</strong> In adult multicellular organisms mitotic activity is the basis for wound healing and other cell replacement in certain tissues.</li>
<li><strong>Asexual reproduction.</strong> The production of offspring from one parent.</li></ul>`
    },
    {
      h: 'The four phases: prophase, metaphase, anaphase, telophase', s: 'CR 28\u201335',
      b: `<p>Use the viewer: pick a stage and read the events beside the picture. A memory frame is <strong>PMAT</strong> (prophase, metaphase, anaphase, telophase).</p>
{{fig:mitosis}}
${tb(['Phase', 'Signature event', 'Why it matters'], [
        ['<strong>Prophase</strong> (1st)', 'DNA shortens and coils into rod-shaped chromosomes; nucleolus disintegrates; centrioles divide and move apart; each chromosome is two sister chromatids', 'Chromosomes become visible and ready to move'],
        ['<strong>Metaphase</strong> (2nd)', 'Kinetochore fibers move the chromosomes to the center of the cell', 'Easiest phase to identify chromosomes'],
        ['<strong>Anaphase</strong> (3rd)', 'Chromatids separate at the centromere and move, centromere first, to opposite poles', 'Each separated chromatid is now an individual chromosome'],
        ['<strong>Telophase</strong> (4th)', 'Spindle fibers disassemble; chromosomes uncoil into chromatin; a nuclear envelope and a nucleolus form in each new cell', 'Two nuclei exist; cytokinesis divides the cytoplasm']
      ])}`
    },
    {
      h: 'Count it: chromosomes, chromatids and DNA through mitosis', s: 'CR 14, 34, GB 6\u20139',
      b: `<p>Run a human cell through mitosis and keep a ledger. It uses the counting rule from Module 2 (count centromeres).</p>
{{fig:ledgerM}}
<ul><li>DNA amount <strong>doubles in S phase</strong> and <strong>halves only when the cell splits</strong> (telophase and cytokinesis).</li>
<li>The chromosome count <strong>doubles briefly in anaphase</strong>, because chromatids are now counted as chromosomes, but no new DNA has been made.</li></ul>
<p>This is the logic behind two of the deck's review questions: chromatids separate and become individual chromosomes in <strong>anaphase</strong>; the cell's DNA mass decreases in <strong>telophase and cytokinesis</strong>.</p>
${think('Anaphase doubles the number of chromosomes you would count. Does the cell\u2019s DNA amount double too?', 'No. The DNA was doubled back in S phase. In anaphase that same DNA is just separated, so 46 two-chromatid chromosomes become 92 one-chromatid chromosomes with the same total DNA.')}`
    }
  ],
  sup: [
    {
      h: 'Spindle fibers: the machinery that moves chromosomes', s: 'CR 28, 30\u201331',
      b: `<p>Two types of spindle fibers form in prophase:</p>
<ul><li><strong>Kinetochore fibers</strong> are found in the centromere region of each chromosome. They extend from the kinetochore of each chromatid to one of the centrosomes.</li>
<li><strong>Polar fibers</strong> extend across the dividing cell from centrosome to centrosome but do not attach to the chromosomes.</li></ul>
<p>The prophase diagram shows the parts: sister chromatids, centromere region, kinetochore, spindle fiber and microtubules. The mitosis diagram also labels the <strong>centrosome (with centrioles)</strong> and the early mitotic spindle.</p>`
    },
    {
      h: 'Cytokinesis: the cleavage furrow', s: 'CR 21, 28, 36',
      b: `<p><strong>Cytokinesis</strong> is the division of the cell's cytoplasm. In the deck's diagram the nuclear membranes are reforming while a <strong>cleavage furrow</strong> pinches the parent cell in half, giving two daughter cells.</p>`
    }
  ],
  oth: [
    { t: 'Prometaphase', d: 'The ring diagram of the cell cycle lists prometaphase between prophase and metaphase. The text slides describe only four phases.', s: 'CR 25' },
    { t: 'Cohesin and shugoshin', d: 'The prophase diagram labels these two proteins at the centromere region of the sister chromatids but the deck does not explain them. (Standard biology, outside the slides: cohesin is the protein link between sister chromatids, and shugoshin protects it at the centromere.)', s: 'CR 30' },
    { t: 'Metaphase photomicrograph', d: 'A stained cell with two dark poles and spindle fibers between them.', s: 'CR 33' },
    { t: 'Labels on the stages-of-mitosis diagram', d: 'Centrosome (with centrioles), early mitotic spindle, polar fibers, mitotic spindle, kinetochore, kinetochore fibers, nuclear membrane, chromatids, nuclear membrane reforming, cleavage furrow.', s: 'CR 28' },
    { t: 'Purpose of mitosis, in the deck\u2019s words', d: 'Provides the basis for asexual reproduction; foundation for development and growth of the organism; wound healing and cell replacement in adults. See the note on the word zygote in Reference.', s: 'CR 26' }
  ]
});
