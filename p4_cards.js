/* =====================================================================
   FLASHCARDS (Review phase). Tiers match the Learn tabs: core / sup / oth.
   ===================================================================== */
const CARDS = [];
const C = (m, tier, type, q, a, s, why) => {
  const n = CARDS.filter(c => c.m === m).length + 1;
  CARDS.push({ id: m + '-' + n, m, tier, type, q, a, s: s || '', why: why || '' });
};
const mcq = (stem, opts) => `<p>${stem}</p><ul class="qopts">${opts.map((o, i) => `<li>${'ABCD'[i]}. ${o}</li>`).join('')}</ul>`;

/* ---------------- M1 ---------------- */
C('m1', 'core', 'Recall', 'What are the two main jobs of DNA, and what special property lets cells make more of it?', 'It <strong>stores and transfers genetic information</strong>. It is <strong>self-replicating</strong>.', 'CR 2');
C('m1', 'core', 'Recall', 'Name the four bases of DNA.', 'Adenine (A), guanine (G), cytosine (C) and thymine (T).', 'CR 2');
C('m1', 'core', 'Compare', 'Which base does RNA use in place of thymine, and which base does it bond with?', '<strong>Uracil</strong>, which bonds with <strong>adenine</strong>.', 'CR 3');
C('m1', 'core', 'Compare', 'How does RNA\u2019s strand structure differ from DNA\u2019s, and what does it allow?', 'RNA is <strong>single-stranded</strong>, which lets it form complex three-dimensional shapes. (DNA is drawn as a double helix.)', 'CR 3, 7');
C('m1', 'core', 'Explain', 'How is RNA made, and from what?', 'It is <strong>synthesized from DNA</strong> by the process of <strong>transcription</strong>.', 'CR 3');
C('m1', 'core', 'Explain', 'In the deck\u2019s metaphor, what is DNA and what is RNA?', 'DNA is the <strong>blueprint</strong>. RNA is the <strong>worker</strong> who puts the blueprint instructions into action.', 'CR 3');
C('m1', 'core', 'Apply', 'Which phase of the cell cycle depends on DNA being self-replicating?', '<strong>S phase</strong>: the cell\u2019s DNA is copied.', 'CR 2, 23', 'Links Module 1 to Module 3.');
C('m1', 'sup', 'Recall', 'Name the three main types of RNA.', 'Messenger RNA (mRNA), transfer RNA (tRNA) and ribosomal RNA (rRNA).', 'CR 4');
C('m1', 'sup', 'Recall', 'What does mRNA do?', 'Carries codes from DNA to sites of protein synthesis on ribosomes in the cell cytoplasm.', 'CR 4');
C('m1', 'sup', 'Recall', 'What does tRNA do?', 'Carries amino acids to ribosomes.', 'CR 4');
C('m1', 'sup', 'Recall', 'What does rRNA do?', 'Combines with proteins to form ribosomes, and translates information from mRNA and tRNA (slide wording).', 'CR 4');
C('m1', 'oth', 'Recall', 'Where is DNA located in cells?', 'The cell\u2019s nucleus; some is found in mitochondria.', 'CR 2');
C('m1', 'oth', 'Recall', 'Where is RNA located in cells?', 'The nucleolus, and some in the cytoplasm.', 'CR 3');
C('m1', 'oth', 'Compare', 'Which is more vulnerable to damage from ultraviolet light, DNA or RNA?', '<strong>DNA</strong>. RNA is more resistant to UV damage.', 'CR 2\u20133');
C('m1', 'oth', 'Recall', 'List the protective features of DNA from the deck.', 'Protected by proteins; contains multiple repair mechanisms; stable under alkaline conditions.', 'CR 2');

/* ---------------- M2 ---------------- */
C('m2', 'core', 'Explain', 'About three billion nucleotides must fit in a nucleus. How?', 'The DNA is <strong>coiled and packed</strong> in an organized way: it wraps around <strong>histones</strong>, coils, and coils again. Before division it coils further into rod-shaped chromosomes.', 'CR 5\u20137', 'Dual coding: picture the five levels in the packaging figure.');
C('m2', 'core', 'Recall', 'What are histones and what do they do?', 'Proteins that eukaryotic DNA wraps tightly around. They help maintain the shape of the chromosome and aid tight packing.', 'CR 8');
C('m2', 'core', 'Recall', 'What is a eukaryotic chromosome made of?', 'Protein and a single molecule of DNA, compacted into a rod shape; it carries genomic information from cell to cell.', 'CR 7\u20138');
C('m2', 'core', 'Compare', 'Chromatin versus chromosome?', '<strong>Chromatin</strong> is the less tightly coiled DNA-protein complex. A <strong>chromosome</strong> is the tightly coiled, rod-shaped form seen when the cell divides.', 'CR 7, 10');
C('m2', 'core', 'Recall', 'What is a chromatid?', 'The strand of a chromosome that becomes visible during mitosis or meiosis. After DNA is copied, a chromosome has two identical <strong>sister chromatids</strong>.', 'CR 10, 29');
C('m2', 'core', 'Recall', 'What is the centromere?', 'The region of the chromosome that holds the two sister chromatids together during mitosis.', 'CR 10');
C('m2', 'core', 'Compute', 'A copied chromosome has two sister chromatids joined at one centromere. How many chromosomes is that?', '<strong>One.</strong> Count centromeres, not arms. Chromatids count as separate chromosomes only after they separate in anaphase.', 'CR 10, 34', 'The counting rule: it is needed for every ledger question.');
C('m2', 'core', 'Recall', 'Define diploid and haploid, with abbreviations and human numbers.', '<strong>Diploid (2n)</strong>: two sets of chromosomes; 46 in humans. <strong>Haploid (1n)</strong>: one set; 23 in humans.', 'CR 14');
C('m2', 'core', 'Recall', 'Which human cells are haploid, and which are diploid?', 'Haploid: the reproductive cells (sperm and egg). Diploid: all other human cells.', 'CR 14');
C('m2', 'core', 'Compute', '46 chromosomes is how many pairs? How many of each autosome type does a diploid cell have?', '<strong>23 pairs</strong>. It has <strong>2</strong> of each autosome type (one homologous pair each).', 'CR 13\u201314');
C('m2', 'core', 'Compute', 'A human sperm cell: how many chromosomes, and is it 1n or 2n?', '<strong>23</strong> chromosomes; <strong>haploid (1n)</strong>.', 'CR 14');
C('m2', 'sup', 'Recall', 'What are the human sex chromosomes in females and in males?', 'Females <strong>XX</strong>; males <strong>XY</strong>. Sex chromosomes also may carry genes for other characteristics.', 'CR 12');
C('m2', 'sup', 'Compute', 'Of a human cell\u2019s 46 chromosomes, how many are autosomes and how many are sex chromosomes?', '<strong>44 autosomes</strong> and <strong>2 sex chromosomes</strong>.', 'CR 12');
C('m2', 'sup', 'Recall', 'What is a karyotype, and what does a human one show?', 'A photomicrograph of the chromosomes in a normal dividing cell, sorted into pairs: <strong>22 homologous pairs of autosomes and 2 sex chromosomes</strong>.', 'CR 13');
C('m2', 'sup', 'Deck question', mcq('Which statement about prokaryotic chromosomes is true?', ['Prokaryotes have at least two chromosomes.', 'Prokaryotic chromosomes consist of a circular DNA molecule.', 'Prokaryotic chromosomes include histone and nonhistone proteins.', 'Prokaryotic chromosomes are made of DNA wrapped tightly around histone proteins.']), '<strong>B.</strong> A circular DNA molecule. Histone wrapping is the eukaryote design.', 'GB 2\u20133');
C('m2', 'oth', 'Recall', 'About how many nucleotides are in a human cell\u2019s DNA?', 'Estimated at <strong>three billion</strong>.', 'CR 5');
C('m2', 'oth', 'Recall', 'In the slide\u2019s chromosome table, which organism has the most chromosomes and which the fewest?', 'Most: <strong>adder\u2019s tongue fern (1,262)</strong>. Fewest: <strong>fruit fly (8)</strong>.', 'CR 11');
C('m2', 'oth', 'Compare', 'Dog 78, human 46. What does this say about chromosome number and complexity?', 'Number of chromosomes does <strong>not</strong> track how complex an organism is.', 'CR 11');
C('m2', 'oth', 'Recall', 'What are the chimpanzee, gorilla and orangutan numbers in the slide table?', '<strong>48</strong> each.', 'CR 11');
C('m2', 'oth', 'Apply', 'The slide lists garden pea = 20 and cat = 32. What are the published diploid numbers?', 'Garden pea <strong>2n = 14</strong>; domestic cat <strong>2n = 38</strong>.', 'CR 11', 'Checked against published sources; learn both if tested from the slide.');
C('m2', 'oth', 'Order', 'Give the packaging levels from cell to DNA, as labelled on the slide.', 'Cell \u2192 coil within chromosome \u2192 further coiling within coil \u2192 DNA and histones \u2192 DNA double helix.', 'CR 7');

/* ---------------- M3 ---------------- */
C('m3', 'core', 'Recall', 'What is the result of cell division in both prokaryotes and eukaryotes?', '<strong>Two cells from one.</strong>', 'CR 16');
C('m3', 'core', 'Recall', 'What is binary fission, and which organisms use it?', 'For most prokaryotes: a process in which <strong>two identical cells are produced from one cell</strong>.', 'CR 17');
C('m3', 'core', 'Order', 'Put the steps of binary fission in order.', '1) DNA is copied; two identical chromosomes attach to the inner membrane. 2) New membrane grows between the copies. 3) Cell grows to about twice its size. 4) Membrane pushes inward; cell constricts. 5) New cell wall forms; two independent cells, each with one chromosome.', 'CR 18');
C('m3', 'core', 'Deck question', mcq('Prokaryote : binary fission :: eukaryotes :', ['Mitosis', 'Cytokinesis', 'Crossing-Over', 'Genetic recombinant']), '<strong>A. Mitosis.</strong>', 'GB 10\u201311');
C('m3', 'core', 'Deck question', `<p>Which type of cell division is shown in the diagram?</p>{{fig:fissionMini}}<ul class="qopts"><li>A. Mitosis</li><li>B. Meiosis</li><li>C. Binary fission</li><li>D. Sexual reproduction</li></ul>`, '<strong>C. Binary fission.</strong> One cell with a single circular chromosome copies it and splits into two identical cells.', 'GB 12\u201313');
C('m3', 'core', 'Recall', 'What divides in eukaryotic cell division, and what are the two kinds?', 'Both the <strong>cytoplasm and the nucleus</strong>. The two kinds are <strong>mitosis</strong> and <strong>meiosis</strong>.', 'CR 19');
C('m3', 'core', 'Order', 'Name the phases of the cell cycle in order, and say which are interphase.', 'G1 \u2192 S \u2192 G2 (<strong>interphase</strong>) \u2192 mitosis \u2192 cytokinesis (<strong>cell division</strong>).', 'CR 20\u201323');
C('m3', 'core', 'Recall', 'What happens in G1?', 'Offspring cells (about half the original size) <strong>grow to mature size</strong>. G1 is the time gap after division and before DNA replication.', 'CR 22');
C('m3', 'core', 'Recall', 'What happens in S phase?', 'The cell\u2019s <strong>DNA is copied</strong> (synthesized).', 'CR 23');
C('m3', 'core', 'Recall', 'What happens in G2?', 'The time gap after DNA synthesis and before division, when the cell <strong>prepares for cell division</strong>.', 'CR 23');
C('m3', 'core', 'Compare', 'Mitosis versus cytokinesis?', '<strong>Mitosis</strong>: the nucleus divides. <strong>Cytokinesis</strong>: the cytoplasm divides. Together they are cell division.', 'CR 21');
C('m3', 'core', 'Explain', 'Why must S phase come before mitosis?', 'Mitosis splits DNA equally into two cells, so there must be <strong>two copies</strong> to share out. Copy, then split, as in binary fission.', 'CR 21, 23');
C('m3', 'core', 'Recall', 'How big are offspring cells right after division, and where does the cycle send them next?', 'About <strong>half</strong> the size of the original cell; they enter <strong>G1</strong> and grow.', 'CR 22');
C('m3', 'sup', 'Recall', 'What is G0, when do cells enter it, and what do they stop doing?', 'A state cells enter by exiting the cycle, usually from G1. They <strong>do not copy DNA and do not prepare for division</strong>.', 'CR 24');
C('m3', 'sup', 'Apply', 'Give the deck\u2019s example of cells in G0.', 'Fully developed cells of the <strong>central nervous system</strong>: they stop dividing at maturity and normally never divide again.', 'CR 24');
C('m3', 'sup', 'Explain', 'Is interphase a "resting" phase?', 'No. It is the time <em>between</em> divisions, but includes growth (G1), copying (S) and preparing (G2). <strong>G0</strong> is the state of not preparing to divide.', 'CR 20\u201324');
C('m3', 'oth', 'Recall', 'In binary fission, where do the two copied chromosomes attach?', 'To the inside of the prokaryote\u2019s <strong>inner cell membrane</strong>.', 'CR 18');
C('m3', 'oth', 'Recall', 'About how large does a prokaryote grow before it divides?', 'Approximately <strong>twice</strong> its original size.', 'CR 18');
C('m3', 'oth', 'Recall', 'In the ring diagram, what branches off G1?', 'The <strong>G0</strong> state of nondividing cells.', 'CR 25');

/* ---------------- M4 ---------------- */
C('m4', 'core', 'Recall', 'What does mitosis produce?', 'New cells with genetic material <strong>identical</strong> to the original cell: two diploid daughter cells.', 'CR 27');
C('m4', 'core', 'Recall', 'Give the situations in which mitosis occurs.', 'Growth, development, <strong>repair</strong> (wound healing, cell replacement) and <strong>asexual reproduction</strong>.', 'CR 26\u201327');
C('m4', 'core', 'Recall', 'What is asexual reproduction?', 'The production of offspring from <strong>one parent</strong>.', 'CR 27');
C('m4', 'core', 'Order', 'Name the four phases of mitosis in order.', '<strong>P</strong>rophase \u2192 <strong>M</strong>etaphase \u2192 <strong>A</strong>naphase \u2192 <strong>T</strong>elophase (PMAT), followed by cytokinesis.', 'CR 29\u201336');
C('m4', 'core', 'Recall', 'What happens in prophase?', 'DNA shortens and coils into visible rod-shaped chromosomes; the nucleolus disintegrates; centrioles divide and move apart; each chromosome is two sister chromatids.', 'CR 29');
C('m4', 'core', 'Recall', 'What happens in metaphase?', 'Kinetochore fibers move the chromosomes to the <strong>center</strong> of the cell. Chromosomes are easiest to identify here.', 'CR 32');
C('m4', 'core', 'Recall', 'What happens in anaphase?', 'Chromatids <strong>separate at the centromere</strong> and move, centromere first, to opposite poles; each is now an individual chromosome.', 'CR 34');
C('m4', 'core', 'Recall', 'What happens in telophase?', 'Spindle fibers disassemble; chromosomes uncoil into chromatin; a <strong>nuclear envelope</strong> forms around each set and a <strong>nucleolus</strong> forms in each new cell.', 'CR 35');
C('m4', 'core', 'Deck question', mcq('In which phase of mitosis do chromatids separate and become individual chromosomes?', ['Prophase', 'Metaphase', 'Anaphase', 'Telophase/Cytokinesis']), '<strong>C. Anaphase.</strong>', 'GB 6\u20137');
C('m4', 'core', 'Deck question', mcq('What process occurs that leads to the decrease in the cell\u2019s DNA mass?', ['Prophase', 'Metaphase', 'Anaphase', 'Telophase/Cytokinesis']), '<strong>D. Telophase/Cytokinesis.</strong> DNA mass halves only when the cell splits in two.', 'GB 8\u20139', 'Use the ledger: DNA doubles in S, halves at cytokinesis.');
C('m4', 'core', 'Compute', 'A human cell starts G1 with 46 chromosomes. At metaphase, how many chromosomes and how many chromatids?', '<strong>46 chromosomes</strong>, <strong>92 chromatids</strong> (each chromosome has two sister chromatids).', 'CR 29, 34');
C('m4', 'core', 'Compute', 'Same cell: how many chromosomes can you count in anaphase?', '<strong>92</strong>, because the separated chromatids are now individual chromosomes.', 'CR 34');
C('m4', 'core', 'Compute', 'Call the DNA in a G1 cell 1 unit. How much after S phase? How much in each daughter cell after cytokinesis?', 'After S: <strong>2 units</strong>. After cytokinesis: <strong>1 unit in each</strong> of the two cells.', 'CR 23, 36');
C('m4', 'core', 'Explain', 'Why does the DNA amount not double in anaphase even though the chromosome count does?', 'The DNA was already doubled in S phase. Anaphase only <em>separates</em> it, so 46 two-chromatid chromosomes become 92 one-chromatid chromosomes with the same total DNA.', 'CR 34', 'Self-explanation is the part that sticks.');
C('m4', 'core', 'Compute', 'After mitosis and cytokinesis, how many cells and how many chromosomes in each (human)?', '<strong>2 cells</strong>, <strong>46 chromosomes</strong> each.', 'CR 27, 36');
C('m4', 'sup', 'Compare', 'Kinetochore fibers versus polar fibers?', '<strong>Kinetochore fibers</strong> run from each chromatid\u2019s kinetochore (centromere region) to a centrosome. <strong>Polar fibers</strong> run centrosome to centrosome without attaching to chromosomes.', 'CR 31');
C('m4', 'sup', 'Recall', 'What is cytokinesis, and what structure shows it in the diagram?', 'Division of the cell\u2019s cytoplasm; the <strong>cleavage furrow</strong> pinches the parent cell in half.', 'CR 21, 28');
C('m4', 'sup', 'Recall', 'What do the centrioles do in prophase?', 'They divide and move apart (the spindle forms from the centrosomes).', 'CR 29');
C('m4', 'oth', 'Recall', 'Which phase is on the ring diagram but not described in the text slides?', '<strong>Prometaphase</strong> (between prophase and metaphase).', 'CR 25');
C('m4', 'oth', 'Recall', 'Which two proteins does the prophase diagram label at the centromere region?', '<strong>Cohesin</strong> and <strong>shugoshin</strong> (labelled, not explained, in the deck).', 'CR 30');
C('m4', 'oth', 'Recall', 'Which structure disintegrates in prophase and re-forms in each new cell in telophase?', 'The <strong>nucleolus</strong>.', 'CR 29, 35');

/* ---------------- M5 ---------------- */
C('m5', 'core', 'Recall', 'What is meiosis and what is it required for?', 'A nuclear division that <strong>reduces the chromosome number to half</strong>. It is required to produce egg and sperm cells (gametes) for sexual reproduction.', 'CR 38\u201339');
C('m5', 'core', 'Compute', 'One human cell goes through meiosis. How many cells result and how many chromosomes does each have?', '<strong>4 haploid cells</strong>, <strong>23 chromosomes</strong> each.', 'CR 41, 49');
C('m5', 'core', 'Recall', 'Meiosis has two divisions. How many rounds of DNA replication, and when?', '<strong>Only one</strong>, in interphase before meiosis I. DNA does not replicate again before meiosis II.', 'CR 41, 43, 46');
C('m5', 'core', 'Explain', 'Why must gametes be haploid?', 'Fertilization joins two gametes. If each carried 46, the zygote would have 92, and the number would double every generation. Haploid gametes keep the number constant.', 'CR 42');
C('m5', 'core', 'Compute', 'An egg (23) and a sperm (23) combine. What is formed and with what number?', 'A <strong>zygote</strong> with <strong>46 chromosomes</strong> (23 pairs): the first cell of a new individual.', 'CR 42');
C('m5', 'core', 'Compare', 'What separates in meiosis I and what separates in meiosis II?', '<strong>Meiosis I</strong>: homologous pairs separate (the halving). <strong>Meiosis II</strong>: sister chromatids separate, like mitosis.', 'CR 44, 46', 'Interleave: compare with mitosis anaphase.');
C('m5', 'core', 'Recall', 'What happens in prophase I?', 'Chromosomes condense into visible X-shaped structures and <strong>homologous chromosomes pair up</strong>; crossing-over occurs.', 'CR 43');
C('m5', 'core', 'Compare', 'What lines up in metaphase I, compared with metaphase of mitosis?', 'Metaphase I: <strong>paired</strong> chromosomes line up along the middle. Mitosis: <strong>individual</strong> chromosomes line up.', 'CR 32, 44');
C('m5', 'core', 'Recall', 'What happens in anaphase I?', 'The pairs separate and move to opposing poles; <strong>either one of each pair can go to either pole</strong>.', 'CR 44');
C('m5', 'core', 'Recall', 'What is the result of telophase I?', 'Nuclear membranes reform; the cell divides into <strong>2 daughter cells with 23 chromosomes each</strong>.', 'CR 45');
C('m5', 'core', 'Recall', 'Describe prophase II, metaphase II and anaphase II.', 'Prophase II: 2 cells, <strong>no DNA replication</strong>. Metaphase II: individual chromosomes line up in the middle. Anaphase II: chromatids separate to opposing poles.', 'CR 46');
C('m5', 'core', 'Deck question', mcq('Crossing-over occurs during which process?', ['Mitosis', 'Meiosis 1', 'Meiosis 2', 'Interphase']), '<strong>B. Meiosis 1</strong>, in prophase I.', 'GB 4\u20135');
C('m5', 'core', 'Recall', 'What is recombination, and in which phase does it occur?', 'The exchange of segments between homologous chromosomes (crossing-over; the diagram marks a chiasma). It occurs in <strong>prophase I</strong>; there is none in mitosis.', 'CR 40, 52');
C('m5', 'core', 'Compare', 'Mitosis versus meiosis: how many divisions, stages, and daughter cells, and what ploidy?', 'Mitosis: one division (4 stages), <strong>2 diploid</strong> cells. Meiosis: two divisions (8 stages), <strong>4 haploid</strong> cells.', 'CR 52');
C('m5', 'core', 'Compare', 'Mitosis versus meiosis: how do the daughter cells compare with the parent?', 'Mitosis: <strong>genetically identical</strong>. Meiosis: <strong>genetically different</strong> (unique), with half as much DNA.', 'CR 50, 52');
C('m5', 'core', 'Compare', 'Where does each occur, in the slide\u2019s wording, and what is the caution?', 'Mitosis: "all organisms, except viruses"; meiosis: "animals, plants, fungi". Caution: prokaryotes use binary fission, so mitosis is really a <strong>eukaryote</strong> process.', 'CR 17, 52');
C('m5', 'core', 'Compute', 'A fruit fly cell has 2n = 8. It undergoes meiosis. How many cells and how many chromosomes in each?', '<strong>4 cells</strong> with <strong>4 chromosomes</strong> each (n = 4).', 'CR 11, 41', 'Transfer to a new organism.');
C('m5', 'sup', 'Compare', 'What does meiosis produce in males and in females?', 'Males: <strong>4 sperm cells</strong>. Females: <strong>1 egg cell and 3 polar bodies</strong>.', 'CR 47');
C('m5', 'sup', 'Recall', 'Do polar bodies function as sex cells?', '<strong>No.</strong>', 'CR 47');
C('m5', 'sup', 'Explain', 'Name two reasons gametes from the same parent differ.', '<strong>Crossing-over</strong> in prophase I, and <strong>random pole assignment</strong> in anaphase I (either member of each pair can go to either pole).', 'CR 40, 44');
C('m5', 'oth', 'Recall', 'Which label on the comparison diagram marks crossing-over?', '<strong>Chiasma</strong>.', 'CR 51');
C('m5', 'oth', 'Recall', 'In the crossing-over diagram, which gene positions are marked?', 'X, Y and Z (and x, y, z) on chromatids that exchange segments.', 'CR 40');
C('m5', 'oth', 'Recall', 'What does the deck\u2019s summary quote say meiosis does to one diploid cell?', 'Two cycles of cell division, one round of DNA replication, four haploid daughter cells (gametes).', 'CR 49');

/* ---------------- M6 ---------------- */
C('m6', 'core', 'Recall', 'What is genetics, and who is the "Father of Genetics"?', 'The field of biology devoted to understanding how characteristics are transmitted from parents to offspring. <strong>Gregor Mendel</strong>.', 'GB 16');
C('m6', 'core', 'Recall', 'How many characteristics did Mendel observe in peas, and what is a trait?', '<strong>Seven</strong>. A trait is a genetically determined variant of a characteristic (e.g., purple flower color).', 'GB 21');
C('m6', 'core', 'Recall', 'What does true-breeding mean?', 'A true-breeding (pure) plant <strong>always produces offspring with that trait</strong> when it self-pollinates.', 'GB 28');
C('m6', 'core', 'Recall', 'Define the P, F1 and F2 generations.', '<strong>P</strong>: the true-breeding parents. <strong>F1</strong> (first filial): offspring of P. <strong>F2</strong> (second filial): offspring of F1 self-pollination.', 'GB 29\u201330');
C('m6', 'core', 'Apply', 'True-breeding purple \u00D7 true-breeding white pea plants. What are the F1 and F2 results?', 'F1: <strong>all purple</strong>. F2: purple and white at about <strong>3 : 1</strong> (705 : 224).', 'GB 31, 34');
C('m6', 'core', 'Recall', 'Define dominant and recessive factor.', '<strong>Dominant</strong>: the factor whose trait appears in F1 because it masks the other. <strong>Recessive</strong>: the factor whose trait is hidden in F1 but reappears in F2.', 'GB 35\u201336');
C('m6', 'core', 'Explain', 'Why does the recessive trait reappear in F2?', 'F1 plants carry both factors (heterozygous) but show the dominant one. When F1 plants self-pollinate, about a quarter of the offspring receive two recessive factors.', 'GB 35\u201337');
C('m6', 'core', 'Recall', 'State the law of segregation.', 'Offspring acquire <strong>one hereditary factor from each parent</strong>; the two factors for a trait separate when gametes form.', 'GB 37');
C('m6', 'core', 'Recall', 'State the law of independent assortment.', 'Different traits have an equal opportunity of occurring together; factors for different traits are shuffled into gametes independently.', 'GB 37');
C('m6', 'core', 'Recall', 'State the law of dominance.', 'Offspring inherit the dominant trait, and show the recessive trait only if they inherit <strong>both</strong> recessive factors.', 'GB 37');
C('m6', 'core', 'Apply', 'Which meiosis event reflects the law of segregation?', 'Homologous chromosomes separate in <strong>anaphase I</strong>, so each gamete gets one of each pair.', 'GB 37, CR 44', 'A bridge between the two decks.');
C('m6', 'core', 'Apply', 'Which feature of meiosis I underlies independent assortment?', 'Each pair separates on its own, and <strong>either member can go to either pole</strong> in anaphase I.', 'GB 37, CR 44');
C('m6', 'core', 'Compute', 'Seed color F2: 6,022 yellow and 2,001 green. What is the observed ratio, and how close is it to 3 : 1?', '6,022 \u00F7 2,001 \u2248 <strong>3.01 : 1</strong>, almost exactly 3 : 1.', 'GB 34');
C('m6', 'core', 'Explain', 'Mendel\u2019s observed ratios ranged from 2.82 : 1 to 3.15 : 1, never exactly 3. Why do the biggest samples sit closest to 3 : 1?', 'Chance causes small deviations, and chance averages out more with more plants. Seed color (8,023) and seed shape (7,324) are the largest samples and the closest to 3.', 'GB 32\u201334', 'Explains why Mendel\u2019s counting and statistics matter.');
C('m6', 'sup', 'Recall', 'List Mendel\u2019s seven characteristics.', 'Flower color, flower position, seed color, seed shape, pod shape, pod color, stem length.', 'GB 22');
C('m6', 'sup', 'Recall', 'Give the dominant (F1) trait for each of the seven characteristics.', 'Purple flowers, axial position, yellow seeds, round seeds, inflated pods, green pods, tall stems.', 'GB 22');
C('m6', 'sup', 'Compare', 'Self-pollination versus cross-pollination?', '<strong>Self</strong>: pollen from anthers to a stigma of the same flower or another flower on the same plant. <strong>Cross</strong>: between flowers of two plants. Peas normally self-pollinate.', 'GB 26\u201327');
C('m6', 'sup', 'Recall', 'Which part makes pollen and which part receives it?', 'The <strong>anthers</strong> make pollen (male); the <strong>stigma</strong> receives it (female).', 'GB 26');
C('m6', 'sup', 'Explain', 'How did Mendel cross a plant with yellow pods and a plant with green pods?', 'He removed the anthers from the green-pod plant, then transferred pollen from the other plant\u2019s anthers to its stigma.', 'GB 23, 29');
C('m6', 'oth', 'Recall', 'Mendel\u2019s timeline in the deck?', 'Entered a monastery in Brno at 21 (1843); entered the University of Vienna in 1851 (science, mathematics, statistics); returned to teach high school and keep a garden plot.', 'GB 17\u201319');
C('m6', 'oth', 'Recall', 'Which species is Mendel remembered for, and how many true-breeding types did he obtain?', '<em>Pisum sativum</em> (garden pea); <strong>14</strong> true-breeding types, one per trait.', 'GB 20, 28');

/* ---------------- M7 ---------------- */
C('m7', 'core', 'Recall', 'What is a gene?', 'The segment of DNA on a chromosome that controls a particular hereditary trait.', 'GB 38');
C('m7', 'core', 'Recall', 'What is an allele?', 'Each of two or more alternative forms of a gene.', 'GB 38');
C('m7', 'core', 'Explain', 'Why do genes occur in pairs?', 'Because <strong>chromosomes occur in pairs</strong> (homologous pairs), a cell carries two copies of each gene.', 'GB 38');
C('m7', 'core', 'Compare', 'Genotype versus phenotype?', '<strong>Genotype</strong>: the alleles inherited from the parents (e.g., <em>pp</em>). <strong>Phenotype</strong>: the organism\u2019s appearance (e.g., white flowers).', 'GB 41\u201342');
C('m7', 'core', 'Compare', 'Homozygous versus heterozygous? Give the three flower-color genotypes.', 'Homozygous: alleles alike (<em>PP</em> dominant, <em>pp</em> recessive). Heterozygous: alleles differ (<em>Pp</em>).', 'GB 44\u201345');
C('m7', 'core', 'Apply', 'A plant is <em>Pp</em>. Give its genotype class and phenotype (P = purple, dominant).', '<strong>Heterozygous</strong>; <strong>purple</strong>.', 'GB 45');
C('m7', 'core', 'Apply', 'Which flower-color genotypes give purple flowers?', '<em>PP</em> and <em>Pp</em>, because the P allele is dominant.', 'GB 41');
C('m7', 'core', 'Explain', 'Why can\u2019t you tell <em>PP</em> from <em>Pp</em> by looking at the plant?', 'Both have the <strong>same phenotype</strong> (purple). The testcross (Module 8) reveals the genotype.', 'GB 41\u201342');
C('m7', 'core', 'Recall', 'What is the convention for writing dominant and recessive alleles?', 'Capital letter for the dominant allele and the matching lowercase letter for the recessive.', 'GB 41');
C('m7', 'sup', 'Recall', 'State the probability formula.', 'Probability = <strong>number of times an event is expected to happen \u00F7 number of times it could happen</strong>.', 'GB 46');
C('m7', 'sup', 'Compute', 'F2 seed color: 6,022 yellow out of 8,023 plants. What is the probability of the dominant trait?', '6,022 \u00F7 8,023 = <strong>0.75</strong>.', 'GB 47\u201348');
C('m7', 'sup', 'Compute', 'F2 seed color: 2,001 green out of 8,023. Probability of the recessive trait? How do the two probabilities relate?', '2,001 \u00F7 8,023 = <strong>0.25</strong>. They add to 1.', 'GB 48');
C('m7', 'oth', 'Recall', 'How is "phenotype" pronounced, and in what forms can probability be written?', 'FEE-noh-TIEP. As a decimal, a percentage or a fraction.', 'GB 42, 46');

/* ---------------- M8 ---------------- */
C('m8', 'core', 'Recall', 'What is a monohybrid cross, and what are its offspring called?', 'A cross tracking <strong>one characteristic</strong>; the offspring are <strong>monohybrids</strong>.', 'GB 49');
C('m8', 'core', 'Recall', 'What is a Punnett square for?', 'Predicting the <strong>probable distribution of inherited traits</strong> in the offspring.', 'GB 50');
C('m8', 'core', 'Apply', 'Cross <em>PP</em> (purple) \u00D7 <em>pp</em> (white). Give the offspring genotypes and phenotypes.', '{{pun:mono:flower:PP:pp}}All <em>Pp</em> (heterozygous); all purple.', 'GB 51\u201352');
C('m8', 'core', 'Apply', 'Cross <em>BB</em> \u00D7 <em>Bb</em> (B = black). What fraction of offspring is homozygous, and what do they look like?', '{{pun:mono:coat:BB:Bb}}Half are <em>BB</em>, half <em>Bb</em>. All are black.', 'GB 53\u201354');
C('m8', 'core', 'Apply', 'Cross <em>Bb</em> \u00D7 <em>Bb</em>. Give genotype and phenotype ratios.', '{{pun:mono:coat:Bb:Bb}}Genotypes 1 <em>BB</em> : 2 <em>Bb</em> : 1 <em>bb</em>; phenotypes <strong>3 black : 1 brown</strong>.', 'GB 55\u201356');
C('m8', 'core', 'Apply', 'Cross <em>Pp</em> \u00D7 <em>pp</em>. What fraction is white?', '{{pun:mono:flower:Pp:pp}}<strong>1/2</strong> white (<em>pp</em>), 1/2 purple (<em>Pp</em>).', 'GB 58', 'A new cross using the same method.');
C('m8', 'core', 'Apply', 'Which parental genotypes can possibly produce a white (<em>pp</em>) offspring?', 'Both parents must carry at least one <em>p</em>: <em>Pp</em> \u00D7 <em>Pp</em>, <em>Pp</em> \u00D7 <em>pp</em> or <em>pp</em> \u00D7 <em>pp</em>.', 'GB 41\u201345');
C('m8', 'core', 'Compute', 'Two heterozygous purple plants (<em>Pp</em> \u00D7 <em>Pp</em>) are crossed. What is the probability of a white offspring?', '1 box of 4 is <em>pp</em>: <strong>1/4 = 0.25</strong>.', 'GB 46, 56');
C('m8', 'core', 'Recall', 'What is a testcross?', 'Crossing an individual of <strong>unknown genotype</strong> with a <strong>homozygous recessive</strong> individual; it can determine the genotype of any individual with the dominant phenotype.', 'GB 58');
C('m8', 'core', 'Apply', 'A black guinea pig is testcrossed with a brown one and one offspring is brown. What is the black parent\u2019s genotype?', '<strong>Heterozygous (<em>Bb</em>)</strong>: even one brown offspring shows it carries <em>b</em>.', 'GB 59');
C('m8', 'core', 'Apply', 'A black guinea pig is testcrossed and all six offspring are black. What can you conclude?', 'It is <strong>probably <em>BB</em></strong>. More offspring would raise confidence; the slide\u2019s clear rule is only that one brown offspring proves <em>Bb</em>.', 'GB 58\u201359');
C('m8', 'core', 'Recall', 'What is a dihybrid cross?', 'A cross in which <strong>two characteristics</strong> are tracked; the offspring are <strong>dihybrids</strong>.', 'GB 60');
C('m8', 'core', 'Recall', 'What four gamete types can an <em>RrYy</em> plant make?', '<strong>RY, Ry, rY, ry</strong>.', 'GB 60, 66');
C('m8', 'core', 'Explain', 'Why does a dihybrid Punnett square have 16 boxes?', 'Each parent makes 4 gamete types (2 alleles for each of 2 genes), and 4 \u00D7 4 = <strong>16</strong>.', 'GB 60, 66');
C('m8', 'core', 'Apply', 'Cross <em>RRYY</em> (round, yellow) \u00D7 <em>rryy</em> (wrinkled, green). Offspring?', '{{pun:di:RRYY:rryy}}All <em>RrYy</em>: heterozygous for both traits, so <strong>all round and yellow</strong>.', 'GB 61\u201364');
C('m8', 'core', 'Apply', 'Cross <em>RrYy</em> \u00D7 <em>RrYy</em>. Give the phenotype ratio.', '{{pun:di:RrYy:RrYy}}<strong>9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green</strong>.', 'GB 65\u201367');
C('m8', 'core', 'Compute', 'In <em>RrYy</em> \u00D7 <em>RrYy</em>, what is the probability of wrinkled, yellow seeds?', '<strong>3/16</strong> (genotypes <em>rrYY</em> and <em>rrYy</em>).', 'GB 67');
C('m8', 'core', 'Explain', 'How does 9 : 3 : 3 : 1 come from two separate 3 : 1 ratios?', 'Round is 3/4 and yellow is 3/4. If the traits assort independently, round and yellow is 3/4 \u00D7 3/4 = 9/16, and the other classes follow the same way.', 'GB 67, 37', 'The product rule is standard probability, beyond the slides.');
C('m8', 'core', 'Apply', 'Cross <em>Rr</em> \u00D7 <em>rr</em> (R = round). Phenotype ratio?', '{{pun:mono:shape:Rr:rr}}<strong>1 round : 1 wrinkled</strong>.', 'GB 58, 63');
C('m8', 'sup', 'Apply', 'Pod color: green (G) is dominant over yellow (g). Cross <em>Gg</em> \u00D7 <em>gg</em>.', '{{pun:mono:pod:Gg:gg}}<strong>1/2 green (<em>Gg</em>) : 1/2 yellow (<em>gg</em>)</strong>.', 'GB 50');
C('m8', 'sup', 'Recall', 'Which genotypes in the dihybrid cross give round, yellow seeds?', '<em>RRYY, RRYy, RrYY, RrYy</em> (9/16 of offspring).', 'GB 67');
C('m8', 'sup', 'Recall', 'Which genotypes give round, green; wrinkled, yellow; and wrinkled, green?', 'Round green: <em>RRyy, Rryy</em> (3/16). Wrinkled yellow: <em>rrYY, rrYy</em> (3/16). Wrinkled green: <em>rryy</em> (1/16).', 'GB 67');
C('m8', 'oth', 'Recall', 'Which organisms and traits did the deck use for its Punnett examples?', 'Pea (flower color, seed shape and color), guinea pig (black/brown coat) and rabbit (black/brown coat).', 'GB 49\u201367');
C('m8', 'oth', 'Recall', 'In a homozygous \u00D7 homozygous dihybrid grid, what do the gametes on each axis look like?', 'The same gamete repeated four times: <em>RY</em> four times for <em>RRYY</em>, <em>ry</em> four times for <em>rryy</em>.', 'GB 62\u201364');
