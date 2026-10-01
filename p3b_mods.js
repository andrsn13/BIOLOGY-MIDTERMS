/* ---------------------------------------------------------------- M5 */
MODS.push({
  id: 'm5', n: 5, title: 'Meiosis, and how it differs from mitosis',
  q: 'How do we make cells with half the DNA, and why?',
  needs: 'Module 2: 2n versus n, homologous pairs. Module 4: the mitosis phases, because meiosis reuses them twice.',
  obj: [
    'Explain why gametes must be haploid and what fertilization restores.',
    'Follow meiosis I and II and say what separates in each.',
    'Say where crossing-over happens and give the five differences between mitosis and meiosis.'
  ],
  core: [
    {
      h: 'Why meiosis exists: halve the number so fertilization can restore it', s: 'CR 38\u201339, 41\u201342',
      b: `<p>More complex organisms, including humans, produce specialized sex cells called <strong>gametes</strong>, which carry half of the genetic information and then combine to form new organisms. The process that makes gametes is <strong>meiosis</strong>: a nuclear division that reduces the number of chromosomes in new cells to half the number in the original cell. It is required to produce egg and sperm cells for sexual reproduction.</p>
<p>At conception an egg (23) and a sperm (23) combine to form a <strong>zygote</strong> (46 chromosomes, or 23 pairs), the first cell of a new individual. Halving the number in gametes ensures zygotes have the same chromosome number from one generation to the next, which is critical for stable sexual reproduction.</p>
{{fig:outcomes}}
${think('What would happen to chromosome number each generation if gametes were diploid?', 'It would double every generation: 46 would become 92, then 184. Halving in meiosis is what keeps the number constant. (Arithmetic from the slide\u2019s statement, not a quote.)')}`
    },
    {
      h: 'The arithmetic: 2 divisions, 1 replication, 4 haploid cells', s: 'CR 43\u201347, 49',
      b: `<p>In humans, <strong>one diploid cell (46 chromosomes) undergoes two cycles of cell division but only one round of DNA replication</strong>. The result is <strong>four haploid cells</strong> (gametes), each with 23 chromosomes.</p>
{{fig:meiosis}}
${tb(['Stage', 'What happens (slide wording)'], [
        ['<strong>Interphase</strong>', 'DNA replicates in preparation for meiosis; each chromosome becomes 2 identical chromatids'],
        ['<strong>Prophase I</strong>', 'Chromosomes condense into visible X-shaped structures; homologous chromosomes pair up'],
        ['<strong>Metaphase I</strong>', 'Paired chromosomes line up along the middle of the cell'],
        ['<strong>Anaphase I</strong>', 'The pairs separate and move to opposing poles; either one of each pair can go to either pole'],
        ['<strong>Telophase I</strong>', 'Nuclear membranes reform; the cell divides, giving 2 daughter cells with 23 chromosomes each'],
        ['<strong>Prophase II</strong>', 'There are now 2 cells; DNA does not replicate again'],
        ['<strong>Metaphase II</strong>', 'Individual chromosomes line up along the middle'],
        ['<strong>Anaphase II</strong>', 'The chromosome copies (chromatids) separate and move to opposing poles'],
        ['<strong>Telophase II</strong>', 'Nuclear membranes reform; 4 new haploid daughter cells']
      ])}
<p><strong>The one-line summary:</strong> meiosis I separates <em>homologous pairs</em> (this is the halving); meiosis II separates <em>sister chromatids</em> and resembles mitosis. Check it with the ledger:</p>
{{fig:ledgerE}}`
    },
    {
      h: 'Crossing-over: the exchange that happens in prophase I', s: 'CR 40, 50\u201351, GB 4\u20135',
      b: `<p>The deck's diagram shows two homologous chromosomes twisting around each other and swapping segments. This <strong>crossing-over</strong> (also called <strong>recombination</strong>; the diagram marks the crossing point as a <strong>chiasma</strong>) happens in <strong>prophase I</strong>, during meiosis 1. It is not part of mitosis.</p>
<p>The result: mitosis produces two genetically identical daughter cells, whereas meiosis produces cells that are <strong>genetically unique</strong> from the parent and contain only half as much DNA.</p>`
    },
    {
      h: 'Mitosis versus meiosis: the five differences', s: 'CR 50, 52',
      b: `${tb(['', 'Mitosis', 'Meiosis'], [
        ['Where (slide wording)', 'Occurs in all organisms, except viruses', 'Occurs in animals, plants and fungi'],
        ['Recombination', 'No recombination occurs', 'Recombination occurs in prophase I'],
        ['Divisions and stages', 'One cell division (total of 4 stages)', 'Two cell divisions (total of 8 stages)'],
        ['Daughter cells', 'Diploid', 'Haploid'],
        ['Genetic makeup', 'Genetically identical', 'Genetically different'],
        ['Cells produced', '2', '4']
      ])}
${note('warn', 'Watch the first row.', 'The deck itself says prokaryotes divide by binary fission, and its analogy pairs eukaryotes with mitosis. So "all organisms except viruses" is loose wording; mitosis is a eukaryote process. On a slide-based test, give the slide\u2019s wording; in your own understanding, use "eukaryotes".')}`
    }
  ],
  sup: [
    {
      h: 'What meiosis makes in males and in females', s: 'CR 47',
      b: `<p>In males, <strong>4 sperm cells</strong> are produced. In females, <strong>1 egg cell and 3 polar bodies</strong> are produced. Polar bodies do not function as sex cells.</p>`
    },
    {
      h: 'Two sources of difference between gametes', s: 'CR 40, 44, 50',
      b: `<ul><li><strong>Crossing-over</strong> in prophase I swaps segments between homologous chromosomes.</li>
<li><strong>Random pole assignment</strong> in anaphase I: the slide notes that either one of each pair can go to either pole.</li></ul>
<p>The second is the seed of Mendel's independent assortment, which you will meet in Module 6.</p>`
    }
  ],
  oth: [
    { t: 'Labels on the mitosis-versus-meiosis diagram', d: 'Duplicated chromosomes; microtubules; chromosomes line up on equator; centrosome; chiasma (crossing over); microtubules pull apart homologous chromosomes; daughter cells of mitosis (post cell division); daughter cells of meiosis I; daughter cells of meiosis II.', s: 'CR 51' },
    { t: 'Crossing-over diagram', d: 'Two pairs of chromatids marked with gene positions X, Y, Z (and x, y, z) exchange segments, producing four different chromosomes. Credit line on the slide: University of Waikato.', s: 'CR 40' },
    { t: 'Meiosis stage drawings', d: 'Early, middle and late prophase I, metaphase I, anaphase I, telophase I, prophase II, metaphase II, anaphase II, telophase II and the products of meiosis.', s: 'CR 48' },
    { t: 'Deck summary quote', d: 'One diploid cell, two cycles of cell division, one round of DNA replication, four haploid daughter cells known as gametes.', s: 'CR 49' }
  ]
});

/* ---------------------------------------------------------------- M6 */
MODS.push({
  id: 'm6', n: 6, title: 'Mendel and the logic of inheritance',
  q: 'What pattern did Mendel see, and what does it say?',
  needs: 'Module 2: homologous pairs. Module 5: pairs separate in anaphase I, either member to either pole.',
  obj: [
    'Describe how Mendel designed his pea experiments (P, F1, F2, true-breeding).',
    'Read the 3 : 1 pattern in his data and explain dominant and recessive.',
    'State the three laws and link segregation and independent assortment to meiosis.'
  ],
  core: [
    {
      h: 'Mendel\u2019s design: pure lines, controlled crosses, counted offspring', s: 'GB 16, 21, 23, 26\u201331',
      b: `<p><strong>Genetics</strong> is the field of biology devoted to understanding how characteristics are transmitted from parents to offspring. It was founded with the work of <strong>Gregor Mendel</strong>, the Father of Genetics, who worked with garden peas (<em>Pisum sativum</em>).</p>
<ul><li>He observed <strong>seven characteristics</strong>. A <strong>trait</strong> is a genetically determined variant of a characteristic, such as purple flower color. Each characteristic has two traits, giving <strong>14 traits</strong>.</li>
<li>Peas normally self-pollinate, so Mendel controlled the breeding by moving pollen from the anthers of one plant to the stigma of another.</li>
<li>He began with <strong>true-breeding</strong> (pure) plants, which always produce offspring with that trait when they self-pollinate. He obtained 14 true-breeding types.</li>
<li>True-breeding parents are the <strong>P generation</strong>. Their offspring are the <strong>F1</strong> (first filial) generation. Letting F1 self-pollinate gives the <strong>F2</strong> generation.</li>
<li>He recorded the number of each type of offspring, and his statistics training helped him make sense of the counts.</li></ul>
{{fig:mendelpath}}
${think('Why start with true-breeding plants?', 'A true-breeding plant gives only its own trait, so any new pattern in the next generation must come from the cross itself and not from hidden variation in the parents. (An inference from the definition.)')}`
    },
    {
      h: 'The pattern: one trait vanishes in F1 and returns in F2 at about 3 : 1', s: 'GB 30\u201331, 32\u201336',
      b: `<p>In every cross the F1 plants all showed <strong>one</strong> of the two parental traits. The other trait disappeared, then <strong>reappeared in about one quarter of the F2</strong>. Mendel concluded that one factor in a pair may prevent the other from having an effect. The trait that showed in F1 he called <strong>dominant</strong> because it masked the other; the trait that was hidden in F1 but returned in F2 he called <strong>recessive</strong>.</p>
{{fig:mendelchart}}
${think('White flowers vanished in F1 and came back in F2. What must be true of the F1 plants?', 'They still carried a hidden factor for white but did not show it. In modern letters, the F1 plants are Pp: heterozygous.')}`
    },
    {
      h: 'Mendel\u2019s three laws, and the meiosis event behind each', s: 'GB 37',
      b: `${tb(['Law', 'Slide statement', 'Plainer version', 'Where meiosis does it (a bridge)'], [
        ['<strong>Segregation</strong>', 'Offspring acquire one hereditary factor from each parent', 'The two factors for a trait separate when gametes form, so each gamete carries one', 'Homologous chromosomes separate in anaphase I'],
        ['<strong>Independent assortment</strong>', 'Different traits have an equal opportunity of occurring together', 'Factors for different traits are shuffled into gametes independently', 'Each pair lines up and separates on its own; either member can go to either pole'],
        ['<strong>Dominance</strong>', 'Offspring inherit the dominant trait, and the recessive trait only if both recessive factors are inherited', 'A dominant factor masks the recessive one when both are present', 'No meiosis event; this is about which trait shows']
      ])}
${note('note', 'About the bridge column.', 'It is our synthesis of the two decks, not on the slides: the chromosome behavior in meiosis explains Mendel\u2019s factors (the chromosome theory of inheritance, early 1900s). Independent assortment holds for genes on different chromosomes; genes close together on one chromosome tend to travel together, which is beyond these slides.')}`
    }
  ],
  sup: [
    {
      h: 'The seven characteristics and the F1 result of each cross', s: 'GB 22',
      b: `${tb(['Characteristic', 'Parent traits (P)', 'F1 result'], [
        ['Flower color', 'Purple \u00D7 white', 'Purple'],
        ['Flower position', 'Axial \u00D7 terminal', 'Axial'],
        ['Seed color', 'Yellow \u00D7 green', 'Yellow'],
        ['Seed shape', 'Round \u00D7 wrinkled', 'Round'],
        ['Pod shape', 'Inflated \u00D7 constricted', 'Inflated'],
        ['Pod color', 'Green \u00D7 yellow', 'Green'],
        ['Stem length', 'Tall \u00D7 dwarf (short)', 'Tall']
      ])}<p>The dominant trait in each row is the F1 result. Seed shape and seed color return in Module 8.</p>`
    },
    {
      h: 'Pollination: how Mendel controlled the crosses', s: 'GB 23, 26\u201329',
      b: `<ul><li><strong>Pollination</strong> occurs when pollen grains made in the male parts of a flower (the <strong>anthers</strong>) are transferred to the female part (the <strong>stigma</strong>).</li>
<li><strong>Self-pollination</strong>: pollen goes from the anthers to the stigma of the same flower, or another flower on the same plant.</li>
<li><strong>Cross-pollination</strong>: between flowers of two plants.</li>
<li>Pea plants normally reproduce by self-pollination.</li>
<li>To cross a yellow-pod plant with a green-pod plant, Mendel first removed the anthers from the plant that produced green pods, then moved pollen between the plants.</li></ul>`
    },
    {
      h: 'What Mendel noticed before the experiments', s: 'GB 24\u201325',
      b: `<p>Purple-flowering plants grew from most seeds of purple-flowering plants, but white-flowering plants grew from some of them. Likewise tall plants grew from most seeds of tall plants, but short plants grew from some. Hidden traits were reappearing, which pushed him to count carefully.</p>`
    }
  ],
  oth: [
    { t: 'Mendel\u2019s life, in the deck\u2019s order', d: 'At 21 (1843) he entered a monastery in Brno, Austria (the slide spells it "Brnn"). The task he was given left him time to think and to observe plant growth. In 1851 he entered the University of Vienna to study science and mathematics, including the then-new field of statistics. He returned to the monastery, taught in a high school and kept a garden plot.', s: 'GB 17\u201319' },
    { t: 'Heredity', d: 'The transmission of characteristics from parents to offspring.', s: 'GB 19' },
    { t: 'What he is remembered for', d: 'His experiments with Pisum sativum, the garden pea.', s: 'GB 20' },
    { t: 'True-breeding example', d: 'Pea plants true-breeding for yellow pods self-pollinate to produce offspring with yellow pods.', s: 'GB 28' },
    { t: 'Introduction photos', d: 'Uncaptioned images (lab DNA work, a microscopic organism, an albino alligator, a fruit fly). The fruit fly reappears in the chromosome table (8).', s: 'GB 14\u201315' },
    { t: 'Slide slip to ignore', d: 'The trait definition uses "yellow flower color" as its example; in the seven-characteristic table, flower color is purple or white and yellow belongs to seeds and pods.', s: 'GB 21' },
    { t: 'Break slide', d: 'A 15-minute break sits after Mendel and before genetic crosses. Spacing study sessions this way helps; see Reference, Evidence.', s: 'GB 39' }
  ]
});

/* ---------------------------------------------------------------- M7 */
MODS.push({
  id: 'm7', n: 7, title: 'Genes, alleles, genotype and phenotype',
  q: 'What do the symbols in a cross actually mean?',
  needs: 'Module 2: homologous pairs. Module 6: dominant, recessive and Mendel\u2019s paired "factors".',
  obj: [
    'Define gene and allele, and explain why genes come in pairs.',
    'Use genotype, phenotype, homozygous and heterozygous correctly with P and p.',
    'Turn counts into probabilities with the slide\u2019s formula.'
  ],
  core: [
    {
      h: 'Gene and allele: where Mendel\u2019s "factors" live', s: 'GB 38',
      b: `<p><strong>Molecular genetics</strong> is the study of the structure and function of chromosomes and genes. A chromosome is a threadlike structure made up of DNA. A <strong>gene</strong> is the segment of DNA on a chromosome that controls a particular hereditary trait. Because chromosomes occur in pairs, <strong>genes also occur in pairs</strong>. Each of two or more alternative forms of a gene is called an <strong>allele</strong>.</p>
{{fig:locus}}
${note('link', 'Connect it back.', 'Mendel\u2019s "factors" are alleles. You get two because you have a homologous pair (Module 2), and each gamete gets one because the pair separates in meiosis (Module 5).')}`
    },
    {
      h: 'Genotype and phenotype: what is inherited and what shows', s: 'GB 41\u201345',
      b: `<ul><li><strong>Genotype</strong>: the alleles an organism inherits from its parents. A white pea plant is <em>pp</em>; a purple one is <em>PP</em> or <em>Pp</em>.</li>
<li><strong>Phenotype</strong> (FEE-noh-TIEP): the organism's appearance. <em>PP</em> and <em>Pp</em> both give purple flowers; <em>pp</em> gives white.</li>
<li><strong>Homozygous</strong>: both alleles of the pair are alike. Homozygous dominant is <em>PP</em>; homozygous recessive is <em>pp</em>.</li>
<li><strong>Heterozygous</strong>: the two alleles differ, <em>Pp</em>.</li></ul>
${tb(['Genotype', 'Class', 'Phenotype'], [
        ['<em>PP</em>', 'Homozygous dominant', 'Purple'],
        ['<em>Pp</em>', 'Heterozygous', 'Purple'],
        ['<em>pp</em>', 'Homozygous recessive', 'White']
      ])}
<p>Convention: the dominant allele gets the capital letter and the recessive allele the matching lowercase letter.</p>
${note('warn', 'The key insight.', '<em>PP</em> and <em>Pp</em> look the same. You cannot read a genotype from the phenotype of a dominant-looking plant. That is exactly the problem the testcross in Module 8 solves.')}`
    }
  ],
  sup: [
    {
      h: 'Probability: from counts to likelihoods', s: 'GB 46\u201348',
      b: `<p><strong>Probability</strong> is the likelihood that a specific event will occur. It can be a decimal, a percentage or a fraction:</p>
<p style="text-align:center;font-family:var(--serif)"><strong>Probability = number of times an event is expected to happen \u00F7 number of times the event could happen</strong></p>
<p>Worked example from Mendel's seed color data: yellow (dominant) appeared 6,022 times and green (recessive) 2,001 times, out of 8,023 plants.</p>
${tb(['Event', 'Calculation', 'Probability'], [
        ['Dominant (yellow) trait appears', '6,022 \u00F7 8,023', '0.75 (75%, or 3/4)'],
        ['Recessive (green) trait appears', '2,001 \u00F7 8,023', '0.25 (25%, or 1/4)']
      ])}
<p>In Module 8 each box of a Punnett square is one equally likely outcome, so the same formula gives the probabilities directly.</p>`
    }
  ],
  oth: [
    { t: 'Pronouncing phenotype', d: 'FEE-noh-TIEP.', s: 'GB 42' },
    { t: 'Photo example', d: 'Two pea plants side by side: the left has white flowers (genotype pp); the right has purple flowers (genotype Pp or PP).', s: 'GB 43' },
    { t: 'Probability forms', d: 'A probability may be written as a decimal, a percentage or a fraction.', s: 'GB 46' }
  ]
});

/* ---------------------------------------------------------------- M8 */
MODS.push({
  id: 'm8', n: 8, title: 'Predicting offspring with Punnett squares',
  q: 'How do we predict the offspring of a cross?',
  needs: 'Module 5: each gamete gets one allele. Module 7: genotype, phenotype, homozygous, heterozygous, probability.',
  obj: [
    'Fill in a Punnett square for monohybrid and dihybrid crosses.',
    'Predict genotype and phenotype ratios and probabilities.',
    'Use a testcross to find an unknown genotype.'
  ],
  core: [
    {
      h: 'Monohybrid crosses and the Punnett square method', s: 'GB 49\u201350',
      b: `<p>A cross that tracks <strong>one characteristic</strong> is a <strong>monohybrid cross</strong>, and its offspring are <strong>monohybrids</strong>. A true-breeding purple plant crossed with a true-breeding white plant (<em>PP</em> \u00D7 <em>pp</em>) is an example. A <strong>Punnett square</strong> helps biologists predict the probable distribution of inherited traits in the offspring.</p>
<ol><li>Write each parent's genotype.</li>
<li>Split each parent into gametes: <strong>one allele per gamete</strong> (this is segregation). Put one parent's gametes across the top and the other's down the side.</li>
<li>Fill each box with the allele from its column plus the allele from its row.</li>
<li>Count genotypes. Then use dominance to turn them into phenotypes.</li>
<li>Probability of an outcome = boxes with that outcome \u00F7 total boxes.</li></ol>
<p>Try it. The presets reproduce every example in the deck; change the parents and watch the ratios.</p>
{{fig:lab}}`
    },
    {
      h: 'Three monohybrid patterns to recognise on sight', s: 'GB 51\u201356',
      b: `${tb(['Cross (slide example)', 'Offspring genotypes', 'Phenotypes'], [
        ['Homozygous \u00D7 homozygous<br><em>PP</em> \u00D7 <em>pp</em> (pea flowers)', 'All <em>Pp</em> (all heterozygous)', 'All purple'],
        ['Homozygous \u00D7 heterozygous<br><em>BB</em> \u00D7 <em>Bb</em> (guinea pig coat)', '1 <em>BB</em> : 1 <em>Bb</em> (half homozygous)', 'All black'],
        ['Heterozygous \u00D7 heterozygous<br><em>Bb</em> \u00D7 <em>Bb</em> (rabbit coat)', '25% <em>BB</em>, 50% <em>Bb</em>, 25% <em>bb</em> (1 : 2 : 1)', '75% black, 25% brown (3 : 1)']
      ])}
<p>The third row is Mendel's F2: cross two F1 heterozygotes and you get the <strong>3 : 1</strong> phenotype ratio he counted, hiding a <strong>1 : 2 : 1</strong> genotype ratio.</p>
${think('Why does the 3 : 1 phenotype ratio hide a 1 : 2 : 1 genotype ratio?', 'Both BB and Bb look black, so those two genotype classes (1 + 2 = 3 boxes) merge into one phenotype, leaving bb (1 box) as the only brown.')}`
    },
    {
      h: 'The testcross: reveal an unknown genotype', s: 'GB 57\u201359',
      b: `<p>You cannot tell <em>PP</em> from <em>Pp</em> by looking (Module 7). A <strong>testcross</strong> crosses an individual of unknown genotype with a <strong>homozygous recessive</strong> individual. It can determine the genotype of any individual whose phenotype expresses the dominant trait.</p>
{{pun:mono:coat:BB:bb}}{{pun:mono:coat:Bb:bb}}
<p><strong>Reading it:</strong> if a black guinea pig is crossed with a brown one and even one offspring is brown, the black parent must be heterozygous (<em>Bb</em>). If all offspring are black, the parent is probably <em>BB</em>; the more offspring you count, the more confident you can be (a standard extension of the slide's logic).</p>`
    },
    {
      h: 'Dihybrid crosses: two characteristics at once, 9 : 3 : 3 : 1', s: 'GB 60\u201367',
      b: `<p>A <strong>dihybrid cross</strong> tracks two characteristics, and the offspring are <strong>dihybrids</strong>. Here seed texture and seed color are tracked, with <strong>round (R) dominant over wrinkled (r)</strong> and <strong>yellow (Y) dominant over green (y)</strong>. You must consider how four alleles from each parent can combine. A plant <em>RrYy</em> makes four kinds of gamete: <strong>RY, Ry, rY, ry</strong>.</p>
<p><strong>Example 1: homozygous \u00D7 homozygous</strong>, <em>RRYY</em> (round, yellow) \u00D7 <em>rryy</em> (wrinkled, green).</p>
{{pun:di:RRYY:rryy}}
<p>Every offspring is <em>RrYy</em>: heterozygous for both traits, so all have round, yellow seeds.</p>
<p><strong>Example 2: heterozygous \u00D7 heterozygous</strong>, <em>RrYy</em> \u00D7 <em>RrYy</em>.</p>
{{pun:di:RrYy:RrYy}}
${tb(['Phenotype', 'Fraction', 'Genotypes in the 16 boxes'], [
        ['Round, yellow', '9/16', 'RRYY, RRYy, RrYY, RrYy'],
        ['Round, green', '3/16', 'RRyy, Rryy'],
        ['Wrinkled, yellow', '3/16', 'rrYY, rrYy'],
        ['Wrinkled, green', '1/16', 'rryy']
      ])}
${note('link', 'A check that ties to Mendel.', 'Look at one trait at a time: round is 12/16 = 3/4 and yellow is 12/16 = 3/4, each the familiar 3 : 1. Multiply: 3/4 \u00D7 3/4 = 9/16. The traits behave independently, which is Mendel\u2019s independent assortment (the product step is standard probability, not on the slides).')}`
    }
  ],
  sup: [
    {
      h: 'The deck\u2019s drawn examples, side by side', s: 'GB 50\u201356',
      b: `<p>Every Punnett square from the monohybrid slides, regenerated so you can compare patterns.</p>
<h4>Pod color demo: <em>Gg</em> \u00D7 <em>gg</em> (green G dominant, yellow g)</h4>{{pun:mono:pod:Gg:gg}}
<h4>Example 1: <em>PP</em> \u00D7 <em>pp</em></h4>{{pun:mono:flower:PP:pp}}
<h4>Example 2: <em>BB</em> \u00D7 <em>Bb</em></h4>{{pun:mono:coat:BB:Bb}}
<h4>Example 3: <em>Bb</em> \u00D7 <em>Bb</em></h4>{{pun:mono:coat:Bb:Bb}}`
    }
  ],
  oth: [
    { t: 'Organisms used for the examples', d: 'Pea (flower color P/p; seed shape R/r; seed color Y/y), guinea pig (coat B/b: black or brown) and rabbit (coat B/b: black or brown).', s: 'GB 49\u201367' },
    { t: 'Dihybrid grid labels', d: 'The 4 \u00D7 4 grids are labelled with the gametes RY, Ry, rY, ry on both axes; the homozygous-parent grids repeat RY or ry four times.', s: 'GB 62\u201366' },
    { t: 'Example 2 note', d: 'Crossing a homozygous black guinea pig with a heterozygous one gives all black offspring, half of them homozygous.', s: 'GB 54' },
    { t: 'Testcross squares', d: 'Two squares: the unknown parent as BB (all offspring Bb) and as Bb (half Bb, half bb), each crossed with bb.', s: 'GB 57' }
  ]
});
