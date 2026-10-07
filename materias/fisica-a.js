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
              visual: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="f1_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="f1_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="f1_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="f1_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="f1_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker><marker id="f1_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker><pattern id="f1_hat" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#A8763E"/><line x1="0" y1="0" x2="0" y2="6" stroke="#F4EEE1" stroke-width="1.6"/></pattern></defs><rect width="640" height="300" rx="12" fill="#F4EEE1"/>
<text x="160" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">TANGENCIAL (at)</text><text x="160" y="42" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">muda o VALOR da velocidade</text><text x="480" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">CENTRÍPETA (ac)</text><text x="480" y="42" text-anchor="middle" font-size="11" font-style="italic" fill="#5C4630">muda a DIREÇÃO da velocidade</text><line x1="320" y1="14" x2="320" y2="286" stroke="#C9B18C" stroke-dasharray="4 4"/><line x1="20" y1="170" x2="300" y2="170" stroke="#5C4630" stroke-width="2"/><line x1="24" y1="170" x2="16" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="36" y1="170" x2="28" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="48" y1="170" x2="40" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="60" y1="170" x2="52" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="72" y1="170" x2="64" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="84" y1="170" x2="76" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="96" y1="170" x2="88" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="108" y1="170" x2="100" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="120" y1="170" x2="112" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="132" y1="170" x2="124" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="144" y1="170" x2="136" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="156" y1="170" x2="148" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="168" y1="170" x2="160" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="180" y1="170" x2="172" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="192" y1="170" x2="184" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="204" y1="170" x2="196" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="216" y1="170" x2="208" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="228" y1="170" x2="220" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="240" y1="170" x2="232" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="252" y1="170" x2="244" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="264" y1="170" x2="256" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="276" y1="170" x2="268" y2="178" stroke="#C9B18C" stroke-width="1.2"/><line x1="288" y1="170" x2="280" y2="178" stroke="#C9B18C" stroke-width="1.2"/><circle cx="40" cy="158" r="10" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><line x1="52" y1="128" x2="82" y2="128" stroke="#A8763E" stroke-width="2.5" marker-end="url(#f1_A8763E)"/><text x="67" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">v₁</text><circle cx="120" cy="158" r="10" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><line x1="132" y1="128" x2="182" y2="128" stroke="#A8763E" stroke-width="2.5" marker-end="url(#f1_A8763E)"/><text x="157" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">v₂</text><circle cx="210" cy="158" r="10" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><line x1="222" y1="128" x2="296" y2="128" stroke="#A8763E" stroke-width="2.5" marker-end="url(#f1_A8763E)"/><text x="259" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">v₃</text><line x1="60" y1="205" x2="250" y2="205" stroke="#A6493A" stroke-width="2.5" marker-end="url(#f1_A6493A)"/><text x="155" y="198" text-anchor="middle" font-size="11" font-weight="700" fill="#A6493A">at no mesmo sentido de v</text><text x="160" y="236" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">v₁ < v₂ < v₃</text><rect x="85" y="251" width="150" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="160" y="269" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">at = Δv / Δt</text><circle cx="480" cy="165" r="82" fill="none" stroke="#C9B18C" stroke-width="2" stroke-dasharray="5 4"/><circle cx="480" cy="165" r="3.5" fill="#3E2F20"/><text x="480" y="183" text-anchor="middle" font-size="10" fill="#5C4630">centro</text><line x1="480" y1="83" x2="526" y2="83" stroke="#A8763E" stroke-width="2.5" marker-end="url(#f1_A8763E)"/><line x1="480" y1="83" x2="480" y2="117.44" stroke="#A6493A" stroke-width="2.5" marker-end="url(#f1_A6493A)"/><circle cx="480" cy="83" r="7" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><line x1="554.3172385370053" y1="199.65469746273735" x2="534.8767984969331" y2="241.34485566642326" stroke="#A8763E" stroke-width="2.5" marker-end="url(#f1_A8763E)"/><line x1="554.3172385370053" y1="199.65469746273735" x2="523.1039983514631" y2="185.09972452838767" stroke="#A6493A" stroke-width="2.5" marker-end="url(#f1_A6493A)"/><circle cx="554.3172385370053" cy="199.65469746273735" r="7" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><line x1="405.6827614629947" y1="199.65469746273737" x2="386.2423214229225" y2="157.9645392590515" stroke="#A8763E" stroke-width="2.5" marker-end="url(#f1_A8763E)"/><line x1="405.6827614629947" y1="199.65469746273737" x2="436.8960016485369" y2="185.09972452838767" stroke="#A6493A" stroke-width="2.5" marker-end="url(#f1_A6493A)"/><circle cx="405.6827614629947" cy="199.65469746273737" r="7" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><text x="420" y="75" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">v</text><text x="488" y="125" text-anchor="start" font-size="12" font-weight="700" fill="#A6493A">ac</text><text x="480" y="278" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">v sempre tangente · ac sempre para o centro</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">A aceleração se divide em duas partes: a tangencial muda o valor de v; a centrípeta muda a direção de v.</p>`,
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
              visual: `<svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="f2_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="f2_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="f2_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="f2_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="f2_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker><marker id="f2_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker><pattern id="f2_hat" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#A8763E"/><line x1="0" y1="0" x2="0" y2="6" stroke="#F4EEE1" stroke-width="1.6"/></pattern></defs><rect width="640" height="290" rx="12" fill="#F4EEE1"/>
<text x="170" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">GIRANDO UMA BOLA NO FIO</text><text x="480" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">SE O FIO ARREBENTAR...</text><line x1="330" y1="14" x2="330" y2="240" stroke="#C9B18C" stroke-dasharray="4 4"/><circle cx="170" cy="140" r="80" fill="none" stroke="#C9B18C" stroke-width="2" stroke-dasharray="5 4"/><circle cx="170" cy="140" r="9" fill="#5C4630" stroke="#3E2F20"/><text x="170" y="164" text-anchor="middle" font-size="10" fill="#5C4630">mão</text><line x1="170" y1="140" x2="236.02684919277425" y2="94.82860212839716" stroke="#5C4630" stroke-width="1.5"/><line x1="230.02684919277425" y1="98.82860212839716" x2="199.7120821367484" y2="119.67287095777873" stroke="#A6493A" stroke-width="3" marker-end="url(#f2_A6493A)"/><text x="178.02684919277425" y="90.82860212839716" text-anchor="end" font-size="12" font-weight="700" fill="#A6493A">T = Fcp</text><line x1="236.02684919277425" y1="94.82860212839716" x2="265.3882578093161" y2="137.74605410370043" stroke="#A8763E" stroke-width="2.5" marker-end="url(#f2_A8763E)"/><text x="276.02684919277425" y="146.82860212839716" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">v</text><circle cx="236.02684919277425" cy="94.82860212839716" r="10" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><path d="M400,150 A70,70 0 0 1 495.4,84.8" fill="none" stroke="#C9B18C" stroke-width="2" stroke-dasharray="5 4"/><circle cx="470" cy="150" r="9" fill="#5C4630" stroke="#3E2F20"/><line x1="495.36504281336715" y1="84.75726398229416" x2="635.1709057084511" y2="139.11092715379522" stroke="#3E2F20" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#f2_3E2F20)"/><circle cx="495.36504281336715" cy="84.75726398229416" r="10" fill="#A8763E" stroke="#3E2F20" stroke-width="1.5"/><text x="540" y="196" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">segue reto, na</text><text x="540" y="211" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">direção da tangente</text><text x="420" y="236" text-anchor="middle" font-size="11" fill="#5C4630">sem a força para o centro,</text><text x="420" y="251" text-anchor="middle" font-size="11" fill="#5C4630">não há movimento circular</text><rect x="170" y="257" width="300" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="320" y="275" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">Fcp = m · v² / R  (aponta para o centro)</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">A resultante centrípeta é quem "puxa" o corpo para o centro. Sem ela, o corpo sai pela tangente.</p>`,
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
              visual: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="f3_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="f3_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="f3_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="f3_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="f3_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker><marker id="f3_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker><pattern id="f3_hat" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#A8763E"/><line x1="0" y1="0" x2="0" y2="6" stroke="#F4EEE1" stroke-width="1.6"/></pattern></defs><rect width="640" height="330" rx="12" fill="#F4EEE1"/>
<g transform="translate(12,12)"><rect x="0" y="0" width="200" height="306" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><text x="100" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">I) RAMPA (topo)</text><svg x="0" y="30" width="200" height="232" viewBox="0 0 200 232"><path d="M10,170 Q100,40 190,170" fill="none" stroke="#5C4630" stroke-width="3"/><circle cx="100" cy="190" r="3.5" fill="#3E2F20"/><line x1="100" y1="96" x2="100" y2="190" stroke="#C9B18C" stroke-dasharray="4 3"/><text x="110" y="205" text-anchor="start" font-size="10" fill="#5C4630">centro</text><rect x="84" y="80" width="32" height="16" rx="4" fill="#A8763E" stroke="#3E2F20"/><line x1="100" y1="100" x2="100" y2="160" stroke="#A6493A" stroke-width="3" marker-end="url(#f3_A6493A)"/><text x="110" y="156" text-anchor="start" font-size="13" font-weight="700" fill="#A6493A">P</text><line x1="92" y1="80" x2="92" y2="46" stroke="#5B7553" stroke-width="3" marker-end="url(#f3_5B7553)"/><text x="82" y="50" text-anchor="end" font-size="13" font-weight="700" fill="#5B7553">N</text></svg><rect x="10" y="257" width="180" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="100" y="275" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">P − N = m·v²/R</text><text x="100" y="298" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">centro abaixo do carro</text></g><g transform="translate(220,12)"><rect x="0" y="0" width="200" height="306" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><text x="100" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">II) LOOPING (embaixo)</text><svg x="0" y="30" width="200" height="232" viewBox="0 0 200 232"><path d="M10,60 Q100,240 190,60" fill="none" stroke="#5C4630" stroke-width="3"/><circle cx="100" cy="40" r="3.5" fill="#3E2F20"/><line x1="100" y1="40" x2="100" y2="134" stroke="#C9B18C" stroke-dasharray="4 3"/><text x="110" y="36" text-anchor="start" font-size="10" fill="#5C4630">centro</text><rect x="84" y="134" width="32" height="16" rx="4" fill="#A8763E" stroke="#3E2F20"/><line x1="108" y1="134" x2="108" y2="66" stroke="#5B7553" stroke-width="3" marker-end="url(#f3_5B7553)"/><text x="118" y="80" text-anchor="start" font-size="13" font-weight="700" fill="#5B7553">N</text><line x1="92" y1="150" x2="92" y2="190" stroke="#A6493A" stroke-width="3" marker-end="url(#f3_A6493A)"/><text x="82" y="186" text-anchor="end" font-size="13" font-weight="700" fill="#A6493A">P</text></svg><rect x="10" y="257" width="180" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="100" y="275" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">N − P = m·v²/R</text><text x="100" y="298" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">centro acima do carro</text></g><g transform="translate(428,12)"><rect x="0" y="0" width="200" height="306" rx="10" fill="none" stroke="#C9B18C" stroke-width="1.2"/><text x="100" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">III) GLOBO (topo)</text><svg x="0" y="30" width="200" height="232" viewBox="0 0 200 232"><circle cx="100" cy="120" r="84" fill="none" stroke="#5C4630" stroke-width="3"/><circle cx="100" cy="120" r="3.5" fill="#3E2F20"/><text x="110" y="136" text-anchor="start" font-size="10" fill="#5C4630">centro</text><rect x="84" y="38" width="32" height="16" rx="4" fill="#A8763E" stroke="#3E2F20"/><line x1="92" y1="54" x2="92" y2="100" stroke="#A6493A" stroke-width="3" marker-end="url(#f3_A6493A)"/><text x="82" y="92" text-anchor="end" font-size="13" font-weight="700" fill="#A6493A">P</text><line x1="108" y1="54" x2="108" y2="86" stroke="#5B7553" stroke-width="3" marker-end="url(#f3_5B7553)"/><text x="118" y="80" text-anchor="start" font-size="13" font-weight="700" fill="#5B7553">N</text></svg><rect x="10" y="257" width="180" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="100" y="275" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">P + N = m·v²/R</text><text x="100" y="298" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">velocidade mínima: v = √(g·R)</text></g>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Em cada caso, a força que aponta para o centro "ganha": ela vem primeiro na subtração. No globo, se N = 0, sobra mg = m·v²/R.</p>`,
            },
          ],
          quiz: [
            { q: "O que a aceleração tangencial (At) altera no movimento circular?", options: ["O valor da velocidade","A direção da velocidade","Apenas o sentido do movimento","O raio da trajetória"], correct: 0 },
            { q: "Qual é a fórmula da aceleração tangencial?", options: ["At = ΔV / Δt","At = V² / R","At = m · V² / R","At = √(gR)"], correct: 0 },
            { q: "A aceleração centrípeta (Ac) é responsável por alterar:", options: ["Apenas o valor da velocidade","A direção e o sentido da velocidade","A massa do corpo","O tempo de percurso"], correct: 1 },
            { q: "Para onde aponta a aceleração centrípeta?", options: ["Para fora da trajetória","Tangente à trajetória","Para o centro da trajetória","Não tem direção definida"], correct: 2 },
            { q: "Qual é a fórmula da aceleração centrípeta?", options: ["Ac = V² / R","Ac = ΔV / Δt","Ac = m · g","Ac = √(gR)"], correct: 0 },
            { q: "No MCU, a força resultante sobre o corpo é chamada de:", options: ["Força tangencial","Força centrípeta","Força de atrito","Força elástica"], correct: 1 },
            { q: "No exemplo da Rampa, qual é a equação da resultante centrípeta?", options: ["P − N = mV²/R","N − P = mV²/R","P + N = mV²/R","N = mV²/R"], correct: 0 },
            { q: "No exemplo do Looping, a equação correta é:", options: ["P − N = mV²/R","N − P = mV²/R","P + N = mV²/R","N = 0"], correct: 1 },
            { q: "No Globo da Morte, quando o corpo perde o contato (N = 0), qual é a velocidade mínima para completar a volta?", options: ["V = √(gR)","V = gR","V = g/R","V = R/g"], correct: 0 },
            { q: "No Globo da Morte, antes de perder o contato, a equação da resultante centrípeta é:", options: ["P − N = mV²/R","N − P = mV²/R","P + N = mV²/R","N − P = 0"], correct: 2 },
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
              visual: `<svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="f4_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="f4_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="f4_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="f4_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="f4_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker><marker id="f4_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker><pattern id="f4_hat" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#A8763E"/><line x1="0" y1="0" x2="0" y2="6" stroke="#F4EEE1" stroke-width="1.6"/></pattern></defs><rect width="640" height="290" rx="12" fill="#F4EEE1"/>
<circle cx="160" cy="165" r="100" fill="#B9CBD3" stroke="#6E8C99" stroke-width="2"/><path d="M90,120 q30,-20 60,0 q20,30 -10,50 q-40,10 -50,-50 Z M180,190 q30,-10 50,10 q0,30 -30,30 q-30,-10 -20,-40 Z" fill="#5B7553" opacity="0.8"/><text x="160" y="280" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">Planeta de massa M</text><line x1="160" y1="165" x2="160" y2="65" stroke="#3E2F20" stroke-dasharray="4 3"/><text x="172" y="150" text-anchor="start" font-size="13" font-weight="700" fill="#3E2F20">R</text><circle cx="160" cy="165" r="3" fill="#3E2F20"/><rect x="146" y="36" width="28" height="28" rx="3" fill="#D8C9A8" stroke="#3E2F20" stroke-width="1.5"/><text x="160" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">m</text><line x1="160" y1="66" x2="160" y2="108" stroke="#A6493A" stroke-width="3" marker-end="url(#f4_A6493A)"/><text x="170" y="98" text-anchor="start" font-size="13" font-weight="700" fill="#A6493A">P</text><rect x="330" y="38" width="290" height="54" rx="10" fill="none" stroke="#C9B18C"/><text x="475" y="62" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">P = F</text><text x="475" y="82" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">o peso É a força gravitacional</text><line x1="475" y1="93" x2="475" y2="114" stroke="#3E2F20" stroke-width="1.5" marker-end="url(#f4_3E2F20)"/><rect x="330" y="116" width="290" height="54" rx="10" fill="none" stroke="#C9B18C"/><text x="475" y="140" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">m · g = G · M · m / R²</text><text x="475" y="160" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">substitui as fórmulas</text><line x1="475" y1="171" x2="475" y2="192" stroke="#3E2F20" stroke-width="1.5" marker-end="url(#f4_3E2F20)"/><rect x="330" y="194" width="290" height="54" rx="10" fill="#E4D9C4" stroke="#C9B18C"/><text x="475" y="218" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">g = G · M / R²</text><text x="475" y="238" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">a massa m do corpo cancela</text><text x="475" y="272" text-anchor="middle" font-size="12" font-weight="700" fill="#A8763E">Na Terra: g ≈ 9,8 m/s²</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Igualando o peso à força gravitacional, a massa do corpo some: g depende só da massa e do raio do planeta.</p>`,
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
              visual: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="f5_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="f5_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="f5_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="f5_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="f5_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker><marker id="f5_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker><pattern id="f5_hat" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#A8763E"/><line x1="0" y1="0" x2="0" y2="6" stroke="#F4EEE1" stroke-width="1.6"/></pattern></defs><rect width="640" height="320" rx="12" fill="#F4EEE1"/>
<line x1="80" y1="260" x2="548" y2="260" stroke="#C9B18C" stroke-width="1.5"/><text x="72" y="264" text-anchor="end" font-size="10" fill="#5C4630">0</text><line x1="80" y1="220" x2="548" y2="220" stroke="#C9B18C" stroke-width="0.6"/><text x="72" y="224" text-anchor="end" font-size="10" fill="#5C4630">2</text><line x1="80" y1="180" x2="548" y2="180" stroke="#C9B18C" stroke-width="0.6"/><text x="72" y="184" text-anchor="end" font-size="10" fill="#5C4630">4</text><line x1="80" y1="140" x2="548" y2="140" stroke="#C9B18C" stroke-width="0.6"/><text x="72" y="144" text-anchor="end" font-size="10" fill="#5C4630">6</text><line x1="80" y1="100" x2="548" y2="100" stroke="#C9B18C" stroke-width="0.6"/><text x="72" y="104" text-anchor="end" font-size="10" fill="#5C4630">8</text><line x1="80" y1="60" x2="548" y2="60" stroke="#C9B18C" stroke-width="0.6"/><text x="72" y="64" text-anchor="end" font-size="10" fill="#5C4630">10</text><text x="80" y="278" text-anchor="middle" font-size="10" fill="#5C4630">superfície</text><text x="210" y="278" text-anchor="middle" font-size="10" fill="#5C4630">h = R</text><text x="340" y="278" text-anchor="middle" font-size="10" fill="#5C4630">h = 2R</text><text x="470" y="278" text-anchor="middle" font-size="10" fill="#5C4630">h = 3R</text><text x="30" y="40" text-anchor="start" font-size="11" font-weight="700" fill="#3E2F20">g (m/s²)</text><text x="548" y="298" text-anchor="end" font-size="11" font-weight="700" fill="#3E2F20">altura h →</text><path d="M80.0,64.0 L86.5,82.2 L93.0,98.0 L99.5,111.8 L106.0,123.9 L112.5,134.6 L119.0,144.0 L125.5,152.5 L132.0,160.0 L138.5,166.8 L145.0,172.9 L151.5,178.4 L158.0,183.4 L164.5,188.0 L171.0,192.2 L177.5,196.0 L184.0,199.5 L190.5,202.7 L197.0,205.7 L203.5,208.5 L210.0,211.0 L216.5,213.4 L223.0,215.6 L229.5,217.6 L236.0,219.5 L242.5,221.3 L249.0,222.9 L255.5,224.5 L262.0,226.0 L268.5,227.3 L275.0,228.6 L281.5,229.9 L288.0,231.0 L294.5,232.1 L301.0,233.1 L307.5,234.1 L314.0,235.0 L320.5,235.9 L327.0,236.7 L333.5,237.5 L340.0,238.2 L346.5,238.9 L353.0,239.6 L359.5,240.2 L366.0,240.9 L372.5,241.4 L379.0,242.0 L385.5,242.5 L392.0,243.0 L398.5,243.5 L405.0,244.0 L411.5,244.4 L418.0,244.9 L424.5,245.3 L431.0,245.7 L437.5,246.1 L444.0,246.4 L450.5,246.8 L457.0,247.1 L463.5,247.4 L470.0,247.7 L476.5,248.1 L483.0,248.3 L489.5,248.6 L496.0,248.9 L502.5,249.1 L509.0,249.4 L515.5,249.6 L522.0,249.9 L528.5,250.1 L535.0,250.3 L541.5,250.5 L548.0,250.7" fill="none" stroke="#A8763E" stroke-width="2.5"/><circle cx="80" cy="64" r="5" fill="#A8763E" stroke="#F4EEE1" stroke-width="2"/><text x="89" y="50" text-anchor="start" font-size="11" font-weight="700" fill="#3E2F20">g₀ = 9,8</text><text x="89" y="63" text-anchor="start" font-size="10" fill="#5C4630">g₀</text><circle cx="210" cy="211" r="5" fill="#A8763E" stroke="#F4EEE1" stroke-width="2"/><text x="219" y="197" text-anchor="start" font-size="11" font-weight="700" fill="#3E2F20">2,45</text><text x="219" y="210" text-anchor="start" font-size="10" fill="#5C4630">g₀ / 4</text><circle cx="340" cy="238.2" r="5" fill="#A8763E" stroke="#F4EEE1" stroke-width="2"/><text x="349" y="224.2" text-anchor="start" font-size="11" font-weight="700" fill="#3E2F20">≈ 1,09</text><text x="349" y="237.2" text-anchor="start" font-size="10" fill="#5C4630">g₀ / 9</text><circle cx="470" cy="247.75" r="5" fill="#A8763E" stroke="#F4EEE1" stroke-width="2"/><text x="479" y="233.75" text-anchor="start" font-size="11" font-weight="700" fill="#3E2F20">≈ 0,61</text><text x="479" y="246.75" text-anchor="start" font-size="10" fill="#5C4630">g₀ / 16</text><rect x="355" y="75" width="230" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="470" y="93" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">g = G · M / (R + h)²</text><text x="470" y="120" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">distância ao centro = R + h</text><text x="470" y="136" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">dobrou a distância → g cai a 1/4</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Quanto mais longe da superfície, menor o g. Em h = R a distância ao centro dobra (2R), então g cai para 1/4.</p>`,
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
        {
          id: "hidrostatica",
          title: "Hidrostática",
          sections: [
            {
              heading: "Fluidos",
              body: `Fluido é toda substância que:

• Adquire o formato do recipiente que a contém
• Possui a capacidade de escoar

Líquidos e gases são fluidos.`,
              visual: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="f6_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="f6_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="f6_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="f6_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="f6_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker><marker id="f6_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker><pattern id="f6_hat" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#A8763E"/><line x1="0" y1="0" x2="0" y2="6" stroke="#F4EEE1" stroke-width="1.6"/></pattern></defs><rect width="640" height="260" rx="12" fill="#F4EEE1"/>
<text x="250" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">LÍQUIDO: toma a forma do recipiente</text><text x="560" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">GÁS: ocupa todo o volume</text><line x1="480" y1="14" x2="480" y2="246" stroke="#C9B18C" stroke-dasharray="4 4"/><path d="M40,80 L40,200 Q40,210 50,210 L110,210 Q120,210 120,200 L120,80" fill="none" stroke="#5C4630" stroke-width="2.5"/><rect x="42" y="140" width="76" height="68" fill="#B9CBD3"/><path d="M200,80 L200,120 Q150,140 150,175 Q150,212 210,212 Q270,212 270,175 Q270,140 220,120 L220,80" fill="none" stroke="#5C4630" stroke-width="2.5"/><path d="M152,178 Q152,210 210,210 Q268,210 268,178 Q268,168 264,160 L156,160 Q152,168 152,178 Z" fill="#B9CBD3"/><path d="M310,170 L310,210 L460,210 L460,170" fill="none" stroke="#5C4630" stroke-width="2.5"/><rect x="312" y="190" width="146" height="18" fill="#B9CBD3"/><text x="80" y="234" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">mesma quantidade</text><text x="210" y="234" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">de água em</text><text x="385" y="234" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">formatos diferentes</text><rect x="510" y="60" width="100" height="150" rx="6" fill="none" stroke="#5C4630" stroke-width="2.5"/><circle cx="520" cy="72" r="3.5" fill="#6E8C99"/><circle cx="557" cy="125" r="3.5" fill="#6E8C99"/><circle cx="594" cy="178" r="3.5" fill="#6E8C99"/><circle cx="551" cy="103" r="3.5" fill="#6E8C99"/><circle cx="588" cy="156" r="3.5" fill="#6E8C99"/><circle cx="545" cy="81" r="3.5" fill="#6E8C99"/><circle cx="582" cy="134" r="3.5" fill="#6E8C99"/><circle cx="539" cy="187" r="3.5" fill="#6E8C99"/><circle cx="576" cy="112" r="3.5" fill="#6E8C99"/><circle cx="533" cy="165" r="3.5" fill="#6E8C99"/><circle cx="570" cy="90" r="3.5" fill="#6E8C99"/><circle cx="527" cy="143" r="3.5" fill="#6E8C99"/><circle cx="564" cy="196" r="3.5" fill="#6E8C99"/><circle cx="521" cy="121" r="3.5" fill="#6E8C99"/><circle cx="558" cy="174" r="3.5" fill="#6E8C99"/><circle cx="595" cy="99" r="3.5" fill="#6E8C99"/><circle cx="552" cy="152" r="3.5" fill="#6E8C99"/><circle cx="589" cy="77" r="3.5" fill="#6E8C99"/><circle cx="546" cy="130" r="3.5" fill="#6E8C99"/><circle cx="583" cy="183" r="3.5" fill="#6E8C99"/><circle cx="540" cy="108" r="3.5" fill="#6E8C99"/><circle cx="577" cy="161" r="3.5" fill="#6E8C99"/><circle cx="534" cy="86" r="3.5" fill="#6E8C99"/><circle cx="571" cy="139" r="3.5" fill="#6E8C99"/><circle cx="528" cy="192" r="3.5" fill="#6E8C99"/><circle cx="565" cy="117" r="3.5" fill="#6E8C99"/><text x="560" y="234" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">as partículas se espalham</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Líquidos e gases são fluidos: não têm forma própria e conseguem escoar.</p>`,
            },
            {
              heading: "Densidade e massa específica",
              body: `Densidade (d) → relação entre a massa de um corpo e o seu volume:

d = m / V

Massa específica (ρ) → relação entre a massa de uma substância e o seu volume:

ρ = m / V

A fórmula é a mesma; a diferença está no que se mede:
• Densidade → do corpo (que pode ser oco ou ter espaços vazios)
• Massa específica → da substância que forma o corpo

Unidades:
1 g/cm³ = 1000 kg/m³

Exemplo: a água tem ρ = 1 g/cm³ = 1000 kg/m³. Então 1 L (1000 cm³) de água tem 1000 g = 1 kg.`,
              visual: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="f7_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="f7_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="f7_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="f7_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="f7_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker><marker id="f7_5C4630" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5C4630"/></marker><pattern id="f7_hat" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#A8763E"/><line x1="0" y1="0" x2="0" y2="6" stroke="#F4EEE1" stroke-width="1.6"/></pattern></defs><rect width="640" height="280" rx="12" fill="#F4EEE1"/>
<text x="160" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">MESMO VOLUME, MASSAS DIFERENTES</text><text x="480" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">DENSIDADE × MASSA ESPECÍFICA</text><line x1="320" y1="14" x2="320" y2="266" stroke="#C9B18C" stroke-dasharray="4 4"/><path d="M50,90 l70,0 l0,70 l-70,0 Z" fill="#D8C9A8" stroke="#3E2F20" stroke-width="1.5"/><path d="M50,90 l24.5,-21 l70,0 l-24.5,21 Z" fill="#D8C9A8" stroke="#3E2F20" stroke-width="1.5" opacity="0.85"/><path d="M120,90 l24.5,-21 l0,70 l-24.5,21 Z" fill="#D8C9A8" stroke="#3E2F20" stroke-width="1.5" opacity="0.7"/><path d="M190,90 l70,0 l0,70 l-70,0 Z" fill="#5C4630" stroke="#3E2F20" stroke-width="1.5"/><path d="M190,90 l24.5,-21 l70,0 l-24.5,21 Z" fill="#5C4630" stroke="#3E2F20" stroke-width="1.5" opacity="0.85"/><path d="M260,90 l24.5,-21 l0,70 l-24.5,21 Z" fill="#5C4630" stroke="#3E2F20" stroke-width="1.5" opacity="0.7"/><text x="97" y="190" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Cortiça</text><text x="97" y="206" text-anchor="middle" font-size="10" fill="#5C4630">m = 2,4 g · V = 10 cm³</text><text x="97" y="224" text-anchor="middle" font-size="12" font-weight="700" fill="#A8763E">d = 0,24 g/cm³</text><text x="237" y="190" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">Ferro</text><text x="237" y="206" text-anchor="middle" font-size="10" fill="#5C4630">m = 79 g · V = 10 cm³</text><text x="237" y="224" text-anchor="middle" font-size="12" font-weight="700" fill="#A8763E">d = 7,9 g/cm³</text><rect x="100" y="241" width="120" height="26" rx="13" fill="#E4D9C4" stroke="#C9B18C"/><text x="160" y="259" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">d = m / V</text><circle cx="410" cy="118" r="52" fill="#5C4630" stroke="#3E2F20" stroke-width="1.5"/><circle cx="560" cy="118" r="52" fill="#5C4630" stroke="#3E2F20" stroke-width="1.5"/><circle cx="560" cy="118" r="38" fill="#F4EEE1" stroke="#3E2F20"/><text x="560" y="122" text-anchor="middle" font-size="10" font-style="italic" fill="#5C4630">vazio</text><text x="410" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">esfera maciça</text><text x="560" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">esfera oca</text><text x="480" y="222" text-anchor="middle" font-size="11" fill="#5C4630">mesmo metal → mesma massa específica (ρ)</text><text x="480" y="240" text-anchor="middle" font-size="11" font-weight="700" fill="#A8763E">a oca tem menor densidade (d) do corpo</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">A densidade é do corpo (conta os vazios); a massa específica é da substância.</p>`,
            },
            {
              heading: "Pressão",
              body: `Pressão é a relação entre a força aplicada e a área de aplicação:

P = F / A

• P → pressão (N/m² = Pa, pascal)
• F → força (N)
• A → área de aplicação (m²)

Para a mesma força:
• Área menor → pressão maior (faca afiada, salto fino, prego)
• Área maior → pressão menor (raquete de neve, pneus largos)`,
              visual: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">

<rect width="640" height="260" rx="12" fill="#F4EEE1"/>
<defs><marker id="hp1" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#A6493A"/></marker></defs>
<text x="160" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">ÁREA GRANDE</text>
<text x="480" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#3E2F20">ÁREA PEQUENA</text>
<line x1="320" y1="40" x2="320" y2="245" stroke="#C9B18C" stroke-dasharray="4 4"/>
<line x1="30" y1="180" x2="290" y2="180" stroke="#5C4630" stroke-width="2"/>
<line x1="350" y1="180" x2="610" y2="180" stroke="#5C4630" stroke-width="2"/>
<rect x="80" y="130" width="160" height="50" fill="#A8763E" stroke="#5C4630" stroke-width="2"/>
<rect x="455" y="84" width="50" height="96" fill="#A8763E" stroke="#5C4630" stroke-width="2"/>
<line x1="160" y1="70" x2="160" y2="116" stroke="#A6493A" stroke-width="3" marker-end="url(#hp1)"/><text x="172" y="96" text-anchor="start" font-size="14" font-weight="700" fill="#A6493A">F</text>
<line x1="480" y1="36" x2="480" y2="70" stroke="#A6493A" stroke-width="3" marker-end="url(#hp1)"/><text x="492" y="56" text-anchor="start" font-size="14" font-weight="700" fill="#A6493A">F</text>
<rect x="80" y="182" width="160" height="6" fill="#5B7553"/>
<rect x="455" y="182" width="50" height="6" fill="#5B7553"/>
<text x="160" y="210" text-anchor="middle" font-size="11" fill="#5C4630">mesma força, A grande</text>
<text x="160" y="234" text-anchor="middle" font-size="13" font-weight="700" fill="#5B7553">pressão MENOR</text>
<text x="480" y="210" text-anchor="middle" font-size="11" fill="#5C4630">mesma força, A pequena</text>
<text x="480" y="234" text-anchor="middle" font-size="13" font-weight="700" fill="#A6493A">pressão MAIOR</text>

</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">O mesmo tijolo (mesmo peso F) faz mais pressão em pé, porque a área de apoio (em verde) é menor: P = F / A.</p>`,
            },
          ],
          quiz: [
            { q: "Fluido é uma substância que:", options: ["Tem forma própria e não escoa","Adquire o formato do recipiente e pode escoar","É sempre sólida","Só existe no estado gasoso"], correct: 1 },
            { q: "Qual alternativa contém apenas fluidos?", options: ["Água e ar","Ferro e água","Madeira e ar","Gelo e pedra"], correct: 0 },
            { q: "Um corpo de 200 g ocupa um volume de 50 cm³. Sua densidade é:", options: ["0,25 g/cm³","4 g/cm³","150 g/cm³","10.000 g/cm³"], correct: 1 },
            { q: "Um objeto tem massa de 500 g e volume de 250 cm³. Sua densidade é:", options: ["0,5 g/cm³","2 g/cm³","250 g/cm³","750 g/cm³"], correct: 1 },
            { q: "A massa específica do alumínio é 2,7 g/cm³. Em kg/m³, isso equivale a:", options: ["2,7 kg/m³","27 kg/m³","270 kg/m³","2700 kg/m³"], correct: 3 },
            { q: "Sabendo que a água tem massa específica de 1 g/cm³, qual é a massa de 2 L de água?", options: ["2 g","20 g","200 g","2 kg"], correct: 3 },
            { q: "Qual é a diferença entre densidade e massa específica?", options: ["Não há nenhuma diferença","A densidade se refere ao corpo (que pode ser oco); a massa específica, à substância","A massa específica se refere ao corpo; a densidade, à substância","A densidade usa força e a massa específica usa área"], correct: 1 },
            { q: "Uma força de 100 N é aplicada sobre uma área de 0,5 m². A pressão é:", options: ["50 Pa","100 Pa","200 Pa","500 Pa"], correct: 2 },
            { q: "Uma pessoa de peso 600 N apoia-se sobre uma área de 0,02 m². A pressão exercida é:", options: ["12 Pa","300 Pa","3.000 Pa","30.000 Pa"], correct: 3 },
            { q: "No Sistema Internacional, a unidade de pressão é o pascal (Pa), que equivale a:", options: ["N · m²","N/m²","kg/m³","N/m"], correct: 1 },
            { q: "Por que uma faca afiada corta melhor do que uma faca cega?", options: ["Porque aplica mais força","Porque a área de contato é menor, aumentando a pressão","Porque a área de contato é maior","Porque diminui a pressão"], correct: 1 },
            { q: "Mantendo a mesma força, se a área de aplicação cai pela metade, a pressão:", options: ["Cai pela metade","Não muda","Dobra","Quadruplica"], correct: 2 },
          ],
        },
      ],
    },
);
