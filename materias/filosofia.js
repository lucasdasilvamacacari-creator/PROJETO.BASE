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
            { q: "Qual escola Aristóteles frequentou como aluno?", options: ["A Academia de Platão","O Liceu","O Museu de Alexandria","A Escola de Atenas"], correct: 0 },
            { q: "Qual escola Aristóteles fundou?", options: ["O Liceu","A Academia","O Jardim","O Pórtico"], correct: 0 },
            { q: "Qual método Aristóteles desenvolveu?", options: ["O método peripatético","O método socrático apenas","O método dialético platônico","O método cartesiano"], correct: 0 },
            { q: "Segundo Aristóteles, os homens têm por natureza o desejo de:", options: ["Conhecer","Governar","Guerrear","Acumular riquezas"], correct: 0 },
            { q: "Para Aristóteles, o que é fundamental no processo de conhecimento, segundo o exemplo dado (visão)?", options: ["As sensações","A intuição divina","A memória apenas","O sonho"], correct: 0 },
            { q: "O que é o Hilemorfismo de Aristóteles?", options: ["A teoria de que o ser é composto por matéria (hylé) e forma (eidos)","A teoria de que existem dois mundos separados","A negação da existência da matéria","A ideia de que só a forma existe"], correct: 0 },
            { q: "Na filosofia aristotélica, o que é a 'essência' de um ser?", options: ["A característica necessária que identifica o ser","Uma característica ocasional e dispensável","Algo que muda a cada momento","O mesmo que acidente"], correct: 0 },
            { q: "O que é o 'acidente', em oposição à essência?", options: ["Uma característica circunstancial e não necessária do ser","A característica que define o ser","A matéria do ser","A forma do ser"], correct: 0 },
            { q: "Na relação ato/potência, o que representa o 'ato'?", options: ["Aquilo que o ser é no momento","As possibilidades futuras do ser","A matéria bruta","A causa final"], correct: 0 },
            { q: "No exemplo da semente e da árvore, a árvore representa a potência de quê?", options: ["Do fruto","Da própria semente","Da terra","Da raiz"], correct: 0 },
            { q: "Segundo a Teoria das quatro causas, a causa material responde a qual pergunta?", options: ["Do que é feito X?","Quem fez X?","Para que X?","O que é X?"], correct: 0 },
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
              visual: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="fh7_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="fh7_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="fh7_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="fh7_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="fh7_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker><marker id="fh7_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="340" rx="12" fill="#F4EEE1"/>
<rect x="200" y="14" width="240" height="44" rx="10" fill="#A8763E" stroke="#C9B18C" stroke-width="1.5"/><text x="320" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="#F4EEE1">Dominação da Macedônia</text><text x="320" y="54" text-anchor="middle" font-size="10.5" fill="#F4EEE1"></text><line x1="270" y1="58" x2="160" y2="88" stroke="#3E2F20" stroke-width="2" marker-end="url(#fh7_3E2F20)"/><line x1="370" y1="58" x2="480" y2="88" stroke="#3E2F20" stroke-width="2" marker-end="url(#fh7_3E2F20)"/><rect x="40" y="90" width="240" height="52" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="160" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Perda de autonomia</text><text x="160" y="130" text-anchor="middle" font-size="10.5" fill="#5C4630">das pólis</text><rect x="360" y="90" width="240" height="52" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="480" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Fusão de culturas</text><text x="480" y="130" text-anchor="middle" font-size="10.5" fill="#5C4630">grega + oriental</text><line x1="160" y1="142" x2="290" y2="170" stroke="#3E2F20" stroke-width="2" marker-end="url(#fh7_3E2F20)"/><line x1="480" y1="142" x2="350" y2="170" stroke="#3E2F20" stroke-width="2" marker-end="url(#fh7_3E2F20)"/><rect x="170" y="172" width="300" height="52" rx="10" fill="#5C4630" stroke="#C9B18C" stroke-width="1.5"/><text x="320" y="194" text-anchor="middle" font-size="12" font-weight="700" fill="#F4EEE1">Filosofia helenística</text><text x="320" y="212" text-anchor="middle" font-size="10.5" fill="#F4EEE1">ética e vida privada · medicina da alma</text><line x1="320" y1="224" x2="86" y2="258" stroke="#3E2F20" stroke-width="2" marker-end="url(#fh7_3E2F20)"/><rect x="16" y="260" width="140" height="60" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="86" y="282" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">CINISMO</text><text x="86" y="300" text-anchor="middle" font-size="10.5" fill="#5C4630">Diógenes · vida simples</text><line x1="320" y1="224" x2="242" y2="258" stroke="#3E2F20" stroke-width="2" marker-end="url(#fh7_3E2F20)"/><rect x="172" y="260" width="140" height="60" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="242" y="282" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">PIRRONISMO</text><text x="242" y="300" text-anchor="middle" font-size="10.5" fill="#5C4630">Pirro · époché</text><line x1="320" y1="224" x2="398" y2="258" stroke="#3E2F20" stroke-width="2" marker-end="url(#fh7_3E2F20)"/><rect x="328" y="260" width="140" height="60" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="398" y="282" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">EPICURISMO</text><text x="398" y="300" text-anchor="middle" font-size="10.5" fill="#5C4630">Epicuro · prazer equilibrado</text><line x1="320" y1="224" x2="554" y2="258" stroke="#3E2F20" stroke-width="2" marker-end="url(#fh7_3E2F20)"/><rect x="484" y="260" width="140" height="60" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="554" y="282" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">ESTOICISMO</text><text x="554" y="300" text-anchor="middle" font-size="10.5" fill="#5C4630">Zenão · apatia</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">As quatro escolas buscam o "bem viver" (felicidade) e a tranquilidade da alma, cada uma por um caminho.</p>`,
            },
            {
              heading: "Cinismo",
              body: `O Cinismo tem um significado diferente do atual.

• Representante: Diógenes de Sínope
• Cinismo → "viver como um cão"
• Desapego dos bens materiais e das convenções sociais → vida simples`,
            },
            {
              heading: "Pirronismo (Ceticismo)",
              body: `• Representante: Pirro de Élida
• Atitude (postura) cética → questionamento contínuo em relação a critérios absolutos de verdade

→ Époché → suspender os juízos

• "Tudo é incerto."`,
            },
            {
              heading: "Epicurismo (Epicuro de Samos)",
              body: `• Os sentimentos básicos do ser humano são a dor e o prazer.
• A felicidade está na administração racional e equilibrada do prazer.
• Prazeres podem ser duradouros ou imediatos: o sábio prefere os duradouros e evita os que trazem dor depois.
• Busca por aquilo que é natural e necessário.
• Autarquia → controlar a si próprio (bastar-se a si mesmo).

O sumo bem, portanto, é a ausência de dor:
• no corpo → aponia
• na alma → ataraxia

📌 Cuidado: o epicurismo NÃO é "aproveitar todos os prazeres". É prazer com moderação, guiado pela razão.`,
              visual: `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Naturais e necessários</p><p class="text-xs text-ochre font-semibold mb-1">BUSCAR</p><p class="text-sm text-espresso">comer quando há fome, beber, abrigo, amizade</p></div><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Naturais, mas não necessários</p><p class="text-xs text-ochre font-semibold mb-1">COM MODERAÇÃO</p><p class="text-sm text-espresso">comidas sofisticadas, luxos do corpo</p></div><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Nem naturais nem necessários</p><p class="text-xs text-ochre font-semibold mb-1">EVITAR</p><p class="text-sm text-espresso">fama, poder, riqueza sem limite</p></div><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">O sumo bem</p><p class="text-xs text-ochre font-semibold mb-1">APONIA + ATARAXIA</p><p class="text-sm text-espresso">ausência de dor no corpo (aponia) e de perturbação na alma (ataraxia)</p></div></div>`,
            },
            {
              heading: "Estoicismo (Zenão de Cítio)",
              body: `• O nome vem do grego stoá = pórtico, galeria: o ponto de encontro onde os pensadores se reuniam.
• O universo (a natureza) apresenta uma racionalidade, da qual nós fazemos parte.
• Devemos compreender e aceitar o fluxo da natureza.
• Existem coisas que dependem de nós e outras que não dependem.
• O sábio é capaz de controlar as paixões (impulsos irracionais) → apatia (ausência de paixões, imperturbabilidade).`,
              visual: `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Depende de nós</p><p class="text-xs text-ochre font-semibold mb-1">CONTROLAR</p><p class="text-sm text-espresso">nossos juízos, opiniões, desejos e ações</p></div><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Não depende de nós</p><p class="text-xs text-ochre font-semibold mb-1">ACEITAR</p><p class="text-sm text-espresso">o corpo, a doença, a morte, a fama, a opinião dos outros, os acontecimentos da natureza</p></div></div>`,
            },
            {
              heading: "Comparando as escolas helenísticas",
              body: `Uma palavra-chave para cada escola:`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Escola</th><th class="text-left py-2 pr-4 font-display text-ochre">Representante</th><th class="text-left py-2 pr-4 font-display text-ochre">Ideia central</th><th class="text-left py-2 pr-4 font-display text-ochre">Palavra-chave</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Cinismo</td><td class="py-1.5 pr-4 text-espresso">Diógenes de Sínope</td><td class="py-1.5 pr-4 text-espresso">vida simples, desapego das convenções</td><td class="py-1.5 pr-4 text-espresso">"viver como um cão"</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Pirronismo</td><td class="py-1.5 pr-4 text-espresso">Pirro de Élida</td><td class="py-1.5 pr-4 text-espresso">nada é certo, suspender o juízo</td><td class="py-1.5 pr-4 text-espresso">époché</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Epicurismo</td><td class="py-1.5 pr-4 text-espresso">Epicuro de Samos</td><td class="py-1.5 pr-4 text-espresso">prazer equilibrado, ausência de dor</td><td class="py-1.5 pr-4 text-espresso">aponia e ataraxia</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Estoicismo</td><td class="py-1.5 pr-4 text-espresso">Zenão de Cítio</td><td class="py-1.5 pr-4 text-espresso">aceitar a razão da natureza, controlar as paixões</td><td class="py-1.5 pr-4 text-espresso">apatia</td></tr></tbody></table></div>`,
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
            { q: "Qual filósofo é associado ao Cinismo?", options: ["Pirro","Diógenes de Sínope","Aristóteles","Platão"], correct: 1 },
            { q: "O Cinismo helenístico, ao contrário do sentido atual da palavra, defendia:", options: ["Mentira e desprezo pelos outros","Desapego dos bens materiais e das convenções sociais, com vida simples","Acúmulo de riquezas","Participação intensa na política"], correct: 1 },
            { q: "Qual escola helenística tem Pirro como referência e adota uma atitude de questionamento contínuo dos critérios absolutos de verdade?", options: ["Cinismo","Pirronismo (Ceticismo)","Platonismo","Aristotelismo"], correct: 1 },
            { q: "Qual filósofo é o principal representante do Pirronismo (Ceticismo)?", options: ["Diógenes de Sínope","Pirro de Élida","Sócrates","Aristóteles"], correct: 1 },
            { q: "O que significa époché no Ceticismo?", options: ["Afirmar a verdade absoluta","Suspender os juízos","Viver como um cão","Buscar o prazer imediato"], correct: 1 },
            { q: "Para Epicuro, os sentimentos básicos do ser humano são:", options: ["Amor e ódio","Dor e prazer","Medo e coragem","Fé e razão"], correct: 1 },
            { q: "Para Epicuro, a felicidade está:", options: ["Na busca de todos os prazeres possíveis","Na administração racional e equilibrada do prazer","Na negação de qualquer prazer","Na riqueza"], correct: 1 },
            { q: "O sumo bem para Epicuro é:", options: ["A riqueza e a fama","A ausência de dor no corpo (aponia) e na alma (ataraxia)","O poder político","A suspensão do juízo"], correct: 1 },
            { q: "\"Aponia\", no epicurismo, significa:", options: ["Ausência de dor no corpo","Ausência de perturbação na alma","Suspensão do juízo","Viver como um cão"], correct: 0 },
            { q: "A autarquia, para Epicuro, é:", options: ["O governo das pólis","Controlar a si próprio","Buscar a fama","Obedecer aos deuses"], correct: 1 },
            { q: "Segundo Epicuro, devemos buscar principalmente os desejos:", options: ["Naturais e necessários","Nem naturais nem necessários","Ligados à fama","Ligados ao poder"], correct: 0 },
            { q: "Qual afirmação sobre o epicurismo está correta?", options: ["Defende aproveitar todos os prazeres sem limite","Defende o prazer com moderação, guiado pela razão","Defende a suspensão de todo juízo","Defende a vida como a de um cão"], correct: 1 },
            { q: "O fundador do estoicismo foi:", options: ["Epicuro de Samos","Zenão de Cítio","Pirro de Élida","Diógenes de Sínope"], correct: 1 },
            { q: "A palavra \"estoicismo\" vem do grego stoá, que significa:", options: ["Prazer","Pórtico, galeria","Dúvida","Cão"], correct: 1 },
            { q: "Para os estoicos, o universo:", options: ["É puro caos, sem ordem","Apresenta uma racionalidade da qual fazemos parte","Foi criado pelos homens","Não pode ser conhecido de forma alguma"], correct: 1 },
            { q: "Para o estoicismo, o sábio é aquele que:", options: ["Busca todos os prazeres","Controla as paixões e aceita o que não depende dele","Duvida de tudo","Abandona a razão"], correct: 1 },
            { q: "No estoicismo, \"apatia\" significa:", options: ["Preguiça","Ausência de paixões (impulsos irracionais)","Ausência de dor no corpo","Tristeza profunda"], correct: 1 },
            { q: "Segundo os estoicos, qual destas coisas DEPENDE de nós?", options: ["A opinião dos outros","Os nossos juízos e ações","A morte","O clima"], correct: 1 },
            { q: "Qual associação está correta?", options: ["Epicurismo — apatia","Estoicismo — aponia","Pirronismo — époché","Cinismo — ataraxia"], correct: 2 },
          ],
        },
      ],
    },
);
