window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "matematica-b",
      name: "Matemática B",
      emoji: "📐",
      contents: [
        {
          id: "semelhanca-triangulos",
          title: "Semelhança de Triângulos",
          sections: [
            {
              heading: "O que é semelhança de triângulos?",
              body: `Dois triângulos são semelhantes quando possuem a mesma forma, mesmo que tenham tamanhos diferentes.
Isso significa que:

• Os ângulos correspondentes são iguais.
• Os lados correspondentes são proporcionais.`,
              visual: `
<svg viewBox="0 0 320 180" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,150 150,150 70,40" fill="none" stroke="#5C4630" stroke-width="2.5"/>
  <polygon points="210,150 288,150 240,84" fill="none" stroke="#5C4630" stroke-width="2.5"/>
  <path d="M38,150 Q20,150 27.4,133.6" stroke="#A8763E" stroke-width="2" fill="none"/>
  <path d="M132,150 Q150,150 139.4,135.4" stroke="#3E2F20" stroke-width="2" fill="none"/>
  <path d="M228,150 Q210,150 217.4,133.6" stroke="#A8763E" stroke-width="2" fill="none"/>
  <path d="M270,150 Q288,150 277.4,135.4" stroke="#3E2F20" stroke-width="2" fill="none"/>
  <text x="8" y="165" font-size="12" fill="#5C4630" font-weight="600">A</text>
  <text x="152" y="165" font-size="12" fill="#5C4630" font-weight="600">B</text>
  <text x="66" y="32" font-size="12" fill="#5C4630" font-weight="600">C</text>
  <text x="198" y="165" font-size="12" fill="#5C4630" font-weight="600">A'</text>
  <text x="290" y="165" font-size="12" fill="#5C4630" font-weight="600">B'</text>
  <text x="236" y="76" font-size="12" fill="#5C4630" font-weight="600">C'</text>
  <text x="60" y="178" font-size="10.5" fill="#5C4630">Mesma forma · ângulos iguais (cores) · tamanhos diferentes</text>
</svg>`,
            },
            {
              heading: "Como analisar se dois triângulos são semelhantes?",
              body: `Primeiro, procure ângulos iguais e depois compare os lados correspondentes.
É importante colocar os lados na mesma ordem de correspondência antes de montar a proporção.`,
            },
            {
              heading: "Casos de semelhança",
              body: `1. AA — Ângulo Ângulo
Se dois ângulos de um triângulo são iguais aos dois ângulos correspondentes de outro, os triângulos são semelhantes.

2. LAL — Lado Ângulo Lado
Se dois lados são proporcionais e o ângulo entre esses dois lados é igual, os triângulos são semelhantes.

3. LLL — Lado Lado Lado
Se os três lados correspondentes são proporcionais, os triângulos são semelhantes.`,
              visual: `
<div class="grid grid-cols-3 gap-3">
  <div class="text-center">
    <svg viewBox="0 0 110 100" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <polygon points="15,80 95,80 55,15" fill="none" stroke="#5C4630" stroke-width="2"/>
      <path d="M31,80 Q15,80 23.4,66.4" stroke="#A8763E" stroke-width="2" fill="none"/>
      <path d="M46.6,28.6 Q55,15 63.4,28.6" stroke="#A8763E" stroke-width="2" fill="none"/>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">AA</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 110 100" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <polygon points="15,80 95,80 55,15" fill="none" stroke="#5C4630" stroke-width="2"/>
      <path d="M31,80 Q15,80 23.4,66.4" stroke="#A8763E" stroke-width="2" fill="none"/>
      <line x1="52" y1="76" x2="58" y2="84" stroke="#3E2F20" stroke-width="2"/>
      <line x1="29.9" y1="44.4" x2="40.1" y2="50.6" stroke="#3E2F20" stroke-width="2"/>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">LAL</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 110 100" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <polygon points="15,80 95,80 55,15" fill="none" stroke="#5C4630" stroke-width="2"/>
      <line x1="52" y1="76" x2="58" y2="84" stroke="#3E2F20" stroke-width="2"/>
      <line x1="29.9" y1="44.4" x2="40.1" y2="50.6" stroke="#3E2F20" stroke-width="2"/>
      <line x1="80.1" y1="44.4" x2="69.9" y2="50.6" stroke="#3E2F20" stroke-width="2"/>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">LLL</p>
  </div>
</div>
<p class="text-[11px] text-bark/50 text-center mt-2">Marcações em ocre = ângulos iguais · marcações em marrom = lados proporcionais</p>`,
            },
            {
              heading: "Como saber qual caso usar?",
              body: `AA: procure dois ângulos iguais.
LAL: procure dois lados proporcionais + o ângulo entre eles.
LLL: compare os três lados correspondentes.

Dica: não compare os lados simplesmente pela posição no desenho. Primeiro descubra quais lados e ângulos realmente correspondem.`,
            },
          ],
          quiz: [
            {
              q: "Dois triângulos são semelhantes quando:",
              options: ["Possuem a mesma forma, mesmo com tamanhos diferentes", "Possuem exatamente o mesmo tamanho", "Têm a mesma área", "Têm o mesmo perímetro"],
              correct: 0,
            },
            {
              q: "Em triângulos semelhantes, os ângulos correspondentes são:",
              options: ["Iguais", "Proporcionais, mas diferentes", "Sempre retos", "Sempre agudos"],
              correct: 0,
            },
            {
              q: "Em triângulos semelhantes, os lados correspondentes são:",
              options: ["Iguais", "Proporcionais", "Paralelos", "Perpendiculares"],
              correct: 1,
            },
            {
              q: "No caso AA de semelhança, o que precisa ser igual?",
              options: ["Dois ângulos correspondentes", "Três lados", "Dois lados e um ângulo", "Apenas um ângulo"],
              correct: 0,
            },
            {
              q: "No caso LAL, quais elementos precisam corresponder?",
              options: ["Dois lados proporcionais e o ângulo entre eles igual", "Três lados proporcionais", "Dois ângulos iguais", "Um lado e dois ângulos"],
              correct: 0,
            },
            {
              q: "No caso LLL, a condição para semelhança é:",
              options: ["Os três lados correspondentes são proporcionais", "Dois ângulos são iguais", "Apenas um lado é igual", "A altura é igual"],
              correct: 0,
            },
            {
              q: "Antes de montar uma proporção entre lados de triângulos semelhantes, é importante:",
              options: ["Colocar os lados na mesma ordem de correspondência", "Somar todos os lados", "Multiplicar os ângulos", "Ignorar a correspondência"],
              correct: 0,
            },
            {
              q: "Para verificar o caso AA, a estratégia correta é:",
              options: ["Procurar dois ângulos iguais", "Procurar dois lados proporcionais", "Comparar os três lados", "Medir a altura do triângulo"],
              correct: 0,
            },
            {
              q: "Para verificar o caso LAL, deve-se procurar:",
              options: ["Dois lados proporcionais mais o ângulo entre eles", "Três ângulos iguais", "Apenas um lado proporcional", "A soma dos ângulos"],
              correct: 0,
            },
            {
              q: "Segundo a dica do conteúdo, antes de comparar os lados pela posição no desenho, deve-se:",
              options: ["Descobrir quais lados e ângulos realmente correspondem", "Assumir que os lados na mesma posição sempre correspondem", "Ignorar os ângulos", "Medir apenas o maior lado"],
              correct: 0,
            },
          ],
        },
        {
          id: "triangulo-retangulo-1",
          title: "Triângulo Retângulo 1",
          sections: [
            {
              heading: "Módulo 10 · Triângulo retângulo dividido pela altura",
              body: `Um triângulo retângulo pode ser dividido pela altura relativa à hipotenusa, formando dois novos triângulos retângulos.

Na representação do caderno:
• a → hipotenusa
• b e c → catetos
• h → altura
• m e n → partes da hipotenusa

Relação dos ângulos
α + β + 90° = 180°`,
              visual: `
<svg viewBox="0 0 300 220" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="170" x2="270" y2="170" stroke="#5C4630" stroke-width="2.5"/>
  <line x1="30" y1="170" x2="110" y2="57" stroke="#5C4630" stroke-width="2.5"/>
  <line x1="270" y1="170" x2="110" y2="57" stroke="#5C4630" stroke-width="2.5"/>
  <line x1="110" y1="170" x2="110" y2="57" stroke="#A8763E" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="30" cy="170" r="3" fill="#3E2F20"/>
  <circle cx="270" cy="170" r="3" fill="#3E2F20"/>
  <circle cx="110" cy="57" r="3" fill="#3E2F20"/>
  <circle cx="110" cy="170" r="3" fill="#A8763E"/>
  <text x="18" y="188" font-size="12" fill="#3E2F20" font-weight="600">A</text>
  <text x="266" y="188" font-size="12" fill="#3E2F20" font-weight="600">B</text>
  <text x="103" y="46" font-size="12" fill="#3E2F20" font-weight="600">C</text>
  <text x="115" y="185" font-size="11" fill="#A8763E" font-weight="600">H</text>
  <text x="145" y="188" font-size="13" fill="#5C4630" font-weight="600">a</text>
  <text x="55" y="107" font-size="13" fill="#5C4630" font-weight="600">b</text>
  <text x="185" y="107" font-size="13" fill="#5C4630" font-weight="600">c</text>
  <text x="118" y="115" font-size="13" fill="#A8763E" font-weight="600">h</text>
  <text x="65" y="188" font-size="12" fill="#5C4630" font-weight="600">m</text>
  <text x="185" y="188" font-size="12" fill="#5C4630" font-weight="600">n</text>
  <path d="M110,150 L120,150 L120,160" fill="none" stroke="#A8763E" stroke-width="1.5"/>
  <text x="65" y="20" font-size="10.5" fill="#5C4630">a = hipotenusa · b, c = catetos · h = altura · m, n = partes de a</text>
</svg>`,
            },
            {
              heading: "Teorema de Pitágoras",
              body: `a² = b² + c²
Onde:
• a = hipotenusa
• b e c = catetos

Não esquecer:
a² = b² + c²
Também podemos isolar:
b² = a² − c²
c² = a² − b²`,
            },
            {
              heading: "Relações do triângulo retângulo",
              body: `Relação hipotenusa-divisão
a = m + n
A hipotenusa inteira é formada pelas duas partes: m + n

Relação cateto-hipotenusa
Para o cateto b: b² = a · m
Para o cateto c: c² = a · n

Relação da altura
h² = m · n

Relação envolvendo altura, catetos e hipotenusa
b · c = a · h`,
            },
            {
              heading: "Resumo das relações",
              body: `Teorema de Pitágoras: a² = b² + c²
Hipotenusa-divisão: a = m + n
Cateto-hipotenusa: b² = a · m  |  c² = a · n
Altura: h² = m · n
Altura-catetos: b · c = a · h`,
            },
            {
              heading: "🔎 Como analisar o desenho",
              body: `Quando aparecer um triângulo retângulo dividido pela altura, faça nesta ordem:

1. Identifique a hipotenusa → a
É sempre o lado oposto ao ângulo de 90°.

2. Identifique os catetos → b e c
São os dois lados que formam o ângulo de 90°.

3. Identifique a altura → h
É a linha que sai do ângulo de 90° e chega perpendicularmente à hipotenusa.

4. Identifique as partes da hipotenusa → m e n
A hipotenusa fica dividida em: a = m + n

5. Escolha a relação de acordo com o que a questão está pedindo.
Se aparecerem os três lados → Pitágoras: a² = b² + c²
Se aparecer cateto + hipotenusa + parte da hipotenusa → cateto-hipotenusa: b² = a · m ou c² = a · n
Se aparecer altura + duas partes da hipotenusa → altura: h² = m · n
Se aparecerem os dois catetos + hipotenusa + altura → altura-catetos: b · c = a · h`,
            },
            {
              heading: "🧠 Ouro para a prova",
              body: `Primeiro descubra quem é quem no desenho.
a = hipotenusa
b e c = catetos
h = altura
m e n = divisões da hipotenusa`,
            },
          ],
          quiz: [
            {
              q: "No triângulo retângulo dividido pela altura relativa à hipotenusa, o que a altura forma?",
              options: ["Dois novos triângulos retângulos", "Um triângulo equilátero", "Um quadrado", "Um triângulo obtuso"],
              correct: 0,
            },
            {
              q: "Qual é a relação entre os ângulos α, β e o ângulo reto no triângulo retângulo?",
              options: ["α + β + 90° = 180°", "α + β = 180°", "α − β = 90°", "α · β = 90°"],
              correct: 0,
            },
            {
              q: "O Teorema de Pitágoras é representado por:",
              options: ["a² = b² + c²", "a = b + c", "a² = b · c", "h² = m · n"],
              correct: 0,
            },
            {
              q: "Na relação hipotenusa-divisão, a hipotenusa é formada por:",
              options: ["a = m + n", "a = m · n", "a = m − n", "a = m/n"],
              correct: 0,
            },
            {
              q: "Qual é a relação cateto-hipotenusa para o cateto b?",
              options: ["b² = a · m", "b² = a · n", "b² = m · n", "b² = a² − c²"],
              correct: 0,
            },
            {
              q: "E para o cateto c, a relação cateto-hipotenusa é:",
              options: ["c² = a · n", "c² = a · m", "c² = m · n", "c² = a² − b²"],
              correct: 0,
            },
            {
              q: "A relação da altura no triângulo retângulo é dada por:",
              options: ["h² = m · n", "h² = a · m", "h² = b · c", "h² = a² − b²"],
              correct: 0,
            },
            {
              q: "A relação que envolve altura, catetos e hipotenusa é:",
              options: ["b · c = a · h", "b + c = a + h", "b² + c² = a · h", "b · c = m · n"],
              correct: 0,
            },
            {
              q: "Para identificar a hipotenusa em um triângulo retângulo, deve-se procurar:",
              options: ["O lado oposto ao ângulo de 90°", "O menor lado do triângulo", "O lado que forma o ângulo reto", "A altura do triângulo"],
              correct: 0,
            },
            {
              q: "A altura de um triângulo retângulo, ao ser traçada relativa à hipotenusa, chega até ela:",
              options: ["Perpendicularmente", "Paralelamente", "Formando um ângulo de 45°", "Formando um ângulo obtuso"],
              correct: 0,
            },
          ],
        },
        {
          id: "lei-dos-senos-e-cossenos",
          title: "Lei dos Senos e Cossenos",
          sections: [
            {
              heading: "Lei dos Senos",
              body: `A Lei dos Senos vale para qualquer triângulo (não só o retângulo).

Ela diz que cada lado é proporcional ao seno do ângulo oposto a ele:

a / sen Â = b / sen B̂ = c / sen Ĉ = 2R

Onde:
• a, b, c são os lados do triângulo
• Â, B̂, Ĉ são os ângulos opostos a cada lado
• R é o raio da circunferência circunscrita ao triângulo

Essa constante 2R é a mesma para os três lados.

Quando usar: quando o problema envolve dois ângulos e um lado, ou dois lados e um ângulo oposto a um deles.

Observação sobre ângulos complementares (soma = 90°):
sen 62° = cos 28° = 0,88`,
            },
            {
              heading: "Lei dos Cossenos",
              body: `A Lei dos Cossenos também vale para qualquer triângulo. É uma generalização do Teorema de Pitágoras:

a² = b² + c² − 2·b·c·cos Â
b² = a² + c² − 2·a·c·cos B̂
c² = a² + b² − 2·a·b·cos Ĉ

Observe que, quando Â = 90°, cos 90° = 0 e a fórmula vira a² = b² + c², que é Pitágoras.

Quando usar: quando o problema envolve três lados ou dois lados e o ângulo entre eles.

A ilustração compara as duas leis lado a lado.`,
              visual: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <rect x="0" y="0" width="640" height="320" rx="12" fill="#F4EEE1"/>
  <text x="160" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">LEI DOS SENOS</text>
  <text x="480" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">LEI DOS COSSENOS</text>
  <line x1="320" y1="40" x2="320" y2="300" stroke="#C9B18C" stroke-dasharray="4 4"/>

  <circle cx="160" cy="170" r="90" fill="none" stroke="#C9B18C" stroke-width="1.5" stroke-dasharray="3 3"/>
  <polygon points="100,220 220,220 180,100" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
  <text x="90" y="232" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">B</text>
  <text x="230" y="232" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">C</text>
  <text x="180" y="92" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">A</text>
  <text x="200" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">b</text>
  <text x="120" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">c</text>
  <text x="160" y="234" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">a</text>
  <text x="160" y="275" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">a/sen Â = b/sen B̂ = c/sen Ĉ = 2R</text>
  <text x="160" y="292" text-anchor="middle" font-size="10" fill="#5C4630">R = raio da circunferência circunscrita</text>

  <polygon points="400,230 580,230 440,100" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
  <text x="392" y="242" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">B</text>
  <text x="588" y="242" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">C</text>
  <text x="440" y="92" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">A</text>
  <text x="510" y="242" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">a</text>
  <text x="515" y="160" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">b</text>
  <text x="410" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">c</text>
  <path d="M440,110 L448,115 L442,122" fill="none" stroke="#A6493A" stroke-width="1.5"/>
  <text x="480" y="275" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">a² = b² + c² − 2·b·c·cos Â</text>
  <text x="480" y="292" text-anchor="middle" font-size="10" fill="#5C4630">maior ângulo ↔ maior lado oposto</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">À esquerda, a Lei dos Senos relaciona lados e ângulos opostos com o raio R da circunferência circunscrita. À direita, a Lei dos Cossenos generaliza Pitágoras para triângulos quaisquer.</p>`,
            },
            {
              heading: "Ângulos obtusos — redução ao 1º quadrante",
              body: `Quando o ângulo é obtuso (entre 90° e 180°), use estas reduções:

• sen 120° = sen 60°    cos 120° = −cos 60°
• sen 135° = sen 45°    cos 135° = −cos 45°
• sen 150° = sen 30°    cos 150° = −cos 30°

Regra: o seno de um ângulo obtuso é igual ao seno do seu suplementar (180° − ângulo). O cosseno é igual ao cosseno do suplementar, mas trocado de sinal (negativo).

Isso é importante na Lei dos Cossenos: quando o ângulo é obtuso, o termo −2·b·c·cos Â vira positivo (porque cos é negativo), aumentando o valor de a².`,
            },
            {
              heading: "Dica: o maior ângulo fica oposto ao maior lado",
              body: `Em qualquer triângulo, o maior ângulo está sempre oposto ao maior lado — e vice-versa.

Isso ajuda a:
• conferir se um resultado faz sentido;
• identificar qual lado calcular primeiro;
• decidir rapidamente qual ângulo é obtuso em um triângulo cujos lados você conhece.`,
            },
          ],
          quiz: [
            { q: "Em um triângulo, a razão entre um lado e o seno do ângulo oposto é igual a:", options: ["R","2R","R/2","π·R"], correct: 1 },
            { q: "Em um triângulo com a = 10, Â = 30° e B̂ = 45°, usando a Lei dos Senos (sen 30° = 0,5 e sen 45° ≈ 0,7), o lado b vale aproximadamente:", options: ["7","10","14","20"], correct: 2 },
            { q: "Num triângulo ABC, b = 6, c = 8 e Â = 60°. Usando a Lei dos Cossenos (cos 60° = 0,5), o lado a vale:", options: ["√28","√52","√84","√100"], correct: 1 },
            { q: "Num triângulo com lados 5, 7 e ângulo oposto ao terceiro lado igual a 120°, qual é o terceiro lado? (cos 120° = -0,5)", options: ["√39","√74","√109","√134"], correct: 2 },
            { q: "Qual é a fórmula correta da Lei dos Cossenos para o lado a?", options: ["a² = b² + c² + 2bc·cos Â","a² = b² + c² − 2bc·cos Â","a² = b² − c² − 2bc·cos Â","a² = (b + c)² · cos Â"], correct: 1 },
            { q: "Qual destas afirmações sobre o Teorema de Pitágoras é verdadeira?", options: ["É um caso particular da Lei dos Cossenos quando Â = 90°","É equivalente à Lei dos Senos","Vale para triângulos quaisquer","Não tem relação com a Lei dos Cossenos"], correct: 0 },
            { q: "Sabendo que sen 62° ≈ 0,88, quanto vale cos 28°?", options: ["0,47","0,88","0,50","1,00"], correct: 1 },
            { q: "Em um triângulo com Â = 150° e sen 150° = sen 30° = 0,5, qual é o valor de cos 150°?", options: ["-cos 30°","cos 30°","sen 30°","-sen 30°"], correct: 0 },
            { q: "Num triângulo ABC, o lado a mede 10, o ângulo Â vale 30° (sen 30° = 0,5). Qual é o raio R da circunferência circunscrita?", options: ["5","10","15","20"], correct: 1 },
            { q: "Num triângulo, dois lados medem 6 e 8 e formam entre si um ângulo de 60° (cos 60° = 0,5). O lado oposto a esse ângulo mede:", options: ["√28","√52","√76","√100"], correct: 1 },
            { q: "Num triângulo, se os ângulos são 45°, 60° e 75°, qual lado é o maior?", options: ["O oposto a 45°","O oposto a 60°","O oposto a 75°","Todos iguais"], correct: 2 },
            { q: "Num triângulo com lados 7, 8 e 9, para calcular o ângulo oposto ao lado 9 usa-se:", options: ["Lei dos Senos","Teorema de Pitágoras","Lei dos Cossenos","Relação fundamental sen²+cos²=1"], correct: 2 },
          ],
        },
      ],
    },
);
