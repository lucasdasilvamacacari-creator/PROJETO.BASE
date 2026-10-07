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
            { q: "No Arcadismo, a expressão latina 'Inutilia Truncat' está ligada a qual ideia?", options: ["Cortar o inútil","Fugir da cidade","Local agradável","Aproveitar o dia"], correct: 0 },
            { q: "A expressão 'Fugere Urbem' representa o tema de:", options: ["Vida harmoniosa","Fugir da cidade","Cortar o inútil","Local agradável"], correct: 1 },
            { q: "'Locus Amoenus' é o tema árcade que significa:", options: ["Aproveitar o dia","Vida harmoniosa","Local agradável","Fugir da cidade"], correct: 2 },
            { q: "'Aurea Mediocritas' está associada a qual ideia?", options: ["Vida harmoniosa","Cortar o inútil","Local agradável","Aproveitar o dia"], correct: 0 },
            { q: "'Carpe Diem' está ligado à ideia de:", options: ["Fugir da cidade","Local agradável","Aproveitar o dia, com racionalidade","Vida harmoniosa"], correct: 2 },
            { q: "No Brasil, o período do Arcadismo é situado entre:", options: ["1500–1600","1768–1836","1836–1881","1900–1922"], correct: 1 },
            { q: "O Arcadismo no Brasil está diretamente relacionado a qual evento histórico?", options: ["Proclamação da República","Independência do Brasil","Inconfidência Mineira","Revolução Pernambucana"], correct: 2 },
            { q: "'Obras Poéticas' é uma obra de qual autor lírico do Arcadismo?", options: ["Tomás Antônio Gonzaga","Basílio da Gama","Cláudio Manuel da Costa","Frei Santa Rita Durão"], correct: 2 },
            { q: "'O Uruguai', obra que narra a luta dos Sete Povos, é de autoria de:", options: ["Frei Santa Rita Durão","Basílio da Gama","Tomás Antônio Gonzaga","Cláudio Manuel da Costa"], correct: 1 },
            { q: "'O Caramuru', obra épica ambientada na Bahia, foi escrita por:", options: ["Frei Santa Rita Durão","Basílio da Gama","Tomás Antônio Gonzaga","Cláudio Manuel da Costa"], correct: 0 },
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
            { q: "Na Inglaterra, o Romantismo é marcado por qual característica emocional?", options: ["Spleen (melancolia, tristeza profunda)","Sturm und Drang","Exaltação nacionalista apenas","Racionalismo científico"], correct: 0 },
            { q: "Na Alemanha, o Romantismo é marcado pelo movimento:", options: ["Sturm und Drang ('Tempestade e Ímpeto')","Spleen","Novelas","Indianismo"], correct: 0 },
            { q: "Na França, o Romantismo se destacou principalmente por meio de:", options: ["Novelas","Poesia épica","Tratados filosóficos","Peças de teatro clássico"], correct: 0 },
            { q: "Dentro da característica 'Liberdade' do Romantismo, o que se destaca?", options: ["Idealização do amor e da mulher, fantasia e imaginação","Crítica racional da sociedade","Rejeição total das emoções","Valorização exclusiva da ciência"], correct: 0 },
            { q: "Quais novos gêneros literários surgem com a Liberdade romântica?", options: ["Novelas e romances","Sonetos apenas","Tratados científicos","Crônicas jornalísticas"], correct: 0 },
            { q: "Dentro da característica 'Nacionalismo', o que é valorizado?", options: ["O indianismo e a exaltação da floresta","A cultura europeia apenas","O desprezo pela língua brasileira","A negação da identidade nacional"], correct: 0 },
            { q: "O Nacionalismo romântico brasileiro também se relaciona com:", options: ["A condenação da escravidão e os direitos dos afrodescendentes","O apoio à escravidão","A valorização exclusiva da metrópole portuguesa","A rejeição da língua portuguesa"], correct: 0 },
            { q: "Dentro da característica 'Individualismo', o que é valorizado?", options: ["Sentimentalismo, subjetividade e valorização das emoções, sonhos e desejos","A objetividade científica","A vida em coletividade acima do indivíduo","A negação dos sentimentos"], correct: 0 },
            { q: "O Individualismo romântico também está associado a:", options: ["Gosto pela noite, álcool, solidão e natureza","Rigidez e disciplina militar","Vida urbana e industrial","Rejeição da natureza"], correct: 0 },
            { q: "A 'fuga da realidade' no Individualismo romântico é caracterizada por:", options: ["Evasão e idealização","Documentação fiel da realidade","Crítica social objetiva","Ausência total de imaginação"], correct: 0 },
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
        {
          id: "realismo-em-portugal",
          title: "Realismo em Portugal: Eça de Queiróz",
          sections: [
            {
              heading: "Contexto histórico (meados do séc. XIX)",
              body: `Na segunda metade do século XIX, o avanço técnico e científico mudou a forma de ver o mundo.

• A Segunda Revolução Industrial e o racionalismo impulsionaram a busca por uma literatura documental e objetiva.
• Sai a idealização romântica; entra a análise objetiva da realidade.

Romantismo × Realismo
• Romantismo → emoção, idealização, fuga da realidade
• Realismo → razão, objetividade, retrato e crítica da sociedade`,
            },
            {
              heading: "Correntes de pensamento determinantes",
              body: `• Evolucionismo → baseado na seleção natural e na adaptação.
• Socialismo → foco na luta de classes e na justiça social.
• Positivismo → valorização da ciência e da observação empírica.
• Determinismo de Taine → o ser humano é moldado pelo meio, pela raça e pelo momento histórico.

Essas ideias levaram os escritores a observar e explicar o comportamento humano como um cientista.`,
              visual: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="rl1_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="rl1_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker></defs><rect width="640" height="330" rx="12" fill="#F4EEE1"/>
<text x="320" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">Correntes de pensamento que alimentam o Realismo</text><rect x="16" y="46" width="290" height="82" rx="12" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="161" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">Evolucionismo</text><text x="161" y="92" text-anchor="middle" font-size="10.5" fill="#5C4630">seleção natural</text><text x="161" y="107" text-anchor="middle" font-size="10.5" fill="#5C4630">e adaptação</text><rect x="334" y="46" width="290" height="82" rx="12" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="479" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">Socialismo</text><text x="479" y="92" text-anchor="middle" font-size="10.5" fill="#5C4630">luta de classes</text><text x="479" y="107" text-anchor="middle" font-size="10.5" fill="#5C4630">e justiça social</text><rect x="16" y="214" width="290" height="82" rx="12" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="161" y="240" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">Positivismo</text><text x="161" y="260" text-anchor="middle" font-size="10.5" fill="#5C4630">ciência e</text><text x="161" y="275" text-anchor="middle" font-size="10.5" fill="#5C4630">observação empírica</text><rect x="334" y="214" width="290" height="82" rx="12" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><text x="479" y="240" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">Determinismo (Taine)</text><text x="479" y="260" text-anchor="middle" font-size="10.5" fill="#5C4630">meio, raça e</text><text x="479" y="275" text-anchor="middle" font-size="10.5" fill="#5C4630">momento histórico</text><rect x="190" y="138" width="260" height="66" rx="14" fill="#3E2F20"/><text x="320" y="166" text-anchor="middle" font-size="15" font-weight="700" fill="#F4EEE1">REALISMO</text><text x="320" y="186" text-anchor="middle" font-size="11" fill="#F4EEE1">análise objetiva da realidade</text><line x1="161" y1="128" x2="220" y2="140" stroke="#3E2F20" stroke-width="2" marker-end="url(#rl1_3E2F20)"/><line x1="479" y1="128" x2="420" y2="140" stroke="#3E2F20" stroke-width="2" marker-end="url(#rl1_3E2F20)"/><line x1="161" y1="214" x2="220" y2="202" stroke="#3E2F20" stroke-width="2" marker-end="url(#rl1_3E2F20)"/><line x1="479" y1="214" x2="420" y2="202" stroke="#3E2F20" stroke-width="2" marker-end="url(#rl1_3E2F20)"/><text x="320" y="318" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">contexto: 2ª Revolução Industrial e avanço científico (meados do séc. XIX)</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">O Realismo troca a idealização romântica por uma literatura documental, apoiada na ciência da época.</p>`,
            },
            {
              heading: "O marco inicial em Portugal (1865–1871)",
              body: `• Questão Coimbrã (1865) → debate entre os defensores do Romantismo e os novos escritores realistas.
• Conferências do Casino (1871) → encontros em Lisboa para discutir as novas ideias e a situação da sociedade portuguesa.

Em Portugal, o Realismo se consolidou a partir desses debates intelectuais e teve em Eça de Queiróz o seu maior nome, marcando a literatura com denúncias sociais e inovação estilística.`,
              visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="rl2_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="rl2_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker></defs><rect width="640" height="300" rx="12" fill="#F4EEE1"/>
<line x1="60" y1="150" x2="602" y2="150" stroke="#3E2F20" stroke-width="2.5" marker-end="url(#rl2_3E2F20)"/><rect x="211.66666666666669" y="142" width="184.16666666666663" height="16" rx="8" fill="#A6493A" opacity="0.85"/><rect x="559.8333333333333" y="142" width="26.166666666666742" height="16" rx="8" fill="#5B7553"/><line x1="70" y1="142" x2="70" y2="62" stroke="#C9B18C"/><circle cx="70" cy="150" r="5" fill="#3E2F20"/><text x="40" y="38" text-anchor="start" font-size="11" font-weight="700" fill="#3E2F20">Questão Coimbrã</text><text x="40" y="52" text-anchor="start" font-size="10" font-style="italic" fill="#5C4630">Romantismo × Realismo</text><text x="70" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">1865</text><line x1="155" y1="142" x2="155" y2="102" stroke="#C9B18C"/><circle cx="155" cy="150" r="5" fill="#3E2F20"/><text x="155" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">Conferências do Casino</text><text x="155" y="92" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">debate das novas ideias</text><text x="155" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">1871</text><line x1="254.16666666666666" y1="142" x2="254.16666666666666" y2="62" stroke="#C9B18C"/><circle cx="254.16666666666666" cy="150" r="5" fill="#3E2F20"/><text x="254.16666666666666" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">O Primo Basílio</text><text x="254.16666666666666" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">1878</text><line x1="565.8333333333333" y1="142" x2="565.8333333333333" y2="62" stroke="#C9B18C"/><circle cx="565.8333333333333" cy="150" r="5" fill="#3E2F20"/><text x="565.8333333333333" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">A Ilustre Casa</text><text x="565.8333333333333" y="52" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">de Ramires</text><text x="561.8333333333333" y="176" text-anchor="end" font-size="10" font-weight="700" fill="#A8763E">1900</text><line x1="211.66666666666669" y1="180" x2="211.66666666666669" y2="198" stroke="#C9B18C"/><circle cx="211.66666666666669" cy="150" r="5" fill="#3E2F20"/><text x="211.66666666666669" y="214" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">O Crime do</text><text x="211.66666666666669" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">Padre Amaro</text><text x="211.66666666666669" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">1875</text><line x1="395.8333333333333" y1="180" x2="395.8333333333333" y2="198" stroke="#C9B18C"/><circle cx="395.8333333333333" cy="150" r="5" fill="#3E2F20"/><text x="395.8333333333333" y="214" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">Os Maias</text><text x="395.8333333333333" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">1888</text><line x1="580" y1="180" x2="580" y2="236" stroke="#C9B18C"/><circle cx="580" cy="150" r="5" fill="#3E2F20"/><text x="580" y="252" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">A Cidade e</text><text x="580" y="266" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">as Serras</text><text x="584" y="176" text-anchor="start" font-size="10" font-weight="700" fill="#A8763E">1901</text><text x="303.75" y="286" text-anchor="middle" font-size="11" font-weight="700" fill="#A6493A">1ª fase: denúncia</text><text x="535.8333333333333" y="290" text-anchor="middle" font-size="11" font-weight="700" fill="#5B7553">2ª fase</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">De 1865 a 1901: o marco inicial do Realismo português e as duas fases da obra de Eça de Queiróz.</p>`,
            },
            {
              heading: "Eça de Queiróz: estilo",
              body: `• Usou a ironia para denunciar a hipocrisia da burguesia e do clero.
• Criou neologismos (palavras novas) e renovou a linguagem da prosa portuguesa.
• Faz crítica social com humor e detalhismo na descrição de personagens e ambientes.`,
            },
            {
              heading: "As duas fases da obra",
              body: `1ª fase (1875–1888): denúncia e análise da elite
• O Crime do Padre Amaro (1875) → crítica ao clero e à hipocrisia provincial.
• O Primo Basílio (1878) → retrato da burguesia de Lisboa e do adultério.
• Os Maias (1888) → a grande análise da decadência da sociedade portuguesa.
→ Essas obras expõem a decadência social.

2ª fase (1900–1901): reconciliação e retomada da tradição
• A Ilustre Casa de Ramires (1900) → valorização das raízes históricas e nacionais.
• A Cidade e as Serras (1901) → contraste entre a civilização urbana e a vida natural.
→ Essas obras buscam conciliar tradição e modernidade.`,
              visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="rl3_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="rl3_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker></defs><rect width="640" height="300" rx="12" fill="#F4EEE1"/>
<rect x="16" y="14" width="296" height="272" rx="14" fill="none" stroke="#A6493A" stroke-width="2"/><text x="164" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="#A6493A">1ª FASE (1875–1888)</text><text x="164" y="60" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">Denúncia e análise da elite</text><rect x="32" y="78" width="264" height="52" rx="10" fill="#E4D9C4" stroke="#C9B18C"/><text x="164" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">O Crime do Padre Amaro</text><text x="164" y="118" text-anchor="middle" font-size="10.5" fill="#5C4630">crítica ao clero e à hipocrisia provincial</text><rect x="32" y="140" width="264" height="52" rx="10" fill="#E4D9C4" stroke="#C9B18C"/><text x="164" y="162" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">O Primo Basílio</text><text x="164" y="180" text-anchor="middle" font-size="10.5" fill="#5C4630">burguesia de Lisboa e adultério</text><rect x="32" y="202" width="264" height="52" rx="10" fill="#E4D9C4" stroke="#C9B18C"/><text x="164" y="224" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Os Maias</text><text x="164" y="242" text-anchor="middle" font-size="10.5" fill="#5C4630">decadência da sociedade portuguesa</text><text x="164" y="272" text-anchor="middle" font-size="11" font-weight="700" fill="#A6493A">→ expõe a decadência social</text><rect x="328" y="14" width="296" height="272" rx="14" fill="none" stroke="#5B7553" stroke-width="2"/><text x="476" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="#5B7553">2ª FASE (1900–1901)</text><text x="476" y="60" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">Reconciliação com a tradição</text><rect x="344" y="78" width="264" height="52" rx="10" fill="#E4D9C4" stroke="#C9B18C"/><text x="476" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">A Ilustre Casa de Ramires</text><text x="476" y="118" text-anchor="middle" font-size="10.5" fill="#5C4630">valorização das raízes históricas</text><rect x="344" y="140" width="264" height="52" rx="10" fill="#E4D9C4" stroke="#C9B18C"/><text x="476" y="162" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">A Cidade e as Serras</text><text x="476" y="180" text-anchor="middle" font-size="10.5" fill="#5C4630">civilização urbana × vida natural</text><text x="476" y="272" text-anchor="middle" font-size="11" font-weight="700" fill="#5B7553">→ concilia tradição e modernidade</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">A primeira fase ataca a Igreja, a burguesia e a elite; a segunda faz as pazes com Portugal e suas tradições.</p>`,
            },
          ],
          quiz: [
            { q: "O contexto que impulsionou o Realismo na segunda metade do século XIX foi:", options: ["A Segunda Revolução Industrial e o avanço científico","A Idade Média e o feudalismo","O Renascimento italiano","A Primeira Guerra Mundial"], correct: 0 },
            { q: "Em relação ao Romantismo, o Realismo propõe:", options: ["Mais idealização e fuga da realidade","A análise objetiva da realidade","A volta aos modelos clássicos gregos","A valorização do sonho e do misticismo"], correct: 1 },
            { q: "A corrente que valoriza a ciência e a observação empírica é o:", options: ["Socialismo","Positivismo","Evolucionismo","Idealismo"], correct: 1 },
            { q: "Segundo o Determinismo de Taine, o ser humano é influenciado por:", options: ["Sonhos, desejos e emoções","Meio, raça e momento histórico","Religião e destino","Apenas pela educação"], correct: 1 },
            { q: "O Evolucionismo baseia-se em:", options: ["Luta de classes","Seleção natural e adaptação","Observação dos astros","Idealização do amor"], correct: 1 },
            { q: "O Socialismo, uma das bases do Realismo, tem como foco:", options: ["A luta de classes e a justiça social","A seleção natural","O culto à natureza","A fé religiosa"], correct: 0 },
            { q: "A Questão Coimbrã (1865) foi:", options: ["Uma revolta militar em Coimbra","Um debate entre Romantismo e Realismo","A fundação da Universidade de Coimbra","Um romance de Eça de Queiróz"], correct: 1 },
            { q: "As Conferências do Casino (1871) tinham como objetivo:", options: ["Discutir as novas ideias e a sociedade portuguesa","Premiar poetas românticos","Inaugurar um teatro em Lisboa","Defender a monarquia absolutista"], correct: 0 },
            { q: "Eça de Queiróz usou principalmente qual recurso para denunciar a hipocrisia burguesa e religiosa?", options: ["A ironia","A idealização","O sentimentalismo","A linguagem arcaica"], correct: 0 },
            { q: "Qual obra faz crítica ao clero e à hipocrisia provincial?", options: ["Os Maias","O Primo Basílio","O Crime do Padre Amaro","A Cidade e as Serras"], correct: 2 },
            { q: "O Primo Basílio retrata:", options: ["A vida no campo","A burguesia de Lisboa e o adultério","As raízes históricas de Portugal","O clero do interior"], correct: 1 },
            { q: "A obra considerada a grande análise da decadência da sociedade portuguesa é:", options: ["Os Maias","A Ilustre Casa de Ramires","O Crime do Padre Amaro","A Cidade e as Serras"], correct: 0 },
            { q: "A Cidade e as Serras trata do contraste entre:", options: ["Clero e burguesia","Civilização urbana e vida natural","Romantismo e Realismo","Portugal e Brasil"], correct: 1 },
            { q: "A segunda fase da obra de Eça (1900–1901) caracteriza-se por:", options: ["Denúncia violenta do clero","Conciliar tradição e modernidade","Abandono da prosa pela poesia","Volta total ao Romantismo"], correct: 1 },
          ],
        },
      ],
    },
);
