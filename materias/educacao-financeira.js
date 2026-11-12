window.DB_SUBJECTS = window.DB_SUBJECTS || [];
window.DB_SUBJECTS.push(
    {
      id: "educacao-financeira",
      name: "Educação Financeira",
      emoji: "💸",
      contents: [
        {
          id: "credito-e-juros-compostos",
          title: "Crédito e Juros Compostos",
          sections: [
            {
              heading: "📌 Ideia principal da matéria",
              body: `Nesta matéria você aprende o outro lado dos juros.

Na aula passada, os juros faziam o dinheiro render. Agora, eles fazem uma dívida crescer. A fórmula é exatamente a mesma; o que muda é a taxa de juros.

A pergunta mais importante da matéria é: "Quanto eu vou pagar no final?"`,
            },
            {
              heading: "1. A regra de ouro: juros compostos servem para investir e para dever",
              body: `A mesma fórmula é usada dos dois lados:
M = C × (1 + i)ⁿ

M = Montante (valor final).
C = Capital (valor inicial).
i = Taxa de juros.
n = Tempo (meses ou anos).

O ouro da aula:
Investimento → juros trabalham a seu favor.
Dívida → juros trabalham contra você.
O problema não é a fórmula, é o tamanho da taxa de juros.

Exemplo da aula:
R$ 1.000 aplicados em um CDB (14,15% ao ano) → R$ 1.141,50.
R$ 1.000 no rotativo do cartão (442,4% ao ano) → R$ 5.424,00.

Conclusão: a dívida cresce muito mais rápido do que um investimento rende.`,
              visual: `
<div class="space-y-3 max-w-sm mx-auto">
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Investimento (CDB, 1 ano)</span><span class="font-semibold text-correct">R$ 1.141,50</span></div>
    <div class="h-3 rounded-full bg-sand/40"><div class="h-3 rounded-full bg-correct" style="width: 21%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Dívida (rotativo, 1 ano)</span><span class="font-semibold text-wrong">R$ 5.424,00</span></div>
    <div class="h-3 rounded-full bg-sand/40"><div class="h-3 rounded-full bg-wrong" style="width: 100%"></div></div>
  </div>
</div>
<p class="text-[11px] text-bark/50 text-center mt-2">Mesmos R$ 1.000, mesmo tempo — a taxa é que muda tudo</p>`,
            },
            {
              heading: "2. As 3 perguntas de qualquer crédito (conteúdo mais importante)",
              body: `Antes de aceitar qualquer crédito, faça estas três perguntas:

Taxa — Quanto o banco cobra de juros. Pergunta: Quanto custa por mês? Exemplo: 2,2% ao mês • 15% ao mês.

Prazo — Por quanto tempo a dívida será paga. Pergunta: Em quantas parcelas? Importante: Quanto maior o prazo, menor costuma ser a parcela.

Total pago — É a pergunta mais importante. Pergunta: Quanto vai sair do meu bolso no final? Sempre some todas as parcelas e compare com o preço à vista.

Ouro da aula: Parcela pequena não significa crédito barato.`,
              visual: `
<div class="grid grid-cols-3 gap-2.5">
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">1. Taxa</p>
    <p class="text-[11px] text-bark/70">Quanto custa por mês?</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand p-3 text-center">
    <p class="font-display text-sm text-espresso mb-1">2. Prazo</p>
    <p class="text-[11px] text-bark/70">Em quantas parcelas?</p>
  </div>
  <div class="rounded-xl bg-espresso text-cream p-3 text-center">
    <p class="font-display text-sm mb-1">3. Total pago</p>
    <p class="text-[11px] opacity-80">Quanto sai do bolso?</p>
  </div>
</div>`,
            },
            {
              heading: "3. Cartão de crédito",
              body: `O cartão é um empréstimo de curto prazo. Enquanto a fatura é paga inteira até o vencimento, não há juros. O problema começa quando você paga apenas uma parte.

Como funciona:
Pagou a fatura inteira → Juros zero.
Pagou só uma parte → O restante entra no rotativo.

Se não conseguir pagar tudo, existem três caminhos:
Rotativo → 15% ao mês (o pior).
Parcelar a fatura → Cerca de 7% ao mês.
Empréstimo pessoal → Cerca de 4% ao mês.

Ouro da aula: Entre essas opções, o empréstimo pessoal costuma ser menos caro do que deixar a dívida no cartão.`,
            },
            {
              heading: "4. Rotativo do cartão (o crédito mais caro)",
              body: `O rotativo é considerado o crédito mais caro do dia a dia. A taxa usada na aula foi aproximadamente 15% ao mês (442,4% ao ano).

Como a dívida cresce (R$ 1.000 no rotativo):
Hoje → R$ 1.000.
1 mês → R$ 1.150.
3 meses → R$ 1.520,87.
12 meses → R$ 5.350,25.

O ouro da aula:
Os juros são compostos.
Todo mês os juros são calculados sobre a dívida já aumentada.
A dívida cresce de forma acelerada.`,
              visual: `
<div class="space-y-2 max-w-sm mx-auto">
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Hoje</span><span class="font-semibold">R$ 1.000,00</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 18.7%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>1 mês</span><span class="font-semibold">R$ 1.150,00</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 21.5%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>3 meses</span><span class="font-semibold">R$ 1.520,87</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 28.4%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>12 meses</span><span class="font-semibold text-wrong">R$ 5.350,25</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-wrong" style="width: 100%"></div></div>
  </div>
</div>`,
            },
            {
              heading: "5. Cheque especial",
              body: `O cheque especial é um limite automático da conta corrente. Quando o saldo acaba, o banco empresta dinheiro automaticamente.

Características:
Taxa média: 7,5% ao mês.
Pode chegar ao teto de 8% ao mês.
O juro corre por dia de uso.

Por que ele é perigoso?
É invisível.
O saldo fica negativo sem perceber.
O salário cobre a dívida e ela volta.`,
            },
            {
              heading: "6. Comparando os tipos de crédito",
              body: `A aula compara a mesma dívida de R$ 500 por 3 meses:

Rotativo → 15% ao mês → R$ 760,44.
Cheque especial → 7,5% ao mês → R$ 621,15.
Parcelamento da fatura → 7% ao mês → R$ 612,52.
Empréstimo pessoal → 4% ao mês → R$ 562,43.

Ouro da aula: A mesma dívida muda completamente dependendo da taxa de juros.`,
              visual: `
<div class="space-y-2 max-w-sm mx-auto">
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Rotativo (15%/mês)</span><span class="font-semibold text-wrong">R$ 760,44</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-wrong" style="width: 100%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Cheque especial (7,5%/mês)</span><span class="font-semibold">R$ 621,15</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 81.7%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Parcelamento fatura (7%/mês)</span><span class="font-semibold">R$ 612,52</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 80.5%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Empréstimo pessoal (4%/mês)</span><span class="font-semibold text-correct">R$ 562,43</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-correct" style="width: 73.9%"></div></div>
  </div>
</div>
<p class="text-[11px] text-bark/50 text-center mt-2">Mesma dívida de R$ 500 por 3 meses, quatro taxas diferentes</p>`,
            },
            {
              heading: "7. Trocar uma dívida cara por uma barata",
              body: `A professora mostra que faz sentido trocar uma dívida mais cara por outra menos cara.

Exemplo da aula — Ana deve R$ 1.000 no rotativo. Comparação:
Permanecer no rotativo → Dívida cresce muito mais.
Pegar empréstimo de 4% ao mês e quitar o cartão → Dívida cresce bem menos.

Ouro da aula: Compare sempre os dois montantes finais antes de decidir.`,
            },
            {
              heading: `8. Parcelado "sem juros": o juro escondido`,
              body: `Nem sempre o parcelado "sem juros" realmente não tem juros.

Exemplo da aula — Fone de ouvido:
À vista: R$ 600.
Parcelado: 3 × R$ 220.

Conta correta:
Total parcelado = R$ 660.
Diferença = R$ 60.
Juro escondido = 10%.

Regra prática: Se existe desconto à vista, existe juro embutido no parcelamento.`,
            },
            {
              heading: "9. Como descobrir o juro escondido",
              body: `A professora ensina um passo a passo:

Passo 1 — Some todas as parcelas (Parcela × número de parcelas).
Passo 2 — Descubra o verdadeiro preço à vista.
Passo 3 — Compare: Diferença ÷ Preço à vista. Esse resultado mostra a porcentagem do juro do período.

Ouro da aula: Sempre faça essa conta quando comparar preço à vista e parcelado.`,
              visual: `
<div class="flex flex-col items-center gap-1 max-w-xs mx-auto text-center">
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">1. Somar todas as parcelas</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-cream border border-sand px-3 py-2 text-sm text-bark font-medium">2. Descobrir o preço à vista</div>
  <span class="text-ochre text-xs">↓</span>
  <div class="w-full rounded-lg bg-espresso text-cream px-3 py-2 text-sm font-medium">3. Diferença ÷ Preço à vista = juro escondido</div>
</div>`,
            },
            {
              heading: "10. CET — Custo Efetivo Total",
              body: `O CET é o custo completo de um empréstimo. Ele é obrigatório por lei.

O CET inclui: Juros, IOF, Tarifas, Seguros, Outras cobranças.

Exemplo da aula — Empréstimo:
Valor: R$ 1.000.
Juros: 3%.
Tarifa + IOF: R$ 50.

Resultado:
Valor devolvido: R$ 1.080.
Taxa anunciada: 3%.
Custo real: 8%.

Ouro da aula: Nunca compare apenas a taxa de juros. Compare o CET.`,
              visual: `
<div class="space-y-2 max-w-xs mx-auto">
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Taxa anunciada</span><span class="font-semibold">3%</span></div>
    <div class="h-3 rounded-full bg-sand/40"><div class="h-3 rounded-full bg-sand" style="width: 37.5%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>CET (custo real)</span><span class="font-semibold text-wrong">8%</span></div>
    <div class="h-3 rounded-full bg-sand/40"><div class="h-3 rounded-full bg-wrong" style="width: 100%"></div></div>
  </div>
</div>`,
            },
            {
              heading: "11. Financiamento",
              body: `O financiamento engana porque a parcela parece pequena.

Exemplo da aula — Carro de R$ 60.000 • Entrada: R$ 12.000 • Valor financiado: R$ 48.000.

24 meses → parcela R$ 2.595 → total pago R$ 74.280.
36 meses → parcela R$ 1.944 → total pago R$ 81.984.
48 meses → parcela R$ 1.629 → total pago R$ 90.192.

O ouro da aula:
Quanto maior o prazo, menor a parcela.
Quanto maior o prazo, maior o total pago.
O vendedor mostra a parcela; você deve olhar o total.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Prazo</th><th class="text-left py-2 pr-3 font-display text-bark">Parcela</th><th class="text-left py-2 font-display text-bark">Total pago</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">24 meses</td><td class="py-1.5 pr-3 text-bark/80">R$ 2.595</td><td class="py-1.5 text-bark/80">R$ 74.280</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">36 meses</td><td class="py-1.5 pr-3 text-bark/80">R$ 1.944</td><td class="py-1.5 text-bark/80">R$ 81.984</td></tr>
      <tr><td class="py-1.5 pr-3 text-bark/80">48 meses</td><td class="py-1.5 pr-3 text-bark/80">R$ 1.629</td><td class="py-1.5 text-bark/80 font-semibold text-wrong">R$ 90.192</td></tr>
    </tbody>
  </table>
</div>`,
            },
            {
              heading: "12. Resumão da professora",
              body: `Quanto custa R$ 1.000 em um ano:

Rotativo do cartão → Dívida de R$ 5.424.
Cheque especial → Dívida de R$ 2.398.
Financiamento de veículo → Dívida de R$ 1.294.
Tesouro Selic (investimento) → R$ 1.142,50.

O que essa tabela quer mostrar? Uma dívida cobra muito mais juros do que um investimento seguro consegue render.`,
              visual: `
<div class="space-y-2 max-w-sm mx-auto">
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Rotativo do cartão</span><span class="font-semibold text-wrong">R$ 5.424</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-wrong" style="width: 100%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Cheque especial</span><span class="font-semibold">R$ 2.398</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-ochre" style="width: 44.2%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Financiamento de veículo</span><span class="font-semibold">R$ 1.294</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-sand" style="width: 23.9%"></div></div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-bark/70 mb-1"><span>Tesouro Selic (investir)</span><span class="font-semibold text-correct">R$ 1.142,50</span></div>
    <div class="h-2.5 rounded-full bg-sand/40"><div class="h-2.5 rounded-full bg-correct" style="width: 21.1%"></div></div>
  </div>
</div>
<p class="text-[11px] text-bark/50 text-center mt-2">R$ 1.000 aplicados de 4 formas diferentes por 1 ano</p>`,
            },
            {
              heading: "🎯 Ouro da matéria",
              body: `As 3 perguntas de qualquer crédito: Taxa • Prazo • Total pago.
Usar juros compostos: M = C × (1 + i)ⁿ para calcular dívidas.
Rotativo é o crédito mais caro: Cerca de 15% ao mês.
Cheque especial também cobra juros altos: Cerca de 7,5% ao mês.
Descobrir juro escondido: Somar parcelas e comparar com o preço à vista.
Saber o que é CET: Juros + IOF + tarifas + seguros + outros custos.
Comparar financiamento pelo total pago: Nunca apenas pela parcela.

✅ As 3 ideias para levar para casa (igual à aula):
1. O juro é o mesmo dos dois lados: a mesma fórmula serve para investimento e dívida; o que muda é a taxa.
2. Parcela pequena não significa crédito barato: multiplique parcela × número de parcelas e compare com o preço à vista.
3. Quitar uma dívida cara é o melhor investimento: nenhuma aplicação segura rende perto do que o rotativo cobra.`,
            },
            {
              heading: "📝 Dados de referência e fórmulas úteis (agosto/2026)",
              body: `Indicadores de referência:
Taxa Selic (meta): 14,25% a.a. — Definida pelo Copom; vigente desde 17/06/2026.
CDI: 14,15% a.a. — Anda colado na Selic (um pouco abaixo).
Tesouro Selic: ≈ 14,25% a.a. — Título público pós-fixado, segue a Selic.
Poupança: 6,17% a.a. — Regra de Selic > 8,5% a.a. (0,5% a.m. + TR).
CDB (referência): % do CDI — Ex.: 100% do CDI = 14,15% a.a.
IPCA (12 meses): 4,64% — Inflação acumulada até junho/2026, usada para o ganho real.

Fórmulas úteis:
Juros simples: J = C · i · t
Juros compostos: M = C · (1 + i)ⁿ
Aumentos sucessivos: (1 + i₁) · (1 + i₂) − 1
Ganho ou perda real: (1 + rendimento) ÷ (1 + inflação) − 1

Fontes consultadas em agosto/2026 (valores podem variar). Lista de Exercícios — Retomada de Conteúdo, Colégio Anglo Bauru.`,
              visual: `
<div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <thead><tr class="border-b-2 border-espresso/70"><th class="text-left py-2 pr-3 font-display text-bark">Indicador</th><th class="text-left py-2 font-display text-bark">Valor (a.a.)</th></tr></thead>
    <tbody>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Taxa Selic (meta)</td><td class="py-1.5 text-bark/80">14,25%</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">CDI</td><td class="py-1.5 text-bark/80">14,15%</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Tesouro Selic</td><td class="py-1.5 text-bark/80">≈ 14,25%</td></tr>
      <tr class="border-b border-sand/60"><td class="py-1.5 pr-3 text-bark/80">Poupança</td><td class="py-1.5 text-bark/80">6,17%</td></tr>
      <tr><td class="py-1.5 pr-3 text-bark/80">IPCA (12 meses)</td><td class="py-1.5 text-bark/80">4,64%</td></tr>
    </tbody>
  </table>
</div>`,
            },
          ],
          quiz: [
            { q: "A poupança rende cerca de 6,17% ao ano. Qual é o montante final de R$ 1.500,00 aplicados por 1 ano?", options: ["R$ 1.592,55", "R$ 1.500,00", "R$ 1.661,70", "R$ 1.592,00"], correct: 0 },
            { q: "Um CDB paga 80% do CDI (14,15% a.a.). Qual é a taxa anual desse CDB?", options: ["11,32% a.a.", "14,15% a.a.", "8,00% a.a.", "17,15% a.a."], correct: 0 },
            { q: "Nesse mesmo CDB (80% do CDI), quanto renderiam R$ 5.000,00 em 1 ano?", options: ["R$ 566,00", "R$ 707,50", "R$ 500,00", "R$ 632,50"], correct: 0 },
            { q: "O Tesouro Selic rende cerca de 14,25% ao ano. Qual o rendimento de R$ 2.400,00 em 1 ano, a juros simples?", options: ["R$ 342,00", "R$ 240,00", "R$ 171,00", "R$ 300,00"], correct: 0 },
            { q: "Entre poupança (6,17%), Tesouro Selic (14,25%) e CDB 100% do CDI (14,15%), qual rende mais para R$ 3.000,00 em 1 ano?", options: ["Tesouro Selic", "CDB", "Poupança", "Todos rendem igual"], correct: 0 },
            { q: "Dois irmãos investiram juntos em um CDB: R$ 1.200,00 e R$ 800,00. O rendimento total foi R$ 260,00. Quanto cabe a quem investiu R$ 1.200,00?", options: ["R$ 156,00", "R$ 130,00", "R$ 104,00", "R$ 174,00"], correct: 0 },
            { q: "Um investimento rendeu 5% no 1º semestre e 9% no 2º semestre. Qual foi a variação acumulada no ano?", options: ["14,45%", "14%", "13,55%", "15%"], correct: 0 },
            { q: "Uma ação subiu 25% em um mês e caiu 25% no mês seguinte. O investidor voltou ao valor inicial?", options: ["Não; ficou com uma perda acumulada de 6,25%", "Sim, voltou exatamente ao valor inicial", "Não; teve um ganho de 6,25%", "Não; perdeu 25% no total"], correct: 0 },
            { q: "Sobre um ganho bruto de R$ 2.000,00 incidem IR de 20% e, depois, taxa de administração de 5% sobre o que sobrou. Qual é o valor líquido final?", options: ["R$ 1.520,00", "R$ 1.500,00", "R$ 1.600,00", "R$ 1.900,00"], correct: 0 },
            { q: "Aplicando R$ 4.000,00 a 14% a.a. por 2 anos, com juros compostos (1,14² = 1,2996), qual é o montante final?", options: ["R$ 5.198,40", "R$ 5.120,00", "R$ 4.560,00", "R$ 5.360,00"], correct: 0 },
            { q: "Nesse mesmo investimento (R$ 4.000,00 a 14% a.a. por 2 anos), quanto foi de juros no período?", options: ["R$ 1.198,40", "R$ 1.120,00", "R$ 560,00", "R$ 1.000,00"], correct: 0 },
            { q: "Para R$ 5.000,00 a 12% a.a. por 3 anos (juros compostos: 1,12³ = 1,404928), qual é a diferença entre o montante a juros compostos e a juros simples?", options: ["R$ 224,64", "R$ 180,00", "R$ 300,00", "R$ 150,00"], correct: 0 },
            { q: "Um CDB rendeu 14,15% no ano e o IPCA do período foi 4,64%. Qual foi, aproximadamente, a taxa de ganho real dessa aplicação?", options: ["≈ 9,1%", "≈ 14,15%", "≈ 4,64%", "≈ 18,79%"], correct: 0 },
            { q: "Quem guardou R$ 1.000,00 em casa (rendimento 0%) por 1 ano, com IPCA de 4,64%, teve qual resultado sobre o poder de compra?", options: ["Perda real de aproximadamente 4,4%", "Ganho real de 4,64%", "Manteve o poder de compra exatamente", "Perda de 100% do valor"], correct: 0 },
            { q: "R$ 8.000,00 aplicados em um CDB de 100% do CDI (14,15% a.a.) por 1 ano. Qual é o juro bruto?", options: ["R$ 1.132,00", "R$ 1.000,00", "R$ 1.200,00", "R$ 800,00"], correct: 0 },
            { q: "Descontando IR de 17,5% sobre esse ganho, qual é o ganho líquido em reais?", options: ["R$ 933,90", "R$ 1.132,00", "R$ 800,00", "R$ 1.000,00"], correct: 0 },
            { q: "Com IPCA de 4,64%, o ganho real líquido desse CDB de R$ 8.000,00 foi:", options: ["Positivo (≈ 6,7%), protegendo o poder de compra", "Negativo, não protegendo o poder de compra", "Exatamente zero", "Igual ao IPCA"], correct: 0 },
          ],
        },
        {
          id: "salario-bruto-liquido",
          title: "Salário: do bruto ao líquido",
          noShuffle: true,
          sections: [
            {
              heading: "📌 A pergunta do bimestre",
              body: `Você foi contratado por R$ 3.500,00. Quanto cai na sua conta no fim do mês?

O salário do anúncio não é o salário da conta. Entre o número que a empresa anuncia e o que aparece no banco existem descontos obrigatórios.

Ferramentas que você já conhece e vai usar:
• Porcentagem → descontos sobre o salário
• Descontos sucessivos → um desconto em cima do que sobrou
• Faixas progressivas → cada pedaço com sua alíquota
• Valor real → o que o dinheiro compra de verdade`,
            },
            {
              heading: "1. Os três números do salário",
              body: `Todo salário tem três números:

1. Salário BRUTO → o número do contrato e do anúncio da vaga.
2. Salário LÍQUIDO → o que sobra depois dos descontos obrigatórios.
3. CUSTO para a empresa → salário + encargos + FGTS + provisões de 13º e férias. Costuma passar de 1,5 vez o bruto.

Exemplo (R$ 3.500,00, com INSS e vale-transporte, sem dependentes):
• Bruto: R$ 3.500,00
• Líquido: R$ 2.981,40
• Diferença: R$ 518,60 por mês, ou R$ 6.223,20 por ano
• Custo para a empresa: ≈ R$ 5.400,00`,
              visual: `<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
  <div class="rounded-xl bg-cream border border-sand px-3 py-3 text-center">
    <p class="font-display text-ochre font-bold mb-1">1. Salário BRUTO</p>
    <p class="text-espresso text-lg font-semibold">R$ 3.500,00</p>
    <p class="text-bark text-sm mt-1">O número do contrato e do anúncio da vaga. É a base de tudo, mas ninguém recebe isso.</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-3 text-center">
    <p class="font-display text-ochre font-bold mb-1">2. Salário LÍQUIDO</p>
    <p class="text-espresso text-lg font-semibold">R$ 2.981,40</p>
    <p class="text-bark text-sm mt-1">O que sobra depois dos descontos obrigatórios. É com ele que você paga as contas.</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-3 text-center">
    <p class="font-display text-ochre font-bold mb-1">3. CUSTO para a empresa</p>
    <p class="text-espresso text-lg font-semibold">≈ R$ 5.400,00</p>
    <p class="text-bark text-sm mt-1">Salário + encargos, FGTS e provisões de 13º e férias. Costuma passar de 1,5 vez o bruto.</p>
  </div>
</div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Exemplo da aula: R$ 3.500,00 com INSS e vale-transporte, sem dependentes. Diferença de R$ 518,60 por mês.</p>`,
            },
            {
              heading: "2. O contracheque (holerite)",
              body: `Todo contracheque tem duas colunas:

PROVENTOS (o que soma)
• Salário base (proporcional aos dias trabalhados)
• Horas extras, adicional noturno, insalubridade
• Comissões, gratificações, prêmios (também entram na base dos descontos)

DESCONTOS (o que subtrai)
• INSS → obrigatório, por faixas progressivas
• Imposto de renda retido na fonte → obrigatório só acima de certo valor
• Vale-transporte, vale-refeição, plano de saúde → opcionais, com limite em lei ou acordo
• Faltas, atrasos, adiantamentos

Líquido = total de proventos − total de descontos`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">PROVENTOS (o que soma)</th><th class="text-left py-2 pr-4 font-display text-ochre">DESCONTOS (o que subtrai)</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Salário base (proporcional aos dias trabalhados)</td><td class="py-1.5 pr-4 text-espresso">INSS (obrigatório, por faixas progressivas)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Horas extras, adicional noturno, insalubridade</td><td class="py-1.5 pr-4 text-espresso">Imposto de renda retido na fonte (obrigatório acima de certo valor)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Comissões, gratificações, prêmios</td><td class="py-1.5 pr-4 text-espresso">Vale-transporte, vale-refeição, plano de saúde (opcionais)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold"></td><td class="py-1.5 pr-4 text-espresso">Faltas, atrasos, adiantamentos</td></tr></tbody></table></div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Total de proventos − total de descontos = líquido a receber. É sempre essa conta.</p>`,
            },
            {
              heading: "3. INSS: a sua aposentadoria começa aqui",
              body: `O INSS não é imposto: é CONTRIBUIÇÃO. Garante aposentadoria, auxílio-doença, salário-maternidade e pensão.

• É obrigatório: todo trabalhador com carteira assinada contribui.
• É progressivo: o salário é fatiado em faixas, e cada faixa tem sua alíquota.
• Tem teto: acima de R$ 8.475,55 o desconto para de crescer (máximo de R$ 988,09).
• A empresa também paga a parte dela, por fora do seu salário.

⚠️ Progressivo quer dizer que ninguém paga a alíquota maior sobre o salário inteiro. Um salário de R$ 5.000 NÃO paga 14% sobre tudo.`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Faixa do salário</th><th class="text-left py-2 pr-4 font-display text-ochre">Alíquota</th><th class="text-left py-2 pr-4 font-display text-ochre">Parcela a deduzir</th><th class="text-left py-2 pr-4 font-display text-ochre">Quanto pesa a faixa</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">até R$ 1.621,00</td><td class="py-1.5 pr-4 text-espresso">7,5%</td><td class="py-1.5 pr-4 text-espresso">nenhuma</td><td class="py-1.5 pr-4 text-espresso">no máximo R$ 121,57</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">de R$ 1.621,01 a R$ 2.902,84</td><td class="py-1.5 pr-4 text-espresso">9%</td><td class="py-1.5 pr-4 text-espresso">R$ 24,32</td><td class="py-1.5 pr-4 text-espresso">até R$ 115,37 a mais</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">de R$ 2.902,85 a R$ 4.354,27</td><td class="py-1.5 pr-4 text-espresso">12%</td><td class="py-1.5 pr-4 text-espresso">R$ 111,40</td><td class="py-1.5 pr-4 text-espresso">até R$ 174,17 a mais</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">de R$ 4.354,28 a R$ 8.475,55</td><td class="py-1.5 pr-4 text-espresso">14%</td><td class="py-1.5 pr-4 text-espresso">R$ 198,49</td><td class="py-1.5 pr-4 text-espresso">até R$ 576,98 a mais</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">acima de R$ 8.475,55</td><td class="py-1.5 pr-4 text-espresso">teto</td><td class="py-1.5 pr-4 text-espresso">—</td><td class="py-1.5 pr-4 text-espresso">desconto trava em R$ 988,09</td></tr></tbody></table></div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Tabela do INSS 2026. Salário mínimo de 2026: R$ 1.621,00.</p>`,
            },
            {
              heading: "4. Calculando o INSS: faixa por faixa e pelo atalho",
              body: `Exemplo: salário de R$ 3.500,00

Faixa por faixa:
• 1ª faixa: R$ 1.621,00 × 7,5% = R$ 121,57
• 2ª faixa: R$ 1.281,84 × 9% = R$ 115,37
• 3ª faixa: R$ 597,16 × 12% = R$ 71,66
• Total: R$ 308,60

O atalho (parcela a deduzir):
INSS = salário × alíquota da faixa − parcela a deduzir
3.500 × 12% − 111,40 = R$ 308,60 → mesmo resultado, em uma linha.

Outros exemplos:
• 1.621 × 7,5% = R$ 121,57
• 2.500 × 9% − 24,32 = R$ 200,68
• 6.000 × 14% − 198,49 = R$ 641,51

🧠 A parcela a deduzir funciona porque desconta o que foi cobrado a mais ao aplicar a alíquota maior também nas faixas de baixo.`,
              visual: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;" font-family="Inter, sans-serif">
<defs><marker id="ef1_3E2F20" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#3E2F20"/></marker><marker id="ef1_A6493A" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A6493A"/></marker><marker id="ef1_5B7553" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#5B7553"/></marker><marker id="ef1_A8763E" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#A8763E"/></marker><marker id="ef1_6E8C99" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="#6E8C99"/></marker></defs>
<text x="320" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="#3E2F20">INSS de um salário de R$ 3.500,00, faixa por faixa</text><rect x="40" y="44" width="259.36" height="50" fill="#B9CBD3" stroke="#3E2F20" stroke-width="1"/><text x="169.68" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">R$ 1.621,00</text><text x="169.68" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">× 7,5%</text><text x="169.68" y="118" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">= R$ 121,57</text><rect x="299.36" y="44" width="205.09439999999998" height="50" fill="#C9B18C" stroke="#3E2F20" stroke-width="1"/><text x="401.9072" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">R$ 1.281,84</text><text x="401.9072" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">× 9%</text><text x="401.9072" y="118" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">= R$ 115,37</text><rect x="504.45439999999996" y="44" width="95.5456" height="50" fill="#A8763E" stroke="#3E2F20" stroke-width="1"/><text x="552.2271999999999" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#3E2F20">R$ 597,16</text><text x="552.2271999999999" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#3E2F20">× 12%</text><text x="552.2271999999999" y="118" text-anchor="middle" font-size="13" font-weight="700" fill="#A8763E">= R$ 71,66</text><text x="320" y="156" text-anchor="middle" font-size="15" font-weight="700" fill="#3E2F20">Total: 121,57 + 115,37 + 71,66 = R$ 308,60</text><rect x="90" y="172" width="460" height="40" rx="10" fill="#E4D9C4" stroke="#5B7553" stroke-width="2"/><text x="320" y="197" text-anchor="middle" font-size="14" font-weight="700" fill="#5B7553">Atalho: 3.500 × 12% − 111,40 = R$ 308,60</text>
</svg>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Progressivo: ninguém paga a alíquota maior sobre o salário inteiro. A parcela a deduzir corrige isso de uma vez.</p>`,
            },
            {
              heading: "5. Imposto de renda: a base não é o salário",
              body: `O IR não incide sobre o bruto. Antes, algumas coisas saem da conta:

Base de cálculo = salário bruto − INSS − dependentes (R$ 189,59 cada)
Ex.: 6.000 − 641,51 − 189,59 = R$ 5.168,90 (com 1 dependente)

O desconto simplificado
Em vez de somar INSS e dependentes, pode-se abater um valor fixo de R$ 607,20 por mês. Use o que for MAIOR (é o que deixa a base menor).

Depois, aplique a tabela:
IR = base × alíquota − parcela a deduzir`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Base de cálculo mensal</th><th class="text-left py-2 pr-4 font-display text-ochre">Alíquota</th><th class="text-left py-2 pr-4 font-display text-ochre">Parcela a deduzir</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">até R$ 2.428,80</td><td class="py-1.5 pr-4 text-espresso">isento</td><td class="py-1.5 pr-4 text-espresso">nenhuma</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">de R$ 2.428,81 a R$ 2.826,65</td><td class="py-1.5 pr-4 text-espresso">7,5%</td><td class="py-1.5 pr-4 text-espresso">R$ 182,16</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">de R$ 2.826,66 a R$ 3.751,05</td><td class="py-1.5 pr-4 text-espresso">15%</td><td class="py-1.5 pr-4 text-espresso">R$ 394,16</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">de R$ 3.751,06 a R$ 4.664,68</td><td class="py-1.5 pr-4 text-espresso">22,5%</td><td class="py-1.5 pr-4 text-espresso">R$ 675,49</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">acima de R$ 4.664,68</td><td class="py-1.5 pr-4 text-espresso">27,5%</td><td class="py-1.5 pr-4 text-espresso">R$ 908,73</td></tr></tbody></table></div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Tabela do IR 2026. A alíquota vale para a BASE DE CÁLCULO, não para o salário bruto.</p>`,
            },
            {
              heading: "6. A regra de 2026: até R$ 5.000, imposto zero",
              body: `A Lei 15.270/2025 mudou o imposto de renda:

• Até R$ 5.000,00 por mês → ISENTO (imposto zero, sem precisar calcular).
• De R$ 5.000,01 a R$ 7.350,00 → faixa de transição: calcula o imposto normal pela tabela e abate o redutor.
  Redutor = 978,62 − 0,133145 × salário
• Acima de R$ 7.350,00 → tabela cheia, sem abatimento extra.

Na prática: o primeiro emprego quase certamente não vai pagar imposto de renda, mas vai pagar INSS desde o primeiro real.

Exemplo completo: R$ 6.000,00 (veja a tabela) → líquido de R$ 4.973,39.`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Etapa</th><th class="text-left py-2 pr-4 font-display text-ochre">Conta</th><th class="text-left py-2 pr-4 font-display text-ochre">Valor</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Salário bruto</td><td class="py-1.5 pr-4 text-espresso">o que está no contrato</td><td class="py-1.5 pr-4 text-espresso">R$ 6.000,00</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">INSS</td><td class="py-1.5 pr-4 text-espresso">6.000 × 14% − 198,49</td><td class="py-1.5 pr-4 text-espresso">− R$ 641,51</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Base do IR</td><td class="py-1.5 pr-4 text-espresso">6.000 − 641,51</td><td class="py-1.5 pr-4 text-espresso">R$ 5.358,49</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Imposto pela tabela</td><td class="py-1.5 pr-4 text-espresso">5.358,49 × 27,5% − 908,73</td><td class="py-1.5 pr-4 text-espresso">R$ 564,85</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Redutor da transição</td><td class="py-1.5 pr-4 text-espresso">978,62 − 0,133145 × 6.000</td><td class="py-1.5 pr-4 text-espresso">− R$ 179,75</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">IR devido</td><td class="py-1.5 pr-4 text-espresso">564,85 − 179,75</td><td class="py-1.5 pr-4 text-espresso">− R$ 385,10</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold"><b>Líquido</b></td><td class="py-1.5 pr-4 text-espresso">6.000 − 641,51 − 385,10</td><td class="py-1.5 pr-4 text-espresso"><b>R$ 4.973,39</b></td></tr></tbody></table></div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Os descontos obrigatórios levaram R$ 1.026,61, ou 17,1% do bruto.</p>`,
            },
            {
              heading: "7. Vale-transporte, opcionais e a receita do contracheque",
              body: `• Vale-transporte → a empresa desconta no máximo 6% do salário base. Se a condução custar menos que isso, desconta só o valor da condução.
  Ex.: 3.500 × 6% = R$ 210,00
• Vale-refeição e alimentação → o desconto costuma ficar entre 1% e 20% do benefício, conforme o acordo da categoria.
  Ex.: R$ 600 com 10% = R$ 60,00
• Plano de saúde → quando é coparticipativo, parte sai do contracheque.
• Faltas e atrasos → cada dia não justificado desconta o dia e pode derrubar o descanso semanal remunerado.
  Ex.: 3.500 ÷ 30 = R$ 116,67 por dia

⚠️ O vale-transporte é o único com limite fixado em lei.

A receita completa (sempre nessa ordem):
1. Some os proventos
2. Calcule o INSS
3. Ache a base do IR
4. Calcule o imposto
5. Tire os opcionais e chegue ao líquido`,
              visual: `<div class="space-y-2">
  <div class="flex items-center gap-3 rounded-xl bg-cream border border-sand px-3 py-2">
    <span class="font-display text-ochre font-bold text-xl w-6 text-center">1</span>
    <p class="text-espresso text-sm"><b>Some os proventos</b> — salário base + extras, adicionais e comissões</p>
  </div>
  <div class="flex items-center gap-3 rounded-xl bg-cream border border-sand px-3 py-2">
    <span class="font-display text-ochre font-bold text-xl w-6 text-center">2</span>
    <p class="text-espresso text-sm"><b>Calcule o INSS</b> — sobre o total de proventos, com a tabela progressiva</p>
  </div>
  <div class="flex items-center gap-3 rounded-xl bg-cream border border-sand px-3 py-2">
    <span class="font-display text-ochre font-bold text-xl w-6 text-center">3</span>
    <p class="text-espresso text-sm"><b>Ache a base do IR</b> — proventos − INSS − dependentes, ou o desconto simplificado</p>
  </div>
  <div class="flex items-center gap-3 rounded-xl bg-cream border border-sand px-3 py-2">
    <span class="font-display text-ochre font-bold text-xl w-6 text-center">4</span>
    <p class="text-espresso text-sm"><b>Calcule o imposto</b> — tabela, redutor da transição e a regra dos R$ 5.000</p>
  </div>
  <div class="flex items-center gap-3 rounded-xl bg-cream border border-sand px-3 py-2">
    <span class="font-display text-ochre font-bold text-xl w-6 text-center">5</span>
    <p class="text-espresso text-sm"><b>Tire os opcionais</b> — vale-transporte, plano, faltas → líquido</p>
  </div>
</div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Sempre nessa ordem: o imposto de renda depende do INSS.</p>`,
            },
            {
              heading: "8. FGTS: seu dinheiro guardado por fora",
              body: `Todo mês a empresa deposita 8% do seu salário bruto numa conta da Caixa no seu nome. NÃO sai do seu contracheque: é um valor a mais.

• Salário de R$ 3.500 → R$ 280 por mês → R$ 3.360 por ano.
• Demissão sem justa causa → a empresa paga multa de 40% sobre tudo o que foi depositado.
  Após 3 anos: saldo ≈ R$ 10.080 + multa de R$ 4.032.

Saque só em situações específicas: demissão sem justa causa, compra da casa própria, aposentadoria e algumas doenças graves.

🧠 Por isso pedir demissão e ser demitido são coisas muito diferentes.`,
              visual: `<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
  <div class="rounded-xl bg-cream border border-sand px-3 py-3 text-center">
    <p class="font-display text-ochre font-bold mb-1">Quanto</p>
    <p class="text-espresso text-lg font-semibold">8% do bruto</p>
    <p class="text-bark text-sm mt-1">Depositado pela empresa todo mês numa conta da Caixa no seu nome. Não sai do seu salário.</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-3 text-center">
    <p class="font-display text-ochre font-bold mb-1">Exemplo</p>
    <p class="text-espresso text-lg font-semibold">R$ 280/mês</p>
    <p class="text-bark text-sm mt-1">Salário de R$ 3.500: R$ 3.360 por ano; em 3 anos, cerca de R$ 10.080.</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-3 text-center">
    <p class="font-display text-ochre font-bold mb-1">Multa</p>
    <p class="text-espresso text-lg font-semibold">40%</p>
    <p class="text-bark text-sm mt-1">Na demissão sem justa causa, a empresa paga 40% sobre tudo o que foi depositado (R$ 4.032 no exemplo).</p>
  </div>
</div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Saque só em casos específicos: demissão sem justa causa, casa própria, aposentadoria e algumas doenças graves.</p>`,
            },
            {
              heading: "9. 13º salário e férias com um terço",
              body: `Dois pagamentos a mais por ano que quase ninguém considera ao comparar propostas.

• 13º salário → um salário extra por ano, pago em duas parcelas (novembro e dezembro).
  Diluído: salário ÷ 12 (R$ 3.500 ÷ 12 = R$ 291,67 por mês)
• Férias + 1/3 → 30 dias por ano com um adicional de um terço do salário.
  No mês das férias: salário × 1,333 (R$ 3.500 → R$ 4.666,67)
  Diluídas (como a professora calcula): salário × 1,333 ÷ 12

No ano, quem é CLT recebe o equivalente a 13,33 salários.`,
              visual: `<div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
  <div class="rounded-xl bg-cream border border-sand px-3 py-3 text-center">
    <p class="font-display text-ochre font-bold mb-1">13º salário</p>
    <p class="text-espresso text-lg font-semibold">1 salário a mais</p>
    <p class="text-bark text-sm mt-1">Pago em duas parcelas (novembro e dezembro). R$ 3.500 ÷ 12 = R$ 291,67 acumulados por mês.</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-3 text-center">
    <p class="font-display text-ochre font-bold mb-1">Férias + 1/3</p>
    <p class="text-espresso text-lg font-semibold">salário × 1,333</p>
    <p class="text-bark text-sm mt-1">30 dias por ano com um terço a mais. R$ 3.500 → R$ 4.666,67 no mês das férias.</p>
  </div>
  <div class="rounded-xl bg-cream border border-sand px-3 py-3 text-center">
    <p class="font-display text-ochre font-bold mb-1">No ano</p>
    <p class="text-espresso text-lg font-semibold">13,33 salários</p>
    <p class="text-bark text-sm mt-1">12 salários + 13º + 1/3 de férias. R$ 3.500 × 13,33 ≈ R$ 46.655 por ano.</p>
  </div>
</div>`,
            },
            {
              heading: "10. Comparando propostas e o custo para a empresa",
              body: `Duas vagas com salários diferentes podem valer quase o mesmo, ou o contrário. Quem só olha o bruto escolhe errado.

Quanto você custa para a empresa (salário de R$ 3.500,00):
• Salário bruto: R$ 3.500,00
• FGTS de 8%: R$ 280,00
• Provisão de 13º: R$ 291,67
• Provisão de férias com 1/3: R$ 388,89
• Encargos e benefícios: cerca de R$ 940,00
• Custo total: ≈ R$ 5.400 por mês (cerca de 1,5 vez o bruto; em algumas empresas passa de 1,8)`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">O que entra na comparação</th><th class="text-left py-2 pr-4 font-display text-ochre">Vaga A</th><th class="text-left py-2 pr-4 font-display text-ochre">Vaga B</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Salário bruto</td><td class="py-1.5 pr-4 text-espresso">R$ 3.500,00</td><td class="py-1.5 pr-4 text-espresso">R$ 3.200,00</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Vale-refeição mensal</td><td class="py-1.5 pr-4 text-espresso">não tem</td><td class="py-1.5 pr-4 text-espresso">R$ 700,00</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Plano de saúde</td><td class="py-1.5 pr-4 text-espresso">não tem</td><td class="py-1.5 pr-4 text-espresso">pago pela empresa</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Vale-transporte</td><td class="py-1.5 pr-4 text-espresso">descontado (R$ 210)</td><td class="py-1.5 pr-4 text-espresso">perto de casa</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold"><b>Valor real por mês</b></td><td class="py-1.5 pr-4 text-espresso"><b>R$ 3.290,00</b></td><td class="py-1.5 pr-4 text-espresso"><b>R$ 3.900,00</b></td></tr></tbody></table></div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">A vaga com o salário menor entrega R$ 610 a mais por mês, sem contar o plano de saúde.</p>`,
            },
            {
              heading: "11. CLT, PJ, MEI e informal",
              body: `CLT → tem 13º, férias com 1/3, FGTS com multa de 40%, seguro-desemprego, licenças e INSS recolhido pela empresa. Não tem liberdade de horário nem o bruto mais alto.

PJ → bruto mais alto e mais flexibilidade. Mas: férias sem receber, doença sem receber, demissão sem aviso nem multa. Paga contador, imposto sobre o faturamento e o próprio INSS.

Pacote CLT de R$ 5.000,00 por mês:
5.000 + 416,67 (13º) + 555,56 (férias + 1/3) + 400 (FGTS) = R$ 6.372,22
→ Para empatar, um PJ precisa faturar cerca de R$ 7.000.

MEI é um tipo de PJ (versão simplificada):
• Faturamento máximo: R$ 81.000 por ano (R$ 6.750 por mês)
• Imposto: DAS fixo de R$ 87,05 por mês, que já inclui aposentadoria de um salário mínimo
• Sem contador obrigatório; no máximo um funcionário

Informal → sem contrato, sem nota, sem recolhimento: nenhum desconto hoje, nenhuma aposentadoria amanhã.

⚠️ PJ não é melhor nem pior: é outro contrato, com outra conta.`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Vínculo</th><th class="text-left py-2 pr-4 font-display text-ochre">Recebe na conta</th><th class="text-left py-2 pr-4 font-display text-ochre">Desconto obrigatório</th><th class="text-left py-2 pr-4 font-display text-ochre">Direitos</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">CLT</td><td class="py-1.5 pr-4 text-espresso">R$ 3.191,40</td><td class="py-1.5 pr-4 text-espresso">INSS de R$ 308,60</td><td class="py-1.5 pr-4 text-espresso">13º, férias, FGTS, seguro-desemprego</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">PJ comum</td><td class="py-1.5 pr-4 text-espresso">R$ 3.040,00</td><td class="py-1.5 pr-4 text-espresso">6% de imposto + contador</td><td class="py-1.5 pr-4 text-espresso">só o que estiver no contrato</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">MEI (é um tipo de PJ)</td><td class="py-1.5 pr-4 text-espresso">R$ 3.412,95</td><td class="py-1.5 pr-4 text-espresso">DAS fixo de R$ 87,05</td><td class="py-1.5 pr-4 text-espresso">aposentadoria e auxílio-doença</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Informal</td><td class="py-1.5 pr-4 text-espresso">R$ 3.500,00</td><td class="py-1.5 pr-4 text-espresso">nenhum</td><td class="py-1.5 pr-4 text-espresso">nenhum</td></tr></tbody></table></div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Valores mensais aproximados para um trabalho de R$ 3.500,00. O informal recebe o maior número e é o único sem nenhuma proteção.</p>`,
            },
            {
              heading: "📋 Tabelas e regras para os exercícios",
              body: `Use a tabela do INSS (seção 3), a tabela do IR (seção 5) e as regras abaixo.

3 ideias que ficam:
1. Salário anunciado não é salário recebido.
2. O que não aparece no contracheque (FGTS, 13º, férias, benefícios) também é seu.
3. Contribuir hoje é receber amanhã: o INSS é a parte do salário que volta para você lá na frente.`,
              visual: `<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr class="border-b-2 border-sand"><th class="text-left py-2 pr-4 font-display text-ochre">Regra de 2026</th><th class="text-left py-2 pr-4 font-display text-ochre">Valor</th></tr></thead><tbody><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Isenção de IR</td><td class="py-1.5 pr-4 text-espresso">salário até R$ 5.000,00 por mês</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Faixa de transição do IR</td><td class="py-1.5 pr-4 text-espresso">de R$ 5.000,01 a R$ 7.350,00: redutor = 978,62 − 0,133145 × salário</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Desconto simplificado</td><td class="py-1.5 pr-4 text-espresso">R$ 607,20 por mês</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Dedução por dependente</td><td class="py-1.5 pr-4 text-espresso">R$ 189,59</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Teto do INSS</td><td class="py-1.5 pr-4 text-espresso">R$ 8.475,55 (desconto máximo de R$ 988,09)</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">FGTS</td><td class="py-1.5 pr-4 text-espresso">8% do bruto, pago pela empresa</td></tr><tr class="border-b border-sand/60"><td class="py-1.5 pr-4 text-espresso font-semibold">Vale-transporte</td><td class="py-1.5 pr-4 text-espresso">no máximo 6% do salário base</td></tr></tbody></table></div>
<p style="text-align:center;font-size:0.78rem;color:#5C4630;margin-top:8px;">Use estas regras junto com as tabelas do INSS e do IR nos exercícios abaixo.</p>`,
            },
          ],
          quiz: [
            { q: "Ex. 1 — Um auxiliar administrativo recebe salário bruto de R$ 1.800,00, sem adicionais. Qual é o desconto do INSS?", options: ["R$ 162,00", "R$ 137,68", "R$ 135,00", "R$ 121,57"], correct: 1 },
            { q: "Ex. 1 — Qual é o salário líquido desse auxiliar, sem outros descontos?", options: ["R$ 1.638,00", "R$ 1.665,00", "R$ 1.678,43", "R$ 1.662,32"], correct: 3 },
            { q: "Ex. 2 — Uma vendedora tem salário base de R$ 2.400,00 e recebeu R$ 200,00 de comissão no mês. Qual é o total de proventos?", options: ["R$ 2.600,00", "R$ 2.400,00", "R$ 2.200,00", "R$ 2.800,00"], correct: 0 },
            { q: "Ex. 2 — Qual é o desconto do INSS sobre esse total?", options: ["R$ 234,00", "R$ 191,68", "R$ 209,68", "R$ 195,00"], correct: 2 },
            { q: "Ex. 3a — Para um salário de R$ 3.000,00, calcule o INSS somando faixa por faixa (as três faixas envolvidas).", options: ["R$ 360,00", "R$ 225,00", "R$ 248,60", "R$ 270,00"], correct: 2 },
            { q: "Ex. 3b — Agora calcule o INSS de R$ 3.000,00 usando a alíquota de 12% e a parcela a deduzir de R$ 111,40.", options: ["R$ 248,60", "R$ 471,40", "R$ 360,00", "R$ 111,40"], correct: 0 },
            { q: "Ex. 3c — Os dois resultados bateram? Por que isso sempre acontece?", options: ["Não: o atalho sempre dá um valor maior", "Sim, mas só por coincidência neste salário", "Não: o atalho ignora a primeira faixa", "Sim: a parcela a deduzir é exatamente o que foi cobrado a mais ao aplicar 12% também nas faixas de baixo"], correct: 3 },
            { q: "Ex. 4 — Um trabalhador com salário base de R$ 2.500,00 gasta R$ 190,00 por mês de condução. Quanto a empresa pode descontar de vale-transporte?", options: ["R$ 190,00, o valor total da condução", "R$ 150,00, pois 6% de R$ 2.500,00 é menor que o gasto com condução", "R$ 40,00, a diferença", "R$ 11,40, que é 6% de R$ 190,00"], correct: 1 },
            { q: "Ex. 5a — Quanto é descontado de INSS em um salário de R$ 2.000,00 e em um de R$ 4.000,00?", options: ["R$ 155,68 e R$ 368,60", "R$ 180,00 e R$ 480,00", "R$ 150,00 e R$ 300,00", "R$ 155,68 e R$ 361,51"], correct: 0 },
            { q: "Ex. 5b — Qual é a alíquota efetiva (desconto ÷ salário) de cada um?", options: ["9% e 12%", "7,5% e 7,5%", "≈ 7,78% e ≈ 9,22%", "≈ 7,78% e 12%"], correct: 2 },
            { q: "Ex. 5c — O que esses dois percentuais mostram sobre a progressividade do INSS?", options: ["Todos pagam o mesmo percentual", "Quem ganha mais paga proporcionalmente mais, mas sempre menos que a alíquota da própria faixa", "Quem ganha menos paga proporcionalmente mais", "Quem ganha mais paga 12% sobre todo o salário"], correct: 1 },
            { q: "Ex. 6a — Um salário de R$ 4.500,00 paga imposto de renda em 2026? (use a regra da isenção, não a tabela)", options: ["Sim, 22,5% sobre todo o salário", "Sim, pela faixa de 27,5% da tabela", "Sim, mas só o valor do redutor", "Não: até R$ 5.000,00 por mês há isenção total"], correct: 3 },
            { q: "Ex. 6b — Qual é o INSS desse salário de R$ 4.500,00?", options: ["R$ 630,00", "R$ 428,60", "R$ 337,50", "R$ 431,51"], correct: 3 },
            { q: "Ex. 7a — Um arquiteto recebe R$ 5.600,00 de salário bruto, sem dependentes. Qual é o desconto do INSS?", options: ["R$ 784,00", "R$ 585,51", "R$ 560,60", "R$ 607,20"], correct: 1 },
            { q: "Ex. 7b — Qual é a base de cálculo do IR, usando a maior dedução entre o INSS e o desconto simplificado de R$ 607,20?", options: ["R$ 5.014,49", "R$ 5.600,00", "R$ 4.992,80", "R$ 4.407,29"], correct: 2 },
            { q: "Ex. 7c — Qual é o imposto calculado pela tabela?", options: ["R$ 464,29", "R$ 1.373,02", "R$ 447,89", "R$ 470,25"], correct: 0 },
            { q: "Ex. 7d — Qual é o redutor da faixa de transição e o imposto realmente devido?", options: ["Redutor de R$ 978,62 e imposto zero", "Redutor de R$ 233,01 e imposto devido de R$ 231,28", "Redutor de R$ 745,61 e imposto zero", "Redutor de R$ 233,01 e imposto devido de R$ 697,30"], correct: 1 },
            { q: "Ex. 8a — O salário bruto de um funcionário é de R$ 2.800,00. Quanto a empresa deposita de FGTS por mês?", options: ["R$ 280,00", "R$ 168,00", "R$ 2.576,00", "R$ 224,00"], correct: 3 },
            { q: "Ex. 8b — E em um ano?", options: ["R$ 2.688,00", "R$ 2.912,00", "R$ 3.360,00", "R$ 224,00"], correct: 0 },
            { q: "Ex. 8c — Qual seria o saldo depositado depois de 2 anos?", options: ["R$ 2.688,00", "R$ 5.600,00", "R$ 5.376,00", "R$ 6.720,00"], correct: 2 },
            { q: "Ex. 8d — Se ele fosse demitido sem justa causa nesse momento, qual seria a multa de 40%?", options: ["R$ 1.120,00", "R$ 2.240,00", "R$ 2.150,40", "R$ 7.526,40"], correct: 2 },
            { q: "Ex. 9a — Uma veterinária ganha R$ 3.300,00 por mês. Quanto ela recebe de 13º salário no fim do ano?", options: ["R$ 3.300,00", "R$ 275,00", "R$ 1.650,00", "R$ 4.400,00"], correct: 0 },
            { q: "Ex. 9b — Quanto ela recebe no mês das férias, somando o salário e o terço adicional?", options: ["R$ 3.300,00", "R$ 1.100,00", "R$ 6.600,00", "R$ 4.400,00"], correct: 3 },
            { q: "Ex. 9c — Somando tudo o que entra no ano, a quantos salários mensais isso equivale?", options: ["12 salários", "≈ 13,33 salários (R$ 44.000,00)", "13 salários", "14,33 salários"], correct: 1 },
            { q: "Ex. 10 — A empresa A oferece R$ 3.600,00 e nenhum benefício. A empresa B oferece R$ 3.200,00 + vale-refeição de R$ 800,00 + plano de saúde pago. Qual entrega mais valor por mês?", options: ["B: R$ 4.000,00 contra R$ 3.600,00 (R$ 400 a mais), e ainda com plano de saúde", "A, porque o salário é maior", "As duas valem o mesmo", "B, mas só R$ 100 a mais"], correct: 0 },
            { q: "Ex. 11a — Emprego CLT com salário bruto de R$ 4.000,00. Quanto vale, por mês, o 13º diluído?", options: ["R$ 4.000,00", "R$ 307,69", "R$ 333,33", "R$ 400,00"], correct: 2 },
            { q: "Ex. 11b — Quanto valem, por mês, as férias com o terço adicional, também diluídas?", options: ["R$ 111,11", "R$ 444,44", "R$ 333,33", "R$ 1.333,33"], correct: 1 },
            { q: "Ex. 11c — Quanto a empresa deposita de FGTS por mês?", options: ["R$ 400,00", "R$ 240,00", "R$ 480,00", "R$ 320,00"], correct: 3 },
            { q: "Ex. 11d — Somando tudo, qual é o valor mensal do pacote CLT?", options: ["R$ 4.000,00", "R$ 4.653,33", "R$ 4.777,77", "≈ R$ 5.097,78"], correct: 3 },
            { q: "Ex. 12a (desafio) — Bruna tem uma proposta CLT de R$ 5.000,00. Qual é o valor mensal do pacote CLT (salário + 13º diluído + férias com 1/3 diluídas + FGTS)?", options: ["R$ 5.416,67", "R$ 6.372,22", "R$ 5.400,00", "R$ 5.972,22"], correct: 1 },
            { q: "Ex. 12b — A proposta PJ fatura R$ 6.200,00 por mês. Descontando 6% de imposto e R$ 250,00 de contador, quanto sobra?", options: ["R$ 5.828,00", "R$ 5.950,00", "R$ 5.578,00", "R$ 6.200,00"], correct: 2 },
            { q: "Ex. 12c — Qual das duas propostas vale mais em dinheiro?", options: ["CLT: cerca de R$ 794 a mais por mês", "PJ, porque o faturamento é maior", "As duas são praticamente iguais", "PJ: cerca de R$ 622 a mais por mês"], correct: 0 },
            { q: "Ex. 12d — Duas coisas que a proposta PJ não oferece e que não aparecem nessas contas:", options: ["Salário e faturamento", "Seguro-desemprego e afastamentos remunerados (como licença por doença ou maternidade)", "Contador e imposto sobre o faturamento", "Flexibilidade de horário e bruto mais alto"], correct: 1 },
          ],
        },
      ],
    },
);
