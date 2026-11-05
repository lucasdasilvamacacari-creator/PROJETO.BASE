window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "quimica-b",
      name: "Química B",
      emoji: "⚗️",
      contents: [
        {
          id: "acidos",
          title: "Ácidos",
          sections: [
            {
              heading: "1. Funções inorgânicas",
              body: `Função química: substâncias que apresentam características semelhantes, como estrutura química, reatividade, etc.

As 4 funções inorgânicas principais são:
• Ácidos
• Bases
• Sais
• Óxidos`,
            },
            {
              heading: "2. Ácidos e bases",
              body: `Ácidos
• Tem sabor azedo, como suco de limão e vinagre.
• Podem ser perigosos, pois são corrosivos.

Bases
• Tem sabor adstringente, como caju ou banana verdes e leite de magnésia.
• Em contato com a pele, dão uma sensação de pele escorregadia.`,
            },
            {
              heading: "3. Teoria ácido-base de Arrhenius",
              body: `Ácidos
Um ácido, segundo Arrhenius, sofre ionização em água, liberando H⁺.

Forma geral
HₓA → x H⁺ + Aˣ⁻

Exemplos
HCl → H⁺ + Cl⁻
H₂S → 2 H⁺ + S²⁻`,
            },
            {
              heading: "4. Formação do íon hidrônio",
              body: `Quando o H⁺ entra em contato com a água:
HCl + H₂O → H₃O⁺ + Cl⁻

O H⁺ = H₃O⁺
O H₃O⁺ é chamado de íon hidrônio.

Para entender: na água, o H⁺ não fica simplesmente "solto"; ele se associa à molécula de água, formando o H₃O⁺.`,
            },
            {
              heading: "5. Classificação dos ácidos",
              body: `O H⁺ também pode ser chamado de próton.
A classificação pode ser feita pelo número de hidrogênios ionizáveis.

Monoácido (monoprótico)
Possui 1 hidrogênio ionizável.
Exemplos: HCl, HCN

Diácido (diprótico)
Possui 2 hidrogênios ionizáveis.
Exemplos: H₂S, H₂SO₄

Triácido (triprótico)
Possui 3 hidrogênios ionizáveis.
Exemplo: H₃PO₄

🧠 Regra rápida
1 H⁺ → monoácido
2 H⁺ → diácido
3 H⁺ → triácido`,
              visual: `
<div class="grid grid-cols-3 gap-3">
  <div class="text-center rounded-xl bg-cream border border-sand px-2 py-4">
    <div class="flex justify-center gap-1 mb-2">
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
    </div>
    <p class="text-xs text-bark font-semibold">Monoácido</p>
    <p class="text-[11px] text-bark/60">1 H⁺ ionizável</p>
  </div>
  <div class="text-center rounded-xl bg-cream border border-sand px-2 py-4">
    <div class="flex justify-center gap-1 mb-2">
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
    </div>
    <p class="text-xs text-bark font-semibold">Diácido</p>
    <p class="text-[11px] text-bark/60">2 H⁺ ionizáveis</p>
  </div>
  <div class="text-center rounded-xl bg-cream border border-sand px-2 py-4">
    <div class="flex justify-center gap-1 mb-2">
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
      <span class="w-6 h-6 rounded-full bg-espresso text-cream text-[10px] flex items-center justify-center font-bold">H⁺</span>
    </div>
    <p class="text-xs text-bark font-semibold">Triácido</p>
    <p class="text-[11px] text-bark/60">3 H⁺ ionizáveis</p>
  </div>
</div>`,
            },
            {
              heading: "6. Classificação pela presença de oxigênio",
              body: `Hidrácidos
São ácidos sem oxigênio em sua fórmula química.

Oxiácidos
São ácidos com oxigênio em sua fórmula química.`,
            },
            {
              heading: "7. Fórmulas e nomenclatura",
              body: `Exemplos de oxiácidos
HClO₃ → ácido clórico
HClO₄ → ácido perclórico
H₂SO₄ → ácido sulfúrico
H₂SO₃ → ácido sulfuroso`,
            },
            {
              heading: "8. Nome dos oxiácidos padrão",
              body: `A matéria apresenta a frase para decorar:
"Não Como Bolo Claro Só Pão"

Ela auxilia na associação dos elementos:
• N → ácido nítrico
• C → ácido carbônico
• B → ácido bórico
• Cl → ácido clórico
• S → ácido sulfúrico
• P → ácido fosfórico`,
            },
            {
              heading: "9. Ácidos do grupo 17",
              body: `Para elementos do Grupo 17, aparecem as seguintes nomenclaturas:
HClO₄ → ácido perclórico
HClO₃ → ácido clórico
HClO₂ → ácido cloroso
HClO → ácido hipocloroso

🧠 Sequência para lembrar
perclórico → clórico → cloroso → hipocloroso`,
              visual: `
<div class="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">HClO₄<br/><span class="text-[10px] text-bark/60">perclórico</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">HClO₃<br/><span class="text-[10px] text-bark/60">clórico</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">HClO₂<br/><span class="text-[10px] text-bark/60">cloroso</span></div>
  <span class="text-ochre">→</span>
  <div class="rounded-lg bg-cream border border-sand px-3 py-2 text-bark font-medium text-center">HClO<br/><span class="text-[10px] text-bark/60">hipocloroso</span></div>
</div>`,
            },
            {
              heading: "10. Ácido etanóico ou ácido acético",
              body: `H₃CCOOH → H₃CCOO⁻ + H⁺
É o componente do vinagre.`,
            },
            {
              heading: "🧠 O OURO — ÁCIDOS",
              body: `Funções inorgânicas: Ácidos • Bases • Sais • Óxidos

Arrhenius: Ácido → libera H⁺ em água.
H⁺: também chamado de próton.
H₃O⁺: íon hidrônio.

Número de H ionizáveis:
1 → monoácido
2 → diácido
3 → triácido

Sem O → hidrácido
Com O → oxiácido

Grupo 17:
HClO₄ → perclórico
HClO₃ → clórico
HClO₂ → cloroso
HClO → hipocloroso

Ácido etanóico/acético → componente do vinagre.`,
            },
          ],
          quiz: [
            { q: "O que caracteriza uma função química?", options: ["Substâncias com características semelhantes, como estrutura e reatividade", "Substâncias com a mesma cor", "Substâncias com o mesmo estado físico", "Substâncias com a mesma massa molar"], correct: 0 },
            { q: "Quais são as 4 funções inorgânicas principais?", options: ["Ácidos, bases, sais e óxidos", "Ácidos, sais, gases e óxidos", "Bases, sais, metais e óxidos", "Ácidos, bases, metais e ligas"], correct: 0 },
            { q: "Qual é o sabor característico dos ácidos?", options: ["Azedo", "Adstringente", "Doce", "Amargo"], correct: 0 },
            { q: "Qual é um exemplo de substância ácida citado no conteúdo?", options: ["Suco de limão", "Leite de magnésia", "Caju verde", "Banana verde"], correct: 0 },
            { q: "Por que os ácidos podem ser perigosos?", options: ["Porque são corrosivos", "Porque são inflamáveis", "Porque são radioativos", "Porque são voláteis"], correct: 0 },
            { q: "Qual é o sabor característico das bases?", options: ["Adstringente", "Azedo", "Doce", "Salgado"], correct: 0 },
            { q: "O que uma base causa em contato com a pele?", options: ["Sensação de pele escorregadia", "Sensação de queimação intensa", "Nenhuma sensação", "Coceira imediata"], correct: 0 },
            { q: "Segundo Arrhenius, o que caracteriza um ácido?", options: ["Sofre ionização em água, liberando H⁺", "Sofre dissociação, liberando OH⁻", "Não se dissolve em água", "Libera elétrons em água"], correct: 0 },
            { q: "Qual é a forma geral de um ácido segundo Arrhenius?", options: ["HₓA → x H⁺ + Aˣ⁻", "HₓA → x OH⁻ + Aˣ⁺", "AHₓ → x A⁻ + Hˣ⁺", "HA → H₂ + A"], correct: 0 },
            { q: "Na ionização do HCl, quais íons são formados?", options: ["H⁺ e Cl⁻", "H⁺ e Cl²⁻", "H₂ e Cl⁻", "OH⁻ e Cl⁺"], correct: 0 },
            { q: "Na ionização do H₂S, quantos H⁺ são liberados?", options: ["2 H⁺", "1 H⁺", "3 H⁺", "4 H⁺"], correct: 0 },
            { q: "O que se forma quando o H⁺ entra em contato com a água?", options: ["O íon hidrônio (H₃O⁺)", "O íon hidróxido (OH⁻)", "Gás hidrogênio (H₂)", "Água pura"], correct: 0 },
            { q: "Como é representado o íon hidrônio?", options: ["H₃O⁺", "H₂O⁺", "HO⁻", "H₃O²⁺"], correct: 0 },
            { q: "Na reação HCl + H₂O → H₃O⁺ + Cl⁻, o que acontece com o H⁺?", options: ["Ele se associa à molécula de água", "Ele permanece solto na solução", "Ele se transforma em H₂", "Ele reage diretamente com o Cl⁻"], correct: 0 },
            { q: "O H⁺ também pode ser chamado de:", options: ["Próton", "Nêutron", "Elétron", "Íon hidróxido"], correct: 0 },
            { q: "Como é feita a classificação dos ácidos quanto à quantidade de H ionizáveis?", options: ["Pelo número de hidrogênios ionizáveis", "Pela massa molar do ácido", "Pelo número de átomos de oxigênio", "Pelo estado físico do ácido"], correct: 0 },
            { q: "Um monoácido possui quantos hidrogênios ionizáveis?", options: ["1", "2", "3", "4"], correct: 0 },
            { q: "O HCl é classificado como:", options: ["Monoácido", "Diácido", "Triácido", "Tetrácido"], correct: 0 },
            { q: "Um diácido possui quantos hidrogênios ionizáveis?", options: ["2", "1", "3", "4"], correct: 0 },
            { q: "O H₂SO₄ é um exemplo de:", options: ["Diácido", "Monoácido", "Triácido", "Hidrácido sem H ionizável"], correct: 0 },
            { q: "Um triácido possui quantos hidrogênios ionizáveis?", options: ["3", "1", "2", "4"], correct: 0 },
            { q: "O H₃PO₄ é um exemplo de:", options: ["Triácido", "Monoácido", "Diácido", "Hidrácido"], correct: 0 },
            { q: "Um ácido sem oxigênio na fórmula química é chamado de:", options: ["Hidrácido", "Oxiácido", "Monoácido", "Diácido"], correct: 0 },
            { q: "Um ácido com oxigênio na fórmula química é chamado de:", options: ["Oxiácido", "Hidrácido", "Triácido", "Base"], correct: 0 },
            { q: "Na frase 'Não Como Bolo Claro Só Pão', a letra 'N' está associada a qual ácido?", options: ["Ácido nítrico", "Ácido carbônico", "Ácido bórico", "Ácido sulfúrico"], correct: 0 },
            { q: "Na mesma frase mnemônica, a letra 'C' corresponde a:", options: ["Ácido carbônico", "Ácido clórico", "Ácido nítrico", "Ácido bórico"], correct: 0 },
            { q: "E a letra 'P', na frase mnemônica, corresponde a:", options: ["Ácido fosfórico", "Ácido perclórico", "Ácido carbônico", "Ácido sulfúrico"], correct: 0 },
            { q: "Para os ácidos do Grupo 17, o HClO₄ é chamado de:", options: ["Ácido perclórico", "Ácido clórico", "Ácido cloroso", "Ácido hipocloroso"], correct: 0 },
            { q: "Ainda no Grupo 17, o HClO é chamado de:", options: ["Ácido hipocloroso", "Ácido perclórico", "Ácido clórico", "Ácido cloroso"], correct: 0 },
            { q: "O ácido etanóico (ácido acético) é o componente principal de:", options: ["Vinagre", "Suco de limão", "Leite de magnésia", "Água sanitária"], correct: 0 },
          ],
        },
        {
          id: "bases",
          title: "Bases",
          sections: [
            {
              heading: "1. Bases ou hidróxidos",
              body: `Bases, em contato com água, dissociam liberando como ânion exclusivamente o íon OH⁻.

Fórmula geral:
M(OH)x → M⁺ˣ + x OH⁻

Exemplos:
NaOH → Na⁺ + OH⁻
Mg(OH)2 → Mg⁺² + 2 OH⁻
Fe(OH)3 → Fe⁺³ + 3 OH⁻`,
              visual: `
<div class="flex items-center justify-center gap-3 flex-wrap">
  <div class="rounded-lg border-2 border-espresso px-5 py-3 text-sm font-semibold text-bark">Base</div>
  <div class="flex flex-col items-center text-[10px] text-bark/60">
    <span>água</span>
    <span class="text-ochre text-lg leading-none">→</span>
  </div>
  <div class="rounded-lg border-2 border-espresso px-5 py-3 text-xs text-bark text-center max-w-[220px]">Dissocia liberando como ânion exclusivamente íon OH⁻</div>
</div>`,
            },
            {
              heading: "2. Fórmulas e nomenclatura — metais de carga fixa",
              body: `As fórmulas seguem as regras das ligações iônicas:
Na⁺ + OH⁻ → NaOH
Ca⁺² + OH⁻ → Ca(OH)2
Fe⁺³ + OH⁻ → Fe(OH)3

Metais que possuem carga fixa:
Metais alcalinos (grupo 1) = +1
Metais alcalinoterrosos (grupo 2) = +2
Prata (Ag) = +1
Zinco (Zn) = +2
Alumínio (Aℓ) = +3

Exemplos de nomenclatura:
NaOH: hidróxido de sódio
Ca(OH)2: hidróxido de cálcio
AgOH: hidróxido de prata
Zn(OH)2: hidróxido de zinco
Aℓ(OH)3: hidróxido de alumínio`,
            },
            {
              heading: "3. Metais de carga variável",
              body: `Metais que possuem carga variável:
Cobre (Cu) = +1, +2
Ferro (Fe) = +2, +3

Nomenclatura com numeral romano:
CuOH: hidróxido de cobre (I)
Cu(OH)2: hidróxido de cobre (II)
Fe(OH)2: hidróxido de ferro (II)
Fe(OH)3: hidróxido de ferro (III)

Nomenclatura antiga (-oso / -ico):
CuOH: hidróxido cuproso
Cu(OH)2: hidróxido cúprico
Fe(OH)2: hidróxido ferroso
Fe(OH)3: hidróxido férrico`,
            },
            {
              heading: "4. Amônia — a base sem metal",
              body: `NH3 (amônia / amoníaco) em água gera uma base:
NH3 + H2O → NH4⁺ + OH⁻

NH4⁺ = íon amônio
NH4OH: hidróxido de amônio

Única base que não é formada por metal. Só existe na água.`,
            },
            {
              heading: "5. Classificação das bases — quantidade de OH⁻",
              body: `Monobases: 1 íon hidróxido.
Exemplos: NaOH, LiOH, CuOH, AgOH

Dibases: 2 íons hidróxidos.
Exemplos: Mg(OH)2, Ca(OH)2, Fe(OH)2, Cu(OH)2

Tribases: 3 íons hidróxidos.
Exemplos: Fe(OH)3, Aℓ(OH)3`,
            },
            {
              heading: "6. Classificação das bases — solubilidade",
              body: `Solúveis: bases de metais do grupo 1 e NH3.

Pouco solúveis (parcialmente solúveis): bases de metais do grupo 2 (exceto Mg(OH)2 e Be(OH)2).

Praticamente insolúveis: bases dos demais metais (incluindo Mg(OH)2 e Be(OH)2).`,
            },
            {
              heading: "7. A escala de pH",
              body: `Escala que vai de 0 a 14.

pH < 7 → ácidos
pH = 7 → neutro
pH > 7 → bases

Água totalmente pura: meio neutro (pH = 7).
Quanto menor o pH, mais ácida é a substância.
Quanto maior o pH, mais básica é a substância.`,
              visual: `
<svg viewBox="0 0 320 70" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#C2185B"/>
      <stop offset="50%" stop-color="#6A4C93"/>
      <stop offset="100%" stop-color="#1E88E5"/>
    </linearGradient>
  </defs>
  <rect x="10" y="18" width="300" height="16" rx="8" fill="url(#phGrad)"/>
  <line x1="160" y1="12" x2="160" y2="40" stroke="#3E2F20" stroke-width="2"/>
  <text x="149" y="10" font-size="9.5" fill="#5C4630">pH 7</text>
  <text x="8" y="52" font-size="9.5" fill="#5C4630">← aumento da acidez</text>
  <text x="185" y="52" font-size="9.5" fill="#5C4630">aumento da basicidade →</text>
  <text x="8" y="16" font-size="8.5" fill="#5C4630">0</text>
  <text x="300" y="16" font-size="8.5" fill="#5C4630">14</text>
</svg>`,
            },
            {
              heading: "8. Indicadores ácido-base",
              body: `Substâncias que mudam de cor de acordo com o pH, ou seja, de acordo com a acidez da amostra.

Suco de repolho roxo: muda de cor ao longo de toda a escala de pH.

Fenolftaleína:
Meio ácido = incolor.
Meio básico = rosa, violeta, vermelho.`,
              visual: `
<div class="overflow-x-auto mb-4">
  <div class="flex min-w-[420px]">
    <div class="flex-1 text-center"><div class="h-7 rounded-l-md" style="background:#E53935"></div><p class="text-[9.5px] text-bark/60 mt-1">1–3<br/>Vermelho</p></div>
    <div class="flex-1 text-center"><div class="h-7" style="background:#EC407A"></div><p class="text-[9.5px] text-bark/60 mt-1">4–6<br/>Rosa</p></div>
    <div class="flex-1 text-center"><div class="h-7" style="background:#8E24AA"></div><p class="text-[9.5px] text-bark/60 mt-1">7–9<br/>Roxo</p></div>
    <div class="flex-1 text-center"><div class="h-7" style="background:#1E88E5"></div><p class="text-[9.5px] text-bark/60 mt-1">10–11<br/>Azul</p></div>
    <div class="flex-1 text-center"><div class="h-7" style="background:#43A047"></div><p class="text-[9.5px] text-bark/60 mt-1">12–13<br/>Verde</p></div>
    <div class="flex-1 text-center"><div class="h-7 rounded-r-md" style="background:#FDD835"></div><p class="text-[9.5px] text-bark/60 mt-1">14<br/>Amarelo</p></div>
  </div>
  <p class="text-[10.5px] text-bark/50 text-center mt-1">Indicador natural: suco de repolho roxo</p>
</div>
<div class="grid grid-cols-2 gap-3 max-w-xs mx-auto text-center text-xs">
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <div class="w-8 h-10 mx-auto rounded-b-lg border-2 border-sand mb-2"></div>
    <p class="font-semibold text-bark">Meio ácido</p>
    <p class="text-bark/60">Incolor</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-4">
    <div class="w-8 h-10 mx-auto rounded-b-lg border-2 border-sand mb-2" style="background:#EC407A"></div>
    <p class="font-semibold text-bark">Meio básico</p>
    <p class="text-bark/60">Rosa / violeta / vermelho</p>
  </div>
</div>
<p class="text-[10.5px] text-bark/50 text-center mt-2">Fenolftaleína: incolor em ácido, rosa/vermelha em base</p>`,
            },
          ],
          quiz: [
            { q: "Segundo a dissociação das bases, o que é liberado exclusivamente como ânion?", options: ["Íon OH⁻", "Íon H⁺", "Íon O²⁻", "Íon H₃O⁺"], correct: 0 },
            { q: "Qual é a fórmula geral da dissociação de uma base?", options: ["M(OH)x → M⁺ˣ + x OH⁻", "M(OH)x → M⁻ˣ + x H⁺", "MOH → M + OH", "M(OH)x → x M + OH⁻"], correct: 0 },
            { q: "Qual é a carga fixa dos metais alcalinos (grupo 1)?", options: ["+1", "+2", "+3", "-1"], correct: 0 },
            { q: "Como se nomeia o Fe(OH)3, usando numeral romano?", options: ["Hidróxido de ferro (III)", "Hidróxido de ferro (II)", "Hidróxido ferroso", "Hidróxido de ferro (I)"], correct: 0 },
            { q: "Como se nomeia o Fe(OH)3, usando a nomenclatura antiga (-oso/-ico)?", options: ["Hidróxido férrico", "Hidróxido ferroso", "Hidróxido cúprico", "Hidróxido cuproso"], correct: 0 },
            { q: "Qual é a única base que não é formada por um metal?", options: ["Amônia (NH₃), formando NH₄OH em água", "NaOH", "Ca(OH)₂", "Fe(OH)₃"], correct: 0 },
            { q: "Uma base com 2 íons hidróxido é classificada como:", options: ["Dibase", "Monobase", "Tribase", "Ácido"], correct: 0 },
            { q: "Segundo a solubilidade, quais bases são consideradas solúveis?", options: ["Bases de metais do grupo 1 e a amônia (NH₃)", "Todas as bases sem exceção", "Apenas o Mg(OH)₂", "Nenhuma base é solúvel"], correct: 0 },
            { q: "Na escala de pH, o que caracteriza uma substância com pH < 7?", options: ["É considerada ácida", "É considerada básica", "É considerada neutra", "Não possui pH definido"], correct: 0 },
            { q: "Qual é a cor da fenolftaleína em meio básico?", options: ["Rosa, violeta ou vermelho", "Incolor", "Azul", "Amarelo"], correct: 0 },
          ],
        },
        {
          id: "sais-e-neutralizacao",
          title: "Sais e neutralização total",
          sections: [
            {
              heading: "1. Reação de neutralização total",
              body: `Quando um ácido reage com uma base, um "cancela" o outro: é a neutralização.

Ácido + Base → Sal + Água

O coração da reação é:
H⁺ + OH⁻ → H₂O

Forma geral (HA = ácido, COH = base):
HA + COH → CA + H₂O
H⁺ + A⁻ + C⁺ + OH⁻ → C⁺ + A⁻ + H₂O

• O H⁺ (do ácido) se junta ao OH⁻ (da base) e forma água.
• O que sobra forma o sal: o cátion vem da BASE e o ânion vem do ÁCIDO.

Exemplos
HCl + KOH → KCl + H₂O
HCl + NaOH → NaCl + H₂O

🧠 Neutralização TOTAL: todos os H⁺ ionizáveis e todos os OH⁻ reagem; não sobra nenhum.`,
              visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="qs1_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="qs1_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="qs1_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="qs1_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker></defs>
<rect x="20" y="20" width="600" height="120" rx="14" fill="#F4EEE1" stroke="#C9B18C" stroke-width="1.5"/><text x="320" y="44" text-anchor="middle" font-size="16" font-weight="700" fill="#3E2F20">Ácido + Base → Sal + Água</text><rect x="40" y="62" width="130" height="56" rx="10" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="105" y="88" text-anchor="middle" font-size="18" font-weight="700" fill="#3E2F20">HCl</text><text x="105" y="108" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">ácido</text><text x="188" y="96" text-anchor="middle" font-size="20" font-weight="700" fill="#3E2F20">+</text><rect x="206" y="62" width="130" height="56" rx="10" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="271" y="88" text-anchor="middle" font-size="18" font-weight="700" fill="#3E2F20">NaOH</text><text x="271" y="108" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">base</text><line x1="346" y1="90" x2="392" y2="90" stroke="#3E2F20" stroke-width="2.2" marker-end="url(#qs1_3E2F20)"/><rect x="400" y="62" width="110" height="56" rx="10" fill="#E4D9C4" stroke="#A8763E" stroke-width="2"/><text x="455" y="88" text-anchor="middle" font-size="18" font-weight="700" fill="#A8763E">NaCl</text><text x="455" y="108" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">sal</text><text x="524" y="96" text-anchor="middle" font-size="20" font-weight="700" fill="#3E2F20">+</text><rect x="540" y="62" width="70" height="56" rx="10" fill="#E4D9C4" stroke="#5B7553" stroke-width="2"/><text x="575" y="88" text-anchor="middle" font-size="18" font-weight="700" fill="#5B7553">H₂O</text><text x="575" y="108" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">água</text><circle cx="70" cy="220" r="22" fill="#A6493A" stroke="#A6493A" stroke-width="1.5"/><text x="70" y="225" text-anchor="middle" font-size="14" font-weight="700" fill="#F4EEE1">H⁺</text><circle cx="130" cy="220" r="22" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="130" y="225" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">Cl⁻</text><circle cx="220" cy="220" r="22" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="220" y="225" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="280" cy="220" r="22" fill="#5B7553" stroke="#5B7553" stroke-width="1.5"/><text x="280" y="225" text-anchor="middle" font-size="12" font-weight="700" fill="#F4EEE1">OH⁻</text><text x="100" y="262" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">do ácido</text><text x="250" y="262" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">da base</text><line x1="330" y1="220" x2="380" y2="220" stroke="#3E2F20" stroke-width="2.2" marker-end="url(#qs1_3E2F20)"/><rect x="392" y="194" width="100" height="52" rx="10" fill="#E4D9C4" stroke="#A8763E" stroke-width="2"/><text x="442" y="226" text-anchor="middle" font-size="16" font-weight="700" fill="#A8763E">Na⁺ Cl⁻</text><text x="442" y="262" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">cátion da base +</text><text x="442" y="277" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">ânion do ácido</text><rect x="510" y="194" width="100" height="52" rx="10" fill="#E4D9C4" stroke="#5B7553" stroke-width="2"/><text x="560" y="218" text-anchor="middle" font-size="13" font-weight="700" fill="#5B7553">H⁺ + OH⁻</text><text x="560" y="236" text-anchor="middle" font-size="12" font-weight="700" fill="#5B7553">→ H₂O</text><text x="560" y="262" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">neutralização</text><path d="M 70 196 C 70 160, 280 160, 280 196" fill="none" stroke="#A6493A" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#qs1_A6493A)"/><text x="175" y="156" text-anchor="middle" font-size="11" font-weight="400" font-style="italic" fill="#A6493A">H⁺ encontra OH⁻</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Na neutralização, o H⁺ do ácido e o OH⁻ da base viram água; o que sobra (cátion da base + ânion do ácido) forma o sal.</p>`,
            },
            {
              heading: "2. Balanceamento da neutralização",
              body: `Para balancear, basta igualar o número de H⁺ do ácido ao número de OH⁻ da base.

Exemplo 1
HCl (1 H⁺) + KOH (1 OH⁻)
HCl + KOH → KCl + 1 H₂O

Exemplo 2
HNO₃ tem 1 H⁺; Ca(OH)₂ tem 2 OH⁻.
São necessários 2 HNO₃ para 1 Ca(OH)₂:
2 HNO₃ + 1 Ca(OH)₂ → Ca(NO₃)₂ + 2 H₂O

🧠 Regra rápida
• Total de H⁺ = total de OH⁻
• Nº de moléculas de água formadas = nº de H⁺ (ou OH⁻) neutralizados.

Exemplo 3 (para treinar)
H₂SO₄ (2 H⁺) + 2 NaOH (2 OH⁻) → Na₂SO₄ + 2 H₂O`,
              visual: `<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
  <div class="rounded-xl bg-cream border border-sand px-3 py-3">
    <p class="font-display text-ochre font-bold mb-1">1. Conte os H⁺</p>
    <p class="text-espresso text-sm">HNO₃ → 1 H⁺</p>
    <p class="text-bark text-xs mt-1">monoácido</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-3">
    <p class="font-display text-ochre font-bold mb-1">2. Conte os OH⁻</p>
    <p class="text-espresso text-sm">Ca(OH)₂ → 2 OH⁻</p>
    <p class="text-bark text-xs mt-1">dibase</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-3">
    <p class="font-display text-ochre font-bold mb-1">3. Iguale</p>
    <p class="text-espresso text-sm">2 HNO₃ → 2 H⁺</p>
    <p class="text-bark text-xs mt-1">2 H⁺ + 2 OH⁻ → 2 H₂O</p>
  </div>
</div>
<p class="text-center text-espresso font-semibold mt-3">2 HNO₃ + 1 Ca(OH)₂ → 1 Ca(NO₃)₂ + 2 H₂O</p>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Regra de ouro: nº de H⁺ do ácido = nº de OH⁻ da base. O nº de águas formadas é igual a esse número.</p>`,
            },
            {
              heading: "3. O que é um sal?",
              body: `Sal é uma substância iônica que, em água, sofre dissociação, liberando pelo menos um cátion diferente de H⁺ e um ânion diferente de OH⁻.

• Cátion → vem da base.
• Ânion → vem do ácido.

Exemplos de dissociação
NaCl → Na⁺ + Cl⁻
Ca(NO₃)₂ → Ca²⁺ + 2 NO₃⁻

⚠️ Diferença importante
• Ácido sofre IONIZAÇÃO (é molecular: os íons são formados na água).
• Sal e base sofrem DISSOCIAÇÃO (são iônicos: os íons já existem e apenas se separam).`,
              visual: `<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="qs2_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="qs2_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="qs2_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="qs2_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker></defs>
<text x="160" y="28" text-anchor="middle" font-size="13" font-weight="600" fill="#5C4630">Sal sólido (rede iônica)</text><rect x="60" y="44" width="200" height="120" rx="12" fill="#F4EEE1" stroke="#C9B18C" stroke-width="1.5"/><circle cx="90" cy="66" r="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="90" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="136" cy="66" r="12" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="136" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Cl⁻</text><circle cx="182" cy="66" r="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="182" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="228" cy="66" r="12" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="228" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Cl⁻</text><circle cx="90" cy="92" r="12" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="90" y="96" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Cl⁻</text><circle cx="136" cy="92" r="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="136" y="96" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="182" cy="92" r="12" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="182" y="96" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Cl⁻</text><circle cx="228" cy="92" r="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="228" y="96" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="90" cy="118" r="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="90" y="122" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="136" cy="118" r="12" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="136" y="122" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Cl⁻</text><circle cx="182" cy="118" r="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="182" y="122" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="228" cy="118" r="12" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="228" y="122" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Cl⁻</text><circle cx="90" cy="144" r="12" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="90" y="148" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Cl⁻</text><circle cx="136" cy="144" r="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="136" y="148" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="182" cy="144" r="12" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="182" y="148" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Cl⁻</text><circle cx="228" cy="144" r="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="228" y="148" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Na⁺</text><line x1="282" y1="104" x2="342" y2="104" stroke="#3E2F20" stroke-width="2.2" marker-end="url(#qs2_3E2F20)"/><text x="312" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#6E8C99">H₂O</text><text x="480" y="28" text-anchor="middle" font-size="13" font-weight="600" fill="#5C4630">Em água: íons livres</text><rect x="360" y="44" width="240" height="120" rx="12" fill="#B9CBD3" stroke="#6E8C99" stroke-width="1.5"/><circle cx="400" cy="70" r="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="400" y="74" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="470" cy="120" r="12" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="470" y="124" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Cl⁻</text><circle cx="530" cy="68" r="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="530" y="72" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="420" cy="140" r="12" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="420" y="144" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Cl⁻</text><circle cx="560" cy="140" r="10" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="560" y="144" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="500" cy="92" r="12" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="500" y="96" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">Cl⁻</text><text x="320" y="192" text-anchor="middle" font-size="13" font-weight="600" fill="#3E2F20">NaCl → Na⁺ + Cl⁻     |     Ca(NO₃)₂ → Ca²⁺ + 2 NO₃⁻</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Dissociação: a água separa os íons que já existiam no sal. Nenhum cátion é H⁺ e nenhum ânion é OH⁻.</p>`,
            },
            {
              heading: "4. Nomenclatura dos ânions",
              body: `O nome do ânion vem do nome do ácido, trocando a terminação:

-ídrico → -eto
-ico → -ato
-oso → -ito

Exemplos
HCl ácido clorídrico → Cl⁻ cloreto
H₂S ácido sulfídrico → S²⁻ sulfeto
H₂SO₄ ácido sulfúrico → SO₄²⁻ sulfato
HNO₃ ácido nítrico → NO₃⁻ nitrato
H₂SO₃ ácido sulfuroso → SO₃²⁻ sulfito
HNO₂ ácido nitroso → NO₂⁻ nitrito

🧠 Macetes
"TeimOSO mosquITO, no bICO do pATO, te mETO no vIDRICO"
"O espETO é cilÍNDRICO, o pATO tem bICO, o pirulITO é gostOSO"

A carga do ânion é igual ao número de H⁺ que o ácido perdeu: H₂SO₄ perde 2 H⁺ → SO₄²⁻.`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Ácido termina em</th><th class="text-left py-2 pr-4 font-display text-ochre">Ânion termina em</th><th class="text-left py-2 pr-4 font-display text-ochre">Exemplo</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-ídrico</td><td class="py-1.5 pr-4 text-espresso">-eto</td><td class="py-1.5 pr-4 text-espresso">HCl (clorídrico) → Cl⁻ (clor<b>eto</b>)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-ídrico</td><td class="py-1.5 pr-4 text-espresso">-eto</td><td class="py-1.5 pr-4 text-espresso">H₂S (sulfídrico) → S²⁻ (sulf<b>eto</b>)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-ico</td><td class="py-1.5 pr-4 text-espresso">-ato</td><td class="py-1.5 pr-4 text-espresso">H₂SO₄ (sulfúrico) → SO₄²⁻ (sulf<b>ato</b>)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-ico</td><td class="py-1.5 pr-4 text-espresso">-ato</td><td class="py-1.5 pr-4 text-espresso">HNO₃ (nítrico) → NO₃⁻ (nitr<b>ato</b>)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-oso</td><td class="py-1.5 pr-4 text-espresso">-ito</td><td class="py-1.5 pr-4 text-espresso">H₂SO₃ (sulfuroso) → SO₃²⁻ (sulf<b>ito</b>)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-oso</td><td class="py-1.5 pr-4 text-espresso">-ito</td><td class="py-1.5 pr-4 text-espresso">HNO₂ (nitroso) → NO₂⁻ (nitr<b>ito</b>)</td></tr></tbody></table></div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Macete: "o esp<b>ETO</b> é cilín<b>DRICO</b>, o p<b>ATO</b> tem b<b>ICO</b>, o pirul<b>ITO</b> é gost<b>OSO</b>".</p>`,
            },
            {
              heading: "5. Fórmula e nome do sal",
              body: `A fórmula do sal segue as regras de ligação iônica: a soma das cargas deve dar zero. O jeito mais rápido é "cruzar" as cargas.

Na⁺ e F⁻ → NaF
Ca²⁺ e SO₄²⁻ → Ca₂(SO₄)₂ → simplifica → CaSO₄
Fe²⁺ e NO₃⁻ → Fe(NO₃)₂

⚠️ Quando o ânion tem mais de um átomo e índice maior que 1, ele vai entre parênteses: Fe(NO₃)₂, Al₂(SO₄)₃.

Nome do sal
(nome do ânion) + de + (nome do cátion)

NaF → fluoreto de sódio
CaSO₄ → sulfato de cálcio
Fe(NO₃)₂ → nitrato de ferro (II)`,
              visual: `<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="qs3_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="qs3_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="qs3_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="qs3_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker></defs>
<rect x="15" y="20" width="190" height="210" rx="14" fill="#F4EEE1" stroke="#C9B18C" stroke-width="1.5"/><circle cx="70" cy="70" r="26" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="70" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">Na⁺</text><circle cx="150" cy="70" r="26" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="150" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">F⁻</text><text x="70" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="#A6493A">carga 1</text><text x="150" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="#5B7553">carga 1</text><path d="M 77 118 L 137 150" fill="none" stroke="#A6493A" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#qs3_A6493A)"/><path d="M 143 118 L 83 150" fill="none" stroke="#5B7553" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#qs3_5B7553)"/><rect x="35" y="162" width="150" height="36" rx="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="2"/><text x="110" y="186" text-anchor="middle" font-size="16" font-weight="700" fill="#A8763E">NaF</text><text x="110" y="218" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">fluoreto de sódio</text><rect x="225" y="20" width="190" height="210" rx="14" fill="#F4EEE1" stroke="#C9B18C" stroke-width="1.5"/><circle cx="280" cy="70" r="26" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="280" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">Fe²⁺</text><circle cx="360" cy="70" r="26" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="360" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">NO₃⁻</text><text x="280" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="#A6493A">carga 2</text><text x="360" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="#5B7553">carga 1</text><path d="M 287 118 L 347 150" fill="none" stroke="#A6493A" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#qs3_A6493A)"/><path d="M 353 118 L 293 150" fill="none" stroke="#5B7553" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#qs3_5B7553)"/><rect x="245" y="162" width="150" height="36" rx="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="2"/><text x="320" y="186" text-anchor="middle" font-size="16" font-weight="700" fill="#A8763E">Fe(NO₃)₂</text><text x="320" y="218" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">nitrato de ferro (II)</text><rect x="435" y="20" width="190" height="210" rx="14" fill="#F4EEE1" stroke="#C9B18C" stroke-width="1.5"/><circle cx="490" cy="70" r="26" fill="#D8C9A8" stroke="#5C4630" stroke-width="1.5"/><text x="490" y="75" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">Al³⁺</text><circle cx="570" cy="70" r="26" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.5"/><text x="570" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">SO₄²⁻</text><text x="490" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="#A6493A">carga 3</text><text x="570" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="#5B7553">carga 2</text><path d="M 497 118 L 557 150" fill="none" stroke="#A6493A" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#qs3_A6493A)"/><path d="M 563 118 L 503 150" fill="none" stroke="#5B7553" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#qs3_5B7553)"/><rect x="455" y="162" width="150" height="36" rx="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="2"/><text x="530" y="186" text-anchor="middle" font-size="16" font-weight="700" fill="#A8763E">Al₂(SO₄)₃</text><text x="530" y="218" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">sulfato de alumínio</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Regra do "cruzamento": a carga do cátion vira o índice do ânion e vice-versa (sem o sinal). Simplifique quando der: Ca²⁺ + SO₄²⁻ → CaSO₄.</p>`,
            },
            {
              heading: "6. Metais com carga variável",
              body: `Alguns metais, como o ferro (Fe²⁺ e Fe³⁺) e o cobre (Cu⁺ e Cu²⁺), podem ter mais de uma carga. Nesse caso, o nome precisa indicar qual carga é.

Duas formas de nomear:
• Numeral romano entre parênteses: ferro (II), ferro (III).
• Sufixos: -oso para a menor carga; -ico para a maior.

Bases
Fe(OH)₂ → hidróxido de ferro (II) ou hidróxido ferroso
Fe(OH)₃ → hidróxido de ferro (III) ou hidróxido férrico

Sais
FeCl₂ → cloreto de ferro (II) ou cloreto ferroso
FeCl₃ → cloreto de ferro (III) ou cloreto férrico

🧠 Para descobrir a carga do metal: olhe o ânion. Em FeCl₃ há 3 Cl⁻ (carga total −3), então o ferro é Fe³⁺.`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Fórmula</th><th class="text-left py-2 pr-4 font-display text-ochre">Nome (numeral romano)</th><th class="text-left py-2 pr-4 font-display text-ochre">Nome antigo</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Fe(OH)₂</td><td class="py-1.5 pr-4 text-espresso">hidróxido de ferro (II)</td><td class="py-1.5 pr-4 text-espresso">hidróxido ferr<b>oso</b></td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Fe(OH)₃</td><td class="py-1.5 pr-4 text-espresso">hidróxido de ferro (III)</td><td class="py-1.5 pr-4 text-espresso">hidróxido férr<b>ico</b></td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">FeCl₂</td><td class="py-1.5 pr-4 text-espresso">cloreto de ferro (II)</td><td class="py-1.5 pr-4 text-espresso">cloreto ferr<b>oso</b></td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">FeCl₃</td><td class="py-1.5 pr-4 text-espresso">cloreto de ferro (III)</td><td class="py-1.5 pr-4 text-espresso">cloreto férr<b>ico</b></td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">CuSO₄</td><td class="py-1.5 pr-4 text-espresso">sulfato de cobre (II)</td><td class="py-1.5 pr-4 text-espresso">sulfato cúpr<b>ico</b></td></tr></tbody></table></div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">-oso = menor carga do metal; -ico = maior carga. O numeral romano diz a carga do cátion.</p>`,
            },
            {
              heading: "7. Sais sem oxigênio (terminação -eto)",
              body: `Sais que não têm oxigênio vêm de hidrácidos (ácidos -ídrico) e por isso o ânion termina em -eto.

NaF → fluoreto de sódio
CaBr₂ → brometo de cálcio
Fe₂S₃ → sulfeto de ferro (III)
KCN → cianeto de potássio (vem do HCN, ácido cianídrico)

Ânions -eto mais comuns
F⁻ fluoreto • Cl⁻ cloreto • Br⁻ brometo • I⁻ iodeto • S²⁻ sulfeto • CN⁻ cianeto`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Sal</th><th class="text-left py-2 pr-4 font-display text-ochre">Íons</th><th class="text-left py-2 pr-4 font-display text-ochre">Nome</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">NaF</td><td class="py-1.5 pr-4 text-espresso">Na⁺ + F⁻</td><td class="py-1.5 pr-4 text-espresso">fluoreto de sódio</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">CaBr₂</td><td class="py-1.5 pr-4 text-espresso">Ca²⁺ + 2 Br⁻</td><td class="py-1.5 pr-4 text-espresso">brometo de cálcio</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Fe₂S₃</td><td class="py-1.5 pr-4 text-espresso">2 Fe³⁺ + 3 S²⁻</td><td class="py-1.5 pr-4 text-espresso">sulfeto de ferro (III)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">KCN</td><td class="py-1.5 pr-4 text-espresso">K⁺ + CN⁻</td><td class="py-1.5 pr-4 text-espresso">cianeto de potássio</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">NaCl</td><td class="py-1.5 pr-4 text-espresso">Na⁺ + Cl⁻</td><td class="py-1.5 pr-4 text-espresso">cloreto de sódio</td></tr></tbody></table></div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Sais sem oxigênio vêm de hidrácidos (-ídrico), por isso terminam em -eto.</p>`,
            },
            {
              heading: "8. Ânions oxigenados mais comuns",
              body: `Os ânions com oxigênio mais cobrados vêm de oxiácidos terminados em -ico, por isso terminam em -ato.

🧠 Macete: "Não Como Bolo Claro Só Pão"

Não → HNO₃ → NO₃⁻ nitrato
Como → H₂CO₃ → CO₃²⁻ carbonato
Bolo → H₃BO₃ → BO₃³⁻ borato
Claro → HClO₃ → ClO₃⁻ clorato
Só → H₂SO₄ → SO₄²⁻ sulfato
Pão → H₃PO₄ → PO₄³⁻ fosfato

Com 1 oxigênio a menos (ácido -oso), troca-se -ato por -ito:
NO₃⁻ nitrato → NO₂⁻ nitrito
SO₄²⁻ sulfato → SO₃²⁻ sulfito`,
              visual: `<div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
  <div class="rounded-xl bg-cream border border-sand px-2 py-3">
    <p class="font-display text-ochre font-bold text-lg">Não</p>
    <p class="text-bark text-xs">HNO₃</p>
    <p class="text-espresso font-semibold">NO₃⁻</p>
    <p class="text-espresso text-sm">nitrato</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-2 py-3">
    <p class="font-display text-ochre font-bold text-lg">Como</p>
    <p class="text-bark text-xs">H₂CO₃</p>
    <p class="text-espresso font-semibold">CO₃²⁻</p>
    <p class="text-espresso text-sm">carbonato</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-2 py-3">
    <p class="font-display text-ochre font-bold text-lg">Bolo</p>
    <p class="text-bark text-xs">H₃BO₃</p>
    <p class="text-espresso font-semibold">BO₃³⁻</p>
    <p class="text-espresso text-sm">borato</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-2 py-3">
    <p class="font-display text-ochre font-bold text-lg">Claro</p>
    <p class="text-bark text-xs">HClO₃</p>
    <p class="text-espresso font-semibold">ClO₃⁻</p>
    <p class="text-espresso text-sm">clorato</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-2 py-3">
    <p class="font-display text-ochre font-bold text-lg">Só</p>
    <p class="text-bark text-xs">H₂SO₄</p>
    <p class="text-espresso font-semibold">SO₄²⁻</p>
    <p class="text-espresso text-sm">sulfato</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-2 py-3">
    <p class="font-display text-ochre font-bold text-lg">Pão</p>
    <p class="text-bark text-xs">H₃PO₄</p>
    <p class="text-espresso font-semibold">PO₄³⁻</p>
    <p class="text-espresso text-sm">fosfato</p>
  </div>
</div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">"Não Como Bolo Claro Só Pão": N, C, B, Cl, S, P. Tire os H do ácido: a carga do ânion = nº de H que saíram.</p>`,
            },
          ],
          quiz: [
            { q: "Qual é a equação geral de uma neutralização total?", options: ["Ácido + Base → Sal + Água", "Ácido + Sal → Base + Água", "Base + Água → Sal + Ácido", "Sal + Água → Ácido + Base"], correct: 0 },
            { q: "Qual é a reação iônica essencial de toda neutralização?", options: ["H⁺ + OH⁻ → H₂O", "Na⁺ + Cl⁻ → NaCl", "H₂O → H⁺ + OH⁻", "2 H⁺ + O²⁻ → H₂O"], correct: 0 },
            { q: "Em uma neutralização, de onde vem o cátion do sal?", options: ["Da base", "Do ácido", "Da água", "Do íon hidrônio"], correct: 0 },
            { q: "Em uma neutralização, de onde vem o ânion do sal?", options: ["Do ácido", "Da base", "Da água", "Do íon hidróxido"], correct: 0 },
            { q: "Qual sal se forma na reação HCl + KOH?", options: ["KCl", "KOH", "HK", "KClO"], correct: 0 },
            { q: "Quais são os coeficientes que balanceiam: _ HNO₃ + _ Ca(OH)₂ → _ Ca(NO₃)₂ + _ H₂O?", options: ["2, 1, 1, 2", "1, 1, 1, 1", "1, 2, 1, 2", "2, 1, 1, 1"], correct: 0 },
            { q: "Quantas moléculas de água se formam na neutralização total de 1 H₂SO₄ com 2 NaOH?", options: ["2", "1", "3", "4"], correct: 0 },
            { q: "Qual é o sal formado na neutralização total do H₂SO₄ com NaOH?", options: ["Na₂SO₄", "NaSO₄", "Na(SO₄)₂", "NaHSO₄"], correct: 0 },
            { q: "Para balancear uma neutralização total, devemos igualar:", options: ["O nº de H⁺ do ácido ao nº de OH⁻ da base", "O nº de átomos de oxigênio do ácido e da base", "A massa do ácido e a massa da base", "O nº de cátions ao nº de moléculas de água"], correct: 0 },
            { q: "Segundo Arrhenius, sal é uma substância que, em água:", options: ["Libera pelo menos um cátion diferente de H⁺ e um ânion diferente de OH⁻", "Libera H⁺ como único cátion", "Libera OH⁻ como único ânion", "Não libera íons"], correct: 0 },
            { q: "Qual é a dissociação correta do Ca(NO₃)₂?", options: ["Ca(NO₃)₂ → Ca²⁺ + 2 NO₃⁻", "Ca(NO₃)₂ → Ca⁺ + NO₃⁻", "Ca(NO₃)₂ → Ca²⁺ + NO₃²⁻", "Ca(NO₃)₂ → 2 Ca⁺ + 2 NO₃⁻"], correct: 0 },
            { q: "Sobre o comportamento em água, é correto afirmar:", options: ["Sais sofrem dissociação; ácidos sofrem ionização", "Sais sofrem ionização; ácidos sofrem dissociação", "Sais e ácidos não formam íons em água", "Apenas as bases formam íons em água"], correct: 0 },
            { q: "Um ácido terminado em -ídrico origina um ânion terminado em:", options: ["-eto", "-ato", "-ito", "-oso"], correct: 0 },
            { q: "Um ácido terminado em -ico origina um ânion terminado em:", options: ["-ato", "-eto", "-ito", "-ídrico"], correct: 0 },
            { q: "Um ácido terminado em -oso origina um ânion terminado em:", options: ["-ito", "-ato", "-eto", "-ico"], correct: 0 },
            { q: "Qual é o nome do ânion SO₄²⁻, que vem do ácido sulfúrico?", options: ["Sulfato", "Sulfito", "Sulfeto", "Sulfúrico"], correct: 0 },
            { q: "Qual é o nome do ânion NO₂⁻, que vem do ácido nitroso (HNO₂)?", options: ["Nitrito", "Nitrato", "Nitreto", "Nitroso"], correct: 0 },
            { q: "O ânion S²⁻, derivado do ácido sulfídrico (H₂S), chama-se:", options: ["Sulfeto", "Sulfato", "Sulfito", "Sulfídrico"], correct: 0 },
            { q: "Qual é a fórmula do sal formado pelos íons Fe²⁺ e NO₃⁻?", options: ["Fe(NO₃)₂", "FeNO₃", "Fe₂NO₃", "Fe₂(NO₃)₃"], correct: 0 },
            { q: "Qual é a fórmula do sulfato de alumínio (Al³⁺ e SO₄²⁻)?", options: ["Al₂(SO₄)₃", "Al₃(SO₄)₂", "AlSO₄", "Al(SO₄)₃"], correct: 0 },
            { q: "Qual é a fórmula correta do sal formado por Ca²⁺ e SO₄²⁻?", options: ["CaSO₄", "Ca₂(SO₄)₂", "Ca(SO₄)₂", "Ca₂SO₄"], correct: 0 },
            { q: "Qual é o nome do sal NaF?", options: ["Fluoreto de sódio", "Fluorato de sódio", "Sódio de flúor", "Fluorito de sódio"], correct: 0 },
            { q: "Qual é o nome do sal CaSO₄?", options: ["Sulfato de cálcio", "Sulfito de cálcio", "Sulfeto de cálcio", "Cálcio de sulfato"], correct: 0 },
            { q: "Qual é o nome do FeCl₃?", options: ["Cloreto de ferro (III) ou cloreto férrico", "Cloreto de ferro (II) ou cloreto ferroso", "Clorato de ferro (III)", "Cloreto de ferro (I)"], correct: 0 },
            { q: "Qual é o nome do FeCl₂ na nomenclatura com sufixos?", options: ["Cloreto ferroso", "Cloreto férrico", "Clorito ferroso", "Clorato férrico"], correct: 0 },
            { q: "Nos nomes de metais com carga variável, o sufixo -oso indica:", options: ["A menor carga do metal", "A maior carga do metal", "Que o sal tem oxigênio", "Que o sal é ácido"], correct: 0 },
            { q: "No sal Fe₂S₃, qual é a carga de cada íon ferro?", options: ["+3", "+2", "+1", "+6"], correct: 0 },
            { q: "Qual é o nome do sal KCN?", options: ["Cianeto de potássio", "Cianato de potássio", "Carbonato de potássio", "Cianito de potássio"], correct: 0 },
            { q: "Qual é o nome do sal CaBr₂?", options: ["Brometo de cálcio", "Bromato de cálcio", "Bromito de cálcio", "Cálcio de bromo"], correct: 0 },
            { q: "No macete \"Não Como Bolo Claro Só Pão\", qual ânion corresponde a \"Pão\"?", options: ["PO₄³⁻ (fosfato)", "PO₃³⁻ (fosfito)", "P³⁻ (fosfeto)", "PO₄²⁻ (fosfato)"], correct: 0 },
            { q: "Qual é a fórmula do ânion carbonato?", options: ["CO₃²⁻", "CO₃⁻", "CO₂²⁻", "C²⁻"], correct: 0 },
            { q: "Qual é a fórmula do ânion borato, que vem do H₃BO₃?", options: ["BO₃³⁻", "BO₃⁻", "BO₃²⁻", "B³⁻"], correct: 0 },
            { q: "O ácido HClO₃ (ácido clórico) origina qual ânion?", options: ["ClO₃⁻, clorato", "Cl⁻, cloreto", "ClO₂⁻, clorito", "ClO₃²⁻, clorato"], correct: 0 },
            { q: "Qual sal é formado na neutralização total entre H₃PO₄ e NaOH?", options: ["Na₃PO₄", "NaPO₄", "Na₂PO₄", "Na(PO₄)₃"], correct: 0 },
            { q: "Qual par ácido + base produz o nitrato de potássio (KNO₃)?", options: ["HNO₃ + KOH", "HNO₂ + KOH", "HCl + KOH", "H₂SO₄ + KOH"], correct: 0 },
          ],
        },
      ],
    },
);
