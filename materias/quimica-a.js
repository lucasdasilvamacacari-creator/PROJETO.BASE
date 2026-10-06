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
            {
              q: "Qual é o primeiro passo para resolver uma questão de estequiometria, segundo a aula?",
              options: ["Deixar a equação balanceada", "Converter unidades", "Montar a proporção em mol", "Responder a dúvida do exercício"],
              correct: 0,
            },
            {
              q: "Depois de balancear a equação, o que se deve fazer?",
              options: ["Montar a proporção em mol observando os números da equação", "Converter a temperatura", "Calcular a densidade", "Somar as massas atômicas"],
              correct: 0,
            },
            {
              q: "A conversão de unidades deve ser feita quando:",
              options: ["O exercício fornecer uma quantidade em outra unidade", "A equação não estiver balanceada", "O produto for um gás", "Sempre, independentemente do exercício"],
              correct: 0,
            },
            {
              q: "Na equação C₂H₆O + 3O₂ → 2CO₂ + 3H₂O, qual é a proporção em mol entre C₂H₆O e CO₂?",
              options: ["1 mol de C₂H₆O para 2 mols de CO₂", "1 mol de C₂H₆O para 3 mols de CO₂", "2 mols de C₂H₆O para 1 mol de CO₂", "3 mols de C₂H₆O para 2 mols de CO₂"],
              correct: 0,
            },
            {
              q: "Qual é a massa molar do C₂H₆O calculada no exemplo?",
              options: ["46 g/mol", "44 g/mol", "88 g/mol", "12 g/mol"],
              correct: 0,
            },
            {
              q: "Qual é a massa molar do CO₂ calculada no exemplo?",
              options: ["44 g/mol", "46 g/mol", "88 g/mol", "28 g/mol"],
              correct: 0,
            },
            {
              q: "Como a equação apresenta 2 mols de CO₂, qual é a massa total correspondente?",
              options: ["88 g", "44 g", "46 g", "92 g"],
              correct: 0,
            },
            {
              q: "Para descobrir o valor de '?' a partir de 2,3 × 10³ g de C₂H₆O, qual operação é usada?",
              options: ["Multiplicação cruzada", "Soma direta", "Divisão pela massa molar apenas", "Regra de três inversa"],
              correct: 0,
            },
            {
              q: "Qual é o resultado final de CO₂ produzido a partir de 2,3 × 10³ g de C₂H₆O, segundo o exemplo?",
              options: ["4,4 × 10³ g", "8,8 × 10³ g", "2,3 × 10³ g", "4,6 × 10² g"],
              correct: 0,
            },
            {
              q: "Segundo o 'ouro da estequiometria', qual é a sequência correta para resolver a questão?",
              options: [
                "Equação balanceada → Proporção em mol → Conversão de unidades → Proporção para encontrar o ?",
                "Conversão de unidades → Equação balanceada → Proporção em mol → Resposta",
                "Proporção em mol → Equação balanceada → Resposta → Conversão",
                "Resposta → Proporção → Conversão → Equação",
              ],
              correct: 0,
            },
          ],
        },
        {
          id: "concentracao-molar",
          title: "Concentração de soluções (mol/L)",
          sections: [
            {
              heading: "Concentração molar (mol/L)",
              body: `A concentração molar relaciona a quantidade de matéria (mol) do soluto presente em 1 L de solução.

M = n / V

• M → concentração molar (mol/L)
• n → quantidade de matéria do soluto (mol)
• V → volume da solução (L)

Atenção: o volume tem que estar em litros. 500 mL = 0,5 L.`,
            },
            {
              heading: "Juntando com a massa molar",
              body: `Relembrando:

n = m₁ / MM

• m₁ → massa do soluto (g)
• MM → massa molar do soluto (g/mol)

Substituindo na fórmula anterior:

M = m₁ / (MM · V)

Exemplo: 11,7 g de NaCl (MM = 58,5 g/mol) em 500 mL de solução.
• n = 11,7 / 58,5 = 0,2 mol
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
      ],
    },
);
