window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "quimica-a",
      name: "Química-A",
      emoji: "🧪",
      contents: [
        {
          id: "estequiometria",
          title: "Estequiometria",
          sections: [
            {
              heading: "1. Ordem para resolver uma questão",
              body: `Na aula, a sequência apresentada foi:

① Equação balanceada
Primeiro, deixe a equação balanceada.

② Proporção em mol
Depois, observe os números que aparecem na equação e monte a proporção em mol.

③ Conversão de unidades
Se o exercício fornecer uma quantidade em outra unidade, faça a conversão necessária.

④ Dúvida do exercício
Por fim, utilize a proporção para descobrir o valor que o exercício está pedindo.`,
              visual: `
<div class="flex flex-col items-center gap-1.5 max-w-xs mx-auto">
  <div class="w-full rounded-xl bg-cream border border-sand px-4 py-3 flex items-center gap-3">
    <span class="w-7 h-7 rounded-full bg-espresso text-cream flex items-center justify-center text-xs font-bold shrink-0">1</span>
    <span class="text-sm text-bark font-medium">Equação balanceada</span>
  </div>
  <span class="text-ochre text-lg leading-none">↓</span>
  <div class="w-full rounded-xl bg-cream border border-sand px-4 py-3 flex items-center gap-3">
    <span class="w-7 h-7 rounded-full bg-espresso text-cream flex items-center justify-center text-xs font-bold shrink-0">2</span>
    <span class="text-sm text-bark font-medium">Proporção em mol</span>
  </div>
  <span class="text-ochre text-lg leading-none">↓</span>
  <div class="w-full rounded-xl bg-cream border border-sand px-4 py-3 flex items-center gap-3">
    <span class="w-7 h-7 rounded-full bg-espresso text-cream flex items-center justify-center text-xs font-bold shrink-0">3</span>
    <span class="text-sm text-bark font-medium">Conversão de unidades</span>
  </div>
  <span class="text-ochre text-lg leading-none">↓</span>
  <div class="w-full rounded-xl bg-cream border border-sand px-4 py-3 flex items-center gap-3">
    <span class="w-7 h-7 rounded-full bg-espresso text-cream flex items-center justify-center text-xs font-bold shrink-0">4</span>
    <span class="text-sm text-bark font-medium">Dúvida do exercício</span>
  </div>
</div>`,
            },
            {
              heading: "2. Exemplo da aula",
              body: `Equação:
C₂H₆O + 3O₂ → 2CO₂ + 3H₂O

A equação mostra a proporção:`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="border-b-2 border-espresso/70">
        <th class="text-left py-2 pr-4 font-display text-bark">Substância</th>
        <th class="text-left py-2 font-display text-bark">Quantidade</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-2 pr-4 text-bark/80">C₂H₆O</td><td class="py-2 text-bark/80">1 mol</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-4 text-bark/80">O₂</td><td class="py-2 text-bark/80">3 mols</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-4 text-bark/80">CO₂</td><td class="py-2 text-bark/80">2 mols</td></tr>
      <tr><td class="py-2 pr-4 text-bark/80">H₂O</td><td class="py-2 text-bark/80">3 mols</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "",
              body: `Portanto:
1 mol de C₂H₆O → 2 mols de CO₂
Essa é a proporção que será utilizada no exemplo.`,
            },
            {
              heading: "3. Conversão de mol para massa",
              body: `No exemplo, precisamos saber a massa correspondente a 1 mol de C₂H₆O e a 2 mols de CO₂.

C₂H₆O
12 · 2 + 1 · 6 + 16
= 46 g/mol

Portanto:
1 mol de C₂H₆O = 46 g

CO₂
12 + 16 · 2
= 44 g/mol

Como a equação apresenta 2 mols de CO₂:
2 · 44 g = 88 g

Então temos:
46 g de C₂H₆O → 88 g de CO₂`,
            },
            {
              heading: "4. Aplicando no exercício",
              body: `O exemplo fornece:
46 g de C₂H₆O → 2 · 44 g de CO₂

E pergunta quanto de CO₂ será produzido a partir de:
2,3 × 10³ g de C₂H₆O

Montando a proporção:
46 g → 2 · 44 g
2,3 × 10³ g → ?

Agora fazemos a multiplicação cruzada:
? = (2,3 · 10³ · 2 · 44) / 46

Resultado:
? = 4,4 · 10³ g`,
            },
            {
              heading: "🧠 O OURO DA ESTEQUIOMETRIA",
              body: `Quando aparecer uma questão desse tipo, pense sempre na sequência:

EQUAÇÃO BALANCEADA
↓
PROPORÇÃO EM MOL
↓
CONVERSÃO DE UNIDADES
↓
PROPORÇÃO PARA ENCONTRAR O ?

No exemplo:
C₂H₆O + 3O₂ → 2CO₂ + 3H₂O
1 mol C₂H₆O → 2 mol CO₂
46 g C₂H₆O → 88 g CO₂
2,3 × 10³ g C₂H₆O → 4,4 × 10³ g CO₂`,
            },
            {
              heading: "🔎 Como analisar uma questão",
              body: `Antes de fazer qualquer conta, procure:

1. Qual é a equação?
→ Balanceie.

2. Qual é a proporção em mol?
→ Olhe os números da equação.

3. Qual unidade o exercício forneceu?
→ Veja se precisa converter.

4. O que ele está perguntando?
→ Esse será o ? da proporção.

Assim você não sai fazendo conta aleatoriamente: segue a ordem da aula.`,
            },
          ],
          quiz: [
            { q: "Qual é o primeiro passo para resolver uma questão de estequiometria, segundo a aula?", options: ["Deixar a equação balanceada","Converter unidades","Montar a proporção em mol","Responder a dúvida do exercício"], correct: 0 },
            { q: "Depois de balancear a equação, o que se deve fazer?", options: ["Montar a proporção em mol observando os números da equação","Converter a temperatura","Calcular a densidade","Somar as massas atômicas"], correct: 0 },
            { q: "A conversão de unidades deve ser feita quando:", options: ["O exercício fornecer uma quantidade em outra unidade","A equação não estiver balanceada","O produto for um gás","Sempre, independentemente do exercício"], correct: 0 },
            { q: "Na equação C₂H₆O + 3O₂ → 2CO₂ + 3H₂O, qual é a proporção em mol entre C₂H₆O e CO₂?", options: ["1 mol de C₂H₆O para 2 mols de CO₂","1 mol de C₂H₆O para 3 mols de CO₂","2 mols de C₂H₆O para 1 mol de CO₂","3 mols de C₂H₆O para 2 mols de CO₂"], correct: 0 },
            { q: "Qual é a massa molar do C₂H₆O calculada no exemplo?", options: ["46 g/mol","44 g/mol","88 g/mol","12 g/mol"], correct: 0 },
            { q: "Qual é a massa molar do CO₂ calculada no exemplo?", options: ["44 g/mol","46 g/mol","88 g/mol","28 g/mol"], correct: 0 },
            { q: "Como a equação apresenta 2 mols de CO₂, qual é a massa total correspondente?", options: ["88 g","44 g","46 g","92 g"], correct: 0 },
            { q: "Para descobrir o valor de '?' a partir de 2,3 × 10³ g de C₂H₆O, qual operação é usada?", options: ["Multiplicação cruzada","Soma direta","Divisão pela massa molar apenas","Regra de três inversa"], correct: 0 },
            { q: "Qual é o resultado final de CO₂ produzido a partir de 2,3 × 10³ g de C₂H₆O, segundo o exemplo?", options: ["4,4 × 10³ g","8,8 × 10³ g","2,3 × 10³ g","4,6 × 10² g"], correct: 0 },
            { q: "Segundo o 'ouro da estequiometria', qual é a sequência correta para resolver a questão?", options: ["Equação balanceada → Proporção em mol → Conversão de unidades → Proporção para encontrar o ?","Conversão de unidades → Equação balanceada → Proporção em mol → Resposta","Proporção em mol → Equação balanceada → Resposta → Conversão","Resposta → Proporção → Conversão → Equação"], correct: 0 },
          ],
        },
        {
          id: "concentracao-molar",
          title: "Concentração de soluções (ppm, ppb e mol/L)",
          sections: [
            {
              heading: "Partes por milhão (ppm)",
              body: `ppm relaciona quantas partes de soluto há em um milhão (10⁶) de partes da solução.

Usado para soluções MUITO diluídas: poluentes no ar e na água, flúor na pasta de dente, metais em ligas.

Exemplo:
5 ppm → 5 partes de soluto — 10⁶ partes da solução
→ 5 g de soluto — 10⁶ g de solução

Exemplo:
A concentração de chumbo (Pb) no latão é de 2 ppm.
→ 2 g de chumbo — 10⁶ g de latão

📌 Para a água, 1 L tem cerca de 1 000 g (densidade 1 g/mL). Por isso, em água, 1 ppm ≈ 1 mg/L.`,
              visual: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<rect width="640" height="280" rx="12" fill="#F4EEE1"/>
<text x="320" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">Molde da regra de três para ppm</text>
<text x="170" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="#A8763E">SOLUTO</text><text x="450" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="#5B7553">SOLUÇÃO</text>
<rect x="80" y="76" width="180" height="40" rx="10" fill="#E4D9C4" stroke="#A8763E" stroke-width="2"/><text x="170" y="102" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">valor em ppm (g)</text>
<rect x="360" y="76" width="180" height="40" rx="10" fill="#E4D9C4" stroke="#5B7553" stroke-width="2"/><text x="450" y="102" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">10⁶ g</text>
<rect x="80" y="132" width="180" height="40" rx="10" fill="#E4D9C4" stroke="#A8763E" stroke-width="2"/><text x="170" y="158" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">x (o que se pede)</text>
<rect x="360" y="132" width="180" height="40" rx="10" fill="#E4D9C4" stroke="#5B7553" stroke-width="2"/><text x="450" y="158" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">massa da amostra</text>
<text x="310" y="102" text-anchor="middle" font-size="16" font-weight="700" fill="#3E2F20">——</text><text x="310" y="158" text-anchor="middle" font-size="16" font-weight="700" fill="#3E2F20">——</text>
<line x1="260" y1="96" x2="360" y2="152" stroke="#A6493A" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="260" y1="152" x2="360" y2="96" stroke="#A6493A" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="320" y="202" text-anchor="middle" font-size="11" font-style="italic" fill="#A6493A">multiplique cruzado e isole x</text>
<rect x="60" y="222" width="520" height="40" rx="20" fill="none" stroke="#C9B18C"/>
<text x="320" y="247" text-anchor="middle" font-size="12.5" font-weight="700" fill="#3E2F20">Água: 1 L ≈ 1 000 g  →  1 ppm ≈ 1 mg/L   ·   1 ppm = 1 000 ppb</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Sempre deixe o soluto de um lado e a solução do outro, na mesma unidade (gramas).</p>`,
            },
            {
              heading: "Partes por bilhão (ppb)",
              body: `ppb relaciona quantas partes de soluto há em um bilhão (10⁹) de partes da solução.

Serve para quantidades ainda menores (traços de metais pesados, como chumbo e mercúrio).

Conversão: 1 ppm = 1 000 ppb  →  0,001 ppm = 1 ppb`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Unidade</th><th class="text-left py-2 pr-4 font-display text-ochre">Significa</th><th class="text-left py-2 pr-4 font-display text-ochre">Em massa</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">1 ppm</td><td class="py-1.5 pr-4 text-espresso">1 parte em 10⁶ partes</td><td class="py-1.5 pr-4 text-espresso">1 g em 10⁶ g = 1 mg/kg</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">1 ppb</td><td class="py-1.5 pr-4 text-espresso">1 parte em 10⁹ partes</td><td class="py-1.5 pr-4 text-espresso">1 g em 10⁹ g = 1 μg/kg</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">1 ppm</td><td class="py-1.5 pr-4 text-espresso">= 1 000 ppb</td><td class="py-1.5 pr-4 text-espresso"></td></tr></tbody></table></div>`,
            },
            {
              heading: "Exercícios resolvidos (ppm e ppb)",
              body: `1) Uma pasta de dente tem 1 500 ppm de flúor. Qual a massa de flúor em um tubo de 200 g?
1 500 g flúor — 10⁶ g pasta
x — 200 g
10⁶ · x = 1 500 · 200 = 3 · 10⁵
x = 3 · 10⁵ / 10⁶ = 0,3 g

2) Uma amostra tem 2 ppm de cobre (Cu). Quanto cobre há em 1 kg (10³ g) dessa amostra?
2 g — 10⁶ g
x — 10³ g
x = 2 · 10³ / 10⁶ = 2 · 10⁻³ g de Cu (2 mg)

3) Uma água tem 0,001 ppm de chumbo. Quanto chumbo há em 1 L (≈ 1 000 g)?
0,001 g Pb — 10⁶ g
x — 10³ g
x = 10⁻³ · 10³ / 10⁶ = 1 · 10⁻⁶ g (1 μg)
E 0,001 ppm = 1 ppb.

4) Há 0,08 g de soluto em 10 L de água (≈ 10 000 g = 10⁴ g). Qual a concentração em ppm?
0,08 g — 10⁴ g
x — 10⁶ g
x = 0,08 · 10⁶ / 10⁴ = 8 → 8 ppm

📌 Comparando amostras: quanto MAIOR o valor em ppm, MAIS soluto (por exemplo, mais mercúrio) há na amostra. Se o limite permitido é 0,5 ppm, uma amostra com 2 ppm está acima do limite.`,
            },
            {
              heading: "Concentração molar (mol/L)",
              body: `A concentração molar relaciona a quantidade de matéria (mol) do soluto presente em 1 L de solução.

M = n₁ / V

• M → concentração molar (mol/L)
• n₁ → número de mol do soluto
• V → volume da solução (L)

Atenção: o volume tem que estar em litros. 500 mL = 0,5 L.`,
            },
            {
              heading: "Juntando com a massa molar",
              body: `Relacionando com a massa molar:

n₁ = m₁ / M₁

• m₁ → massa do soluto (g)
• M₁ → massa molar do soluto (g/mol)

Substituindo na fórmula anterior:

M = m₁ / (M₁ · V)

📌 Não confunda: M (sem índice) é a concentração em mol/L; M₁ é a massa molar do soluto.

Exemplo: 11,7 g de NaCl (M₁ = 58,5 g/mol) em 500 mL de solução.
• n₁ = 11,7 / 58,5 = 0,2 mol
• M = 0,2 / 0,5 = 0,4 mol/L`,
            },
            {
              heading: "Concentração de partículas em solução",
              body: `Compostos moleculares, como a glicose, não se dissociam na água:

C₆H₁₂O₆ → C₆H₁₂O₆ (em água)
1 mol → 1 mol
0,2 mol/L → 0,2 mol/L de partículas

Compostos iônicos, como o NaCl, se dissociam em íons:

NaCl → Na⁺ + Cl⁻
1 mol → 1 mol + 1 mol
0,2 mol/L → 0,2 mol/L de Na⁺ + 0,2 mol/L de Cl⁻ = 0,4 mol/L de partículas

Outro exemplo: CaCl₂ → Ca²⁺ + 2 Cl⁻. Uma solução 0,1 mol/L de CaCl₂ tem 0,1 mol/L de Ca²⁺ e 0,2 mol/L de Cl⁻.`,
              visual: `<svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">

<rect width="640" height="290" rx="12" fill="#F4EEE1"/>
<text x="160" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">C₆H₁₂O₆ (glicose) 0,2 mol/L</text>
<text x="480" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">NaCl 0,2 mol/L</text>
<text x="160" y="46" text-anchor="middle" font-size="11" fill="#5C4630">não se dissocia</text>
<text x="480" y="46" text-anchor="middle" font-size="11" fill="#5C4630">dissocia: NaCl → Na⁺ + Cl⁻</text>
<path d="M60,70 L60,212 Q60,222 70,222 L250,222 Q260,222 260,212 L260,70" fill="none" stroke="#5C4630" stroke-width="2.5"/><rect x="63" y="100" width="194" height="119" fill="#E4D9C4"/><path d="M380,70 L380,212 Q380,222 390,222 L570,222 Q580,222 580,212 L580,70" fill="none" stroke="#5C4630" stroke-width="2.5"/><rect x="383" y="100" width="194" height="119" fill="#E4D9C4"/>
<polygon points="100,119 110,125 110,135 100,141 90,135 90,125" fill="#A8763E" stroke="#5C4630"/><polygon points="160,139 170,145 170,155 160,161 150,155 150,145" fill="#A8763E" stroke="#5C4630"/><polygon points="220,114 230,120 230,130 220,136 210,130 210,120" fill="#A8763E" stroke="#5C4630"/><polygon points="120,179 130,185 130,195 120,201 110,195 110,185" fill="#A8763E" stroke="#5C4630"/><polygon points="190,184 200,190 200,200 190,206 180,200 180,190" fill="#A8763E" stroke="#5C4630"/>
<circle cx="410" cy="128" r="8" fill="#5B7553"/><text x="410" y="132" text-anchor="middle" font-size="9" font-weight="700" fill="#F4EEE1">+</text><circle cx="432" cy="136" r="10" fill="#A6493A"/><text x="432" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="#F4EEE1">−</text><circle cx="470" cy="150" r="8" fill="#5B7553"/><text x="470" y="154" text-anchor="middle" font-size="9" font-weight="700" fill="#F4EEE1">+</text><circle cx="492" cy="158" r="10" fill="#A6493A"/><text x="492" y="162" text-anchor="middle" font-size="10" font-weight="700" fill="#F4EEE1">−</text><circle cx="530" cy="126" r="8" fill="#5B7553"/><text x="530" y="130" text-anchor="middle" font-size="9" font-weight="700" fill="#F4EEE1">+</text><circle cx="552" cy="134" r="10" fill="#A6493A"/><text x="552" y="138" text-anchor="middle" font-size="10" font-weight="700" fill="#F4EEE1">−</text><circle cx="430" cy="192" r="8" fill="#5B7553"/><text x="430" y="196" text-anchor="middle" font-size="9" font-weight="700" fill="#F4EEE1">+</text><circle cx="452" cy="200" r="10" fill="#A6493A"/><text x="452" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="#F4EEE1">−</text><circle cx="510" cy="190" r="8" fill="#5B7553"/><text x="510" y="194" text-anchor="middle" font-size="9" font-weight="700" fill="#F4EEE1">+</text><circle cx="532" cy="198" r="10" fill="#A6493A"/><text x="532" y="202" text-anchor="middle" font-size="10" font-weight="700" fill="#F4EEE1">−</text>
<text x="160" y="250" text-anchor="middle" font-size="12" fill="#5C4630">1 mol → 1 mol de partículas</text>
<text x="160" y="270" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">0,2 mol/L de partículas</text>
<text x="480" y="250" text-anchor="middle" font-size="12" fill="#5C4630">1 mol → 1 mol Na⁺ + 1 mol Cl⁻</text>
<text x="480" y="270" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">0,2 + 0,2 = 0,4 mol/L de partículas</text>

</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Mesma concentração do soluto, número de partículas diferente: compostos iônicos se dissociam na água.</p>`,
            },
          ],
          quiz: [
            { q: "A unidade ppm indica quantas partes de soluto há em:", options: ["100 partes de solução","10³ partes de solução","10⁶ partes de solução","10⁹ partes de solução"], correct: 2 },
            { q: "A unidade ppb indica quantas partes de soluto há em:", options: ["10³ partes de solução","10⁶ partes de solução","10⁹ partes de solução","10¹² partes de solução"], correct: 2 },
            { q: "Uma pasta de dente tem 1 500 ppm de flúor. A massa de flúor em um tubo de 200 g é:", options: ["0,03 g","0,3 g","3 g","30 g"], correct: 1 },
            { q: "O latão contém 2 ppm de chumbo. Em 1 kg de latão há:", options: ["2 g de chumbo","0,2 g de chumbo","2 · 10⁻³ g de chumbo","2 · 10⁻⁶ g de chumbo"], correct: 2 },
            { q: "Uma amostra de 10 L de água (≈ 10⁴ g) contém 0,08 g de um soluto. A concentração é:", options: ["0,8 ppm","8 ppm","80 ppm","800 ppm"], correct: 1 },
            { q: "Uma concentração de 0,001 ppm equivale a:", options: ["1 ppb","10 ppb","0,1 ppb","1 000 ppb"], correct: 0 },
            { q: "Quantos ppb há em 1 ppm?", options: ["10","100","1 000","1 000 000"], correct: 2 },
            { q: "Para soluções aquosas bem diluídas, 1 ppm equivale aproximadamente a:", options: ["1 g/L","1 mg/L","1 kg/L","1 mol/L"], correct: 1 },
            { q: "Uma água tem 5 ppm de cloro. Quantos miligramas de cloro há em 2 L dessa água?", options: ["2,5 mg","5 mg","10 mg","100 mg"], correct: 2 },
            { q: "O limite permitido de mercúrio em um peixe é 0,5 ppm. Uma amostra com 2 ppm:", options: ["Está abaixo do limite","Está acima do limite (tem mais mercúrio)","Não tem mercúrio","Tem exatamente o limite"], correct: 1 },
            { q: "Uma solução contém 0,5 mol de soluto em 2 L de solução. Qual é sua concentração molar?", options: ["1 mol/L","0,25 mol/L","2,5 mol/L","4 mol/L"], correct: 1 },
            { q: "Foram dissolvidos 2 mol de soluto em água, formando 500 mL de solução. A concentração molar é:", options: ["1 mol/L","0,4 mol/L","4 mol/L","1000 mol/L"], correct: 2 },
            { q: "Na fórmula M = n/V, o volume V deve ser expresso em:", options: ["mL de solvente","Litros de solução","Gramas de solução","cm³ de soluto"], correct: 1 },
            { q: "Qual é a quantidade de matéria em 9,8 g de H₂SO₄ (MM = 98 g/mol)?", options: ["0,1 mol","1 mol","9,8 mol","10 mol"], correct: 0 },
            { q: "Dissolvem-se 11,7 g de NaCl (MM = 58,5 g/mol) em água até completar 500 mL de solução. A concentração molar é:", options: ["0,2 mol/L","0,4 mol/L","0,1 mol/L","23,4 mol/L"], correct: 1 },
            { q: "Uma solução foi preparada com 18 g de glicose (MM = 180 g/mol) em 200 mL de solução. Sua concentração é:", options: ["0,1 mol/L","0,9 mol/L","0,5 mol/L","5 mol/L"], correct: 2 },
            { q: "Que massa de NaOH (MM = 40 g/mol) é necessária para preparar 250 mL de solução 0,2 mol/L?", options: ["2 g","8 g","0,05 g","20 g"], correct: 0 },
            { q: "Qual volume de uma solução 0,5 mol/L contém 0,1 mol de soluto?", options: ["50 mL","100 mL","200 mL","500 mL"], correct: 2 },
            { q: "Em uma solução de glicose (C₆H₁₂O₆) 0,2 mol/L, a concentração de partículas dissolvidas é:", options: ["0,2 mol/L","0,4 mol/L","0,1 mol/L","1,2 mol/L"], correct: 0 },
            { q: "Em uma solução de NaCl 0,2 mol/L, a concentração total de íons é:", options: ["0,1 mol/L","0,2 mol/L","0,4 mol/L","0,6 mol/L"], correct: 2 },
            { q: "Numa solução de CaCl₂ 0,1 mol/L, a concentração de íons Cl⁻ é:", options: ["0,05 mol/L","0,1 mol/L","0,2 mol/L","0,3 mol/L"], correct: 2 },
            { q: "Por que soluções de NaCl e de glicose com a mesma concentração molar têm números de partículas diferentes?", options: ["Porque o NaCl se dissocia em íons e a glicose não","Porque a glicose evapora","Porque o NaCl é insolúvel","Porque a glicose se dissocia em 6 partículas"], correct: 0 },
          ],
        },
        {
          id: "mistura-de-solucoes",
          title: "Mistura e diluição de soluções",
          sections: [
            {
              heading: "Mistura de soluções do mesmo soluto",
              body: `Exemplo: solução A de NaCl (C_A, V_A) + solução B de NaCl (C_B, V_B) → solução final (C_F, V_F)

C_A · V_A + C_B · V_B = C_F · V_F

• Os "+" e o "=" são entre PRODUTOS (C · V), não somas de C com V.
• V_F = V_A + V_B (somam-se os volumes, desprezando a contração).
• Ideia: a quantidade de soluto se conserva. C · V = quantidade de soluto (mol ou massa).

Isolando a concentração final:
C_F = (C_A · V_A + C_B · V_B) / (V_A + V_B)

• A concentração final fica ENTRE C_A e C_B (é uma média ponderada pelos volumes).
• Pode usar mol/L ou g/L, mas todas as concentrações na mesma unidade; os volumes também (mL ou L).

Exemplo: 200 mL de NaCl 0,5 mol/L + 300 mL de NaCl 1,0 mol/L
C_F = (0,5 · 200 + 1,0 · 300) / (200 + 300) = 400 / 500 = 0,8 mol/L`,
              visual: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="ms6_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="ms6_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="ms6_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="ms6_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="ms6_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker><marker id="ms6_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="280" rx="12" fill="#F4EEE1"/>
<path d="M30,60 L30,190 Q30,200 40,200 L140,200 Q150,200 150,190 L150,60" fill="none" stroke="#5C4630" stroke-width="2.5"/><rect x="32" y="130" width="116" height="68" fill="#B9CBD3"/><text x="90" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">SOLUÇÃO A</text><text x="90" y="230" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">C_A · V_A</text><text x="185" y="150" text-anchor="middle" font-size="28" font-weight="700" fill="#3E2F20">+</text><path d="M220,60 L220,190 Q220,200 230,200 L330,200 Q340,200 340,190 L340,60" fill="none" stroke="#5C4630" stroke-width="2.5"/><rect x="222" y="110" width="116" height="88" fill="#B9CBD3"/><text x="280" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">SOLUÇÃO B</text><text x="280" y="230" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">C_B · V_B</text><line x1="360" y1="140" x2="410" y2="140" stroke="#3E2F20" stroke-width="2.5" marker-end="url(#ms6_3E2F20)"/><path d="M430,60 L430,190 Q430,200 440,200 L590,200 Q600,200 600,190 L600,60" fill="none" stroke="#5C4630" stroke-width="2.5"/><rect x="432" y="72" width="166" height="126" fill="#B9CBD3"/><text x="515" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">SOLUÇÃO FINAL</text><text x="515" y="230" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">C_F · V_F</text><rect x="40" y="240" width="560" height="30" rx="15" fill="#E4D9C4" stroke="#C9B18C"/><text x="320" y="260" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">C_A · V_A + C_B · V_B = C_F · V_F    com    V_F = V_A + V_B</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">C · V é a quantidade de soluto. Ao misturar, nenhum soluto some: o total de A mais o de B é o total da solução final.</p>`,
            },
            {
              heading: "Solutos diferentes, sem reação",
              body: `Cada soluto se dilui no volume final, independente do outro:

C_F (de cada soluto) = C · V / V_F

Exemplo: 100 mL de NaCl 0,6 mol/L + 200 mL de KCl 0,3 mol/L (V_F = 300 mL)
• [NaCl] = 0,6 · 100 / 300 = 0,2 mol/L
• [KCl] = 0,3 · 200 / 300 = 0,2 mol/L`,
            },
            {
              heading: "Solutos diferentes, com reação",
              body: `1. Calcule a quantidade de cada reagente: n = M · V
2. Compare com a proporção da equação balanceada (reagente limitante e excesso)
3. Calcule o que sobrou e o que foi formado
4. Divida pelo volume final (V_A + V_B) para obter as concentrações

Exemplo: HCl + NaOH → NaCl + H₂O (proporção 1 : 1)
100 mL de HCl 1,0 mol/L (0,1 mol) + 100 mL de NaOH 0,5 mol/L (0,05 mol)
• Reagem 0,05 mol de cada; sobram 0,05 mol de HCl (excesso)
• Forma-se 0,05 mol de NaCl
• V_F = 0,2 L → [HCl] = 0,25 mol/L e [NaCl] = 0,25 mol/L
• Como sobrou ácido, a solução final é ÁCIDA.`,
            },
            {
              heading: "Diluição e concentração",
              body: `Diluição (adicionar solvente):
C_i · V_i = C_f · V_f
• A concentração diminui, o volume aumenta e a quantidade de soluto continua a mesma.
• Exemplo: 100 mL de solução 2 mol/L diluída até 500 mL → C_f = 2 · 100 / 500 = 0,4 mol/L

Concentração (evaporar solvente):
• Mesma fórmula, mas agora V_f < V_i, e a concentração aumenta.
• Exemplo: 500 mL de solução 0,2 mol/L evaporada até 100 mL → C_f = 0,2 · 500 / 100 = 1,0 mol/L

📌 Cuidado: "volume de água adicionado" é V_f − V_i, e não o V_f.`,
            },
          ],
          quiz: [
            { q: "Na mistura de soluções do mesmo soluto, vale a relação:", options: ["C_A + V_A = C_F + V_F","C_A · V_A + C_B · V_B = C_F · V_F","C_A / V_A = C_B / V_B","C_F = C_A + C_B"], correct: 1 },
            { q: "Por que a relação C_A · V_A + C_B · V_B = C_F · V_F é válida?", options: ["Porque a concentração se conserva","Porque a quantidade de soluto se conserva","Porque o volume não muda","Porque o solvente evapora"], correct: 1 },
            { q: "Misturam-se 200 mL de NaCl 0,5 mol/L com 300 mL de NaCl 1,0 mol/L. A concentração final é:", options: ["0,75 mol/L","0,8 mol/L","1,5 mol/L","0,6 mol/L"], correct: 1 },
            { q: "Misturam-se 100 mL de solução 2 mol/L com 100 mL de solução 1 mol/L do mesmo soluto. A concentração final é:", options: ["3 mol/L","1 mol/L","1,5 mol/L","0,5 mol/L"], correct: 2 },
            { q: "Ao misturar 100 mL de solução 20 g/L com 400 mL de solução 5 g/L do mesmo soluto, a concentração final é:", options: ["8 g/L","12,5 g/L","25 g/L","4 g/L"], correct: 0 },
            { q: "Na mistura de duas soluções do mesmo soluto, a concentração final:", options: ["É sempre a soma das concentrações","Fica entre as duas concentrações iniciais","É sempre maior que as duas","É sempre zero"], correct: 1 },
            { q: "Desprezando a contração, o volume final de uma mistura é:", options: ["V_A − V_B","V_A · V_B","V_A + V_B","O maior dos dois volumes"], correct: 2 },
            { q: "Misturam-se 100 mL de NaCl 0,6 mol/L e 200 mL de KCl 0,3 mol/L (sem reação). A concentração final de NaCl é:", options: ["0,6 mol/L","0,3 mol/L","0,2 mol/L","0,9 mol/L"], correct: 2 },
            { q: "Misturam-se 100 mL de HCl 1,0 mol/L com 100 mL de NaOH 0,5 mol/L. A solução final é:", options: ["Neutra","Ácida, pois sobra HCl","Básica, pois sobra NaOH","Sem nenhum íon"], correct: 1 },
            { q: "No caso anterior (100 mL de HCl 1,0 mol/L + 100 mL de NaOH 0,5 mol/L), a concentração de HCl que sobra é:", options: ["0,5 mol/L","0,25 mol/L","0,05 mol/L","1,0 mol/L"], correct: 1 },
            { q: "Misturam-se 100 mL de HCl 1 mol/L com 100 mL de NaOH 1 mol/L. A concentração de NaCl formado é:", options: ["1 mol/L","0,5 mol/L","2 mol/L","0,1 mol/L"], correct: 1 },
            { q: "100 mL de uma solução 2 mol/L são diluídos até 500 mL. A nova concentração é:", options: ["0,4 mol/L","1 mol/L","10 mol/L","0,2 mol/L"], correct: 0 },
            { q: "Quanto de água deve ser adicionado a 200 mL de solução 1,0 mol/L para obter 0,25 mol/L?", options: ["200 mL","600 mL","800 mL","50 mL"], correct: 1 },
            { q: "500 mL de uma solução 0,2 mol/L perdem solvente por evaporação até 100 mL. A nova concentração é:", options: ["0,04 mol/L","0,2 mol/L","1,0 mol/L","2,0 mol/L"], correct: 2 },
            { q: "Na diluição, o que permanece constante?", options: ["A concentração","O volume","A quantidade de soluto","A densidade"], correct: 2 },
          ],
        },
      ],
    },
);
