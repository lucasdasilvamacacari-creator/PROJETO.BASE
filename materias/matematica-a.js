window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "matematica-a",
      name: "Matemática A",
      emoji: "📊",
      contents: [
        {
          id: "funcoes",
          title: "Funções",
          sections: [
            {
              heading: "1. Funções",
              body: `Uma função é uma relação em que cada elemento do conjunto de partida (A) está associado a um único elemento do conjunto de chegada (B).

Exemplo:
A = {1, 2, 3}
B = {3, 4, 5, 6}

Relação definida por: y = x + 2

Aplicando a regra:
Para x = 1 → y = 1 + 2 = 3
Para x = 2 → y = 2 + 2 = 4
Para x = 3 → y = 3 + 2 = 5

Assim: R = {(1,3), (2,4), (3,5)}
Ou seja: 1 → 3, 2 → 4, 3 → 5

O elemento 6 pertence ao conjunto B, mas não recebe nenhuma seta.`,
              visual: `
<svg viewBox="0 0 260 170" class="w-full max-w-xs mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrFn-1" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#A8763E"/></marker>
  </defs>
  <ellipse cx="65" cy="90" rx="45" ry="70" fill="none" stroke="#5C4630" stroke-width="2"/>
  <ellipse cx="195" cy="90" rx="45" ry="75" fill="none" stroke="#5C4630" stroke-width="2"/>
  <text x="55" y="15" font-size="12" fill="#5C4630" font-weight="600">A</text>
  <text x="188" y="10" font-size="12" fill="#5C4630" font-weight="600">B</text>
  <circle cx="65" cy="55" r="3" fill="#3E2F20"/><text x="45" y="52" font-size="11" fill="#3E2F20">1</text>
  <circle cx="65" cy="90" r="3" fill="#3E2F20"/><text x="45" y="87" font-size="11" fill="#3E2F20">2</text>
  <circle cx="65" cy="125" r="3" fill="#3E2F20"/><text x="45" y="122" font-size="11" fill="#3E2F20">3</text>
  <circle cx="195" cy="35" r="3" fill="#3E2F20"/><text x="205" y="32" font-size="11" fill="#3E2F20">3</text>
  <circle cx="195" cy="70" r="3" fill="#3E2F20"/><text x="205" y="67" font-size="11" fill="#3E2F20">4</text>
  <circle cx="195" cy="105" r="3" fill="#3E2F20"/><text x="205" y="102" font-size="11" fill="#3E2F20">5</text>
  <circle cx="195" cy="140" r="3" fill="#A8763E"/><text x="205" y="137" font-size="11" fill="#A8763E">6</text>
  <line x1="68" y1="55" x2="192" y2="35" stroke="#A8763E" stroke-width="1.5" marker-end="url(#arrFn-1)"/>
  <line x1="68" y1="90" x2="192" y2="70" stroke="#A8763E" stroke-width="1.5" marker-end="url(#arrFn-1)"/>
  <line x1="68" y1="125" x2="192" y2="105" stroke="#A8763E" stroke-width="1.5" marker-end="url(#arrFn-1)"/>
  <text x="55" y="160" font-size="9.5" fill="#A8763E">6 não recebe seta</text>
</svg>`,
            },
            {
              heading: "2. Demonstração de uma função",
              body: `Podemos representar uma função como: f: A → B

Onde:
A é o conjunto de partida.
B é o conjunto de chegada.
x representa o elemento que entra na função.
y representa o resultado obtido pela função.

Portanto: f(x) = y

A ideia principal é: x → f(x) → y

Cada valor de x deve possuir um único valor correspondente de y.`,
            },
            {
              heading: "3. Raiz da função",
              body: `A raiz da função é o valor de x para o qual o resultado da função é igual a zero.
Em outras palavras: f(x) = 0

Exemplo:
f(x) = 2x - 6

Para encontrar a raiz:
f(x) = 0
2x - 6 = 0
2x = 6
x = 6/2
x = 3

Portanto: x = 3 é a raiz da função.

O que significa a raiz?
A raiz é o ponto em que o gráfico da função toca ou cruza o eixo x, pois nesse ponto: y = 0`,
            },
            {
              heading: "4. Domínio, Contradomínio e Imagem",
              body: `Esses três conceitos são fundamentais para entender uma função.

Domínio (D)
O domínio é o conjunto formado pelos valores que podem entrar na função, ou seja, os valores de x.
No exemplo: D(f) = {1, 2, 3}
Domínio → valores de x

Contradomínio (CD)
O contradomínio é o conjunto de valores que podem receber os resultados da função.
No exemplo: CD(f) = {3, 4, 5, 6}
Contradomínio → conjunto B
Importante: nem todos os elementos do contradomínio precisam necessariamente receber uma seta.

Imagem (Im)
A imagem é o conjunto dos valores que realmente são obtidos pela função.
Como: 1 → 3, 2 → 4, 3 → 5
Temos: Im(f) = {3, 4, 5}
O número 6 não pertence à imagem porque nenhum elemento do domínio foi associado a ele.

Resumindo:
Domínio: valores que entram → x
Contradomínio: conjunto onde os resultados podem estar
Imagem: valores que realmente saem → y

No exemplo:
D(f) = {1, 2, 3}
CD(f) = {3, 4, 5, 6}
Im(f) = {3, 4, 5}`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse max-w-xs mx-auto">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-1.5 pr-3 font-display text-bark">Conjunto</th><th class="text-left py-1.5 font-display text-bark">Valores</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Domínio D(f)</td><td class="py-1.5 text-bark/80">{1, 2, 3}</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Contradomínio CD(f)</td><td class="py-1.5 text-bark/80">{3, 4, 5, 6}</td></tr>
      <tr><td class="py-1.5 pr-3 text-bark/80">Imagem Im(f)</td><td class="py-1.5 text-bark/80">{3, 4, 5}</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "5. Taxa de variação",
              body: `A taxa de variação mostra o quanto o valor de y varia quando o valor de x varia.

Na representação gráfica, podemos considerar dois pontos:
A = (xₐ, yₐ)
B = (xᵦ, yᵦ)

A fórmula é: tg α = (yᵦ - yₐ) / (xᵦ - xₐ)
Também podemos escrever: tg α = Δy / Δx
Onde: Δy = yᵦ - yₐ e Δx = xᵦ - xₐ

Como entender isso?
Δy → quanto o valor de y mudou.
Δx → quanto o valor de x mudou.
A razão Δy/Δx mostra a variação de y para cada variação de x.

Essa taxa está relacionada à inclinação da reta.`,
            },
            {
              heading: "6. Crescimento e decrescimento da função",
              body: `A taxa de variação permite entender se uma função está crescendo ou decrescendo.

Função crescente
Quando: 0° < α < 90°
A função é crescente. Isso significa que, conforme x aumenta, y também aumenta.
A reta apresenta uma inclinação positiva.

Função decrescente
Quando: 90° < α < 180°
A função é decrescente. Isso significa que, conforme x aumenta, y diminui.
A reta apresenta uma inclinação negativa.`,
              visual: `
<div class="grid grid-cols-2 gap-3 max-w-sm mx-auto">
  <div class="text-center">
    <svg viewBox="0 0 160 140" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="120" x2="150" y2="120" stroke="#5C4630" stroke-width="1.5"/>
      <line x1="20" y1="120" x2="20" y2="15" stroke="#5C4630" stroke-width="1.5"/>
      <line x1="20" y1="110" x2="130" y2="30" stroke="#A8763E" stroke-width="2.5"/>
      <text x="70" y="115" font-size="11" fill="#A8763E">α</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Crescente — 0° &lt; α &lt; 90°</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 160 140" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="120" x2="150" y2="120" stroke="#5C4630" stroke-width="1.5"/>
      <line x1="20" y1="120" x2="20" y2="15" stroke="#5C4630" stroke-width="1.5"/>
      <line x1="20" y1="30" x2="130" y2="110" stroke="#A8763E" stroke-width="2.5"/>
      <text x="70" y="115" font-size="11" fill="#A8763E">α</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">Decrescente — 90° &lt; α &lt; 180°</p>
  </div>
</div>`,
            },
            {
              heading: "7. Como identificar a taxa de variação",
              body: `Para calcular a taxa de variação entre dois pontos:

1º passo — Identifique os pontos: A = (xₐ, yₐ) e B = (xᵦ, yᵦ)
2º passo — Calcule a variação de y: Δy = yᵦ - yₐ
3º passo — Calcule a variação de x: Δx = xᵦ - xₐ
4º passo — Divida: tg α = Δy / Δx

Assim, você descobre a taxa de variação da função.`,
            },
            {
              heading: "8. Resumo para entender a matéria",
              body: `Função: relaciona cada elemento de A a um único elemento de B. f: A → B
Domínio: valores de x que entram na função.
Contradomínio: conjunto de chegada da função.
Imagem: valores de y que realmente são obtidos.
Raiz: valor de x quando f(x) = 0.
Taxa de variação: tg α = (yᵦ - yₐ)/(xᵦ - xₐ) = Δy/Δx
Função crescente: 0° < α < 90°
Função decrescente: 90° < α < 180°

A lógica para não decorar:
x entra na função → a função transforma x → y sai
x aumenta e y aumenta → função crescente
x aumenta e y diminui → função decrescente
y = 0 → encontramos a raiz
Δy/Δx → descobrimos a taxa de variação`,
            },
          ],
          quiz: [
            { q: "Uma função relaciona cada elemento do conjunto de partida a:", options: ["Um único elemento do conjunto de chegada","Vários elementos do conjunto de chegada","Nenhum elemento do conjunto de chegada","Apenas elementos pares"], correct: 0 },
            { q: "Na função y = x + 2, qual é o valor de y quando x = 2?", options: ["4","2","6","0"], correct: 0 },
            { q: "Como se representa uma função de A para B?", options: ["f: A → B","f: B → A","A = B","f(A) = f(B)"], correct: 0 },
            { q: "O que é a raiz de uma função?", options: ["O valor de x para o qual f(x) = 0","O valor de y quando x = 0","O maior valor de y","O menor valor de x"], correct: 0 },
            { q: "Na função f(x) = 2x − 6, qual é a raiz?", options: ["x = 3","x = 6","x = -3","x = 2"], correct: 0 },
            { q: "O domínio de uma função é formado por:", options: ["Os valores que entram na função (valores de x)","Os valores que saem da função (valores de y)","Apenas os valores positivos","O conjunto de chegada inteiro"], correct: 0 },
            { q: "A imagem de uma função é:", options: ["O conjunto dos valores que realmente são obtidos pela função","O mesmo que o contradomínio","Sempre igual ao domínio","Um conjunto vazio"], correct: 0 },
            { q: "Qual é a fórmula da taxa de variação?", options: ["tg α = Δy / Δx","tg α = Δx / Δy","tg α = x + y","tg α = x · y"], correct: 0 },
            { q: "Uma função é crescente quando:", options: ["0° < α < 90°","90° < α < 180°","α = 90°","α = 0°"], correct: 0 },
            { q: "Uma função é decrescente quando:", options: ["90° < α < 180°","0° < α < 90°","α = 0°","α = 180°"], correct: 0 },
          ],
          extraQuizLabel: "Exercícios extras",
          extraQuizHeading: "Treino com valores para calcular, no estilo de prova",
          extraQuiz: [
            { q: "Seja f(x) = x + 5. Qual é o valor de f(3)?", options: ["8","15","2","5"], correct: 0 },
            { q: "Seja f(x) = 3x. Qual é a raiz dessa função?", options: ["x = 0","x = 3","x = 1","x = -3"], correct: 0 },
            { q: "Seja f(x) = x − 4. Qual é a raiz dessa função?", options: ["x = 4","x = -4","x = 0","x = 1"], correct: 0 },
            { q: "Seja f(x) = 5x − 10. Qual é a raiz dessa função?", options: ["x = 2","x = 10","x = 5","x = -2"], correct: 0 },
            { q: "Considere A = {2, 3, 4} e a função y = x + 1. Qual é a imagem de f?", options: ["{3, 4, 5}","{2, 3, 4}","{1, 2, 3}","{4, 5, 6}"], correct: 0 },
            { q: "Considere os pontos A = (1,2) e B = (4,8). Qual é a taxa de variação (Δy/Δx) entre eles?", options: ["2","3","6","1"], correct: 0 },
            { q: "Considere os pontos A = (0,1) e B = (3,10). Qual é a taxa de variação entre eles?", options: ["3","9","1","10"], correct: 0 },
            { q: "Se uma função possui taxa de variação positiva (Δy/Δx > 0), ela é:", options: ["Crescente","Decrescente","Constante","Indefinida"], correct: 0 },
            { q: "Se uma função possui taxa de variação negativa (Δy/Δx < 0), ela é:", options: ["Decrescente","Crescente","Constante","Indefinida"], correct: 0 },
            { q: "Considere os pontos A = (2,5) e B = (6,5). Qual é a taxa de variação entre eles?", options: ["0","5","4","1"], correct: 0 },
          ],
        },
        {
          id: "funcao-quadratica",
          title: "Função Quadrática",
          sections: [
            {
              heading: "1. Fórmula geral",
              body: `A função quadrática é uma função do 2º grau. Ela sempre possui uma variável elevada ao quadrado e seu gráfico é uma parábola.

f(x) = ax² + bx + c

O que significa cada letra?
a → Determina a abertura e o sentido da parábola.
b → Influencia a posição da parábola no eixo x e o eixo de simetria.
c → É o ponto onde a parábola corta o eixo y (valor de f(0)).

Regra importante: a ≠ 0. Se a = 0, a função deixa de ser quadrática.`,
            },
            {
              heading: "2. Como identificar o gráfico",
              body: `O gráfico da função quadrática é sempre uma parábola.

a > 0 → Parábola voltada para cima.
a < 0 → Parábola voltada para baixo.

Resumindo:
Parábola para cima → existe um ponto mínimo.
Parábola para baixo → existe um ponto máximo.

Nunca decore. Pense: o sinal de a diz para qual lado a parábola abre.`,
              visual: `
<div class="grid grid-cols-2 gap-3 max-w-sm mx-auto">
  <div class="text-center">
    <svg viewBox="0 0 140 110" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <path d="M20,20 Q70,110 120,20" fill="none" stroke="#A8763E" stroke-width="2.5"/>
      <circle cx="70" cy="90" r="4" fill="#3E2F20"/>
      <text x="45" y="105" font-size="9.5" fill="#3E2F20">mínimo</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">a &gt; 0 — abre para cima</p>
  </div>
  <div class="text-center">
    <svg viewBox="0 0 140 110" class="w-full" xmlns="http://www.w3.org/2000/svg">
      <path d="M20,90 Q70,0 120,90" fill="none" stroke="#A8763E" stroke-width="2.5"/>
      <circle cx="70" cy="18" r="4" fill="#3E2F20"/>
      <text x="45" y="14" font-size="9.5" fill="#3E2F20">máximo</text>
    </svg>
    <p class="text-xs text-bark/60 mt-1 font-medium">a &lt; 0 — abre para baixo</p>
  </div>
</div>`,
            },
            {
              heading: "3. Exemplo da aula",
              body: `Considere: f(x) = x² − 4x + 3

Identificando os coeficientes:
a = 1
b = -4
c = 3

Como a = 1, a parábola é voltada para cima.`,
            },
            {
              heading: "4. Como montar a tabela de valores",
              body: `Substitua cada valor de x na função f(x) = x² − 4x + 3.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse max-w-xs mx-auto">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-1.5 pr-3 font-display text-bark">x</th><th class="text-left py-1.5 font-display text-bark">y = f(x)</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">-1</td><td class="py-1.5 text-bark/80">8</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">0</td><td class="py-1.5 text-bark/80">3</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">1</td><td class="py-1.5 text-bark/80">0</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">2</td><td class="py-1.5 text-bark/80">-1</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">3</td><td class="py-1.5 text-bark/80">0</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">4</td><td class="py-1.5 text-bark/80">3</td></tr>
      <tr><td class="py-1.5 pr-3 text-bark/80">5</td><td class="py-1.5 text-bark/80">8</td></tr>
    </tbody>
  </table>
</div>
<p class="text-[11px] text-bark/50 text-center mt-2">Ouro da aula: os valores se repetem (-1 e 5 → 8 · 0 e 4 → 3 · 1 e 3 → 0) porque a parábola é simétrica.</p>`,
            },
            {
              heading: "5. Raízes, 6. Eixo de simetria e 7. Vértice",
              body: `Raízes da função
São os valores de x em que f(x) = 0.
Na tabela: x = 1 e x = 3.
Raízes da função: x = 1 e x = 3.

Eixo de simetria
Divide a parábola em duas partes iguais.
Na função da aula: x = 2.
A raiz 1 está 1 unidade do eixo. A raiz 3 também está 1 unidade do eixo. Tudo fica espelhado ao redor de x = 2.
Regra importante: o eixo de simetria sempre passa pelo vértice da parábola.

Vértice da parábola
É o ponto mais importante do gráfico.
Se a > 0 → é o ponto mínimo da função.
Se a < 0 → é o ponto máximo da função.
No exemplo da aula: Vértice (2, -1). Isso significa x = 2 e y = -1, o menor valor da função.
Ouro da aula: o vértice pertence ao eixo de simetria.`,
              visual: `
<svg viewBox="0 0 300 220" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="172" x2="280" y2="172" stroke="#5C4630" stroke-width="1.5"/>
  <line x1="70" y1="15" x2="70" y2="205" stroke="#5C4630" stroke-width="1.5"/>
  <line x1="150" y1="10" x2="150" y2="200" stroke="#A8763E" stroke-width="1.5" stroke-dasharray="4 3"/>
  <polyline points="30,28 70,118 110,172 150,190 190,172 230,118 270,28" fill="none" stroke="#5C4630" stroke-width="2.5"/>
  <circle cx="110" cy="172" r="4" fill="#3E2F20"/>
  <circle cx="190" cy="172" r="4" fill="#3E2F20"/>
  <circle cx="150" cy="190" r="5" fill="#A8763E"/>
  <circle cx="70" cy="118" r="4" fill="#5C4630"/>
  <text x="98" y="188" font-size="9.5" fill="#3E2F20">raiz (1,0)</text>
  <text x="178" y="188" font-size="9.5" fill="#3E2F20">raiz (3,0)</text>
  <text x="152" y="205" font-size="9.5" fill="#A8763E" font-weight="600">vértice (2,-1)</text>
  <text x="18" y="112" font-size="9.5" fill="#5C4630">(0,3)</text>
  <text x="153" y="20" font-size="9.5" fill="#A8763E">eixo x=2</text>
</svg>`,
            },
            {
              heading: "8. Domínio, 9. Contradomínio e 10. Imagem",
              body: `Domínio
O domínio mostra quais valores de x a função aceita.
Na aula: D = ℝ. Significado: qualquer número real pode substituir x.

Contradomínio
Na aula: CD = ℝ. Significado: o conjunto de chegada também é formado pelos números reais.

Imagem da função
A imagem mostra quais valores de y realmente aparecem.
Como a parábola abre para cima e o menor valor é -1: Im = {y ∈ ℝ | y ≥ -1}

Regra importante:
Parábola abre para cima → Imagem: y ≥ yᵥ
Parábola abre para baixo → Imagem: y ≤ yᵥ
(yᵥ = valor de y do vértice)`,
              visual: `
<svg viewBox="0 0 260 60" class="w-full max-w-xs mx-auto" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="35" x2="240" y2="35" stroke="#5C4630" stroke-width="2"/>
  <line x1="90" y1="35" x2="240" y2="35" stroke="#A8763E" stroke-width="4"/>
  <circle cx="90" cy="35" r="5" fill="#A8763E"/>
  <text x="80" y="52" font-size="10" fill="#5C4630">-1</text>
  <text x="225" y="25" font-size="10" fill="#A8763E">+∞</text>
  <text x="45" y="15" font-size="10" fill="#5C4630" font-weight="600">Im = {y ∈ ℝ | y ≥ -1}</text>
</svg>`,
            },
            {
              heading: "11. Interpretação completa da função da aula",
              body: `Função: f(x) = x² − 4x + 3`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Característica</th><th class="text-left py-2 font-display text-bark">Resultado</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Tipo</td><td class="py-2 text-bark/80">Função do 2º grau</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">a</td><td class="py-2 text-bark/80">1</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Sentido da parábola</td><td class="py-2 text-bark/80">Para cima</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Raízes</td><td class="py-2 text-bark/80">1 e 3</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Eixo de simetria</td><td class="py-2 text-bark/80">x = 2</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Vértice</td><td class="py-2 text-bark/80">(2, -1)</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Domínio</td><td class="py-2 text-bark/80">ℝ</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Contradomínio</td><td class="py-2 text-bark/80">ℝ</td></tr>
      <tr><td class="py-2 pr-3 text-bark/80">Imagem</td><td class="py-2 text-bark/80">y ≥ -1</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "🎯 Ouro da matéria",
              body: `O que você precisa saber para a prova:

Identificar a função quadrática → reconhecer a fórmula ax² + bx + c e lembrar que a ≠ 0.
Saber o sentido da parábola → a > 0 abre para cima; a < 0 abre para baixo.
Montar uma tabela de valores → substituir cada valor de x na função para encontrar y.
Encontrar as raízes → são os valores de x quando f(x) = 0.
Encontrar o eixo de simetria e o vértice → o eixo divide a parábola ao meio e sempre passa pelo vértice.
Diferenciar domínio, contradomínio e imagem → Domínio = valores de x; Contradomínio = conjunto de chegada; Imagem = valores de y que a função assume.

Resumo em uma frase: em qualquer questão de função quadrática, siga esta ordem — identifique a, b e c → descubra o sentido da parábola → monte a tabela → encontre as raízes → identifique o eixo de simetria → encontre o vértice → determine domínio, contradomínio e imagem.`,
            },
          ],
          quiz: [
            { q: "A função quadrática é uma função do:", options: ["2º grau","1º grau","3º grau","grau zero"], correct: 0 },
            { q: "Qual é a fórmula geral da função quadrática?", options: ["f(x) = ax² + bx + c","f(x) = ax + b","f(x) = a/x + b","f(x) = ax³ + b"], correct: 0 },
            { q: "Qual condição é obrigatória para que a função seja quadrática?", options: ["a ≠ 0","b ≠ 0","c ≠ 0","a = 0"], correct: 0 },
            { q: "O que o coeficiente 'a' determina?", options: ["A abertura e o sentido da parábola","O ponto onde ela corta o eixo y","Apenas o eixo de simetria","A raiz da função"], correct: 0 },
            { q: "O que o coeficiente 'c' representa?", options: ["O ponto onde a parábola corta o eixo y","A abertura da parábola","O vértice da parábola","O eixo de simetria"], correct: 0 },
            { q: "Se a > 0, a parábola é:", options: ["Voltada para cima, com ponto mínimo","Voltada para baixo, com ponto máximo","Uma reta","Sempre decrescente"], correct: 0 },
            { q: "Se a < 0, a parábola é:", options: ["Voltada para baixo, com ponto máximo","Voltada para cima, com ponto mínimo","Sempre constante","Sempre crescente"], correct: 0 },
            { q: "As raízes de uma função quadrática são os valores de x em que:", options: ["f(x) = 0","f(x) = 1","x = 0","a = 0"], correct: 0 },
            { q: "O eixo de simetria de uma parábola:", options: ["Divide a parábola em duas partes iguais e passa pelo vértice","Nunca passa pelo vértice","É sempre igual a zero","Só existe se a < 0"], correct: 0 },
            { q: "Se a parábola abre para cima, a imagem da função é:", options: ["y ≥ yᵥ (valor de y do vértice)","y ≤ yᵥ","Todos os números reais","Apenas números positivos"], correct: 0 },
          ],
          extraQuizLabel: "Exercícios extras",
          extraQuizHeading: "Treino com valores para calcular, no estilo de prova",
          extraQuiz: [
            { q: "Considere f(x) = x² − 5x + 6. Quais são as raízes dessa função?", options: ["x = 2 e x = 3","x = 1 e x = 6","x = -2 e x = -3","x = 5 e x = 6"], correct: 0 },
            { q: "Considere f(x) = x² − 6x + 8. Quais são as raízes dessa função?", options: ["x = 2 e x = 4","x = 1 e x = 8","x = -2 e x = -4","x = 3 e x = 5"], correct: 0 },
            { q: "Considere f(x) = x² − 4. Quais são as raízes dessa função?", options: ["x = 2 e x = -2","x = 4 e x = -4","x = 0 e x = 4","x = 1 e x = -1"], correct: 0 },
            { q: "Considere f(x) = x² − 2x + 1. Qual é a raiz (dupla) dessa função?", options: ["x = 1","x = -1","x = 2","x = 0"], correct: 0 },
            { q: "Para f(x) = x² − 5x + 6, qual é o eixo de simetria?", options: ["x = 2,5","x = 5","x = 6","x = 1"], correct: 0 },
            { q: "Para f(x) = x² − 6x + 8, qual é o eixo de simetria?", options: ["x = 3","x = 6","x = 8","x = 2"], correct: 0 },
            { q: "Para f(x) = x² − 6x + 8, qual é o vértice da parábola?", options: ["(3, -1)","(3, 1)","(2, 0)","(4, 0)"], correct: 0 },
            { q: "Para f(x) = x² − 4x, qual é o valor de f(0)?", options: ["0","4","-4","1"], correct: 0 },
            { q: "Para f(x) = 2x² − 8, qual é o valor de f(2)?", options: ["0","8","-8","4"], correct: 0 },
            { q: "Considere f(x) = x² − 9. Qual é o valor do coeficiente 'c' e o que ele representa?", options: ["c = -9, o ponto onde a parábola corta o eixo y","c = 9, o vértice da parábola","c = -9, a raiz da função","c = 1, o coeficiente 'a'"], correct: 0 },
          ],
        },
        {
          id: "funcao-exponencial",
          title: "Função Exponencial",
          sections: [
            {
              heading: "Modelo exponencial",
              body: `Uma equação exponencial tem a incógnita no expoente:

a = b^x

Condições: a > 0, b > 0 e b ≠ 1.

A estratégia principal para resolver uma equação exponencial é igualar as bases. Quando as bases ficam iguais, basta comparar os expoentes.

Exemplo: 4^x = 32
• Reescreva com a mesma base: 4 = 2² e 32 = 2⁵
• (2²)^x = 2⁵ → 2^(2x) = 2⁵
• Bases iguais → 2x = 5 → x = 5/2`,
            },
            {
              heading: "Propriedades das potências",
              body: `Essas propriedades são a base para resolver equações exponenciais. Decore todas:

• Produto de mesma base: a^m · a^n = a^(m+n)
• Divisão de mesma base: a^m / a^n = a^(m−n)
• Potência de potência: (a^m)^n = a^(m·n)
• Expoente zero: a^0 = 1
• Expoente negativo: a^(−n) = 1 / a^n
• Raiz como potência: ⁿ√(a^m) = a^(m/n)`,
            },
            {
              heading: "Função exponencial",
              body: `A função exponencial é definida por:

f(x) = b^x, com b > 0 e b ≠ 1

A base b decide o comportamento da função:

• b > 1 → função CRESCENTE
• 0 < b < 1 → função DECRESCENTE
• b = 1 → função constante (igual a 1 sempre)
• b < 0 → não existe em ℝ

A curva de qualquer função exponencial passa pelo ponto (0, 1), porque b^0 = 1.`,
              visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <rect x="0" y="0" width="640" height="300" rx="12" fill="#F4EEE1"/>
  <text x="160" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">f(x) = b^x,  b > 1</text>
  <text x="480" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">f(x) = b^x,  0 < b < 1</text>
  <line x1="320" y1="40" x2="320" y2="280" stroke="#C9B18C" stroke-dasharray="4 4"/>

  <line x1="40" y1="250" x2="280" y2="250" stroke="#5C4630" stroke-width="1.5"/>
  <line x1="160" y1="40" x2="160" y2="265" stroke="#5C4630" stroke-width="1.5"/>
  <path d="M50,245 Q130,235 160,210 Q190,160 220,110 Q245,70 275,50" fill="none" stroke="#A8763E" stroke-width="2.5"/>
  <circle cx="160" cy="210" r="3" fill="#A8763E"/>
  <text x="154" y="206" text-anchor="end" font-size="10" fill="#A8763E">(0, 1)</text>
  <text x="220" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#5B7553">CRESCENTE</text>
  <text x="160" y="275" text-anchor="middle" font-size="11" fill="#5C4630">x</text>
  <text x="45" y="50" text-anchor="start" font-size="11" fill="#5C4630">f(x)</text>

  <line x1="360" y1="250" x2="600" y2="250" stroke="#5C4630" stroke-width="1.5"/>
  <line x1="480" y1="40" x2="480" y2="265" stroke="#5C4630" stroke-width="1.5"/>
  <path d="M370,50 Q400,70 420,110 Q450,160 480,210 Q510,235 600,245" fill="none" stroke="#A8763E" stroke-width="2.5"/>
  <circle cx="480" cy="210" r="3" fill="#A8763E"/>
  <text x="486" y="206" text-anchor="start" font-size="10" fill="#A8763E">(0, 1)</text>
  <text x="420" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#A6493A">DECRESCENTE</text>
  <text x="480" y="275" text-anchor="middle" font-size="11" fill="#5C4630">x</text>
  <text x="365" y="50" text-anchor="start" font-size="11" fill="#5C4630">f(x)</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">A curva sempre passa por (0, 1), pois b^0 = 1. A base b determina se a função cresce ou decresce.</p>`,
            },
            {
              heading: "Exercício resolvido — 4^x = 32",
              body: `Vamos resolver passo a passo:

4^x = 32

Passo 1 — reescrever as duas bases como potência de 2:
(2²)^x = 2⁵

Passo 2 — aplicar a propriedade (a^m)^n = a^(m·n):
2^(2x) = 2⁵

Passo 3 — com bases iguais, igualar os expoentes:
2x = 5

Passo 4 — isolar x:
x = 5/2

A ideia é sempre a mesma: transformar os dois lados em potências da mesma base e, então, igualar os expoentes.`,
            },
          ],
          quiz: [
            { q: "Resolva a equação exponencial 2^x = 32.", options: ["x = 4","x = 5","x = 6","x = 16"], correct: 1 },
            { q: "Qual o valor de x em 3^(x+1) = 27?", options: ["x = 1","x = 2","x = 3","x = 9"], correct: 1 },
            { q: "Resolva 4^x = 1/16.", options: ["x = 2","x = -2","x = 4","x = -4"], correct: 1 },
            { q: "Resolva a equação 9^x = 27.", options: ["x = 2/3","x = 3/2","x = 3","x = 2"], correct: 1 },
            { q: "Simplificando 2^5 · 2^3, obtemos:", options: ["2^8","2^15","4^8","2^2"], correct: 0 },
            { q: "O valor de (2^3)^2 é:", options: ["12","64","8","32"], correct: 1 },
            { q: "De acordo com as propriedades, 5^0 vale:", options: ["0","1","5","indefinido"], correct: 1 },
            { q: "A expressão 2^(-3) é equivalente a:", options: ["-8","-1/8","1/8","6"], correct: 2 },
            { q: "A função f(x) = (1/2)^x é:", options: ["Crescente","Decrescente","Constante","Não existe em ℝ"], correct: 1 },
            { q: "A função f(x) = 3^x é:", options: ["Crescente","Decrescente","Constante","Não é função"], correct: 0 },
            { q: "Resolva: 2^(x-1) = 16.", options: ["x = 3","x = 4","x = 5","x = 6"], correct: 2 },
            { q: "Numa cultura, o número de bactérias dobra a cada hora, segundo N(t) = 100·2^t. Após 3 horas, quantas bactérias existem?", options: ["300","600","700","800"], correct: 3 },
          ],
        },
        {
          id: "logaritmos",
          title: "Logaritmos, equação e função logarítmica",
          sections: [
            {
              heading: "O que é logaritmo",
              body: `Logaritmo é um EXPOENTE. Calcular um logaritmo é responder a uma única pergunta:

👉 "A base elevada a QUANTO dá o número?"

• log₂ 8 → "2 elevado a quanto dá 8?" → 2³ = 8 → resposta: 3
• log₁₀ 100 → "10 elevado a quanto dá 100?" → 10² = 100 → resposta: 2
• log₃ 9 → "3 elevado a quanto dá 9?" → 3² = 9 → resposta: 2

Em símbolos:
log_b a = x  ⟺  b^x = a

• a → logaritmando (o número)
• b → base
• x → logaritmo (o expoente que você procura)

Condições de existência:
• a > 0 → nenhuma potência de base positiva dá zero ou número negativo
• b > 0 e b ≠ 1 → com base 1, 1 elevado a qualquer coisa dá sempre 1`,
              visual: `<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">

<rect width="640" height="250" rx="12" fill="#F4EEE1"/>
<defs><marker id="lg1" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#A8763E"/></marker></defs>
<text x="160" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">FORMA LOGARÍTMICA</text>
<text x="480" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">FORMA EXPONENCIAL</text>
<rect x="40" y="44" width="240" height="90" rx="12" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/>
<rect x="360" y="44" width="240" height="90" rx="12" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/>
<text x="160" y="102" text-anchor="middle" font-size="30" fill="#3E2F20">log<tspan font-size="18" dy="8" fill="#A8763E" font-weight="700">b</tspan><tspan dy="-8"> </tspan><tspan fill="#5B7553" font-weight="700">a</tspan> = <tspan fill="#A6493A" font-weight="700">x</tspan></text>
<text x="480" y="102" text-anchor="middle" font-size="30" fill="#3E2F20"><tspan fill="#A8763E" font-weight="700">b</tspan><tspan font-size="18" dy="-14" fill="#A6493A" font-weight="700">x</tspan><tspan dy="14"> = </tspan><tspan fill="#5B7553" font-weight="700">a</tspan></text>
<line x1="290" y1="78" x2="350" y2="78" stroke="#A8763E" stroke-width="2.5" marker-end="url(#lg1)"/>
<line x1="350" y1="100" x2="290" y2="100" stroke="#A8763E" stroke-width="2.5" marker-end="url(#lg1)"/>
<text x="320" y="124" text-anchor="middle" font-size="10" fill="#5C4630">equivalem</text>
<circle cx="120" cy="170" r="7" fill="#A8763E"/><text x="134" y="174" text-anchor="start" font-size="12" fill="#3E2F20">b = base  (b > 0 e b ≠ 1)</text>
<circle cx="120" cy="196" r="7" fill="#5B7553"/><text x="134" y="200" text-anchor="start" font-size="12" fill="#3E2F20">a = logaritmando  (a > 0)</text>
<circle cx="120" cy="222" r="7" fill="#A6493A"/><text x="134" y="226" text-anchor="start" font-size="12" fill="#3E2F20">x = logaritmo (o expoente que se procura)</text>

</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">O logaritmo é o expoente: log₂ 8 = 3 porque 2³ = 8.</p>`,
            },
            {
              heading: "Como calcular, passo a passo",
              body: `1. Faça a pergunta: "a base elevada a quanto dá o número?"
2. Escreva o número como potência da base.
3. O expoente é a resposta.

Ex.: log₂ 32 → 32 = 2⁵ → log₂ 32 = 5

Quando a base e o número não "combinam", use uma base comum:
log₄ 8 = x → 4ˣ = 8 → (2²)ˣ = 2³ → 2x = 3 → x = 3/2

Número decimal ou fração → expoente negativo:
• log 0,01 = log 10⁻² = −2
• log₂ (1/8) = log₂ 2⁻³ = −3

Raiz → expoente em fração:
• log₅ ∛25 = log₅ 5^(2/3) = 2/3`,
              visual: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="m4_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="m4_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="m4_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="m4_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="m4_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="270" rx="12" fill="#F4EEE1"/>
<rect x="16" y="30" width="188" height="130" rx="14" fill="none" stroke="#C9B18C" stroke-width="1.5"/><circle cx="110" cy="30" r="13" fill="#3E2F20"/><text x="110" y="35" text-anchor="middle" font-size="12" font-weight="700" fill="#F4EEE1">1</text><text x="110" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">PERGUNTE</text><text x="110" y="100" text-anchor="middle" font-size="22" font-weight="700" fill="#3E2F20">log₂ 32 = ?</text><text x="110" y="128" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">"2 elevado a quanto</text><text x="110" y="144" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">dá 32?"</text><line x1="206" y1="95" x2="224" y2="95" stroke="#3E2F20" stroke-width="2" marker-end="url(#m4_3E2F20)"/><rect x="226" y="30" width="188" height="130" rx="14" fill="none" stroke="#C9B18C" stroke-width="1.5"/><circle cx="320" cy="30" r="13" fill="#3E2F20"/><text x="320" y="35" text-anchor="middle" font-size="12" font-weight="700" fill="#F4EEE1">2</text><text x="320" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">ESCREVA COMO POTÊNCIA</text><text x="320" y="100" text-anchor="middle" font-size="22" font-weight="700" fill="#3E2F20">32 = 2⁵</text><text x="320" y="128" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">escreva o número</text><text x="320" y="144" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">na base 2</text><line x1="416" y1="95" x2="434" y2="95" stroke="#3E2F20" stroke-width="2" marker-end="url(#m4_3E2F20)"/><rect x="436" y="30" width="188" height="130" rx="14" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><circle cx="530" cy="30" r="13" fill="#3E2F20"/><text x="530" y="35" text-anchor="middle" font-size="12" font-weight="700" fill="#F4EEE1">3</text><text x="530" y="62" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">LEIA O EXPOENTE</text><text x="530" y="100" text-anchor="middle" font-size="22" font-weight="700" fill="#3E2F20">log₂ 32 = 5</text><text x="530" y="128" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">o expoente</text><text x="530" y="144" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">é a resposta</text><text x="320" y="192" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">E quando a base não "combina" com o número? Use uma base comum:</text><rect x="40" y="209" width="560" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="320" y="227" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">log₄ 8 = x  →  4ˣ = 8  →  (2²)ˣ = 2³  →  2x = 3  →  x = 3/2</text><text x="320" y="258" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">4 e 8 são potências de 2, então tudo vira base 2</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Todo cálculo de logaritmo é a mesma pergunta: "a base elevada a quanto dá o número?"</p>`,
            },
            {
              heading: "Potências que você precisa saber",
              body: `Quase toda questão de logaritmo vira "achar o expoente". Por isso, vale ter de cor as potências mais usadas (tabela abaixo).

Lembretes:
• Qualquer base elevada a 0 dá 1 → b⁰ = 1
• Expoente negativo vira fração → 2⁻¹ = 1/2, 10⁻³ = 0,001
• Expoente em fração vira raiz → 9^(1/2) = √9 = 3`,
              visual: `<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="m5_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="m5_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="m5_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="m5_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="m5_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="250" rx="12" fill="#F4EEE1"/>
<text x="60" y="46" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">base</text><text x="362" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">expoente →</text><text x="152" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">1</text><text x="236" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">2</text><text x="320" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">3</text><text x="404" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">4</text><text x="488" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">5</text><text x="572" y="46" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">6</text><line x1="24" y1="56" x2="614" y2="56" stroke="#5C4630" stroke-width="1.5"/><text x="60" y="80" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">2</text><line x1="24" y1="92" x2="614" y2="92" stroke="#C9B18C"/><text x="152" y="80" text-anchor="middle" font-size="13" fill="#3E2F20">2</text><text x="236" y="80" text-anchor="middle" font-size="13" fill="#3E2F20">4</text><text x="320" y="80" text-anchor="middle" font-size="13" fill="#3E2F20">8</text><text x="404" y="80" text-anchor="middle" font-size="13" fill="#3E2F20">16</text><text x="488" y="80" text-anchor="middle" font-size="13" fill="#3E2F20">32</text><text x="572" y="80" text-anchor="middle" font-size="13" fill="#3E2F20">64</text><text x="60" y="116" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">3</text><line x1="24" y1="128" x2="614" y2="128" stroke="#C9B18C"/><text x="152" y="116" text-anchor="middle" font-size="13" fill="#3E2F20">3</text><text x="236" y="116" text-anchor="middle" font-size="13" fill="#3E2F20">9</text><text x="320" y="116" text-anchor="middle" font-size="13" fill="#3E2F20">27</text><text x="404" y="116" text-anchor="middle" font-size="13" fill="#3E2F20">81</text><text x="488" y="116" text-anchor="middle" font-size="13" fill="#3E2F20">243</text><text x="572" y="116" text-anchor="middle" font-size="13" fill="#3E2F20">729</text><text x="60" y="152" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">5</text><line x1="24" y1="164" x2="614" y2="164" stroke="#C9B18C"/><text x="152" y="152" text-anchor="middle" font-size="13" fill="#3E2F20">5</text><text x="236" y="152" text-anchor="middle" font-size="13" fill="#3E2F20">25</text><text x="320" y="152" text-anchor="middle" font-size="13" fill="#3E2F20">125</text><text x="404" y="152" text-anchor="middle" font-size="13" fill="#3E2F20">625</text><text x="488" y="152" text-anchor="middle" font-size="13" fill="#3E2F20">3125</text><text x="60" y="188" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">10</text><line x1="24" y1="200" x2="614" y2="200" stroke="#C9B18C"/><text x="152" y="188" text-anchor="middle" font-size="13" fill="#3E2F20">10</text><text x="236" y="188" text-anchor="middle" font-size="13" fill="#3E2F20">100</text><text x="320" y="188" text-anchor="middle" font-size="13" fill="#3E2F20">1 000</text><text x="404" y="188" text-anchor="middle" font-size="13" fill="#3E2F20">10 000</text><text x="488" y="188" text-anchor="middle" font-size="13" fill="#3E2F20">100 000</text><rect x="458" y="61" width="60" height="26" rx="13" fill="none" stroke="#A8763E" stroke-width="2.5"/><text x="320" y="226" text-anchor="middle" font-size="12" font-weight="700" fill="#A8763E">Ex.: na linha da base 2, o 32 está na coluna 5 → log₂ 32 = 5</text><text x="320" y="244" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">Expoente negativo vira fração: 2⁻³ = 1/8 · 10⁻² = 0,01</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Saber essas potências de cor resolve a maior parte das questões de logaritmo.</p>`,
            },
            {
              heading: "Atalhos (casos especiais)",
              body: `Todos saem da mesma pergunta "a base elevada a quanto dá o número?":

• log_b 1 = 0 → porque b⁰ = 1
  Ex.: log₇ 1 = 0

• log_b b = 1 → porque b¹ = b
  Ex.: log₆ 6 = 1

• log_b bⁿ = n → o expoente já está à vista
  Ex.: log₂ 2¹⁰ = 10

• b^(log_b a) = a → a potência "desfaz" o logaritmo
  Ex.: 2^(log₂ 7) = 7`,
            },
            {
              heading: "Propriedades operatórias",
              body: `As propriedades transformam uma conta difícil em uma mais fácil:

• Produto: log_b (a · c) = log_b a + log_b c → multiplicação vira SOMA
• Quociente: log_b (a / c) = log_b a − log_b c → divisão vira SUBTRAÇÃO
• Potência: log_b aⁿ = n · log_b a → o expoente DESCE multiplicando

A imagem confere cada regra com números da base 10.`,
              visual: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="m6_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="m6_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="m6_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="m6_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="m6_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="260" rx="12" fill="#F4EEE1"/>
<text x="170" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">A REGRA</text><text x="500" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">CONFERINDO COM NÚMEROS</text><line x1="372" y1="14" x2="372" y2="246" stroke="#C9B18C" stroke-dasharray="4 4"/><rect x="20" y="53" width="120" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="80" y="71" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">log (a · c)</text><line x1="144" y1="66" x2="210" y2="66" stroke="#A8763E" stroke-width="2.5" marker-end="url(#m6_A8763E)"/><text x="177" y="58" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">× vira +</text><rect x="215" y="53" width="130" height="26" rx="13" fill="none" stroke="#C9B18C"/><text x="280" y="71" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">log a + log c</text><text x="500" y="64" text-anchor="middle" font-size="12" fill="#3E2F20">log 1000 = log (10 · 100)</text><text x="500" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="#5B7553">= 1 + 2 = 3 ✓</text><rect x="20" y="123" width="120" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="80" y="141" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">log (a / c)</text><line x1="144" y1="136" x2="210" y2="136" stroke="#A8763E" stroke-width="2.5" marker-end="url(#m6_A8763E)"/><text x="177" y="128" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">÷ vira −</text><rect x="215" y="123" width="130" height="26" rx="13" fill="none" stroke="#C9B18C"/><text x="280" y="141" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">log a − log c</text><text x="500" y="134" text-anchor="middle" font-size="12" fill="#3E2F20">log 10 = log (100 / 10)</text><text x="500" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="#5B7553">= 2 − 1 = 1 ✓</text><rect x="20" y="193" width="120" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="80" y="211" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">log aⁿ</text><line x1="144" y1="206" x2="210" y2="206" stroke="#A8763E" stroke-width="2.5" marker-end="url(#m6_A8763E)"/><text x="177" y="198" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">expoente desce</text><rect x="215" y="193" width="130" height="26" rx="13" fill="none" stroke="#C9B18C"/><text x="280" y="211" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">n · log a</text><text x="500" y="204" text-anchor="middle" font-size="12" fill="#3E2F20">log 100 = log 10²</text><text x="500" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#5B7553">= 2 · 1 = 2 ✓</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">As propriedades "rebaixam" a operação: multiplicação vira soma, divisão vira subtração e potência vira multiplicação.</p>`,
            },
            {
              heading: "Mudança de base",
              body: `Use quando a base atrapalha a conta (ou quando a questão dá valores em outra base):

log_b a = log_c a / log_c b

Como montar: o log do NÚMERO vai em cima e o log da BASE antiga vai embaixo, os dois na base nova que você escolher.

Ex.: log₄ 8 = log₂ 8 / log₂ 4 = 3 / 2

Inversão de base (caso particular):
log_b a = 1 / log_a b
Ex.: se log₂ 5 = k, então log₅ 2 = 1/k

OBS.: quando a base não aparece escrita, ela é 10.
log 100 = log₁₀ 100 = 2`,
              visual: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="m7_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="m7_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="m7_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="m7_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="m7_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="230" rx="12" fill="#F4EEE1"/>
<text x="150" y="104" text-anchor="middle" font-size="26" font-weight="700" fill="#3E2F20">log₄ 8  =</text><text x="330" y="84" text-anchor="middle" font-size="24" font-weight="700" fill="#5B7553">log₂ 8</text><line x1="270" y1="96" x2="390" y2="96" stroke="#3E2F20" stroke-width="2.5"/><text x="330" y="128" text-anchor="middle" font-size="24" font-weight="700" fill="#A8763E">log₂ 4</text><text x="440" y="104" text-anchor="middle" font-size="26" font-weight="700" fill="#3E2F20">=</text><text x="500" y="84" text-anchor="middle" font-size="24" font-weight="700" fill="#5B7553">3</text><line x1="484" y1="96" x2="516" y2="96" stroke="#3E2F20" stroke-width="2.5"/><text x="500" y="128" text-anchor="middle" font-size="24" font-weight="700" fill="#A8763E">2</text><line x1="400" y1="40" x2="362" y2="64" stroke="#5B7553" stroke-width="1.8" marker-end="url(#m7_5B7553)"/><text x="404" y="38" text-anchor="start" font-size="11" font-weight="700" fill="#5B7553">o NÚMERO vai em cima</text><line x1="400" y1="160" x2="362" y2="128" stroke="#A8763E" stroke-width="1.8" marker-end="url(#m7_A8763E)"/><text x="404" y="168" text-anchor="start" font-size="11" font-weight="700" fill="#A8763E">a BASE antiga vai embaixo</text><text x="70" y="160" text-anchor="start" font-size="11" font-style="italic" fill="#5C4630">nova base: escolha uma</text><text x="70" y="176" text-anchor="start" font-size="11" font-style="italic" fill="#5C4630">que facilite (aqui, 2)</text><rect x="130" y="193" width="380" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="320" y="211" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Inversão: log_b a = 1 / log_a b</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Mudança de base: divida o log do número pelo log da base antiga, os dois na base nova.</p>`,
            },
            {
              heading: "Exercícios resolvidos",
              body: `Em todos, a ideia é a mesma: escrever o número como potência da base.

a) log₁₀ 1000 → "10 elevado a quanto dá 1000?" → 1000 = 10³ → 3

b) log₅ 5 → 5¹ = 5 → 1

c) log₂ (1/8) → 1/8 = 2⁻³ → −3

d) log₃ 27 → 27 = 3³ → 3

e) log_x x → x¹ = x → 1

f) log₅ (1/25) → 1/25 = 5⁻² → −2

g) log₁₀ 0,0001 → 0,0001 = 10⁻⁴ → −4

h) log₅ ∛25 → ∛25 = 25^(1/3) = (5²)^(1/3) = 5^(2/3) → 2/3`,
            },
            {
              heading: "Usando valores conhecidos",
              body: `Um tipo de questão muito cobrado dá alguns logaritmos e pede outros.

Estratégia: decomponha o número usando 2, 3, 5 e 10 e aplique as propriedades.

Com log 2 = 0,30 e log 3 = 0,48:
• log 6 = log (2 · 3) = 0,30 + 0,48 = 0,78
• log 5 = log (10 / 2) = 1 − 0,30 = 0,70
• log 8 = log 2³ = 3 · 0,30 = 0,90

Com letras: se log₃ x = a e log₃ y = b:
• log₃ (x · y) = a + b
• log₃ (x / y) = a − b
• log₃ x² = 2a

Se log 2 = x e log 3 = y:
• log 24 = log (2³ · 3) = 3x + y
• log (16/27) = log (2⁴ / 3³) = 4x − 3y
• log 5: como 10 = 2 · 5 → 1 = x + log 5 → log 5 = 1 − x`,
            },
            {
              heading: "Equação logarítmica",
              body: `Uma equação logarítmica é uma equação com a incógnita x que pode ser escrita na forma:

log_b x = a, com a ∈ ℝ, b > 0, b ≠ 1 e x > 0

Condição de existência (C.E.)
• O logaritmando precisa ser sempre POSITIVO.
• Se a equação tem vários logaritmos, faça a C.E. de CADA logaritmando.
• Faça a C.E. antes de resolver e confira as raízes no final: raiz que viola a C.E. é descartada.

Duas formas de resolver:
1. Pela definição: log_b A = c → A = b^c
2. Pela igualdade: log_b A = log_b B → A = B (mesma base, respeitando a C.E.)

Exemplo: log(x + 1) + log(x − 1) = 1
• C.E.: x + 1 > 0 e x − 1 > 0 → x > 1
• Propriedade da soma: log[(x + 1)(x − 1)] = 1
• Pela definição (base 10): x² − 1 = 10¹ → x² = 11 → x = ±√11
• −√11 não respeita x > 1 → S = {√11}`,
            },
            {
              heading: "Equações logarítmicas: exercícios resolvidos",
              body: `1a) log₃(x² − x) = log₃(6 − 2x)
• C.E.: x² − x > 0 e 6 − 2x > 0 (x < 3)
• Mesma base → x² − x = 6 − 2x
• x² + x − 6 = 0 → (x + 3)(x − 2) = 0 → x = −3 ou x = 2
• Conferindo cada raiz na C.E. (substitua nos DOIS logaritmandos):
  x = −3 → x² − x = 9 + 3 = 12 > 0 ✓ e 6 − 2x = 6 + 6 = 12 > 0 ✓
  x = 2 → x² − x = 4 − 2 = 2 > 0 ✓ e 6 − 2x = 6 − 4 = 2 > 0 ✓
• As duas raízes servem: S = {−3, 2}

📌 Atenção: x negativo não é proibido! O que precisa ser positivo é o LOGARITMANDO, não o x. Por isso a conferência é feita substituindo o valor.

1b) log₅(x − 1) + log₅ x = log₅(6 − 2x)
• C.E.: x − 1 > 0 (x > 1), x > 0 e 6 − 2x > 0 (x < 3) → 1 < x < 3
• Soma vira produto: log₅[(x − 1) · x] = log₅(6 − 2x)
• (x − 1)x = 6 − 2x → x² + x − 6 = 0 → x = −3 ou x = 2
• −3 não está entre 1 e 3 → S = {2}

Mais um: log₂ x + log₂(x − 2) = 3
• C.E.: x > 0 e x > 2 → x > 2
• log₂[x(x − 2)] = 3 → x(x − 2) = 2³ = 8 → x² − 2x − 8 = 0 → x = 4 ou x = −2
• S = {4}`,
            },
            {
              heading: "Função logarítmica",
              body: `Uma função logarítmica tem a forma:

f(x) = log_b x, com b > 0 e b ≠ 1

• Domínio: x > 0 (só existe logaritmo de número positivo)
• O gráfico sempre passa pelo ponto (1, 0), porque log_b 1 = 0
• A curva se aproxima do eixo y, mas nunca o toca

O comportamento depende da base:
• b > 1 → função CRESCENTE (ex.: f(x) = log₂ x)
• 0 < b < 1 → função DECRESCENTE (ex.: f(x) = log₁/₂ x)

📌 A função logarítmica é a inversa da exponencial: log₂ 8 = 3 porque 2³ = 8.`,
              visual: `<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<rect width="640" height="296" rx="12" fill="#F4EEE1"/>
<text x="160" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">f(x) = log₂ x  (b > 1)</text><text x="160" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#5B7553">CRESCENTE</text><line x1="30" y1="252" x2="298.8" y2="252" stroke="#C9B18C" stroke-width="0.6"/><line x1="30" y1="218" x2="298.8" y2="218" stroke="#C9B18C" stroke-width="0.6"/><line x1="30" y1="184" x2="298.8" y2="184" stroke="#C9B18C" stroke-width="0.6"/><line x1="30" y1="116" x2="298.8" y2="116" stroke="#C9B18C" stroke-width="0.6"/><line x1="30" y1="82" x2="298.8" y2="82" stroke="#C9B18C" stroke-width="0.6"/><line x1="30" y1="48" x2="298.8" y2="48" stroke="#C9B18C" stroke-width="0.6"/><line x1="30" y1="150" x2="305.2" y2="150" stroke="#5C4630" stroke-width="1.5"/><line x1="30" y1="37.80000000000001" x2="30" y2="262.2" stroke="#5C4630" stroke-width="1.5" stroke-dasharray="5 3"/><text x="305.2" y="166" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">x</text><text x="36" y="41.80000000000001" text-anchor="start" font-size="11" font-style="italic" fill="#5C4630">y</text><text x="62" y="166" text-anchor="middle" font-size="10" fill="#5C4630">1</text><text x="94" y="166" text-anchor="middle" font-size="10" fill="#5C4630">2</text><text x="158" y="166" text-anchor="middle" font-size="10" fill="#5C4630">4</text><text x="286" y="166" text-anchor="middle" font-size="10" fill="#5C4630">8</text><path d="M33.8,254.0 L35.1,239.9 L36.4,228.9 L37.7,220.0 L39.0,212.4 L40.2,205.9 L41.5,200.1 L42.8,194.9 L44.1,190.3 L45.4,186.0 L46.6,182.1 L47.9,178.4 L49.2,175.1 L50.5,171.9 L51.8,168.9 L53.0,166.1 L54.3,163.5 L55.6,160.9 L56.9,158.6 L58.2,156.3 L59.4,154.1 L60.7,152.0 L62.0,150.0 L63.3,148.1 L64.6,146.2 L65.8,144.4 L67.1,142.7 L68.4,141.1 L69.7,139.4 L71.0,137.9 L72.2,136.4 L73.5,134.9 L74.8,133.5 L76.1,132.1 L77.4,130.8 L78.6,129.5 L79.9,128.2 L81.2,126.9 L82.5,125.7 L83.8,124.6 L85.0,123.4 L86.3,122.3 L87.6,121.2 L88.9,120.1 L90.2,119.0 L91.4,118.0 L92.7,117.0 L94.0,116.0 L95.3,115.0 L96.6,114.1 L97.8,113.1 L99.1,112.2 L100.4,111.3 L101.7,110.4 L103.0,109.6 L104.2,108.7 L105.5,107.9 L106.8,107.1 L108.1,106.2 L109.4,105.4 L110.6,104.7 L111.9,103.9 L113.2,103.1 L114.5,102.4 L115.8,101.6 L117.0,100.9 L118.3,100.2 L119.6,99.5 L120.9,98.8 L122.2,98.1 L123.4,97.4 L124.7,96.8 L126.0,96.1 L127.3,95.5 L128.6,94.8 L129.8,94.2 L131.1,93.6 L132.4,92.9 L133.7,92.3 L135.0,91.7 L136.2,91.1 L137.5,90.6 L138.8,90.0 L140.1,89.4 L141.4,88.8 L142.6,88.3 L143.9,87.7 L145.2,87.2 L146.5,86.6 L147.8,86.1 L149.0,85.6 L150.3,85.0 L151.6,84.5 L152.9,84.0 L154.2,83.5 L155.4,83.0 L156.7,82.5 L158.0,82.0 L159.3,81.5 L160.6,81.0 L161.8,80.6 L163.1,80.1 L164.4,79.6 L165.7,79.1 L167.0,78.7 L168.2,78.2 L169.5,77.8 L170.8,77.3 L172.1,76.9 L173.4,76.4 L174.6,76.0 L175.9,75.6 L177.2,75.1 L178.5,74.7 L179.8,74.3 L181.0,73.9 L182.3,73.5 L183.6,73.1 L184.9,72.6 L186.2,72.2 L187.4,71.8 L188.7,71.4 L190.0,71.1 L191.3,70.7 L192.6,70.3 L193.8,69.9 L195.1,69.5 L196.4,69.1 L197.7,68.8 L199.0,68.4 L200.2,68.0 L201.5,67.6 L202.8,67.3 L204.1,66.9 L205.4,66.6 L206.6,66.2 L207.9,65.8 L209.2,65.5 L210.5,65.1 L211.8,64.8 L213.0,64.5 L214.3,64.1 L215.6,63.8 L216.9,63.4 L218.2,63.1 L219.4,62.8 L220.7,62.4 L222.0,62.1 L223.3,61.8 L224.6,61.5 L225.8,61.1 L227.1,60.8 L228.4,60.5 L229.7,60.2 L231.0,59.9 L232.2,59.6 L233.5,59.3 L234.8,58.9 L236.1,58.6 L237.4,58.3 L238.6,58.0 L239.9,57.7 L241.2,57.4 L242.5,57.1 L243.8,56.8 L245.0,56.6 L246.3,56.3 L247.6,56.0 L248.9,55.7 L250.2,55.4 L251.4,55.1 L252.7,54.8 L254.0,54.5 L255.3,54.3 L256.6,54.0 L257.8,53.7 L259.1,53.4 L260.4,53.2 L261.7,52.9 L263.0,52.6 L264.2,52.4 L265.5,52.1 L266.8,51.8 L268.1,51.6 L269.4,51.3 L270.6,51.0 L271.9,50.8 L273.2,50.5 L274.5,50.3 L275.8,50.0 L277.0,49.7 L278.3,49.5 L279.6,49.2 L280.9,49.0 L282.2,48.7 L283.4,48.5 L284.7,48.2 L286.0,48.0 L287.3,47.8 L288.6,47.5 L289.8,47.3 L291.1,47.0 L292.4,46.8 L293.7,46.6 L295.0,46.3 L296.2,46.1 L297.5,45.8 L298.8,45.6" fill="none" stroke="#5B7553" stroke-width="2.5"/><circle cx="62" cy="150" r="5" fill="#5B7553" stroke="#F4EEE1" stroke-width="2"/><text x="70" y="142" text-anchor="start" font-size="10.5" font-weight="700" fill="#3E2F20">(1, 0)</text><circle cx="94" cy="116" r="5" fill="#5B7553" stroke="#F4EEE1" stroke-width="2"/><text x="102" y="108" text-anchor="start" font-size="10.5" font-weight="700" fill="#3E2F20">(2, 1)</text><circle cx="158" cy="82" r="5" fill="#5B7553" stroke="#F4EEE1" stroke-width="2"/><text x="166" y="74" text-anchor="start" font-size="10.5" font-weight="700" fill="#3E2F20">(4, 2)</text><line x1="320" y1="14" x2="320" y2="266" stroke="#C9B18C" stroke-dasharray="4 4"/><text x="480" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">f(x) = log₁/₂ x  (0 < b < 1)</text><text x="480" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#A6493A">DECRESCENTE</text><line x1="350" y1="252" x2="618.8" y2="252" stroke="#C9B18C" stroke-width="0.6"/><line x1="350" y1="218" x2="618.8" y2="218" stroke="#C9B18C" stroke-width="0.6"/><line x1="350" y1="184" x2="618.8" y2="184" stroke="#C9B18C" stroke-width="0.6"/><line x1="350" y1="116" x2="618.8" y2="116" stroke="#C9B18C" stroke-width="0.6"/><line x1="350" y1="82" x2="618.8" y2="82" stroke="#C9B18C" stroke-width="0.6"/><line x1="350" y1="48" x2="618.8" y2="48" stroke="#C9B18C" stroke-width="0.6"/><line x1="350" y1="150" x2="625.2" y2="150" stroke="#5C4630" stroke-width="1.5"/><line x1="350" y1="37.80000000000001" x2="350" y2="262.2" stroke="#5C4630" stroke-width="1.5" stroke-dasharray="5 3"/><text x="625.2" y="166" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">x</text><text x="356" y="41.80000000000001" text-anchor="start" font-size="11" font-style="italic" fill="#5C4630">y</text><text x="382" y="166" text-anchor="middle" font-size="10" fill="#5C4630">1</text><text x="414" y="166" text-anchor="middle" font-size="10" fill="#5C4630">2</text><text x="478" y="166" text-anchor="middle" font-size="10" fill="#5C4630">4</text><text x="606" y="166" text-anchor="middle" font-size="10" fill="#5C4630">8</text><path d="M353.8,46.0 L355.1,60.1 L356.4,71.1 L357.7,80.0 L359.0,87.6 L360.2,94.1 L361.5,99.9 L362.8,105.1 L364.1,109.7 L365.4,114.0 L366.6,117.9 L367.9,121.6 L369.2,124.9 L370.5,128.1 L371.8,131.1 L373.0,133.9 L374.3,136.5 L375.6,139.1 L376.9,141.4 L378.2,143.7 L379.4,145.9 L380.7,148.0 L382.0,150.0 L383.3,151.9 L384.6,153.8 L385.8,155.6 L387.1,157.3 L388.4,158.9 L389.7,160.6 L391.0,162.1 L392.2,163.6 L393.5,165.1 L394.8,166.5 L396.1,167.9 L397.4,169.2 L398.6,170.5 L399.9,171.8 L401.2,173.1 L402.5,174.3 L403.8,175.4 L405.0,176.6 L406.3,177.7 L407.6,178.8 L408.9,179.9 L410.2,181.0 L411.4,182.0 L412.7,183.0 L414.0,184.0 L415.3,185.0 L416.6,185.9 L417.8,186.9 L419.1,187.8 L420.4,188.7 L421.7,189.6 L423.0,190.4 L424.2,191.3 L425.5,192.1 L426.8,192.9 L428.1,193.8 L429.4,194.6 L430.6,195.3 L431.9,196.1 L433.2,196.9 L434.5,197.6 L435.8,198.4 L437.0,199.1 L438.3,199.8 L439.6,200.5 L440.9,201.2 L442.2,201.9 L443.4,202.6 L444.7,203.2 L446.0,203.9 L447.3,204.5 L448.6,205.2 L449.8,205.8 L451.1,206.4 L452.4,207.1 L453.7,207.7 L455.0,208.3 L456.2,208.9 L457.5,209.4 L458.8,210.0 L460.1,210.6 L461.4,211.2 L462.6,211.7 L463.9,212.3 L465.2,212.8 L466.5,213.4 L467.8,213.9 L469.0,214.4 L470.3,215.0 L471.6,215.5 L472.9,216.0 L474.2,216.5 L475.4,217.0 L476.7,217.5 L478.0,218.0 L479.3,218.5 L480.6,219.0 L481.8,219.4 L483.1,219.9 L484.4,220.4 L485.7,220.9 L487.0,221.3 L488.2,221.8 L489.5,222.2 L490.8,222.7 L492.1,223.1 L493.4,223.6 L494.6,224.0 L495.9,224.4 L497.2,224.9 L498.5,225.3 L499.8,225.7 L501.0,226.1 L502.3,226.5 L503.6,226.9 L504.9,227.4 L506.2,227.8 L507.4,228.2 L508.7,228.6 L510.0,228.9 L511.3,229.3 L512.6,229.7 L513.8,230.1 L515.1,230.5 L516.4,230.9 L517.7,231.2 L519.0,231.6 L520.2,232.0 L521.5,232.4 L522.8,232.7 L524.1,233.1 L525.4,233.4 L526.6,233.8 L527.9,234.2 L529.2,234.5 L530.5,234.9 L531.8,235.2 L533.0,235.5 L534.3,235.9 L535.6,236.2 L536.9,236.6 L538.2,236.9 L539.4,237.2 L540.7,237.6 L542.0,237.9 L543.3,238.2 L544.6,238.5 L545.8,238.9 L547.1,239.2 L548.4,239.5 L549.7,239.8 L551.0,240.1 L552.2,240.4 L553.5,240.7 L554.8,241.1 L556.1,241.4 L557.4,241.7 L558.6,242.0 L559.9,242.3 L561.2,242.6 L562.5,242.9 L563.8,243.2 L565.0,243.4 L566.3,243.7 L567.6,244.0 L568.9,244.3 L570.2,244.6 L571.4,244.9 L572.7,245.2 L574.0,245.5 L575.3,245.7 L576.6,246.0 L577.8,246.3 L579.1,246.6 L580.4,246.8 L581.7,247.1 L583.0,247.4 L584.2,247.6 L585.5,247.9 L586.8,248.2 L588.1,248.4 L589.4,248.7 L590.6,249.0 L591.9,249.2 L593.2,249.5 L594.5,249.7 L595.8,250.0 L597.0,250.3 L598.3,250.5 L599.6,250.8 L600.9,251.0 L602.2,251.3 L603.4,251.5 L604.7,251.8 L606.0,252.0 L607.3,252.2 L608.6,252.5 L609.8,252.7 L611.1,253.0 L612.4,253.2 L613.7,253.4 L615.0,253.7 L616.2,253.9 L617.5,254.2 L618.8,254.4" fill="none" stroke="#A6493A" stroke-width="2.5"/><circle cx="382" cy="150" r="5" fill="#A6493A" stroke="#F4EEE1" stroke-width="2"/><text x="390" y="142" text-anchor="start" font-size="10.5" font-weight="700" fill="#3E2F20">(1, 0)</text><circle cx="414" cy="184" r="5" fill="#A6493A" stroke="#F4EEE1" stroke-width="2"/><text x="422" y="200" text-anchor="start" font-size="10.5" font-weight="700" fill="#3E2F20">(2, −1)</text><circle cx="478" cy="218" r="5" fill="#A6493A" stroke="#F4EEE1" stroke-width="2"/><text x="486" y="234" text-anchor="start" font-size="10.5" font-weight="700" fill="#3E2F20">(4, −2)</text><text x="320" y="284" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">as duas passam por (1, 0) · só existem para x > 0 (a curva nunca toca o eixo y)</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">A base decide o formato: maior que 1, a curva sobe; entre 0 e 1, a curva desce.</p>`,
            },
            {
              heading: "Aplicação: empréstimo (exercício 7)",
              body: `Uma pessoa precisa de um empréstimo de R$ 5.000,00 e pode pagar no máximo R$ 400,00 por mês. A prestação P depende do número de prestações n:

P = (5000 · 1,013ⁿ · 0,013) / (1,013ⁿ − 1)

Dados: log 1,013 ≈ 0,005 · log 400 ≈ 2,602 · log 335 ≈ 2,525

Qual o menor número de parcelas para P ≤ 400?

Resolução:
• 5000 · 0,013 = 65 → 65 · 1,013ⁿ / (1,013ⁿ − 1) ≤ 400
• 65 · 1,013ⁿ ≤ 400 · 1,013ⁿ − 400
• 400 ≤ 335 · 1,013ⁿ → 1,013ⁿ ≥ 400 / 335
• Aplicando log dos dois lados: n · log 1,013 ≥ log 400 − log 335
• n · 0,005 ≥ 2,602 − 2,525 = 0,077
• n ≥ 0,077 / 0,005 = 15,4

Como n precisa ser inteiro e maior que 15,4: n = 16 (alternativa D).

📌 O logaritmo serve para "trazer o expoente para baixo" quando a incógnita está no expoente.`,
            },
            {
              heading: "Mudança de base com ln (exercício 8)",
              body: `ln é o logaritmo natural (base e ≈ 2,718). A mudança de base funciona igual:

log_b a = ln a / ln b

Tabela dada pela calculadora:`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">x</th><th class="text-left py-2 pr-4 font-display text-ochre">1</th><th class="text-left py-2 pr-4 font-display text-ochre">2</th><th class="text-left py-2 pr-4 font-display text-ochre">3</th><th class="text-left py-2 pr-4 font-display text-ochre">4</th><th class="text-left py-2 pr-4 font-display text-ochre">5</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">ln x</td><td class="py-1.5 pr-4 text-espresso">0</td><td class="py-1.5 pr-4 text-espresso">0,69</td><td class="py-1.5 pr-4 text-espresso">1,10</td><td class="py-1.5 pr-4 text-espresso">1,38</td><td class="py-1.5 pr-4 text-espresso">1,61</td></tr></tbody></table></div>`,
            },
            {
              heading: "Exercício 8 resolvido",
              body: `a) log₂ 3 = ln 3 / ln 2 ≈ 1,10 / 0,69 ≈ 1,59

b) log₁₀ 2 = ln 2 / ln 10
• A tabela não tem ln 10, mas 10 = 2 · 5
• ln 10 = ln (2 · 5) = ln 2 + ln 5 ≈ 0,69 + 1,61 = 2,30
• log₁₀ 2 ≈ 0,69 / 2,30 = 0,30

📌 Quando faltar um valor na tabela, decomponha o número em fatores que estão nela: ln(ab) = ln a + ln b.`,
            },
            {
              heading: "Erros comuns",
              body: `• log (a + b) NÃO é log a + log b → não existe propriedade para soma.
• log (a · b) NÃO é log a · log b → o certo é log a + log b.
• log (a / b) NÃO é log a / log b → o certo é log a − log b.
• Logaritmo de zero ou de número negativo não existe.`,
              visual: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="m8_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="m8_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="m8_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="m8_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="m8_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="260" rx="12" fill="#F4EEE1"/>
<rect x="16" y="14" width="296" height="108" rx="12" fill="none" stroke="#C9B18C" stroke-width="1.3"/><circle cx="40" cy="42" r="11" fill="#A6493A"/><path d="M35,37 l10,10 M45,37 l-10,10" stroke="#F4EEE1" stroke-width="2.2"/><text x="60" y="47" text-anchor="start" font-size="12.5" font-weight="700" fill="#A6493A">log (a + b) = log a + log b</text><line x1="60" y1="43" x2="238.2" y2="43" stroke="#A6493A" stroke-width="1.5"/><circle cx="40" cy="82" r="11" fill="#5B7553"/><path d="M34,82 l4,5 l8,-9" fill="none" stroke="#F4EEE1" stroke-width="2.2"/><text x="60" y="87" text-anchor="start" font-size="12.5" font-weight="700" fill="#3E2F20">Não existe propriedade para a SOMA</text><text x="60" y="106" text-anchor="start" font-size="10.5" font-style="italic" fill="#5C4630">calcule a + b primeiro</text><rect x="328" y="14" width="296" height="108" rx="12" fill="none" stroke="#C9B18C" stroke-width="1.3"/><circle cx="352" cy="42" r="11" fill="#A6493A"/><path d="M347,37 l10,10 M357,37 l-10,10" stroke="#F4EEE1" stroke-width="2.2"/><text x="372" y="47" text-anchor="start" font-size="12.5" font-weight="700" fill="#A6493A">log (a · b) = log a · log b</text><line x1="372" y1="43" x2="550.2" y2="43" stroke="#A6493A" stroke-width="1.5"/><circle cx="352" cy="82" r="11" fill="#5B7553"/><path d="M346,82 l4,5 l8,-9" fill="none" stroke="#F4EEE1" stroke-width="2.2"/><text x="372" y="87" text-anchor="start" font-size="12.5" font-weight="700" fill="#3E2F20">log (a · b) = log a + log b</text><text x="372" y="106" text-anchor="start" font-size="10.5" font-style="italic" fill="#5C4630">produto vira SOMA</text><rect x="16" y="134" width="296" height="108" rx="12" fill="none" stroke="#C9B18C" stroke-width="1.3"/><circle cx="40" cy="162" r="11" fill="#A6493A"/><path d="M35,157 l10,10 M45,157 l-10,10" stroke="#F4EEE1" stroke-width="2.2"/><text x="60" y="167" text-anchor="start" font-size="12.5" font-weight="700" fill="#A6493A">log (a / b) = log a / log b</text><line x1="60" y1="163" x2="238.2" y2="163" stroke="#A6493A" stroke-width="1.5"/><circle cx="40" cy="202" r="11" fill="#5B7553"/><path d="M34,202 l4,5 l8,-9" fill="none" stroke="#F4EEE1" stroke-width="2.2"/><text x="60" y="207" text-anchor="start" font-size="12.5" font-weight="700" fill="#3E2F20">log (a / b) = log a − log b</text><text x="60" y="226" text-anchor="start" font-size="10.5" font-style="italic" fill="#5C4630">divisão vira SUBTRAÇÃO</text><rect x="328" y="134" width="296" height="108" rx="12" fill="none" stroke="#C9B18C" stroke-width="1.3"/><circle cx="352" cy="162" r="11" fill="#A6493A"/><path d="M347,157 l10,10 M357,157 l-10,10" stroke="#F4EEE1" stroke-width="2.2"/><text x="372" y="167" text-anchor="start" font-size="12.5" font-weight="700" fill="#A6493A">log₂ (−8) = −3</text><line x1="372" y1="163" x2="464.4" y2="163" stroke="#A6493A" stroke-width="1.5"/><circle cx="352" cy="202" r="11" fill="#5B7553"/><path d="M346,202 l4,5 l8,-9" fill="none" stroke="#F4EEE1" stroke-width="2.2"/><text x="372" y="207" text-anchor="start" font-size="12.5" font-weight="700" fill="#3E2F20">log de número ≤ 0 não existe</text><text x="372" y="226" text-anchor="start" font-size="10.5" font-style="italic" fill="#5C4630">o logaritmando tem que ser > 0</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Os quatro erros que mais derrubam pontos em prova.</p>`,
            },
          ],
          quiz: [
            { q: "Qual é o valor de log₂ 32?", options: ["4","5","6","16"], correct: 1 },
            { q: "Qual é o valor de log₃ 81?", options: ["3","4","9","27"], correct: 1 },
            { q: "Qual é o valor de log₅ (1/25)?", options: ["−2","2","−1/2","0"], correct: 0 },
            { q: "Qual é o valor de log 0,001?", options: ["3","−2","−3","0,3"], correct: 2 },
            { q: "Qual é o valor de log₄ 8?", options: ["2","1/2","3/2","2/3"], correct: 2 },
            { q: "Qual é o valor de log₉ 27?", options: ["3","2/3","3/2","1/3"], correct: 2 },
            { q: "Se log₂ x = 5, então x vale:", options: ["10","25","32","64"], correct: 2 },
            { q: "Dados log 2 = 0,30 e log 3 = 0,48, o valor de log 6 é:", options: ["0,144","0,18","0,78","1,08"], correct: 2 },
            { q: "Dados log 2 = 0,30 e log 3 = 0,48, o valor de log 12 é:", options: ["0,78","1,08","1,26","0,96"], correct: 1 },
            { q: "Dado log 2 = 0,30, o valor de log 5 é:", options: ["0,50","0,60","0,70","1,50"], correct: 2 },
            { q: "Dados log 2 = 0,30 e log 3 = 0,48, usando mudança de base, log₂ 3 vale:", options: ["0,625","1,6","0,18","0,78"], correct: 1 },
            { q: "Se log₃ x = a e log₃ y = b, então log₃ (x² / y) é igual a:", options: ["2a − b","a² − b","2a + b","2(a − b)"], correct: 0 },
            { q: "Se log 2 = x e log 3 = y, então log 24 é igual a:", options: ["3x + y","x + 3y","8x + y","3xy"], correct: 0 },
            { q: "Se log 2 = x e log 3 = y, então log (16/27) é igual a:", options: ["4x + 3y","4x − 3y","16x − 27y","x/y"], correct: 1 },
            { q: "Pela inversão de base, se log₂ 5 = k, então log₅ 2 vale:", options: ["k","−k","1/k","2k"], correct: 2 },
            { q: "O valor de 2^(log₂ 7) é:", options: ["2","7","14","log₂ 7"], correct: 1 },
            { q: "Qual é o valor de log₃ ∛9?", options: ["3","1/3","2/3","3/2"], correct: 2 },
            { q: "Para que log₍ₓ₋₂₎ 5 exista, x deve satisfazer:", options: ["x > 2","x > 2 e x ≠ 3","x ≠ 2","x > 0 e x ≠ 1"], correct: 1 },
            { q: "Calcular log₅ 125 é o mesmo que perguntar:", options: ["\"125 elevado a quanto dá 5?\"","\"5 elevado a quanto dá 125?\"","\"5 vezes quanto dá 125?\"","\"125 dividido por 5 dá quanto?\""], correct: 1 },
            { q: "Qual é o valor de log₇ 1?", options: ["7","1","0","Não existe"], correct: 2 },
            { q: "Qual é o valor de log₆ 6?", options: ["0","1","6","36"], correct: 1 },
            { q: "Qual é o valor de log₂ 2¹⁰?", options: ["2","10","20","1024"], correct: 1 },
            { q: "Qual das igualdades é VERDADEIRA?", options: ["log (a + b) = log a + log b","log (a · b) = log a · log b","log (a · b) = log a + log b","log (a / b) = log a / log b"], correct: 2 },
            { q: "Qual é a condição de existência de log(x − 3)?", options: ["x > 0","x > 3","x ≥ 3","x ≠ 3"], correct: 1 },
            { q: "Resolvendo log₃ x = 4, obtemos:", options: ["x = 12","x = 64","x = 81","x = 7"], correct: 2 },
            { q: "Resolvendo log₂(x + 1) = 3, obtemos:", options: ["x = 5","x = 7","x = 8","x = 9"], correct: 1 },
            { q: "O conjunto solução de log(x + 1) + log(x − 1) = 1 é:", options: ["{−√11, √11}","{√11}","{11}","{10}"], correct: 1 },
            { q: "Em log(x + 1) + log(x − 1) = 1, por que −√11 é descartado?", options: ["Porque é irracional","Porque não satisfaz a condição de existência x > 1","Porque a base é 10","Porque log de 11 não existe"], correct: 1 },
            { q: "Se log_b A = log_b B, com A > 0 e B > 0, então:", options: ["A = B","A = −B","A · B = 1","A + B = b"], correct: 0 },
            { q: "O conjunto solução de log₅(x − 1) + log₅ x = log₅(6 − 2x) é:", options: ["{−3}","{2}","{−3, 2}","{3}"], correct: 1 },
            { q: "Em log₅(x − 1) + log₅ x = log₅(6 − 2x), a condição de existência é:", options: ["x > 0","x > 1","1 < x < 3","x < 3"], correct: 2 },
            { q: "O conjunto solução de log₂ x + log₂(x − 2) = 3 é:", options: ["{−2, 4}","{4}","{−2}","{8}"], correct: 1 },
            { q: "A função f(x) = log₂ x é:", options: ["Crescente","Decrescente","Constante","Não existe"], correct: 0 },
            { q: "A função f(x) = log₁/₂ x é:", options: ["Crescente","Decrescente","Constante","Definida para x negativo"], correct: 1 },
            { q: "A função f(x) = log₀,₃ x é crescente ou decrescente?", options: ["Crescente, porque 0,3 > 0","Decrescente, porque 0 < 0,3 < 1","Constante","Não é função logarítmica"], correct: 1 },
            { q: "O gráfico de qualquer função f(x) = log_b x passa pelo ponto:", options: ["(0, 1)","(1, 0)","(0, 0)","(1, 1)"], correct: 1 },
            { q: "O domínio da função f(x) = log_b x é:", options: ["Todos os reais","x > 0","x ≥ 0","x < 0"], correct: 1 },
            { q: "Para f(x) = log₃ x, o valor de f(9) é:", options: ["3","2","27","1/2"], correct: 1 },
            { q: "No exercício do empréstimo, chegou-se a n ≥ 15,4. O menor número de parcelas é:", options: ["15","15,4","16","17"], correct: 2 },
            { q: "Usando ln 2 ≈ 0,69 e ln 3 ≈ 1,10, o valor aproximado de log₂ 3 é:", options: ["0,63","1,59","1,79","0,41"], correct: 1 },
            { q: "Usando ln 2 ≈ 0,69 e ln 5 ≈ 1,61, o valor de ln 10 é aproximadamente:", options: ["1,11","2,30","0,92","3,22"], correct: 1 },
          ],
        },
      ],
    },
);
