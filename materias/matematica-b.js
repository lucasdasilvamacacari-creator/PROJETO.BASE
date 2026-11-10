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
            { q: "Dois triângulos são semelhantes quando:", options: ["Possuem a mesma forma, mesmo com tamanhos diferentes","Possuem exatamente o mesmo tamanho","Têm a mesma área","Têm o mesmo perímetro"], correct: 0 },
            { q: "Em triângulos semelhantes, os ângulos correspondentes são:", options: ["Iguais","Proporcionais, mas diferentes","Sempre retos","Sempre agudos"], correct: 0 },
            { q: "Em triângulos semelhantes, os lados correspondentes são:", options: ["Iguais","Proporcionais","Paralelos","Perpendiculares"], correct: 1 },
            { q: "No caso AA de semelhança, o que precisa ser igual?", options: ["Dois ângulos correspondentes","Três lados","Dois lados e um ângulo","Apenas um ângulo"], correct: 0 },
            { q: "No caso LAL, quais elementos precisam corresponder?", options: ["Dois lados proporcionais e o ângulo entre eles igual","Três lados proporcionais","Dois ângulos iguais","Um lado e dois ângulos"], correct: 0 },
            { q: "No caso LLL, a condição para semelhança é:", options: ["Os três lados correspondentes são proporcionais","Dois ângulos são iguais","Apenas um lado é igual","A altura é igual"], correct: 0 },
            { q: "Antes de montar uma proporção entre lados de triângulos semelhantes, é importante:", options: ["Colocar os lados na mesma ordem de correspondência","Somar todos os lados","Multiplicar os ângulos","Ignorar a correspondência"], correct: 0 },
            { q: "Para verificar o caso AA, a estratégia correta é:", options: ["Procurar dois ângulos iguais","Procurar dois lados proporcionais","Comparar os três lados","Medir a altura do triângulo"], correct: 0 },
            { q: "Para verificar o caso LAL, deve-se procurar:", options: ["Dois lados proporcionais mais o ângulo entre eles","Três ângulos iguais","Apenas um lado proporcional","A soma dos ângulos"], correct: 0 },
            { q: "Segundo a dica do conteúdo, antes de comparar os lados pela posição no desenho, deve-se:", options: ["Descobrir quais lados e ângulos realmente correspondem","Assumir que os lados na mesma posição sempre correspondem","Ignorar os ângulos","Medir apenas o maior lado"], correct: 0 },
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
            { q: "No triângulo retângulo dividido pela altura relativa à hipotenusa, o que a altura forma?", options: ["Dois novos triângulos retângulos","Um triângulo equilátero","Um quadrado","Um triângulo obtuso"], correct: 0 },
            { q: "Qual é a relação entre os ângulos α, β e o ângulo reto no triângulo retângulo?", options: ["α + β + 90° = 180°","α + β = 180°","α − β = 90°","α · β = 90°"], correct: 0 },
            { q: "O Teorema de Pitágoras é representado por:", options: ["a² = b² + c²","a = b + c","a² = b · c","h² = m · n"], correct: 0 },
            { q: "Na relação hipotenusa-divisão, a hipotenusa é formada por:", options: ["a = m + n","a = m · n","a = m − n","a = m/n"], correct: 0 },
            { q: "Qual é a relação cateto-hipotenusa para o cateto b?", options: ["b² = a · m","b² = a · n","b² = m · n","b² = a² − c²"], correct: 0 },
            { q: "E para o cateto c, a relação cateto-hipotenusa é:", options: ["c² = a · n","c² = a · m","c² = m · n","c² = a² − b²"], correct: 0 },
            { q: "A relação da altura no triângulo retângulo é dada por:", options: ["h² = m · n","h² = a · m","h² = b · c","h² = a² − b²"], correct: 0 },
            { q: "A relação que envolve altura, catetos e hipotenusa é:", options: ["b · c = a · h","b + c = a + h","b² + c² = a · h","b · c = m · n"], correct: 0 },
            { q: "Para identificar a hipotenusa em um triângulo retângulo, deve-se procurar:", options: ["O lado oposto ao ângulo de 90°","O menor lado do triângulo","O lado que forma o ângulo reto","A altura do triângulo"], correct: 0 },
            { q: "A altura de um triângulo retângulo, ao ser traçada relativa à hipotenusa, chega até ela:", options: ["Perpendicularmente","Paralelamente","Formando um ângulo de 45°","Formando um ângulo obtuso"], correct: 0 },
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
        {
          id: "poligonos-regulares-e-circunferencias",
          title: "Polígonos regulares e circunferências",
          sections: [
            {
              heading: "Raio e apótema",
              body: `Quando um polígono regular está inscrito em uma circunferência (todos os vértices sobre ela), temos dois segmentos importantes:

• R (raio) → do centro até um vértice
• m (apótema) → do centro até o ponto médio de um lado (perpendicular ao lado)

Para cada polígono, existe uma relação fixa entre o lado l, o raio R e o apótema m.`,
              visual: `<svg viewBox="0 0 660 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">

<rect width="660" height="290" rx="12" fill="#F4EEE1"/>
<circle cx="110" cy="140" r="80" fill="none" stroke="#C9B18C" stroke-width="1.5" stroke-dasharray="4 3"/>
<polygon points="179.3,180.0 40.7,180.0 110.0,60.0" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
<line x1="110" y1="140" x2="179.3" y2="180.0" stroke="#A8763E" stroke-width="2.5"/>
<line x1="110" y1="140" x2="110.0" y2="180.0" stroke="#5B7553" stroke-width="2.5"/>
<circle cx="110" cy="140" r="3" fill="#3E2F20"/>
<text x="152.6" y="156.0" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">R</text>
<text x="102.0" y="164.0" text-anchor="end" font-size="12" font-weight="700" fill="#5B7553">m</text>
<text x="110" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">Triângulo equilátero</text>
<text x="110" y="250" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">l = R√3</text>
<text x="110" y="270" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">m = R/2</text>
<circle cx="330" cy="140" r="80" fill="none" stroke="#C9B18C" stroke-width="1.5" stroke-dasharray="4 3"/>
<polygon points="386.6,196.6 273.4,196.6 273.4,83.4 386.6,83.4" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
<line x1="330" y1="140" x2="386.6" y2="196.6" stroke="#A8763E" stroke-width="2.5"/>
<line x1="330" y1="140" x2="330.0" y2="196.6" stroke="#5B7553" stroke-width="2.5"/>
<circle cx="330" cy="140" r="3" fill="#3E2F20"/>
<text x="366.3" y="164.3" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">R</text>
<text x="322.0" y="172.3" text-anchor="end" font-size="12" font-weight="700" fill="#5B7553">m</text>
<text x="330" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">Quadrado</text>
<text x="330" y="250" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">l = R√2</text>
<text x="330" y="270" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">m = R√2/2</text>
<circle cx="550" cy="140" r="80" fill="none" stroke="#C9B18C" stroke-width="1.5" stroke-dasharray="4 3"/>
<polygon points="630.0,140.0 590.0,209.3 510.0,209.3 470.0,140.0 510.0,70.7 590.0,70.7" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
<line x1="550" y1="140" x2="630.0" y2="140.0" stroke="#A8763E" stroke-width="2.5"/>
<line x1="550" y1="140" x2="610.0" y2="174.6" stroke="#5B7553" stroke-width="2.5"/>
<circle cx="550" cy="140" r="3" fill="#3E2F20"/>
<text x="598.0" y="136.0" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">R</text>
<text x="572.0" y="161.3" text-anchor="end" font-size="12" font-weight="700" fill="#5B7553">m</text>
<text x="550" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">Hexágono regular</text>
<text x="550" y="250" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">l = R</text>
<text x="550" y="270" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">m = R√3/2</text>

</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">R (raio, laranja) vai do centro ao vértice; m (apótema, verde) vai do centro ao meio do lado.</p>`,
            },
            {
              heading: "Triângulo equilátero inscrito",
              body: `Ligando o centro a um vértice (R) e ao meio de um lado (m), forma-se um triângulo retângulo com ângulo de 30° no vértice.

Apótema:
sen 30° = m / R → 1/2 = m / R → m = R/2

Lado:
cos 30° = (l/2) / R → √3/2 = (l/2) / R → l = R√3

Resumo: m = R/2 e l = R√3`,
            },
            {
              heading: "Quadrado inscrito",
              body: `A diagonal do quadrado é o diâmetro da circunferência.

Pelo Teorema de Pitágoras:
AC² = AB² + BC² = l² + l² = 2l² → AC = l√2

Como AC = diâmetro = 2R:
l√2 = 2R → l = R√2

O apótema é metade do lado: m = l/2 = R√2/2`,
            },
            {
              heading: "Hexágono regular inscrito",
              body: `O hexágono regular é formado por 6 triângulos equiláteros com vértice no centro. Por isso:

R = l

O apótema é a altura de um desses triângulos equiláteros:
m = R√3/2 = l√3/2`,
            },
            {
              heading: "Comprimento da circunferência",
              body: `C = 2πR

Exemplos:
• R = 5 cm → C = 10π cm
• Se C = 12π, então R = 6

Aplicação comum: uma roda dá uma volta completa percorrendo exatamente o comprimento da sua circunferência.`,
            },
          ],
          quiz: [
            { q: "Um triângulo equilátero está inscrito em uma circunferência de raio 6 cm. O apótema do triângulo mede:", options: ["2 cm","3 cm","3√3 cm","6 cm"], correct: 1 },
            { q: "Um triângulo equilátero está inscrito em uma circunferência de raio 4 cm. O lado do triângulo mede:", options: ["4 cm","4√2 cm","4√3 cm","8 cm"], correct: 2 },
            { q: "Um quadrado está inscrito em uma circunferência de raio 5 cm. O lado do quadrado mede:", options: ["5 cm","5√2 cm","5√3 cm","10 cm"], correct: 1 },
            { q: "No quadrado inscrito em uma circunferência, a diagonal do quadrado é igual:", options: ["Ao raio","Ao diâmetro","Ao apótema","Ao lado"], correct: 1 },
            { q: "Um quadrado de lado 8 cm está inscrito em uma circunferência. O raio dessa circunferência é:", options: ["4 cm","4√2 cm","8 cm","8√2 cm"], correct: 1 },
            { q: "Um quadrado está inscrito em uma circunferência de raio 6 cm. Seu apótema mede:", options: ["3 cm","3√2 cm","6 cm","6√2 cm"], correct: 1 },
            { q: "Um hexágono regular está inscrito em uma circunferência de raio 10 cm. O lado do hexágono mede:", options: ["5 cm","10 cm","10√3 cm","20 cm"], correct: 1 },
            { q: "O apótema de um hexágono regular de lado 6 cm mede:", options: ["3 cm","3√3 cm","6√3 cm","6 cm"], correct: 1 },
            { q: "Ao ligar o centro de um hexágono regular a dois vértices consecutivos, obtém-se um triângulo:", options: ["Retângulo","Isósceles obtusângulo","Equilátero","Escaleno"], correct: 2 },
            { q: "Qual é o comprimento de uma circunferência de raio 5 cm?", options: ["5π cm","10π cm","25π cm","2,5π cm"], correct: 1 },
            { q: "Uma circunferência tem comprimento 12π cm. Seu raio mede:", options: ["3 cm","6 cm","12 cm","24 cm"], correct: 1 },
            { q: "Uma roda tem raio de 30 cm. Quantas voltas completas ela dá para percorrer 60π metros?", options: ["10","50","100","200"], correct: 2 },
          ],
        },
        {
          id: "areas-de-poligonos",
          title: "Áreas de polígonos (quadriláteros)",
          sections: [
            {
              heading: "Áreas de quadriláteros",
              body: `Quadrado
A = l²
onde l é o lado.

Retângulo
A = b · h
onde b é a base e h é a altura.

Paralelogramo
A = b · h
onde b é a base e h é a altura.

Atenção: no paralelogramo, a altura é a distância perpendicular entre as bases, e não o lado inclinado.`,
              visual: `<svg viewBox="0 0 660 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">

<rect width="660" height="250" rx="12" fill="#F4EEE1"/>
<defs><marker id="ar1" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#A6493A"/></marker></defs>
<text x="100" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">QUADRADO</text>
<rect x="40" y="60" width="120" height="120" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
<text x="100" y="198" text-anchor="middle" font-size="14" font-weight="700" fill="#A8763E">l</text><text x="176" y="125" text-anchor="middle" font-size="14" font-weight="700" fill="#A8763E">l</text>
<text x="100" y="230" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">A = l²</text>
<text x="310" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">RETÂNGULO</text>
<rect x="220" y="80" width="180" height="100" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
<text x="310" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="#A8763E">b (base)</text><text x="410" y="134" text-anchor="start" font-size="14" font-weight="700" fill="#A8763E">h</text>
<text x="310" y="230" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">A = b · h</text>
<text x="540" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">PARALELOGRAMO</text>
<polygon points="450,180 600,180 640,80 490,80" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
<polygon points="450,180 490,180 490,80" fill="#C9B18C" stroke="#A6493A" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="490" y1="80" x2="490" y2="180" stroke="#A6493A" stroke-width="1.5" stroke-dasharray="4 3"/>
<path d="M472,150 Q540,120 612,140" fill="none" stroke="#A6493A" stroke-width="1.5" marker-end="url(#ar1)"/>
<text x="472" y="150" text-anchor="middle" font-size="14" font-weight="700" fill="#A6493A">h</text>
<text x="525" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="#A8763E">b (base)</text>
<text x="545" y="230" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">A = b · h</text>

</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">No paralelogramo, recortar o triângulo da esquerda e encaixá-lo na direita forma um retângulo de mesma base e altura.</p>`,
            },
            {
              heading: "Exemplos resolvidos",
              body: `1) Quadrado de lado 7 cm:
A = 7² = 49 cm²

2) Retângulo de base 12 m e altura 5 m:
A = 12 · 5 = 60 m²

3) Paralelogramo com lados 10 cm e 8 cm formando um ângulo de 30°:
• A altura é h = 8 · sen 30° = 8 · 0,5 = 4 cm
• A = b · h = 10 · 4 = 40 cm²

4) Quadrado cuja diagonal mede 6√2 cm:
• Diagonal do quadrado = l√2 → l = 6 cm
• A = 6² = 36 cm²`,
            },
            {
              heading: "Losango e trapézio",
              body: `Losango
A = (D · d) / 2
onde D é a diagonal maior e d é a diagonal menor.
As diagonais do losango são perpendiculares e se cortam no meio.

Trapézio
A = (B + b) · h / 2
onde B é a base maior, b é a base menor e h é a altura (distância entre as bases).

Exemplos:
• Losango com diagonais 10 cm e 6 cm → A = 60 / 2 = 30 cm²
• Trapézio com bases 12 m e 8 m e altura 5 m → A = (12 + 8) · 5 / 2 = 50 m²`,
              visual: `<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="mq1_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="mq1_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="mq1_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="mq1_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="mq1_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker></defs>
<text x="150" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#A8763E">Losango</text><polygon points="50,130 150,60 250,130 150,200" fill="#E4D9C4" stroke="#3E2F20" stroke-width="2"/><line x1="50" y1="130" x2="250" y2="130" stroke="#A6493A" stroke-width="2" stroke-dasharray="6 4"/><line x1="150" y1="60" x2="150" y2="200" stroke="#5B7553" stroke-width="2" stroke-dasharray="6 4"/><text x="205" y="124" text-anchor="middle" font-size="15" font-weight="700" fill="#A6493A">D</text><text x="162" y="175" text-anchor="middle" font-size="15" font-weight="700" fill="#5B7553">d</text><text x="150" y="236" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">A = (D · d) / 2</text><text x="470" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#A8763E">Trapézio</text><polygon points="350,190 610,190 540,80 420,80" fill="#E4D9C4" stroke="#3E2F20" stroke-width="2"/><line x1="420" y1="80" x2="420" y2="190" stroke="#5B7553" stroke-width="2" stroke-dasharray="6 4"/><path d="M 430 190 L 430 180 L 420 180" fill="none" stroke="#3E2F20" stroke-width="1.2"/><text x="480" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#A6493A">b (base menor)</text><text x="480" y="210" text-anchor="middle" font-size="13" font-weight="700" fill="#A6493A">B (base maior)</text><text x="408" y="140" text-anchor="end" font-size="15" font-weight="700" fill="#5B7553">h</text><text x="480" y="236" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">A = (B + b) · h / 2</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">No losango usam-se as duas diagonais; no trapézio, a média das bases vezes a altura.</p>`,
            },
            {
              heading: "Quadrado a partir da diagonal",
              body: `Exemplo da aula: um quadrado tem diagonal 6. Qual é a sua área?

A diagonal divide o quadrado em dois triângulos retângulos. Pelo Teorema de Pitágoras:
6² = l² + l²
36 = 2 · l²

Como a área é A = l²:
36 = 2 · A
A = 18

Atalho: A = d² / 2`,
              visual: `<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="mq2_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="mq2_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="mq2_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="mq2_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="mq2_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker></defs>
<polygon points="60,40 200,40 200,180 60,180" fill="#E4D9C4" stroke="#3E2F20" stroke-width="2"/><line x1="60" y1="180" x2="200" y2="40" stroke="#A6493A" stroke-width="2.4"/><text x="108" y="98" text-anchor="middle" font-size="14" font-weight="700" fill="#A6493A">d = 6</text><text x="130" y="196" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">l</text><text x="212" y="114" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">l</text><text x="260" y="60" text-anchor="start" font-size="13" font-weight="600" fill="#3E2F20">Pitágoras na metade do quadrado:</text><text x="260" y="88" text-anchor="start" font-size="14" font-weight="400" fill="#3E2F20">d² = l² + l²  →  6² = 2l²</text><text x="260" y="116" text-anchor="start" font-size="14" font-weight="400" fill="#3E2F20">36 = 2l²  e, como A = l²:  36 = 2A</text><text x="260" y="148" text-anchor="start" font-size="18" font-weight="700" fill="#A8763E">A = 18</text><text x="260" y="176" text-anchor="start" font-size="13" font-weight="600" fill="#5B7553">Atalho: A = d² / 2</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Quando só a diagonal é dada, não precisa achar o lado: A = d²/2.</p>`,
            },
          ],
          quiz: [
            { q: "Qual é a área de um quadrado de lado 7 cm?", options: ["14 cm²","28 cm²","49 cm²","56 cm²"], correct: 2 },
            { q: "Um quadrado tem área de 81 m². Quanto mede seu lado?", options: ["9 m","8 m","27 m","40,5 m"], correct: 0 },
            { q: "Qual é a área de um retângulo de base 8 cm e altura 5 cm?", options: ["13 cm²","26 cm²","40 cm²","80 cm²"], correct: 2 },
            { q: "Um retângulo tem área de 60 m² e base de 12 m. Sua altura mede:", options: ["4 m","5 m","6 m","48 m"], correct: 1 },
            { q: "Qual é a área de um paralelogramo de base 10 cm e altura 6 cm?", options: ["16 cm²","30 cm²","60 cm²","120 cm²"], correct: 2 },
            { q: "Um paralelogramo tem lados de 10 cm e 8 cm, formando um ângulo de 30°. Sua área é: (sen 30° = 0,5)", options: ["40 cm²","80 cm²","20 cm²","18 cm²"], correct: 0 },
            { q: "Por que a área do paralelogramo também é b · h?", options: ["Porque ele pode ser recortado e reorganizado em um retângulo de mesma base e altura","Porque todos os seus ângulos são retos","Porque seus lados são iguais","Porque é a metade de um quadrado"], correct: 0 },
            { q: "A diagonal de um quadrado mede 6√2 cm. Qual é sua área?", options: ["36 cm²","72 cm²","12 cm²","18 cm²"], correct: 0 },
            { q: "Um terreno retangular mede 20 m por 15 m. Se o piso custa R$ 30,00 por m², o custo para cobrir o terreno é:", options: ["R$ 1.050,00","R$ 9.000,00","R$ 6.000,00","R$ 10.500,00"], correct: 1 },
            { q: "Se o lado de um quadrado dobra, sua área:", options: ["Dobra","Triplica","Quadruplica","Não muda"], correct: 2 },
            { q: "Um retângulo tem perímetro de 30 cm e base de 10 cm. Sua área é:", options: ["50 cm²","100 cm²","150 cm²","300 cm²"], correct: 0 },
            { q: "Qual é a área de um losango cujas diagonais medem 10 cm e 6 cm?", options: ["30 cm²", "60 cm²", "16 cm²", "15 cm²"], correct: 0 },
            { q: "Uma pipa tem a forma de um losango com diagonais de 80 cm e 50 cm. Quanto papel, no mínimo, cobre a pipa?", options: ["2 000 cm²", "4 000 cm²", "1 300 cm²", "130 cm²"], correct: 0 },
            { q: "Um losango tem lado 5 cm e diagonal maior de 8 cm. Sua área é:", options: ["24 cm²", "40 cm²", "20 cm²", "48 cm²"], correct: 0 },
            { q: "Qual é a área de um trapézio com bases 12 cm e 8 cm e altura 5 cm?", options: ["50 cm²", "100 cm²", "60 cm²", "40 cm²"], correct: 0 },
            { q: "Um terreno tem a forma de um trapézio com bases de 30 m e 20 m e altura de 10 m. Sua área é:", options: ["250 m²", "500 m²", "600 m²", "300 m²"], correct: 0 },
            { q: "Um trapézio isósceles tem bases 10 cm e 4 cm e lados não paralelos de 5 cm. Sua área é:", options: ["28 cm²", "35 cm²", "56 cm²", "20 cm²"], correct: 0 },
            { q: "Um quadrado tem diagonal de 6 cm. Sua área é:", options: ["18 cm²", "36 cm²", "12 cm²", "9 cm²"], correct: 0 },
          ],
        },
        {
          id: "arco-circulo-e-setor",
          title: "Comprimento de arco, área do círculo e setor circular",
          sections: [
            {
              heading: "Comprimento da circunferência e do arco",
              body: `Uma volta completa na circunferência:
comprimento 2πR ↔ ângulo 360° (ou 2π rad)

Arco de circunferência: é um "pedaço" do contorno, correspondente a um ângulo central θ.
Monte a regra de três:

comprimento | ângulo
2πR | 360°
l | θ

l = 2πR · θ / 360°

Se o ângulo estiver em radianos, fica mais simples:
l = θ · R

Exemplo: arco de 60° em uma circunferência de raio 9 cm
l = 2π · 9 · 60 / 360 = 18π / 6 = 3π cm`,
              visual: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="ma1_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="ma1_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="ma1_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="ma1_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="ma1_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker></defs>
<circle cx="160" cy="140" r="100" fill="#F4EEE1" stroke="#5C4630" stroke-width="1.5"/><path d="M 160 140 L 260 140 A 100 100 0 0 0 194.2 46 Z" fill="#E4D9C4" stroke="#3E2F20" stroke-width="1.8"/><path d="M 260 140 A 100 100 0 0 0 194.2 46" fill="none" stroke="#A6493A" stroke-width="5"/><text x="190" y="128" text-anchor="middle" font-size="16" font-weight="700" fill="#A8763E">θ</text><text x="210" y="158" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">R</text><text x="264" y="70" text-anchor="middle" font-size="18" font-weight="700" fill="#A6493A">l</text><circle cx="160" cy="140" r="3" fill="#3E2F20" stroke="#3E2F20" stroke-width="1.5"/><rect x="330" y="40" width="280" height="110" rx="10" fill="#F4EEE1" stroke="#C9B18C" stroke-width="1.5"/><text x="400" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">comprimento</text><text x="540" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">ângulo</text><line x1="470" y1="50" x2="470" y2="140" stroke="#C9B18C" stroke-width="1.5"/><line x1="340" y1="76" x2="600" y2="76" stroke="#C9B18C" stroke-width="1.5"/><text x="400" y="100" text-anchor="middle" font-size="16" font-weight="700" fill="#3E2F20">2πR</text><text x="540" y="100" text-anchor="middle" font-size="16" font-weight="700" fill="#3E2F20">360°</text><text x="400" y="130" text-anchor="middle" font-size="16" font-weight="700" fill="#A6493A">l</text><text x="540" y="130" text-anchor="middle" font-size="16" font-weight="700" fill="#A8763E">θ</text><text x="470" y="186" text-anchor="middle" font-size="17" font-weight="700" fill="#3E2F20">l = 2πR · θ / 360°</text><text x="470" y="216" text-anchor="middle" font-size="13" font-weight="600" fill="#5B7553">em radianos: l = θ · R</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">O arco é uma "fatia" do contorno: regra de três entre a volta inteira (2πR ↔ 360°) e o arco (l ↔ θ).</p>`,
            },
            {
              heading: "Área do círculo",
              body: `A área do círculo depende apenas do raio:

A = π · R²

Exemplos:
• R = 5 cm → A = 25π cm²
• Diâmetro 10 m → R = 5 m → A = 25π m²

⚠️ Cuidado: se o enunciado der o DIÂMETRO, divida por 2 antes.

Obs.: o π só é trocado por um número (3 ou 3,14) se o enunciado fornecer o valor ou pedir um resultado aproximado. Caso contrário, deixe a resposta com π.

🧠 Se o raio dobra, a área quadruplica (2² = 4). Se o raio triplica, a área fica 9 vezes maior.`,
            },
            {
              heading: "Setor circular (fatia de pizza)",
              body: `Setor circular é a região do círculo limitada por dois raios e um arco: uma fatia de pizza.

• Setor de 60° → 1/6 do círculo → A = πR² / 6
• Setor de 90° → 1/4 do círculo → A = πR² / 4
• Setor de 120° → 1/3 do círculo → A = πR² / 3

Generalizando:
A_setor = (θ / 360°) · πR²

Exemplo: setor de 144° com R = 12
A = (144 / 360) · π · 12²
A = (2/5) · 144π
A = 288π / 5`,
              visual: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="ms1_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="ms1_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="ms1_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="ms1_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="ms1_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker></defs>
<circle cx="110" cy="100" r="70" fill="#F4EEE1" stroke="#5C4630" stroke-width="1.5"/><path d="M 110 100 L 180 100 A 70 70 0 0 0 145 39.4 Z" fill="#A8763E" stroke="#3E2F20" stroke-width="1.8"/><text x="110" y="196" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">60° = 1/6 da pizza</text><text x="110" y="218" text-anchor="middle" font-size="13" font-weight="400" fill="#5C4630">A = πR²/6</text><circle cx="320" cy="100" r="70" fill="#F4EEE1" stroke="#5C4630" stroke-width="1.5"/><path d="M 320 100 L 390 100 A 70 70 0 0 0 320 30 Z" fill="#A8763E" stroke="#3E2F20" stroke-width="1.8"/><text x="320" y="196" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">90° = 1/4 da pizza</text><text x="320" y="218" text-anchor="middle" font-size="13" font-weight="400" fill="#5C4630">A = πR²/4</text><circle cx="530" cy="100" r="70" fill="#F4EEE1" stroke="#5C4630" stroke-width="1.5"/><path d="M 530 100 L 600 100 A 70 70 0 0 0 495 39.4 Z" fill="#A8763E" stroke="#3E2F20" stroke-width="1.8"/><text x="530" y="196" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">120° = 1/3 da pizza</text><text x="530" y="218" text-anchor="middle" font-size="13" font-weight="400" fill="#5C4630">A = πR²/3</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Setor circular é uma fatia de pizza: A_setor = (θ / 360°) · πR².</p>`,
            },
            {
              heading: "Áreas de regiões sombreadas",
              body: `Questão clássica de prova: calcular a área de uma região sombreada.

Estratégia: área da figura maior − áreas das partes que NÃO estão sombreadas.

Exemplo: triângulo equilátero de lado 8 cm com um setor de 60° em cada vértice. Cada setor tem raio 4 (metade do lado), e a região central é sombreada.

A_sombreada = A_triângulo equilátero − 3 · A_setor(60°)
A = 8²√3 / 4 − 3 · π · 4² / 6
A = 16√3 − 8π
A = 8(2√3 − π) cm²

Outro modelo comum: quadrado de lado 4 com um quarto de círculo de raio 4 desenhado a partir de um vértice.
A_sombreada = 4² − π · 4² / 4 = 16 − 4π

🧠 Os 3 setores de 60° juntos formam meio círculo (3 · 60° = 180°).`,
              visual: `<svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="mr1_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="mr1_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="mr1_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="mr1_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="mr1_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker></defs>
<polygon points="160,260 400,260 280,52.2" fill="#A6493A" stroke="#3E2F20" stroke-width="2"/><path d="M 160 260 L 280 260 A 120 120 0 0 0 220 156.1 Z" fill="#F4EEE1" stroke="#3E2F20" stroke-width="1.8"/><path d="M 400 260 L 340 156.1 A 120 120 0 0 0 280 260 Z" fill="#F4EEE1" stroke="#3E2F20" stroke-width="1.8"/><path d="M 280 52.2 L 220 156.1 A 120 120 0 0 0 340 156.1 Z" fill="#F4EEE1" stroke="#3E2F20" stroke-width="1.8"/><polygon points="160,260 400,260 280,52.2" fill="none" stroke="#3E2F20" stroke-width="2"/><text x="280" y="282" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">8</text><text x="205" y="150" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">8</text><text x="355" y="150" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">8</text><text x="215" y="252" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">60°</text><text x="345" y="252" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">60°</text><text x="280" y="86" text-anchor="middle" font-size="11" font-weight="400" fill="#5C4630">60°</text><text x="530" y="40" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">Área sombreada =</text><text x="530" y="64" text-anchor="middle" font-size="12" font-weight="400" fill="#5C4630">triângulo − 3 setores de 60°</text><text x="530" y="104" text-anchor="middle" font-size="14" font-weight="400" fill="#3E2F20">8²√3/4 − 3 · π·4²/6</text><text x="530" y="136" text-anchor="middle" font-size="14" font-weight="400" fill="#3E2F20">= 16√3 − 8π</text><text x="530" y="176" text-anchor="middle" font-size="16" font-weight="700" fill="#A8763E">= 8(2√3 − π) cm²</text><text x="530" y="212" text-anchor="middle" font-size="12" font-weight="400" fill="#5B7553">raio de cada setor = 4</text><text x="530" y="230" text-anchor="middle" font-size="12" font-weight="400" fill="#5B7553">(metade do lado)</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Estratégia: área da figura grande menos as partes que não estão sombreadas.</p>`,
            },
          ],
          quiz: [
            { q: "Em uma circunferência de raio 9 cm, qual é o comprimento de um arco de 60°?", options: ["3π cm", "6π cm", "9π cm", "18π cm"], correct: 0 },
            { q: "O ponteiro dos minutos de um relógio mede 12 cm. Quanto a sua ponta percorre em 20 minutos?", options: ["8π cm", "4π cm", "12π cm", "24π cm"], correct: 0 },
            { q: "Um atleta dá 3 voltas em uma pista circular de raio 50 m. Qual é a distância percorrida? (use π = 3,14)", options: ["942 m", "471 m", "314 m", "1 884 m"], correct: 0 },
            { q: "A roda de uma bicicleta tem 60 cm de diâmetro. Após 1 000 voltas completas, a distância percorrida é: (use π = 3,14)", options: ["1,884 km", "0,942 km", "3,768 km", "18,84 km"], correct: 0 },
            { q: "Em uma circunferência de raio 5, um arco correspondente a um ângulo de 2 rad mede:", options: ["10", "5", "2,5", "20"], correct: 0 },
            { q: "Qual é a área de um círculo de raio 5 cm?", options: ["25π cm²", "10π cm²", "5π cm²", "50π cm²"], correct: 0 },
            { q: "Uma pizza grande tem 40 cm de diâmetro e uma média, 30 cm. A área da grande é quantas vezes a área da média?", options: ["16/9", "4/3", "2", "3/2"], correct: 0 },
            { q: "Se o raio de um círculo dobra, sua área:", options: ["Fica 4 vezes maior", "Dobra", "Fica 8 vezes maior", "Não muda"], correct: 0 },
            { q: "Um pivô central de irrigação gira um braço de 500 m em torno de um ponto fixo. A área irrigada é aproximadamente: (use π = 3,14)", options: ["785 000 m²", "1 570 000 m²", "314 000 m²", "250 000 m²"], correct: 0 },
            { q: "Qual é a área de um setor circular de 90° em um círculo de raio 8 cm?", options: ["16π cm²", "64π cm²", "32π cm²", "8π cm²"], correct: 0 },
            { q: "Qual é a área de um setor de 120° em um círculo de raio 6 cm?", options: ["12π cm²", "36π cm²", "18π cm²", "6π cm²"], correct: 0 },
            { q: "Qual é a área de um setor de 144° em um círculo de raio 12?", options: ["288π/5", "144π/5", "72π", "48π"], correct: 0 },
            { q: "Um setor circular de um círculo de raio 6 tem área 6π. Qual é o ângulo central desse setor?", options: ["60°", "30°", "90°", "120°"], correct: 0 },
            { q: "Um triângulo equilátero de lado 8 cm tem um setor de 60° e raio 4 cm em cada vértice. A área da região do triângulo fora dos setores é:", options: ["8(2√3 − π) cm²", "16√3 cm²", "16√3 − 4π cm²", "8π cm²"], correct: 0 },
            { q: "Um quadrado de lado 4 tem um quarto de círculo de raio 4 desenhado a partir de um vértice. A área do quadrado fora desse quarto de círculo é:", options: ["16 − 4π", "16 − 16π", "4π", "16 − 2π"], correct: 0 },
            { q: "Um círculo está inscrito em um quadrado de lado 10 cm. A área do quadrado que fica fora do círculo é:", options: ["100 − 25π cm²", "100 − 100π cm²", "25π cm²", "100 − 50π cm²"], correct: 0 },
            { q: "Uma coroa circular é limitada por circunferências de raios 5 cm e 3 cm. Sua área é:", options: ["16π cm²", "4π cm²", "34π cm²", "2π cm²"], correct: 0 },
          ],
        },
        {
          id: "areas-de-triangulos",
          title: "Áreas de triângulos",
          sections: [
            {
              heading: "Qual fórmula usar?",
              body: `A fórmula escolhida depende do que o enunciado fornece!

• Base e altura → A = b · h / 2
• Dois lados e o ângulo entre eles → A = ½ · a · b · sen θ
• Triângulo equilátero (só o lado) → A = l²√3 / 4
• Triângulo retângulo (os catetos) → A = b · c / 2
• Só os três lados → descubra a altura com Pitágoras (ou use a fórmula de Heron)`,
            },
            {
              heading: "Base e altura relativa",
              body: `A = b · h / 2

A altura relativa a uma base é o segmento que sai do vértice oposto e cai perpendicularmente sobre essa base.

⚠️ Qualquer lado pode ser a base: basta usar a altura relativa a ele.
⚠️ No triângulo obtuso, a altura pode cair FORA do triângulo, no prolongamento da base. A fórmula continua a mesma.

Exemplo: base 10 cm e altura 6 cm → A = 10 · 6 / 2 = 30 cm²`,
              visual: `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="mt1_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="mt1_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="mt1_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="mt1_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="mt1_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker></defs>
<text x="150" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">Altura dentro</text><polygon points="40,190 260,190 170,60" fill="#E4D9C4" stroke="#3E2F20" stroke-width="2"/><line x1="170" y1="60" x2="170" y2="190" stroke="#5B7553" stroke-width="2" stroke-dasharray="6 4"/><path d="M 180 190 L 180 180 L 170 180" fill="none" stroke="#3E2F20" stroke-width="1.2"/><text x="150" y="212" text-anchor="middle" font-size="15" font-weight="700" fill="#A6493A">b</text><text x="180" y="130" text-anchor="start" font-size="15" font-weight="700" fill="#5B7553">h</text><text x="470" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">Triângulo obtuso: altura fora</text><polygon points="340,190 480,190 580,60" fill="#E4D9C4" stroke="#3E2F20" stroke-width="2"/><line x1="480" y1="190" x2="580" y2="190" stroke="#3E2F20" stroke-width="1.5" stroke-dasharray="3 4"/><line x1="580" y1="60" x2="580" y2="190" stroke="#5B7553" stroke-width="2" stroke-dasharray="6 4"/><path d="M 570 190 L 570 180 L 580 180" fill="none" stroke="#3E2F20" stroke-width="1.2"/><text x="410" y="212" text-anchor="middle" font-size="15" font-weight="700" fill="#A6493A">b</text><text x="592" y="130" text-anchor="start" font-size="15" font-weight="700" fill="#5B7553">h</text><text x="530" y="212" text-anchor="middle" font-size="10" font-weight="400" fill="#5C4630">prolongamento da base</text><text x="320" y="234" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">A = b · h / 2</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">A altura relativa é sempre perpendicular à base (ou ao seu prolongamento), saindo do vértice oposto.</p>`,
            },
            {
              heading: "Dois lados e o ângulo entre eles",
              body: `A = ½ · a · b · sen θ

θ é o ângulo formado pelos lados a e b.

Por quê? A altura relativa ao lado a é h = b · sen θ. Substituindo em A = a · h / 2, chegamos à fórmula.

Exemplo: lados 8 cm e 10 cm formando 30°
A = ½ · 8 · 10 · sen 30° = ½ · 80 · ½ = 20 cm²

🧠 sen 30° = 1/2, sen 45° = √2/2, sen 60° = √3/2, sen 90° = 1 e sen 150° = sen 30° = 1/2.`,
              visual: `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="mt2_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="mt2_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="mt2_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="mt2_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="mt2_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker></defs>
<polygon points="70,200 320,200 230.9,65" fill="#E4D9C4" stroke="#3E2F20" stroke-width="2"/><line x1="230.9" y1="65" x2="230.9" y2="200" stroke="#5B7553" stroke-width="2" stroke-dasharray="6 4"/><path d="M 220.9 200 L 220.9 190 L 230.9 190" fill="none" stroke="#3E2F20" stroke-width="1.2"/><path d="M 110 200 A 40 40 0 0 0 100.6 174.3" fill="none" stroke="#A8763E" stroke-width="2"/><text x="122" y="190" text-anchor="middle" font-size="15" font-weight="700" fill="#A8763E">θ</text><text x="195" y="222" text-anchor="middle" font-size="15" font-weight="700" fill="#A6493A">a</text><text x="118" y="130" text-anchor="middle" font-size="15" font-weight="700" fill="#A6493A">b</text><text x="240.9" y="160" text-anchor="start" font-size="15" font-weight="700" fill="#5B7553">h</text><text x="370" y="70" text-anchor="start" font-size="14" font-weight="400" fill="#3E2F20">sen θ = h / b  →  h = b · sen θ</text><text x="370" y="110" text-anchor="start" font-size="14" font-weight="400" fill="#3E2F20">A = a · h / 2</text><text x="370" y="150" text-anchor="start" font-size="17" font-weight="700" fill="#A8763E">A = ½ · a · b · sen θ</text><text x="370" y="186" text-anchor="start" font-size="12" font-weight="400" fill="#5C4630">θ = ângulo ENTRE os lados a e b</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Quando o enunciado dá dois lados e o ângulo entre eles, a altura sai do seno.</p>`,
            },
            {
              heading: "Triângulo equilátero e triângulo retângulo",
              body: `Triângulo equilátero (lado l)
A = l²√3 / 4
Vem de A = b · h / 2 com altura h = l√3 / 2.
Ex.: l = 6 → A = 36√3 / 4 = 9√3

Triângulo retângulo (catetos b e c, hipotenusa a)
A = b · c / 2
Um cateto é a base e o outro é a altura.
Ex.: catetos 6 e 8 → A = 48 / 2 = 24

⚠️ Se o enunciado der a hipotenusa e um cateto, ache o outro cateto com Pitágoras antes.`,
            },
            {
              heading: "Desafio: só os três lados",
              body: `Calcular a área do triângulo de lados 5, 7 e base 10.

A altura h divide a base em dois pedaços: x (do lado de 7) e 10 − x (do lado de 5). Aplicando Pitágoras nos dois triângulos retângulos:

5² = h² + (10 − x)²
7² = h² + x² → h² = 49 − x²

Substituindo h² na primeira:
25 = 49 − x² + (10 − x)²
25 = 49 − x² + 100 − 20x + x²
25 = 149 − 20x
20x = 124
x = 6,2

h² = 49 − (6,2)² = 49 − 38,44 = 10,56
h ≈ 3,25

Área:
A = 10 · 3,25 / 2 ≈ 16,25

💡 Dica extra: fórmula de Heron (só com os lados)
p = (a + b + c) / 2
A = √[p(p − a)(p − b)(p − c)]
Aqui: p = 11 → A = √(11 · 6 · 4 · 1) = √264 = 2√66 ≈ 16,25 ✔`,
              visual: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="mt3_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="mt3_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="mt3_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="mt3_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="mt3_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker></defs>
<polygon points="40,220 440,220 192,90" fill="#E4D9C4" stroke="#3E2F20" stroke-width="2"/><line x1="192" y1="90" x2="192" y2="220" stroke="#5B7553" stroke-width="2" stroke-dasharray="6 4"/><path d="M 202 220 L 202 210 L 192 210" fill="none" stroke="#3E2F20" stroke-width="1.2"/><text x="100" y="146" text-anchor="middle" font-size="16" font-weight="700" fill="#A6493A">5</text><text x="330" y="146" text-anchor="middle" font-size="16" font-weight="700" fill="#A6493A">7</text><text x="204" y="160" text-anchor="start" font-size="16" font-weight="700" fill="#5B7553">h</text><text x="116" y="242" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">10 − x</text><text x="316" y="242" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">x</text><text x="240" y="264" text-anchor="middle" font-size="12" font-weight="400" fill="#5C4630">base = 10</text><text x="470" y="60" text-anchor="start" font-size="12" font-weight="600" fill="#3E2F20">Pitágoras nos dois</text><text x="470" y="78" text-anchor="start" font-size="12" font-weight="600" fill="#3E2F20">triângulos retângulos:</text><text x="470" y="108" text-anchor="start" font-size="13" font-weight="400" fill="#3E2F20">5² = h² + (10 − x)²</text><text x="470" y="132" text-anchor="start" font-size="13" font-weight="400" fill="#3E2F20">7² = h² + x²</text><text x="470" y="166" text-anchor="start" font-size="14" font-weight="700" fill="#A8763E">x = 6,2</text><text x="470" y="190" text-anchor="start" font-size="14" font-weight="700" fill="#A8763E">h ≈ 3,25</text><text x="470" y="220" text-anchor="start" font-size="16" font-weight="700" fill="#A8763E">A ≈ 16,25</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Sem altura no enunciado: a altura divide a base em x e 10 − x, e o Pitágoras duplo encontra h.</p>`,
            },
          ],
          quiz: [
            { q: "Qual é a área de um triângulo de base 10 cm e altura 6 cm?", options: ["30 cm²", "60 cm²", "16 cm²", "15 cm²"], correct: 0 },
            { q: "Dois lados de um triângulo medem 8 cm e 10 cm e formam um ângulo de 30°. A área é: (sen 30° = 1/2)", options: ["20 cm²", "40 cm²", "80 cm²", "10 cm²"], correct: 0 },
            { q: "Dois lados de um triângulo medem 6 e 8 e formam um ângulo de 60°. Sua área é:", options: ["12√3", "24√3", "24", "12"], correct: 0 },
            { q: "Dois lados de um triângulo medem 4 e 5 e formam um ângulo de 150°. Sua área é:", options: ["5", "10", "5√3", "10√3"], correct: 0 },
            { q: "Um terreno triangular tem dois lados de 20 m e 30 m que formam um ângulo de 60°. Sua área é aproximadamente: (√3 ≈ 1,7)", options: ["255 m²", "300 m²", "510 m²", "150 m²"], correct: 0 },
            { q: "Qual é a área de um triângulo equilátero de lado 6?", options: ["9√3", "18√3", "36√3", "6√3"], correct: 0 },
            { q: "Qual é a área de um triângulo equilátero de lado 4 cm?", options: ["4√3 cm²", "8√3 cm²", "16√3 cm²", "2√3 cm²"], correct: 0 },
            { q: "Um triângulo equilátero tem área 16√3 cm². Quanto mede seu lado?", options: ["8 cm", "4 cm", "16 cm", "4√3 cm"], correct: 0 },
            { q: "Um triângulo retângulo tem catetos de 6 cm e 8 cm. Sua área é:", options: ["24 cm²", "48 cm²", "14 cm²", "30 cm²"], correct: 0 },
            { q: "Um triângulo retângulo tem hipotenusa 10 cm e um cateto de 6 cm. Sua área é:", options: ["24 cm²", "30 cm²", "48 cm²", "60 cm²"], correct: 0 },
            { q: "Um triângulo isósceles tem lados iguais de 5 cm e base de 6 cm. Sua área é:", options: ["12 cm²", "15 cm²", "24 cm²", "30 cm²"], correct: 0 },
            { q: "Em um triângulo obtuso, a altura relativa a um dos lados menores:", options: ["Pode cair fora do triângulo, no prolongamento da base", "Nunca existe", "É sempre igual ao lado", "Cai sempre no ponto médio da base"], correct: 0 },
            { q: "Se o enunciado dá dois lados e o ângulo entre eles, a fórmula mais direta para a área é:", options: ["A = ½ · a · b · sen θ", "A = b · h", "A = l²√3 / 4", "A = πR²"], correct: 0 },
            { q: "No triângulo de lados 5, 7 e base 10, a altura divide a base em x (lado do 7) e 10 − x. Quanto vale x?", options: ["6,2", "3,8", "5", "7"], correct: 0 },
            { q: "Qual é a área aproximada do triângulo de lados 5, 7 e 10?", options: ["16,25", "32,5", "17,5", "35"], correct: 0 },
            { q: "Pela fórmula de Heron, qual é a área do triângulo de lados 13, 14 e 15?", options: ["84", "91", "105", "42"], correct: 0 },
          ],
        },
      ],
    },
);
