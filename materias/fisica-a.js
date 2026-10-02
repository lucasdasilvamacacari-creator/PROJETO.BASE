window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "fisica-a",
      name: "Física-A",
      emoji: "🌀",
      contents: [
        {
          id: "dinamica-mcu",
          title: "Dinâmica dos movimentos circulares e uniformes (MCU)",
          sections: [
            {
              heading: "1. Dinâmica do movimento circular",
              body: `Aceleração → alguém que altera o valor da velocidade.
Dividi em 2:

At — Aceleração tangencial
→ Altera o valor da velocidade.
Fórmula:
At = ΔV / Δt

Ac — Aceleração centrípeta
→ Altera a direção e o sentido da velocidade.
→ Aponta para o centro.
Fórmula:
Ac = V² / R`,
              visual: `
<svg viewBox="0 0 320 240" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrowV-a" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/>
    </marker>
    <marker id="arrowAc-a" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/>
    </marker>
  </defs>
  <circle cx="160" cy="125" r="85" fill="none" stroke="#C9B18C" stroke-width="2" stroke-dasharray="6 5"/>
  <circle cx="160" cy="125" r="3.5" fill="#3E2F20"/>
  <text x="168" y="121" font-size="11" fill="#5C4630">centro</text>
  <circle cx="228" cy="72" r="6" fill="#A8763E"/>
  <line x1="228" y1="72" x2="192" y2="38" stroke="#3E2F20" stroke-width="2.5" marker-end="url(#arrowV-a)"/>
  <text x="196" y="30" font-size="13" fill="#3E2F20" font-weight="600">V</text>
  <line x1="228" y1="72" x2="185" y2="102" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arrowAc-a)"/>
  <text x="178" y="118" font-size="13" fill="#A8763E" font-weight="600">Ac</text>
  <text x="45" y="225" font-size="11" fill="#5C4630">V é tangente à trajetória · Ac aponta sempre para o centro</text>
</svg>`,
            },
            {
              heading: "2. Força resultante no movimento circular",
              body: `Para o corpo percorrer uma trajetória circular, "alguém" deve puxá-lo para o centro. Esse "alguém" será chamado de resultante.

Fcp = m · V² / R

Importante: sempre que o movimento for circular e uniforme, a resultante das forças será a resultante centrípeta.
R = Rcp

* Sempre na bundinha
* Decomposição
* Ajuda – paralinha`,
            },
            {
              heading: "3. Exemplos",
              body: `I) Rampa
MCU → R = Rcp
P − N = m · V² / R

II) Looping
MCU → Rcp
N − P = m · V² / R

III) Globo da Morte
MCU → Rcp
R = Rcp
P + N = m · V² / R

Se o corpo perde o contato:
N = 0
Então:
P + 0 = m · V² / R
mg = m · V² / R
g = V² / R
V² = gR
V = √gR
→ Velocidade mínima para completar a volta.`,
              visual: `
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div class="text-center">
    <svg viewBox="0 0 200 190" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowP-r" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5C4630"/></marker>
        <marker id="arrowN-r" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#A8763E"/></marker>
      </defs>
      <path d="M20,150 Q100,45 180,150" fill="none" stroke="#C9B18C" stroke-width="3"/>
      <circle cx="100" cy="65" r="6" fill="#3E2F20"/>
      <line x1="100" y1="65" x2="100" y2="112" stroke="#5C4630" stroke-width="2.5" marker-end="url(#arrowP-r)"/>
      <text x="106" y="105" font-size="12" fill="#5C4630" font-weight="600">P</text>
      <line x1="100" y1="65" x2="100" y2="32" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arrowN-r)"/>
      <text x="106" y="30" font-size="12" fill="#A8763E" font-weight="600">N</text>
      <circle cx="100" cy="140" r="2.5" fill="#5C4630"/>
      <text x="108" y="145" font-size="10" fill="#5C4630">centro (Rcp)</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Rampa — P − N = mV²/R</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 200 190" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowP-l" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5C4630"/></marker>
        <marker id="arrowN-l" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#A8763E"/></marker>
      </defs>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#C9B18C" stroke-width="2" stroke-dasharray="5 4"/>
      <circle cx="100" cy="100" r="3" fill="#3E2F20"/>
      <text x="106" y="96" font-size="10" fill="#5C4630">centro</text>
      <circle cx="100" cy="170" r="6" fill="#3E2F20"/>
      <line x1="100" y1="170" x2="100" y2="122" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arrowN-l)"/>
      <text x="106" y="140" font-size="12" fill="#A8763E" font-weight="600">N</text>
      <line x1="100" y1="170" x2="100" y2="185" stroke="#5C4630" stroke-width="2.5"/>
      <text x="106" y="188" font-size="12" fill="#5C4630" font-weight="600">P</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Looping — N − P = mV²/R</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 200 190" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowP-g" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#5C4630"/></marker>
        <marker id="arrowN-g" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#A8763E"/></marker>
      </defs>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#C9B18C" stroke-width="2" stroke-dasharray="5 4"/>
      <circle cx="100" cy="100" r="3" fill="#3E2F20"/>
      <text x="106" y="118" font-size="10" fill="#5C4630">centro</text>
      <circle cx="100" cy="30" r="6" fill="#3E2F20"/>
      <line x1="92" y1="30" x2="92" y2="70" stroke="#5C4630" stroke-width="2.5" marker-end="url(#arrowP-g)"/>
      <text x="66" y="55" font-size="12" fill="#5C4630" font-weight="600">P</text>
      <line x1="108" y1="30" x2="108" y2="60" stroke="#A8763E" stroke-width="2.5" marker-end="url(#arrowN-g)"/>
      <text x="114" y="50" font-size="12" fill="#A8763E" font-weight="600">N</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Globo da Morte — P + N = mV²/R</p>
  </div>
</div>`,
            },
          ],
          quiz: [
            {
              q: "O que a aceleração tangencial (At) altera no movimento circular?",
              options: ["O valor da velocidade", "A direção da velocidade", "Apenas o sentido do movimento", "O raio da trajetória"],
              correct: 0,
            },
            {
              q: "Qual é a fórmula da aceleração tangencial?",
              options: ["At = ΔV / Δt", "At = V² / R", "At = m · V² / R", "At = √(gR)"],
              correct: 0,
            },
            {
              q: "A aceleração centrípeta (Ac) é responsável por alterar:",
              options: ["Apenas o valor da velocidade", "A direção e o sentido da velocidade", "A massa do corpo", "O tempo de percurso"],
              correct: 1,
            },
            {
              q: "Para onde aponta a aceleração centrípeta?",
              options: ["Para fora da trajetória", "Tangente à trajetória", "Para o centro da trajetória", "Não tem direção definida"],
              correct: 2,
            },
            {
              q: "Qual é a fórmula da aceleração centrípeta?",
              options: ["Ac = V² / R", "Ac = ΔV / Δt", "Ac = m · g", "Ac = √(gR)"],
              correct: 0,
            },
            {
              q: "No MCU, a força resultante sobre o corpo é chamada de:",
              options: ["Força tangencial", "Força centrípeta", "Força de atrito", "Força elástica"],
              correct: 1,
            },
            {
              q: "No exemplo da Rampa, qual é a equação da resultante centrípeta?",
              options: ["P − N = mV²/R", "N − P = mV²/R", "P + N = mV²/R", "N = mV²/R"],
              correct: 0,
            },
            {
              q: "No exemplo do Looping, a equação correta é:",
              options: ["P − N = mV²/R", "N − P = mV²/R", "P + N = mV²/R", "N = 0"],
              correct: 1,
            },
            {
              q: "No Globo da Morte, quando o corpo perde o contato (N = 0), qual é a velocidade mínima para completar a volta?",
              options: ["V = √(gR)", "V = gR", "V = g/R", "V = R/g"],
              correct: 0,
            },
            {
              q: "No Globo da Morte, antes de perder o contato, a equação da resultante centrípeta é:",
              options: ["P − N = mV²/R", "N − P = mV²/R", "P + N = mV²/R", "N − P = 0"],
              correct: 2,
            },
          ],
        },
        {
          id: "gravitacao-universal",
          title: "Gravitação Universal",
          sections: [
            {
              heading: "Gravitação universal",
              body: `• Corpos que têm massa se atraem mutuamente.
• Essa força de atração será considerável caso a massa de um deles seja grande, como um planeta ou uma estrela.

Fórmula:

F = G · M₁ · M₂ / d²

• G: constante gravitacional
• M₁ e M₂: massas
• d: distância

Duas ideias para provas: se a distância dobra, a força cai a 1/4 (porque d está ao quadrado); se uma massa dobra, a força dobra.`,
              visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">

<rect width="640" height="300" rx="12" fill="#F4EEE1"/>
<defs><marker id="fa2" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#3E2F20"/></marker></defs>
<text x="160" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">ATRAÇÃO MÚTUA</text>
<text x="480" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">g E A ALTITUDE</text>
<line x1="320" y1="40" x2="320" y2="285" stroke="#C9B18C" stroke-dasharray="4 4"/>
<circle cx="70" cy="140" r="30" fill="#A8763E" stroke="#5C4630" stroke-width="2"/><text x="70" y="145" text-anchor="middle" font-size="12" font-weight="700" fill="#F4EEE1">M₁</text>
<circle cx="250" cy="140" r="22" fill="#5C4630" stroke="#3E2F20" stroke-width="2"/><text x="250" y="145" text-anchor="middle" font-size="12" font-weight="700" fill="#F4EEE1">M₂</text>
<line x1="104" y1="140" x2="140" y2="140" stroke="#A6493A" stroke-width="3" marker-end="url(#fa2)"/>
<line x1="226" y1="140" x2="190" y2="140" stroke="#A6493A" stroke-width="3" marker-end="url(#fa2)"/>
<text x="122" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="#A6493A">F</text><text x="208" y="128" text-anchor="middle" font-size="12" font-weight="700" fill="#A6493A">F</text>
<line x1="70" y1="190" x2="250" y2="190" stroke="#5C4630" stroke-width="1.5"/><line x1="70" y1="184" x2="70" y2="196" stroke="#5C4630"/><line x1="250" y1="184" x2="250" y2="196" stroke="#5C4630"/>
<text x="160" y="210" text-anchor="middle" font-size="11" fill="#5C4630">d (entre os centros)</text>
<text x="160" y="252" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">F = G · M₁ · M₂ / d²</text>
<text x="160" y="272" text-anchor="middle" font-size="11" fill="#5C4630">dobrou d → F cai a 1/4</text>
<circle cx="440" cy="240" r="55" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/><text x="440" y="246" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Planeta (M)</text>
<line x1="440" y1="185" x2="440" y2="170" stroke="#5C4630" stroke-width="1"/>
<circle cx="440" cy="168" r="6" fill="#A8763E"/>
<line x1="440" y1="160" x2="440" y2="188" stroke="#A6493A" stroke-width="2.5" marker-end="url(#fa2)"/>
<text x="458" y="172" text-anchor="start" font-size="11" fill="#A6493A">g = GM/R²</text>
<circle cx="440" cy="76" r="6" fill="#A8763E"/>
<line x1="440" y1="84" x2="440" y2="112" stroke="#A6493A" stroke-width="1.5" marker-end="url(#fa2)"/>
<text x="458" y="80" text-anchor="start" font-size="11" fill="#A6493A">g = GM/(R+h)²</text>
<line x1="560" y1="76" x2="560" y2="185" stroke="#5C4630" stroke-width="1.2"/><line x1="554" y1="76" x2="566" y2="76" stroke="#5C4630"/><line x1="554" y1="185" x2="566" y2="185" stroke="#5C4630"/>
<text x="574" y="135" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">h</text>
<text x="480" y="140" text-anchor="middle" font-size="11" fill="#5C4630">maior h → menor g</text>

</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">À esquerda, a força de atração mútua (ação e reação). À direita, a gravidade diminui com a altura.</p>`,
            },
            {
              heading: "Campo gravitacional na superfície",
              body: `Considere um corpo de massa m na superfície de um planeta.

O peso é a própria força gravitacional:
P = F
m · g = G · M · m / R²

Cancelando m:
g = G · M / R²

Na Terra, g = 9,8 m/s².

Repare que g não depende da massa do corpo, só da massa M e do raio R do planeta.`,
            },
            {
              heading: "Campo gravitacional em grandes altitudes",
              body: `Para um corpo a uma altura h da superfície, a distância ao centro do planeta passa a ser R + h:

g = G · M / (R + h)²

• R: raio do planeta
• h: altura em relação à superfície

Quanto maior a altura, menor é o g.

Exemplos com g₀ = 9,8 m/s² na superfície:
• h = R → distância 2R → g = g₀/4 = 2,45 m/s²
• h = 2R → distância 3R → g = g₀/9 ≈ 1,09 m/s²`,
            },
          ],
          quiz: [
            { q: "Segundo a Lei da Gravitação Universal, corpos que têm massa:", options: ["Se repelem mutuamente","Se atraem mutuamente","Não interagem","Só interagem se estiverem em contato"], correct: 1 },
            { q: "Dois corpos se atraem com força F. Se a distância entre eles dobra (massas constantes), a nova força será:", options: ["F/2","F/4","2F","4F"], correct: 1 },
            { q: "Dois corpos se atraem com força F. Se a distância entre eles cai à metade, a nova força será:", options: ["F/2","F/4","2F","4F"], correct: 3 },
            { q: "Dois corpos se atraem com força F. Se a massa de um deles triplica (distância constante), a nova força será:", options: ["F/3","3F","6F","9F"], correct: 1 },
            { q: "Dois corpos se atraem com força F. Se as duas massas dobram e a distância também dobra, a nova força será:", options: ["F/4","F/2","F","4F"], correct: 2 },
            { q: "Na fórmula F = G·M₁·M₂/d², a letra G representa:", options: ["A aceleração da gravidade","A constante gravitacional","A massa do planeta","A distância entre os corpos"], correct: 1 },
            { q: "Dois corpos de massas 2×10³ kg e 3×10³ kg estão a 1 m de distância. Sendo G = 6,0×10⁻¹¹ N·m²/kg², a força de atração é:", options: ["3,6×10⁻⁵ N","1,2×10⁻⁴ N","3,6×10⁻⁴ N","6,0×10⁻⁴ N"], correct: 2 },
            { q: "Para um corpo na superfície de um planeta, igualando o peso à força gravitacional, a aceleração da gravidade é g = G·M/R². Ela depende:", options: ["Da massa do corpo que cai","Da massa e do raio do planeta","Apenas da altura do corpo","Do formato do corpo"], correct: 1 },
            { q: "Sendo g = 9,8 m/s² na superfície da Terra, qual é o valor de g a uma altura h = R (um raio terrestre acima da superfície)?", options: ["2,45 m/s²","4,9 m/s²","9,8 m/s²","19,6 m/s²"], correct: 0 },
            { q: "Sendo g = 9,8 m/s² na superfície da Terra, qual é aproximadamente o valor de g a uma altura h = 2R acima da superfície?", options: ["3,27 m/s²","1,09 m/s²","4,9 m/s²","2,45 m/s²"], correct: 1 },
            { q: "Um planeta tem a mesma massa da Terra, mas metade do raio. A gravidade na sua superfície, em relação à da Terra, é:", options: ["A metade","A mesma","O dobro","O quádruplo"], correct: 3 },
            { q: "Um planeta tem o dobro da massa da Terra e o mesmo raio. A gravidade na sua superfície, em relação à da Terra, é:", options: ["A metade","A mesma","O dobro","O quádruplo"], correct: 2 },
          ],
        },
      ],
    },
);
