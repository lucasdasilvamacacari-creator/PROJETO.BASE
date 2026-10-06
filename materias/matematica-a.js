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
            { q: "Uma função relaciona cada elemento do conjunto de partida a:", options: ["Um único elemento do conjunto de chegada", "Vários elementos do conjunto de chegada", "Nenhum elemento do conjunto de chegada", "Apenas elementos pares"], correct: 0 },
            { q: "Na função y = x + 2, qual é o valor de y quando x = 2?", options: ["4", "2", "6", "0"], correct: 0 },
            { q: "Como se representa uma função de A para B?", options: ["f: A → B", "f: B → A", "A = B", "f(A) = f(B)"], correct: 0 },
            { q: "O que é a raiz de uma função?", options: ["O valor de x para o qual f(x) = 0", "O valor de y quando x = 0", "O maior valor de y", "O menor valor de x"], correct: 0 },
            { q: "Na função f(x) = 2x − 6, qual é a raiz?", options: ["x = 3", "x = 6", "x = -3", "x = 2"], correct: 0 },
            { q: "O domínio de uma função é formado por:", options: ["Os valores que entram na função (valores de x)", "Os valores que saem da função (valores de y)", "Apenas os valores positivos", "O conjunto de chegada inteiro"], correct: 0 },
            { q: "A imagem de uma função é:", options: ["O conjunto dos valores que realmente são obtidos pela função", "O mesmo que o contradomínio", "Sempre igual ao domínio", "Um conjunto vazio"], correct: 0 },
            { q: "Qual é a fórmula da taxa de variação?", options: ["tg α = Δy / Δx", "tg α = Δx / Δy", "tg α = x + y", "tg α = x · y"], correct: 0 },
            { q: "Uma função é crescente quando:", options: ["0° < α < 90°", "90° < α < 180°", "α = 90°", "α = 0°"], correct: 0 },
            { q: "Uma função é decrescente quando:", options: ["90° < α < 180°", "0° < α < 90°", "α = 0°", "α = 180°"], correct: 0 },
          ],
          extraQuizLabel: "Exercícios extras",
          extraQuizHeading: "Treino com valores para calcular, no estilo de prova",
          extraQuiz: [
            { q: "Seja f(x) = x + 5. Qual é o valor de f(3)?", options: ["8", "15", "2", "5"], correct: 0 },
            { q: "Seja f(x) = 3x. Qual é a raiz dessa função?", options: ["x = 0", "x = 3", "x = 1", "x = -3"], correct: 0 },
            { q: "Seja f(x) = x − 4. Qual é a raiz dessa função?", options: ["x = 4", "x = -4", "x = 0", "x = 1"], correct: 0 },
            { q: "Seja f(x) = 5x − 10. Qual é a raiz dessa função?", options: ["x = 2", "x = 10", "x = 5", "x = -2"], correct: 0 },
            { q: "Considere A = {2, 3, 4} e a função y = x + 1. Qual é a imagem de f?", options: ["{3, 4, 5}", "{2, 3, 4}", "{1, 2, 3}", "{4, 5, 6}"], correct: 0 },
            { q: "Considere os pontos A = (1,2) e B = (4,8). Qual é a taxa de variação (Δy/Δx) entre eles?", options: ["2", "3", "6", "1"], correct: 0 },
            { q: "Considere os pontos A = (0,1) e B = (3,10). Qual é a taxa de variação entre eles?", options: ["3", "9", "1", "10"], correct: 0 },
            { q: "Se uma função possui taxa de variação positiva (Δy/Δx > 0), ela é:", options: ["Crescente", "Decrescente", "Constante", "Indefinida"], correct: 0 },
            { q: "Se uma função possui taxa de variação negativa (Δy/Δx < 0), ela é:", options: ["Decrescente", "Crescente", "Constante", "Indefinida"], correct: 0 },
            { q: "Considere os pontos A = (2,5) e B = (6,5). Qual é a taxa de variação entre eles?", options: ["0", "5", "4", "1"], correct: 0 },
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
            { q: "A função quadrática é uma função do:", options: ["2º grau", "1º grau", "3º grau", "grau zero"], correct: 0 },
            { q: "Qual é a fórmula geral da função quadrática?", options: ["f(x) = ax² + bx + c", "f(x) = ax + b", "f(x) = a/x + b", "f(x) = ax³ + b"], correct: 0 },
            { q: "Qual condição é obrigatória para que a função seja quadrática?", options: ["a ≠ 0", "b ≠ 0", "c ≠ 0", "a = 0"], correct: 0 },
            { q: "O que o coeficiente 'a' determina?", options: ["A abertura e o sentido da parábola", "O ponto onde ela corta o eixo y", "Apenas o eixo de simetria", "A raiz da função"], correct: 0 },
            { q: "O que o coeficiente 'c' representa?", options: ["O ponto onde a parábola corta o eixo y", "A abertura da parábola", "O vértice da parábola", "O eixo de simetria"], correct: 0 },
            { q: "Se a > 0, a parábola é:", options: ["Voltada para cima, com ponto mínimo", "Voltada para baixo, com ponto máximo", "Uma reta", "Sempre decrescente"], correct: 0 },
            { q: "Se a < 0, a parábola é:", options: ["Voltada para baixo, com ponto máximo", "Voltada para cima, com ponto mínimo", "Sempre constante", "Sempre crescente"], correct: 0 },
            { q: "As raízes de uma função quadrática são os valores de x em que:", options: ["f(x) = 0", "f(x) = 1", "x = 0", "a = 0"], correct: 0 },
            { q: "O eixo de simetria de uma parábola:", options: ["Divide a parábola em duas partes iguais e passa pelo vértice", "Nunca passa pelo vértice", "É sempre igual a zero", "Só existe se a < 0"], correct: 0 },
            { q: "Se a parábola abre para cima, a imagem da função é:", options: ["y ≥ yᵥ (valor de y do vértice)", "y ≤ yᵥ", "Todos os números reais", "Apenas números positivos"], correct: 0 },
          ],
          extraQuizLabel: "Exercícios extras",
          extraQuizHeading: "Treino com valores para calcular, no estilo de prova",
          extraQuiz: [
            { q: "Considere f(x) = x² − 5x + 6. Quais são as raízes dessa função?", options: ["x = 2 e x = 3", "x = 1 e x = 6", "x = -2 e x = -3", "x = 5 e x = 6"], correct: 0 },
            { q: "Considere f(x) = x² − 6x + 8. Quais são as raízes dessa função?", options: ["x = 2 e x = 4", "x = 1 e x = 8", "x = -2 e x = -4", "x = 3 e x = 5"], correct: 0 },
            { q: "Considere f(x) = x² − 4. Quais são as raízes dessa função?", options: ["x = 2 e x = -2", "x = 4 e x = -4", "x = 0 e x = 4", "x = 1 e x = -1"], correct: 0 },
            { q: "Considere f(x) = x² − 2x + 1. Qual é a raiz (dupla) dessa função?", options: ["x = 1", "x = -1", "x = 2", "x = 0"], correct: 0 },
            { q: "Para f(x) = x² − 5x + 6, qual é o eixo de simetria?", options: ["x = 2,5", "x = 5", "x = 6", "x = 1"], correct: 0 },
            { q: "Para f(x) = x² − 6x + 8, qual é o eixo de simetria?", options: ["x = 3", "x = 6", "x = 8", "x = 2"], correct: 0 },
            { q: "Para f(x) = x² − 6x + 8, qual é o vértice da parábola?", options: ["(3, -1)", "(3, 1)", "(2, 0)", "(4, 0)"], correct: 0 },
            { q: "Para f(x) = x² − 4x, qual é o valor de f(0)?", options: ["0", "4", "-4", "1"], correct: 0 },
            { q: "Para f(x) = 2x² − 8, qual é o valor de f(2)?", options: ["0", "8", "-8", "4"], correct: 0 },
            { q: "Considere f(x) = x² − 9. Qual é o valor do coeficiente 'c' e o que ele representa?", options: ["c = -9, o ponto onde a parábola corta o eixo y", "c = 9, o vértice da parábola", "c = -9, a raiz da função", "c = 1, o coeficiente 'a'"], correct: 0 },
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
          title: "Logaritmos",
          sections: [
            {
              heading: "Definição",
              body: `O logaritmo responde à pergunta: "a que expoente devo elevar a base para obter o número?"

log_b a = x  ⟺  b^x = a

• a → logaritmando
• b → base
• x → logaritmo

Condições de existência:
• a > 0 (logaritmando positivo)
• b > 0 e b ≠ 1 (base positiva e diferente de 1)

Exemplo: log₂ 8 = 3, porque 2³ = 8.`,
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
              heading: "Propriedades",
              body: `Consequências da definição:
• log_b 1 = 0 (porque b⁰ = 1)
• log_b b = 1 (porque b¹ = b)
• log_b bⁿ = n
• b^(log_b a) = a

Propriedades operatórias:
• Produto: log_b (a · c) = log_b a + log_b c
• Quociente: log_b (a / c) = log_b a − log_b c
• Potência: log_b aⁿ = n · log_b a
• Inversão de base: log_b a = 1 / log_a b

Dica: produto vira soma, divisão vira subtração e o expoente "desce" multiplicando.`,
            },
            {
              heading: "Mudança de base",
              body: `Para trocar a base de um logaritmo:

log_b a = log_c a / log_c b

Exemplo: log₂ 3 = log 3 / log 2

OBS.: quando a base não aparece escrita, ela é 10.
log 100 = log₁₀ 100 = 2`,
            },
            {
              heading: "Exercícios resolvidos",
              body: `Estratégia: escreva o logaritmando como potência da base.

a) log₁₀ 1000 = log₁₀ 10³ = 3 · log₁₀ 10 = 3 · 1 = 3

b) log₅ 5 = 1

c) log₂ (1/8) = log₂ 2⁻³ = −3 · log₂ 2 = −3

d) log₃ 27 = log₃ 3³ = 3 · log₃ 3 = 3

e) log_x x = 1, porque x¹ = x

f) log₅ (1/25) = log₅ 5⁻² = −2

g) log₁₀ 0,0001 = log₁₀ 10⁻⁴ = −4 · log₁₀ 10 = −4

h) log₅ ∛25 = log₅ 25^(1/3) = log₅ 5^(2/3) = 2/3`,
            },
            {
              heading: "Usando valores conhecidos",
              body: `Um tipo de questão muito cobrado dá alguns logaritmos e pede outros, usando as propriedades.

Se log₃ x = a e log₃ y = b, então:
• log₃ (x · y) = log₃ x + log₃ y = a + b
• log₃ (x / y) = log₃ x − log₃ y = a − b
• log₃ x² = 2 · log₃ x = 2a

Com log 2 = 0,30 e log 3 = 0,48:
• log 6 = log (2 · 3) = 0,30 + 0,48 = 0,78
• log 5 = log (10 / 2) = 1 − 0,30 = 0,70
• log 8 = log 2³ = 3 · 0,30 = 0,90

Agora com letras: se log 2 = x e log 3 = y:
• log 24 = log (2³ · 3) = 3 log 2 + log 3 = 3x + y
• log (16/27) = log (2⁴ / 3³) = 4 log 2 − 3 log 3 = 4x − 3y
• log 5: como 10 = 2 · 5, log 10 = log 2 + log 5 → 1 = x + log 5 → log 5 = 1 − x`,
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
          ],
        },
      ],
    },
);
