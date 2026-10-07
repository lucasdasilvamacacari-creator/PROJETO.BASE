window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "ingles",
      name: "Inglês",
      emoji: "🔤",
      contents: [
        {
          id: "estrategias-de-leitura",
          title: "Estratégias de leitura",
          sections: [
            {
              heading: "Como ler um texto em inglês na prova",
              body: `Você não precisa conhecer todas as palavras para entender um texto. O segredo é juntar pistas.

Antes de ler:
• Leia as perguntas primeiro: elas dizem o que procurar.
• Observe título, subtítulo, imagens, gráficos e a fonte (jornal, site, revista).
• Identifique o gênero textual: notícia, anúncio, tirinha, artigo de opinião, receita...

Durante a leitura:
• Não pare em cada palavra desconhecida: siga em frente e use o contexto.
• Marque palavras-chave, números, datas e nomes próprios.`,
            },
            {
              heading: "Skimming e scanning",
              body: `Skimming → leitura rápida para captar a IDEIA GERAL.
• Leia o título e a primeira frase de cada parágrafo (a topic sentence).
• Use para perguntas como "qual é o assunto principal do texto?".

Scanning → busca rápida de uma INFORMAÇÃO ESPECÍFICA.
• Passe os olhos procurando só o que a pergunta pede: datas, números, nomes, lugares.
• Use para perguntas como "em que ano...?" ou "quantos...?".`,
              visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="en1_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="en1_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="en1_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="en1_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="en1_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="300" rx="12" fill="#F4EEE1"/>
<text x="160" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">SKIMMING</text><text x="480" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">SCANNING</text><rect x="55" y="40" width="210" height="220" rx="8" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><rect x="75" y="56" width="140" height="10" rx="4" fill="#A8763E"/><rect x="75" y="82" width="170" height="6" rx="3" fill="#A8763E"/><rect x="75" y="94" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="75" y="106" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="75" y="118" width="110" height="6" rx="3" fill="#D8C9A8"/><rect x="75" y="140" width="170" height="6" rx="3" fill="#A8763E"/><rect x="75" y="152" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="75" y="164" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="75" y="176" width="110" height="6" rx="3" fill="#D8C9A8"/><rect x="75" y="198" width="170" height="6" rx="3" fill="#A8763E"/><rect x="75" y="210" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="75" y="222" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="75" y="234" width="110" height="6" rx="3" fill="#D8C9A8"/><rect x="375" y="40" width="210" height="220" rx="8" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/><rect x="395" y="56" width="140" height="10" rx="4" fill="#D8C9A8"/><rect x="395" y="82" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="395" y="94" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="395" y="106" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="395" y="118" width="110" height="6" rx="3" fill="#D8C9A8"/><rect x="395" y="140" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="395" y="152" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="395" y="164" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="395" y="176" width="110" height="6" rx="3" fill="#D8C9A8"/><rect x="395" y="198" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="395" y="210" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="395" y="222" width="170" height="6" rx="3" fill="#D8C9A8"/><rect x="395" y="234" width="110" height="6" rx="3" fill="#D8C9A8"/><rect x="392" y="127" width="36" height="12" rx="3" fill="#E4D9C4"/><text x="410" y="137" text-anchor="middle" font-size="10" font-weight="700" fill="#A6493A">1998</text><ellipse cx="410" cy="133" rx="24" ry="11" fill="none" stroke="#A6493A" stroke-width="2"/><rect x="452" y="187" width="36" height="12" rx="3" fill="#E4D9C4"/><text x="470" y="197" text-anchor="middle" font-size="10" font-weight="700" fill="#A6493A">Brazil</text><ellipse cx="470" cy="193" rx="24" ry="11" fill="none" stroke="#A6493A" stroke-width="2"/><rect x="502" y="81" width="36" height="12" rx="3" fill="#E4D9C4"/><text x="520" y="91" text-anchor="middle" font-size="10" font-weight="700" fill="#A6493A">45%</text><ellipse cx="520" cy="87" rx="24" ry="11" fill="none" stroke="#A6493A" stroke-width="2"/><circle cx="560" cy="226" r="22" fill="none" stroke="#3E2F20" stroke-width="3"/><line x1="576" y1="242" x2="598" y2="264" stroke="#3E2F20" stroke-width="5" stroke-linecap="round"/><text x="160" y="282" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">leitura rápida: título + 1ª frase de cada parágrafo</text><text x="160" y="296" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">→ ideia geral do texto</text><text x="480" y="282" text-anchor="middle" font-size="11" font-weight="700" fill="#A6493A">busca de algo específico: datas, nomes, números</text><text x="480" y="296" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">→ resposta pontual</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Skimming = passar os olhos para entender o assunto. Scanning = caçar uma informação específica.</p>`,
            },
            {
              heading: "Palavras-chave e contexto",
              body: `• Cognatos: palavras parecidas com o português (information, important, family) ajudam a montar o sentido.
• Palavras repetidas costumam indicar o tema do texto.
• Contexto: o significado de uma palavra desconhecida pode ser deduzido pelas palavras ao redor.
  Ex.: "The soup was so hot that I couldn't eat it." → hot = quente.
• Marcas tipográficas: números, aspas, letras maiúsculas e negrito chamam a atenção para informações importantes.`,
            },
            {
              heading: "Tipos de pergunta mais comuns",
              body: `• Ideia principal (main idea): qual é o objetivo ou assunto central do texto? → skimming.
• Informação específica: o que o texto diz sobre X? → scanning.
• Vocabulário no contexto: qual o sentido da palavra "X" no texto?
• Referência: a que palavra "it", "they" ou "this" se refere?
• Inferência: o que se pode concluir do texto, mesmo sem estar escrito?

📌 Cuidado com alternativas que trazem palavras do texto, mas dizem algo que o texto não diz.`,
            },
          ],
          quiz: [
            { q: "Qual estratégia de leitura serve para captar a ideia geral de um texto rapidamente?", options: ["Scanning","Skimming","Tradução palavra por palavra","Leitura em voz alta"], correct: 1 },
            { q: "Para descobrir rapidamente em que ano algo aconteceu no texto, a melhor estratégia é:", options: ["Skimming","Ler o texto inteiro duas vezes","Scanning","Ignorar os números"], correct: 2 },
            { q: "Ao fazer skimming, o leitor deve dar atenção principalmente:", options: ["A todas as palavras desconhecidas","Ao título e à primeira frase de cada parágrafo","Apenas à última linha do texto","Às notas de rodapé"], correct: 1 },
            { q: "Qual é uma boa atitude ANTES de ler o texto na prova?", options: ["Ler as perguntas para saber o que procurar","Traduzir o título com dicionário","Pular as imagens","Começar pelo último parágrafo"], correct: 0 },
            { q: "Em \"The soup was so hot that I couldn't eat it\", o contexto mostra que \"hot\" significa:", options: ["Picante, apenas","Quente","Fria","Salgada"], correct: 1 },
            { q: "Palavras parecidas com o português, como \"information\" e \"family\", são chamadas de:", options: ["Falsos cognatos","Cognatos","Phrasal verbs","Pronomes"], correct: 1 },
            { q: "A frase que geralmente apresenta a ideia central de um parágrafo é a:", options: ["Topic sentence","Footnote","Headline do jornal","Última palavra"], correct: 0 },
            { q: "Uma pergunta do tipo \"A que palavra o termo 'they' se refere?\" avalia:", options: ["Vocabulário","Referência pronominal","Pronúncia","Ortografia"], correct: 1 },
            { q: "Ao encontrar uma palavra desconhecida durante a leitura, o mais indicado é:", options: ["Parar a leitura até descobrir o significado","Usar o contexto e seguir em frente","Desistir da questão","Escolher a alternativa que tem essa palavra"], correct: 1 },
            { q: "Por que é preciso ter cuidado com alternativas que repetem palavras do texto?", options: ["Porque estão sempre certas","Porque podem usar palavras do texto para dizer algo que o texto não diz","Porque estão em português","Porque são sempre a letra A"], correct: 1 },
          ],
        },
        {
          id: "cognatos-e-falsos-cognatos",
          title: "Cognatos e falsos cognatos",
          sections: [
            {
              heading: "Cognatos",
              body: `Cognatos são palavras com forma e significado parecidos nas duas línguas, porque têm a mesma origem (geralmente o latim).

Exemplos: information (informação), important (importante), family (família), university (universidade), hospital (hospital), economy (economia), problem (problema), different (diferente).

Eles ajudam muito na leitura: em textos acadêmicos e jornalísticos, uma boa parte das palavras é cognata.`,
            },
            {
              heading: "Falsos cognatos",
              body: `Falsos cognatos (false friends) parecem palavras do português, mas têm OUTRO significado. São muito cobrados em prova.

A tabela traz os mais comuns.`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Inglês</th><th class="text-left py-2 pr-4 font-display text-ochre">Significa</th><th class="text-left py-2 pr-4 font-display text-ochre">NÃO significa</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">actually</td><td class="py-1.5 pr-4 text-espresso">na verdade</td><td class="py-1.5 pr-4 text-espresso">atualmente (= currently)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">pretend</td><td class="py-1.5 pr-4 text-espresso">fingir</td><td class="py-1.5 pr-4 text-espresso">pretender (= intend)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">push</td><td class="py-1.5 pr-4 text-espresso">empurrar</td><td class="py-1.5 pr-4 text-espresso">puxar (= pull)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">library</td><td class="py-1.5 pr-4 text-espresso">biblioteca</td><td class="py-1.5 pr-4 text-espresso">livraria (= bookstore)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">college</td><td class="py-1.5 pr-4 text-espresso">faculdade</td><td class="py-1.5 pr-4 text-espresso">colégio (= school)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">parents</td><td class="py-1.5 pr-4 text-espresso">pais (pai e mãe)</td><td class="py-1.5 pr-4 text-espresso">parentes (= relatives)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">fabric</td><td class="py-1.5 pr-4 text-espresso">tecido</td><td class="py-1.5 pr-4 text-espresso">fábrica (= factory)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">lunch</td><td class="py-1.5 pr-4 text-espresso">almoço</td><td class="py-1.5 pr-4 text-espresso">lanche (= snack)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">costume</td><td class="py-1.5 pr-4 text-espresso">fantasia</td><td class="py-1.5 pr-4 text-espresso">costume (= habit)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">eventually</td><td class="py-1.5 pr-4 text-espresso">por fim, finalmente</td><td class="py-1.5 pr-4 text-espresso">eventualmente (= occasionally)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">sensible</td><td class="py-1.5 pr-4 text-espresso">sensato</td><td class="py-1.5 pr-4 text-espresso">sensível (= sensitive)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">prejudice</td><td class="py-1.5 pr-4 text-espresso">preconceito</td><td class="py-1.5 pr-4 text-espresso">prejuízo (= loss, damage)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">realize</td><td class="py-1.5 pr-4 text-espresso">perceber</td><td class="py-1.5 pr-4 text-espresso">realizar (= accomplish)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">attend</td><td class="py-1.5 pr-4 text-espresso">frequentar, comparecer</td><td class="py-1.5 pr-4 text-espresso">atender (= answer)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">novel</td><td class="py-1.5 pr-4 text-espresso">romance (livro)</td><td class="py-1.5 pr-4 text-espresso">novela (= soap opera)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">exquisite</td><td class="py-1.5 pr-4 text-espresso">requintado</td><td class="py-1.5 pr-4 text-espresso">esquisito (= weird)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">resume</td><td class="py-1.5 pr-4 text-espresso">retomar</td><td class="py-1.5 pr-4 text-espresso">resumir (= summarize)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">legend</td><td class="py-1.5 pr-4 text-espresso">lenda / legenda de mapa</td><td class="py-1.5 pr-4 text-espresso">legenda de filme (= subtitle)</td></tr></tbody></table></div>`,
            },
          ],
          quiz: [
            { q: "A palavra \"actually\" significa:", options: ["Atualmente","Na verdade","Ativamente","Atualizado"], correct: 1 },
            { q: "\"She pretended to be sick\" significa:", options: ["Ela pretendia ficar doente","Ela fingiu estar doente","Ela ficou doente","Ela evitou ficar doente"], correct: 1 },
            { q: "Em uma porta está escrito \"PUSH\". Você deve:", options: ["Puxar","Empurrar","Bater","Esperar"], correct: 1 },
            { q: "\"I borrowed this book from the library\" quer dizer que o livro veio:", options: ["De uma livraria","De uma biblioteca","De uma papelaria","De uma faculdade"], correct: 1 },
            { q: "A palavra \"parents\" significa:", options: ["Parentes","Pais (pai e mãe)","Padrinhos","Primos"], correct: 1 },
            { q: "\"This fabric is made of cotton\" fala sobre:", options: ["Uma fábrica","Um tecido","Uma fazenda","Uma fórmula"], correct: 1 },
            { q: "\"Eventually, he found a job\" significa:", options: ["Eventualmente ele achou um emprego","Por fim, ele achou um emprego","Raramente ele acha emprego","Ele nunca achou emprego"], correct: 1 },
            { q: "\"He is a very sensible person\" descreve alguém:", options: ["Sensível","Sensato","Sensacional","Sentimental"], correct: 1 },
            { q: "A palavra \"prejudice\" significa:", options: ["Prejuízo","Preconceito","Previsão","Preferência"], correct: 1 },
            { q: "Qual das palavras abaixo é um cognato VERDADEIRO?", options: ["College","Costume","Information","Novel"], correct: 2 },
          ],
        },
        {
          id: "pronomes-e-referencia",
          title: "Pronomes e referência pronominal",
          sections: [
            {
              heading: "Quadro dos pronomes",
              body: `Cada coluna tem uma função na frase. Leia a tabela em linha: "I → me → my → mine → myself".`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Sujeito</th><th class="text-left py-2 pr-4 font-display text-ochre">Objeto</th><th class="text-left py-2 pr-4 font-display text-ochre">Adj. possessivo</th><th class="text-left py-2 pr-4 font-display text-ochre">Pron. possessivo</th><th class="text-left py-2 pr-4 font-display text-ochre">Reflexivo</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">I</td><td class="py-1.5 pr-4 text-espresso">me</td><td class="py-1.5 pr-4 text-espresso">my</td><td class="py-1.5 pr-4 text-espresso">mine</td><td class="py-1.5 pr-4 text-espresso">myself</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">you</td><td class="py-1.5 pr-4 text-espresso">you</td><td class="py-1.5 pr-4 text-espresso">your</td><td class="py-1.5 pr-4 text-espresso">yours</td><td class="py-1.5 pr-4 text-espresso">yourself</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">he</td><td class="py-1.5 pr-4 text-espresso">him</td><td class="py-1.5 pr-4 text-espresso">his</td><td class="py-1.5 pr-4 text-espresso">his</td><td class="py-1.5 pr-4 text-espresso">himself</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">she</td><td class="py-1.5 pr-4 text-espresso">her</td><td class="py-1.5 pr-4 text-espresso">her</td><td class="py-1.5 pr-4 text-espresso">hers</td><td class="py-1.5 pr-4 text-espresso">herself</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">it</td><td class="py-1.5 pr-4 text-espresso">it</td><td class="py-1.5 pr-4 text-espresso">its</td><td class="py-1.5 pr-4 text-espresso">—</td><td class="py-1.5 pr-4 text-espresso">itself</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">we</td><td class="py-1.5 pr-4 text-espresso">us</td><td class="py-1.5 pr-4 text-espresso">our</td><td class="py-1.5 pr-4 text-espresso">ours</td><td class="py-1.5 pr-4 text-espresso">ourselves</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">you</td><td class="py-1.5 pr-4 text-espresso">you</td><td class="py-1.5 pr-4 text-espresso">your</td><td class="py-1.5 pr-4 text-espresso">yours</td><td class="py-1.5 pr-4 text-espresso">yourselves</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">they</td><td class="py-1.5 pr-4 text-espresso">them</td><td class="py-1.5 pr-4 text-espresso">their</td><td class="py-1.5 pr-4 text-espresso">theirs</td><td class="py-1.5 pr-4 text-espresso">themselves</td></tr></tbody></table></div>`,
            },
            {
              heading: "Quando usar cada um",
              body: `• Sujeito (subject) → antes do verbo: She works here.
• Objeto (object) → depois do verbo ou de preposição: I called her. / This is for him.
• Adjetivo possessivo → SEMPRE antes de um substantivo: This is my book.
• Pronome possessivo → SUBSTITUI o substantivo: This book is mine.
• Reflexivo → a ação volta para o próprio sujeito: She hurt herself.

📌 "Its" (dele/dela, para coisas e animais) não tem apóstrofo. "It's" = it is.
📌 "His" vale para os dois: This is his car. / The car is his.`,
            },
            {
              heading: "Referência pronominal",
              body: `Questão muito comum: "a palavra 'it' / 'they' / 'this' / 'which' refere-se a...".

Como resolver:
1. Volte no texto: a referência geralmente vem ANTES do pronome.
2. Confira o número: "it" = singular; "they/them/their" = plural.
3. Teste: troque o pronome pela palavra escolhida e veja se a frase faz sentido.`,
              visual: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="en2_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="en2_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="en2_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="en2_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="en2_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="230" rx="12" fill="#F4EEE1"/>
<text x="20" y="70" text-anchor="start" font-size="17" fill="#3E2F20">Brazil</text><text x="89.69999999999999" y="70" text-anchor="start" font-size="17" fill="#3E2F20">has</text><text x="128.79999999999998" y="70" text-anchor="start" font-size="17" font-weight="700" fill="#5B7553">many</text><text x="178.09999999999997" y="70" text-anchor="start" font-size="17" font-weight="700" fill="#5B7553">rivers.</text><rect x="253.99999999999994" y="51" width="48.8" height="27" rx="6" fill="none" stroke="#A8763E" stroke-width="2"/><text x="257.99999999999994" y="70" text-anchor="start" font-size="17" font-weight="700" fill="#A8763E">They</text><text x="307.29999999999995" y="70" text-anchor="start" font-size="17" fill="#3E2F20">are</text><text x="346.4" y="70" text-anchor="start" font-size="17" fill="#3E2F20">very</text><text x="395.7" y="70" text-anchor="start" font-size="17" fill="#3E2F20">important.</text><rect x="123.79999999999998" y="51" width="130.69999999999996" height="27" rx="7" fill="none" stroke="#5B7553" stroke-width="2"/><path d="M278.4,48 Q233.77499999999998,6 189.14999999999998,46" fill="none" stroke="#A8763E" stroke-width="2" marker-end="url(#en2_A8763E)"/><text x="20" y="170" text-anchor="start" font-size="17" fill="#3E2F20">The</text><text x="59.099999999999994" y="170" text-anchor="start" font-size="17" fill="#3E2F20">company</text><text x="139" y="170" text-anchor="start" font-size="17" fill="#3E2F20">launched</text><text x="229.1" y="170" text-anchor="start" font-size="17" font-weight="700" fill="#5B7553">a</text><text x="247.79999999999998" y="170" text-anchor="start" font-size="17" font-weight="700" fill="#5B7553">new</text><text x="286.9" y="170" text-anchor="start" font-size="17" font-weight="700" fill="#5B7553">app.</text><rect x="332.2" y="151" width="28.4" height="27" rx="6" fill="none" stroke="#A8763E" stroke-width="2"/><text x="336.2" y="170" text-anchor="start" font-size="17" font-weight="700" fill="#A8763E">It</text><text x="365.09999999999997" y="170" text-anchor="start" font-size="17" fill="#3E2F20">was</text><text x="404.19999999999993" y="170" text-anchor="start" font-size="17" fill="#3E2F20">a</text><text x="422.8999999999999" y="170" text-anchor="start" font-size="17" fill="#3E2F20">success.</text><rect x="224.1" y="151" width="108.6" height="27" rx="7" fill="none" stroke="#5B7553" stroke-width="2"/><path d="M346.4,148 Q312.4,106 278.4,146" fill="none" stroke="#A8763E" stroke-width="2" marker-end="url(#en2_A8763E)"/><text x="320" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="#A8763E">"They" = many rivers</text><text x="320" y="208" text-anchor="middle" font-size="12" font-weight="700" fill="#A8763E">"It" = a new app</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Para achar a referência, volte no texto e procure o substantivo que combina em número (singular/plural) e sentido.</p>`,
            },
          ],
          quiz: [
            { q: "Complete: \"This is ___ book. The book is ___.\"", options: ["my / mine","mine / my","me / my","I / mine"], correct: 0 },
            { q: "Complete: \"I called ___ yesterday, but she didn't answer.\"", options: ["she","her","hers","herself"], correct: 1 },
            { q: "Qual é o pronome objeto correspondente a \"they\"?", options: ["their","theirs","them","themselves"], correct: 2 },
            { q: "Complete: \"The dog hurt ___ leg.\"", options: ["it's","its","his","it"], correct: 1 },
            { q: "Em \"She cut herself while cooking\", \"herself\" é um pronome:", options: ["Possessivo","Reflexivo","Sujeito","Objeto"], correct: 1 },
            { q: "Complete: \"These are not your keys. They are ___.\"", options: ["our","us","ours","we"], correct: 2 },
            { q: "Em \"Brazil has many rivers. They are very important\", \"They\" refere-se a:", options: ["Brazil","many rivers","important","people"], correct: 1 },
            { q: "Em \"The company launched a new app. It was a success\", \"It\" refere-se a:", options: ["The company","a new app","success","launch"], correct: 1 },
            { q: "Para identificar a referência de \"they\", você deve procurar:", options: ["Um substantivo no singular depois do pronome","Um substantivo no plural antes do pronome","Um verbo no passado","Uma data"], correct: 1 },
            { q: "Qual frase está correta?", options: ["Me and him went to school.","Him and I went to school.","He and I went to school.","He and me went to school."], correct: 2 },
          ],
        },
        {
          id: "simple-present-e-present-continuous",
          title: "Simple Present e Present Continuous",
          sections: [
            {
              heading: "Simple Present",
              body: `Usado para hábitos, rotinas, verdades gerais e fatos permanentes.
• I work every day. / Water boils at 100 °C.

Afirmativa: I/you/we/they work · he/she/it works
Negativa: don't / doesn't + verbo na forma base
• She doesn't work on Sundays. (e não "doesn't works")
Pergunta: Do / Does + sujeito + verbo base
• Does he like pizza?

Advérbios de frequência: always, usually, often, sometimes, rarely, never.
• He always studies at night.`,
            },
            {
              heading: "O \"s\" da 3ª pessoa (he, she, it)",
              body: ``,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Regra</th><th class="text-left py-2 pr-4 font-display text-ochre">Exemplos</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">regra geral: + s</td><td class="py-1.5 pr-4 text-espresso">work → works · play → plays</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">termina em -s, -sh, -ch, -x, -o: + es</td><td class="py-1.5 pr-4 text-espresso">watch → watches · go → goes · do → does · fix → fixes</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">consoante + y: tira o y, + ies</td><td class="py-1.5 pr-4 text-espresso">study → studies · cry → cries</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">irregular</td><td class="py-1.5 pr-4 text-espresso">have → has · be → is</td></tr></tbody></table></div>`,
            },
            {
              heading: "Present Continuous",
              body: `Usado para ações que estão acontecendo AGORA ou neste período.
• I am studying now. / She is working at home this week.

Estrutura: am / is / are + verbo com -ing
Negativa: She isn't sleeping.
Pergunta: Are you listening?

Palavras que indicam: now, right now, at the moment, today, Look!, Listen!

Regras do -ing:
• make → making (tira o e)
• run → running (sílaba tônica CVC: dobra a consoante)
• study → studying (mantém o y)
• lie → lying (ie vira y)`,
            },
            {
              heading: "Comparando os dois",
              body: `• Simple Present → rotina: He plays soccer every Saturday.
• Present Continuous → agora: He is playing soccer now.

Verbos de estado (like, love, know, want, need, understand, believe) normalmente NÃO vão para o -ing:
• I know the answer. (e não "I am knowing")`,
            },
          ],
          quiz: [
            { q: "Complete: \"She ___ to school every day.\"", options: ["go","goes","going","is go"], correct: 1 },
            { q: "Complete: \"He ___ like vegetables.\"", options: ["don't","doesn't","isn't","aren't"], correct: 1 },
            { q: "Qual é a forma correta de \"study\" na 3ª pessoa do singular?", options: ["studys","studyes","studies","studing"], correct: 2 },
            { q: "Complete: \"___ your brother play the guitar?\"", options: ["Do","Does","Is","Are"], correct: 1 },
            { q: "Complete: \"Listen! The baby ___.\"", options: ["cries","cry","is crying","cried"], correct: 2 },
            { q: "Complete: \"They ___ dinner right now.\"", options: ["have","are having","has","is having"], correct: 1 },
            { q: "Qual é a forma -ing correta de \"run\"?", options: ["runing","running","runeing","runnig"], correct: 1 },
            { q: "Qual frase está correta?", options: ["I am knowing the answer.","I know the answer.","I knows the answer.","I am know the answer."], correct: 1 },
            { q: "A frase \"Water boils at 100 °C\" usa o Simple Present porque expressa:", options: ["Uma ação acontecendo agora","Uma verdade geral","Um plano futuro","Uma ação passada"], correct: 1 },
            { q: "Complete: \"My father usually ___ the news in the morning.\"", options: ["watch","watchs","watches","watching"], correct: 2 },
          ],
        },
        {
          id: "simple-past",
          title: "Simple Past",
          sections: [
            {
              heading: "Uso e estrutura",
              body: `O Simple Past fala de ações COMPLETAS em um momento definido do passado.
• I visited my grandmother yesterday.

Palavras que indicam: yesterday, last week/month/year, ago (two days ago), in 2010, when I was a child.

Afirmativa: verbo no passado (igual para todas as pessoas).
Negativa: didn't + verbo na forma base → She didn't go. (e não "didn't went")
Pergunta: Did + sujeito + verbo base → Did you see the movie?

Verbo "to be" no passado:
• I/he/she/it → was · you/we/they → were
• Were you at home? / He wasn't tired.`,
            },
            {
              heading: "Verbos regulares (-ed)",
              body: ``,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Regra</th><th class="text-left py-2 pr-4 font-display text-ochre">Exemplos</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">regra geral: + ed</td><td class="py-1.5 pr-4 text-espresso">work → worked · play → played</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">termina em -e: + d</td><td class="py-1.5 pr-4 text-espresso">live → lived · like → liked</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">consoante + y: tira o y, + ied</td><td class="py-1.5 pr-4 text-espresso">study → studied · try → tried</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">CVC tônico: dobra a consoante</td><td class="py-1.5 pr-4 text-espresso">stop → stopped · plan → planned</td></tr></tbody></table></div>`,
            },
            {
              heading: "Verbos irregulares mais comuns",
              body: `Os irregulares não seguem regra: é preciso decorar. Estes são os que mais aparecem em textos.`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Verbo</th><th class="text-left py-2 pr-4 font-display text-ochre">Passado</th><th class="text-left py-2 pr-4 font-display text-ochre">Significado</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">be</td><td class="py-1.5 pr-4 text-espresso">was / were</td><td class="py-1.5 pr-4 text-espresso">ser, estar</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">have</td><td class="py-1.5 pr-4 text-espresso">had</td><td class="py-1.5 pr-4 text-espresso">ter</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">do</td><td class="py-1.5 pr-4 text-espresso">did</td><td class="py-1.5 pr-4 text-espresso">fazer</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">go</td><td class="py-1.5 pr-4 text-espresso">went</td><td class="py-1.5 pr-4 text-espresso">ir</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">make</td><td class="py-1.5 pr-4 text-espresso">made</td><td class="py-1.5 pr-4 text-espresso">fazer, fabricar</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">get</td><td class="py-1.5 pr-4 text-espresso">got</td><td class="py-1.5 pr-4 text-espresso">conseguir, obter</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">see</td><td class="py-1.5 pr-4 text-espresso">saw</td><td class="py-1.5 pr-4 text-espresso">ver</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">come</td><td class="py-1.5 pr-4 text-espresso">came</td><td class="py-1.5 pr-4 text-espresso">vir</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">take</td><td class="py-1.5 pr-4 text-espresso">took</td><td class="py-1.5 pr-4 text-espresso">pegar, levar</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">give</td><td class="py-1.5 pr-4 text-espresso">gave</td><td class="py-1.5 pr-4 text-espresso">dar</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">know</td><td class="py-1.5 pr-4 text-espresso">knew</td><td class="py-1.5 pr-4 text-espresso">saber, conhecer</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">think</td><td class="py-1.5 pr-4 text-espresso">thought</td><td class="py-1.5 pr-4 text-espresso">pensar</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">buy</td><td class="py-1.5 pr-4 text-espresso">bought</td><td class="py-1.5 pr-4 text-espresso">comprar</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">find</td><td class="py-1.5 pr-4 text-espresso">found</td><td class="py-1.5 pr-4 text-espresso">encontrar</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">say</td><td class="py-1.5 pr-4 text-espresso">said</td><td class="py-1.5 pr-4 text-espresso">dizer</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">tell</td><td class="py-1.5 pr-4 text-espresso">told</td><td class="py-1.5 pr-4 text-espresso">contar, dizer</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">write</td><td class="py-1.5 pr-4 text-espresso">wrote</td><td class="py-1.5 pr-4 text-espresso">escrever</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">leave</td><td class="py-1.5 pr-4 text-espresso">left</td><td class="py-1.5 pr-4 text-espresso">sair, deixar</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">begin</td><td class="py-1.5 pr-4 text-espresso">began</td><td class="py-1.5 pr-4 text-espresso">começar</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">become</td><td class="py-1.5 pr-4 text-espresso">became</td><td class="py-1.5 pr-4 text-espresso">tornar-se</td></tr></tbody></table></div>`,
            },
          ],
          quiz: [
            { q: "Complete: \"We ___ to the beach last weekend.\"", options: ["go","goes","went","gone"], correct: 2 },
            { q: "Complete: \"She didn't ___ the email.\"", options: ["sent","send","sends","sending"], correct: 1 },
            { q: "Qual é o passado de \"study\"?", options: ["studyed","studied","studed","studyd"], correct: 1 },
            { q: "Qual é o passado de \"stop\"?", options: ["stoped","stopped","stopt","stopping"], correct: 1 },
            { q: "Complete: \"___ you see the game yesterday?\"", options: ["Do","Does","Did","Were"], correct: 2 },
            { q: "Complete: \"They ___ at home last night.\"", options: ["was","were","is","be"], correct: 1 },
            { q: "Qual palavra indica o uso do Simple Past?", options: ["now","tomorrow","ago","usually"], correct: 2 },
            { q: "Qual é o passado de \"buy\"?", options: ["buyed","bought","brought","buied"], correct: 1 },
            { q: "\"He wrote a letter\" está no passado do verbo:", options: ["write","wrote","read","right"], correct: 0 },
            { q: "Qual frase está correta?", options: ["She didn't went to school.","She didn't go to school.","She don't went to school.","She not went to school."], correct: 1 },
          ],
        },
        {
          id: "present-perfect",
          title: "Present Perfect",
          sections: [
            {
              heading: "Estrutura",
              body: `have / has + verbo no particípio passado

• I have finished my homework.
• She has lived here for ten years.
• Negativa: They haven't arrived yet.
• Pergunta: Have you ever been to Paris?

Has → he, she, it · Have → I, you, we, they`,
            },
            {
              heading: "Quando usar",
              body: `1. Ação que começou no passado e continua até agora:
   I have studied English for three years.
2. Experiências de vida, sem dizer quando:
   She has visited Japan twice.
3. Ação recente com resultado no presente:
   I have lost my keys. (estou sem elas agora)

Palavras-chave:
• for → duração (for two years)
• since → ponto de início (since 2020)
• ever (alguma vez), never (nunca)
• already (já), yet (ainda / já, em perguntas e negativas), just (acabou de)`,
              visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="en3_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="en3_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="en3_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="en3_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="en3_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="300" rx="12" fill="#F4EEE1"/>
<text x="30" y="30" text-anchor="start" font-size="13" font-weight="700" fill="#3E2F20">SIMPLE PAST — momento terminado e definido</text><line x1="30" y1="80" x2="612" y2="80" stroke="#3E2F20" stroke-width="2" marker-end="url(#en3_3E2F20)"/><line x1="440" y1="66" x2="440" y2="94" stroke="#A6493A" stroke-width="3"/><text x="440" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#A6493A">NOW</text><text x="60" y="110" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">passado</text><text x="590" y="110" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">futuro</text><circle cx="180" cy="80" r="8" fill="#A8763E" stroke="#3E2F20"/><text x="180" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">2019</text><text x="612" y="128" text-anchor="end" font-size="13" font-weight="700" fill="#3E2F20">I visited Paris in 2019.</text><text x="30" y="170" text-anchor="start" font-size="13" font-weight="700" fill="#3E2F20">PRESENT PERFECT — liga o passado ao agora</text><line x1="30" y1="220" x2="612" y2="220" stroke="#3E2F20" stroke-width="2" marker-end="url(#en3_3E2F20)"/><line x1="440" y1="206" x2="440" y2="234" stroke="#A6493A" stroke-width="3"/><text x="440" y="250" text-anchor="middle" font-size="11" font-weight="700" fill="#A6493A">NOW</text><text x="60" y="250" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">passado</text><text x="590" y="250" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">futuro</text><rect x="250" y="212" width="190" height="16" rx="8" fill="#5B7553" opacity="0.85"/><text x="250" y="204" text-anchor="middle" font-size="11" font-weight="700" fill="#5B7553">since 2020</text><text x="345" y="248" text-anchor="middle" font-size="10" font-weight="700" fill="#5B7553">for 5 years</text><circle cx="140" cy="220" r="7" fill="#A8763E" stroke="#3E2F20"/><text x="140" y="204" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">?</text><circle cx="190" cy="220" r="7" fill="#A8763E" stroke="#3E2F20"/><text x="190" y="204" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">?</text><text x="165" y="248" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">quando? não importa</text><text x="612" y="278" text-anchor="end" font-size="12" font-weight="700" fill="#3E2F20">I have lived here since 2020. · I have visited Paris twice.</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Com tempo definido (in 2019, yesterday, ago) → simple past. Sem tempo definido, ou durando até agora (for, since) → present perfect.</p>`,
            },
            {
              heading: "Particípios mais usados",
              body: `Nos regulares, o particípio é igual ao passado (worked, lived). Nos irregulares, precisa decorar:`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Verbo</th><th class="text-left py-2 pr-4 font-display text-ochre">Passado</th><th class="text-left py-2 pr-4 font-display text-ochre">Particípio</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">be</td><td class="py-1.5 pr-4 text-espresso">was/were</td><td class="py-1.5 pr-4 text-espresso">been</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">go</td><td class="py-1.5 pr-4 text-espresso">went</td><td class="py-1.5 pr-4 text-espresso">gone</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">do</td><td class="py-1.5 pr-4 text-espresso">did</td><td class="py-1.5 pr-4 text-espresso">done</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">see</td><td class="py-1.5 pr-4 text-espresso">saw</td><td class="py-1.5 pr-4 text-espresso">seen</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">eat</td><td class="py-1.5 pr-4 text-espresso">ate</td><td class="py-1.5 pr-4 text-espresso">eaten</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">write</td><td class="py-1.5 pr-4 text-espresso">wrote</td><td class="py-1.5 pr-4 text-espresso">written</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">take</td><td class="py-1.5 pr-4 text-espresso">took</td><td class="py-1.5 pr-4 text-espresso">taken</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">give</td><td class="py-1.5 pr-4 text-espresso">gave</td><td class="py-1.5 pr-4 text-espresso">given</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">know</td><td class="py-1.5 pr-4 text-espresso">knew</td><td class="py-1.5 pr-4 text-espresso">known</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">have</td><td class="py-1.5 pr-4 text-espresso">had</td><td class="py-1.5 pr-4 text-espresso">had</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">make</td><td class="py-1.5 pr-4 text-espresso">made</td><td class="py-1.5 pr-4 text-espresso">made</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">buy</td><td class="py-1.5 pr-4 text-espresso">bought</td><td class="py-1.5 pr-4 text-espresso">bought</td></tr></tbody></table></div>`,
            },
          ],
          quiz: [
            { q: "Complete: \"She ___ in Brazil since 2015.\"", options: ["lives","has lived","lived","is living"], correct: 1 },
            { q: "Complete: \"I have studied English ___ five years.\"", options: ["since","for","ago","yet"], correct: 1 },
            { q: "Complete: \"They have worked here ___ 2019.\"", options: ["for","since","ago","already"], correct: 1 },
            { q: "Qual é o particípio de \"write\"?", options: ["wrote","writed","written","writing"], correct: 2 },
            { q: "Complete: \"Have you ___ been to London?\"", options: ["ever","yet","ago","since"], correct: 0 },
            { q: "Complete: \"I haven't finished my homework ___.\"", options: ["already","yet","ever","just"], correct: 1 },
            { q: "Qual frase está correta?", options: ["I have visited Paris in 2019.","I visited Paris in 2019.","I have visit Paris in 2019.","I visit Paris in 2019 ago."], correct: 1 },
            { q: "A estrutura do Present Perfect é:", options: ["did + verbo base","have/has + particípio","am/is/are + -ing","will + verbo base"], correct: 1 },
            { q: "\"I have just arrived\" significa:", options: ["Eu nunca cheguei","Eu acabei de chegar","Eu vou chegar","Eu cheguei ontem"], correct: 1 },
            { q: "Complete: \"He ___ already eaten lunch.\"", options: ["have","has","is","did"], correct: 1 },
          ],
        },
        {
          id: "futuro-will-e-going-to",
          title: "Futuro: will e going to",
          sections: [
            {
              heading: "Will",
              body: `Estrutura: will + verbo base (igual para todas as pessoas). Contração: 'll. Negativa: won't (= will not).

Usos:
• Decisão tomada na hora: The phone is ringing. I'll answer it.
• Previsão/opinião sobre o futuro: I think it will rain tomorrow.
• Promessa, oferta ou pedido: I won't tell anyone. / Will you help me?`,
            },
            {
              heading: "Going to",
              body: `Estrutura: am / is / are + going to + verbo base

Usos:
• Plano ou intenção já decidida: I'm going to travel next month.
• Previsão com evidência no presente: Look at those clouds! It's going to rain.

Negativa: She isn't going to come.
Pergunta: Are you going to study tonight?`,
            },
            {
              heading: "Will × going to",
              body: ``,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Situação</th><th class="text-left py-2 pr-4 font-display text-ochre">Use</th><th class="text-left py-2 pr-4 font-display text-ochre">Exemplo</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">decisão na hora</td><td class="py-1.5 pr-4 text-espresso">will</td><td class="py-1.5 pr-4 text-espresso">I'm thirsty. I'll get some water.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">plano já decidido</td><td class="py-1.5 pr-4 text-espresso">going to</td><td class="py-1.5 pr-4 text-espresso">I'm going to visit my aunt on Sunday.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">previsão (opinião)</td><td class="py-1.5 pr-4 text-espresso">will</td><td class="py-1.5 pr-4 text-espresso">I think Brazil will win.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">previsão com evidência</td><td class="py-1.5 pr-4 text-espresso">going to</td><td class="py-1.5 pr-4 text-espresso">Watch out! You're going to fall!</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">promessa</td><td class="py-1.5 pr-4 text-espresso">will</td><td class="py-1.5 pr-4 text-espresso">I'll call you tonight.</td></tr></tbody></table></div>`,
            },
          ],
          quiz: [
            { q: "Complete: \"The phone is ringing. I ___ answer it.\" (decisão na hora)", options: ["am going to","will","going","was"], correct: 1 },
            { q: "Complete: \"We have bought the tickets. We ___ travel to Bahia in July.\"", options: ["will","are going to","went","is going to"], correct: 1 },
            { q: "Complete: \"Look at those dark clouds! It ___ rain.\"", options: ["will","is going to","goes","won"], correct: 1 },
            { q: "\"I won't tell anyone\" significa:", options: ["Eu vou contar para todos","Eu não vou contar para ninguém","Eu contei para alguém","Eu quero contar"], correct: 1 },
            { q: "Qual é a forma negativa de \"will\"?", options: ["willn't","won't","don't will","not will"], correct: 1 },
            { q: "Complete: \"She ___ going to study medicine.\"", options: ["am","is","are","be"], correct: 1 },
            { q: "Qual frase expressa uma promessa?", options: ["I'll call you tonight.","I'm calling you now.","I called you.","I call you every day."], correct: 0 },
            { q: "Depois de \"will\", o verbo fica:", options: ["No passado","Com -ing","Na forma base","Com -s"], correct: 2 },
            { q: "Complete: \"I think robots ___ do many of our jobs in the future.\" (opinião)", options: ["will","are going","did","have"], correct: 0 },
            { q: "Qual frase está correta?", options: ["She will goes to school.","She will go to school.","She wills go to school.","She will going to school."], correct: 1 },
          ],
        },
        {
          id: "verbos-modais",
          title: "Verbos modais",
          sections: [
            {
              heading: "Regras gerais",
              body: `Os modais acrescentam uma ideia ao verbo principal: habilidade, permissão, obrigação, conselho, possibilidade.

• Modal + verbo na forma base, SEM "to": She can swim. (e não "can to swim")
• Não recebem -s na 3ª pessoa: He must go. (e não "musts")
• Negativa com not: can't, couldn't, mustn't, shouldn't, may not
• Pergunta invertendo: Can you help me?`,
            },
            {
              heading: "Significado de cada modal",
              body: ``,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Modal</th><th class="text-left py-2 pr-4 font-display text-ochre">Ideia</th><th class="text-left py-2 pr-4 font-display text-ochre">Exemplo</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">can</td><td class="py-1.5 pr-4 text-espresso">habilidade / permissão</td><td class="py-1.5 pr-4 text-espresso">I can speak English. / You can go now.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">could</td><td class="py-1.5 pr-4 text-espresso">habilidade no passado / pedido educado / possibilidade</td><td class="py-1.5 pr-4 text-espresso">I could run fast when I was young. / Could you help me?</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">may</td><td class="py-1.5 pr-4 text-espresso">possibilidade / permissão formal</td><td class="py-1.5 pr-4 text-espresso">It may rain. / May I come in?</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">might</td><td class="py-1.5 pr-4 text-espresso">possibilidade mais remota</td><td class="py-1.5 pr-4 text-espresso">She might be late.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">must</td><td class="py-1.5 pr-4 text-espresso">obrigação forte / dedução</td><td class="py-1.5 pr-4 text-espresso">You must wear a seat belt. / He must be tired.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">should</td><td class="py-1.5 pr-4 text-espresso">conselho, recomendação</td><td class="py-1.5 pr-4 text-espresso">You should drink more water.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">have to</td><td class="py-1.5 pr-4 text-espresso">obrigação (regra externa)</td><td class="py-1.5 pr-4 text-espresso">I have to wear a uniform at school.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">would</td><td class="py-1.5 pr-4 text-espresso">pedido educado / condição</td><td class="py-1.5 pr-4 text-espresso">Would you like some coffee?</td></tr></tbody></table></div>`,
            },
            {
              heading: "Pegadinha: mustn't × don't have to",
              body: `• mustn't → PROIBIÇÃO (não pode)
  You mustn't smoke here. = É proibido fumar aqui.

• don't have to → NÃO É NECESSÁRIO (não precisa, mas pode)
  You don't have to come tomorrow. = Você não precisa vir amanhã.`,
            },
          ],
          quiz: [
            { q: "Complete: \"You ___ drink more water. It's good for your health.\" (conselho)", options: ["must","should","can","might"], correct: 1 },
            { q: "\"I can speak three languages\" expressa:", options: ["Obrigação","Habilidade","Proibição","Dedução"], correct: 1 },
            { q: "\"You mustn't use your phone during the test\" significa:", options: ["Você não precisa usar o celular","É proibido usar o celular","Você deveria usar o celular","Talvez você use o celular"], correct: 1 },
            { q: "\"You don't have to wear a uniform on Fridays\" significa:", options: ["É proibido usar uniforme","Não é necessário usar uniforme","É obrigatório usar uniforme","Você deveria usar uniforme"], correct: 1 },
            { q: "Qual frase está correta?", options: ["She can to swim.","She cans swim.","She can swim.","She can swimming."], correct: 2 },
            { q: "\"It may rain tomorrow\" expressa:", options: ["Certeza","Possibilidade","Proibição","Habilidade no passado"], correct: 1 },
            { q: "Qual modal é usado para um pedido educado?", options: ["Must you open the window?","Could you open the window?","Should you open the window?","Mustn't you open the window?"], correct: 1 },
            { q: "\"He worked all night. He must be tired.\" Aqui \"must\" indica:", options: ["Obrigação","Dedução","Permissão","Conselho"], correct: 1 },
            { q: "Qual é o passado de \"can\" (habilidade)?", options: ["canned","could","might","should"], correct: 1 },
            { q: "Complete: \"Drivers ___ stop at a red light.\" (obrigação forte)", options: ["might","must","could","don't have to"], correct: 1 },
          ],
        },
        {
          id: "comparativos-e-superlativos",
          title: "Comparativos e superlativos",
          sections: [
            {
              heading: "Comparativo de superioridade",
              body: `Compara DOIS elementos. Usa "than" (do que).

• Adjetivos curtos (1 sílaba, ou 2 terminadas em -y): + er
  tall → taller · fast → faster · happy → happier · big → bigger
  John is taller than Paul.

• Adjetivos longos (2+ sílabas): more + adjetivo
  expensive → more expensive · interesting → more interesting
  This car is more expensive than that one.`,
            },
            {
              heading: "Superlativo",
              body: `Destaca UM elemento entre vários. Usa "the".

• Curtos: the + adjetivo + est → the tallest, the biggest, the happiest
• Longos: the most + adjetivo → the most expensive, the most beautiful
  Everest is the highest mountain in the world.

Irregulares (muito cobrados):
• good → better → the best
• bad → worse → the worst
• far → farther/further → the farthest/furthest`,
              visual: `<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="en4_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="en4_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="en4_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="en4_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="en4_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="270" rx="12" fill="#F4EEE1"/>
<rect x="70" y="140" width="64" height="80" rx="4" fill="#D8C9A8" stroke="#3E2F20" stroke-width="1.5"/><rect x="82" y="154" width="14" height="10" fill="#F4EEE1"/><rect x="108" y="154" width="14" height="10" fill="#F4EEE1"/><rect x="82" y="176" width="14" height="10" fill="#F4EEE1"/><rect x="108" y="176" width="14" height="10" fill="#F4EEE1"/><rect x="82" y="198" width="14" height="10" fill="#F4EEE1"/><rect x="108" y="198" width="14" height="10" fill="#F4EEE1"/><text x="102" y="240" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">tall</text><text x="102" y="256" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">alto</text><rect x="180" y="90" width="64" height="130" rx="4" fill="#C9B18C" stroke="#3E2F20" stroke-width="1.5"/><rect x="192" y="104" width="14" height="10" fill="#F4EEE1"/><rect x="218" y="104" width="14" height="10" fill="#F4EEE1"/><rect x="192" y="126" width="14" height="10" fill="#F4EEE1"/><rect x="218" y="126" width="14" height="10" fill="#F4EEE1"/><rect x="192" y="148" width="14" height="10" fill="#F4EEE1"/><rect x="218" y="148" width="14" height="10" fill="#F4EEE1"/><rect x="192" y="170" width="14" height="10" fill="#F4EEE1"/><rect x="218" y="170" width="14" height="10" fill="#F4EEE1"/><rect x="192" y="192" width="14" height="10" fill="#F4EEE1"/><rect x="218" y="192" width="14" height="10" fill="#F4EEE1"/><text x="212" y="240" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">taller</text><text x="212" y="256" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">mais alto</text><rect x="290" y="30" width="64" height="190" rx="4" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><rect x="302" y="44" width="14" height="10" fill="#F4EEE1"/><rect x="328" y="44" width="14" height="10" fill="#F4EEE1"/><rect x="302" y="66" width="14" height="10" fill="#F4EEE1"/><rect x="328" y="66" width="14" height="10" fill="#F4EEE1"/><rect x="302" y="88" width="14" height="10" fill="#F4EEE1"/><rect x="328" y="88" width="14" height="10" fill="#F4EEE1"/><rect x="302" y="110" width="14" height="10" fill="#F4EEE1"/><rect x="328" y="110" width="14" height="10" fill="#F4EEE1"/><rect x="302" y="132" width="14" height="10" fill="#F4EEE1"/><rect x="328" y="132" width="14" height="10" fill="#F4EEE1"/><rect x="302" y="154" width="14" height="10" fill="#F4EEE1"/><rect x="328" y="154" width="14" height="10" fill="#F4EEE1"/><rect x="302" y="176" width="14" height="10" fill="#F4EEE1"/><rect x="328" y="176" width="14" height="10" fill="#F4EEE1"/><rect x="302" y="198" width="14" height="10" fill="#F4EEE1"/><rect x="328" y="198" width="14" height="10" fill="#F4EEE1"/><text x="322" y="240" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">the tallest</text><text x="322" y="256" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">o mais alto</text><line x1="40" y1="220" x2="400" y2="220" stroke="#5C4630" stroke-width="2"/><text x="420" y="40" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">curtos (1 sílaba)</text><text x="420" y="58" text-anchor="start" font-size="12" fill="#3E2F20">tall → taller → the tallest</text><text x="420" y="94" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">longos (2+ sílabas)</text><text x="420" y="112" text-anchor="start" font-size="12" fill="#3E2F20">expensive → more expensive</text><text x="420" y="128" text-anchor="start" font-size="12" fill="#3E2F20">→ the most expensive</text><text x="420" y="164" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">irregulares</text><text x="420" y="182" text-anchor="start" font-size="12" fill="#3E2F20">good → better → the best</text><text x="420" y="198" text-anchor="start" font-size="12" fill="#3E2F20">bad → worse → the worst</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Comparativo compara dois (taller than); superlativo destaca um entre todos (the tallest).</p>`,
            },
            {
              heading: "Igualdade e inferioridade",
              body: `• Igualdade: as + adjetivo + as
  She is as tall as her brother. (tão alta quanto)
  Negativa: not as ... as → It isn't as cold as yesterday.

• Inferioridade: less + adjetivo + than
  This book is less interesting than the movie.

Regras de grafia:
• big → bigger (CVC: dobra a consoante)
• happy → happier (y vira i)
• nice → nicer (termina em -e: só + r)`,
            },
          ],
          quiz: [
            { q: "Complete: \"My brother is ___ than me.\"", options: ["tall","taller","tallest","more tall"], correct: 1 },
            { q: "Complete: \"This is the ___ book I have ever read.\"", options: ["more interesting","most interesting","interestinger","interesting"], correct: 1 },
            { q: "Qual é o comparativo de \"good\"?", options: ["gooder","more good","better","best"], correct: 2 },
            { q: "Qual é o superlativo de \"bad\"?", options: ["the baddest","the worse","the worst","the most bad"], correct: 2 },
            { q: "Complete: \"An elephant is ___ than a dog.\"", options: ["big","biger","bigger","biggest"], correct: 2 },
            { q: "Complete: \"Today is ___ than yesterday.\" (happy)", options: ["happyer","happier","more happy","happiest"], correct: 1 },
            { q: "\"She is as tall as her sister\" indica:", options: ["Que ela é mais alta","Que ela é mais baixa","Que as duas têm a mesma altura","Que ela é a mais alta da família"], correct: 2 },
            { q: "Complete: \"A Ferrari is ___ than a bicycle.\"", options: ["expensiver","more expensive","most expensive","the most expensive"], correct: 1 },
            { q: "Complete: \"Everest is ___ mountain in the world.\"", options: ["higher","the higher","the highest","the most high"], correct: 2 },
            { q: "\"This movie is less interesting than the book\" expressa:", options: ["Superioridade","Igualdade","Inferioridade","Superlativo"], correct: 2 },
          ],
        },
        {
          id: "conectivos",
          title: "Conectivos (linking words)",
          sections: [
            {
              heading: "Para que servem",
              body: `Conectivos ligam ideias e mostram a relação entre elas. Em prova, perguntam muito: "a palavra HOWEVER expressa ideia de...?".

Saber o sentido do conectivo ajuda a entender o raciocínio do autor mesmo sem conhecer todas as palavras da frase.`,
            },
            {
              heading: "Conectivos por sentido",
              body: ``,
              visual: `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Adição</p><p class="text-xs text-ochre font-semibold mb-1">e, além disso</p><p class="text-sm text-espresso">and · also · moreover · furthermore · in addition · besides</p></div><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Contraste / oposição</p><p class="text-xs text-ochre font-semibold mb-1">mas, porém, embora</p><p class="text-sm text-espresso">but · however · although · though · even though · nevertheless · whereas · yet · despite · in spite of</p></div><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Causa</p><p class="text-xs text-ochre font-semibold mb-1">porque, devido a</p><p class="text-sm text-espresso">because · because of · since · as · due to</p></div><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Consequência / conclusão</p><p class="text-xs text-ochre font-semibold mb-1">então, portanto</p><p class="text-sm text-espresso">so · therefore · thus · consequently · as a result · hence</p></div><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Exemplo</p><p class="text-xs text-ochre font-semibold mb-1">por exemplo</p><p class="text-sm text-espresso">for example · for instance · such as</p></div><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Condição</p><p class="text-xs text-ochre font-semibold mb-1">se, a menos que</p><p class="text-sm text-espresso">if · unless · provided that · as long as</p></div><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Tempo</p><p class="text-xs text-ochre font-semibold mb-1">quando, enquanto</p><p class="text-sm text-espresso">when · while · after · before · until · as soon as</p></div><div class="rounded-xl border border-sand bg-cream/60 p-3"><p class="font-display text-espresso font-semibold">Finalidade</p><p class="text-xs text-ochre font-semibold mb-1">para, a fim de</p><p class="text-sm text-espresso">to · in order to · so that</p></div></div>`,
            },
            {
              heading: "Detalhes que caem",
              body: `• although / even though + frase completa (sujeito + verbo)
  Although it was raining, we went out.
• despite / in spite of + substantivo ou verbo com -ing
  Despite the rain, we went out. / In spite of being tired, she studied.
• because + frase · because of + substantivo
  We stayed home because it was cold. / We stayed home because of the cold.
• "since" pode ser causa (já que) ou tempo (desde), dependendo do contexto.`,
            },
          ],
          quiz: [
            { q: "\"However\" expressa ideia de:", options: ["Adição","Contraste","Causa","Exemplo"], correct: 1 },
            { q: "\"Therefore\" expressa ideia de:", options: ["Conclusão / consequência","Contraste","Tempo","Condição"], correct: 0 },
            { q: "\"Moreover\" pode ser traduzido como:", options: ["Porém","Além disso","Portanto","Embora"], correct: 1 },
            { q: "Complete: \"___ the rain, we went to the park.\"", options: ["Although","Despite","Because","Unless"], correct: 1 },
            { q: "Complete: \"___ it was raining, we went to the park.\"", options: ["Despite","In spite of","Although","Because of"], correct: 2 },
            { q: "\"For instance\" tem o mesmo sentido de:", options: ["however","for example","therefore","although"], correct: 1 },
            { q: "\"Unless\" significa:", options: ["A menos que","Por causa de","Além disso","Enquanto"], correct: 0 },
            { q: "Complete: \"The flight was cancelled ___ the storm.\"", options: ["because","because of","although","so"], correct: 1 },
            { q: "Em \"She was tired, so she went to bed early\", \"so\" indica:", options: ["Contraste","Consequência","Adição","Finalidade"], correct: 1 },
            { q: "Qual conectivo NÃO expressa contraste?", options: ["although","nevertheless","whereas","furthermore"], correct: 3 },
          ],
        },
        {
          id: "voz-passiva",
          title: "Voz passiva",
          sections: [
            {
              heading: "Ativa × passiva",
              body: `Na voz ativa, o sujeito pratica a ação. Na passiva, o foco vai para quem SOFRE a ação.

• Ativa: Shakespeare wrote Hamlet.
• Passiva: Hamlet was written by Shakespeare.

Estrutura: verbo "to be" (no tempo da ativa) + particípio passado
O agente (quem fez) vem depois de "by", e pode ser omitido quando não importa ou é desconhecido:
• My phone was stolen. (não se sabe quem roubou)`,
              visual: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="en5_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="en5_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="en5_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="en5_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="en5_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="260" rx="12" fill="#F4EEE1"/>
<text x="24" y="32" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">ATIVA</text><text x="24" y="182" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">PASSIVA</text><rect x="110" y="46" width="130" height="40" rx="10" fill="#E4D9C4" stroke="#5B7553" stroke-width="2.5"/><text x="175" y="71" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">The boy</text><text x="175" y="102" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">sujeito</text><rect x="260" y="46" width="110" height="40" rx="10" fill="#E4D9C4" stroke="#A8763E" stroke-width="2.5"/><text x="315" y="71" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">broke</text><text x="315" y="102" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">verbo</text><rect x="390" y="46" width="150" height="40" rx="10" fill="#E4D9C4" stroke="#A6493A" stroke-width="2.5"/><text x="465" y="71" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">the window.</text><text x="465" y="102" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">objeto</text><rect x="60" y="196" width="160" height="40" rx="10" fill="#E4D9C4" stroke="#A6493A" stroke-width="2.5"/><text x="140" y="221" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">The window</text><rect x="240" y="196" width="160" height="40" rx="10" fill="#E4D9C4" stroke="#A8763E" stroke-width="2.5"/><text x="320" y="221" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">was broken</text><rect x="420" y="196" width="150" height="40" rx="10" fill="#E4D9C4" stroke="#5B7553" stroke-width="2.5"/><text x="495" y="221" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">by the boy.</text><path d="M465,104 C465,150 140,150 140,192" fill="none" stroke="#A6493A" stroke-width="2.5" marker-end="url(#en5_A6493A)"/><path d="M175,104 C175,170 495,150 495,192" fill="none" stroke="#5B7553" stroke-width="2" marker-end="url(#en5_5B7553)"/><path d="M315,104 L320,192" fill="none" stroke="#A8763E" stroke-width="2" marker-end="url(#en5_A8763E)"/><text x="332" y="160" text-anchor="start" font-size="11" font-weight="700" fill="#A8763E">be + particípio</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">O objeto da ativa vira sujeito da passiva; o verbo vira "be + particípio"; quem fez a ação aparece (se aparecer) depois de "by".</p>`,
            },
            {
              heading: "Passiva em cada tempo",
              body: `O verbo "to be" assume o tempo da frase ativa; o verbo principal vira particípio.`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Tempo</th><th class="text-left py-2 pr-4 font-display text-ochre">Ativa</th><th class="text-left py-2 pr-4 font-display text-ochre">Passiva</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Simple Present</td><td class="py-1.5 pr-4 text-espresso">They make cars here.</td><td class="py-1.5 pr-4 text-espresso">Cars are made here.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Simple Past</td><td class="py-1.5 pr-4 text-espresso">They built the bridge.</td><td class="py-1.5 pr-4 text-espresso">The bridge was built.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Present Perfect</td><td class="py-1.5 pr-4 text-espresso">They have sold the house.</td><td class="py-1.5 pr-4 text-espresso">The house has been sold.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Future (will)</td><td class="py-1.5 pr-4 text-espresso">They will open the store.</td><td class="py-1.5 pr-4 text-espresso">The store will be opened.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Present Continuous</td><td class="py-1.5 pr-4 text-espresso">They are painting the room.</td><td class="py-1.5 pr-4 text-espresso">The room is being painted.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Modal</td><td class="py-1.5 pr-4 text-espresso">You must do the work.</td><td class="py-1.5 pr-4 text-espresso">The work must be done.</td></tr></tbody></table></div>`,
            },
            {
              heading: "Onde aparece",
              body: `A voz passiva é muito comum em notícias, textos científicos e relatórios, porque destaca o fato e não quem o praticou:
• A new species was discovered in the Amazon.
• The results were published last year.
• English is spoken in many countries.`,
            },
          ],
          quiz: [
            { q: "Qual é a voz passiva de \"The boy broke the window\"?", options: ["The window broke the boy.","The window was broken by the boy.","The window is breaking by the boy.","The boy was broken by the window."], correct: 1 },
            { q: "A voz passiva é formada por:", options: ["have + particípio","to be + particípio","will + verbo base","do + verbo base"], correct: 1 },
            { q: "Em \"Hamlet was written by Shakespeare\", o agente da passiva é:", options: ["Hamlet","was written","Shakespeare","by"], correct: 2 },
            { q: "Complete: \"English ___ in many countries.\"", options: ["speaks","is spoken","spoke","is speaking"], correct: 1 },
            { q: "Complete: \"The bridge ___ in 1990.\"", options: ["built","was built","is build","has build"], correct: 1 },
            { q: "Qual é a passiva de \"They have sold the house\"?", options: ["The house was sold.","The house has been sold.","The house is sold.","The house had sell."], correct: 1 },
            { q: "Complete: \"The store ___ next week.\" (futuro, passiva)", options: ["will open","will be opened","is opening","opened"], correct: 1 },
            { q: "Por que o agente é omitido em \"My phone was stolen\"?", options: ["Porque a frase está errada","Porque não se sabe quem praticou a ação","Porque o verbo é irregular","Porque está no futuro"], correct: 1 },
            { q: "Complete: \"The room ___ painted right now.\"", options: ["is being","was","has been","will"], correct: 0 },
            { q: "Qual frase está na voz passiva?", options: ["Scientists discovered a new species.","A new species was discovered.","Scientists are discovering species.","Scientists will discover a species."], correct: 1 },
          ],
        },
        {
          id: "oracoes-condicionais",
          title: "Orações condicionais (if clauses)",
          sections: [
            {
              heading: "Os quatro tipos",
              body: `Toda condicional tem duas partes: a condição (com "if") e o resultado. A ordem das partes pode trocar: com "if" no começo, use vírgula.`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Tipo</th><th class="text-left py-2 pr-4 font-display text-ochre">Estrutura</th><th class="text-left py-2 pr-4 font-display text-ochre">Uso</th><th class="text-left py-2 pr-4 font-display text-ochre">Exemplo</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Zero</td><td class="py-1.5 pr-4 text-espresso">If + present, present</td><td class="py-1.5 pr-4 text-espresso">verdades, fatos científicos</td><td class="py-1.5 pr-4 text-espresso">If you heat ice, it melts.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">First</td><td class="py-1.5 pr-4 text-espresso">If + present, will + verbo</td><td class="py-1.5 pr-4 text-espresso">situação real, possível no futuro</td><td class="py-1.5 pr-4 text-espresso">If it rains, I will stay home.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Second</td><td class="py-1.5 pr-4 text-espresso">If + past, would + verbo</td><td class="py-1.5 pr-4 text-espresso">situação hipotética, improvável</td><td class="py-1.5 pr-4 text-espresso">If I had money, I would travel.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Third</td><td class="py-1.5 pr-4 text-espresso">If + past perfect, would have + particípio</td><td class="py-1.5 pr-4 text-espresso">passado que não aconteceu</td><td class="py-1.5 pr-4 text-espresso">If I had studied, I would have passed.</td></tr></tbody></table></div>`,
            },
            {
              heading: "Detalhes importantes",
              body: `• Na second conditional, com o verbo "to be", usa-se "were" para todas as pessoas:
  If I were you, I would study more. (Se eu fosse você...)
• "Unless" = if not (a menos que)
  You won't pass unless you study. = You won't pass if you don't study.
• Nunca use "will" na parte do "if":
  If it rains... (e não "If it will rain")`,
            },
            {
              heading: "Como reconhecer o sentido",
              body: `• First → "se acontecer" (é possível): If you study, you will pass.
• Second → "se acontecesse" (imaginação): If I won the lottery, I would buy a house.
• Third → "se tivesse acontecido" (arrependimento, passado): If she had left earlier, she wouldn't have missed the bus.`,
            },
          ],
          quiz: [
            { q: "Complete: \"If it rains tomorrow, I ___ at home.\"", options: ["stay","will stay","would stay","stayed"], correct: 1 },
            { q: "Complete: \"If I had a lot of money, I ___ around the world.\"", options: ["will travel","travel","would travel","traveled"], correct: 2 },
            { q: "Complete: \"If I ___ you, I would study more.\"", options: ["am","was being","were","will be"], correct: 2 },
            { q: "\"If you heat ice, it melts\" é um exemplo de:", options: ["Zero conditional","First conditional","Second conditional","Third conditional"], correct: 0 },
            { q: "A third conditional expressa:", options: ["Um fato científico","Uma possibilidade real no futuro","Uma situação no passado que não aconteceu","Uma ordem"], correct: 2 },
            { q: "Complete: \"If she had studied, she ___ the test.\"", options: ["will pass","would pass","would have passed","passes"], correct: 2 },
            { q: "\"Unless\" significa o mesmo que:", options: ["if","if not","because","although"], correct: 1 },
            { q: "Qual frase está correta?", options: ["If it will rain, I will stay home.","If it rains, I will stay home.","If it rained, I will stay home.","If it rains, I would stayed home."], correct: 1 },
            { q: "\"If I won the lottery, I would buy a house\" expressa uma situação:", options: ["Real e muito provável","Hipotética, imaginada","Que já aconteceu","Científica"], correct: 1 },
            { q: "Complete: \"You won't pass ___ you study.\"", options: ["if","unless","because","so"], correct: 1 },
          ],
        },
        {
          id: "pronomes-relativos",
          title: "Pronomes relativos",
          sections: [
            {
              heading: "Para que servem",
              body: `Os pronomes relativos ligam duas orações, retomando um termo já citado e evitando repetição.

• The woman is a doctor. She lives next door.
→ The woman who lives next door is a doctor.`,
            },
            {
              heading: "Cada pronome",
              body: ``,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Pronome</th><th class="text-left py-2 pr-4 font-display text-ochre">Usado para</th><th class="text-left py-2 pr-4 font-display text-ochre">Exemplo</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">who</td><td class="py-1.5 pr-4 text-espresso">pessoas</td><td class="py-1.5 pr-4 text-espresso">The man who called you is my uncle.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">which</td><td class="py-1.5 pr-4 text-espresso">coisas e animais</td><td class="py-1.5 pr-4 text-espresso">The book which I bought is great.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">that</td><td class="py-1.5 pr-4 text-espresso">pessoas ou coisas (informal)</td><td class="py-1.5 pr-4 text-espresso">The car that I want is red.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">whose</td><td class="py-1.5 pr-4 text-espresso">posse (cujo, cuja)</td><td class="py-1.5 pr-4 text-espresso">The girl whose father is a pilot travels a lot.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">where</td><td class="py-1.5 pr-4 text-espresso">lugar (onde)</td><td class="py-1.5 pr-4 text-espresso">This is the city where I was born.</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">when</td><td class="py-1.5 pr-4 text-espresso">tempo (quando)</td><td class="py-1.5 pr-4 text-espresso">I remember the day when we met.</td></tr></tbody></table></div>`,
            },
            {
              heading: "Dicas",
              body: `• "Whose" sempre vem seguido de um substantivo: whose father, whose car.
• Quando o relativo é OBJETO da oração, ele pode ser omitido:
  The book (that) I bought is great.
• Quando é SUJEITO, não pode ser omitido:
  The man who called you... (o "who" é obrigatório)
• Em questões de referência, o relativo retoma o termo que vem logo antes dele.`,
            },
          ],
          quiz: [
            { q: "Complete: \"The teacher ___ helped me is very kind.\"", options: ["which","who","where","whose"], correct: 1 },
            { q: "Complete: \"This is the house ___ I grew up.\"", options: ["who","which","where","whose"], correct: 2 },
            { q: "Complete: \"The boy ___ bike was stolen called the police.\"", options: ["who","whose","which","where"], correct: 1 },
            { q: "Complete: \"The movie ___ we watched was boring.\"", options: ["who","whose","which","where"], correct: 2 },
            { q: "\"Whose\" expressa ideia de:", options: ["Lugar","Posse","Tempo","Pessoa"], correct: 1 },
            { q: "\"Which\" é usado para:", options: ["Pessoas","Coisas e animais","Lugares, apenas","Posse"], correct: 1 },
            { q: "Em qual frase o pronome relativo pode ser omitido?", options: ["The man who called you is here.","The book that I bought is great.","The girl who lives here is my sister.","The dog which bit me is gone."], correct: 1 },
            { q: "Complete: \"I remember the day ___ we met.\"", options: ["where","when","who","whose"], correct: 1 },
            { q: "\"That\" pode substituir:", options: ["Apenas \"who\"","Apenas \"which\"","\"Who\" e \"which\"","\"Whose\" e \"where\""], correct: 2 },
            { q: "Em \"The scientists who discovered the vaccine won a prize\", \"who\" refere-se a:", options: ["the vaccine","a prize","the scientists","won"], correct: 2 },
          ],
        },
        {
          id: "formacao-de-palavras",
          title: "Formação de palavras (prefixos e sufixos)",
          sections: [
            {
              heading: "Por que estudar isso",
              body: `Conhecer prefixos e sufixos permite deduzir o sentido de palavras novas a partir de uma que você já conhece.

• happy (feliz) → unhappy (infeliz) → happiness (felicidade)
• use (usar) → useful (útil) → useless (inútil)`,
            },
            {
              heading: "Prefixos",
              body: ``,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Prefixo</th><th class="text-left py-2 pr-4 font-display text-ochre">Ideia</th><th class="text-left py-2 pr-4 font-display text-ochre">Exemplos</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">un-</td><td class="py-1.5 pr-4 text-espresso">negação</td><td class="py-1.5 pr-4 text-espresso">unhappy · unknown · unable</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">in- / im- / il- / ir-</td><td class="py-1.5 pr-4 text-espresso">negação</td><td class="py-1.5 pr-4 text-espresso">incorrect · impossible · illegal · irregular</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">dis-</td><td class="py-1.5 pr-4 text-espresso">negação, oposto</td><td class="py-1.5 pr-4 text-espresso">disagree · dislike · disappear</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">mis-</td><td class="py-1.5 pr-4 text-espresso">erradamente</td><td class="py-1.5 pr-4 text-espresso">misunderstand · misuse</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">re-</td><td class="py-1.5 pr-4 text-espresso">de novo</td><td class="py-1.5 pr-4 text-espresso">rewrite · rebuild · recycle</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">over-</td><td class="py-1.5 pr-4 text-espresso">excesso</td><td class="py-1.5 pr-4 text-espresso">overweight · overwork</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">pre- / post-</td><td class="py-1.5 pr-4 text-espresso">antes / depois</td><td class="py-1.5 pr-4 text-espresso">preview · postwar</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">inter-</td><td class="py-1.5 pr-4 text-espresso">entre</td><td class="py-1.5 pr-4 text-espresso">international · interact</td></tr></tbody></table></div>`,
            },
            {
              heading: "Sufixos",
              body: `O sufixo costuma mostrar a CLASSE da palavra (substantivo, adjetivo, advérbio, verbo).`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Sufixo</th><th class="text-left py-2 pr-4 font-display text-ochre">Forma</th><th class="text-left py-2 pr-4 font-display text-ochre">Exemplos</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-ness</td><td class="py-1.5 pr-4 text-espresso">substantivo</td><td class="py-1.5 pr-4 text-espresso">happiness · kindness · darkness</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-ment</td><td class="py-1.5 pr-4 text-espresso">substantivo</td><td class="py-1.5 pr-4 text-espresso">development · government · movement</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-tion / -sion</td><td class="py-1.5 pr-4 text-espresso">substantivo</td><td class="py-1.5 pr-4 text-espresso">information · education · decision</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-er / -or</td><td class="py-1.5 pr-4 text-espresso">quem faz (agente)</td><td class="py-1.5 pr-4 text-espresso">teacher · worker · actor</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-ful</td><td class="py-1.5 pr-4 text-espresso">adjetivo (cheio de)</td><td class="py-1.5 pr-4 text-espresso">useful · beautiful · careful</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-less</td><td class="py-1.5 pr-4 text-espresso">adjetivo (sem)</td><td class="py-1.5 pr-4 text-espresso">useless · careless · homeless</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-able / -ible</td><td class="py-1.5 pr-4 text-espresso">adjetivo (que pode ser)</td><td class="py-1.5 pr-4 text-espresso">readable · comfortable · visible</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-ly</td><td class="py-1.5 pr-4 text-espresso">advérbio (modo)</td><td class="py-1.5 pr-4 text-espresso">quickly · carefully · easily</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">-ize</td><td class="py-1.5 pr-4 text-espresso">verbo</td><td class="py-1.5 pr-4 text-espresso">modernize · organize · realize</td></tr></tbody></table></div>`,
            },
          ],
          quiz: [
            { q: "O prefixo \"un-\" em \"unhappy\" indica:", options: ["Repetição","Negação","Excesso","Posse"], correct: 1 },
            { q: "\"Rewrite\" significa:", options: ["Escrever errado","Reescrever","Não escrever","Escrever antes"], correct: 1 },
            { q: "O sufixo \"-less\" em \"homeless\" indica:", options: ["Cheio de","Sem","Quem faz","Modo"], correct: 1 },
            { q: "\"Useful\" e \"useless\" significam, respectivamente:", options: ["Útil e inútil","Inútil e útil","Usado e usável","Uso e usuário"], correct: 0 },
            { q: "O sufixo \"-ly\" em \"quickly\" forma um:", options: ["Substantivo","Verbo","Advérbio","Adjetivo comparativo"], correct: 2 },
            { q: "Qual palavra indica uma pessoa que faz uma ação?", options: ["kindness","worker","careful","impossible"], correct: 1 },
            { q: "\"Misunderstand\" significa:", options: ["Entender bem","Entender errado","Entender de novo","Não querer entender"], correct: 1 },
            { q: "Qual é o substantivo formado a partir de \"happy\"?", options: ["happily","unhappy","happiness","happier"], correct: 2 },
            { q: "O prefixo de \"impossible\" e \"illegal\" indica:", options: ["Negação","Repetição","Excesso","Tempo"], correct: 0 },
            { q: "Em \"The book is readable\", \"readable\" significa:", options: ["Que já foi lido","Que pode ser lido","Que não pode ser lido","Leitor"], correct: 1 },
          ],
        },
      ],
    },
);
