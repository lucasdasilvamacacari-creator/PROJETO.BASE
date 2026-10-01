window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "literatura",
      name: "Literatura",
      emoji: "📖",
      contents: [
        {
          id: "arcadismo",
          title: "Arcadismo",
          sections: [
            {
              heading: "Temas Clássicos",
              body: `• Inutilia Truncat → CORTAR O INÚTIL
• Fugere Urbem → FUGIR DA CIDADE
• Locus Amoenus → LOCAL AGRADÁVEL
• Aurea Mediocritas → VIDA HARMONIOSA
• Carpe Diem → APROVEITA O DIA – RACIONALIDADE

→ No Brasil: 1768–1836 → INCONFIDÊNCIA MINEIRA.`,
            },
            {
              heading: "Autores Líricos",
              body: `I) Cláudio Manuel da Costa: Obras Poéticas

II) Tomás Antônio Gonzaga
LIRAS MARÍLIA DIRCEU
* 1ª PARTE: ARCADE
* 2ª PARTE: PRÉ-ROMÂNTICA
* CARTAS CHILENAS (CRÍTICAS)`,
            },
            {
              heading: "Autores Épicos",
              body: `I) Basílio da Gama: O Uruguai → LUTA SETE POVOS

II) Frei Santa Rita Durão: O Caramuru → BAHIA

OBS: POSSUEM ELEMENTOS ROMÂNTICOS: INDÍGENAS E A MORTE.`,
            },
          ],
          quiz: [
            {
              q: "No Arcadismo, a expressão latina 'Inutilia Truncat' está ligada a qual ideia?",
              options: ["Cortar o inútil", "Fugir da cidade", "Local agradável", "Aproveitar o dia"],
              correct: 0,
            },
            {
              q: "A expressão 'Fugere Urbem' representa o tema de:",
              options: ["Vida harmoniosa", "Fugir da cidade", "Cortar o inútil", "Local agradável"],
              correct: 1,
            },
            {
              q: "'Locus Amoenus' é o tema árcade que significa:",
              options: ["Aproveitar o dia", "Vida harmoniosa", "Local agradável", "Fugir da cidade"],
              correct: 2,
            },
            {
              q: "'Aurea Mediocritas' está associada a qual ideia?",
              options: ["Vida harmoniosa", "Cortar o inútil", "Local agradável", "Aproveitar o dia"],
              correct: 0,
            },
            {
              q: "'Carpe Diem' está ligado à ideia de:",
              options: ["Fugir da cidade", "Local agradável", "Aproveitar o dia, com racionalidade", "Vida harmoniosa"],
              correct: 2,
            },
            {
              q: "No Brasil, o período do Arcadismo é situado entre:",
              options: ["1500–1600", "1768–1836", "1836–1881", "1900–1922"],
              correct: 1,
            },
            {
              q: "O Arcadismo no Brasil está diretamente relacionado a qual evento histórico?",
              options: ["Proclamação da República", "Independência do Brasil", "Inconfidência Mineira", "Revolução Pernambucana"],
              correct: 2,
            },
            {
              q: "'Obras Poéticas' é uma obra de qual autor lírico do Arcadismo?",
              options: ["Tomás Antônio Gonzaga", "Basílio da Gama", "Cláudio Manuel da Costa", "Frei Santa Rita Durão"],
              correct: 2,
            },
            {
              q: "'O Uruguai', obra que narra a luta dos Sete Povos, é de autoria de:",
              options: ["Frei Santa Rita Durão", "Basílio da Gama", "Tomás Antônio Gonzaga", "Cláudio Manuel da Costa"],
              correct: 1,
            },
            {
              q: "'O Caramuru', obra épica ambientada na Bahia, foi escrita por:",
              options: ["Frei Santa Rita Durão", "Basílio da Gama", "Tomás Antônio Gonzaga", "Cláudio Manuel da Costa"],
              correct: 0,
            },
          ],
        },
        {
          id: "romantismo",
          title: "Romantismo",
          sections: [
            {
              heading: "Origem",
              body: `O Romantismo surgiu em diferentes países, com características marcantes em cada um:
Inglaterra: Spleen (melancolia, tristeza profunda).
Alemanha: Sturm und Drang ("Tempestade e Ímpeto").
França: Novelas.`,
              visual: `
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-sm text-espresso mb-1">Inglaterra</p>
    <p class="text-xs text-bark/70">Spleen — melancolia, tristeza profunda</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-sm text-espresso mb-1">Alemanha</p>
    <p class="text-xs text-bark/70">Sturm und Drang — "Tempestade e Ímpeto"</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-sm text-espresso mb-1">França</p>
    <p class="text-xs text-bark/70">Novelas</p>
  </div>
</div>`,
            },
            {
              heading: "1. Liberdade",
              body: `Idealização do amor e da mulher.
Fantasia e imaginação.
Novos gêneros: novelas e romances.
Amor sem limites.`,
            },
            {
              heading: "2. Nacionalismo",
              body: `Indianismo e exaltação da floresta.
Linguagem brasileira.
Heroísmo: luta por direitos.
Condenação da escravidão.
Direitos dos afrodescendentes.`,
            },
            {
              heading: "3. Individualismo",
              body: `Sentimentalismo e subjetividade.
Valorização das emoções, sonhos e desejos.
Gosto pela noite, álcool, solidão e natureza.
Fuga da realidade: evasão e idealização.
Ilogicidade e impulsividade.`,
            },
            {
              heading: "🏆 Resumo Ouro (o que mais cai)",
              body: `Referência rápida para revisar antes da prova.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Aspecto</th><th class="text-left py-2 font-display text-bark">Resumo</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Origem</td><td class="py-2 text-bark/80">Inglaterra (Spleen), Alemanha (Sturm und Drang) e França (novelas)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Liberdade</td><td class="py-2 text-bark/80">Amor idealizado, imaginação, novelas e romances</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Nacionalismo</td><td class="py-2 text-bark/80">Indianismo, valorização do Brasil, heroísmo e condenação da escravidão</td></tr>
      <tr><td class="py-2 pr-3 text-bark/80">Individualismo</td><td class="py-2 text-bark/80">Emoções, subjetividade, sonhos, solidão, natureza e fuga da realidade</td></tr>
    </tbody>
  </table>
</div>`,
            },
          ],
          quiz: [
            { q: "Na Inglaterra, o Romantismo é marcado por qual característica emocional?", options: ["Spleen (melancolia, tristeza profunda)", "Sturm und Drang", "Exaltação nacionalista apenas", "Racionalismo científico"], correct: 0 },
            { q: "Na Alemanha, o Romantismo é marcado pelo movimento:", options: ["Sturm und Drang ('Tempestade e Ímpeto')", "Spleen", "Novelas", "Indianismo"], correct: 0 },
            { q: "Na França, o Romantismo se destacou principalmente por meio de:", options: ["Novelas", "Poesia épica", "Tratados filosóficos", "Peças de teatro clássico"], correct: 0 },
            { q: "Dentro da característica 'Liberdade' do Romantismo, o que se destaca?", options: ["Idealização do amor e da mulher, fantasia e imaginação", "Crítica racional da sociedade", "Rejeição total das emoções", "Valorização exclusiva da ciência"], correct: 0 },
            { q: "Quais novos gêneros literários surgem com a Liberdade romântica?", options: ["Novelas e romances", "Sonetos apenas", "Tratados científicos", "Crônicas jornalísticas"], correct: 0 },
            { q: "Dentro da característica 'Nacionalismo', o que é valorizado?", options: ["O indianismo e a exaltação da floresta", "A cultura europeia apenas", "O desprezo pela língua brasileira", "A negação da identidade nacional"], correct: 0 },
            { q: "O Nacionalismo romântico brasileiro também se relaciona com:", options: ["A condenação da escravidão e os direitos dos afrodescendentes", "O apoio à escravidão", "A valorização exclusiva da metrópole portuguesa", "A rejeição da língua portuguesa"], correct: 0 },
            { q: "Dentro da característica 'Individualismo', o que é valorizado?", options: ["Sentimentalismo, subjetividade e valorização das emoções, sonhos e desejos", "A objetividade científica", "A vida em coletividade acima do indivíduo", "A negação dos sentimentos"], correct: 0 },
            { q: "O Individualismo romântico também está associado a:", options: ["Gosto pela noite, álcool, solidão e natureza", "Rigidez e disciplina militar", "Vida urbana e industrial", "Rejeição da natureza"], correct: 0 },
            { q: "A 'fuga da realidade' no Individualismo romântico é caracterizada por:", options: ["Evasão e idealização", "Documentação fiel da realidade", "Crítica social objetiva", "Ausência total de imaginação"], correct: 0 },
          ],
        },
        {
          id: "prosa-romantica",
          title: "Prosa Romântica",
          sections: [
            {
              heading: "José de Alencar",
              body: `José de Alencar é o grande nome da prosa romântica brasileira. Ele escreveu um romance de referência em cada uma das grandes vertentes do romantismo:

• Indianista — Iracema
• Urbano — Senhora (par romântico: Fernando / Aurélia, par Seixas)
• Regionalista — O Gaúcho
• Histórico — A Guerra dos Mascates

A ilustração abaixo mostra esse projeto literário em um panorama só.`,
              visual: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <rect x="0" y="0" width="640" height="320" rx="12" fill="#F4EEE1"/>
  <text x="320" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">JOSÉ DE ALENCAR — Projeto literário</text>

  <ellipse cx="320" cy="160" rx="90" ry="34" fill="#A8763E" stroke="#5C4630" stroke-width="2"/>
  <text x="320" y="158" text-anchor="middle" font-size="13" font-weight="700" fill="#F4EEE1">José de Alencar</text>
  <text x="320" y="174" text-anchor="middle" font-size="10" fill="#F4EEE1">(romances)</text>

  <rect x="30" y="60" width="180" height="60" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/>
  <text x="120" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">INDIANISTA</text>
  <text x="120" y="102" text-anchor="middle" font-size="11" fill="#5C4630">Iracema</text>

  <rect x="430" y="60" width="180" height="60" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/>
  <text x="520" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">URBANO</text>
  <text x="520" y="102" text-anchor="middle" font-size="11" fill="#5C4630">Senhora — Fernando / Aurélia</text>

  <rect x="30" y="200" width="180" height="60" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/>
  <text x="120" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">REGIONALISTA</text>
  <text x="120" y="242" text-anchor="middle" font-size="11" fill="#5C4630">O Gaúcho</text>

  <rect x="430" y="200" width="180" height="60" rx="10" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/>
  <text x="520" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">HISTÓRICO</text>
  <text x="520" y="242" text-anchor="middle" font-size="11" fill="#5C4630">A Guerra dos Mascates</text>

  <line x1="230" y1="152" x2="210" y2="100" stroke="#5C4630" stroke-width="1.5"/>
  <line x1="410" y1="152" x2="430" y2="100" stroke="#5C4630" stroke-width="1.5"/>
  <line x1="230" y1="172" x2="210" y2="220" stroke="#5C4630" stroke-width="1.5"/>
  <line x1="410" y1="172" x2="430" y2="220" stroke="#5C4630" stroke-width="1.5"/>

  <text x="320" y="285" text-anchor="middle" font-size="10" fill="#5C4630">Outros regionalistas: Bernardo Guimarães (A Escrava Isaura), Taunay (Inocência), Franklin Távora (O Cabeleira)</text>
  <text x="320" y="302" text-anchor="middle" font-size="10" fill="#5C4630">Humor/costumes: Martins Pena (teatro) e Manuel A. de Almeida (Memórias de um Sargento de Milícias)</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">José de Alencar escreveu um romance representativo em cada vertente da prosa romântica brasileira.</p>`,
            },
            {
              heading: "Outros autores regionalistas",
              body: `Além de José de Alencar, outros autores exploraram o romance regionalista, cada um retratando uma região do Brasil:

• Bernardo Guimarães — A Escrava Isaura (ambientado em Minas Gerais)
• Visconde de Taunay — Inocência (ambientado em Mato Grosso)
• Franklin Távora — O Cabeleira (ambientado no Nordeste)`,
            },
            {
              heading: "Características das narrativas românticas",
              body: `As narrativas históricas e amorosas do Romantismo, publicadas em folhetins (nos jornais), tinham um estilo próprio:

• Trama amorosa publicada em folhetins
• Capítulos curtos
• Suspense e mistérios ao final de cada capítulo
• Final feliz

Esses recursos prendiam o leitor e garantiam que ele comprasse o próximo capítulo do jornal.`,
            },
            {
              heading: "Autores de humor e costumes",
              body: `Nem toda a prosa romântica era séria. Dois autores se destacam no retrato das classes populares e do humor:

Martins Pena — teatro
• Obra de destaque: O Noviço
• Autor do teatro de costumes brasileiro

Manuel Antônio de Almeida — romance
• Obra: Memórias de um Sargento de Milícias
• Retrata as classes populares
• Romance de costumes centrado na malandragem e na troca de favores (corrupção, jeitinho brasileiro)
• O protagonista Leonardo é descrito como "herói sem nenhum caráter" — um antecessor do malandro brasileiro
• É considerado o maior destaque entre os romances de costumes`,
            },
          ],
          quiz: [
            { q: "Qual romance de José de Alencar é considerado indianista?", options: ["Senhora","Iracema","O Gaúcho","A Guerra dos Mascates"], correct: 1 },
            { q: "Em Senhora, de José de Alencar, qual é o par romântico principal?", options: ["Fernando e Aurélia","Peri e Ceci","Leonardo e Luisinha","Simão e Teresa"], correct: 0 },
            { q: "O Gaúcho, de José de Alencar, se enquadra em qual subgênero do Romantismo?", options: ["Urbano","Histórico","Indianista","Regionalista"], correct: 3 },
            { q: "A Guerra dos Mascates, de José de Alencar, é um romance:", options: ["Indianista","Urbano","Histórico","Regionalista"], correct: 2 },
            { q: "A obra A Escrava Isaura, do romantismo regionalista, foi escrita por:", options: ["Visconde de Taunay","Franklin Távora","Bernardo Guimarães","Manuel Antônio de Almeida"], correct: 2 },
            { q: "Inocência, romance regionalista ambientado em Mato Grosso, é de autoria de:", options: ["José de Alencar","Visconde de Taunay","Bernardo Guimarães","Franklin Távora"], correct: 1 },
            { q: "O romance O Cabeleira, regionalista nordestino, é de qual autor?", options: ["Franklin Távora","Bernardo Guimarães","Visconde de Taunay","Martins Pena"], correct: 0 },
            { q: "Entre as características das narrativas românticas publicadas em folhetins, destaca-se:", options: ["Capítulos longos e densos, com teor filosófico","Capítulos curtos, suspense, mistérios e final feliz","Ausência de trama amorosa","Linguagem puramente científica"], correct: 1 },
            { q: "O autor de Memórias de um Sargento de Milícias, retratando as classes populares e a malandragem, é:", options: ["Martins Pena","José de Alencar","Manuel Antônio de Almeida","Bernardo Guimarães"], correct: 2 },
            { q: "O protagonista Leonardo, de Memórias de um Sargento de Milícias, é descrito como:", options: ["Herói trágico de origem nobre","Herói sem nenhum caráter","Herói romântico idealizado","Herói heroico e virtuoso"], correct: 1 },
          ],
        },
      ],
    },
);
