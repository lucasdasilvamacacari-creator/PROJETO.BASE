window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push({
  id: "biologia-a",
  name: "Biologia A",
  emoji: "🧬",
  contents: [
    {
      id: "fungos",
      title: "Fungos",
      sections: [
        {
          heading: "Classificação dos fungos",
          body: `Leveduriformes
• Unicelular

Filamentosos
• Pluricelulares (formam hifa)

Carnosos
• Pluricelulares (formam hifas)`,
        },
        {
          heading: "Fungos no geral",
          body: `• Eucariontes
• Uni ou pluricelulares
• Heterótrofos
• Relações ecológicas:
   – Decompositores (saprófagos)
   – Parasitas (micose)
   – Mutualistas`,
        },
        {
          heading: "Características",
          body: `• Parede celular rica em quitina
• Armazena glicogênio
• Digestão extracorpórea
• Hifas → unidades vegetativas e reprodutivas dos fungos

Tipos de hifas
Hifa septada → possui divisões/septos.
Hifa asseptada → não possui septos.`,
          visual: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="text-center">
    <svg viewBox="0 0 220 70" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="200" height="30" rx="15" fill="none" stroke="#5C4630" stroke-width="2.5"/>
      <line x1="55" y1="20" x2="55" y2="50" stroke="#A8763E" stroke-width="2"/>
      <line x1="100" y1="20" x2="100" y2="50" stroke="#A8763E" stroke-width="2"/>
      <line x1="145" y1="20" x2="145" y2="50" stroke="#A8763E" stroke-width="2"/>
      <line x1="190" y1="20" x2="190" y2="50" stroke="#A8763E" stroke-width="2"/>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Hifa septada — possui divisões (septos)</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 220 70" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="200" height="30" rx="15" fill="none" stroke="#5C4630" stroke-width="2.5"/>
      <circle cx="55" cy="35" r="4" fill="#A8763E"/>
      <circle cx="100" cy="35" r="4" fill="#A8763E"/>
      <circle cx="145" cy="35" r="4" fill="#A8763E"/>
      <circle cx="190" cy="35" r="4" fill="#A8763E"/>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Hifa asseptada — sem septos (núcleos livres)</p>
  </div>
</div>`,
        },
        {
          heading: "Principais grupos",
          body: `• Zigomicetos
• Ascomicetos
• Basidiomicetos
• Deuteromicetos → fungos incompletos, não fazem reprodução sexuada.`,
        },
        {
          heading: "Condições para o desenvolvimento",
          body: `• Água
• Temperatura
• Nutrientes`,
        },
        {
          heading: "Reprodução",
          body: `Assexuada
• Esporulação
• Brotamento

Sexuada
• Fusão de hifas
• Plasmogamia → fusão de citoplasma
• Cariogamia → fusão de núcleos`,
        },
      ],
      quiz: [
        {
          q: "Os fungos leveduriformes são caracterizados por serem:",
          options: ["Unicelulares", "Pluricelulares formando hifas", "Autótrofos", "Possuidores de clorofila"],
          correct: 0,
        },
        {
          q: "Os fungos filamentosos são:",
          options: ["Pluricelulares e formam hifa", "Unicelulares", "Autótrofos", "Desprovidos de parede celular"],
          correct: 0,
        },
        {
          q: "Quanto à nutrição, os fungos são classificados como:",
          options: ["Heterótrofos", "Autótrofos", "Fotossintetizantes", "Quimiolitotróficos"],
          correct: 0,
        },
        {
          q: "A parede celular dos fungos é rica em:",
          options: ["Quitina", "Celulose", "Peptidoglicano", "Queratina"],
          correct: 0,
        },
        {
          q: "Os fungos armazenam energia principalmente na forma de:",
          options: ["Glicogênio", "Amido", "Celulose", "Apenas lipídios"],
          correct: 0,
        },
        {
          q: "Como ocorre a digestão nos fungos?",
          options: ["Digestão extracorpórea", "Digestão intracelular apenas", "Fotossíntese", "Quimiossíntese"],
          correct: 0,
        },
        {
          q: "A hifa septada se diferencia da asseptada por:",
          options: ["Possuir divisões/septos", "Ser exclusiva de leveduras", "Não ter função reprodutiva", "Ser encontrada apenas em zigomicetos"],
          correct: 0,
        },
        {
          q: "Qual grupo de fungos é descrito como incompleto, por não realizar reprodução sexuada?",
          options: ["Deuteromicetos", "Ascomicetos", "Basidiomicetos", "Zigomicetos"],
          correct: 0,
        },
        {
          q: "Quais são as condições necessárias para o desenvolvimento dos fungos?",
          options: ["Água, temperatura e nutrientes", "Luz solar, CO₂ e água", "Apenas luz solar", "Apenas nutrientes"],
          correct: 0,
        },
        {
          q: "Na reprodução sexuada dos fungos, a plasmogamia corresponde a:",
          options: ["Fusão de citoplasma", "Fusão de núcleos", "Formação de esporos", "Brotamento"],
          correct: 0,
        },
      ],
    },
    {
      id: "briofitas",
      title: "Briófitas",
      sections: [
        {
          heading: "Principais grupos",
          body: `• Musgos
• Hepáticas
• Antóceros`,
        },
        {
          heading: "Características",
          body: `• Não possuem xilema ou floema
• Dependentes da água para reprodução
• Suas gametas usam a água para se deslocar.
• Plantas são encontradas em ambientes úmidos e sombreados.`,
        },
        {
          heading: "Fases",
          body: `Fase dominante
Gametófito → clorofilado

Fase reprodutiva
Esporófito → não é clorofilado`,
          visual: `
<svg viewBox="0 0 200 220" class="w-full max-w-[220px] mx-auto" xmlns="http://www.w3.org/2000/svg">
  <path d="M100,210 C80,160 80,120 100,90 C120,120 120,160 100,210 Z" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
  <line x1="100" y1="90" x2="100" y2="40" stroke="#A8763E" stroke-width="3"/>
  <ellipse cx="100" cy="30" rx="12" ry="16" fill="none" stroke="#A8763E" stroke-width="2.5"/>
  <circle cx="80" cy="130" r="5" fill="#5C4630"/>
  <circle cx="120" cy="150" r="5" fill="#3E2F20"/>
  <text x="106" y="26" font-size="9" fill="#A8763E" font-weight="600">Esporófito (2n)</text>
  <text x="106" y="49" font-size="8.5" fill="#A8763E">não clorofilado</text>
  <text x="8" y="128" font-size="8.5" fill="#5C4630">Anterídio ♂</text>
  <text x="128" y="153" font-size="8.5" fill="#3E2F20">Arquegônio ♀</text>
  <text x="45" y="204" font-size="9.5" fill="#5C4630" font-weight="600">Gametófito (n) — clorofilado</text>
</svg>`,
        },
        {
          heading: "Órgãos produtores de gametas",
          body: `Masculino
Anterídio → produz os gametas masculinos.

Feminino
Arquegônio → produz o gameta feminino.`,
        },
      ],
      quiz: [
        {
          q: "Quais são os principais grupos de briófitas?",
          options: ["Musgos, hepáticas e antóceros", "Musgos, samambaias e pteridófitas", "Algas, líquens e musgos", "Gimnospermas e angiospermas"],
          correct: 0,
        },
        {
          q: "As briófitas não possuem quais tecidos condutores?",
          options: ["Xilema e floema", "Apenas floema", "Apenas xilema", "Parede celular"],
          correct: 0,
        },
        {
          q: "Por que as briófitas dependem da água para a reprodução?",
          options: ["Porque seus gametas usam a água para se deslocar", "Porque realizam fotossíntese na água", "Porque não possuem clorofila", "Porque seus esporos flutuam no ar"],
          correct: 0,
        },
        {
          q: "Em quais ambientes as briófitas costumam ser encontradas?",
          options: ["Ambientes úmidos e sombreados", "Desertos áridos", "Águas profundas do oceano", "Ambientes com alta salinidade"],
          correct: 0,
        },
        {
          q: "Nas briófitas, qual é a fase dominante do ciclo de vida?",
          options: ["Gametófito, que é clorofilado", "Esporófito, que é clorofilado", "Gametófito, que não é clorofilado", "Esporófito, que não é clorofilado"],
          correct: 0,
        },
        {
          q: "A fase reprodutiva das briófitas, o esporófito, é caracterizada por:",
          options: ["Não ser clorofilado", "Ser a fase dominante", "Ser clorofilado e dominante", "Realizar fotossíntese intensa"],
          correct: 0,
        },
        {
          q: "Qual órgão produz os gametas masculinos nas briófitas?",
          options: ["Anterídio", "Arquegônio", "Esporófito", "Rizoide"],
          correct: 0,
        },
        {
          q: "Qual órgão produz o gameta feminino nas briófitas?",
          options: ["Arquegônio", "Anterídio", "Esporângio", "Talo"],
          correct: 0,
        },
        {
          q: "As briófitas dependem da água principalmente para:",
          options: ["A reprodução, pelo deslocamento dos gametas", "A fotossíntese", "A germinação de sementes", "O transporte de seiva"],
          correct: 0,
        },
        {
          q: "Um exemplo de grupo pertencente às briófitas é:",
          options: ["Os musgos", "As samambaias", "Os pinheiros", "As gramíneas"],
          correct: 0,
        },
      ],
      extraQuizLabel: "Treino do PDF",
      extraQuizHeading: "Questões da lista do professor",
      extraQuiz: [
        { q: "(UFPR/Puccamp) Nos esquemas comparando um Musgo e uma Angiosperma, as estruturas indicadas pelas setas representam:", options: ["Estruturas formadoras de gametas masculinos", "Locais onde ocorre a fecundação", "Locais onde ocorre a meiose", "Estruturas formadoras de gametas femininos"], correct: 0 },
        { q: "(PUC-RS) Sobre os musgos: (1) Pertencem ao grupo das briófitas. (2) São heterotróficos absortivos. (3) São desprovidos de traqueídeos. (4) Preferem solos secos e frios. (5) São parentes das hepáticas. A sequência correta (V/F) é:", options: ["V - F - V - F - V", "F - F - V - V - V", "F - V - F - V - F", "V - V - F - V - V"], correct: 0 },
        { q: "Um estudante pesquisou musgos em dois livros com classificações diferentes: Livro A (vegetais inferiores p.201 / intermediários sem sementes p.202 / superiores com sementes p.204) e Livro B (criptógamos avasculares p.340 / vasculares p.341 / fanerógamos p.342). Em quais páginas ele encontrará informações sobre musgos?", options: ["202 e 340", "201 e 340", "202 e 341", "204 e 342"], correct: 0 },
        { q: "Uma planta é descrita como: 'pequeno porte, encontrada em locais úmidos e sombreados, cresce no solo ou sobre troncos, possui rizoides e não possui vasos condutores.' A que grupo ela pertence?", options: ["Briófitas", "Pteridófitas", "Gimnospermas", "Angiospermas"], correct: 0 },
        { q: "Por que briófitas e pteridófitas costumam ser cultivadas em ambientes úmidos e sombreados?", options: ["Por particularidades de seus ciclos de vida, que dependem de água para a reprodução", "Porque são plantas avasculares que não realizam fotossíntese", "Porque não sobrevivem à luz solar direta em nenhuma hipótese", "Porque produzem sementes que só germinam na água"], correct: 0 },
        { q: "Um musgo (briófita) e uma samambaia (pteridófita) apresentam em comum:", options: ["Nítida alternância de gerações e ocorrência de meiose espórica", "Presença de tecidos de condução e sementes", "Apenas a presença de flores", "Nenhuma característica em comum"], correct: 0 },
      ],
    },
    {
      id: "ciclo-da-vida",
      title: "Ciclo da vida",
      sections: [
        {
          heading: "Ploidia",
          body: `Ploidia: carga cromossômica.

Mitose
Célula-mãe → 2 células-filhas idênticas à célula-mãe
Relacionada a:
• Crescimento
• Regeneração
• Reprodução (seres haploides)

Meiose
Célula-mãe → 4 células-filhas diferentes entre si
Relacionada à:
• Reprodução (seres diploides)

Para lembrar
R1 = Meiose
E1 = Mitose
2n = diploide
n = haploide`,
        },
        {
          heading: "Ciclo haplobionte haplonte",
          body: `Exemplos: Algas — Adultos haploides (n)

Sequência:
Organismo adulto (n) → Gametas (n) → Zigoto (2n) → Células (n) → Organismo jovem (n) → Adulto (n)

🔑 Ponto principal
O organismo adulto é haploide (n).
A meiose acontece no zigoto.`,
          visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Organismo adulto (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Gametas (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>Fecundação</span></div>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Zigoto (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>R1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Células (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Organismo jovem (n)</div>
  <div class="text-ochre text-xs">↓</div>
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Adulto (n)</div>
</div>`,
        },
        {
          heading: "Ciclo haplobionte diplonte",
          body: `Exemplos: Animais (homem) — Adultos diploides

Sequência:
Organismo adulto (2n) → Gametas (n) → Zigoto (2n) → Organismo jovem (2n) → Adulto (2n)

🔑 Ponto principal
O organismo adulto é diploide (2n).
A meiose ocorre para formar os gametas.`,
          visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Organismo adulto (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>R1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Gametas (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>Fecundação</span></div>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Zigoto (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Organismo jovem (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Adulto (2n)</div>
</div>`,
        },
        {
          heading: "Ciclo diplobionte",
          body: `Exemplos: Vegetais

Nesse ciclo aparecem duas fases: Gametófito (n) e Esporófito (2n).

Sequência:
Esporófito adulto (2n) → Esporos (n) → Gametófito jovem (n) → Gametófito adulto (n) → Gametas (n) → Zigoto (2n) → Esporófito jovem (2n) → Esporófito adulto (2n)

🔑 Ponto principal
Existe alternância de gerações: Esporófito (2n) ↔ Gametófito (n)`,
          visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Esporófito adulto (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>R1 · meiose</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Esporos (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>Germinação</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Gametófito jovem (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1 · mitose</span></div>
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Gametófito adulto (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Gametas (n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>Fecundação</span></div>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Zigoto (2n)</div>
  <div class="flex items-center gap-1 text-ochre text-xs font-semibold"><span>↓</span><span>E1</span></div>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Esporófito jovem (2n)</div>
  <div class="text-ochre text-xs">↓</div>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Esporófito adulto (2n)</div>
</div>`,
        },
        {
          heading: "🧠 O OURO — Ciclos da vida",
          body: `E1 = Mitose
R1 = Meiose
n = Haploide
2n = Diploide`,
          visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="border-b-2 border-espresso/70">
        <th class="text-left py-2 pr-3 font-display text-bark">Ciclo</th>
        <th class="text-left py-2 pr-3 font-display text-bark">Adulto</th>
        <th class="text-left py-2 font-display text-bark">Onde ocorre a meiose?</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-sand/60">
        <td class="py-2 pr-3 text-bark/80">Haplobionte haplonte</td>
        <td class="py-2 pr-3 text-bark/80">Haploide (n)</td>
        <td class="py-2 text-bark/80">No zigoto</td>
      </tr>
      <tr class="border-b border-sand/60">
        <td class="py-2 pr-3 text-bark/80">Haplobionte diplonte</td>
        <td class="py-2 pr-3 text-bark/80">Diploide (2n)</td>
        <td class="py-2 text-bark/80">Na formação dos gametas</td>
      </tr>
      <tr>
        <td class="py-2 pr-3 text-bark/80">Diplobionte</td>
        <td class="py-2 pr-3 text-bark/80">Alternância n ↔ 2n</td>
        <td class="py-2 text-bark/80">Na formação dos esporos</td>
      </tr>
    </tbody>
  </table>
</div>`,
        },
      ],
      quiz: [
        {
          q: "O que a ploidia representa?",
          options: ["A carga cromossômica", "O tipo de célula", "A quantidade de mitocôndrias", "O tamanho do núcleo"],
          correct: 0,
        },
        {
          q: "Na mitose, uma célula-mãe origina:",
          options: ["2 células-filhas idênticas à célula-mãe", "4 células-filhas diferentes entre si", "3 células-filhas idênticas", "1 célula-filha diferente"],
          correct: 0,
        },
        {
          q: "Na meiose, uma célula-mãe origina:",
          options: ["4 células-filhas diferentes entre si", "2 células-filhas idênticas", "4 células-filhas idênticas", "1 célula-filha idêntica"],
          correct: 0,
        },
        {
          q: "Segundo a regra para lembrar, o que significa 'R1'?",
          options: ["Meiose", "Mitose", "Reprodução", "Regeneração"],
          correct: 0,
        },
        {
          q: "E o que significa 'E1'?",
          options: ["Mitose", "Meiose", "Esporulação", "Espécie"],
          correct: 0,
        },
        {
          q: "No ciclo haplobionte haplonte (exemplo: algas), o organismo adulto é:",
          options: ["Haploide (n)", "Diploide (2n)", "Alternante entre n e 2n", "Triploide (3n)"],
          correct: 0,
        },
        {
          q: "No ciclo haplobionte haplonte, em que momento ocorre a meiose?",
          options: ["No zigoto", "Na formação dos gametas", "Na formação dos esporos", "Não ocorre meiose nesse ciclo"],
          correct: 0,
        },
        {
          q: "No ciclo haplobionte diplonte (exemplo: animais/homem), o organismo adulto é:",
          options: ["Diploide (2n)", "Haploide (n)", "Alternante entre n e 2n", "Triploide (3n)"],
          correct: 0,
        },
        {
          q: "No ciclo diplobionte (exemplo: vegetais), o que caracteriza esse ciclo?",
          options: ["Alternância de gerações entre esporófito (2n) e gametófito (n)", "O adulto é sempre haploide", "O adulto é sempre diploide sem alternância", "A meiose nunca ocorre"],
          correct: 0,
        },
        {
          q: "No ciclo diplobionte, a meiose ocorre:",
          options: ["Na formação dos esporos", "No zigoto", "Na formação dos gametas", "Não ocorre nesse ciclo"],
          correct: 0,
        },
      ],
    },
    {
      id: "pteridofitas",
      title: "Pteridófitas",
      sections: [
        {
          heading: "1. O que são as Pteridófitas",
          body: `As pteridófitas são plantas vasculares sem sementes. Elas representam um passo importante na evolução vegetal por apresentarem tecidos condutores para o transporte de água e nutrientes.

Exemplos comuns:
• Samambaias
• Xaxins
• Avencas`,
        },
        {
          heading: "2. Estrutura corporal",
          body: `O corpo de uma pteridófita é bem desenvolvido e dividido em partes bem definidas:

Raiz: fixa a planta e absorve água e sais minerais.
Caule: geralmente subterrâneo (do tipo rizoma).
Folha: responsável pela fotossíntese.
Báculo: nome dado à folha jovem enquanto ainda está enrolada.`,
        },
        {
          heading: "3. Vasos condutores (Traqueófitas)",
          body: `As pteridófitas foram as primeiras plantas a possuir vasos condutores de seiva. Isso permitiu que elas atingissem tamanhos maiores que as briófitas.

Os vasos são divididos em:
Xilema: transporta a seiva bruta (água e sais minerais) das raízes para as folhas.
Floema: transporta a seiva elaborada (açúcares produzidos na fotossíntese) das folhas para o restante da planta.

O que elas não possuem:
• Não produzem sementes.
• Não produzem flores.
• Não produzem frutos.`,
          visual: `
<div class="grid grid-cols-2 gap-3 max-w-sm mx-auto text-center text-xs">
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">Xilema</p>
    <p class="text-bark/70">Seiva bruta<br/>(água e sais minerais)</p>
    <p class="text-ochre font-medium mt-1">Raiz → Folhas ↑</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-semibold text-bark mb-1">Floema</p>
    <p class="text-bark/70">Seiva elaborada<br/>(açúcares)</p>
    <p class="text-ochre font-medium mt-1">Folhas → Planta ↓</p>
  </div>
</div>`,
        },
        {
          heading: "4. Esporos e Heterosporia",
          body: `A maioria das pteridófitas produz um único tipo de esporo, mas algumas espécies apresentam heterosporia:

Heterosporos: produção de dois tipos diferentes de esporos (um masculino e um feminino, que darão origem a gametófitos distintos).`,
        },
        {
          heading: "5. As duas fases do ciclo de vida",
          body: `O ciclo das pteridófitas alterna entre duas gerações:

Esporófito (2n)
• É a fase duradoura (a planta grande que enxergamos).
• É diploide (2n).
• Produz esporos.

Gametófito (n)
• É a fase transitória (pequena e de vida curta).
• É haploide (n).
• Também é chamado de prótalo (tem formato de coração).
• Produz gametas.`,
          visual: `
<div class="grid grid-cols-2 gap-3 max-w-sm mx-auto text-center text-xs">
  <div class="rounded-xl bg-espresso text-cream px-3 py-4">
    <p class="font-display text-base mb-1">Esporófito (2n)</p>
    <p class="opacity-80">Fase duradoura</p>
    <p class="opacity-80">Diploide · produz esporos</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <p class="font-display text-base text-espresso mb-1">Gametófito (n)</p>
    <p class="text-bark/70">Fase transitória (prótalo)</p>
    <p class="text-bark/70">Haploide · produz gametas</p>
  </div>
</div>`,
        },
        {
          heading: "6. Estruturas reprodutivas",
          body: `Para a reprodução acontecer, o prótalo (gametófito) desenvolve estruturas específicas:

Anterídeo: estrutura masculina que produz os anterozoides (n).
Anterozoide: gameta masculino, móvel e dotado de flagelos.

Arquegônio: estrutura feminina que produz a oosfera (n).
Oosfera: gameta feminino, imóvel.`,
          visual: `
<svg viewBox="0 0 200 180" class="w-full max-w-[200px] mx-auto" xmlns="http://www.w3.org/2000/svg">
  <path d="M100,40 C60,0 10,40 30,90 C45,125 80,150 100,170 C120,150 155,125 170,90 C190,40 140,0 100,40 Z" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
  <circle cx="70" cy="90" r="5" fill="#5C4630"/>
  <text x="8" y="105" font-size="9" fill="#5C4630">Anterídeo ♂</text>
  <circle cx="130" cy="112" r="5" fill="#3E2F20"/>
  <text x="128" y="135" font-size="9" fill="#3E2F20">Arquegônio ♀</text>
  <text x="60" y="25" font-size="10" fill="#5C4630" font-weight="600">Prótalo (n)</text>
</svg>`,
        },
        {
          heading: "7. Dependência da água para reprodução",
          body: `As pteridófitas ainda dependem da água líquida para se reproduzirem.
O anterozoide precisa nadar através de uma gota de água da chuva ou orvalho do anterídeo até o arquegônio para encontrar a oosfera.`,
        },
        {
          heading: "8. O ciclo reprodutivo passo a passo",
          body: `A reprodução ocorre na seguinte sequência lógica:

1. Formação dos esporos: No esporófito adulto (2n), os esporângios realizam Meiose (R!) e liberam esporos (n).
2. Germinação: Os esporos caem no solo úmido e germinam, formando o Prótalo (gametófito n).
3. Produção de gametas: O prótalo desenvolve o Anterídeo (com anterozoides) e o Arquegônio (com a oosfera).
4. Fecundação: Com a água, o anterozoide nada até a oosfera e ocorre a fertilização.
5. Crescimento: A união dos gametas forma o Zigoto (2n).
6. Desenvolvimento: O zigoto sofre Mitoses (E!), originando o Esporófito jovem (2n), que cresce e se torna um Esporófito adulto (2n), recomeçando o ciclo.`,
        },
        {
          heading: "9. Analogia para entender o ciclo de vida",
          body: `Para entender o ciclo sem decorar, pense nas pteridófitas como uma história de duas gerações:

Esporófito = Árvore gigante
É a fábrica principal (2n) que lança pequenas sementes ao vento (esporos n).

Prótalo = Acampamento temporário
O esporo cai na terra e vira uma tenda minúscula (gametófito n).

Água = O barco/ponte
O soldadinho (anterozoide) precisa flutuar na água para chegar até a base (oosfera) do outro lado da tenda.

Novo Esporófito = A nova construção
Quando se encontram, o projeto junta as duas partes (2n) e constrói uma nova árvore gigante no lugar do acampamento.`,
        },
        {
          heading: "10. O processo completo",
          body: `Agora juntando tudo:
Esporófito Adulto (2n) → Meiose no Esporângio → Esporos (n) → Caem no solo e germinam → Prótalo/Gametófito (n) → Desenvolve Anterídeo e Arquegônio → Liberação de Anterozoides (n) e Oosfera (n) → Natação com ajuda da água → Fecundação → Zigoto (2n) → Mitose → Esporófito Jovem (2n) → Esporófito Adulto (2n)

O mais importante para entender:
• O esporófito (2n) é a planta principal e duradoura.
• Os esporos (n) nascem por meiose nos esporângios.
• O esporo vira o prótalo (n), que fabrica os gametas.
• A água possibilita o encontro dos gametas.
• A fecundação gera o zigoto (2n), que vira a nova samambaia.`,
          visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Esporófito adulto (2n)</div>
  <span class="text-ochre text-xs">↓ meiose</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Esporos (n)</div>
  <span class="text-ochre text-xs">↓ germinação</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Prótalo (n)</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Anterídeo + Arquegônio</div>
  <span class="text-ochre text-xs">↓ água</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Fecundação</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">Zigoto (2n)</div>
  <span class="text-ochre text-xs">↓ mitose</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Esporófito jovem (2n)</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Esporófito adulto (2n)</div>
</div>`,
        },
      ],
      quiz: [
        { q: "As pteridófitas são classificadas como:", options: ["Plantas vasculares sem sementes", "Plantas vasculares com sementes", "Plantas avasculares", "Algas pluricelulares"], correct: 0 },
        { q: "Qual exemplo de pteridófita é citado no conteúdo?", options: ["Samambaia", "Musgo", "Pinheiro", "Alga"], correct: 0 },
        { q: "Como é chamada a folha jovem enquanto ainda está enrolada?", options: ["Báculo", "Rizoma", "Prótalo", "Esporângio"], correct: 0 },
        { q: "Qual vaso condutor transporta a seiva bruta?", options: ["Xilema", "Floema", "Rizoma", "Prótalo"], correct: 0 },
        { q: "Qual vaso condutor transporta a seiva elaborada?", options: ["Floema", "Xilema", "Rizoma", "Esporângio"], correct: 0 },
        { q: "O que as pteridófitas NÃO produzem, segundo o conteúdo?", options: ["Sementes, flores e frutos", "Esporos", "Raízes", "Vasos condutores"], correct: 0 },
        { q: "Na fase esporófito (2n), a planta é:", options: ["Diploide e produz esporos", "Haploide e produz gametas", "Diploide e produz gametas", "Haploide e produz esporos"], correct: 0 },
        { q: "O gametófito das pteridófitas também é chamado de:", options: ["Prótalo", "Rizoma", "Esporângio", "Báculo"], correct: 0 },
        { q: "O anterozoide é:", options: ["O gameta masculino, móvel e com flagelos", "O gameta feminino, imóvel", "A célula que forma o esporângio", "O tecido condutor de seiva"], correct: 0 },
        { q: "Por que as pteridófitas ainda dependem da água para se reproduzir?", options: ["Porque o anterozoide precisa nadar até a oosfera", "Porque os esporos só germinam na água", "Porque o xilema só funciona submerso", "Porque não possuem flores"], correct: 0 },
      ],
      extraQuizLabel: "Treino do PDF",
      extraQuizHeading: "Questões da lista do professor",
      extraQuiz: [
        { q: "Dentre os groups de plantas estudados, é correto afirmar que possuem flor exclusivamente:", options: ["As angiospermas", "As pteridófitas", "As briófitas", "Os fungos"], correct: 0 },
        { q: "Gametas masculinos flagelados, que necessitam de água para encontrar os gametas femininos, são encontrados somente em:", options: ["Algas, briófitas e pteridófitas", "Pteridófitas e angiospermas", "Apenas em angiospermas", "Apenas em gimnospermas"], correct: 0 },
        { q: "Sobre as pteridófitas: são o grupo mais antigo de plantas vasculares; possuem caule chamado rizoma; e sua reprodução envolve a produção de esporos. É correto afirmar que:", options: ["Essas três características estão corretas, mas as pteridófitas não possuem flores", "As pteridófitas possuem flores minúsculas visíveis apenas com lupa", "As pteridófitas não possuem rizoma", "As pteridófitas se reproduzem exclusivamente por sementes"], correct: 0 },
        { q: "Relacionando os grupos às suas características: briófitas não apresentam vasos para condução; angiospermas apresentam flores e frutos; pteridófitas são as primeiras plantas vasculares; gimnospermas são as primeiras a formar sementes. Essa associação está:", options: ["Correta", "Incorreta apenas quanto às pteridófitas", "Incorreta apenas quanto às gimnospermas", "Totalmente incorreta"], correct: 0 },
      ],
    },
    {
      id: "gimnospermas",
      title: "Gimnospermas",
      sections: [
        {
          heading: "Gimnospermas",
          body: `Folhas aciculiformes (agulhas).
Copa em forma de cone (evita o acúmulo de neve).

Lembre-se:
Pinheiros, ciprestes e araucárias.
São vasculares (traqueófitas): xilema e floema.
Possuem folhas, caules e raízes.
Esporófitos produzem sementes.
Não possuem fruto nem flor.
Adaptadas ao clima frio.
Não dependem da água para reprodução: dispersão do grão de pólen.

Importante: o grão de pólen não é o gameta; ele é o gametófito masculino.`,
          visual: `
<div class="grid grid-cols-2 gap-2 max-w-xs mx-auto text-xs">
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 flex items-center justify-between"><span class="text-bark">Vascular</span><span class="text-correct font-bold">✓</span></div>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 flex items-center justify-between"><span class="text-bark">Semente</span><span class="text-correct font-bold">✓</span></div>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 flex items-center justify-between"><span class="text-bark">Flor</span><span class="text-wrong font-bold">✗</span></div>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 flex items-center justify-between"><span class="text-bark">Fruto</span><span class="text-wrong font-bold">✗</span></div>
</div>`,
        },
        {
          heading: "Grão de pólen",
          body: `Estrutura:
Núcleo polínico.
Núcleo gerador.
Dois sacos aéreos laterais ocos.`,
          visual: `
<svg viewBox="0 0 200 120" class="w-full max-w-xs mx-auto" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="55" rx="32" ry="22" fill="none" stroke="#5C4630" stroke-width="2.5"/>
  <circle cx="63" cy="55" r="17" fill="none" stroke="#A8763E" stroke-width="2"/>
  <circle cx="137" cy="55" r="17" fill="none" stroke="#A8763E" stroke-width="2"/>
  <circle cx="92" cy="52" r="3" fill="#3E2F20"/>
  <circle cx="108" cy="58" r="3" fill="#3E2F20"/>
  <text x="68" y="96" font-size="9" fill="#A8763E">saco aéreo</text>
  <text x="128" y="96" font-size="9" fill="#A8763E">saco aéreo</text>
  <text x="60" y="20" font-size="9" fill="#5C4630">núcleo polínico + núcleo gerador</text>
</svg>`,
        },
        {
          heading: "Dispersão do pólen",
          body: `Vento → Anemofilia.`,
        },
        {
          heading: "Semente",
          body: `3N: 2N do embrião + N do endosperma primário.`,
        },
        {
          heading: "Estróbilo (cone)",
          body: `Estruturas reprodutivas:
Estróbilo (cone).
Escama.
Esporângio.`,
          visual: `
<svg viewBox="0 0 160 200" class="w-full max-w-[160px] mx-auto" xmlns="http://www.w3.org/2000/svg">
  <path d="M80,10 L140,190 L20,190 Z" fill="none" stroke="#5C4630" stroke-width="2.5"/>
  <line x1="35" y1="150" x2="125" y2="150" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="45" y1="115" x2="115" y2="115" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="55" y1="80" x2="105" y2="80" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="65" y1="45" x2="95" y2="45" stroke="#A8763E" stroke-width="1.5"/>
  <circle cx="35" cy="150" r="3" fill="#3E2F20"/>
  <text x="0" y="168" font-size="8.5" fill="#5C4630">escama</text>
  <text x="0" y="180" font-size="8.5" fill="#5C4630">(com esporângio)</text>
</svg>`,
        },
      ],
      quiz: [
        { q: "Qual é o formato característico das folhas das gimnospermas?", options: ["Aciculiformes (em forma de agulha)", "Largas e arredondadas", "Compostas e recortadas", "Ausentes"], correct: 0 },
        { q: "Por que a copa das gimnospermas costuma ter formato de cone?", options: ["Para evitar o acúmulo de neve", "Para atrair polinizadores", "Para reter mais água", "Para produzir mais frutos"], correct: 0 },
        { q: "Quais são exemplos de gimnospermas citados no conteúdo?", options: ["Pinheiros, ciprestes e araucárias", "Samambaias e avencas", "Musgos e hepáticas", "Orquídeas e bromélias"], correct: 0 },
        { q: "As gimnospermas são plantas:", options: ["Vasculares (traqueófitas), com xilema e floema", "Avasculares, sem tecidos condutores", "Sem raízes, caules ou folhas", "Exclusivamente aquáticas"], correct: 0 },
        { q: "O que produz as sementes nas gimnospermas?", options: ["Os esporófitos", "Os gametófitos apenas", "As flores", "Os frutos"], correct: 0 },
        { q: "As gimnospermas possuem fruto e flor?", options: ["Não possuem nem fruto nem flor", "Possuem fruto, mas não flor", "Possuem flor, mas não fruto", "Possuem ambos"], correct: 0 },
        { q: "As gimnospermas dependem da água para a reprodução?", options: ["Não; dependem da dispersão do grão de pólen", "Sim, totalmente", "Apenas em climas frios", "Apenas durante a germinação da semente"], correct: 0 },
        { q: "O grão de pólen da gimnosperma é:", options: ["O gametófito masculino (não é o próprio gameta)", "O próprio gameta masculino", "O óvulo", "O fruto da planta"], correct: 0 },
        { q: "Como ocorre a dispersão do pólen nas gimnospermas?", options: ["Pelo vento (anemofilia)", "Por insetos exclusivamente", "Pela água exclusivamente", "Por pássaros exclusivamente"], correct: 0 },
        { q: "A semente da gimnosperma é formada por:", options: ["2N do embrião + N do endosperma primário (3N no total)", "Apenas células haploides", "Apenas células diploides", "Um fruto protetor"], correct: 0 },
      ],
      extraQuizLabel: "Treino do PDF",
      extraQuizHeading: "Questões da lista do professor",
      extraQuiz: [
        { q: "Araucária, eucalipto, samambaia e orquídea são exemplos, respectivamente, de:", options: ["Gimnosperma, Dicotiledônea, Pteridófita e Monocotiledônea", "Pteridófita, Angiosperma, Gimnosperma e Monocotiledônea", "Monocotiledônea, Pteridófita, Gimnosperma e Dicotiledônea", "Gimnosperma, Monocotiledônea, Dicotiledônea e Pteridófita"], correct: 0 },
        { q: "O grande sucesso das plantas fanerogâmicas (gimnospermas e angiospermas) na conquista do ambiente terrestre pode ser atribuído a duas adaptações principais:", options: ["Independência da água para reprodução e propagação por meio de sementes", "Propagação por meio de frutos e reprodução por esporos", "Dependência da água para reprodução e ausência de sementes", "Reprodução exclusivamente por gametas flagelados"], correct: 0 },
        { q: "Uma planta apresenta xilema e floema bem desenvolvidos, flores diferenciadas e estruturas que atraem polinizadores. Sobre essa planta, é correto afirmar que:", options: ["Ela não é uma Gimnosperma, já que as gimnospermas não produzem flores", "Ela é obrigatoriamente uma Gimnosperma", "Ela não possui transporte eficiente de seiva", "Ela não pode ser uma planta Dicotiledônea"], correct: 0 },
        { q: "Em um esquema que separa as plantas em avasculares, vasculares com sementes (com ou sem frutos) e vasculares sem sementes, os grupos correspondentes são, respectivamente:", options: ["Briófitas, Angiospermas, Gimnospermas e Pteridófitas", "Pteridófitas, Gimnospermas, Angiospermas e Briófitas", "Briófitas, Gimnospermas, Angiospermas e Pteridófitas", "Gimnospermas, Briófitas, Pteridófitas e Angiospermas"], correct: 0 },
        { q: "São características comuns às gimnospermas e às angiospermas:", options: ["Sistema vascular e presença de grãos de pólen com tubo polínico", "Apenas a presença de sementes nuas", "Ausência total de sistema vascular", "Reprodução exclusiva por esporos"], correct: 0 },
      ],
    },
    {
      id: "organologia",
      title: "Organologia (Raiz, Caule e Fruto)",
      sections: [
        {
          heading: "Monocotiledôneas × Eudicotiledôneas",
          body: `As plantas com flor (angiospermas) se dividem em dois grandes grupos, diferenciados logo na semente:

Monocotiledôneas
• 1 cotilédone
• Nervuras paralelas nas folhas
• Raiz fasciculada (em cabeleira)
• Ciclo de vida geralmente curto
• Exemplos: milho, arroz, capim, bananeira

Eudicotiledôneas
• 2 cotilédones
• Nervuras ramificadas nas folhas
• Raiz axial (pivotante)
• Ciclo de vida geralmente longo
• Exemplos: feijão, mangueira, girassol, cenoura

A ilustração abaixo compara as três diferenças (semente, folha e raiz) lado a lado.`,
          visual: `<svg viewBox="0 0 640 412" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<rect width="640" height="412" rx="12" fill="#F4EEE1"/>
<text x="270" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">MONOCOTILEDÔNEA</text><text x="270" y="46" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">milho, arroz, capim, bananeira</text><text x="510" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">EUDICOTILEDÔNEA</text><text x="510" y="46" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">feijão, girassol, mangueira, cenoura</text><line x1="390" y1="16" x2="390" y2="410" stroke="#C9B18C" stroke-dasharray="4 4"/><line x1="16" y1="150" x2="624" y2="150" stroke="#C9B18C"/><line x1="16" y1="265" x2="624" y2="265" stroke="#C9B18C"/><text x="24" y="100" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">SEMENTE</text><text x="24" y="214" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">FOLHA</text><text x="24" y="330" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">RAIZ</text><ellipse cx="240" cy="100" rx="28" ry="38" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/>
<path d="M240,66 Q262,100 240,134 Q228,100 240,66 Z" fill="#A8763E" stroke="#5C4630"/><text x="280" y="96" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">1 cotilédone</text><text x="280" y="112" text-anchor="start" font-size="10" fill="#5C4630">(grão de milho)</text><path d="M476,100 C476,64 506,62 507,100 C506,138 476,136 476,100 Z" fill="#A8763E" stroke="#5C4630" stroke-width="1.5"/>
<path d="M480,100 C480,64 510,62 511,100 C510,138 480,136 480,100 Z" transform="translate(30 0)" fill="#A8763E" stroke="#5C4630" stroke-width="1.5"/>
<path d="M506,90 q4,-8 8,0" fill="none" stroke="#5B7553" stroke-width="2"/><text x="554" y="96" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">2 cotilédones</text><text x="554" y="112" text-anchor="start" font-size="10" fill="#5C4630">(feijão aberto)</text><path d="M160,208 Q270,176 375,200 Q270,228 160,208 Z" fill="#5B7553" stroke="#3E2F20" stroke-width="1"/><path d="M166,208 Q270,190 370,200" fill="none" stroke="#E4D9C4" stroke-width="1"/><path d="M166,208 Q270,196 370,200" fill="none" stroke="#E4D9C4" stroke-width="1"/><path d="M166,208 Q270,202 370,200" fill="none" stroke="#E4D9C4" stroke-width="1"/><path d="M166,208 Q270,208 370,200" fill="none" stroke="#E4D9C4" stroke-width="1"/><text x="270" y="252" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">nervuras paralelas</text><line x1="400" y1="206" x2="440" y2="206" stroke="#5B7553" stroke-width="3"/>
<path d="M438,206 C470,160 570,160 600,206 C570,252 470,252 438,206 Z" fill="#5B7553" stroke="#3E2F20" stroke-width="1"/>
<line x1="438" y1="206" x2="598" y2="206" stroke="#E4D9C4" stroke-width="1.6"/><path d="M470,206 Q482,192 494,188" fill="none" stroke="#E4D9C4" stroke-width="1"/><path d="M470,206 Q482,220 494,224" fill="none" stroke="#E4D9C4" stroke-width="1"/><path d="M482,196 l8,-6 M482,216 l8,6" stroke="#E4D9C4" stroke-width="0.7"/><path d="M500,206 Q512,192 524,182" fill="none" stroke="#E4D9C4" stroke-width="1"/><path d="M500,206 Q512,220 524,230" fill="none" stroke="#E4D9C4" stroke-width="1"/><path d="M512,196 l8,-6 M512,216 l8,6" stroke="#E4D9C4" stroke-width="0.7"/><path d="M530,206 Q542,192 554,184" fill="none" stroke="#E4D9C4" stroke-width="1"/><path d="M530,206 Q542,220 554,228" fill="none" stroke="#E4D9C4" stroke-width="1"/><path d="M542,196 l8,-6 M542,216 l8,6" stroke="#E4D9C4" stroke-width="0.7"/><path d="M560,206 Q572,192 584,190" fill="none" stroke="#E4D9C4" stroke-width="1"/><path d="M560,206 Q572,220 584,222" fill="none" stroke="#E4D9C4" stroke-width="1"/><path d="M572,196 l8,-6 M572,216 l8,6" stroke="#E4D9C4" stroke-width="0.7"/><text x="510" y="252" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">nervuras ramificadas (em rede)</text><rect x="160" y="280" width="220" height="100" fill="#D8C9A8"/><line x1="160" y1="280" x2="380" y2="280" stroke="#5C4630" stroke-width="1.5"/><circle cx="169" cy="288" r="1.3" fill="#C9B18C"/><circle cx="192" cy="295" r="1.3" fill="#C9B18C"/><circle cx="205" cy="302" r="1.3" fill="#C9B18C"/><circle cx="228" cy="309" r="1.3" fill="#C9B18C"/><circle cx="241" cy="316" r="1.3" fill="#C9B18C"/><circle cx="264" cy="323" r="1.3" fill="#C9B18C"/><circle cx="277" cy="330" r="1.3" fill="#C9B18C"/><circle cx="300" cy="337" r="1.3" fill="#C9B18C"/><circle cx="313" cy="344" r="1.3" fill="#C9B18C"/><circle cx="336" cy="351" r="1.3" fill="#C9B18C"/><circle cx="349" cy="358" r="1.3" fill="#C9B18C"/><circle cx="372" cy="365" r="1.3" fill="#C9B18C"/><rect x="400" y="280" width="220" height="100" fill="#D8C9A8"/><line x1="400" y1="280" x2="620" y2="280" stroke="#5C4630" stroke-width="1.5"/><circle cx="409" cy="288" r="1.3" fill="#C9B18C"/><circle cx="432" cy="295" r="1.3" fill="#C9B18C"/><circle cx="445" cy="302" r="1.3" fill="#C9B18C"/><circle cx="468" cy="309" r="1.3" fill="#C9B18C"/><circle cx="481" cy="316" r="1.3" fill="#C9B18C"/><circle cx="504" cy="323" r="1.3" fill="#C9B18C"/><circle cx="517" cy="330" r="1.3" fill="#C9B18C"/><circle cx="540" cy="337" r="1.3" fill="#C9B18C"/><circle cx="553" cy="344" r="1.3" fill="#C9B18C"/><circle cx="576" cy="351" r="1.3" fill="#C9B18C"/><circle cx="589" cy="358" r="1.3" fill="#C9B18C"/><circle cx="612" cy="365" r="1.3" fill="#C9B18C"/><line x1="270" y1="272" x2="270" y2="282" stroke="#5B7553" stroke-width="5"/><path d="M270,282 Q246,317 210,352" fill="none" stroke="#5C4630" stroke-width="2"/><path d="M237,324 l-6,4" stroke="#5C4630" stroke-width="0.8"/><path d="M270,282 Q254,325 230,368" fill="none" stroke="#5C4630" stroke-width="2"/><path d="M248,333.6 l-6,4" stroke="#5C4630" stroke-width="0.8"/><path d="M270,282 Q262.8,329 252,376" fill="none" stroke="#5C4630" stroke-width="2"/><path d="M260.1,338.4 l-6,4" stroke="#5C4630" stroke-width="0.8"/><path d="M270,282 Q270,331 270,380" fill="none" stroke="#5C4630" stroke-width="2"/><path d="M270,340.8 l-6,4" stroke="#5C4630" stroke-width="0.8"/><path d="M270,282 Q277.2,329 288,376" fill="none" stroke="#5C4630" stroke-width="2"/><path d="M279.9,338.4 l6,4" stroke="#5C4630" stroke-width="0.8"/><path d="M270,282 Q286,325 310,368" fill="none" stroke="#5C4630" stroke-width="2"/><path d="M292,333.6 l6,4" stroke="#5C4630" stroke-width="0.8"/><path d="M270,282 Q294,317 330,352" fill="none" stroke="#5C4630" stroke-width="2"/><path d="M303,324 l6,4" stroke="#5C4630" stroke-width="0.8"/><line x1="510" y1="272" x2="510" y2="282" stroke="#5B7553" stroke-width="5"/>
<path d="M505,282 L515,282 Q514,330 510,378 Q506,330 505,282 Z" fill="#5C4630"/><path d="M510,300 q-20,4 -40,20" fill="none" stroke="#5C4630" stroke-width="1.5"/><path d="M510,306 q20,4 40,20" fill="none" stroke="#5C4630" stroke-width="1.5"/><path d="M510,322 q-17,4 -34,17" fill="none" stroke="#5C4630" stroke-width="1.5"/><path d="M510,328 q17,4 34,17" fill="none" stroke="#5C4630" stroke-width="1.5"/><path d="M510,344 q-13,4 -26,13" fill="none" stroke="#5C4630" stroke-width="1.5"/><path d="M510,350 q13,4 26,13" fill="none" stroke="#5C4630" stroke-width="1.5"/><path d="M510,362 q-8,4 -16,8" fill="none" stroke="#5C4630" stroke-width="1.5"/><path d="M510,368 q8,4 16,8" fill="none" stroke="#5C4630" stroke-width="1.5"/><text x="270" y="400" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">fasciculada (em cabeleira)</text><text x="510" y="400" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">axial ou pivotante</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">As três diferenças mais cobradas entre os dois grupos de angiospermas: semente, folha e raiz.</p>`
        },
        {
          heading: "Raiz — Funções",
          body: `A raiz é o órgão responsável por:

• Fixação da planta no solo
• Absorção de água e sais minerais
• Reserva de nutrientes
• Transporte de água e sais minerais para o restante da planta

Essas quatro funções aparecem com frequência em prova — decore todas.`,
          visual: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<rect width="640" height="330" rx="12" fill="#F4EEE1"/>
<defs><marker id="rfA" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker></defs><rect x="20" y="120" width="330" height="200" fill="#D8C9A8"/><line x1="20" y1="120" x2="350" y2="120" stroke="#5C4630" stroke-width="1.5"/><circle cx="29" cy="128" r="1.3" fill="#C9B18C"/><circle cx="52" cy="135" r="1.3" fill="#C9B18C"/><circle cx="65" cy="142" r="1.3" fill="#C9B18C"/><circle cx="88" cy="149" r="1.3" fill="#C9B18C"/><circle cx="101" cy="156" r="1.3" fill="#C9B18C"/><circle cx="124" cy="163" r="1.3" fill="#C9B18C"/><circle cx="137" cy="170" r="1.3" fill="#C9B18C"/><circle cx="160" cy="177" r="1.3" fill="#C9B18C"/><circle cx="173" cy="184" r="1.3" fill="#C9B18C"/><circle cx="196" cy="191" r="1.3" fill="#C9B18C"/><circle cx="209" cy="198" r="1.3" fill="#C9B18C"/><circle cx="232" cy="205" r="1.3" fill="#C9B18C"/><circle cx="245" cy="212" r="1.3" fill="#C9B18C"/><circle cx="268" cy="219" r="1.3" fill="#C9B18C"/><circle cx="281" cy="226" r="1.3" fill="#C9B18C"/><circle cx="304" cy="233" r="1.3" fill="#C9B18C"/><circle cx="317" cy="240" r="1.3" fill="#C9B18C"/><circle cx="340" cy="247" r="1.3" fill="#C9B18C"/><line x1="170" y1="120" x2="170" y2="36" stroke="#5B7553" stroke-width="5"/><ellipse cx="146" cy="58" rx="24" ry="9" transform="rotate(-25 146 58)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="194" cy="46" rx="24" ry="9" transform="rotate(25 194 46)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="148" cy="92" rx="22" ry="8" transform="rotate(-15 148 92)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="192" cy="84" rx="22" ry="8" transform="rotate(15 192 84)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><path d="M163,120 L177,120 Q182,180 172,290 Q160,180 163,120 Z" fill="#A8763E" stroke="#5C4630" stroke-width="1.2"/><path d="M170,150 q-35,6 -70,38.5" fill="none" stroke="#A8763E" stroke-width="2.5" stroke-linecap="round"/><path d="M170,160 q32,6 64,35.2" fill="none" stroke="#A8763E" stroke-width="2.5" stroke-linecap="round"/><path d="M170,195 q-25,6 -50,27.500000000000004" fill="none" stroke="#A8763E" stroke-width="2.5" stroke-linecap="round"/><path d="M170,205 q25,6 50,27.500000000000004" fill="none" stroke="#A8763E" stroke-width="2.5" stroke-linecap="round"/><path d="M170,240 q-17,6 -34,18.700000000000003" fill="none" stroke="#A8763E" stroke-width="2.5" stroke-linecap="round"/><path d="M170,250 q16,6 32,17.6" fill="none" stroke="#A8763E" stroke-width="2.5" stroke-linecap="round"/><line x1="170" y1="258" x2="160" y2="261" stroke="#5C4630" stroke-width="0.8"/><line x1="174" y1="258" x2="184" y2="261" stroke="#5C4630" stroke-width="0.8"/><line x1="170" y1="263" x2="160" y2="266" stroke="#5C4630" stroke-width="0.8"/><line x1="174" y1="263" x2="184" y2="266" stroke="#5C4630" stroke-width="0.8"/><line x1="170" y1="268" x2="160" y2="271" stroke="#5C4630" stroke-width="0.8"/><line x1="174" y1="268" x2="184" y2="271" stroke="#5C4630" stroke-width="0.8"/><line x1="170" y1="273" x2="160" y2="276" stroke="#5C4630" stroke-width="0.8"/><line x1="174" y1="273" x2="184" y2="276" stroke="#5C4630" stroke-width="0.8"/><line x1="170" y1="278" x2="160" y2="281" stroke="#5C4630" stroke-width="0.8"/><line x1="174" y1="278" x2="184" y2="281" stroke="#5C4630" stroke-width="0.8"/><line x1="170" y1="283" x2="160" y2="286" stroke="#5C4630" stroke-width="0.8"/><line x1="174" y1="283" x2="184" y2="286" stroke="#5C4630" stroke-width="0.8"/><path d="M142,262 Q147,269 142,273 Q137,269 142,262 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><path d="M198,274 Q203,281 198,285 Q193,281 198,274 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><path d="M130,231.2 Q134,236.8 130,240 Q126,236.8 130,231.2 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><path d="M210,237.2 Q214,242.8 210,246 Q206,242.8 210,237.2 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><line x1="186" y1="262" x2="186" y2="140" stroke="#A6493A" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#rfA)"/><circle cx="84" cy="170" r="10" fill="#3E2F20"/><text x="84" y="174" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">1</text><circle cx="122" cy="262" r="10" fill="#3E2F20"/><text x="122" y="266" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">2</text><circle cx="204" cy="196" r="10" fill="#3E2F20"/><text x="204" y="200" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">3</text><circle cx="146" cy="136" r="10" fill="#3E2F20"/><text x="146" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">4</text><line x1="94" y1="170" x2="112" y2="180" stroke="#3E2F20" stroke-width="0.8"/><circle cx="384" cy="70" r="10" fill="#3E2F20"/><text x="384" y="74" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">1</text><text x="402" y="74" text-anchor="start" font-size="13" font-weight="700" fill="#3E2F20">Fixação</text><text x="402" y="92" text-anchor="start" font-size="11" fill="#5C4630">prende a planta ao solo</text><circle cx="384" cy="132" r="10" fill="#3E2F20"/><text x="384" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">2</text><text x="402" y="136" text-anchor="start" font-size="13" font-weight="700" fill="#3E2F20">Absorção</text><text x="402" y="154" text-anchor="start" font-size="11" fill="#5C4630">água e sais entram pelos pelos absorventes</text><circle cx="384" cy="194" r="10" fill="#3E2F20"/><text x="384" y="198" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">3</text><text x="402" y="198" text-anchor="start" font-size="13" font-weight="700" fill="#3E2F20">Transporte</text><text x="402" y="216" text-anchor="start" font-size="11" fill="#5C4630">leva água e sais até o caule</text><circle cx="384" cy="256" r="10" fill="#3E2F20"/><text x="384" y="260" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">4</text><text x="402" y="260" text-anchor="start" font-size="13" font-weight="700" fill="#3E2F20">Reserva</text><text x="402" y="278" text-anchor="start" font-size="11" fill="#5C4630">acumula nutrientes (ex.: cenoura)</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">As quatro funções da raiz. Os pelos absorventes, perto da ponta, são a principal porta de entrada da água.</p>`
        },
        {
          heading: "Raiz — Tipos Especiais",
          body: `Além da fasciculada e da axial (já vistas na comparação acima), existem raízes com adaptações bem específicas:

1. Raiz cintura — típica de plantas epífitas, fixa a planta sobre outra sem retirar alimento dela. Exemplos: bromélias e orquídeas.

2. Raiz estranguladora — envolve o tronco da planta hospedeira e pode sufocá-la. Exemplo: figueira.

3. Raiz haustório (sugadora) — típica de plantas parasitas, retira água e nutrientes diretamente da planta hospedeira. Exemplos: erva-de-passarinho e cipó-chumbo.

4. Raiz escora — sai do caule e entra no solo, dando sustentação extra à planta. Exemplos: milho e mangue.

5. Raiz respiratória (pneumatóforo) — vive em solos alagados e sai do solo para captar oxigênio. Exemplo: manguezais.

6. Raiz tabular — grande e achatada, dá estabilidade para árvores de grande porte. Exemplo: sumaúma.

7. Raiz tuberosa — armazena grande quantidade de alimento. Exemplos: mandioca, batata-doce, cenoura e beterraba.

8. Raiz grampiforme — fixa a planta em paredes, troncos ou rochas. Exemplo: hera.

📌 Dica: associe sempre o tipo de raiz ao "problema" que ela resolve (fixar em outra planta, respirar em solo alagado, sugar nutrientes, armazenar comida) — assim fica mais fácil lembrar o exemplo certo na prova.`,
          visual: `<svg viewBox="0 0 640 424" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<rect width="640" height="424" rx="12" fill="#F4EEE1"/>
<g transform="translate(12,12)"><rect x="0" y="0" width="148" height="196" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="140" viewBox="0 0 148 140" overflow="hidden"><rect x="47" y="0" width="26" height="140" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.2"/><path d="M53.5,35 q6.5,-6 13,0" fill="none" stroke="#C9B18C"/><path d="M53.5,70 q6.5,-6 13,0" fill="none" stroke="#C9B18C"/><path d="M53.5,105 q6.5,-6 13,0" fill="none" stroke="#C9B18C"/><path d="M48,62 Q74,52 74,70 Q74,86 48,80" fill="none" stroke="#3E2F20" stroke-width="1.6"/><path d="M48,80 Q76,74 74,96" fill="none" stroke="#3E2F20" stroke-width="1.6"/><ellipse cx="92" cy="58" rx="20" ry="6" transform="rotate(-30 92 58)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="98" cy="74" rx="22" ry="6" transform="rotate(0 98 74)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="90" cy="88" rx="18" ry="6" transform="rotate(30 90 88)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><circle cx="112" cy="46" r="6" fill="#A6493A"/></svg><text x="74" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Cintura</text><text x="74" y="180" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">bromélias, orquídeas</text></g><g transform="translate(168,12)"><rect x="0" y="0" width="148" height="196" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="140" viewBox="0 0 148 140" overflow="hidden"><rect x="59" y="40" width="30" height="100" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.2"/><path d="M66.5,65 q7.5,-6 15,0" fill="none" stroke="#C9B18C"/><path d="M66.5,90 q7.5,-6 15,0" fill="none" stroke="#C9B18C"/><path d="M66.5,115 q7.5,-6 15,0" fill="none" stroke="#C9B18C"/><circle cx="74" cy="32" r="26" fill="#5B7553" stroke="#3E2F20"/><path d="M44,30 Q74,60 100,70" fill="none" stroke="#A8763E" stroke-width="3"/><path d="M104,50 Q74,80 100,90" fill="none" stroke="#A8763E" stroke-width="3"/><path d="M50,70 Q74,100 100,110" fill="none" stroke="#A8763E" stroke-width="3"/><path d="M100,88 Q74,118 100,128" fill="none" stroke="#A8763E" stroke-width="3"/><path d="M58,50 Q96,80 60,110 Q94,124 88,140" fill="none" stroke="#A8763E" stroke-width="3"/><path d="M90,50 Q54,84 92,108" fill="none" stroke="#A8763E" stroke-width="3"/></svg><text x="74" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Estranguladora</text><text x="74" y="180" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">figueira</text></g><g transform="translate(324,12)"><rect x="0" y="0" width="148" height="196" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="140" viewBox="0 0 148 140" overflow="hidden"><rect x="0" y="80" width="148" height="26" rx="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.2"/><text x="30" y="122" text-anchor="middle" font-size="9" fill="#5C4630">hospedeira</text><path d="M74,80 Q70,50 74,30" fill="none" stroke="#5B7553" stroke-width="3"/><ellipse cx="58" cy="40" rx="14" ry="5" transform="rotate(-30 58 40)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="90" cy="34" rx="14" ry="5" transform="rotate(30 90 34)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="60" cy="60" rx="12" ry="5" transform="rotate(-20 60 60)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="88" cy="56" rx="12" ry="5" transform="rotate(20 88 56)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><circle cx="74" cy="26" r="4" fill="#A6493A"/><path d="M64,80 L64,96" stroke="#A6493A" stroke-width="2.5"/><path d="M74,80 L74,96" stroke="#A6493A" stroke-width="2.5"/><path d="M84,80 L84,96" stroke="#A6493A" stroke-width="2.5"/><text x="110" y="128" text-anchor="middle" font-size="9" font-weight="700" fill="#A6493A">suga a seiva</text></svg><text x="74" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Haustório</text><text x="74" y="180" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">erva-de-passarinho</text></g><g transform="translate(480,12)"><rect x="0" y="0" width="148" height="196" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="140" viewBox="0 0 148 140" overflow="hidden"><rect x="0" y="118" width="148" height="22" fill="#D8C9A8"/><line x1="0" y1="118" x2="148" y2="118" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="126" r="1.3" fill="#C9B18C"/><circle cx="32" cy="133" r="1.3" fill="#C9B18C"/><circle cx="45" cy="132" r="1.3" fill="#C9B18C"/><circle cx="68" cy="131" r="1.3" fill="#C9B18C"/><circle cx="81" cy="130" r="1.3" fill="#C9B18C"/><circle cx="104" cy="129" r="1.3" fill="#C9B18C"/><circle cx="117" cy="128" r="1.3" fill="#C9B18C"/><circle cx="140" cy="127" r="1.3" fill="#C9B18C"/><line x1="74" y1="118" x2="74" y2="6" stroke="#5B7553" stroke-width="5"/><ellipse cx="56" cy="30" rx="26" ry="5" transform="rotate(-30 56 30)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="94" cy="46" rx="26" ry="5" transform="rotate(30 94 46)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="58" cy="62" rx="24" ry="5" transform="rotate(-25 58 62)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><path d="M74,78 Q54,88 40,124" fill="none" stroke="#A8763E" stroke-width="2.5"/><path d="M74,82 Q94,92 112,124" fill="none" stroke="#A8763E" stroke-width="2.5"/><path d="M74,92 Q54,102 26,124" fill="none" stroke="#A8763E" stroke-width="2.5"/><path d="M74,96 Q94,106 126,124" fill="none" stroke="#A8763E" stroke-width="2.5"/></svg><text x="74" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Escora</text><text x="74" y="180" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">milho, mangue</text></g><g transform="translate(12,218)"><rect x="0" y="0" width="148" height="196" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="140" viewBox="0 0 148 140" overflow="hidden"><rect x="0" y="62" width="148" height="34" fill="#B9CBD3"/><rect x="0" y="96" width="148" height="44" fill="#D8C9A8"/><line x1="0" y1="96" x2="148" y2="96" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="104" r="1.3" fill="#C9B18C"/><circle cx="32" cy="111" r="1.3" fill="#C9B18C"/><circle cx="45" cy="118" r="1.3" fill="#C9B18C"/><circle cx="68" cy="125" r="1.3" fill="#C9B18C"/><circle cx="81" cy="132" r="1.3" fill="#C9B18C"/><circle cx="104" cy="109" r="1.3" fill="#C9B18C"/><circle cx="117" cy="116" r="1.3" fill="#C9B18C"/><circle cx="140" cy="123" r="1.3" fill="#C9B18C"/><rect x="13" y="0" width="18" height="110" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.2"/><path d="M17.5,27.5 q4.5,-6 9,0" fill="none" stroke="#C9B18C"/><path d="M17.5,55 q4.5,-6 9,0" fill="none" stroke="#C9B18C"/><path d="M17.5,82.5 q4.5,-6 9,0" fill="none" stroke="#C9B18C"/><path d="M22,118 Q80,124 146,120" fill="none" stroke="#A8763E" stroke-width="3"/><line x1="52" y1="121" x2="52" y2="54" stroke="#A8763E" stroke-width="3.5" stroke-linecap="round"/><line x1="76" y1="121" x2="76" y2="54" stroke="#A8763E" stroke-width="3.5" stroke-linecap="round"/><line x1="100" y1="121" x2="100" y2="54" stroke="#A8763E" stroke-width="3.5" stroke-linecap="round"/><line x1="124" y1="121" x2="124" y2="54" stroke="#A8763E" stroke-width="3.5" stroke-linecap="round"/><text x="110" y="30" text-anchor="middle" font-size="10" font-weight="700" fill="#A6493A">O₂ do ar</text></svg><text x="74" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Respiratória</text><text x="74" y="180" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">mangue (pneumatóforos)</text></g><g transform="translate(168,218)"><rect x="0" y="0" width="148" height="196" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="140" viewBox="0 0 148 140" overflow="hidden"><rect x="0" y="120" width="148" height="20" fill="#D8C9A8"/><line x1="0" y1="120" x2="148" y2="120" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="128" r="1.3" fill="#C9B18C"/><circle cx="32" cy="129" r="1.3" fill="#C9B18C"/><circle cx="45" cy="130" r="1.3" fill="#C9B18C"/><circle cx="68" cy="131" r="1.3" fill="#C9B18C"/><circle cx="81" cy="132" r="1.3" fill="#C9B18C"/><circle cx="104" cy="133" r="1.3" fill="#C9B18C"/><circle cx="117" cy="128" r="1.3" fill="#C9B18C"/><circle cx="140" cy="129" r="1.3" fill="#C9B18C"/><rect x="59" y="0" width="30" height="120" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.2"/><path d="M66.5,30 q7.5,-6 15,0" fill="none" stroke="#C9B18C"/><path d="M66.5,60 q7.5,-6 15,0" fill="none" stroke="#C9B18C"/><path d="M66.5,90 q7.5,-6 15,0" fill="none" stroke="#C9B18C"/><path d="M60,50 Q52,100 14,120 L60,120 Z" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.2"/><path d="M88,50 Q96,100 134,120 L88,120 Z" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.2"/><path d="M70,70 Q66,108 50,120 L78,120 Z" fill="#C9B18C" stroke="#5C4630"/><text x="74" y="112" text-anchor="middle" font-size="12" fill="#5C4630"></text></svg><text x="74" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Tabular</text><text x="74" y="180" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">sumaúma</text></g><g transform="translate(324,218)"><rect x="0" y="0" width="148" height="196" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="140" viewBox="0 0 148 140" overflow="hidden"><rect x="0" y="36" width="148" height="104" fill="#D8C9A8"/><line x1="0" y1="36" x2="148" y2="36" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="44" r="1.3" fill="#C9B18C"/><circle cx="32" cy="51" r="1.3" fill="#C9B18C"/><circle cx="45" cy="58" r="1.3" fill="#C9B18C"/><circle cx="68" cy="65" r="1.3" fill="#C9B18C"/><circle cx="81" cy="72" r="1.3" fill="#C9B18C"/><circle cx="104" cy="79" r="1.3" fill="#C9B18C"/><circle cx="117" cy="86" r="1.3" fill="#C9B18C"/><circle cx="140" cy="93" r="1.3" fill="#C9B18C"/><path d="M58,40 Q74,46 90,40 Q86,90 74,134 Q62,90 58,40 Z" fill="#A8763E" stroke="#5C4630" stroke-width="1.2"/><path d="M64,60 q8,3 18,0" fill="none" stroke="#5C4630" stroke-width="0.8"/><path d="M66.66666666666667,76 q8,3 12.666666666666668,0" fill="none" stroke="#5C4630" stroke-width="0.8"/><path d="M69.33333333333333,92 q8,3 7.333333333333334,0" fill="none" stroke="#5C4630" stroke-width="0.8"/><path d="M72,108 q8,3 2,0" fill="none" stroke="#5C4630" stroke-width="0.8"/><path d="M74,38 Q60,12 50,4 M74,38 Q74,10 76,2 M74,38 Q88,14 100,6" fill="none" stroke="#5B7553" stroke-width="3"/><text x="120" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">reserva</text></svg><text x="74" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Tuberosa</text><text x="74" y="180" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">mandioca, cenoura</text></g><g transform="translate(480,218)"><rect x="0" y="0" width="148" height="196" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="140" viewBox="0 0 148 140" overflow="hidden"><rect x="0" y="0" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="32" y="0" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="64" y="0" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="-16" y="20" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="16" y="20" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="48" y="20" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="0" y="40" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="32" y="40" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="64" y="40" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="-16" y="60" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="16" y="60" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="48" y="60" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="0" y="80" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="32" y="80" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="64" y="80" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="-16" y="100" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="16" y="100" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="48" y="100" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="0" y="120" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="32" y="120" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="64" y="120" width="32" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="80" y="0" width="68" height="140" fill="#F4EEE1"/><path d="M84,138 Q60,110 76,84 Q90,60 70,34 Q60,16 74,2" fill="none" stroke="#5B7553" stroke-width="3"/><path d="M78,110 l-10,-2 M78,114 l-10,3" stroke="#5C4630" stroke-width="1.2"/><ellipse cx="92" cy="106" rx="9" ry="6" transform="rotate(20 92 106)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><path d="M74,84 l-10,-2 M74,88 l-10,3" stroke="#5C4630" stroke-width="1.2"/><ellipse cx="88" cy="80" rx="9" ry="6" transform="rotate(20 88 80)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><path d="M76,58 l-10,-2 M76,62 l-10,3" stroke="#5C4630" stroke-width="1.2"/><ellipse cx="90" cy="54" rx="9" ry="6" transform="rotate(20 90 54)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><path d="M66,34 l-10,-2 M66,38 l-10,3" stroke="#5C4630" stroke-width="1.2"/><ellipse cx="80" cy="30" rx="9" ry="6" transform="rotate(20 80 30)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/></svg><text x="74" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Grampiforme</text><text x="74" y="180" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">hera</text></g>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Cada raiz especial resolve um "problema": fixar-se em outra planta, sugar seiva, sustentar, respirar no mangue ou guardar reservas.</p>`
        },
        {
          heading: "Fruto — Estrutura",
          body: `Todo fruto verdadeiro se desenvolve a partir do ovário da flor, após a fecundação.

Um fruto carnoso típico (como um pêssego) tem três camadas, de fora para dentro, mais a semente no centro:

• Epicarpo — a casca
• Mesocarpo — a parte carnosa (a polpa que comemos)
• Endocarpo — a camada interna que envolve a semente
• Semente — estrutura que vai originar uma nova planta

O corte transversal abaixo mostra essas camadas na ordem certa.`,
          visual: `<svg viewBox="0 0 640 324" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<rect width="640" height="324" rx="12" fill="#F4EEE1"/>
<defs><marker id="feA" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker></defs><text x="120" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">FLOR</text><text x="410" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">FRUTO (pêssego em corte)</text><line x1="120" y1="290" x2="120" y2="200" stroke="#5B7553" stroke-width="4"/><ellipse cx="100" cy="254" rx="18" ry="6" transform="rotate(-30 100 254)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="86" cy="172" rx="34" ry="12" transform="rotate(-40 86 172)" fill="#E4D9C4" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="154" cy="172" rx="34" ry="12" transform="rotate(40 154 172)" fill="#E4D9C4" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="96" cy="150" rx="30" ry="11" transform="rotate(-70 96 150)" fill="#E4D9C4" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="144" cy="150" rx="30" ry="11" transform="rotate(70 144 150)" fill="#E4D9C4" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="120" cy="186" rx="15" ry="18" fill="#5B7553" stroke="#3E2F20" stroke-width="1.2"/><circle cx="116" cy="184" r="3" fill="#E4D9C4"/><circle cx="124" cy="190" r="3" fill="#E4D9C4"/>
<line x1="120" y1="168" x2="120" y2="112" stroke="#5B7553" stroke-width="2.5"/><ellipse cx="120" cy="110" rx="7" ry="4" fill="#5B7553"/><line x1="120" y1="190" x2="98" y2="132" stroke="#5C4630" stroke-width="1"/><ellipse cx="98" cy="130" rx="3" ry="5" fill="#A8763E"/><line x1="120" y1="190" x2="108" y2="132" stroke="#5C4630" stroke-width="1"/><ellipse cx="108" cy="130" rx="3" ry="5" fill="#A8763E"/><line x1="120" y1="190" x2="132" y2="132" stroke="#5C4630" stroke-width="1"/><ellipse cx="132" cy="130" rx="3" ry="5" fill="#A8763E"/><line x1="120" y1="190" x2="142" y2="132" stroke="#5C4630" stroke-width="1"/><ellipse cx="142" cy="130" rx="3" ry="5" fill="#A8763E"/><line x1="137" y1="190" x2="186" y2="214" stroke="#3E2F20" stroke-width="0.8"/><text x="190" y="218" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">ovário</text><text x="190" y="232" text-anchor="start" font-size="10" fill="#5C4630">(com óvulos)</text><path d="M190,150 Q240,120 284,150" fill="none" stroke="#3E2F20" stroke-width="2" marker-end="url(#feA)"/><text x="238" y="118" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">fecundação</text><text x="120" y="312" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">ovário → fruto · óvulo → semente</text><path d="M394,68 q-4,-14 4,-22" fill="none" stroke="#5C4630" stroke-width="3"/><ellipse cx="418" cy="56" rx="18" ry="7" transform="rotate(-20 418 56)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><path d="M400,70 C510,58 518,260 400,314 C282,260 290,58 400,70 Z" fill="#A6493A" stroke="#3E2F20" stroke-width="1.5"/><path d="M400,77 C500,66 508,254 400,306 C292,254 300,66 400,77 Z" fill="#D8C9A8"/><path d="M400,128 C444,132 448,224 400,254 C352,224 356,132 400,128 Z" fill="#5C4630" stroke="#3E2F20" stroke-width="1.5"/><line x1="370" y1="170" x2="382" y2="182" stroke="#3E2F20" stroke-width="1.2"/><line x1="426" y1="164" x2="414" y2="176" stroke="#3E2F20" stroke-width="1.2"/><line x1="366" y1="210" x2="378" y2="220" stroke="#3E2F20" stroke-width="1.2"/><line x1="430" y1="208" x2="420" y2="222" stroke="#3E2F20" stroke-width="1.2"/><line x1="388" y1="240" x2="400" y2="234" stroke="#3E2F20" stroke-width="1.2"/><line x1="410" y1="140" x2="400" y2="150" stroke="#3E2F20" stroke-width="1.2"/><ellipse cx="400" cy="190" rx="17" ry="30" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/><line x1="486" y1="114" x2="526" y2="70" stroke="#3E2F20" stroke-width="0.9"/><circle cx="486" cy="114" r="2.5" fill="#3E2F20"/><text x="530" y="74" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">Epicarpo</text><text x="530" y="89" text-anchor="start" font-size="10" fill="#5C4630">casca</text><line x1="470" y1="170" x2="526" y2="120" stroke="#3E2F20" stroke-width="0.9"/><circle cx="470" cy="170" r="2.5" fill="#3E2F20"/><text x="530" y="124" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">Mesocarpo</text><text x="530" y="139" text-anchor="start" font-size="10" fill="#5C4630">polpa (o que comemos)</text><line x1="438" y1="220" x2="526" y2="170" stroke="#3E2F20" stroke-width="0.9"/><circle cx="438" cy="220" r="2.5" fill="#3E2F20"/><text x="530" y="174" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">Endocarpo</text><text x="530" y="189" text-anchor="start" font-size="10" fill="#5C4630">caroço duro</text><line x1="410" y1="200" x2="526" y2="220" stroke="#3E2F20" stroke-width="0.9"/><circle cx="410" cy="200" r="2.5" fill="#3E2F20"/><text x="530" y="224" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">Semente</text><text x="530" y="239" text-anchor="start" font-size="10" fill="#5C4630">dentro do caroço</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">O fruto vem do ovário da flor. No pêssego (drupa), de fora para dentro: epicarpo, mesocarpo, endocarpo e semente.</p>`
        },
        {
          heading: "Fruto — Classificação",
          body: `Frutos simples são formados por um único pistilo.

Entre os frutos carnosos, existem quatro subtipos importantes:

• Baga — a semente fica solta na polpa. Exemplos: tomate, uva, mamão.
• Drupa — tem um caroço duro envolvendo a semente (o endocarpo é rígido). Exemplos: manga, pêssego, coco, ameixa.
• Pomo — o "miolo" central concentra as sementes. Exemplos: maçã e pera.
• Hesperídio — casca grossa e rica em óleos, polpa dividida em gomos. Exemplos: laranja e limão.

Quanto à deiscência (abertura do fruto):

• Deiscentes — abrem sozinhos quando amadurecem, liberando as sementes.
• Indeiscentes — não se abrem naturalmente; a semente só é liberada quando o fruto se decompõe ou é comido.`,
          visual: `<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<rect width="640" height="360" rx="12" fill="#F4EEE1"/>
<g transform="translate(12,12)"><rect x="0" y="0" width="148" height="212" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="150" viewBox="0 0 148 150"><circle cx="74" cy="76" r="50" fill="#A6493A" stroke="#3E2F20" stroke-width="1.5"/><circle cx="74" cy="76" r="45" fill="#D8C9A8"/><ellipse cx="98.0" cy="76.0" rx="16" ry="13" fill="#E4D9C4" stroke="#A6493A" stroke-width="0.8"/><ellipse cx="92.0" cy="73.0" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="103.0" cy="72.0" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="98.0" cy="81.0" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="91.0" cy="81.0" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="105.0" cy="80.0" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="62.0" cy="96.8" rx="16" ry="13" fill="#E4D9C4" stroke="#A6493A" stroke-width="0.8"/><ellipse cx="56.0" cy="93.8" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="67.0" cy="92.8" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="62.0" cy="101.8" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="55.0" cy="101.8" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="69.0" cy="100.8" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="62.0" cy="55.2" rx="16" ry="13" fill="#E4D9C4" stroke="#A6493A" stroke-width="0.8"/><ellipse cx="56.0" cy="52.2" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="67.0" cy="51.2" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="62.0" cy="60.2" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="55.0" cy="60.2" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><ellipse cx="69.0" cy="59.2" rx="2.2" ry="3.2" fill="#A8763E" stroke="#5C4630" stroke-width="0.5"/><circle cx="74" cy="76" r="8" fill="#D8C9A8" stroke="#A6493A" stroke-width="0.8"/></svg><text x="74" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">BAGA</text><text x="74" y="186" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">tomate, uva, mamão</text><text x="74" y="202" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">sementes soltas na polpa</text></g><g transform="translate(168,12)"><rect x="0" y="0" width="148" height="212" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="150" viewBox="0 0 148 150"><ellipse cx="74" cy="78" rx="46" ry="56" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><ellipse cx="74" cy="78" rx="41" ry="51" fill="#D8C9A8"/><ellipse cx="74" cy="80" rx="20" ry="30" fill="#5C4630" stroke="#3E2F20"/><ellipse cx="74" cy="80" rx="9" ry="16" fill="#E4D9C4"/></svg><text x="74" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">DRUPA</text><text x="74" y="186" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">manga, pêssego, coco</text><text x="74" y="202" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">caroço duro (endocarpo)</text></g><g transform="translate(324,12)"><rect x="0" y="0" width="148" height="212" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="150" viewBox="0 0 148 150"><path d="M74,34 C40,14 14,46 22,86 C30,126 60,134 74,124 C88,134 118,126 126,86 C134,46 108,14 74,34 Z" fill="#A6493A" stroke="#3E2F20" stroke-width="1.5"/><path d="M74,40 C44,22 22,50 28,86 C34,120 62,128 74,118 C86,128 114,120 120,86 C126,50 104,22 74,40 Z" fill="#E4D9C4"/><path d="M74,52 Q56,80 74,108 Q92,80 74,52 Z" fill="#D8C9A8" stroke="#C9B18C"/><ellipse cx="68" cy="76" rx="3.5" ry="6" fill="#5C4630"/><ellipse cx="80" cy="76" rx="3.5" ry="6" fill="#5C4630"/><ellipse cx="74" cy="90" rx="3.5" ry="6" fill="#5C4630"/><path d="M74,34 q2,-14 8,-22" fill="none" stroke="#5C4630" stroke-width="3"/><ellipse cx="90" cy="14" rx="10" ry="5" transform="rotate(-20 90 14)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/></svg><text x="74" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">POMO</text><text x="74" y="186" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">maçã, pera</text><text x="74" y="202" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">sementes no "miolo"</text></g><g transform="translate(480,12)"><rect x="0" y="0" width="148" height="212" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="6" width="148" height="150" viewBox="0 0 148 150"><circle cx="74" cy="76" r="52" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><circle cx="74" cy="76" r="45" fill="#E4D9C4"/><path d="M79.0,76.2 L114.9,78.0 A41,41 0 0 1 108.3,98.4 L78.2,78.7 Z" fill="#D8C9A8" stroke="#C9B18C"/><path d="M77.9,79.1 L105.9,101.7 A41,41 0 0 1 88.6,114.3 L75.8,80.7 Z" fill="#D8C9A8" stroke="#C9B18C"/><path d="M75.3,80.8 L84.7,115.6 A41,41 0 0 1 63.3,115.6 L72.7,80.8 Z" fill="#D8C9A8" stroke="#C9B18C"/><path d="M72.2,80.7 L59.4,114.3 A41,41 0 0 1 42.1,101.7 L70.1,79.1 Z" fill="#D8C9A8" stroke="#C9B18C"/><path d="M69.8,78.7 L39.7,98.4 A41,41 0 0 1 33.1,78.0 L69.0,76.2 Z" fill="#D8C9A8" stroke="#C9B18C"/><path d="M69.0,75.8 L33.1,74.0 A41,41 0 0 1 39.7,53.6 L69.8,73.3 Z" fill="#D8C9A8" stroke="#C9B18C"/><path d="M70.1,72.9 L42.1,50.3 A41,41 0 0 1 59.4,37.7 L72.2,71.3 Z" fill="#D8C9A8" stroke="#C9B18C"/><path d="M72.7,71.2 L63.3,36.4 A41,41 0 0 1 84.7,36.4 L75.3,71.2 Z" fill="#D8C9A8" stroke="#C9B18C"/><path d="M75.8,71.3 L88.6,37.7 A41,41 0 0 1 105.9,50.3 L77.9,72.9 Z" fill="#D8C9A8" stroke="#C9B18C"/><path d="M78.2,73.3 L108.3,53.6 A41,41 0 0 1 114.9,74.0 L79.0,75.8 Z" fill="#D8C9A8" stroke="#C9B18C"/><circle cx="74" cy="76" r="5" fill="#E4D9C4"/></svg><text x="74" y="170" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">HESPERÍDIO</text><text x="74" y="186" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">laranja, limão</text><text x="74" y="202" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">casca grossa e gomos</text></g><g transform="translate(12,236)"><rect x="0" y="0" width="302" height="112" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><path d="M40,62 Q110,10 200,46 Q120,40 40,62 Z" fill="#5B7553" stroke="#3E2F20"/><path d="M40,62 Q120,84 200,52 Q110,100 40,62 Z" fill="#5B7553" stroke="#3E2F20"/><circle cx="80" cy="58" r="7" fill="#E4D9C4" stroke="#5C4630"/><circle cx="110" cy="57" r="7" fill="#E4D9C4" stroke="#5C4630"/><circle cx="140" cy="56" r="7" fill="#E4D9C4" stroke="#5C4630"/><circle cx="168" cy="55" r="7" fill="#E4D9C4" stroke="#5C4630"/><text x="151" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">DEISCENTE — abre sozinho</text><text x="151" y="106" text-anchor="middle" font-size="10" fill="#5C4630">ex.: vagem do feijão libera as sementes</text></g><g transform="translate(326,236)"><rect x="0" y="0" width="302" height="112" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><ellipse cx="151" cy="52" rx="24" ry="30" fill="#A8763E" stroke="#3E2F20" stroke-width="1.2"/><path d="M125,36 Q151,10 177,36 Q151,44 125,36 Z" fill="#5C4630" stroke="#3E2F20"/><line x1="134" y1="30" x2="136" y2="38" stroke="#3E2F20" stroke-width="0.8"/><line x1="144" y1="30" x2="146" y2="38" stroke="#3E2F20" stroke-width="0.8"/><line x1="158" y1="30" x2="160" y2="38" stroke="#3E2F20" stroke-width="0.8"/><line x1="168" y1="30" x2="170" y2="38" stroke="#3E2F20" stroke-width="0.8"/><text x="151" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">INDEISCENTE — não abre</text><text x="151" y="106" text-anchor="middle" font-size="10" fill="#5C4630">ex.: avelã; a semente só sai quando o fruto se decompõe</text></g>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Os quatro tipos de fruto carnoso e a diferença entre frutos que abrem (deiscentes) e que não abrem (indeiscentes).</p>`
        },
        {
          heading: "Caule — Funções e Tipos",
          body: `O caule tem quatro funções principais:

• Sustentação da planta
• Condução da seiva bruta e da seiva elaborada
• Armazenamento de nutrientes em algumas plantas
• Produção de novos brotos

Existem quatro tipos principais de caule:

1. Tronco — lenhoso, grosso e ramificado. Exemplo: árvores.

2. Haste — verde, flexível e herbácea. Exemplo: alface e girassol.

3. Colmo — possui nós e entrenós bem visíveis, com as folhas saindo dos nós. Exemplo: bambu e cana-de-açúcar.

4. Estipe — caule único, liso e sem ramificações. Exemplo: coqueiro e palmeira.`,
          visual: `<svg viewBox="0 0 640 314" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<rect width="640" height="314" rx="12" fill="#F4EEE1"/>
<g transform="translate(12,12)"><rect x="0" y="0" width="148" height="290" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="4" width="148" height="236" viewBox="0 0 148 236"><rect x="0" y="220" width="148" height="20" fill="#D8C9A8"/><line x1="0" y1="220" x2="148" y2="220" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="228" r="1.3" fill="#C9B18C"/><circle cx="32" cy="229" r="1.3" fill="#C9B18C"/><circle cx="45" cy="230" r="1.3" fill="#C9B18C"/><circle cx="68" cy="231" r="1.3" fill="#C9B18C"/><circle cx="81" cy="232" r="1.3" fill="#C9B18C"/><circle cx="104" cy="233" r="1.3" fill="#C9B18C"/><circle cx="117" cy="228" r="1.3" fill="#C9B18C"/><circle cx="140" cy="229" r="1.3" fill="#C9B18C"/><path d="M64,220 L66,120 L82,120 L84,220 Z" fill="#5C4630" stroke="#3E2F20"/><path d="M70,130 L40,80 M78,130 L108,76 M74,124 L74,70" stroke="#5C4630" stroke-width="7" stroke-linecap="round"/><circle cx="40" cy="64" r="26" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><circle cx="74" cy="52" r="30" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><circle cx="108" cy="64" r="26" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><circle cx="56" cy="88" r="22" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><circle cx="94" cy="88" r="22" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><circle cx="74" cy="30" r="22" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/></svg><text x="74" y="250" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">TRONCO</text><text x="74" y="266" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">árvores</text><text x="74" y="281" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">lenhoso e ramificado</text></g><g transform="translate(168,12)"><rect x="0" y="0" width="148" height="290" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="4" width="148" height="236" viewBox="0 0 148 236"><rect x="0" y="220" width="148" height="20" fill="#D8C9A8"/><line x1="0" y1="220" x2="148" y2="220" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="228" r="1.3" fill="#C9B18C"/><circle cx="32" cy="229" r="1.3" fill="#C9B18C"/><circle cx="45" cy="230" r="1.3" fill="#C9B18C"/><circle cx="68" cy="231" r="1.3" fill="#C9B18C"/><circle cx="81" cy="232" r="1.3" fill="#C9B18C"/><circle cx="104" cy="233" r="1.3" fill="#C9B18C"/><circle cx="117" cy="228" r="1.3" fill="#C9B18C"/><circle cx="140" cy="229" r="1.3" fill="#C9B18C"/><path d="M74,220 Q70,150 74,60" fill="none" stroke="#5B7553" stroke-width="4"/><ellipse cx="54" cy="180" rx="20" ry="8" transform="rotate(-30 54 180)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="94" cy="150" rx="20" ry="8" transform="rotate(30 94 150)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="54" cy="120" rx="18" ry="7" transform="rotate(-30 54 120)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="94" cy="92" rx="16" ry="7" transform="rotate(30 94 92)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="96" cy="44" rx="10" ry="4.5" transform="rotate(0 96 44)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="93.05255888325766" cy="55" rx="10" ry="4.5" transform="rotate(30 93.05255888325766 55)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="85" cy="63.052558883257646" rx="10" ry="4.5" transform="rotate(60 85 63.052558883257646)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="74" cy="66" rx="10" ry="4.5" transform="rotate(90 74 66)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="63.00000000000001" cy="63.05255888325765" rx="10" ry="4.5" transform="rotate(120 63.00000000000001 63.05255888325765)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="54.94744111674235" cy="55" rx="10" ry="4.5" transform="rotate(150 54.94744111674235 55)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="52" cy="44" rx="10" ry="4.5" transform="rotate(180 52 44)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="54.947441116742354" cy="33" rx="10" ry="4.5" transform="rotate(210 54.947441116742354 33)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="62.999999999999986" cy="24.947441116742354" rx="10" ry="4.5" transform="rotate(240 62.999999999999986 24.947441116742354)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="74" cy="22" rx="10" ry="4.5" transform="rotate(270 74 22)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="85" cy="24.94744111674235" rx="10" ry="4.5" transform="rotate(300 85 24.94744111674235)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="93.05255888325765" cy="32.999999999999986" rx="10" ry="4.5" transform="rotate(330 93.05255888325765 32.999999999999986)" fill="#A8763E" stroke="#3E2F20" stroke-width="0.8"/><circle cx="74" cy="44" r="13" fill="#5C4630"/></svg><text x="74" y="250" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">HASTE</text><text x="74" y="266" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">alface, girassol</text><text x="74" y="281" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">verde e flexível</text></g><g transform="translate(324,12)"><rect x="0" y="0" width="148" height="290" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="4" width="148" height="236" viewBox="0 0 148 236"><rect x="0" y="220" width="148" height="20" fill="#D8C9A8"/><line x1="0" y1="220" x2="148" y2="220" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="228" r="1.3" fill="#C9B18C"/><circle cx="32" cy="229" r="1.3" fill="#C9B18C"/><circle cx="45" cy="230" r="1.3" fill="#C9B18C"/><circle cx="68" cy="231" r="1.3" fill="#C9B18C"/><circle cx="81" cy="232" r="1.3" fill="#C9B18C"/><circle cx="104" cy="233" r="1.3" fill="#C9B18C"/><circle cx="117" cy="228" r="1.3" fill="#C9B18C"/><circle cx="140" cy="229" r="1.3" fill="#C9B18C"/><rect x="62" y="30" width="24" height="38" rx="3" fill="#5B7553" stroke="#3E2F20"/><rect x="59" y="66" width="30" height="5" rx="2" fill="#3E2F20"/><rect x="62" y="68" width="24" height="38" rx="3" fill="#5B7553" stroke="#3E2F20"/><rect x="59" y="104" width="30" height="5" rx="2" fill="#3E2F20"/><rect x="62" y="106" width="24" height="38" rx="3" fill="#5B7553" stroke="#3E2F20"/><rect x="59" y="142" width="30" height="5" rx="2" fill="#3E2F20"/><rect x="62" y="144" width="24" height="38" rx="3" fill="#5B7553" stroke="#3E2F20"/><rect x="59" y="180" width="30" height="5" rx="2" fill="#3E2F20"/><rect x="62" y="182" width="24" height="38" rx="3" fill="#5B7553" stroke="#3E2F20"/><rect x="59" y="218" width="30" height="5" rx="2" fill="#3E2F20"/><ellipse cx="102" cy="74" rx="18" ry="4" transform="rotate(30 102 74)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="46" cy="112" rx="18" ry="4" transform="rotate(-30 46 112)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="102" cy="150" rx="18" ry="4" transform="rotate(30 102 150)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><line x1="89" y1="106" x2="118" y2="100" stroke="#3E2F20" stroke-width="0.8"/><text x="120" y="104" text-anchor="start" font-size="10" font-weight="700" fill="#3E2F20">nó</text><line x1="62" y1="180" x2="30" y2="186" stroke="#3E2F20" stroke-width="0.8"/><text x="4" y="200" text-anchor="start" font-size="10" font-weight="700" fill="#3E2F20">entrenó</text></svg><text x="74" y="250" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">COLMO</text><text x="74" y="266" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">bambu, cana</text><text x="74" y="281" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">nós e entrenós visíveis</text></g><g transform="translate(480,12)"><rect x="0" y="0" width="148" height="290" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="4" width="148" height="236" viewBox="0 0 148 236"><rect x="0" y="220" width="148" height="20" fill="#D8C9A8"/><line x1="0" y1="220" x2="148" y2="220" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="228" r="1.3" fill="#C9B18C"/><circle cx="32" cy="229" r="1.3" fill="#C9B18C"/><circle cx="45" cy="230" r="1.3" fill="#C9B18C"/><circle cx="68" cy="231" r="1.3" fill="#C9B18C"/><circle cx="81" cy="232" r="1.3" fill="#C9B18C"/><circle cx="104" cy="233" r="1.3" fill="#C9B18C"/><circle cx="117" cy="228" r="1.3" fill="#C9B18C"/><circle cx="140" cy="229" r="1.3" fill="#C9B18C"/><path d="M68,220 Q72,130 76,52 L84,52 Q80,130 82,220 Z" fill="#D8C9A8" stroke="#5C4630"/><line x1="74.66666666666667" y1="80" x2="78.5" y2="80" stroke="#5C4630" stroke-width="0.8"/><line x1="73.66666666666667" y1="110" x2="79.25" y2="110" stroke="#5C4630" stroke-width="0.8"/><line x1="72.66666666666667" y1="140" x2="80" y2="140" stroke="#5C4630" stroke-width="0.8"/><line x1="71.66666666666667" y1="170" x2="80.75" y2="170" stroke="#5C4630" stroke-width="0.8"/><line x1="70.66666666666667" y1="200" x2="81.5" y2="200" stroke="#5C4630" stroke-width="0.8"/><path d="M80,50 Q50,20 20,40" fill="none" stroke="#5B7553" stroke-width="5" stroke-linecap="round"/><path d="M80,50 Q60,4 40,24" fill="none" stroke="#5B7553" stroke-width="5" stroke-linecap="round"/><path d="M80,50 Q75,-4 70,16" fill="none" stroke="#5B7553" stroke-width="5" stroke-linecap="round"/><path d="M80,50 Q90,-2 100,18" fill="none" stroke="#5B7553" stroke-width="5" stroke-linecap="round"/><path d="M80,50 Q104,8 128,28" fill="none" stroke="#5B7553" stroke-width="5" stroke-linecap="round"/><path d="M80,50 Q112,30 144,50" fill="none" stroke="#5B7553" stroke-width="5" stroke-linecap="round"/><path d="M80,50 Q53,50 26,70" fill="none" stroke="#5B7553" stroke-width="5" stroke-linecap="round"/><path d="M80,50 Q106,54 132,74" fill="none" stroke="#5B7553" stroke-width="5" stroke-linecap="round"/><circle cx="74" cy="58" r="5" fill="#A8763E"/><circle cx="86" cy="58" r="5" fill="#A8763E"/></svg><text x="74" y="250" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">ESTIPE</text><text x="74" y="266" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">coqueiro, palmeira</text><text x="74" y="281" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">único, sem ramos</text></g>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Os quatro tipos principais de caule aéreo.</p>`
        },
        {
          heading: "Caules especiais",
          body: `Além dos quatro tipos principais, existem caules com adaptações especiais:

5. Estolão — caule rastejante que emite uma raiz a cada nó. Exemplo: morango.

6. Sarmento — caule rastejante que NÃO emite raiz a cada nó. Exemplo: melancia.

7. Cladódio — caule verde (faz fotossíntese), com as folhas transformadas em espinhos. Típico de regiões áridas, possui parênquima aquífero (armazena água). Exemplo: cactos.

8. Tubérculo — caule subterrâneo com parênquima amilífero (armazena amido). Gravitropismo positivo. Exemplo: batata-inglesa.

9. Xilopódio — caule especial típico do cerrado, que resiste às queimadas.

10. Bulbo — caule subterrâneo. Exemplos: cebola e alho.

11. Rizoma — caule subterrâneo. Exemplo: bananeira. O que parece o "tronco" da bananeira não é caule: é um pseudocaule formado pelas bainhas das folhas. O caule verdadeiro é o rizoma, que fica debaixo da terra.

📌 Pegadinha clássica: a batata-inglesa é caule (tubérculo), mas a batata-doce é raiz (raiz tuberosa).`,
          visual: `<svg viewBox="0 0 640 478" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<rect width="640" height="478" rx="12" fill="#F4EEE1"/>
<g transform="translate(12,12)"><rect x="0" y="0" width="200" height="206" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="4" width="200" height="150" viewBox="0 0 200 150"><rect x="0" y="120" width="200" height="30" fill="#D8C9A8"/><line x1="0" y1="120" x2="200" y2="120" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="128" r="1.3" fill="#C9B18C"/><circle cx="32" cy="135" r="1.3" fill="#C9B18C"/><circle cx="45" cy="142" r="1.3" fill="#C9B18C"/><circle cx="68" cy="133" r="1.3" fill="#C9B18C"/><circle cx="81" cy="140" r="1.3" fill="#C9B18C"/><circle cx="104" cy="131" r="1.3" fill="#C9B18C"/><circle cx="117" cy="138" r="1.3" fill="#C9B18C"/><circle cx="140" cy="129" r="1.3" fill="#C9B18C"/><circle cx="153" cy="136" r="1.3" fill="#C9B18C"/><circle cx="176" cy="143" r="1.3" fill="#C9B18C"/><circle cx="189" cy="134" r="1.3" fill="#C9B18C"/><path d="M10,118 Q55,108 100,118 Q145,108 190,118" fill="none" stroke="#5B7553" stroke-width="3"/><circle cx="24" cy="117" r="4" fill="#A8763E"/><path d="M24,121 l-6,16 M24,121 l0,18 M24,121 l6,16" stroke="#5C4630" stroke-width="1.3"/><ellipse cx="16" cy="98" rx="10" ry="5" transform="rotate(-40 16 98)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="32" cy="98" rx="10" ry="5" transform="rotate(40 32 98)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><line x1="24" y1="116" x2="24" y2="100" stroke="#5B7553" stroke-width="2"/><circle cx="100" cy="117" r="4" fill="#A8763E"/><path d="M100,121 l-6,16 M100,121 l0,18 M100,121 l6,16" stroke="#5C4630" stroke-width="1.3"/><ellipse cx="92" cy="98" rx="10" ry="5" transform="rotate(-40 92 98)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="108" cy="98" rx="10" ry="5" transform="rotate(40 108 98)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><line x1="100" y1="116" x2="100" y2="100" stroke="#5B7553" stroke-width="2"/><circle cx="176" cy="117" r="4" fill="#A8763E"/><path d="M176,121 l-6,16 M176,121 l0,18 M176,121 l6,16" stroke="#5C4630" stroke-width="1.3"/><ellipse cx="168" cy="98" rx="10" ry="5" transform="rotate(-40 168 98)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="184" cy="98" rx="10" ry="5" transform="rotate(40 184 98)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><line x1="176" y1="116" x2="176" y2="100" stroke="#5B7553" stroke-width="2"/><path d="M24,100 q-14,-10 -6,-30" fill="none" stroke="#5B7553" stroke-width="1.5"/><path d="M14,62 q4,-8 8,0 q4,10 -4,16 q-8,-6 -4,-16 Z" fill="#A6493A" stroke="#3E2F20" stroke-width="0.6"/></svg><text x="100" y="168" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">ESTOLÃO</text><text x="100" y="184" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">morango</text><text x="100" y="199" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">emite raiz a cada nó</text></g><g transform="translate(220,12)"><rect x="0" y="0" width="200" height="206" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="4" width="200" height="150" viewBox="0 0 200 150"><rect x="0" y="120" width="200" height="30" fill="#D8C9A8"/><line x1="0" y1="120" x2="200" y2="120" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="128" r="1.3" fill="#C9B18C"/><circle cx="32" cy="135" r="1.3" fill="#C9B18C"/><circle cx="45" cy="142" r="1.3" fill="#C9B18C"/><circle cx="68" cy="133" r="1.3" fill="#C9B18C"/><circle cx="81" cy="140" r="1.3" fill="#C9B18C"/><circle cx="104" cy="131" r="1.3" fill="#C9B18C"/><circle cx="117" cy="138" r="1.3" fill="#C9B18C"/><circle cx="140" cy="129" r="1.3" fill="#C9B18C"/><circle cx="153" cy="136" r="1.3" fill="#C9B18C"/><circle cx="176" cy="143" r="1.3" fill="#C9B18C"/><circle cx="189" cy="134" r="1.3" fill="#C9B18C"/><path d="M10,118 Q55,108 100,118 Q145,108 190,118" fill="none" stroke="#5B7553" stroke-width="3"/><path d="M16,121 l-6,16 M16,121 l0,18 M16,121 l6,16" stroke="#5C4630" stroke-width="1.3"/><circle cx="16" cy="116" r="4" fill="#A8763E"/><ellipse cx="16" cy="102" rx="11" ry="6" transform="rotate(20 16 102)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><circle cx="70" cy="116" r="4" fill="#A8763E"/><ellipse cx="70" cy="102" rx="11" ry="6" transform="rotate(20 70 102)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><circle cx="130" cy="116" r="4" fill="#A8763E"/><ellipse cx="130" cy="102" rx="11" ry="6" transform="rotate(20 130 102)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><circle cx="186" cy="116" r="4" fill="#A8763E"/><ellipse cx="186" cy="102" rx="11" ry="6" transform="rotate(20 186 102)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="100" cy="94" rx="34" ry="22" fill="#5B7553" stroke="#3E2F20"/><path d="M82,73 Q73,94 82,115" fill="none" stroke="#3E2F20" stroke-width="1.2"/><path d="M94,73 Q91,94 94,115" fill="none" stroke="#3E2F20" stroke-width="1.2"/><path d="M106,73 Q109,94 106,115" fill="none" stroke="#3E2F20" stroke-width="1.2"/><path d="M118,73 Q127,94 118,115" fill="none" stroke="#3E2F20" stroke-width="1.2"/></svg><text x="100" y="168" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">SARMENTO</text><text x="100" y="184" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">melancia</text><text x="100" y="199" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">NÃO enraíza em cada nó</text></g><g transform="translate(428,12)"><rect x="0" y="0" width="200" height="206" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="4" width="200" height="150" viewBox="0 0 200 150"><rect x="0" y="130" width="200" height="20" fill="#D8C9A8"/><line x1="0" y1="130" x2="200" y2="130" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="138" r="1.3" fill="#C9B18C"/><circle cx="32" cy="139" r="1.3" fill="#C9B18C"/><circle cx="45" cy="140" r="1.3" fill="#C9B18C"/><circle cx="68" cy="141" r="1.3" fill="#C9B18C"/><circle cx="81" cy="142" r="1.3" fill="#C9B18C"/><circle cx="104" cy="143" r="1.3" fill="#C9B18C"/><circle cx="117" cy="138" r="1.3" fill="#C9B18C"/><circle cx="140" cy="139" r="1.3" fill="#C9B18C"/><circle cx="153" cy="140" r="1.3" fill="#C9B18C"/><circle cx="176" cy="141" r="1.3" fill="#C9B18C"/><circle cx="189" cy="142" r="1.3" fill="#C9B18C"/><rect x="80" y="20" width="40" height="112" rx="20" fill="#5B7553" stroke="#3E2F20"/><path d="M80,80 L60,80 Q50,80 50,70 L50,40 Q50,30 60,30 Q70,30 70,40 L70,66 L80,66" fill="#5B7553" stroke="#3E2F20"/><path d="M120,90 L140,90 Q150,90 150,80 L150,56 Q150,46 140,46 Q130,46 130,56 L130,76 L120,76" fill="#5B7553" stroke="#3E2F20"/><path d="M80,40 l-6,-4 M80,40 l-6,4" stroke="#3E2F20" stroke-width="1"/><path d="M120,50 l6,-4 M120,50 l6,4" stroke="#3E2F20" stroke-width="1"/><path d="M80,100 l-6,-4 M80,100 l-6,4" stroke="#3E2F20" stroke-width="1"/><path d="M120,112 l6,-4 M120,112 l6,4" stroke="#3E2F20" stroke-width="1"/><path d="M50,50 l-6,-4 M50,50 l-6,4" stroke="#3E2F20" stroke-width="1"/><path d="M150,64 l6,-4 M150,64 l6,4" stroke="#3E2F20" stroke-width="1"/><path d="M100,22 l6,-4 M100,22 l6,4" stroke="#3E2F20" stroke-width="1"/><rect x="90" y="60" width="20" height="44" rx="8" fill="#E4D9C4"/><path d="M100,67.2 Q104,72.8 100,76 Q96,72.8 100,67.2 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><path d="M100,87.2 Q104,92.8 100,96 Q96,92.8 100,87.2 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><text x="166" y="112" text-anchor="middle" font-size="9" fill="#5C4630">parênquima</text><text x="166" y="122" text-anchor="middle" font-size="9" fill="#5C4630">aquífero</text><line x1="146" y1="110" x2="110" y2="84" stroke="#3E2F20" stroke-width="0.6"/></svg><text x="100" y="168" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">CLADÓDIO</text><text x="100" y="184" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">cactos</text><text x="100" y="199" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">caule verde; folhas → espinhos</text></g><g transform="translate(12,230)"><rect x="0" y="0" width="148" height="236" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="4" width="148" height="180" viewBox="0 0 148 180"><rect x="0" y="60" width="148" height="120" fill="#D8C9A8"/><line x1="0" y1="60" x2="148" y2="60" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="68" r="1.3" fill="#C9B18C"/><circle cx="32" cy="75" r="1.3" fill="#C9B18C"/><circle cx="45" cy="82" r="1.3" fill="#C9B18C"/><circle cx="68" cy="89" r="1.3" fill="#C9B18C"/><circle cx="81" cy="96" r="1.3" fill="#C9B18C"/><circle cx="104" cy="103" r="1.3" fill="#C9B18C"/><circle cx="117" cy="110" r="1.3" fill="#C9B18C"/><circle cx="140" cy="117" r="1.3" fill="#C9B18C"/><line x1="60" y1="60" x2="60" y2="10" stroke="#5B7553" stroke-width="3"/><ellipse cx="46" cy="20" rx="12" ry="5" transform="rotate(-30 46 20)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="74" cy="28" rx="12" ry="5" transform="rotate(30 74 28)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><path d="M60,62 Q64,90 84,110" fill="none" stroke="#C9B18C" stroke-width="2"/><path d="M60,62 l-8,20 M60,62 l2,24" stroke="#5C4630" stroke-width="1"/><ellipse cx="96" cy="124" rx="34" ry="24" fill="#C9B18C" stroke="#5C4630" stroke-width="1.2"/><circle cx="80" cy="114" r="2.5" fill="#5C4630"/><circle cx="104" cy="110" r="2.5" fill="#5C4630"/><circle cx="112" cy="130" r="2.5" fill="#5C4630"/><circle cx="88" cy="134" r="2.5" fill="#5C4630"/><line x1="112" y1="130" x2="128" y2="160" stroke="#3E2F20" stroke-width="0.7"/><text x="118" y="170" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">gemas</text></svg><text x="74" y="198" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">TUBÉRCULO</text><text x="74" y="213" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">batata-inglesa</text><text x="74" y="228" text-anchor="middle" font-size="9.5" font-weight="700" fill="#A8763E">guarda amido; tem gemas</text></g><g transform="translate(168,230)"><rect x="0" y="0" width="148" height="236" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="4" width="148" height="180" viewBox="0 0 148 180"><rect x="0" y="60" width="148" height="120" fill="#D8C9A8"/><line x1="0" y1="60" x2="148" y2="60" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="68" r="1.3" fill="#C9B18C"/><circle cx="32" cy="75" r="1.3" fill="#C9B18C"/><circle cx="45" cy="82" r="1.3" fill="#C9B18C"/><circle cx="68" cy="89" r="1.3" fill="#C9B18C"/><circle cx="81" cy="96" r="1.3" fill="#C9B18C"/><circle cx="104" cy="103" r="1.3" fill="#C9B18C"/><circle cx="117" cy="110" r="1.3" fill="#C9B18C"/><circle cx="140" cy="117" r="1.3" fill="#C9B18C"/><path d="M74,60 Q62,30 45.2,4" fill="none" stroke="#5B7553" stroke-width="4"/><path d="M74,60 Q74,30 74,4" fill="none" stroke="#5B7553" stroke-width="4"/><path d="M74,60 Q86,30 102.8,4" fill="none" stroke="#5B7553" stroke-width="4"/><path d="M74,62 Q30,100 50,140 L98,140 Q118,100 74,62 Z" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.2"/><path d="M74,74 Q44.4,104 57.2,140 M74,74 Q103.6,104 90.8,140" fill="none" stroke="#C9B18C"/><path d="M74,84 Q56.4,107.33333333333333 63.2,140 M74,84 Q91.6,107.33333333333333 84.8,140" fill="none" stroke="#C9B18C"/><rect x="48" y="138" width="52" height="8" rx="3" fill="#5C4630"/><line x1="56" y1="146" x2="51.5" y2="166" stroke="#5C4630"/><line x1="66" y1="146" x2="64" y2="166" stroke="#5C4630"/><line x1="74" y1="146" x2="74" y2="166" stroke="#5C4630"/><line x1="82" y1="146" x2="84" y2="166" stroke="#5C4630"/><line x1="92" y1="146" x2="96.5" y2="166" stroke="#5C4630"/><text x="124" y="162" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">prato</text><line x1="102" y1="142" x2="118" y2="156" stroke="#3E2F20" stroke-width="0.7"/></svg><text x="74" y="198" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">BULBO</text><text x="74" y="213" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">cebola, alho</text><text x="74" y="228" text-anchor="middle" font-size="9.5" font-weight="700" fill="#A8763E">caule = "prato" na base</text></g><g transform="translate(324,230)"><rect x="0" y="0" width="148" height="236" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="4" width="148" height="180" viewBox="0 0 148 180"><rect x="0" y="84" width="148" height="96" fill="#D8C9A8"/><line x1="0" y1="84" x2="148" y2="84" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="92" r="1.3" fill="#C9B18C"/><circle cx="32" cy="99" r="1.3" fill="#C9B18C"/><circle cx="45" cy="106" r="1.3" fill="#C9B18C"/><circle cx="68" cy="113" r="1.3" fill="#C9B18C"/><circle cx="81" cy="120" r="1.3" fill="#C9B18C"/><circle cx="104" cy="127" r="1.3" fill="#C9B18C"/><circle cx="117" cy="134" r="1.3" fill="#C9B18C"/><circle cx="140" cy="141" r="1.3" fill="#C9B18C"/><rect x="58" y="24" width="26" height="62" rx="4" fill="#5B7553" stroke="#3E2F20"/><line x1="64" y1="26" x2="64" y2="84" stroke="#3E2F20" stroke-width="0.6"/><line x1="72" y1="26" x2="72" y2="84" stroke="#3E2F20" stroke-width="0.6"/><line x1="80" y1="26" x2="80" y2="84" stroke="#3E2F20" stroke-width="0.6"/><ellipse cx="40" cy="18" rx="30" ry="8" transform="rotate(-25 40 18)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="102" cy="14" rx="30" ry="8" transform="rotate(25 102 14)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><rect x="18" y="100" width="114" height="22" rx="11" fill="#A8763E" stroke="#5C4630" stroke-width="1.2"/><path d="M30,122 l-4,18 M30,122 l4,20" stroke="#5C4630"/><path d="M56,122 l-4,18 M56,122 l4,20" stroke="#5C4630"/><path d="M84,122 l-4,18 M84,122 l4,20" stroke="#5C4630"/><path d="M112,122 l-4,18 M112,122 l4,20" stroke="#5C4630"/><text x="110" y="50" text-anchor="start" font-size="9" font-weight="700" fill="#3E2F20">pseudo-</text><text x="110" y="60" text-anchor="start" font-size="9" font-weight="700" fill="#3E2F20">caule</text><text x="75" y="166" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">rizoma</text></svg><text x="74" y="198" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">RIZOMA</text><text x="74" y="213" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">bananeira</text><text x="74" y="228" text-anchor="middle" font-size="9.5" font-weight="700" fill="#A8763E">caule horizontal sob o solo</text></g><g transform="translate(480,230)"><rect x="0" y="0" width="148" height="236" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="4" width="148" height="180" viewBox="0 0 148 180"><rect x="0" y="70" width="148" height="110" fill="#D8C9A8"/><line x1="0" y1="70" x2="148" y2="70" stroke="#5C4630" stroke-width="1.5"/><circle cx="9" cy="78" r="1.3" fill="#C9B18C"/><circle cx="32" cy="85" r="1.3" fill="#C9B18C"/><circle cx="45" cy="92" r="1.3" fill="#C9B18C"/><circle cx="68" cy="99" r="1.3" fill="#C9B18C"/><circle cx="81" cy="106" r="1.3" fill="#C9B18C"/><circle cx="104" cy="113" r="1.3" fill="#C9B18C"/><circle cx="117" cy="120" r="1.3" fill="#C9B18C"/><circle cx="140" cy="127" r="1.3" fill="#C9B18C"/><path d="M30,70 q-8,-16 0,-30 q4,10 8,4 q6,12 -8,26 Z" fill="#A6493A" stroke="#A8763E" stroke-width="1"/><path d="M54,70 q-8,-22 0,-36 q4,10 8,4 q6,18 -8,32 Z" fill="#A6493A" stroke="#A8763E" stroke-width="1"/><path d="M96,70 q-8,-18 0,-32 q4,10 8,4 q6,14 -8,28 Z" fill="#A6493A" stroke="#A8763E" stroke-width="1"/><path d="M118,70 q-8,-22 0,-36 q4,10 8,4 q6,18 -8,32 Z" fill="#A6493A" stroke="#A8763E" stroke-width="1"/><line x1="74" y1="70" x2="74" y2="34" stroke="#5C4630" stroke-width="2.5"/><ellipse cx="64" cy="40" rx="8" ry="4" transform="rotate(-30 64 40)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="84" cy="36" rx="8" ry="4" transform="rotate(30 84 36)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><path d="M60,76 Q40,104 56,140 Q74,156 92,140 Q108,104 88,76 Z" fill="#5C4630" stroke="#3E2F20"/><line x1="50" y1="140" x2="42" y2="166" stroke="#5C4630"/><line x1="62" y1="140" x2="58" y2="166" stroke="#5C4630"/><line x1="86" y1="140" x2="90" y2="166" stroke="#5C4630"/><line x1="98" y1="140" x2="106" y2="166" stroke="#5C4630"/><text x="74" y="112" text-anchor="middle" font-size="9" font-weight="700" fill="#F4EEE1">reserva</text></svg><text x="74" y="198" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">XILOPÓDIO</text><text x="74" y="213" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">plantas do cerrado</text><text x="74" y="228" text-anchor="middle" font-size="9.5" font-weight="700" fill="#A8763E">resiste às queimadas</text></g>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Em cima, caules aéreos especiais; embaixo, caules subterrâneos e o xilopódio. O "tronco" da bananeira é pseudocaule; o caule de verdade é o rizoma.</p>`
        },
        {
          heading: "Seivas — Xilema e Floema",
          body: `A planta transporta dois tipos de seiva, em direções opostas e por tecidos diferentes:

Seiva bruta
• Composta de água e sais minerais
• Transportada pelo xilema
• Sentido: vai da raiz para as folhas (sobe)

Seiva elaborada
• Composta pelos açúcares produzidos na fotossíntese
• Transportada pelo floema
• Sentido: vai das folhas para o restante da planta (desce)

A ilustração resume o sentido de cada seiva dentro da planta.`,
          visual: `<svg viewBox="0 0 640 348" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<rect width="640" height="348" rx="12" fill="#F4EEE1"/>
<defs><marker id="svX" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker><marker id="svF" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker></defs><rect x="20" y="250" width="280" height="80" fill="#D8C9A8"/><line x1="20" y1="250" x2="300" y2="250" stroke="#5C4630" stroke-width="1.5"/><circle cx="29" cy="258" r="1.3" fill="#C9B18C"/><circle cx="52" cy="265" r="1.3" fill="#C9B18C"/><circle cx="65" cy="272" r="1.3" fill="#C9B18C"/><circle cx="88" cy="279" r="1.3" fill="#C9B18C"/><circle cx="101" cy="286" r="1.3" fill="#C9B18C"/><circle cx="124" cy="293" r="1.3" fill="#C9B18C"/><circle cx="137" cy="300" r="1.3" fill="#C9B18C"/><circle cx="160" cy="307" r="1.3" fill="#C9B18C"/><circle cx="173" cy="314" r="1.3" fill="#C9B18C"/><circle cx="196" cy="321" r="1.3" fill="#C9B18C"/><circle cx="209" cy="262" r="1.3" fill="#C9B18C"/><circle cx="232" cy="269" r="1.3" fill="#C9B18C"/><circle cx="245" cy="276" r="1.3" fill="#C9B18C"/><circle cx="268" cy="283" r="1.3" fill="#C9B18C"/><circle cx="281" cy="290" r="1.3" fill="#C9B18C"/><circle cx="56" cy="50" r="18" fill="#A8763E"/><line x1="80.0" y1="50.0" x2="88.0" y2="50.0" stroke="#A8763E" stroke-width="2"/><line x1="73.0" y1="67.0" x2="78.6" y2="72.6" stroke="#A8763E" stroke-width="2"/><line x1="56.0" y1="74.0" x2="56.0" y2="82.0" stroke="#A8763E" stroke-width="2"/><line x1="39.0" y1="67.0" x2="33.4" y2="72.6" stroke="#A8763E" stroke-width="2"/><line x1="32.0" y1="50.0" x2="24.0" y2="50.0" stroke="#A8763E" stroke-width="2"/><line x1="39.0" y1="33.0" x2="33.4" y2="27.4" stroke="#A8763E" stroke-width="2"/><line x1="56.0" y1="26.0" x2="56.0" y2="18.0" stroke="#A8763E" stroke-width="2"/><line x1="73.0" y1="33.0" x2="78.6" y2="27.4" stroke="#A8763E" stroke-width="2"/><rect x="150" y="60" width="20" height="192" fill="#5B7553" stroke="#3E2F20"/><ellipse cx="118" cy="82" rx="34" ry="12" transform="rotate(-20 118 82)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="204" cy="70" rx="34" ry="12" transform="rotate(20 204 70)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="120" cy="140" rx="30" ry="11" transform="rotate(-15 120 140)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="200" cy="128" rx="30" ry="11" transform="rotate(15 200 128)" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><path d="M156,250 Q140,290 120,318 M160,250 L160,322 M164,250 Q180,290 200,318 M158,280 l-24,10 M162,296 l24,8" fill="none" stroke="#5C4630" stroke-width="2"/><path d="M110,294 Q115,301 110,305 Q105,301 110,294 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><path d="M214,300 Q219,307 214,311 Q209,307 214,300 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><path d="M140,313.2 Q144,318.8 140,322 Q136,318.8 140,313.2 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><line x1="155" y1="300" x2="155" y2="74" stroke="#6E8C99" stroke-width="2" marker-end="url(#svX)"/><line x1="165" y1="72" x2="165" y2="238" stroke="#A8763E" stroke-width="2" marker-end="url(#svF)"/><text x="118" y="40" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">luz</text><text x="250" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#5B7553">fotossíntese</text><text x="250" y="60" text-anchor="middle" font-size="10" fill="#5C4630">produz açúcar</text><rect x="150" y="160" width="20" height="40" fill="none" stroke="#3E2F20" stroke-dasharray="3 2"/><line x1="170" y1="160" x2="352" y2="70" stroke="#3E2F20" stroke-dasharray="3 2" stroke-width="0.8"/><line x1="170" y1="200" x2="352" y2="290" stroke="#3E2F20" stroke-dasharray="3 2" stroke-width="0.8"/><rect x="352" y="56" width="270" height="248" rx="12" fill="none" stroke="#C9B18C"/><text x="487" y="78" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">DENTRO DO CAULE</text><rect x="382" y="92" width="64" height="190" rx="6" fill="#E4D9C4" stroke="#6E8C99" stroke-width="2"/><rect x="528" y="92" width="64" height="190" rx="6" fill="#E4D9C4" stroke="#A8763E" stroke-width="2"/><path d="M414,253.4 Q419.5,261.1 414,265.5 Q408.5,261.1 414,253.4 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><path d="M414,213.4 Q419.5,221.1 414,225.5 Q408.5,221.1 414,213.4 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><path d="M414,173.4 Q419.5,181.1 414,185.5 Q408.5,181.1 414,173.4 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><path d="M414,133.4 Q419.5,141.1 414,145.5 Q408.5,141.1 414,133.4 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><path d="M414,103.4 Q419.5,111.1 414,115.5 Q408.5,111.1 414,103.4 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><line x1="400" y1="268" x2="400" y2="104" stroke="#6E8C99" stroke-width="2" marker-end="url(#svX)"/><line x1="430" y1="268" x2="430" y2="104" stroke="#6E8C99" stroke-width="2" marker-end="url(#svX)"/><polygon points="560,102 567,106 567,114 560,118 553,114 553,106" fill="#A8763E" stroke="#5C4630" stroke-width="0.6"/><polygon points="560,142 567,146 567,154 560,158 553,154 553,146" fill="#A8763E" stroke="#5C4630" stroke-width="0.6"/><polygon points="560,182 567,186 567,194 560,198 553,194 553,186" fill="#A8763E" stroke="#5C4630" stroke-width="0.6"/><polygon points="560,222 567,226 567,234 560,238 553,234 553,226" fill="#A8763E" stroke="#5C4630" stroke-width="0.6"/><line x1="542" y1="104" x2="542" y2="268" stroke="#A8763E" stroke-width="2" marker-end="url(#svF)"/><line x1="578" y1="104" x2="578" y2="268" stroke="#A8763E" stroke-width="2" marker-end="url(#svF)"/><text x="414" y="298" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">XILEMA ↑</text><text x="560" y="298" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">FLOEMA ↓</text><text x="414" y="322" text-anchor="middle" font-size="10" fill="#5C4630">seiva bruta: água + sais</text><text x="414" y="336" text-anchor="middle" font-size="10" font-weight="700" fill="#6E8C99">raiz → folhas</text><text x="560" y="322" text-anchor="middle" font-size="10" fill="#5C4630">seiva elaborada: açúcares</text><text x="560" y="336" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">folhas → resto da planta</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">A água sobe pelo xilema (azul); o açúcar feito nas folhas desce pelo floema (laranja).</p>`
        },
        {
          heading: "Folha — Partes e funções",
          body: `Partes da folha:

• Limbo — parte larga e achatada, onde ocorre a maior parte da fotossíntese
• Nervura — feixes de vasos condutores (xilema e floema)
• Pecíolo — "cabinho" que liga o limbo ao caule
• Estípula — pequena expansão na base do pecíolo
• Estômato — estrutura da epiderme responsável pelas trocas gasosas
• Mesófilo — tecido interno, entre as duas epidermes

Quanto ao pecíolo:
• Folha sem pecíolo → séssil
• Folha com pecíolo → peciolada

Funções da folha:
• Fotossíntese
• Respiração
• Transpiração (perda de água na forma de vapor)
• Exsudação (eliminação de água na forma líquida, em gotas)`,
          visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">

<rect width="640" height="300" rx="12" fill="#F4EEE1"/>
<text x="320" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">Partes da folha</text>
<path d="M120,150 C170,70 330,50 450,150 C330,250 170,230 120,150 Z" fill="#5B7553" stroke="#3E2F20" stroke-width="2"/>
<path d="M120,150 L450,150" stroke="#E4D9C4" stroke-width="2.5"/>
<path d="M150,150 Q170,135 180,120" fill="none" stroke="#E4D9C4" stroke-width="1.3"/><path d="M150,150 Q170,165 180,180" fill="none" stroke="#E4D9C4" stroke-width="1.3"/><path d="M200,150 Q220,135 230,100" fill="none" stroke="#E4D9C4" stroke-width="1.3"/><path d="M200,150 Q220,165 230,200" fill="none" stroke="#E4D9C4" stroke-width="1.3"/><path d="M250,150 Q270,135 280,92" fill="none" stroke="#E4D9C4" stroke-width="1.3"/><path d="M250,150 Q270,165 280,208" fill="none" stroke="#E4D9C4" stroke-width="1.3"/><path d="M300,150 Q320,135 330,96" fill="none" stroke="#E4D9C4" stroke-width="1.3"/><path d="M300,150 Q320,165 330,204" fill="none" stroke="#E4D9C4" stroke-width="1.3"/><path d="M350,150 Q370,135 380,110" fill="none" stroke="#E4D9C4" stroke-width="1.3"/><path d="M350,150 Q370,165 380,190" fill="none" stroke="#E4D9C4" stroke-width="1.3"/>
<path d="M40,150 L120,150" stroke="#5C4630" stroke-width="4"/>
<path d="M44,150 Q34,128 52,122 Q58,140 44,150 Z" fill="#A8763E" stroke="#5C4630"/>
<path d="M44,150 Q34,172 52,178 Q58,160 44,150 Z" fill="#A8763E" stroke="#5C4630"/>
<rect x="18" y="146" width="22" height="8" fill="#C9B18C" stroke="#5C4630"/>
<line x1="290" y1="120" x2="520" y2="70" stroke="#5C4630" stroke-width="1.2"/><text x="526" y="74" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">Limbo</text><text x="526" y="90" text-anchor="start" font-size="10" fill="#5C4630">parte larga e achatada</text>
<line x1="330" y1="150" x2="520" y2="140" stroke="#5C4630" stroke-width="1.2"/><text x="526" y="144" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">Nervura</text><text x="526" y="160" text-anchor="start" font-size="10" fill="#5C4630">vasos (xilema e floema)</text>
<line x1="85" y1="154" x2="160" y2="245" stroke="#5C4630" stroke-width="1.2"/><text x="166" y="250" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">Pecíolo</text><text x="166" y="266" text-anchor="start" font-size="10" fill="#5C4630">liga o limbo ao caule</text>
<line x1="50" y1="124" x2="70" y2="60" stroke="#5C4630" stroke-width="1.2"/><text x="76" y="56" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">Estípula</text><text x="76" y="72" text-anchor="start" font-size="10" fill="#5C4630">expansão na base</text>
<text x="29" y="172" text-anchor="middle" font-size="10" fill="#5C4630">caule</text>

</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Folha peciolada. Se não tivesse pecíolo (limbo preso direto ao caule), seria séssil.</p>`
        },
        {
          heading: "Histologia da folha",
          body: `Em um corte transversal, de cima para baixo:

• Cutícula — camada impermeável que reduz a perda de água
• Epiderme superior
• Mesófilo foliar — formado pelo parênquima paliçádico e pelo parênquima lacunoso
• Xilema e floema — nas nervuras, dentro do mesófilo
• Epiderme inferior — onde ficam a maioria dos estômatos

📌 O parênquima paliçádico apresenta células com muitos cloroplastos: é o principal tecido da fotossíntese.`,
          visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
<rect width="640" height="300" rx="12" fill="#F4EEE1"/><text x="320" y="22" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">Corte transversal da folha</text><rect x="30" y="38" width="370" height="5" fill="#A8763E"/><rect x="30" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="60.8" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="91.6" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="122.39999999999999" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="153.2" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="184" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="214.8" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="245.60000000000002" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="276.40000000000003" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="307.20000000000005" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="338.00000000000006" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="368.80000000000007" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="399.6000000000001" y="43" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="32" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="42.5" cy="78" r="4" fill="#5B7553"/><circle cx="42.5" cy="96" r="4" fill="#5B7553"/><circle cx="42.5" cy="114" r="4" fill="#5B7553"/><rect x="56.2" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="66.7" cy="78" r="4" fill="#5B7553"/><circle cx="66.7" cy="96" r="4" fill="#5B7553"/><circle cx="66.7" cy="114" r="4" fill="#5B7553"/><rect x="80.4" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="90.9" cy="78" r="4" fill="#5B7553"/><circle cx="90.9" cy="96" r="4" fill="#5B7553"/><circle cx="90.9" cy="114" r="4" fill="#5B7553"/><rect x="104.60000000000001" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="115.10000000000001" cy="78" r="4" fill="#5B7553"/><circle cx="115.10000000000001" cy="96" r="4" fill="#5B7553"/><circle cx="115.10000000000001" cy="114" r="4" fill="#5B7553"/><rect x="128.8" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="139.3" cy="78" r="4" fill="#5B7553"/><circle cx="139.3" cy="96" r="4" fill="#5B7553"/><circle cx="139.3" cy="114" r="4" fill="#5B7553"/><rect x="153" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="163.5" cy="78" r="4" fill="#5B7553"/><circle cx="163.5" cy="96" r="4" fill="#5B7553"/><circle cx="163.5" cy="114" r="4" fill="#5B7553"/><rect x="177.2" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="187.7" cy="78" r="4" fill="#5B7553"/><circle cx="187.7" cy="96" r="4" fill="#5B7553"/><circle cx="187.7" cy="114" r="4" fill="#5B7553"/><rect x="201.39999999999998" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="211.89999999999998" cy="78" r="4" fill="#5B7553"/><circle cx="211.89999999999998" cy="96" r="4" fill="#5B7553"/><circle cx="211.89999999999998" cy="114" r="4" fill="#5B7553"/><rect x="225.59999999999997" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="236.09999999999997" cy="78" r="4" fill="#5B7553"/><circle cx="236.09999999999997" cy="96" r="4" fill="#5B7553"/><circle cx="236.09999999999997" cy="114" r="4" fill="#5B7553"/><rect x="249.79999999999995" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="260.29999999999995" cy="78" r="4" fill="#5B7553"/><circle cx="260.29999999999995" cy="96" r="4" fill="#5B7553"/><circle cx="260.29999999999995" cy="114" r="4" fill="#5B7553"/><rect x="273.99999999999994" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="284.49999999999994" cy="78" r="4" fill="#5B7553"/><circle cx="284.49999999999994" cy="96" r="4" fill="#5B7553"/><circle cx="284.49999999999994" cy="114" r="4" fill="#5B7553"/><rect x="298.19999999999993" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="308.69999999999993" cy="78" r="4" fill="#5B7553"/><circle cx="308.69999999999993" cy="96" r="4" fill="#5B7553"/><circle cx="308.69999999999993" cy="114" r="4" fill="#5B7553"/><rect x="322.3999999999999" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="332.8999999999999" cy="78" r="4" fill="#5B7553"/><circle cx="332.8999999999999" cy="96" r="4" fill="#5B7553"/><circle cx="332.8999999999999" cy="114" r="4" fill="#5B7553"/><rect x="346.5999999999999" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="357.0999999999999" cy="78" r="4" fill="#5B7553"/><circle cx="357.0999999999999" cy="96" r="4" fill="#5B7553"/><circle cx="357.0999999999999" cy="114" r="4" fill="#5B7553"/><rect x="370.7999999999999" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="381.2999999999999" cy="78" r="4" fill="#5B7553"/><circle cx="381.2999999999999" cy="96" r="4" fill="#5B7553"/><circle cx="381.2999999999999" cy="114" r="4" fill="#5B7553"/><rect x="394.9999999999999" y="65" width="21" height="66" rx="6" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="405.4999999999999" cy="78" r="4" fill="#5B7553"/><circle cx="405.4999999999999" cy="96" r="4" fill="#5B7553"/><circle cx="405.4999999999999" cy="114" r="4" fill="#5B7553"/><circle cx="48" cy="150" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="51" cy="148" r="3" fill="#5B7553"/><circle cx="80" cy="170" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="83" cy="168" r="3" fill="#5B7553"/><circle cx="52" cy="196" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="55" cy="194" r="3" fill="#5B7553"/><circle cx="112" cy="150" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="115" cy="148" r="3" fill="#5B7553"/><circle cx="118" cy="194" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="121" cy="192" r="3" fill="#5B7553"/><circle cx="150" cy="170" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="153" cy="168" r="3" fill="#5B7553"/><circle cx="290" cy="150" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="293" cy="148" r="3" fill="#5B7553"/><circle cx="300" cy="194" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="303" cy="192" r="3" fill="#5B7553"/><circle cx="330" cy="170" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="333" cy="168" r="3" fill="#5B7553"/><circle cx="362" cy="150" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="365" cy="148" r="3" fill="#5B7553"/><circle cx="382" cy="192" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="385" cy="190" r="3" fill="#5B7553"/><circle cx="262" cy="176" r="13" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="265" cy="174" r="3" fill="#5B7553"/><ellipse cx="210" cy="172" rx="40" ry="30" fill="#F4EEE1" stroke="#5C4630" stroke-width="1.5"/><circle cx="196" cy="160" r="7" fill="#A8763E" stroke="#5C4630"/><circle cx="212" cy="156" r="7" fill="#A8763E" stroke="#5C4630"/><circle cx="228" cy="160" r="7" fill="#A8763E" stroke="#5C4630"/><circle cx="196" cy="186" r="5" fill="#C9B18C" stroke="#5C4630"/><circle cx="210" cy="190" r="5" fill="#C9B18C" stroke="#5C4630"/><circle cx="224" cy="186" r="5" fill="#C9B18C" stroke="#5C4630"/><rect x="30" y="214" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="60.8" y="214" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="91.6" y="214" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="122.39999999999999" y="214" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="153.2" y="214" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="184" y="214" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="214.8" y="214" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="245.60000000000002" y="214" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="276.40000000000003" y="214" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="368.80000000000007" y="214" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><rect x="399.6000000000001" y="214" width="30.8" height="20" fill="#E4D9C4" stroke="#C9B18C"/><path d="M308,214 Q318,224 308,234 Q298,224 308,214 Z" fill="#5B7553" stroke="#3E2F20"/><path d="M332,214 Q322,224 332,234 Q342,224 332,214 Z" fill="#5B7553" stroke="#3E2F20"/><rect x="30" y="234" width="370" height="4" fill="#A8763E"/><line x1="400" y1="40" x2="430" y2="44" stroke="#5C4630" stroke-width="1.2"/><text x="436" y="48" text-anchor="start" font-size="11" fill="#3E2F20">Cutícula</text><line x1="400" y1="53" x2="430" y2="66" stroke="#5C4630" stroke-width="1.2"/><text x="436" y="70" text-anchor="start" font-size="11" fill="#3E2F20">Epiderme superior</text><line x1="396" y1="98" x2="430" y2="100" stroke="#5C4630" stroke-width="1.2"/><text x="436" y="104" text-anchor="start" font-size="11" font-weight="700" fill="#3E2F20">Parênquima paliçádico</text><line x1="395" y1="170" x2="430" y2="150" stroke="#5C4630" stroke-width="1.2"/><text x="436" y="154" text-anchor="start" font-size="11" fill="#3E2F20">Parênquima lacunoso</text><line x1="250" y1="172" x2="430" y2="182" stroke="#5C4630" stroke-width="1.2"/><text x="436" y="186" text-anchor="start" font-size="11" fill="#3E2F20">Xilema (em cima) e floema (embaixo)</text><line x1="400" y1="224" x2="430" y2="222" stroke="#5C4630" stroke-width="1.2"/><text x="436" y="226" text-anchor="start" font-size="11" fill="#3E2F20">Epiderme inferior</text><line x1="320" y1="238" x2="430" y2="264" stroke="#5C4630" stroke-width="1.2"/><text x="436" y="268" text-anchor="start" font-size="11" font-weight="700" fill="#3E2F20">Estômato</text><line x1="20" y1="65" x2="20" y2="212" stroke="#5B7553" stroke-width="2"/><text x="14" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="#5B7553" transform="rotate(-90 14 140)">mesófilo</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">O paliçádico (logo abaixo da epiderme superior) tem células cheias de cloroplastos. Os estômatos ficam principalmente na epiderme inferior.</p>`
        },
        {
          heading: "Adaptações das folhas",
          body: `Ambientes aquáticos
• Parênquima aerífero (aerênquima), com espaços cheios de ar que ajudam a planta a flutuar
• Cutícula fina ou inexistente (não há risco de perder água)

Ambientes áridos
• Parênquima aquífero (armazena água)
• Folhas transformadas em espinhos (reduz a perda de água por transpiração)
• Caules clorofilados (o caule assume a fotossíntese, como nos cactos)`,
          visual: `<svg viewBox="0 0 640 324" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<rect width="640" height="324" rx="12" fill="#F4EEE1"/>
<g transform="translate(12,12)"><rect x="0" y="0" width="302" height="300" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><text x="151" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">AMBIENTE AQUÁTICO</text><rect x="10" y="100" width="282" height="110" fill="#B9CBD3"/><path d="M10,100 q20,-5 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t42,0" fill="none" stroke="#6E8C99" stroke-width="1.5"/><path d="M40,98 A60,12 0 1 0 160,98 L100,98 Z" fill="#5B7553" stroke="#3E2F20"/><path d="M100,98 L120,100" stroke="#F4EEE1" stroke-width="2"/><path d="M100,110 Q96,150 104,210" fill="none" stroke="#5B7553" stroke-width="2.5"/><ellipse cx="84" cy="82" rx="10" ry="5" transform="rotate(-40 84 82)" fill="#F4EEE1" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="100" cy="78" rx="10" ry="5" transform="rotate(0 100 78)" fill="#F4EEE1" stroke="#3E2F20" stroke-width="0.8"/><ellipse cx="116" cy="82" rx="10" ry="5" transform="rotate(40 116 82)" fill="#F4EEE1" stroke="#3E2F20" stroke-width="0.8"/><circle cx="100" cy="84" r="4" fill="#A8763E"/><circle cx="226" cy="132" r="54" fill="#5B7553" stroke="#3E2F20" stroke-width="1.5"/><circle cx="206" cy="116" r="12" fill="#F4EEE1" stroke="#3E2F20" stroke-width="0.8"/><circle cx="234" cy="108" r="10" fill="#F4EEE1" stroke="#3E2F20" stroke-width="0.8"/><circle cx="246" cy="136" r="13" fill="#F4EEE1" stroke="#3E2F20" stroke-width="0.8"/><circle cx="216" cy="148" r="11" fill="#F4EEE1" stroke="#3E2F20" stroke-width="0.8"/><circle cx="230" cy="166" r="8" fill="#F4EEE1" stroke="#3E2F20" stroke-width="0.8"/><circle cx="198" cy="136" r="7" fill="#F4EEE1" stroke="#3E2F20" stroke-width="0.8"/><line x1="160" y1="98" x2="178" y2="112" stroke="#3E2F20" stroke-dasharray="3 2"/><text x="151" y="236" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">parênquima aerífero (aerênquima)</text><text x="151" y="252" text-anchor="middle" font-size="10" fill="#5C4630">espaços com ar → a folha flutua</text><text x="151" y="274" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">cutícula fina ou inexistente</text><text x="151" y="290" text-anchor="middle" font-size="10" fill="#5C4630">não há risco de perder água</text></g><g transform="translate(326,12)"><rect x="0" y="0" width="302" height="300" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><text x="151" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">AMBIENTE ÁRIDO</text><rect x="10" y="186" width="282" height="24" fill="#D8C9A8"/><line x1="10" y1="186" x2="292" y2="186" stroke="#5C4630" stroke-width="1.5"/><circle cx="19" cy="194" r="1.3" fill="#C9B18C"/><circle cx="42" cy="201" r="1.3" fill="#C9B18C"/><circle cx="55" cy="198" r="1.3" fill="#C9B18C"/><circle cx="78" cy="195" r="1.3" fill="#C9B18C"/><circle cx="91" cy="202" r="1.3" fill="#C9B18C"/><circle cx="114" cy="199" r="1.3" fill="#C9B18C"/><circle cx="127" cy="196" r="1.3" fill="#C9B18C"/><circle cx="150" cy="203" r="1.3" fill="#C9B18C"/><circle cx="163" cy="200" r="1.3" fill="#C9B18C"/><circle cx="186" cy="197" r="1.3" fill="#C9B18C"/><circle cx="199" cy="194" r="1.3" fill="#C9B18C"/><circle cx="222" cy="201" r="1.3" fill="#C9B18C"/><circle cx="235" cy="198" r="1.3" fill="#C9B18C"/><circle cx="258" cy="195" r="1.3" fill="#C9B18C"/><circle cx="271" cy="202" r="1.3" fill="#C9B18C"/><circle cx="256" cy="62" r="16" fill="#A8763E"/><line x1="277.0" y1="62.0" x2="284.0" y2="62.0" stroke="#A8763E" stroke-width="2"/><line x1="270.8" y1="76.8" x2="275.8" y2="81.8" stroke="#A8763E" stroke-width="2"/><line x1="256.0" y1="83.0" x2="256.0" y2="90.0" stroke="#A8763E" stroke-width="2"/><line x1="241.2" y1="76.8" x2="236.2" y2="81.8" stroke="#A8763E" stroke-width="2"/><line x1="235.0" y1="62.0" x2="228.0" y2="62.0" stroke="#A8763E" stroke-width="2"/><line x1="241.2" y1="47.2" x2="236.2" y2="42.2" stroke="#A8763E" stroke-width="2"/><line x1="256.0" y1="41.0" x2="256.0" y2="34.0" stroke="#A8763E" stroke-width="2"/><line x1="270.8" y1="47.2" x2="275.8" y2="42.2" stroke="#A8763E" stroke-width="2"/><rect x="70" y="56" width="46" height="132" rx="23" fill="#5B7553" stroke="#3E2F20"/><path d="M70,130 L48,130 Q38,130 38,120 L38,92 Q38,82 48,82 Q58,82 58,92 L58,116 L70,116" fill="#5B7553" stroke="#3E2F20"/><path d="M70,76 l-8,-5 M70,76 l-8,5" stroke="#3E2F20" stroke-width="1.1"/><path d="M116,86 l8,-5 M116,86 l8,5" stroke="#3E2F20" stroke-width="1.1"/><path d="M70,150 l-8,-5 M70,150 l-8,5" stroke="#3E2F20" stroke-width="1.1"/><path d="M116,160 l8,-5 M116,160 l8,5" stroke="#3E2F20" stroke-width="1.1"/><path d="M38,98 l-8,-5 M38,98 l-8,5" stroke="#3E2F20" stroke-width="1.1"/><path d="M93,58 l8,-5 M93,58 l8,5" stroke="#3E2F20" stroke-width="1.1"/><path d="M116,120 l8,-5 M116,120 l8,5" stroke="#3E2F20" stroke-width="1.1"/><rect x="82" y="96" width="22" height="56" rx="9" fill="#E4D9C4"/><path d="M93,104.6 Q97.5,110.9 93,114.5 Q88.5,110.9 93,104.6 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><path d="M93,128.6 Q97.5,134.9 93,138.5 Q88.5,134.9 93,128.6 Z" fill="#B9CBD3" stroke="#6E8C99" stroke-width="0.8"/><line x1="104" y1="124" x2="150" y2="124" stroke="#3E2F20" stroke-width="0.7"/><text x="154" y="120" text-anchor="start" font-size="10" font-weight="700" fill="#3E2F20">parênquima</text><text x="154" y="132" text-anchor="start" font-size="10" font-weight="700" fill="#3E2F20">aquífero</text><line x1="124" y1="86" x2="160" y2="88" stroke="#3E2F20" stroke-width="0.7"/><text x="164" y="92" text-anchor="start" font-size="10" font-weight="700" fill="#3E2F20">espinhos</text><text x="151" y="236" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">folhas transformadas em espinhos</text><text x="151" y="252" text-anchor="middle" font-size="10" fill="#5C4630">menos superfície → menos transpiração</text><text x="151" y="274" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">caule clorofilado</text><text x="151" y="290" text-anchor="middle" font-size="10" fill="#5C4630">o caule verde faz a fotossíntese</text></g>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Cada ambiente seleciona folhas diferentes: na água o problema é flutuar; no deserto, não perder água.</p>`
        }
      ],
      quiz: [
        {
          q: "Qual a diferença no número de cotilédones entre monocotiledôneas e eudicotiledôneas?",
          options: [
            "Monocotiledôneas têm 2 e eudicotiledôneas têm 1",
            "Monocotiledôneas têm 1 e eudicotiledôneas têm 2",
            "Ambas têm sempre 1 cotilédone",
            "Ambas têm sempre 2 cotilédones"
          ],
          correct: 1
        },
        {
          q: "Quais são as funções da raiz?",
          options: [
            "Fixação, absorção de água e sais minerais, reserva de nutrientes e transporte",
            "Apenas fotossíntese e reprodução",
            "Apenas sustentação e condução de seiva elaborada",
            "Produção de flores e frutos"
          ],
          correct: 0
        },
        {
          q: "Qual tipo de raiz é típico de uma planta parasita, como a erva-de-passarinho, que retira água e nutrientes da planta hospedeira?",
          options: [
            "Raiz tuberosa",
            "Raiz respiratória (pneumatóforo)",
            "Raiz haustório (sugadora)",
            "Raiz cintura"
          ],
          correct: 2
        },
        {
          q: "Qual é a ordem correta das camadas de um fruto carnoso, de fora para dentro?",
          options: [
            "Endocarpo → Mesocarpo → Epicarpo → Semente",
            "Epicarpo → Mesocarpo → Endocarpo → Semente",
            "Mesocarpo → Epicarpo → Semente → Endocarpo",
            "Semente → Endocarpo → Mesocarpo → Epicarpo"
          ],
          correct: 1
        },
        {
          q: "A manga e o pêssego são exemplos de qual tipo de fruto carnoso?",
          options: [
            "Baga",
            "Pomo",
            "Hesperídio",
            "Drupa"
          ],
          correct: 3
        },
        {
          q: "Frutos que se abrem naturalmente quando amadurecem, liberando as sementes, são chamados de:",
          options: [
            "Indeiscentes",
            "Deiscentes",
            "Hesperídios",
            "Pomos"
          ],
          correct: 1
        },
        {
          q: "Qual tipo de caule tem nós e entrenós bem visíveis, com as folhas saindo dos nós? Exemplo: bambu e cana-de-açúcar.",
          options: [
            "Tronco",
            "Haste",
            "Colmo",
            "Estipe"
          ],
          correct: 2
        },
        {
          q: "O caule liso, único e sem ramificações, típico do coqueiro e da palmeira, é chamado de:",
          options: [
            "Tronco",
            "Colmo",
            "Haste",
            "Estipe"
          ],
          correct: 3
        },
        {
          q: "Qual tecido transporta a seiva bruta (água e sais minerais) da raiz até as folhas?",
          options: [
            "Floema",
            "Xilema",
            "Epicarpo",
            "Mesocarpo"
          ],
          correct: 1
        },
        {
          q: "A raiz fasciculada (em cabeleira) e a raiz axial (pivotante) são típicas, respectivamente, de:",
          options: [
            "Eudicotiledôneas e monocotiledôneas",
            "Monocotiledôneas e eudicotiledôneas",
            "Ambas são típicas de monocotiledôneas",
            "Ambas são típicas de eudicotiledôneas"
          ],
          correct: 1
        },
        {
          q: "Qual característica das folhas é típica das monocotiledôneas?",
          options: [
            "Nervuras ramificadas",
            "Nervuras paralelas",
            "Ausência de nervuras",
            "Nervuras em forma de espiral"
          ],
          correct: 1
        },
        {
          q: "Milho, arroz, capim e bananeira são exemplos de:",
          options: [
            "Eudicotiledôneas",
            "Gimnospermas",
            "Monocotiledôneas",
            "Briófitas"
          ],
          correct: 2
        },
        {
          q: "Feijão, mangueira, girassol e cenoura são exemplos de:",
          options: [
            "Eudicotiledôneas",
            "Monocotiledôneas",
            "Pteridófitas",
            "Fungos"
          ],
          correct: 0
        },
        {
          q: "A raiz cintura, típica de plantas epífitas como bromélias e orquídeas, tem a função de:",
          options: [
            "Retirar alimento da planta hospedeira",
            "Armazenar grande quantidade de amido",
            "Fixar a planta sobre outra sem retirar alimento dela",
            "Captar oxigênio em solo alagado"
          ],
          correct: 2
        },
        {
          q: "Qual é o tipo de raiz da figueira, que envolve o tronco da planta hospedeira e pode sufocá-la?",
          options: [
            "Raiz estranguladora",
            "Raiz tabular",
            "Raiz escora",
            "Raiz grampiforme"
          ],
          correct: 0
        },
        {
          q: "A raiz que sai do caule e entra no solo, dando sustentação extra à planta (como no milho e no mangue), é a:",
          options: [
            "Raiz tuberosa",
            "Raiz haustório",
            "Raiz escora",
            "Raiz cintura"
          ],
          correct: 2
        },
        {
          q: "Qual tipo de raiz vive em solos alagados, como nos manguezais, e sai do solo para captar oxigênio?",
          options: [
            "Raiz tabular",
            "Raiz respiratória (pneumatóforo)",
            "Raiz tuberosa",
            "Raiz estranguladora"
          ],
          correct: 1
        },
        {
          q: "A sumaúma possui raízes grandes e achatadas que dão estabilidade à árvore. Esse tipo de raiz é chamado de:",
          options: [
            "Escora",
            "Grampiforme",
            "Fasciculada",
            "Tabular"
          ],
          correct: 3
        },
        {
          q: "Mandioca, batata-doce, cenoura e beterraba possuem qual tipo de raiz especial?",
          options: [
            "Tuberosa",
            "Respiratória",
            "Haustório",
            "Estranguladora"
          ],
          correct: 0
        },
        {
          q: "A hera se fixa em paredes, troncos ou rochas por meio de qual tipo de raiz?",
          options: [
            "Raiz tuberosa",
            "Raiz tabular",
            "Raiz grampiforme",
            "Raiz pivotante"
          ],
          correct: 2
        },
        {
          q: "Todo fruto verdadeiro se desenvolve a partir de qual estrutura da flor, após a fecundação?",
          options: [
            "Ovário",
            "Estame",
            "Pétala",
            "Sépala"
          ],
          correct: 0
        },
        {
          q: "Tomate, uva e mamão são exemplos de qual tipo de fruto carnoso, em que a semente fica solta na polpa?",
          options: [
            "Drupa",
            "Pomo",
            "Baga",
            "Hesperídio"
          ],
          correct: 2
        },
        {
          q: "Maçã e pera, cujo \"miolo\" central concentra as sementes, são exemplos de:",
          options: [
            "Baga",
            "Pomo",
            "Drupa",
            "Hesperídio"
          ],
          correct: 1
        },
        {
          q: "Qual fruto carnoso tem casca grossa rica em óleos e polpa dividida em gomos, como a laranja e o limão?",
          options: [
            "Hesperídio",
            "Baga",
            "Drupa",
            "Pomo"
          ],
          correct: 0
        },
        {
          q: "Frutos que não se abrem naturalmente, liberando a semente apenas quando se decompõem ou são comidos, são chamados de:",
          options: [
            "Deiscentes",
            "Indeiscentes",
            "Pomos",
            "Bagas"
          ],
          correct: 1
        },
        {
          q: "Qual das alternativas NÃO é uma das funções do caule apresentadas no conteúdo?",
          options: [
            "Sustentação da planta",
            "Condução das seivas bruta e elaborada",
            "Absorção de água e sais minerais do solo",
            "Produção de novos brotos"
          ],
          correct: 2
        },
        {
          q: "Qual tipo de caule é lenhoso, grosso e ramificado, como o das árvores?",
          options: [
            "Haste",
            "Tronco",
            "Colmo",
            "Estipe"
          ],
          correct: 1
        },
        {
          q: "O caule verde, flexível e herbáceo, como o da alface e do girassol, é chamado de:",
          options: [
            "Tronco",
            "Estipe",
            "Colmo",
            "Haste"
          ],
          correct: 3
        },
        {
          q: "A seiva elaborada, formada pelos açúcares produzidos na fotossíntese, é transportada por qual tecido e em qual sentido?",
          options: [
            "Xilema, da raiz para as folhas",
            "Floema, das folhas para o restante da planta",
            "Xilema, das folhas para a raiz",
            "Floema, da raiz para as folhas"
          ],
          correct: 1
        },
        {
          q: "A seiva bruta (água e sais minerais) percorre a planta em qual sentido?",
          options: [
            "Das folhas para a raiz",
            "Do caule para os frutos",
            "Da raiz para as folhas",
            "Dos frutos para as folhas"
          ],
          correct: 2
        },
        {
          q: "O morango tem um caule rastejante que emite uma raiz a cada nó. Esse caule é chamado de:",
          options: [
            "Sarmento",
            "Estolão",
            "Rizoma",
            "Colmo"
          ],
          correct: 1
        },
        {
          q: "A melancia tem um caule rastejante que não emite raiz a cada nó. Esse caule é chamado de:",
          options: [
            "Estolão",
            "Bulbo",
            "Sarmento",
            "Estipe"
          ],
          correct: 2
        },
        {
          q: "Qual é a diferença entre estolão e sarmento?",
          options: [
            "O estolão é subterrâneo e o sarmento é aéreo",
            "O estolão emite raiz a cada nó; o sarmento não",
            "O sarmento armazena amido; o estolão armazena água",
            "Não há diferença"
          ],
          correct: 1
        },
        {
          q: "O caule verde, com folhas transformadas em espinhos, típico de regiões áridas (como nos cactos), é o:",
          options: [
            "Tubérculo",
            "Xilopódio",
            "Cladódio",
            "Bulbo"
          ],
          correct: 2
        },
        {
          q: "O parênquima aquífero do cladódio tem a função de:",
          options: [
            "Armazenar amido",
            "Armazenar água",
            "Produzir flores",
            "Fixar a planta"
          ],
          correct: 1
        },
        {
          q: "A batata-inglesa é um exemplo de:",
          options: [
            "Raiz tuberosa",
            "Caule do tipo tubérculo",
            "Bulbo",
            "Rizoma"
          ],
          correct: 1
        },
        {
          q: "O parênquima amilífero, presente no tubérculo, armazena:",
          options: [
            "Água",
            "Amido",
            "Óleo",
            "Sais minerais"
          ],
          correct: 1
        },
        {
          q: "Batata-inglesa e batata-doce são classificadas, respectivamente, como:",
          options: [
            "Raiz e caule",
            "Caule e raiz",
            "Ambas raízes",
            "Ambos caules"
          ],
          correct: 1
        },
        {
          q: "Qual caule é típico do cerrado e resiste às queimadas?",
          options: [
            "Xilopódio",
            "Cladódio",
            "Sarmento",
            "Estolão"
          ],
          correct: 0
        },
        {
          q: "Cebola e alho são exemplos de qual tipo de caule?",
          options: [
            "Rizoma",
            "Tubérculo",
            "Bulbo",
            "Colmo"
          ],
          correct: 2
        },
        {
          q: "Na bananeira, o caule verdadeiro é:",
          options: [
            "O \"tronco\" visível, que é um estipe",
            "O rizoma subterrâneo",
            "A raiz tuberosa",
            "O colmo"
          ],
          correct: 1
        },
        {
          q: "Qual alternativa reúne apenas caules subterrâneos?",
          options: [
            "Tubérculo, bulbo e rizoma",
            "Estolão, sarmento e cladódio",
            "Tronco, haste e estipe",
            "Colmo, estolão e bulbo"
          ],
          correct: 0
        },
        {
          q: "A parte larga e achatada da folha, onde ocorre a maior parte da fotossíntese, é o:",
          options: [
            "Pecíolo",
            "Limbo",
            "Estípula",
            "Estômato"
          ],
          correct: 1
        },
        {
          q: "A estrutura que liga o limbo da folha ao caule é o:",
          options: [
            "Pecíolo",
            "Mesófilo",
            "Limbo",
            "Estômato"
          ],
          correct: 0
        },
        {
          q: "Uma folha que não possui pecíolo, com o limbo preso diretamente ao caule, é chamada de:",
          options: [
            "Peciolada",
            "Composta",
            "Séssil",
            "Estipulada"
          ],
          correct: 2
        },
        {
          q: "As nervuras da folha correspondem a:",
          options: [
            "Células com muitos cloroplastos",
            "Feixes de vasos condutores (xilema e floema)",
            "Estruturas de reserva de amido",
            "Espinhos modificados"
          ],
          correct: 1
        },
        {
          q: "A pequena expansão encontrada na base do pecíolo é a:",
          options: [
            "Nervura",
            "Cutícula",
            "Estípula",
            "Bainha do estômato"
          ],
          correct: 2
        },
        {
          q: "Qual alternativa NÃO é uma função da folha?",
          options: [
            "Fotossíntese",
            "Transpiração",
            "Absorção de água e sais do solo",
            "Respiração"
          ],
          correct: 2
        },
        {
          q: "A perda de água na forma líquida (em gotas) pela folha é chamada de:",
          options: [
            "Transpiração",
            "Exsudação",
            "Fotossíntese",
            "Respiração"
          ],
          correct: 1
        },
        {
          q: "Os estômatos são estruturas responsáveis principalmente por:",
          options: [
            "Trocas gasosas e transpiração",
            "Armazenar amido",
            "Conduzir a seiva bruta",
            "Fixar a planta"
          ],
          correct: 0
        },
        {
          q: "Na maioria das folhas, os estômatos ficam concentrados na:",
          options: [
            "Cutícula",
            "Epiderme superior",
            "Epiderme inferior",
            "Nervura central"
          ],
          correct: 2
        },
        {
          q: "A camada impermeável que reveste a epiderme e reduz a perda de água é a:",
          options: [
            "Cutícula",
            "Mesófilo",
            "Floema",
            "Estípula"
          ],
          correct: 0
        },
        {
          q: "Qual tecido da folha apresenta células alongadas com muitos cloroplastos, logo abaixo da epiderme superior?",
          options: [
            "Parênquima lacunoso",
            "Parênquima paliçádico",
            "Xilema",
            "Epiderme inferior"
          ],
          correct: 1
        },
        {
          q: "O mesófilo foliar é formado pelos parênquimas:",
          options: [
            "Paliçádico e lacunoso",
            "Aquífero e amilífero",
            "Xilema e floema",
            "Cutícula e epiderme"
          ],
          correct: 0
        },
        {
          q: "Em plantas aquáticas, é comum encontrar:",
          options: [
            "Cutícula espessa e folhas em espinhos",
            "Cutícula fina ou inexistente e parênquima aerífero",
            "Muitos espinhos e caules clorofilados",
            "Estômatos apenas na raiz"
          ],
          correct: 1
        },
        {
          q: "Em ambientes áridos, a transformação das folhas em espinhos ajuda a planta a:",
          options: [
            "Aumentar a fotossíntese das folhas",
            "Reduzir a perda de água por transpiração",
            "Absorver mais sais minerais",
            "Flutuar"
          ],
          correct: 1
        },
        {
          q: "Nos cactos, como as folhas viraram espinhos, a fotossíntese é feita principalmente:",
          options: [
            "Pela raiz",
            "Pelo caule clorofilado",
            "Pelos espinhos",
            "Pelas flores"
          ],
          correct: 1
        }
      ]
    }
  ]
});