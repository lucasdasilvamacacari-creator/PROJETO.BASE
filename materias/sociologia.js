window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "sociologia",
      name: "Sociologia",
      emoji: "🧑‍🤝‍🧑",
      contents: [
        {
          id: "max-weber",
          title: "Max Weber",
          sections: [
            {
              heading: "1. Max Weber",
              body: `Livros:
A Ética Protestante e o Espírito do Capitalismo
Economia e Sociedade

Weber busca compreender a sociedade a partir das ações do indivíduo.
→ Assim, define o conceito de ação social.

Ação social é toda ação que acontece na sociedade e pode ser sentida (significado) e surtir em relação aos outros.

Tipos ideais de ação social:
1. Ação tradicional → Ocorre em função de costumes (tradições).
2. Ação afetiva → Ocorre em função das emoções (afetos).
3. Ação racional → Ocorre em função de planejamentos (cálculos).

Ação racional:
A) Ação racional com relação a fins → Objetivo
B) Ação racional com relação a valores → Ética`,
              visual: `
<div class="grid grid-cols-3 gap-2.5">
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Tradicional</p>
    <p class="text-[11px] text-bark/70">Costumes</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">Afetiva</p>
    <p class="text-[11px] text-bark/70">Emoções</p>
  </div>
  <div class="rounded-xl bg-espresso text-cream p-3 text-center">
    <p class="font-display text-sm mb-1">Racional</p>
    <p class="text-[11px] opacity-80">Planejamento</p>
  </div>
</div>
<div class="grid grid-cols-2 gap-2.5 mt-2.5 max-w-xs mx-auto">
  <div class="rounded-lg bg-beige border border-sand px-3 py-2 text-center">
    <p class="text-xs font-semibold text-bark">Com relação a fins</p>
    <p class="text-[10px] text-bark/60">Objetivo</p>
  </div>
  <div class="rounded-lg bg-beige border border-sand px-3 py-2 text-center">
    <p class="text-xs font-semibold text-bark">Com relação a valores</p>
    <p class="text-[10px] text-bark/60">Ética</p>
  </div>
</div>`,
            },
            {
              heading: "2. Sociedade moderna",
              body: `Segundo Weber, a sociedade moderna é marcada por um processo de racionalização.
→ Caracterizada pela burocracia.

Burocracia: estrutura técnico-administrativa, racionalmente desenvolvida, que visa o máximo da eficiência.

Características:
Regras (regimento)
Hierarquia
Cargos e funções
Separação entre vida privada e profissional`,
              visual: `
<div class="grid grid-cols-2 gap-2.5">
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="text-sm font-semibold text-bark">Regras</p>
    <p class="text-[11px] text-bark/60">Regimento</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="text-sm font-semibold text-bark">Hierarquia</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="text-sm font-semibold text-bark">Cargos e funções</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="text-sm font-semibold text-bark">Separação vida privada / profissional</p>
  </div>
</div>`,
            },
          ],
          quiz: [
            { q: "Quais livros de Max Weber são citados no conteúdo?", options: ["A Ética Protestante e o Espírito do Capitalismo, e Economia e Sociedade", "O Capital e A Ideologia Alemã", "Da Divisão do Trabalho Social e As Regras do Método Sociológico", "O Suicídio e As Formas Elementares da Vida Religiosa"], correct: 0 },
            { q: "Weber busca compreender a sociedade a partir de quê?", options: ["Das ações do indivíduo", "Apenas das estruturas econômicas", "Apenas das instituições religiosas", "Apenas do Estado"], correct: 0 },
            { q: "O que é 'ação social', segundo Weber?", options: ["Toda ação que acontece na sociedade, tem um significado e pode se orientar em relação aos outros", "Qualquer ação isolada, sem relação com outras pessoas", "Apenas ações do governo", "Apenas ações econômicas"], correct: 0 },
            { q: "A ação tradicional ocorre em função de quê?", options: ["Costumes (tradições)", "Emoções", "Planejamentos e cálculos", "Leis escritas"], correct: 0 },
            { q: "A ação afetiva ocorre em função de quê?", options: ["Emoções (afetos)", "Costumes", "Cálculos racionais", "Hierarquia burocrática"], correct: 0 },
            { q: "A ação racional ocorre em função de quê?", options: ["Planejamentos (cálculos)", "Emoções", "Apenas tradições", "Acaso"], correct: 0 },
            { q: "A ação racional com relação a fins está associada a quê?", options: ["Um objetivo", "Uma ética", "Um costume", "Uma emoção"], correct: 0 },
            { q: "A ação racional com relação a valores está associada a quê?", options: ["Uma ética", "Um objetivo apenas", "Um costume", "Uma emoção"], correct: 0 },
            { q: "Segundo Weber, a sociedade moderna é marcada por qual processo?", options: ["Racionalização", "Sacralização", "Tradicionalização", "Emocionalização"], correct: 0 },
            { q: "O que é burocracia, segundo o conteúdo?", options: ["Uma estrutura técnico-administrativa, racionalmente desenvolvida, que visa o máximo de eficiência", "Um sistema baseado apenas em tradições", "Uma forma de governo democrático direto", "Um tipo de ação afetiva"], correct: 0 },
            { q: "Quais são as características da burocracia citadas no conteúdo?", options: ["Regras, hierarquia, cargos e funções, e separação entre vida privada e profissional", "Apenas hierarquia e tradição", "Apenas emoção e costume", "Apenas cargos hereditários"], correct: 0 },
          ],
        },
        {
          id: "trabalho-e-producao",
          title: "Trabalho e Produção (Marx)",
          sections: [
            {
              heading: "Contexto do surgimento",
              body: `A Sociologia surge como ciência em um cenário marcado pelo desenvolvimento e consolidação do capitalismo, que produziu profundas transformações na organização do trabalho.

Por causa desse contexto, a temática do trabalho ocupa posição de destaque no pensamento sociológico. Os três clássicos da Sociologia dedicaram-se ao tema:

• Karl Marx
• Max Weber
• Émile Durkheim`,
            },
            {
              heading: "O trabalho em Karl Marx",
              body: `A questão do trabalho é central no pensamento de Marx.

Definição de trabalho:
Atividade que visa solucionar as necessidades humanas e, ao mesmo tempo, gera transformação da natureza.

Diferença entre trabalho humano e trabalho animal:
• Trabalho humano — CONSCIENTE (permite aprimorar técnicas e tecnologia)
• Trabalho animal — REPETITIVO (sem evolução técnica)

Essa consciência é o que faz do trabalho uma atividade propriamente humana.`,
            },
            {
              heading: "Luta de classes",
              body: `Para Marx, no capitalismo o trabalhador teria se tornado uma mercadoria — sua força de trabalho é comprada e vendida como qualquer outra.

Daí nasce a luta de classes, o antagonismo entre dois grupos sociais:

• BURGUESIA → possui os meios de produção (fábricas, terras, máquinas, matéria-prima)
• PROLETARIADO → vende a força de trabalho em troca de salário

A ilustração abaixo resume essa oposição e aponta os dois conceitos que explicam a exploração.`,
              visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <rect x="0" y="0" width="640" height="300" rx="12" fill="#F4EEE1"/>
  <text x="320" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">LUTA DE CLASSES — Karl Marx</text>

  <polygon points="320,60 180,240 460,240" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/>
  <text x="320" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">CAPITALISMO</text>

  <rect x="60" y="110" width="190" height="70" rx="10" fill="#A8763E" stroke="#5C4630" stroke-width="1.5"/>
  <text x="155" y="134" text-anchor="middle" font-size="13" font-weight="700" fill="#F4EEE1">BURGUESIA</text>
  <text x="155" y="154" text-anchor="middle" font-size="11" fill="#F4EEE1">Possui os meios</text>
  <text x="155" y="170" text-anchor="middle" font-size="11" fill="#F4EEE1">de produção</text>

  <rect x="390" y="110" width="190" height="70" rx="10" fill="#5C4630" stroke="#3E2F20" stroke-width="1.5"/>
  <text x="485" y="134" text-anchor="middle" font-size="13" font-weight="700" fill="#F4EEE1">PROLETARIADO</text>
  <text x="485" y="154" text-anchor="middle" font-size="11" fill="#F4EEE1">Vende a força</text>
  <text x="485" y="170" text-anchor="middle" font-size="11" fill="#F4EEE1">de trabalho</text>

  <defs><marker id="setaC" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#A6493A"/></marker></defs>
  <line x1="258" y1="145" x2="382" y2="145" stroke="#A6493A" stroke-width="2.5" marker-end="url(#setaC)"/>
  <line x1="382" y1="155" x2="258" y2="155" stroke="#A6493A" stroke-width="2.5" marker-end="url(#setaC)"/>
  <text x="320" y="142" text-anchor="middle" font-size="10" font-weight="700" fill="#A6493A">EXPLORAÇÃO</text>
  <text x="320" y="172" text-anchor="middle" font-size="10" font-weight="700" fill="#A6493A">RESISTÊNCIA</text>

  <rect x="180" y="248" width="130" height="34" rx="8" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/>
  <text x="245" y="269" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">MAIS-VALIA</text>
  <rect x="330" y="248" width="130" height="34" rx="8" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/>
  <text x="395" y="269" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">ALIENAÇÃO</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">No capitalismo, Marx identifica a oposição entre burguesia e proletariado. Da exploração decorrem dois conceitos-chave: mais-valia e alienação.</p>`,
            },
            {
              heading: "Mais-valia e alienação",
              body: `Segundo Marx, o proletariado é explorado em seu trabalho. Dois conceitos explicam essa exploração:

Mais-valia
• É o valor produzido pelo trabalhador que não é pago em forma de salário.
• Esse excedente é apropriado pelo capitalista e vira lucro.
• Em outras palavras: o trabalhador produz mais do que recebe, e essa diferença enriquece o patrão.

Alienação
• O trabalhador perde o controle sobre o processo e sobre o produto do seu trabalho.
• Ele não decide o que, como e para quem produz.
• O resultado do trabalho torna-se algo alheio a ele.

Esses dois conceitos são fundamentais para entender a crítica marxista ao capitalismo.`,
            },
          ],
          quiz: [
            { q: "A Sociologia surge como ciência em qual contexto histórico?", options: ["No desenvolvimento e consolidação do capitalismo","Na Idade Média","Na Antiguidade clássica","No feudalismo"], correct: 0 },
            { q: "Quais autores clássicos se dedicam à temática do trabalho?", options: ["Platão, Aristóteles e Sócrates","Karl Marx, Max Weber e Émile Durkheim","Comte, Spencer e Rousseau","Hegel, Kant e Nietzsche"], correct: 1 },
            { q: "Para Karl Marx, qual é a definição de trabalho?", options: ["Atividade que visa solucionar as necessidades e gera transformação da natureza","Atividade puramente intelectual sem ligação com a natureza","Punição divina pela desobediência","Diversão exclusiva da burguesia"], correct: 0 },
            { q: "Qual é a principal diferença entre o trabalho humano e o trabalho animal, segundo Marx?", options: ["O trabalho humano é consciente e permite aprimorar técnicas e tecnologia; o animal é repetitivo","O trabalho humano é repetitivo e o animal é consciente","Ambos são idênticos","O trabalho animal é mais eficiente"], correct: 0 },
            { q: "Segundo Marx, no capitalismo o trabalhador teria se tornado:", options: ["Um aristocrata","Uma mercadoria","Um proprietário dos meios de produção","Um burguês"], correct: 1 },
            { q: "Qual é o conceito central de Marx que descreve o antagonismo entre classes sociais no capitalismo?", options: ["Burocracia","Luta de classes","Solidariedade orgânica","Ação social"], correct: 1 },
            { q: "Na luta de classes marxista, a burguesia é a classe que:", options: ["Vende sua força de trabalho","Possui os meios de produção","Vive apenas da terra","É dependente do Estado"], correct: 1 },
            { q: "Na luta de classes marxista, o proletariado é a classe que:", options: ["Possui os meios de produção","Vende sua força de trabalho","Domina o capital financeiro","Vive da renda da terra"], correct: 1 },
            { q: "Qual é a relação do proletariado com o trabalho segundo Marx?", options: ["É explorado em seu trabalho","É beneficiado pela mais-valia","Possui os meios de produção","Trabalha de forma espontânea e livre"], correct: 0 },
            { q: "Quais dois conceitos marxistas estão ligados à exploração do proletariado?", options: ["Mais-valia e alienação","Anomia e solidariedade","Burocracia e racionalização","Ação afetiva e tradicional"], correct: 0 },
            { q: "A mais-valia, segundo Marx, representa:", options: ["O lucro apropriado pelo capitalista a partir do trabalho não pago ao operário","O salário mínimo garantido ao trabalhador","Um imposto sobre a produção","Uma indenização paga pela burguesia ao proletariado"], correct: 0 },
            { q: "A alienação, em Marx, ocorre quando o trabalhador:", options: ["Possui controle sobre o processo e o produto do seu trabalho","Perde o controle sobre o processo e o produto do seu trabalho","Trabalha por lazer e satisfação pessoal","É dono dos meios de produção"], correct: 1 },
            { q: "Os meios de produção, em Marx, referem-se a:", options: ["Ferramentas, máquinas, matérias-primas e terras usados na produção","Apenas ao dinheiro em espécie","Apenas aos trabalhadores","Apenas às ideias e teorias filosóficas"], correct: 0 },
            { q: "No pensamento de Marx, por que o trabalho ocupa posição central?", options: ["Porque é a atividade que transforma a natureza e constrói a sociedade","Porque é apenas um passatempo","Porque é irrelevante para o capitalismo","Porque não produz valor"], correct: 0 },
            { q: "Qual tipo de sociedade estudada por Marx produziu profundas transformações na organização do trabalho?", options: ["Feudal","Antiga","Capitalista","Primitiva"], correct: 2 },
          ],
        },
      ],
    },
);
