window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "biologia-b",
      name: "Biologia B",
      emoji: "🧬",
      contents: [
        {
          id: "codigo-genetico",
          title: "Código Genético",
          sections: [
            {
              heading: "1. Relação entre DNA, RNA e proteína",
              body: `O DNA é a molécula que armazena as informações genéticas. Essas informações precisam ser utilizadas para produzir proteínas.

A relação pode ser entendida assim:
DNA → RNA → PROTEÍNA

O DNA contém a informação, o RNA leva essa informação até o local de produção e a proteína é formada a partir dela.

Como essa informação funciona?
O DNA possui bases nitrogenadas:
A = Adenina
T = Timina
C = Citosina
G = Guanina

No RNA, a Timina (T) é substituída pela Uracila (U):
A = Adenina
U = Uracila
C = Citosina
G = Guanina

Durante a formação do RNA, ocorre o pareamento das bases:
DNA → RNA
A → U
T → A
C → G
G → C`,
              visual: `
<div class="flex flex-col items-center gap-3">
  <div class="flex items-center gap-2 flex-wrap justify-center">
    <div class="rounded-lg bg-espresso text-cream px-4 py-2 text-sm font-semibold">DNA</div>
    <span class="text-ochre text-lg">→</span>
    <div class="rounded-lg bg-beige border border-sand px-4 py-2 text-sm font-semibold text-bark">RNA</div>
    <span class="text-ochre text-lg">→</span>
    <div class="rounded-lg bg-cream border border-sand px-4 py-2 text-sm font-semibold text-bark">PROTEÍNA</div>
  </div>
  <div class="overflow-x-auto w-full max-w-[180px]">
    <table class="w-full text-sm border-collapse mt-2">
      <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-1.5 pr-3 font-display text-bark">DNA</th><th class="text-left py-1.5 font-display text-bark">RNA</th></tr></thead>
      <tbody>
        <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">A</td><td class="py-1.5 text-bark/80">U</td></tr>
        <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">T</td><td class="py-1.5 text-bark/80">A</td></tr>
        <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">C</td><td class="py-1.5 text-bark/80">G</td></tr>
        <tr><td class="py-1.5 pr-3 text-bark/80">G</td><td class="py-1.5 text-bark/80">C</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
            },
            {
              heading: "2. Códon",
              body: `A informação genética é lida de 3 em 3 bases.

Um conjunto de 3 bases do RNA mensageiro (RNAm) é chamado de códon.
3 bases → 1 códon → 1 aminoácido

Os aminoácidos são as unidades que se juntam para formar uma proteína.

Exemplo:
RNAm: AUG → determina o aminoácido Metionina (MET)
RNAm: GUC → determina o aminoácido Valina (VAL)

Portanto, a sequência de códons do RNAm determina a sequência de aminoácidos da proteína.`,
            },
            {
              heading: "3. Síntese de proteínas",
              body: `A síntese de proteínas acontece em duas etapas principais.

1ª etapa — Transcrição
A transcrição acontece no núcleo.
Nessa etapa, uma parte do DNA serve como molde para produzir uma molécula de RNA mensageiro (RNAm).
DNA → RNAm
O RNAm é como uma cópia da informação do DNA que poderá sair do núcleo.

2ª etapa — Tradução
A tradução acontece no citoplasma, nos ribossomos.
O RNAm chega ao ribossomo e seus códons são lidos.
O RNA transportador (RNAt) possui um anticódon, que se liga ao códon correspondente do RNAm, trazendo o aminoácido correto.
Assim: RNAm → códons → RNAt → aminoácidos → proteína`,
              visual: `
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="text-xs uppercase tracking-wide text-ochre font-semibold mb-1">1ª etapa</p>
    <p class="font-display text-base text-espresso mb-1">Transcrição</p>
    <p class="text-[11px] text-bark/60 mb-2">Local: núcleo</p>
    <p class="text-sm text-bark font-medium">DNA → RNAm</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="text-xs uppercase tracking-wide text-ochre font-semibold mb-1">2ª etapa</p>
    <p class="font-display text-base text-espresso mb-1">Tradução</p>
    <p class="text-[11px] text-bark/60 mb-2">Local: citoplasma (ribossomos)</p>
    <p class="text-sm text-bark font-medium">RNAm → proteína</p>
  </div>
</div>`,
            },
            {
              heading: "4. Códon e anticódon",
              body: `É importante não confundir:

Códon: sequência de 3 bases presente no RNAm.
Anticódon: sequência de 3 bases presente no RNAt, complementar ao códon do RNAm.

Exemplo:
RNAm: AUG
RNAt: UAC
O anticódon UAC se encaixa no códon AUG.`,
            },
            {
              heading: "5. Como a proteína é formada",
              body: `Imagine que o RNAm seja uma sequência de instruções:
AUG → GUC → CCC → GGU → UGA

Cada códon indica o aminoácido que deve ser colocado na sequência:
AUG → MET
GUC → VAL
CCC → PRO
GGU → GLY
UGA → PARADA

Então: MET → VAL → PRO → GLY

Essa sequência de aminoácidos forma uma proteína.`,
              visual: `
<div class="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
  <div class="text-center"><div class="rounded-lg bg-cream border border-sand px-2.5 py-1.5 font-mono text-bark">AUG</div><p class="text-[10px] text-bark/60 mt-1">MET</p></div>
  <span class="text-ochre">→</span>
  <div class="text-center"><div class="rounded-lg bg-cream border border-sand px-2.5 py-1.5 font-mono text-bark">GUC</div><p class="text-[10px] text-bark/60 mt-1">VAL</p></div>
  <span class="text-ochre">→</span>
  <div class="text-center"><div class="rounded-lg bg-cream border border-sand px-2.5 py-1.5 font-mono text-bark">CCC</div><p class="text-[10px] text-bark/60 mt-1">PRO</p></div>
  <span class="text-ochre">→</span>
  <div class="text-center"><div class="rounded-lg bg-cream border border-sand px-2.5 py-1.5 font-mono text-bark">GGU</div><p class="text-[10px] text-bark/60 mt-1">GLY</p></div>
  <span class="text-ochre">→</span>
  <div class="text-center"><div class="rounded-lg bg-espresso text-cream px-2.5 py-1.5 font-mono">UGA</div><p class="text-[10px] text-bark/60 mt-1">PARADA</p></div>
</div>`,
            },
            {
              heading: "6. Códon de iniciação e códons de parada",
              body: `A tradução possui sinais que indicam quando começar e quando terminar.

Códon de iniciação
O principal códon de início é: AUG → Metionina (MET)
Ele indica o início da tradução.

Códons de parada
Alguns códons não determinam aminoácidos. Eles indicam que a tradução deve terminar.
Exemplos: UAA, UAG e UGA → códons de parada

Portanto:
AUG → início
UAA / UAG / UGA → parada`,
            },
            {
              heading: "7. O papel de cada RNA",
              body: `Existem diferentes tipos de RNA envolvidos na produção de proteínas.

RNAm — RNA mensageiro
É responsável por levar a informação genética do DNA até o ribossomo.
Função: levar a receita.

RNAt — RNA transportador
Transporta os aminoácidos até o ribossomo e possui um anticódon que reconhece os códons do RNAm.
Função: levar os ingredientes.

RNAr — RNA ribossômico
Participa da formação e funcionamento do ribossomo, local onde ocorre a tradução.
Função: participar da "cozinha" onde a proteína é produzida.`,
              visual: `
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-base text-espresso mb-1">RNAm</p>
    <p class="text-[11px] text-bark/60 mb-2">RNA mensageiro</p>
    <p class="text-xs text-bark/80">Leva a informação do DNA até o ribossomo</p>
    <p class="text-[10px] text-ochre font-medium mt-2">"leva a receita"</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-base text-espresso mb-1">RNAt</p>
    <p class="text-[11px] text-bark/60 mb-2">RNA transportador</p>
    <p class="text-xs text-bark/80">Transporta os aminoácidos até o ribossomo</p>
    <p class="text-[10px] text-ochre font-medium mt-2">"leva os ingredientes"</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-4 text-center">
    <p class="font-display text-base text-espresso mb-1">RNAr</p>
    <p class="text-[11px] text-bark/60 mb-2">RNA ribossômico</p>
    <p class="text-xs text-bark/80">Participa da formação do ribossomo</p>
    <p class="text-[10px] text-ochre font-medium mt-2">"participa da cozinha"</p>
  </div>
</div>`,
            },
            {
              heading: "8. Analogia para entender a síntese de proteínas",
              body: `Uma forma de entender sem decorar é imaginar que a produção de uma proteína é como fazer um bolo:

DNA = receita original — o DNA guarda a informação de como fazer a proteína.
RNAm = cópia da receita — uma cópia da informação do DNA é produzida para poder ser utilizada.
Ribossomo = cozinha — é o local onde a informação do RNAm é lida e a proteína é montada.
RNAt = ajudante — leva os ingredientes corretos até o ribossomo.
Aminoácidos = ingredientes — são as unidades que serão organizadas para formar a proteína.
Proteína = bolo — é o produto final formado a partir dos aminoácidos.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Elemento biológico</th><th class="text-left py-2 font-display text-bark">Analogia (bolo)</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">DNA</td><td class="py-2 text-bark/80">Receita original</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">RNAm</td><td class="py-2 text-bark/80">Cópia da receita</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Ribossomo</td><td class="py-2 text-bark/80">Cozinha</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">RNAt</td><td class="py-2 text-bark/80">Ajudante</td></tr>
      <tr class="border-b border-sand/60"><td class="py-2 pr-3 text-bark/80">Aminoácidos</td><td class="py-2 text-bark/80">Ingredientes</td></tr>
      <tr><td class="py-2 pr-3 text-bark/80">Proteína</td><td class="py-2 text-bark/80">Bolo</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "9. Código genético",
              body: `O código genético é o conjunto de regras que relaciona os códons do RNAm aos aminoácidos que formarão as proteínas.
Ele permite que a informação armazenada no DNA seja transformada em uma sequência específica de aminoácidos.

Características importantes
É universal: praticamente todos os seres vivos utilizam o mesmo código genético.
É degenerado: diferentes códons podem determinar o mesmo aminoácido. Isso acontece porque existem vários códons diferentes para alguns aminoácidos.`,
            },
            {
              heading: "10. O processo completo",
              body: `Agora juntando tudo:
DNA → Transcrição → RNAm → Ribossomo → Leitura dos códons → RNAt traz os aminoácidos → Aminoácidos são unidos → Proteína

O mais importante para entender:
O DNA guarda a informação.
O RNAm copia e leva essa informação.
O ribossomo lê o RNAm.
O RNAt traz os aminoácidos correspondentes.
Os aminoácidos são organizados na ordem determinada pelos códons.
Essa sequência de aminoácidos forma a proteína.

DNA → RNAm → códons → aminoácidos → proteína`,
              visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">DNA</div>
  <span class="text-ochre text-xs">↓ Transcrição</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">RNAm</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Ribossomo</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Leitura dos códons</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">RNAt traz os aminoácidos</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">Aminoácidos são unidos</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-beige border border-sand px-3 py-2 text-sm text-bark font-semibold">Proteína</div>
</div>`,
            },
          ],
          quiz: [
            { q: "Qual é a relação básica entre DNA, RNA e proteína?", options: ["DNA → RNA → PROTEÍNA","RNA → DNA → PROTEÍNA","PROTEÍNA → DNA → RNA","DNA → PROTEÍNA → RNA"], correct: 0 },
            { q: "No RNA, qual base substitui a Timina do DNA?", options: ["Uracila","Citosina","Guanina","Adenina"], correct: 0 },
            { q: "No pareamento DNA → RNA, a base C do DNA corresponde a qual base no RNA?", options: ["G","U","A","C"], correct: 0 },
            { q: "O que é um códon?", options: ["Um conjunto de 3 bases do RNAm que corresponde a um aminoácido","Um conjunto de 2 bases do DNA","Uma única base do RNAt","Uma proteína completa"], correct: 0 },
            { q: "Onde ocorre a transcrição?", options: ["No núcleo","No citoplasma","No ribossomo","Na membrana celular"], correct: 0 },
            { q: "Onde ocorre a tradução?", options: ["No citoplasma, nos ribossomos","No núcleo","Na mitocôndria","No retículo endoplasmático"], correct: 0 },
            { q: "O que é o anticódon?", options: ["Uma sequência de 3 bases do RNAt, complementar ao códon do RNAm","Uma sequência de 3 bases do DNA","O mesmo que o códon do RNAm","Uma proteína formada no ribossomo"], correct: 0 },
            { q: "Qual é o principal códon de iniciação da tradução?", options: ["AUG","UAA","UAG","UGA"], correct: 0 },
            { q: "Quais códons indicam parada da tradução?", options: ["UAA, UAG e UGA","AUG, GUC e CCC","Apenas AUG","Apenas UGA"], correct: 0 },
            { q: "Por que o código genético é considerado degenerado?", options: ["Porque diferentes códons podem determinar o mesmo aminoácido","Porque só funciona em alguns seres vivos","Porque não segue nenhuma regra fixa","Porque cada aminoácido tem apenas um códon possível"], correct: 0 },
          ],
        },
        {
          id: "membrana-plasmatica",
          title: "Membrana plasmática",
          sections: [
            {
              heading: "Importância",
              body: `A membrana plasmática:

• Está presente em todos os tipos celulares
• Reconhece moléculas
• Delimita as células
• Realiza a permeabilidade seletiva, controlando quem entra e sai da célula
• Protege a célula`,
            },
            {
              heading: "Composição química",
              body: `A constituição química da membrana plasmática é lipoproteica, ou seja, formada principalmente por lipídios e proteínas.`,
            },
            {
              heading: "Modelo estrutural: mosaico fluido",
              body: `O modelo aceito é o do mosaico fluido, proposto por Singer e Nicolson.

• A membrana é formada por uma dupla camada de fosfolipídios, com proteínas inseridas nessa estrutura
• Os fosfolipídios formam a bicamada
• As proteínas ficam associadas à membrana e desempenham diferentes funções
• A membrana possui um meio externo e um meio interno à célula

A ilustração abaixo mostra essa organização.`,
              visual: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px;height:auto;display:block;margin:0 auto;">
  <rect x="0" y="0" width="600" height="240" rx="12" fill="#F4EEE1"/>
  <text x="300" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">Modelo do Mosaico Fluido</text>
  <text x="20" y="56" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">MEIO EXTERNO</text>
  <text x="20" y="226" text-anchor="start" font-size="12" font-weight="700" fill="#A8763E">MEIO INTERNO</text>
  <line x1="107" y1="100" x2="107" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="113" y1="100" x2="113" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="110" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="107" y1="132" x2="107" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="113" y1="132" x2="113" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="110" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="127" y1="100" x2="127" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="133" y1="100" x2="133" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="130" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="127" y1="132" x2="127" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="133" y1="132" x2="133" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="130" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="147" y1="100" x2="147" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="153" y1="100" x2="153" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="150" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="147" y1="132" x2="147" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="153" y1="132" x2="153" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="150" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="167" y1="100" x2="167" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="173" y1="100" x2="173" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="170" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="167" y1="132" x2="167" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="173" y1="132" x2="173" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="170" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="247" y1="100" x2="247" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="253" y1="100" x2="253" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="250" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="247" y1="132" x2="247" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="253" y1="132" x2="253" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="250" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="267" y1="100" x2="267" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="273" y1="100" x2="273" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="270" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="267" y1="132" x2="267" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="273" y1="132" x2="273" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="270" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="287" y1="100" x2="287" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="293" y1="100" x2="293" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="290" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="287" y1="132" x2="287" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="293" y1="132" x2="293" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="290" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="307" y1="100" x2="307" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="313" y1="100" x2="313" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="310" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="307" y1="132" x2="307" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="313" y1="132" x2="313" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="310" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="387" y1="100" x2="387" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="393" y1="100" x2="393" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="390" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="387" y1="132" x2="387" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="393" y1="132" x2="393" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="390" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="407" y1="100" x2="407" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="413" y1="100" x2="413" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="410" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="407" y1="132" x2="407" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="413" y1="132" x2="413" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="410" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="427" y1="100" x2="427" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="433" y1="100" x2="433" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="430" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="427" y1="132" x2="427" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="433" y1="132" x2="433" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="430" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="447" y1="100" x2="447" y2="128" stroke="#C9B18C" stroke-width="2"/><line x1="453" y1="100" x2="453" y2="128" stroke="#C9B18C" stroke-width="2"/><circle cx="450" cy="94" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <line x1="447" y1="132" x2="447" y2="160" stroke="#C9B18C" stroke-width="2"/><line x1="453" y1="132" x2="453" y2="160" stroke="#C9B18C" stroke-width="2"/><circle cx="450" cy="166" r="8" fill="#E4D9C4" stroke="#A8763E" stroke-width="1.5"/>
  <rect x="196" y="84" width="48" height="92" rx="14" fill="#A8763E" stroke="#5C4630" stroke-width="1.5"/>
  <rect x="336" y="84" width="48" height="92" rx="14" fill="#A8763E" stroke="#5C4630" stroke-width="1.5"/>
  <ellipse cx="290" cy="82" rx="26" ry="14" fill="#5C4630" stroke="#3E2F20" stroke-width="1.5"/>
    <text x="290" y="56" text-anchor="middle" font-size="12" fill="#3E2F20">Proteína periférica</text>
  <text x="290" y="196" text-anchor="middle" font-size="12" fill="#3E2F20">Proteínas inseridas na bicamada</text>
  <text x="535" y="100" text-anchor="middle" font-size="10" fill="#5C4630">cabeça</text>
  <text x="535" y="114" text-anchor="middle" font-size="10" fill="#5C4630">(hidrofílica)</text>
  <text x="535" y="148" text-anchor="middle" font-size="10" fill="#5C4630">caudas</text>
  <text x="535" y="162" text-anchor="middle" font-size="10" fill="#5C4630">(hidrofóbicas)</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Dupla camada de fosfolipídios com proteínas inseridas, separando o meio externo do meio interno.</p>`,
            },
            {
              heading: "Estrutura em resumo",
              body: `Estrutura da membrana plasmática:

• Dupla camada de fosfolipídios
• Proteínas
• Meio externo
• Meio interno`,
            },
          ],
          quiz: [
            { q: "A membrana plasmática está presente em:", options: ["Apenas células animais","Apenas células vegetais","Apenas células procariontes","Todos os tipos celulares"], correct: 3 },
            { q: "Qual das funções abaixo é realizada pela membrana plasmática?", options: ["Produzir energia por fotossíntese","Armazenar o material genético","Delimitar a célula e proteger","Sintetizar proteínas nos ribossomos"], correct: 2 },
            { q: "O que significa dizer que a membrana plasmática realiza permeabilidade seletiva?", options: ["Que ela deixa passar todas as substâncias sem controle","Que ela controla quais substâncias entram e saem da célula","Que ela impede qualquer troca com o meio externo","Que ela só permite a saída de substâncias"], correct: 1 },
            { q: "Qual é a composição química da membrana plasmática?", options: ["Glicídica, formada principalmente por carboidratos","Nucleica, formada por DNA e RNA","Lipoproteica, formada principalmente por lipídios e proteínas","Mineral, formada por sais e água"], correct: 2 },
            { q: "O modelo estrutural aceito para a membrana plasmática é chamado de:", options: ["Modelo do mosaico fluido","Modelo da dupla hélice","Modelo da chave-fechadura","Modelo do ajuste induzido"], correct: 0 },
            { q: "Quais cientistas propuseram o modelo do mosaico fluido?", options: ["Watson e Crick","Singer e Nicolson","Hooke e Schleiden","Mendel e Morgan"], correct: 1 },
            { q: "Segundo o modelo do mosaico fluido, a membrana é formada por:", options: ["Uma camada única de proteínas","Uma dupla camada de fosfolipídios com proteínas inseridas","Uma parede rígida de celulose","Uma camada de DNA envolvida por lipídios"], correct: 1 },
            { q: "Qual componente da membrana forma a bicamada?", options: ["Os fosfolipídios","Os carboidratos","Os ácidos nucleicos","As vitaminas"], correct: 0 },
            { q: "Qual é o papel das proteínas associadas à membrana plasmática?", options: ["Não têm função, apenas preenchem espaço","Desempenham diferentes funções, como reconhecer moléculas","Servem apenas como reserva de energia","Formam sozinhas toda a bicamada"], correct: 1 },
            { q: "A membrana plasmática separa quais dois ambientes?", options: ["Núcleo e nucléolo","Meio externo e meio interno da célula","Citoplasma e mitocôndria","Parede celular e cloroplasto"], correct: 1 },
            { q: "A capacidade da membrana de \"reconhecer moléculas\" está relacionada principalmente a:", options: ["Ao núcleo da célula","Ao tamanho da célula","Às proteínas e estruturas associadas à membrana","À cor da célula"], correct: 2 },
            { q: "Por que o modelo é chamado de \"mosaico\"?", options: ["Porque as proteínas aparecem inseridas em meio aos fosfolipídios, como peças de um mosaico","Porque a membrana é formada por quadrados de celulose","Porque a membrana tem várias cores","Porque cada célula tem uma membrana diferente"], correct: 0 },
            { q: "Por que o modelo é chamado de \"fluido\"?", options: ["Porque a membrana é totalmente líquida","Porque os componentes da membrana têm mobilidade, não são estruturas rígidas","Porque a membrana só existe em células aquáticas","Porque a membrana é feita de água"], correct: 1 },
            { q: "Além de delimitar a célula, a membrana plasmática também:", options: ["Realiza a síntese de lipídios para a digestão","Substitui o papel do núcleo","Controla quem entra e sai e protege a célula","Produz todos os hormônios do corpo"], correct: 2 },
            { q: "Qual alternativa descreve corretamente a estrutura da membrana plasmática?", options: ["Proteínas inseridas em uma dupla camada de fosfolipídios, com meio externo e meio interno","Uma única camada de fosfolipídios sem proteínas","Uma camada de carboidratos com DNA no interior","Uma parede de celulose com poros fixos"], correct: 0 },
          ],
        },
        {
          id: "fisiologia-da-membrana",
          title: "Fisiologia da membrana",
          sections: [
            {
              heading: "Transporte passivo",
              body: `A passagem de substâncias através da membrana plasmática sem gasto de energia é conhecida como transporte passivo.

→ Ocorre a favor de um gradiente de concentração: as moléculas migram de uma região mais concentrada para uma região menos concentrada.

Tipos de transporte passivo:

• Difusão simples
• Difusão facilitada
• Osmose`,
            },
            {
              heading: "Difusão simples e difusão facilitada",
              body: `Difusão simples
• Ocorre com gases e íons.

Difusão facilitada
• Ocorre na presença da permease, proteína que facilita a entrada ou saída da molécula.

Na ilustração, G = glicose e a permease é a proteína inserida na membrana.`,
              visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs><marker id="setaDif" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#3E2F20"/></marker></defs>
  <text x="160" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">DIFUSÃO SIMPLES</text>
  <text x="480" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">DIFUSÃO FACILITADA</text>
  <line x1="320" y1="10" x2="320" y2="290" stroke="#C9B18C" stroke-dasharray="5 5"/>
  <rect x="30" y="125" width="260" height="30" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/>
  <rect x="350" y="125" width="260" height="30" fill="#E4D9C4" stroke="#C9B18C" stroke-width="1.5"/>
  <rect x="440" y="115" width="40" height="50" rx="10" fill="#A8763E" stroke="#5C4630" stroke-width="1.5"/>
  <rect x="453" y="115" width="14" height="50" fill="#F4EEE1"/>
  <circle cx="60" cy="60" r="5" fill="#5C4630"/><circle cx="100" cy="60" r="5" fill="#5C4630"/><circle cx="140" cy="60" r="5" fill="#5C4630"/><circle cx="180" cy="60" r="5" fill="#5C4630"/><circle cx="220" cy="60" r="5" fill="#5C4630"/><circle cx="260" cy="60" r="5" fill="#5C4630"/><circle cx="80" cy="60" r="5" fill="#5C4630"/><circle cx="160" cy="60" r="5" fill="#5C4630"/><circle cx="240" cy="60" r="5" fill="#5C4630"/>
  <circle cx="70" cy="90" r="5" fill="#5C4630"/><circle cx="90" cy="90" r="5" fill="#5C4630"/><circle cx="130" cy="90" r="5" fill="#5C4630"/><circle cx="150" cy="90" r="5" fill="#5C4630"/><circle cx="190" cy="90" r="5" fill="#5C4630"/><circle cx="200" cy="90" r="5" fill="#5C4630"/><circle cx="250" cy="90" r="5" fill="#5C4630"/><circle cx="270" cy="90" r="5" fill="#5C4630"/>
  <circle cx="140" cy="220" r="5" fill="#5C4630"/><circle cx="220" cy="220" r="5" fill="#5C4630"/>
  <line x1="160" y1="100" x2="160" y2="205" stroke="#3E2F20" stroke-width="2.5" marker-end="url(#setaDif)"/>
  <text x="40" y="143" text-anchor="start" font-size="10" fill="#5C4630">bicamada</text>
  <text x="160" y="262" text-anchor="middle" font-size="12" fill="#3E2F20">Gases atravessam direto</text>
  <circle cx="370" cy="60" r="7" fill="#5B7553"/><circle cx="410" cy="60" r="7" fill="#5B7553"/><circle cx="450" cy="60" r="7" fill="#5B7553"/><circle cx="490" cy="60" r="7" fill="#5B7553"/><circle cx="530" cy="60" r="7" fill="#5B7553"/><circle cx="570" cy="60" r="7" fill="#5B7553"/><circle cx="390" cy="60" r="7" fill="#5B7553"/><circle cx="470" cy="60" r="7" fill="#5B7553"/><circle cx="550" cy="60" r="7" fill="#5B7553"/>
  <circle cx="380" cy="92" r="7" fill="#5B7553"/><circle cx="420" cy="92" r="7" fill="#5B7553"/><circle cx="500" cy="92" r="7" fill="#5B7553"/><circle cx="540" cy="92" r="7" fill="#5B7553"/><circle cx="580" cy="92" r="7" fill="#5B7553"/>
  <circle cx="520" cy="215" r="7" fill="#5B7553"/><circle cx="560" cy="235" r="7" fill="#5B7553"/>
  <line x1="460" y1="100" x2="460" y2="205" stroke="#3E2F20" stroke-width="2.5" marker-end="url(#setaDif)"/>
  <text x="573" y="108" text-anchor="middle" font-size="10" fill="#5C4630">G = glicose</text>
  <text x="560" y="144" text-anchor="end" font-size="10" fill="#3E2F20">permease</text>
  <text x="480" y="262" text-anchor="middle" font-size="12" fill="#3E2F20">A permease facilita a passagem</text>
  <text x="30" y="282" text-anchor="start" font-size="11" fill="#3E2F20">mais concentrado (em cima) → menos concentrado (embaixo), sem gasto de energia</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Nos dois casos o movimento é a favor do gradiente; na facilitada, a permease (●) ajuda a molécula (G) a atravessar.</p>`,
            },
            {
              heading: "Osmose",
              body: `A osmose é a difusão da água.

→ A água migra de uma solução hipotônica (diluída) para uma solução hipertônica (concentrada), sempre através de uma membrana semipermeável. No final, as duas soluções atingem isotonia.

• Solução hipotônica: diluída. Ex.: água.
• Solução hipertônica: concentrada. Ex.: água salgada.
• Membrana semipermeável: só deixa passar água. Ex.: papel celofane.`,
            },
            {
              heading: "Osmose em uma célula animal",
              body: `Exemplo: hemácias.

• Solução isotônica: sangue
• Solução hipertônica: água salgada
• Solução hipotônica: água pura

Na célula animal:

• Meio isotônico → a célula permanece normal.
• Meio hipertônico → a célula perde água e pode murchar.
• Meio hipotônico → a célula ganha água e pode sofrer lise.`,
              visual: `<svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">
  <defs><marker id="setaOs" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#3E2F20"/></marker></defs>
  <rect x="0" y="0" width="640" height="290" rx="12" fill="#F4EEE1"/>
  <line x1="214" y1="12" x2="214" y2="278" stroke="#C9B18C" stroke-dasharray="5 5"/>
  <line x1="427" y1="12" x2="427" y2="278" stroke="#C9B18C" stroke-dasharray="5 5"/>
  <text x="107" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">HIPERTÔNICO</text>
  <text x="107" y="44" text-anchor="middle" font-size="11" fill="#5C4630">água salgada</text>
  <text x="320" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">ISOTÔNICO</text>
  <text x="320" y="44" text-anchor="middle" font-size="11" fill="#5C4630">sangue</text>
  <text x="533" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">HIPOTÔNICO</text>
  <text x="533" y="44" text-anchor="middle" font-size="11" fill="#5C4630">água pura</text>
  <path d="M77,120 Q81,96 97,88 Q107,80 117,88 Q135,96 137,120 Q133,146 115,152 Q103,158 95,152 Q79,144 77,120 Z" fill="#E4D9C4" stroke="#A6493A" stroke-width="2.5"/><ellipse cx="320" cy="120" rx="42" ry="42" fill="#E4D9C4" stroke="#A6493A" stroke-width="2.5"/><ellipse cx="320" cy="120" rx="16" ry="16" fill="#F4EEE1" stroke="#C9B18C"/><circle cx="533" cy="120" r="56" fill="#E4D9C4" stroke="#A6493A" stroke-width="2.5" stroke-dasharray="8 4"/>
  <line x1="78" y1="120" x2="40" y2="120" stroke="#3E2F20" stroke-width="2" marker-end="url(#setaOs)"/><line x1="136" y1="120" x2="174" y2="120" stroke="#3E2F20" stroke-width="2" marker-end="url(#setaOs)"/>
  <line x1="450" y1="120" x2="476" y2="120" stroke="#3E2F20" stroke-width="2" marker-end="url(#setaOs)"/><line x1="616" y1="120" x2="590" y2="120" stroke="#3E2F20" stroke-width="2" marker-end="url(#setaOs)"/><line x1="470" y1="76" x2="492" y2="90" stroke="#3E2F20" stroke-width="2" marker-end="url(#setaOs)"/><line x1="596" y1="76" x2="574" y2="90" stroke="#3E2F20" stroke-width="2" marker-end="url(#setaOs)"/><line x1="470" y1="164" x2="492" y2="150" stroke="#3E2F20" stroke-width="2" marker-end="url(#setaOs)"/><line x1="596" y1="164" x2="574" y2="150" stroke="#3E2F20" stroke-width="2" marker-end="url(#setaOs)"/>
  <text x="107" y="202" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Perde água</text>
  <text x="107" y="220" text-anchor="middle" font-size="11" fill="#5C4630">e murcha</text>
  <text x="320" y="202" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Sem alteração</text>
  <text x="320" y="220" text-anchor="middle" font-size="11" fill="#5C4630">permanece normal</text>
  <text x="533" y="202" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Ganha água</text>
  <text x="533" y="220" text-anchor="middle" font-size="11" fill="#5C4630">e pode sofrer lise</text>
  <text x="320" y="262" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">A água sempre se move em direção à solução mais concentrada</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Hemácia (célula animal) em três meios: a seta mostra o sentido da água.</p>`,
            },
            {
              heading: "Resumo da osmose",
              body: `A água se movimenta em direção à solução mais concentrada, através de uma membrana semipermeável, buscando o equilíbrio de concentração.

No início há o meio interno da célula e o meio externo; no fim, ocorre a isotonia.`,
            },
            {
              heading: "Transporte ativo",
              body: `É o contrário do transporte passivo:

• Ocorre CONTRA um gradiente de concentração: as moléculas migram de uma região MENOS concentrada para uma região MAIS concentrada.
• Ocorre gasto de energia (ATP).

Exemplo: bomba de Na⁺ e K⁺ no neurônio.
• Fora da célula há muito Na⁺; dentro, muito K⁺.
• O Na⁺ entra sozinho por difusão (a favor do gradiente).
• A bomba gasta ATP para jogar o Na⁺ de volta para fora e trazer o K⁺ para dentro, mantendo a diferença de concentração.
• A cada ATP gasto, 3 Na⁺ saem e 2 K⁺ entram.

Comparando:
• Passivo → a favor do gradiente, sem gasto de energia
• Ativo → contra o gradiente, com gasto de energia`,
              visual: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="m1_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="m1_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="m1_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="m1_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="m1_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="340" rx="12" fill="#F4EEE1"/>
<text x="24" y="30" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">MEIO EXTERNO</text><text x="24" y="46" text-anchor="start" font-size="10" font-style="italic" fill="#5C4630">muito Na⁺, pouco K⁺</text><text x="24" y="300" text-anchor="start" font-size="12" font-weight="700" fill="#3E2F20">MEIO INTERNO (citoplasma)</text><text x="24" y="316" text-anchor="start" font-size="10" font-style="italic" fill="#5C4630">muito K⁺, pouco Na⁺</text><rect x="16" y="150" width="608" height="40" fill="#D8C9A8"/><circle cx="22" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="22" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="34" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="34" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="46" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="46" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="58" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="58" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="70" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="70" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="82" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="82" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="94" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="94" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="106" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="106" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="118" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="118" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="130" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="130" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="142" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="142" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="154" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="154" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="166" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="166" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="178" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="178" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="190" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="190" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="202" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="202" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="214" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="214" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="226" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="226" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="238" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="238" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="250" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="250" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="262" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="262" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="274" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="274" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="286" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="286" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="298" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="298" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="310" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="310" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="322" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="322" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="334" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="334" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="346" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="346" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="358" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="358" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="370" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="370" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="382" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="382" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="394" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="394" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="406" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="406" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="418" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="418" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="430" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="430" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="442" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="442" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="454" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="454" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="466" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="466" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="478" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="478" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="490" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="490" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="502" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="502" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="514" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="514" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="526" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="526" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="538" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="538" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="550" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="550" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="562" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="562" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="574" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="574" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="586" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="586" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="598" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="598" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="610" cy="154" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><circle cx="610" cy="186" r="4.5" fill="#E4D9C4" stroke="#A8763E" stroke-width="0.8"/><text x="612" y="145" text-anchor="end" font-size="10" font-style="italic" fill="#5C4630">membrana</text><circle cx="200" cy="60" r="12" fill="#A6493A" stroke="#3E2F20" stroke-width="0.8"/><text x="200" y="63.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">Na⁺</text><circle cx="250" cy="90" r="12" fill="#A6493A" stroke="#3E2F20" stroke-width="0.8"/><text x="250" y="93.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">Na⁺</text><circle cx="300" cy="50" r="12" fill="#A6493A" stroke="#3E2F20" stroke-width="0.8"/><text x="300" y="53.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">Na⁺</text><circle cx="380" cy="80" r="12" fill="#A6493A" stroke="#3E2F20" stroke-width="0.8"/><text x="380" y="83.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">Na⁺</text><circle cx="430" cy="54" r="12" fill="#A6493A" stroke="#3E2F20" stroke-width="0.8"/><text x="430" y="57.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">Na⁺</text><circle cx="470" cy="104" r="12" fill="#A6493A" stroke="#3E2F20" stroke-width="0.8"/><text x="470" y="107.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">Na⁺</text><circle cx="560" cy="70" r="12" fill="#A6493A" stroke="#3E2F20" stroke-width="0.8"/><text x="560" y="73.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">Na⁺</text><circle cx="160" cy="110" r="12" fill="#A6493A" stroke="#3E2F20" stroke-width="0.8"/><text x="160" y="113.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">Na⁺</text><circle cx="520" cy="120" r="12" fill="#A6493A" stroke="#3E2F20" stroke-width="0.8"/><text x="520" y="123.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">Na⁺</text><circle cx="600" cy="30" r="12" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><text x="600" y="33.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">K⁺</text><circle cx="140" cy="40" r="12" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><text x="140" y="43.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">K⁺</text><circle cx="180" cy="230" r="12" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><text x="180" y="233.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">K⁺</text><circle cx="240" cy="260" r="12" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><text x="240" y="263.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">K⁺</text><circle cx="612" cy="278" r="12" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><text x="612" y="281.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">K⁺</text><circle cx="400" cy="270" r="12" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><text x="400" y="273.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">K⁺</text><circle cx="460" cy="230" r="12" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><text x="460" y="233.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">K⁺</text><circle cx="520" cy="260" r="12" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><text x="520" y="263.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">K⁺</text><circle cx="580" cy="236" r="12" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><text x="580" y="239.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">K⁺</text><circle cx="120" cy="270" r="12" fill="#5B7553" stroke="#3E2F20" stroke-width="0.8"/><text x="120" y="273.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">K⁺</text><circle cx="440" cy="300" r="12" fill="#A6493A" stroke="#3E2F20" stroke-width="0.8"/><text x="440" y="303.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">Na⁺</text><circle cx="270" cy="300" r="12" fill="#A6493A" stroke="#3E2F20" stroke-width="0.8"/><text x="270" y="303.5" text-anchor="middle" font-size="8.5" font-weight="700" fill="#F4EEE1">Na⁺</text><rect x="298" y="138" width="64" height="64" rx="16" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><circle cx="330" cy="170" r="14" fill="#E4D9C4" stroke="#3E2F20" stroke-width="1.5"/><path d="M320,160 L340,180 M340,160 L320,180" stroke="#3E2F20" stroke-width="2.2"/><line x1="312" y1="212" x2="312" y2="120" stroke="#A6493A" stroke-width="3" marker-end="url(#m1_A6493A)"/><text x="306" y="118" text-anchor="end" font-size="11" font-weight="700" fill="#A6493A">3 Na⁺ saem</text><line x1="350" y1="120" x2="350" y2="214" stroke="#5B7553" stroke-width="3" marker-end="url(#m1_5B7553)"/><text x="356" y="128" text-anchor="start" font-size="11" font-weight="700" fill="#5B7553">2 K⁺ entram</text><rect x="266" y="219" width="128" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="330" y="237" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">ATP → ADP</text><text x="330" y="258" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">gasto de energia</text><rect x="86" y="146" width="26" height="48" rx="6" fill="#C9B18C" stroke="#3E2F20"/><rect x="95" y="146" width="8" height="48" fill="#F4EEE1"/><line x1="99" y1="112" x2="99" y2="222" stroke="#A6493A" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#m1_A6493A)"/><text x="60" y="214" text-anchor="end" font-size="10" font-weight="700" fill="#A6493A">Na⁺ entra</text><text x="60" y="228" text-anchor="end" font-size="10" font-weight="700" fill="#A6493A">por difusão</text><rect x="470" y="300" width="150" height="30" rx="8" fill="#E4D9C4" stroke="#C9B18C"/><circle cx="488" cy="315" r="9" fill="#A8763E" stroke="#3E2F20"/><path d="M482,309 L494,321 M494,309 L482,321" stroke="#3E2F20" stroke-width="1.6"/><text x="503" y="319" text-anchor="start" font-size="10" font-weight="700" fill="#3E2F20">= bomba de Na⁺ e K⁺</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">O Na⁺ entra sozinho por difusão (a favor do gradiente). A bomba gasta ATP para devolvê-lo para fora e trazer o K⁺ para dentro, contra o gradiente.</p>`,
            },
            {
              heading: "Transporte em massa",
              body: `Nesse caso, a célula engloba partículas grandes, formando vesículas.

Fagocitose
• A célula engloba partículas SÓLIDAS.
• Acontece por evaginação da membrana: ela se projeta para fora (pseudópodes) e "abraça" a partícula.
• Ex.: glóbulo branco fagocitando uma bactéria.

Pinocitose
• A célula engloba partículas LÍQUIDAS.
• Acontece por invaginação da membrana: ela afunda para dentro e "engole" a gota.
• Ex.: células do fígado absorvendo gotas de gordura.

📌 Para lembrar: FAgocitose = "comer" sólidos; PInocitose = "beber" líquidos.`,
              visual: `<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="m2_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="m2_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="m2_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="m2_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="m2_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="400" rx="12" fill="#F4EEE1"/>
<text x="16" y="30" text-anchor="start" font-size="13" font-weight="700" fill="#3E2F20">FAGOCITOSE</text><text x="118" y="30" text-anchor="start" font-size="11" font-weight="700" fill="#A8763E">partículas SÓLIDAS · evaginação (pseudópodes)</text><text x="624" y="30" text-anchor="end" font-size="10" font-style="italic" fill="#5C4630">ex.: glóbulo branco englobando bactéria</text><g transform="translate(16,40)"><rect x="0" y="0" width="190" height="150" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="0" width="190" height="150" viewBox="0 0 190 150"><path d="M0,70 L190,70 L190,150 L0,150 Z" fill="#E4D9C4"/><path d="M0,70 L190,70" fill="none" stroke="#5C4630" stroke-width="2.5"/><rect x="79" y="26" width="32" height="16" rx="8" transform="rotate(-10 95 34)" fill="#5B7553" stroke="#3E2F20"/></svg><circle cx="16" cy="16" r="10" fill="#3E2F20"/><text x="16" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">1</text></g><line x1="208" y1="115" x2="224" y2="115" stroke="#3E2F20" stroke-width="2" marker-end="url(#m2_3E2F20)"/><g transform="translate(226,40)"><rect x="0" y="0" width="190" height="150" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="0" width="190" height="150" viewBox="0 0 190 150"><path d="M0,70 L52,70 C52,46 56,20 68,18 C78,16 80,28 78,40 C76,52 82,60 95,60 C108,60 114,52 112,40 C110,28 112,16 122,18 C134,20 138,46 138,70 L190,70 L190,150 L0,150 Z" fill="#E4D9C4"/><path d="M0,70 L52,70 C52,46 56,20 68,18 C78,16 80,28 78,40 C76,52 82,60 95,60 C108,60 114,52 112,40 C110,28 112,16 122,18 C134,20 138,46 138,70 L190,70" fill="none" stroke="#5C4630" stroke-width="2.5"/><rect x="79" y="34" width="32" height="16" rx="8" transform="rotate(0 95 42)" fill="#5B7553" stroke="#3E2F20"/></svg><circle cx="16" cy="16" r="10" fill="#3E2F20"/><text x="16" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">2</text></g><line x1="418" y1="115" x2="434" y2="115" stroke="#3E2F20" stroke-width="2" marker-end="url(#m2_3E2F20)"/><g transform="translate(436,40)"><rect x="0" y="0" width="190" height="150" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="0" width="190" height="150" viewBox="0 0 190 150"><path d="M0,70 L190,70 L190,150 L0,150 Z" fill="#E4D9C4"/><path d="M0,70 L190,70" fill="none" stroke="#5C4630" stroke-width="2.5"/><circle cx="95" cy="104" r="22" fill="#F4EEE1" stroke="#5C4630" stroke-width="1.5"/><rect x="79" y="96" width="32" height="16" rx="8" transform="rotate(0 95 104)" fill="#5B7553" stroke="#3E2F20"/><text x="130" y="140" text-anchor="start" font-size="10" font-weight="700" fill="#3E2F20">fagossomo</text></svg><circle cx="16" cy="16" r="10" fill="#3E2F20"/><text x="16" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">3</text></g><text x="16" y="224" text-anchor="start" font-size="13" font-weight="700" fill="#3E2F20">PINOCITOSE</text><text x="118" y="224" text-anchor="start" font-size="11" font-weight="700" fill="#A8763E">partículas LÍQUIDAS · invaginação</text><text x="624" y="224" text-anchor="end" font-size="10" font-style="italic" fill="#5C4630">ex.: células do fígado absorvendo gotas de gordura</text><g transform="translate(16,234)"><rect x="0" y="0" width="190" height="150" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="0" width="190" height="150" viewBox="0 0 190 150"><path d="M0,60 L190,60 L190,150 L0,150 Z" fill="#E4D9C4"/><path d="M0,60 L190,60" fill="none" stroke="#5C4630" stroke-width="2.5"/><circle cx="70" cy="36" r="8" fill="#D8C9A8" stroke="#A8763E" stroke-width="1.5"/><circle cx="100" cy="26" r="7" fill="#D8C9A8" stroke="#A8763E" stroke-width="1.5"/><circle cx="128" cy="40" r="8" fill="#D8C9A8" stroke="#A8763E" stroke-width="1.5"/></svg><circle cx="16" cy="16" r="10" fill="#3E2F20"/><text x="16" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">1</text></g><line x1="208" y1="309" x2="224" y2="309" stroke="#3E2F20" stroke-width="2" marker-end="url(#m2_3E2F20)"/><g transform="translate(226,234)"><rect x="0" y="0" width="190" height="150" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="0" width="190" height="150" viewBox="0 0 190 150"><path d="M0,60 L66,60 C76,60 70,104 95,104 C120,104 114,60 124,60 L190,60 L190,150 L0,150 Z" fill="#E4D9C4"/><path d="M0,60 L66,60 C76,60 70,104 95,104 C120,104 114,60 124,60 L190,60" fill="none" stroke="#5C4630" stroke-width="2.5"/><circle cx="95" cy="86" r="8" fill="#D8C9A8" stroke="#A8763E" stroke-width="1.5"/><circle cx="150" cy="36" r="7" fill="#D8C9A8" stroke="#A8763E" stroke-width="1.5"/></svg><circle cx="16" cy="16" r="10" fill="#3E2F20"/><text x="16" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">2</text></g><line x1="418" y1="309" x2="434" y2="309" stroke="#3E2F20" stroke-width="2" marker-end="url(#m2_3E2F20)"/><g transform="translate(436,234)"><rect x="0" y="0" width="190" height="150" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="0" width="190" height="150" viewBox="0 0 190 150"><path d="M0,60 L190,60 L190,150 L0,150 Z" fill="#E4D9C4"/><path d="M0,60 L190,60" fill="none" stroke="#5C4630" stroke-width="2.5"/><circle cx="95" cy="102" r="18" fill="#F4EEE1" stroke="#5C4630" stroke-width="1.5"/><circle cx="95" cy="102" r="8" fill="#D8C9A8" stroke="#A8763E" stroke-width="1.5"/><text x="122" y="140" text-anchor="start" font-size="10" font-weight="700" fill="#3E2F20">pinossomo</text></svg><circle cx="16" cy="16" r="10" fill="#3E2F20"/><text x="16" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#F4EEE1">3</text></g>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Na fagocitose a membrana "abraça" a partícula sólida por fora (evaginação); na pinocitose ela afunda e "engole" a gota (invaginação).</p>`,
            },
            {
              heading: "Especializações da membrana",
              body: `→ Microvilosidades
• Projeções na superfície da célula.
• Aumentam a superfície de contato (mais absorção).
• Presentes nas células do intestino.

→ Invaginações de base
• Dobras na base da célula.
• Aumentam a superfície de contato.
• Presentes nas células renais.

→ Interdigitações
• As membranas de duas células se encaixam, como peças de quebra-cabeça.
• Aumentam a adesão entre as células.
• Presentes nas células da pele.

→ Desmossomo
• Funciona como "botões de pressão" entre duas células.
• Aumenta a adesão entre as células.
• Presente na pele.

📌 Resumo: microvilosidades e invaginações de base → mais SUPERFÍCIE; interdigitações e desmossomos → mais ADESÃO.`,
              visual: `<svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="m3_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="m3_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="m3_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="m3_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="m3_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker></defs><rect width="640" height="290" rx="12" fill="#F4EEE1"/>
<g transform="translate(12,12)"><rect x="0" y="0" width="148" height="266" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="0" width="148" height="210" viewBox="0 0 148 210"><rect x="34" y="70" width="80" height="110" rx="6" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/><ellipse cx="74" cy="140" rx="13" ry="10" fill="#C9B18C" stroke="#5C4630"/><rect x="38" y="40" width="6" height="34" rx="3" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.4"/><rect x="47" y="40" width="6" height="34" rx="3" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.4"/><rect x="56" y="40" width="6" height="34" rx="3" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.4"/><rect x="65" y="40" width="6" height="34" rx="3" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.4"/><rect x="74" y="40" width="6" height="34" rx="3" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.4"/><rect x="83" y="40" width="6" height="34" rx="3" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.4"/><rect x="92" y="40" width="6" height="34" rx="3" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.4"/><rect x="101" y="40" width="6" height="34" rx="3" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.4"/><rect x="110" y="40" width="6" height="34" rx="3" fill="#E4D9C4" stroke="#5C4630" stroke-width="1.4"/><rect x="36" y="69" width="76" height="4" fill="#E4D9C4"/></svg><text x="74" y="222" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">MICROVILOSIDADES</text><text x="74" y="238" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">células do intestino</text><text x="74" y="255" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">↑ superfície de contato</text></g><g transform="translate(168,12)"><rect x="0" y="0" width="148" height="266" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="0" width="148" height="210" viewBox="0 0 148 210"><path d="M34,40 L114,40 L114,180 L108,180 L108,130 L100,130 L100,180 L94,180 L94,130 L86,130 L86,180 L80,180 L80,130 L72,130 L72,180 L66,180 L66,130 L58,130 L58,180 L52,180 L52,130 L44,130 L44,180 L34,180 Z" fill="#E4D9C4" stroke="#5C4630" stroke-width="2" stroke-linejoin="round"/><ellipse cx="74" cy="80" rx="13" ry="10" fill="#C9B18C" stroke="#5C4630"/><text x="74" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">dobras na base</text></svg><text x="74" y="222" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">INVAGINAÇÕES DE BASE</text><text x="74" y="238" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">células renais</text><text x="74" y="255" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">↑ superfície de contato</text></g><g transform="translate(324,12)"><rect x="0" y="0" width="148" height="266" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="0" width="148" height="210" viewBox="0 0 148 210"><path d="M20,40 L74,40 L74,60 L90,60 L90,80 L74,80 L74,100 L58,100 L58,120 L74,120 L74,140 L90,140 L90,160 L74,160 L74,180 L20,180 Z" fill="#E4D9C4" stroke="none"/><path d="M128,40 L74,40 L74,60 L90,60 L90,80 L74,80 L74,100 L58,100 L58,120 L74,120 L74,140 L90,140 L90,160 L74,160 L74,180 L128,180 Z" fill="#D8C9A8" stroke="none"/><rect x="20" y="40" width="108" height="140" rx="4" fill="none" stroke="#5C4630" stroke-width="2"/><path d="M74,40 L74,60 L90,60 L90,80 L74,80 L74,100 L58,100 L58,120 L74,120 L74,140 L90,140 L90,160 L74,160 L74,180" fill="none" stroke="#5C4630" stroke-width="2"/><ellipse cx="40" cy="110" rx="13" ry="10" fill="#C9B18C" stroke="#5C4630"/><ellipse cx="108" cy="110" rx="13" ry="10" fill="#C9B18C" stroke="#5C4630"/><text x="74" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">encaixe de quebra-cabeça</text></svg><text x="74" y="222" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">INTERDIGITAÇÕES</text><text x="74" y="238" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">células da pele</text><text x="74" y="255" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">↑ adesão entre células</text></g><g transform="translate(480,12)"><rect x="0" y="0" width="148" height="266" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><svg x="0" y="0" width="148" height="210" viewBox="0 0 148 210"><rect x="20" y="40" width="50" height="140" rx="4" fill="#E4D9C4" stroke="#5C4630" stroke-width="2"/><rect x="78" y="40" width="50" height="140" rx="4" fill="#D8C9A8" stroke="#5C4630" stroke-width="2"/><rect x="62" y="64" width="6" height="24" rx="2" fill="#3E2F20"/><rect x="80" y="64" width="6" height="24" rx="2" fill="#3E2F20"/><line x1="68" y1="68" x2="80" y2="68" stroke="#3E2F20" stroke-width="1.2"/><path d="M62,68 q-14,-4 -26,-12" fill="none" stroke="#5C4630" stroke-width="0.8"/><path d="M86,68 q14,-4 26,-12" fill="none" stroke="#5C4630" stroke-width="0.8"/><line x1="68" y1="76" x2="80" y2="76" stroke="#3E2F20" stroke-width="1.2"/><path d="M62,76 q-14,0 -26,0" fill="none" stroke="#5C4630" stroke-width="0.8"/><path d="M86,76 q14,0 26,0" fill="none" stroke="#5C4630" stroke-width="0.8"/><line x1="68" y1="84" x2="80" y2="84" stroke="#3E2F20" stroke-width="1.2"/><path d="M62,84 q-14,4 -26,12" fill="none" stroke="#5C4630" stroke-width="0.8"/><path d="M86,84 q14,4 26,12" fill="none" stroke="#5C4630" stroke-width="0.8"/><rect x="62" y="128" width="6" height="24" rx="2" fill="#3E2F20"/><rect x="80" y="128" width="6" height="24" rx="2" fill="#3E2F20"/><line x1="68" y1="132" x2="80" y2="132" stroke="#3E2F20" stroke-width="1.2"/><path d="M62,132 q-14,-4 -26,-12" fill="none" stroke="#5C4630" stroke-width="0.8"/><path d="M86,132 q14,-4 26,-12" fill="none" stroke="#5C4630" stroke-width="0.8"/><line x1="68" y1="140" x2="80" y2="140" stroke="#3E2F20" stroke-width="1.2"/><path d="M62,140 q-14,0 -26,0" fill="none" stroke="#5C4630" stroke-width="0.8"/><path d="M86,140 q14,0 26,0" fill="none" stroke="#5C4630" stroke-width="0.8"/><line x1="68" y1="148" x2="80" y2="148" stroke="#3E2F20" stroke-width="1.2"/><path d="M62,148 q-14,4 -26,12" fill="none" stroke="#5C4630" stroke-width="0.8"/><path d="M86,148 q14,4 26,12" fill="none" stroke="#5C4630" stroke-width="0.8"/><text x="74" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#3E2F20">ponto de ancoragem</text></svg><text x="74" y="222" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">DESMOSSOMO</text><text x="74" y="238" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">células da pele</text><text x="74" y="255" text-anchor="middle" font-size="10" font-weight="700" fill="#A8763E">"botão de pressão"</text></g>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Microvilosidades e invaginações de base aumentam a superfície; interdigitações e desmossomos prendem uma célula à outra.</p>`,
            },
          ],
          quiz: [
            { q: "O transporte passivo ocorre:", options: ["Contra o gradiente de concentração, com gasto de energia","A favor do gradiente de concentração, sem gasto de energia","Apenas com gasto de ATP","Somente em células vegetais"], correct: 1 },
            { q: "No transporte passivo, as moléculas migram:", options: ["De uma região menos concentrada para uma mais concentrada","De uma região mais concentrada para uma menos concentrada","Sempre para dentro da célula","Sempre para fora da célula"], correct: 1 },
            { q: "Quais são os tipos de transporte passivo?", options: ["Difusão simples, difusão facilitada e osmose","Endocitose, exocitose e osmose","Fagocitose, pinocitose e difusão","Bomba de sódio-potássio, osmose e difusão simples"], correct: 0 },
            { q: "A difusão simples ocorre, por exemplo, com:", options: ["Proteínas grandes","Gases","Células inteiras","Moléculas de DNA"], correct: 1 },
            { q: "Na difusão facilitada, qual proteína auxilia a passagem da molécula?", options: ["Hemoglobina","Permease","Queratina","Colágeno"], correct: 1 },
            { q: "A difusão facilitada se diferencia da difusão simples por:", options: ["Ocorrer contra o gradiente de concentração","Gastar energia","Contar com a ajuda de uma proteína (permease)","Só acontecer com a água"], correct: 2 },
            { q: "A osmose é:", options: ["A difusão de gases","A difusão da água","O transporte de proteínas","A entrada de partículas sólidas na célula"], correct: 1 },
            { q: "Na osmose, a água migra:", options: ["Da solução hipertônica para a hipotônica","Da solução hipotônica (diluída) para a hipertônica (concentrada)","Sempre para a solução mais diluída","Apenas entre soluções isotônicas"], correct: 1 },
            { q: "Uma solução hipotônica é aquela que:", options: ["É concentrada, como a água salgada","É diluída, como a água pura","Tem a mesma concentração do meio","Não possui água"], correct: 1 },
            { q: "Uma solução hipertônica é aquela que:", options: ["É diluída, como a água pura","É concentrada, como a água salgada","Tem a mesma concentração da célula","Não atravessa membranas"], correct: 1 },
            { q: "Uma membrana semipermeável, como o papel celofane, permite a passagem de:", options: ["Apenas água","Qualquer substância","Apenas proteínas","Nenhuma substância"], correct: 0 },
            { q: "No final da osmose, as duas soluções atingem:", options: ["Hipertonia","Hipotonia","Isotonia","Plasmólise"], correct: 2 },
            { q: "Uma hemácia colocada em solução hipertônica (água salgada) tende a:", options: ["Ganhar água e sofrer lise","Perder água e murchar","Permanecer normal","Dividir-se rapidamente"], correct: 1 },
            { q: "Uma hemácia colocada em água pura (solução hipotônica) tende a:", options: ["Perder água e murchar","Permanecer sem alteração","Ganhar água e poder sofrer lise","Eliminar todo o seu núcleo"], correct: 2 },
            { q: "Qual é o meio isotônico em relação às hemácias, no qual elas permanecem normais?", options: ["Água pura","Água salgada","Sangue","Água destilada"], correct: 2 },
            { q: "O transporte ativo ocorre:", options: ["A favor do gradiente, sem gasto de energia","Contra o gradiente, com gasto de energia","A favor do gradiente, com gasto de energia","Apenas com a água"], correct: 1 },
            { q: "No transporte ativo, as moléculas migram:", options: ["Da região mais concentrada para a menos concentrada","Da região menos concentrada para a mais concentrada","Sempre para dentro da célula","Apenas entre células vizinhas"], correct: 1 },
            { q: "Qual é um exemplo clássico de transporte ativo?", options: ["Osmose","Difusão simples","Bomba de sódio e potássio","Difusão facilitada"], correct: 2 },
            { q: "Na bomba de Na⁺ e K⁺, os íons são transportados:", options: ["Na⁺ para dentro e K⁺ para fora","Na⁺ para fora e K⁺ para dentro","Os dois para dentro","Os dois para fora"], correct: 1 },
            { q: "A energia usada pela bomba de Na⁺ e K⁺ vem do:", options: ["ATP","Oxigênio dissolvido","Gás carbônico","Movimento da água"], correct: 0 },
            { q: "Em um neurônio, o Na⁺ que entra espontaneamente na célula faz isso por:", options: ["Transporte ativo","Fagocitose","Difusão, a favor do gradiente","Pinocitose"], correct: 2 },
            { q: "No transporte em massa, a célula:", options: ["Engloba partículas grandes","Só transporta íons pequenos","Elimina apenas água","Não usa a membrana"], correct: 0 },
            { q: "A fagocitose é o englobamento de partículas:", options: ["Líquidas, por invaginação","Sólidas, por evaginação da membrana","Gasosas, por difusão","Líquidas, por evaginação"], correct: 1 },
            { q: "A pinocitose é o englobamento de partículas:", options: ["Sólidas, por evaginação","Líquidas, por invaginação da membrana","Sólidas, por invaginação","Gasosas, com gasto de ATP pela bomba"], correct: 1 },
            { q: "Um glóbulo branco englobando uma bactéria é um exemplo de:", options: ["Pinocitose","Osmose","Fagocitose","Difusão facilitada"], correct: 2 },
            { q: "As microvilosidades, presentes nas células do intestino, servem para:", options: ["Aumentar a superfície de contato","Prender uma célula à outra","Produzir energia","Impedir a passagem de água"], correct: 0 },
            { q: "As invaginações de base, que aumentam a superfície de contato, são típicas das células:", options: ["Da pele","Renais","Do sangue","Do intestino delgado"], correct: 1 },
            { q: "Interdigitações e desmossomos têm em comum a função de:", options: ["Aumentar a superfície de absorção","Aumentar a adesão entre as células","Englobar partículas sólidas","Bombear íons"], correct: 1 },
            { q: "Qual especialização da membrana funciona como \"botões de pressão\" entre as células da pele?", options: ["Microvilosidade","Invaginação de base","Desmossomo","Pinossomo"], correct: 2 },
          ],
        },
      ],
    },
);
