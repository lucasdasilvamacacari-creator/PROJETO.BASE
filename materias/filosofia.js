window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "filosofia",
      name: "Filosofia",
      emoji: "🏺",
      contents: [
        {
          id: "aristoteles",
          title: "Aristóteles",
          sections: [
            {
              heading: "1. Aristóteles",
              body: `Livros:
Metafísica
Política
Ética a Nicômaco

Foi aluno de Platão na Academia.
Porém, criou sua própria escola, chamada Liceu.
Desenvolve o método peripatético.

Aristóteles é um dos mais influentes pensadores da história da filosofia.
Apresenta um pensamento muito vasto, que abrange, por exemplo:
Metafísica
Política
F�sica
Estética
Ética

"Os homens têm, por natureza, o desejo de conhecer."
→ As sensações são fundamentais nesse processo (ex.: visão).

A ideia
A ideia (conceito da coisa): aquilo que está contido na própria coisa, sendo anterior a ela.`,
            },
            {
              heading: "2. Oposição em relação ao dualismo de Platão — Hilemorfismo",
              body: `O ser consiste em:
Matéria (hylé) → aquilo que constitui o ser.
Forma (eidos) → como se organiza a matéria.`,
              visual: `
<div class="flex flex-col items-center gap-2 max-w-[240px] mx-auto text-center">
  <div class="w-full rounded-t-xl bg-cream border border-sand px-4 py-3">
    <p class="text-[10px] uppercase tracking-wide text-bark/60">Matéria (hylé)</p>
    <p class="text-sm text-bark font-medium">Aquilo que constitui o ser</p>
  </div>
  <span class="text-ochre text-lg leading-none">＋</span>
  <div class="w-full rounded-b-xl bg-espresso text-cream px-4 py-3">
    <p class="text-[10px] uppercase tracking-wide opacity-70">Forma (eidos)</p>
    <p class="text-sm font-medium">Como se organiza a matéria</p>
  </div>
</div>`,
            },
            {
              heading: "3. Consequências aristotélicas",
              body: `O ser se manifesta de diferentes modos.

Essência e acidente

Essência:
Característica essencial do ser.
Necessário.
Identifica o ser.

Acidente:
Característica circunstancial (ocasional) do ser.
Não é necessário.

Ato
→ Aquilo que o ser está no momento.

Potência
→ Possibilidades de realização do ser.

Exemplo:
Semente → ato: semente | potência: árvore
Árvore → ato: árvore | potência: fruto`,
              visual: `
<div class="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">Semente<br/><span class="text-[10px] text-bark/60">ato: semente · potência: árvore</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">Árvore<br/><span class="text-[10px] text-bark/60">ato: árvore · potência: fruto</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-espresso text-cream px-3 py-2 font-medium text-center">Fruto</div>
</div>`,
            },
            {
              heading: "4. As quatro causas",
              body: `A ciência é o conhecimento das causas.
→ Teoria das 4 causas.

Causa formal → O que é X?
Causa material → Do que é feito X?
Causa eficiente → Quem fez X?
Causa final → Para que X?`,
              visual: `
<div class="grid grid-cols-2 gap-2.5">
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Causa Formal</p>
    <p class="text-xs text-bark/70">O que é X?</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Causa Material</p>
    <p class="text-xs text-bark/70">Do que é feito X?</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Causa Eficiente</p>
    <p class="text-xs text-bark/70">Quem fez X?</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Causa Final</p>
    <p class="text-xs text-bark/70">Para que X?</p>
  </div>
</div>`,
            },
          ],
          quiz: [
            { q: "Qual escola Aristóteles frequentou como aluno?", options: ["A Academia de Platão", "O Liceu", "O Museu de Alexandria", "A Escola de Atenas"], correct: 0 },
            { q: "Qual escola Aristóteles fundou?", options: ["O Liceu", "A Academia", "O Jardim", "O Pórtico"], correct: 0 },
            { q: "Qual método Aristóteles desenvolveu?", options: ["O método peripatético", "O método socrático apenas", "O método dialético platônico", "O método cartesiano"], correct: 0 },
            { q: "Segundo Aristóteles, os homens têm por natureza o desejo de:", options: ["Conhecer", "Governar", "Guerrear", "Acumular riquezas"], correct: 0 },
            { q: "Para Aristóteles, o que é fundamental no processo de conhecimento, segundo o exemplo dado (visão)?", options: ["As sensações", "A intuição divina", "A memória apenas", "O sonho"], correct: 0 },
            { q: "O que é o Hilemorfismo de Aristóteles?", options: ["A teoria de que o ser é composto por matéria (hylé) e forma (eidos)", "A teoria de que existem dois mundos separados", "A negação da existência da matéria", "A ideia de que só a forma existe"], correct: 0 },
            { q: "Na filosofia aristotélica, o que é a 'essência' de um ser?", options: ["A característica necessária que identifica o ser", "Uma característica ocasional e dispensável", "Algo que muda a cada momento", "O mesmo que acidente"], correct: 0 },
            { q: "O que é o 'acidente', em oposição à essência?", options: ["Uma característica circunstancial e não necessária do ser", "A característica que define o ser", "A matéria do ser", "A forma do ser"], correct: 0 },
            { q: "Na relação ato/potência, o que representa o 'ato'?", options: ["Aquilo que o ser é no momento", "As possibilidades futuras do ser", "A matéria bruta", "A causa final"], correct: 0 },
            { q: "No exemplo da semente e da árvore, a árvore representa a potência de quê?", options: ["Do fruto", "Da própria semente", "Da terra", "Da raiz"], correct: 0 },
            { q: "Segundo a Teoria das quatro causas, a causa material responde a qual pergunta?", options: ["Do que é feito X?", "Quem fez X?", "Para que X?", "O que é X?"], correct: 0 },
          ],
        },
        {
          id: "filosofia-helenistica",
          title: "Filosofia Helenística",
          sections: [
            {
              heading: "Período",
              body: `O período helenístico é caracterizado pela expansão da dominação da Macedônia.

→ Essa dominação promoveu transformações no âmbito social e cultural da Grécia:

• Perda de autonomia das pólis
• Fusão de culturas: grega + oriental`,
            },
            {
              heading: "Ética e vida privada",
              body: `A partir da filosofia helenística, a filosofia desloca suas reflexões, de modo geral, para a ética e a vida privada.

→ Aqui, a filosofia se coloca como uma espécie de "medicina da alma", em busca do "bem viver" (felicidade).

Palavra importante:
• Ataraxia → imperturbabilidade da alma`,
              visual: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">

<rect width="640" height="330" rx="12" fill="#F4EEE1"/>
<defs><marker id="fa1" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#3E2F20"/></marker></defs>
<rect x="200" y="14" width="240" height="44" rx="10" fill="#A8763E" stroke="#5C4630" stroke-width="1.5"/><text x="320" y="41" text-anchor="middle" font-size="13" font-weight="700" fill="#F4EEE1">Dominação da Macedônia</text>
<line x1="260" y1="58" x2="150" y2="92" stroke="#3E2F20" stroke-width="2" marker-end="url(#fa1)"/>
<line x1="380" y1="58" x2="490" y2="92" stroke="#3E2F20" stroke-width="2" marker-end="url(#fa1)"/>
<rect x="30" y="94" width="240" height="52" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="150" y="116" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Perda de autonomia</text><text x="150" y="134" text-anchor="middle" font-size="11" fill="#5C4630">das pólis</text>
<rect x="370" y="94" width="240" height="52" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="490" y="116" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Fusão de culturas</text><text x="490" y="134" text-anchor="middle" font-size="11" fill="#5C4630">grega + oriental</text>
<line x1="150" y1="146" x2="290" y2="176" stroke="#3E2F20" stroke-width="2" marker-end="url(#fa1)"/>
<line x1="490" y1="146" x2="350" y2="176" stroke="#3E2F20" stroke-width="2" marker-end="url(#fa1)"/>
<rect x="170" y="178" width="300" height="52" rx="10" fill="#5C4630" stroke="#3E2F20" stroke-width="1.5"/><text x="320" y="200" text-anchor="middle" font-size="13" font-weight="700" fill="#F4EEE1">Filosofia helenística</text><text x="320" y="218" text-anchor="middle" font-size="11" fill="#F4EEE1">ética e vida privada · medicina da alma</text>
<line x1="250" y1="230" x2="150" y2="258" stroke="#3E2F20" stroke-width="2" marker-end="url(#fa1)"/>
<line x1="390" y1="230" x2="490" y2="258" stroke="#3E2F20" stroke-width="2" marker-end="url(#fa1)"/>
<rect x="30" y="260" width="240" height="56" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="150" y="282" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">CINISMO</text><text x="150" y="300" text-anchor="middle" font-size="11" fill="#5C4630">Diógenes · vida simples</text>
<rect x="370" y="260" width="240" height="56" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="490" y="282" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">PIRRONISMO (CETICISMO)</text><text x="490" y="300" text-anchor="middle" font-size="11" fill="#5C4630">Pirro · époché</text>

</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Do contexto histórico às duas correntes vistas: tudo busca o bem viver e a ataraxia.</p>`,
            },
            {
              heading: "Cinismo",
              body: `O Cinismo tem um significado diferente do atual.

• Representante: Diógenes de Sinope
• Cinismo → "viver como um cão"
• Desapego dos bens materiais e das convenções sociais → vida simples`,
            },
            {
              heading: "Pirronismo (Ceticismo)",
              body: `• Pirro → vida
• Atitude (postura) cética → questionamento contínuo em relação a critérios absolutos de verdade

→ Époché → suspender os juízos

• "Tudo é incerto"`,
            },
          ],
          quiz: [
            { q: "O período helenístico é caracterizado pela expansão da dominação de qual povo?", options: ["Romanos","Macedônios","Persas","Egípcios"], correct: 1 },
            { q: "Qual foi uma das transformações sociais causadas pela dominação macedônica na Grécia?", options: ["Fortalecimento da autonomia das pólis","Perda de autonomia das pólis","Fim de toda atividade filosófica","Abolição da cultura grega"], correct: 1 },
            { q: "A fusão de culturas típica do período helenístico foi entre:", options: ["Grega e romana","Grega e oriental","Egípcia e romana","Persa e fenícia"], correct: 1 },
            { q: "A partir da filosofia helenística, as reflexões se deslocam, de modo geral, para:", options: ["A cosmologia e a origem do universo","A ética e a vida privada","A política das pólis","A matemática pura"], correct: 1 },
            { q: "Nessa fase, a filosofia se coloca como uma espécie de:", options: ["Ciência da natureza","Medicina da alma","Arte da guerra","Técnica de governo"], correct: 1 },
            { q: "A filosofia helenística busca o \"bem viver\", ou seja:", options: ["O poder político","A riqueza material","A felicidade","A fama"], correct: 2 },
            { q: "O que significa ataraxia?", options: ["Imperturbabilidade da alma","Busca de prazeres materiais","Dúvida absoluta","Obediência às leis"], correct: 0 },
            { q: "Qual filósofo é associado ao Cinismo?", options: ["Pirro","Diógenes de Sinope","Aristóteles","Platão"], correct: 1 },
            { q: "O Cinismo helenístico, ao contrário do sentido atual da palavra, defendia:", options: ["Mentira e desprezo pelos outros","Desapego dos bens materiais e das convenções sociais, com vida simples","Acúmulo de riquezas","Participação intensa na política"], correct: 1 },
            { q: "Qual escola helenística tem Pirro como referência e adota uma atitude de questionamento contínuo dos critérios absolutos de verdade?", options: ["Cinismo","Pirronismo (Ceticismo)","Platonismo","Aristotelismo"], correct: 1 },
            { q: "O que significa époché no Ceticismo?", options: ["Afirmar a verdade absoluta","Suspender os juízos","Viver como um cão","Buscar o prazer imediato"], correct: 1 },
          ],
        },
      ],
    },
);
