/**
 * BANCO DE DADOS DE PERGUNTAS - AUDITORES DA ENERGIA (TURMA 802)
 * Baseado no cartaz educativo: Mitos e Verdades, Anatomia da Conta de Luz,
 * Bandeiras Tarifárias e Eficiência Energética.
 * Total: 60 questões cuidadosamente revisadas e categorizadas.
 */

const QUIZ_QUESTIONS = [
  // ==========================================
  // CATEGORIA 1: MITOS E VERDADES ELÉTRICAS
  // ==========================================
  {
    id: 1,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Deixar o carregador de celular conectado na tomada, mesmo sem o aparelho plugado, consome muita energia elétrica?",
    options: [
      "Sim, consome tanto quanto carregar o celular.",
      "Não, o consumo de um carregador sem o celular é insignificante na conta total.",
      "Sim, pode dobrar o valor da fatura de luz no final do mês.",
      "Depende apenas da marca do celular, nunca do carregador."
    ],
    correct: 1,
    explanation: "MITO DESVENDADO! O consumo em vazio (sem o celular conectado) de um carregador moderno certificado varia entre 0,1W e 0,5W. Ao longo de um ano inteiro, isso representa poucos centavos de real. Embora seja boa prática desligar por segurança contra surtos de tensão, seu consumo é desprezível na conta total."
  },
  {
    id: 2,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Apagar e acender lâmpadas fluorescentes a cada saída breve de 1 minuto de um cômodo economiza significativamente?",
    options: [
      "Sim, qualquer segundo com a lâmpada apagada gera enorme economia.",
      "Não, e ligar e desligar lâmpadas fluorescentes constantemente reduz sua vida útil.",
      "Sim, porque o reator consome 10 vezes mais energia quando permanece ligado.",
      "Não faz diferença, pois lâmpadas fluorescentes não usam eletricidade para acender."
    ],
    correct: 1,
    explanation: "FATO DO CARTAZ! Lâmpadas fluorescentes usam eletrodos com pó emissor que se desgasta a cada ignição. Ficar acendendo e apagando para saídas de 1 ou 2 minutos desgasta os componentes prematuramente. A economia de fração de segundo não compensa a queima antecipada da lâmpada."
  },
  {
    id: 3,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Aparelhos eletrônicos em modo 'stand-by' (luz vermelha ou visor aceso em espera) consomem eletricidade?",
    options: [
      "Não consomem nada, pois a chave principal está desligada.",
      "Sim, aparelhos em stand-by consomem uma quantidade notável de energia ao longo do mês.",
      "Consomem apenas se houver relâmpagos ou chuva forte na região.",
      "Apenas televisores antigos consomem, nenhum outro aparelho moderno gasta."
    ],
    correct: 1,
    explanation: "VERDADE COMPROVADA! O chamado 'consumo vampiro' ou 'consumo fantasma' de vários aparelhos em stand-by (TVs, decodificadores, micro-ondas, videogames) somados em uma residência pode representar de 8% a 15% do consumo elétrico da casa no mês."
  },
  {
    id: 4,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Abrir e fechar a geladeira várias vezes ou ficar com a porta aberta pensando no que comer não altera a conta de luz?",
    options: [
      "Verdade, pois a temperatura interna não se altera em menos de 10 minutos.",
      "Mito! O ar frio denso escapa e o ar quente entra, fazendo o compressor trabalhar mais tempo para resfriar.",
      "Verdade, porque as geladeiras desligam a refrigeração automaticamente com a porta aberta.",
      "Mito, porém só afeta a conta se a luz interna da geladeira for incandescente."
    ],
    correct: 1,
    explanation: "MITO! O ar frio é mais denso e cai para fora quando a porta é aberta, sendo substituído por ar quente e úmido da cozinha. Isso força o termostato a acionar o compressor elétrico por muito mais tempo, elevando significativamente o consumo."
  },
  {
    id: 5,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Secar tênis, panos ou roupas na grade traseira da geladeira é um hábito inteligente e econômico?",
    options: [
      "Verdade, pois reaproveita um calor que seria desperdiçado sem gastar mais energia.",
      "Mito! Bloqueia a dissipação de calor do condensador, sobrecarrega o compressor e aumenta o consumo.",
      "Verdade, desde que os panos estejam totalmente molhados para resfriar o gás refrigerante.",
      "Verdade, é um procedimento recomendado no manual dos fabricantes modernos."
    ],
    correct: 1,
    explanation: "MITO PERIGOSO! A grade traseira (condensador) precisa trocar calor com o ar ambiente para resfriar o fluido refrigerante. Cobrir a grade com roupas cria isolamento térmico, sobrecarrega o motor, dispara o consumo elétrico e pode queimar o compressor."
  },
  {
    id: 6,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Ligar o ferro de passar roupas todo dia para passar uma única peça gasta mais energia do que juntar roupas da semana toda?",
    options: [
      "Mito, ligar várias vezes consome a mesma quantidade de energia de ligar uma vez.",
      "Verdade, pois o ferro consome muita energia elétrica para atingir a temperatura de trabalho inicial.",
      "Mito, passar poucas roupas gasta menos porque o ferro fica mais leve.",
      "Verdade, mas apenas se o ferro for do tipo a vapor com reservatório de água."
    ],
    correct: 1,
    explanation: "VERDADE! O ferro de passar possui uma resistência de alta potência (1.000W a 2.000W). O momento de maior gasto contínuo é quando ele esquenta até a temperatura desejada. Acumular roupas e passar tudo de uma só vez é muito mais eficiente."
  },
  {
    id: 7,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "No chuveiro elétrico, a posição 'Inverno' consome a mesma energia elétrica que a posição 'Verão'?",
    options: [
      "Sim, a potência do chuveiro é sempre fixa, mudando apenas a vazão da água.",
      "Não, a posição 'Inverno' utiliza uma resistência de maior potência, consumindo cerca de 30% a 40% a mais.",
      "Sim, o consumo do chuveiro depende unicamente da pressão da caixa d'água.",
      "Não, a posição 'Verão' é a que consome mais energia por precisar esfriar a água."
    ],
    correct: 1,
    explanation: "MITO! A chave Inverno/Verão altera o comprimento ativo da resistência interna. Na posição 'Inverno', a resistência elétrica efetiva é menor, o que aumenta a corrente e eleva a potência dissipada (em torno de 30% a 40% a mais do que na posição Verão)."
  },
  {
    id: 8,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Aparelhos térmicos (que esquentam ou esfriam) são geralmente os maiores responsáveis pelo valor da conta de luz?",
    options: [
      "Verdade, aparelhos que transformam energia elétrica em térmica (efeito Joule) costumam ter alta potência.",
      "Mito, aparelhos com luzes coloridas e telas consomem muito mais energia que aquecedores.",
      "Mito, somente motores industriais têm impacto na fatura residencial.",
      "Verdade, mas apenas no caso de ventiladores e televisores."
    ],
    correct: 0,
    explanation: "VERDADE! Pelo Efeito Joule, gerar calor consome grande quantidade de energia. Chuveiros (5.500W-7.500W), ferros de passar (1.500W), secadores de cabelo (2.000W) e fornos elétricos são os campeões de potência."
  },
  {
    id: 9,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Lâmpadas de LED aquecem o ambiente com a mesma intensidade que as antigas lâmpadas incandescentes?",
    options: [
      "Verdade, qualquer fonte de luz emite a mesma quantidade de radiação térmica infravermelha.",
      "Mito! As incandescentes transformavam cerca de 90% da energia em calor; o LED é muito mais eficiente e quase não emite calor frontal.",
      "Mito, porque as lâmpadas de LED não emitem fótons de luz visível.",
      "Verdade, desde que tenham a mesma potência em Watts impressa na caixa."
    ],
    correct: 1,
    explanation: "MITO! As antigas lâmpadas incandescentes funcionavam aquecendo um filamento de tungstênio a quase 3.000°C: mais de 90% da eletricidade virava calor e menos de 10% virava luz. O LED é semicondutor, gerando luz fria com altíssima eficiência."
  },
  {
    id: 10,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Conectar vários aparelhos de alta potência no mesmo benjamim ('T') é seguro e não causa desperdício de energia?",
    options: [
      "Verdade, benjamins são feitos para multiplicar a potência sem limitações físicas.",
      "Mito! Causa sobrecarga, superaquecimento dos contatos com perda de energia em calor e risco gravíssimo de incêndio.",
      "Verdade, desde que o benjamim seja de plástico colorido.",
      "Mito, mas o único problema é que os aparelhos funcionam mais devagar."
    ],
    correct: 1,
    explanation: "MITO PERIGOSO! Benjamins e adaptadores improvisados não suportam correntes elevadas de múltiplos aparelhos. O ponto de contato superaquece, desperdiçando eletricidade em calor indesejado e provocando curto-circuitos e incêndios."
  },
  {
    id: 11,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Deixar o computador ou console de videogame em repouso baixando jogos durante a noite consome zero eletricidade?",
    options: [
      "Verdade, consoles entram em modo nulo e não necessitam de corrente da tomada.",
      "Mito! O processador, rede e placa de circuito permanecem ativos, consumindo energia considerável.",
      "Verdade, porque a tela da TV está desligada.",
      "Mito, mas apenas se a bateria interna estiver viciada."
    ],
    correct: 1,
    explanation: "MITO! O videogame ou PC em download de fundo mantém discos, memória, barramento e chip de rede operando, consumindo entre 30W e 90W constantemente. Ao longo de madrugadas diárias, o consumo soma vários kWh na conta."
  },
  {
    id: 12,
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Chuva ou umidade no ar por si só fazem o chuveiro elétrico consumir o dobro de energia elétrica?",
    options: [
      "Sim, a umidade do ar atrai elétrons adicionais para a resistência do chuveiro.",
      "Não, a potência é física; o que faz a conta subir na chuva é o comportamento humano de tomar banhos mais longos e quentes.",
      "Sim, o vapor d'água atua como resistor negativo aumentando a corrente da rede.",
      "Não, porque nos dias chuvosos as distribuidoras reduzem a voltagem das residências."
    ],
    correct: 1,
    explanation: "MITO! O chuveiro consome exatamente o que sua resistência demanda. A água fria e o clima ameno levam as pessoas a aumentarem a temperatura na chave e ficarem mais tempo debaixo d'água. O vilão é o hábito!"
  },

  // ==========================================
  // CATEGORIA 2: ANATOMIA DA CONTA DE LUZ
  // ==========================================
  {
    id: 13,
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Na fatura de energia exibida no cartaz, o que representa a sigla 'kWh'?",
    options: [
      "Quilograma por Watt de hidrogênio gerado.",
      "Quilowatt-hora, a unidade de medida da energia elétrica consumida no período.",
      "Kilovolts de potência de alta tensão da concessionária.",
      "Constante de Watts calculada pelas hidrelétricas."
    ],
    correct: 1,
    explanation: "CORRETO! O kWh (Quilowatt-hora) é a unidade que mede a energia elétrica faturada. 1 kWh equivale a consumir 1.000 Watts de potência de forma contínua durante 1 hora inteira."
  },
  {
    id: 14,
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Qual é a fórmula matemática correta para calcular o consumo em kWh de qualquer equipamento elétrico?",
    options: [
      "Consumo (kWh) = Potência (W) × Horas de uso por dia × Dias / 1.000",
      "Consumo (kWh) = Voltagem (V) + Amperagem (A) × 30 dias",
      "Consumo (kWh) = Potência (W) ÷ Horas de uso por dia × 100",
      "Consumo (kWh) = Peso do aparelho (kg) × Tarifa da distribuidora"
    ],
    correct: 0,
    explanation: "CORRETO! Para encontrar o consumo em kWh: multiplica-se a Potência do aparelho em Watts (W) pelo número de Horas de uso por dia e pela quantidade de Dias no mês, dividindo o resultado final por 1.000."
  },
  {
    id: 15,
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Se um aquecedor de 1.500 Watts fica ligado 2 horas por dia durante 30 dias no mês, qual é o seu consumo em kWh?",
    options: [
      "30 kWh",
      "90 kWh",
      "150 kWh",
      "3.000 kWh"
    ],
    correct: 1,
    explanation: "CORRETO! Cálculo: (1.500 W × 2 h/dia × 30 dias) ÷ 1.000 = 90.000 ÷ 1.000 = 90 kWh no mês. Em muitas cidades, 90 kWh sozinhos podem custar quase R$ 80 a R$ 90 na fatura!"
  },
  {
    id: 16,
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "O que compõe a 'Tarifa de Energia' que você paga na fatura?",
    options: [
      "Apenas o lucro livre da empresa que imprime a conta de papel.",
      "Os custos de Geração de energia (usinas), Transmissão (linhas) e Distribuição (fiação e postes da cidade).",
      "Somente o valor da água dos rios que passam nas hidrelétricas.",
      "Uma taxa fixa anual que nunca muda de valor."
    ],
    correct: 1,
    explanation: "CORRETO! A tarifa regulada pela ANEEL remunera três elos essenciais: a Geração da eletricidade pelas usinas, o Transporte nas linhas de transmissão interestaduais e a Distribuição local até a sua casa."
  },
  {
    id: 17,
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Quais tributos (impostos) costumam estar discriminados na conta de energia brasileira?",
    options: [
      "Apenas o IPVA e o IPTU do bairro.",
      "ICMS (estadual), PIS e COFINS (federais), além da contribuição de iluminação pública municipal.",
      "Somente imposto sobre grandes fortunas e imposto de importação.",
      "A energia elétrica é 100% isenta de qualquer tributo no Brasil."
    ],
    correct: 1,
    explanation: "CORRETO! Os principais tributos incidentes na fatura são o ICMS (imposto estadual), o PIS e a COFINS (contribuições federais), além da contribuição de iluminação pública municipal (CIP/COSIP)."
  },
  {
    id: 18,
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "O que é a taxa CIP ou COSIP que costuma vir cobrada na fatura de energia?",
    options: [
      "Uma taxa de seguro contra relâmpagos e vendavais na residência.",
      "Contribuição para Custeio da Iluminação Pública das ruas, praças e avenidas do município.",
      "Um pagamento para a compra de pilhas e baterias do consumidor.",
      "A taxa paga exclusivamente para a fabricação dos postes de madeira."
    ],
    correct: 1,
    explanation: "CORRETO! A CIP (ou COSIP) é um tributo municipal arrecadado pela concessionária e repassado à Prefeitura para pagar a energia e a manutenção dos postes de iluminação pública da cidade."
  },
  {
    id: 19,
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Qual é a função do medidor de energia elétrica (popular 'relógio de luz') instalado na entrada dos imóveis?",
    options: [
      "Controlar a velocidade com que a eletricidade entra nos fios.",
      "Registrar cumulativamente o consumo total de eletricidade (em kWh) consumido pelo imóvel ao longo do tempo.",
      "Desligar a energia automaticamente se os moradores ficarem mais de 8 horas dormindo.",
      "Converter energia alternada em energia solar na entrada da casa."
    ],
    correct: 1,
    explanation: "CORRETO! O medidor (seja eletromecânico de disco giratório ou eletrônico digital) registra a quantidade acumulada de quilowatts-hora consumidos por todos os aparelhos do imóvel."
  },
  {
    id: 20,
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Como o leiturista da distribuidora descobre a quantidade de energia que você consumiu no mês?",
    options: [
      "Ele calcula uma média baseada no tamanho do quintal da casa.",
      "Ele subtrai o valor da leitura do mês anterior da leitura atual registrada no medidor.",
      "Ele divide a leitura do medidor pelo número de postes na rua.",
      "Ele mede a temperatura dos cabos que entram na residência."
    ],
    correct: 1,
    explanation: "CORRETO! Como o medidor acumula continuamente: Consumo do Mês = Leitura Atual − Leitura Anterior. Por exemplo, se no mês passado marcava 5.200 e agora marca 5.450, o consumo foi de 250 kWh."
  },
  {
    id: 21,
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Se uma residência consumiu 200 kWh no mês e o custo total do kWh for R$ 0,85 (com impostos), qual será o valor do consumo?",
    options: [
      "R$ 85,00",
      "R$ 170,00",
      "R$ 200,85",
      "R$ 340,00"
    ],
    correct: 1,
    explanation: "CORRETO! Cálculo simples: 200 kWh × R$ 0,85/kWh = R$ 170,00 de consumo básico de eletricidade na fatura."
  },
  {
    id: 22,
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Para que serve o gráfico de 'Histórico de Consumo' que vem impresso na maioria das faturas?",
    options: [
      "Apenas para decorar a conta com barras coloridas.",
      "Permite acompanhar a evolução do consumo nos últimos 12 meses, identificando meses com pico de desperdício.",
      "Indica o volume de água que evaporou das hidrelétricas do país.",
      "Mostra a quantidade de horas em que a residência ficou sem eletricidade."
    ],
    correct: 1,
    explanation: "CORRETO! O histórico de consumo mensal permite ao consumidor comparar sua rotina de gastos com os meses anteriores e as mesmas estações do ano passado, ajudando no papel de 'Auditor da Energia' da casa!"
  },
  {
    id: 23,
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "O que representa a linha 'TUSD' frequentemente detalhada na fatura de luz?",
    options: [
      "Taxa Única de Serviços Diversos cobrada pelo governo.",
      "Tarifa de Uso do Sistema de Distribuição (o custo para a eletricidade viajar pela fiação local até seu padrão).",
      "Total de Usinas Solares Desligadas na semana.",
      "Tributo Universal de Sustentabilidade Doméstica."
    ],
    correct: 1,
    explanation: "CORRETO! A fatura moderna separa TE (Tarifa de Energia: o produto energia em si) e TUSD (Tarifa de Uso do Sistema de Distribuição: o custo de manutenção dos cabos, transformadores e subestações)."
  },

  // ==========================================
  // CATEGORIA 3: BANDEIRAS TARIFÁRIAS & GERAÇÃO
  // ==========================================
  {
    id: 24,
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Segundo o cartaz da Turma 802, o que as Bandeiras Tarifárias indicam?",
    options: [
      "O nível de perigo de choques elétricos no bairro durante temporais.",
      "O custo adicional da energia gerada de acordo com as condições de produção (Verde, Amarela ou Vermelha).",
      "Qual equipe esportiva está liderando a competição de economia de energia.",
      "A quantidade de lixo reciclável coletado pelos medidores de luz."
    ],
    correct: 1,
    explanation: "FATO DO CARTAZ! As bandeiras tarifárias sinalizam mensalmente aos consumidores os custos reais da geração de energia elétrica no Sistema Interligado Nacional (SIN), repassando custos imediatos de usinas térmicas."
  },
  {
    id: 25,
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "O que significa quando a ANEEL divulga que o mês terá Bandeira Verde?",
    options: [
      "Que os reservatórios de hidrelétricas estão em bons níveis e não há acréscimo tarifário na conta.",
      "Que a energia elétrica será 100% gratuita para todas as famílias do país.",
      "Que só é permitido usar aparelhos que tenham cor verde na carcaça.",
      "Que a distribuição de energia será cortada durante as noites para poupar água."
    ],
    correct: 0,
    explanation: "CORRETO! Na Bandeira Verde, as condições hidrológicas são favoráveis: as hidrelétricas geram energia limpa e barata sem necessidade de ligar termelétricas caras. O consumidor paga a tarifa normal, sem taxa extra."
  },
  {
    id: 26,
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Qual situação climática normalmente provoca o acionamento da Bandeira Vermelha?",
    options: [
      "Excesso de chuvas que inundam as usinas eólicas no litoral.",
      "Período de seca severa nos reservatórios hidrelétricos, obrigando o acionamento de termelétricas a combustíveis fósseis.",
      "Queda repentina de neve nas regiões montanhosas brasileiras.",
      "Ventos muito fortes que desligam os painéis solares residenciais."
    ],
    correct: 1,
    explanation: "CORRETO! Com a falta de chuvas, os níveis dos reservatórios caem. Para evitar apagões e garantir o abastecimento, o Operador Nacional do Sistema (ONS) ativa as usinas termelétricas, que queimam gás, óleo ou carvão a custos muito mais altos."
  },
  {
    id: 27,
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Como o valor da Bandeira Tarifária (Amarela ou Vermelha) é cobrado na fatura do consumidor?",
    options: [
      "Como uma multa de trânsito em boleto separado.",
      "Como um valor proporcional a cada 100 kWh consumidos no mês.",
      "Como uma cobrança fixa igual para quem gasta 10 kWh ou 1.000 kWh.",
      "Somente se a pessoa pagar a conta em atraso após o vencimento."
    ],
    correct: 1,
    explanation: "CORRETO! As bandeiras tarifárias incidem proporcionalmente ao consumo: um valor em reais adicionado a cada 100 kWh consumidos. Portanto, quem gasta mais energia na bandeira vermelha paga um acréscimo muito maior!"
  },
  {
    id: 28,
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Qual é a principal fonte de geração de eletricidade da matriz elétrica brasileira?",
    options: [
      "Usinas termonucleares a urânio enriquecido.",
      "Usinas hidrelétricas (energia hidráulica dos rios).",
      "Geradores a queima de lenha e carvão vegetal.",
      "Usinas geotérmicas de calor vulcânico."
    ],
    correct: 1,
    explanation: "CORRETO! Cerca de 60% da eletricidade do Brasil provém de usinas hidrelétricas. Por isso o regime de chuvas tem impacto direto no preço da conta de luz de todos nós!"
  },
  {
    id: 29,
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "O que diferencia a Bandeira Vermelha Patamar 1 da Bandeira Vermelha Patamar 2?",
    options: [
      "O Patamar 1 é para casas e o Patamar 2 é apenas para shopping centers.",
      "O Patamar 2 representa um custo de geração térmica ainda mais elevado, gerando um acréscimo maior por kWh que o Patamar 1.",
      "No Patamar 2 a voltagem da tomada cai para 50 volts.",
      "Não há diferença, são apenas nomes alternativos para a mesma cor."
    ],
    correct: 1,
    explanation: "CORRETO! A Bandeira Vermelha é dividida em Patamares 1 e 2. O Patamar 2 é ativado quando as condições térmicas são críticas e usinas mais custosas entram em operação, gerando uma taxa extra maior por cada 100 kWh."
  },
  {
    id: 30,
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Qual órgão governamental federal é responsável por regular o setor elétrico e definir as bandeiras tarifárias?",
    options: [
      "ANVISA",
      "ANEEL (Agência Nacional de Energia Elétrica)",
      "INMETRO",
      "DETRAN"
    ],
    correct: 1,
    explanation: "CORRETO! A ANEEL (Agência Nacional de Energia Elétrica) é a autarquia federal vinculada ao Ministério de Minas e Energia que regula e fiscaliza a geração, transmissão e comercialização de energia elétrica no Brasil."
  },
  {
    id: 31,
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Ao ser anunciada a Bandeira Vermelha no início do mês, qual a melhor atitude do 'Auditor da Energia'?",
    options: [
      "Ignorar o anúncio e continuar gastando energia como de costume.",
      "Reforçar os hábitos conscientes da família para reduzir o consumo de kWh e amortecer o aumento da conta.",
      "Desligar o relógio de luz geral durante a noite inteira arriscando estragar alimentos da geladeira.",
      "Comprar geradores a gasolina para abastecer as tomadas da sala."
    ],
    correct: 1,
    explanation: "CORRETO! O objetivo pedagógico das bandeiras é o sinal econômico: sabendo que a energia está mais cara, a população deve diminuir o tempo no chuveiro, desligar luzes ociosas e evitar o desperdício para proteger o orçamento familiar."
  },
  {
    id: 32,
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Por que as usinas eólicas e solares no Brasil têm ajudado a aliviar o acionamento de bandeiras térmicas caras?",
    options: [
      "Porque elas operam sem gastar combustíveis caros e complementam os reservatórios hidrelétricos no período seco.",
      "Porque elas conseguem produzir chuva artificial sobre as hidrelétricas.",
      "Porque painéis solares enviam eletricidade direto para as nuvens de tempestade.",
      "Elas não ajudam em nada, pois energia limpa não funciona em redes de cidades."
    ],
    correct: 0,
    explanation: "CORRETO! Fontes renováveis complementares como solar e eólica injetam energia limpa e barata no Sistema Interligado Nacional, poupando água nos reservatórios e diminuindo a necessidade de termelétricas fósseis poluentes e caras."
  },
  {
    id: 33,
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "O que foi a 'Bandeira Escassez Hídrica' criada em 2021 pela Câmara de Regras Excepcionais?",
    options: [
      "Uma bandeira temporária de valor superior à vermelha patamar 2 devido à pior seca nos reservatórios em 91 anos.",
      "Uma taxa aplicada para quem toma mais de 3 banhos no mesmo dia.",
      "Um prêmio em dinheiro entregue aos maiores consumidores de energia do país.",
      "Uma bandeira que exigia que todas as lâmpadas fossem trocadas por velas."
    ],
    correct: 0,
    explanation: "CORRETO! A Bandeira de Escassez Hídrica foi uma tarifa excepcional criada durante a grave crise hídrica de 2021 para cobrir os custos extraordinários de termelétricas emergenciais e importação de energia de países vizinhos."
  },

  // ==========================================
  // CATEGORIA 4: VILÕES E CAMPEÕES DO CONSUMO
  // ==========================================
  {
    id: 34,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Qual destes aparelhos domésticos costuma ser o campeão isolado de consumo de eletricidade na maioria dos lares brasileiros?",
    options: [
      "Roteador Wi-Fi",
      "Chuveiro elétrico",
      "Carregador de celular",
      "Televisão de LED"
    ],
    correct: 1,
    explanation: "CORRETO! O chuveiro elétrico pode responder por 25% a 35% de toda a conta de luz de uma família! Sua potência comum vai de 5.500W a 7.500W, operando como um verdadeiro monstro elétrico."
  },
  {
    id: 35,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Por que o chuveiro elétrico tem uma potência tão alta em comparação com uma televisão ou ventilador?",
    options: [
      "Porque ele precisa aquecer um fluxo contínuo de água fria em frações de segundo pelo Efeito Joule.",
      "Porque o motor do chuveiro gira hélices de alta velocidade para bombear a água.",
      "Porque chuveiros têm baterias químicas internas pesadas.",
      "Porque ele precisa iluminar o interior do banheiro enquanto a água cai."
    ],
    correct: 0,
    explanation: "CORRETO! A água possui calor específico elevado. Para aquecer litros de água gelada que passam rapidamente pelos dutos em segundos, é necessária uma dissipação brutal de calor térmico instantâneo via Efeito Joule."
  },
  {
    id: 36,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Reduzir o tempo de banho de 15 minutos para 5 minutos por pessoa em uma família de 4 integrantes resulta em:",
    options: [
      "Apenas centavos de diferença no fim do ano.",
      "Uma redução de até dois terços (cerca de 67%) na energia consumida pelo chuveiro da casa.",
      "Um aumento do consumo, pois o chuveiro precisa ser ligado mais vezes.",
      "Nenhuma alteração, pois a cobrança do chuveiro é feita em taxa fixa mensal."
    ],
    correct: 1,
    explanation: "CORRETO! O consumo elétrico é diretamente proporcional ao tempo: banhos 3 vezes mais curtos (5 minutos em vez de 15) reduzem o gasto do chuveiro a um terço do original, gerando uma enorme economia financeira e de água!"
  },
  {
    id: 37,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Como o 'Auditor da Energia' pode testar se a borracha de vedação da porta da geladeira está vedando corretamente?",
    options: [
      "Esquentar a borracha com um fósforo para ver se derrete.",
      "Colocar uma folha de papel entre a borracha e o batente: fechar a porta e tentar puxar; se sair fácil, a borracha precisa ser trocada.",
      "Mergulhar a geladeira em água para verificar se surgem bolhas de ar.",
      "Verificar se a borracha atrai ímãs colocados a 2 metros de distância."
    ],
    correct: 1,
    explanation: "CORRETO! O teste da folha de papel é clássico e eficaz! Se a folha de papel deslizar sem resistência ao ser puxada com a porta fechada, a borracha perdeu a vedação magnética, deixando o ar frio escapar continuamente."
  },
  {
    id: 38,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Qual é a principal vantagem energética de um aparelho de ar-condicionado com tecnologia 'Inverter'?",
    options: [
      "Ele funciona sem ser ligado à tomada de eletricidade.",
      "O compressor modula sua velocidade continuamente em vez de ficar ligando e desligando no pico máximo de corrente.",
      "Ele transforma ar frio em energia elétrica que é devolvida para a rede pública.",
      "Ele gasta mais energia para gelar o dobro no mesmo tempo."
    ],
    correct: 1,
    explanation: "CORRETO! Em aparelhos convencionais, o compressor liga em pico máximo de potência e desliga repetidas vezes. O sistema Inverter ajusta a rotação do motor suavemente, mantendo a temperatura estável e economizando até 40% a 60% de energia!"
  },
  {
    id: 39,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Qual é a faixa de temperatura recomendada no ar-condicionado para garantir conforto térmico sem explodir a conta de luz?",
    options: [
      "16°C a 17°C",
      "23°C a 24°C",
      "29°C a 30°C",
      "10°C a 12°C"
    ],
    correct: 1,
    explanation: "CORRETO! Manter o ar-condicionado entre 23°C e 24°C é a recomendação técnica da ANEEL e órgãos de saúde. Cada grau a menos (como colocar em 18°C) pode aumentar o consumo de eletricidade em até 7% a 10%!"
  },
  {
    id: 40,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Por que filtros de ar-condicionado sujos aumentam o consumo de energia elétrica?",
    options: [
      "A poeira consome a eletricidade dos fios por atrito estático.",
      "A poeira bloqueia a passagem do ar, forçando o motor e ventilador a trabalharem muito mais tempo sob esforço.",
      "Filtros sujos invertem a voltagem da tomada de 127V para 220V.",
      "Eles não aumentam o consumo, apenas mudam o cheiro do ambiente."
    ],
    correct: 1,
    explanation: "CORRETO! A sujeira acumulada impede a circulação normal do fluxo de ar pela serpentina. O aparelho demora muito mais tempo para atingir a temperatura desejada no ambiente, mantendo o compressor sobrecarregado."
  },
  {
    id: 41,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Qual é a recomendação para o uso eficiente da máquina de lavar roupas?",
    options: [
      "Lavar uma camiseta por vez em ciclos completos de 2 horas.",
      "Acumular a quantidade de roupas recomendada pelo fabricante e lavar a capacidade máxima de uma só vez.",
      "Usar sempre o nível alto de água mesmo para uma única meia.",
      "Deixar a máquina ligada no ciclo de centrifugação a noite inteira."
    ],
    correct: 1,
    explanation: "CORRETO! A máquina de lavar gasta energia motora e água a cada ciclo completo. Juntar roupas e lavar lotes cheios aproveita o ciclo ao máximo, economizando energia elétrica, água e sabão."
  },
  {
    id: 42,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Ao passar roupas, qual técnica inteligente ajuda a aproveitar o calor residual do ferro elétrico?",
    options: [
      "Mergulhar o ferro quente na água fria para gerar vapor.",
      "Desligar o ferro alguns minutos antes do fim e passar peças leves (como seda ou tecidos finos) apenas com o calor acumulado na base.",
      "Passar as roupas sobre o colchão para esquentar a cama.",
      "Deixar o ferro ligado na temperatura máxima por 1 hora antes de começar."
    ],
    correct: 1,
    explanation: "CORRETO! A base metálica do ferro retém calor por vários minutos após ser desligada da tomada. Esse calor residual é perfeito para desamassar tecidos delicados que não exigem temperaturas extremas."
  },
  {
    id: 43,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Em dias quentes de verão, onde NUNCA se deve instalar a geladeira na cozinha para evitar desperdício de energia?",
    options: [
      "Próxima a fogões, fornos ou em locais onde ela receba incidência direta da luz do sol.",
      "Sobre pisos de cerâmica ou porcelanato liso.",
      "Em cozinhas que possuem janelas abertas.",
      "A menos de 5 metros de uma lâmpada de LED."
    ],
    correct: 0,
    explanation: "CORRETO! Instalar a geladeira ao lado do forno ou sob o sol direto aquece o corpo externo do equipamento. As paredes perdem isolamento térmico mais rápido e o motor trabalhará quase sem pausas para manter o frio interno."
  },
  {
    id: 44,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Guardar alimentos ou panelas ainda fervendo diretamente dentro da geladeira acarreta:",
    options: [
      "Aumento imediato da temperatura interna, forçando o compressor a gastar muita energia e gerando excesso de gelo.",
      "Nenhum efeito, pois a geladeira tem capacidade de congelamento infinito.",
      "Uma economia de energia, porque o vapor quente limpa os dutos de ar.",
      "A quebra imediata do cabo de alimentação da tomada."
    ],
    correct: 0,
    explanation: "CORRETO! O calor intenso do alimento quente eleva a temperatura de todo o ar interno da geladeira e de outros alimentos próximos. O motor ligará em potência máxima para tentar baixar a temperatura, consumindo muito mais kWh."
  },
  {
    id: 45,
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Para esquentar um prato individual de comida, o que geralmente consome MENOS energia elétrica e tempo?",
    options: [
      "Um forno elétrico convencional grande de 2.500W pré-aquecido por 15 minutos.",
      "O forno micro-ondas por 2 a 3 minutos.",
      "Ambos consomem exatamente a mesma energia em qualquer circunstância.",
      "Ligar o chuveiro elétrico e colocar o prato sob o vapor quente."
    ],
    correct: 1,
    explanation: "CORRETO! O micro-ondas atua diretamente nas moléculas de água do alimento, aquecendo de dentro para fora em 2 a 3 minutos. O forno elétrico convencional precisa esquentar todo o ar interno e as paredes de metal, gastando muito mais energia."
  },

  // ==========================================
  // CATEGORIA 5: ILUMINAÇÃO E EFICIÊNCIA
  // ==========================================
  {
    id: 46,
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "Por que a substituição de lâmpadas incandescentes antigas por lâmpadas de LED se tornou uma revolução de economia?",
    options: [
      "Porque as lâmpadas de LED duram até 25 vezes mais e consomem até 80% a 85% menos eletricidade para produzir a mesma luz.",
      "Porque as lâmpadas de LED funcionam com energia solar embutida e não gastam fios.",
      "Porque as incandescentes eram radioativas e ilegais em qualquer lugar do mundo.",
      "Porque o LED faz barulho de campainha quando alguém esquece aceso."
    ],
    correct: 0,
    explanation: "CORRETO! Uma lâmpada de LED de 9W a 10W ilumina o mesmo que uma antiga lâmpada incandescente de 60W a 75W, economizando mais de 80% de energia e durando até 25.000 horas!"
  },
  {
    id: 47,
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "Ao comprar uma lâmpada moderna, qual medida gravada na embalagem indica a QUANTIDADE REAL DE LUZ que ela produz?",
    options: [
      "Os Watts (W).",
      "Os Lúmens (lm).",
      "Os Volts (V).",
      "Os Hertz (Hz)."
    ],
    correct: 1,
    explanation: "CORRETO! Lúmens (lm) medem o fluxo luminoso, ou seja, o brilho real da lâmpada percebido pelo olho humano. Watts (W) medem apenas o consumo elétrico. O ideal é buscar lâmpadas com mais lúmens e menos watts!"
  },
  {
    id: 48,
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "O que significa o conceito de 'Eficiência Luminosa' de uma lâmpada?",
    options: [
      "A quantidade de lúmens entregue para cada Watt de potência elétrica consumido (lm/W).",
      "O peso da embalagem de papelão da lâmpada dividido pelo preço.",
      "A velocidade com que a lâmpada acende após pressionar o interruptor.",
      "A cor do vidro da lâmpada sob a luz da lua."
    ],
    correct: 0,
    explanation: "CORRETO! A eficiência luminosa é expressa em Lúmens por Watt (lm/W). Quanto maior esse número, mais luz a lâmpada gera consumindo o mínimo de energia elétrica da rede."
  },
  {
    id: 49,
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "Por que pintar paredes e tetos de cômodos com cores claras ajuda na eficiência energética da casa?",
    options: [
      "Porque a tinta clara conduz eletricidade pelos rodapés.",
      "Porque superfícies claras refletem melhor a luz solar e das lâmpadas, permitindo usar lâmpadas de menor potência e menos pontos acesos.",
      "Porque tintas escuras esfriam demais os quartos exigindo aquecedores.",
      "Não traz nenhum impacto prático na iluminação."
    ],
    correct: 1,
    explanation: "CORRETO! Paredes e forros brancos ou de tons claros possuem alto coeficiente de reflexão luminosa. A luz natural durante o dia e a luz artificial à noite se espalham com muito mais eficiência pelo cômodo."
  },
  {
    id: 50,
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "Qual é a principal utilidade dos 'sensores de presença' na iluminação de garagens, escadarias e corredores de prédios?",
    options: [
      "Evitar que as lâmpadas fiquem acesas continuamente em locais de passagem esporádica.",
      "Aumentar a potência das lâmpadas em até 300%.",
      "Transformar corrente contínua em corrente trifásica.",
      "Contar o número de passos que cada morador dá no corredor."
    ],
    correct: 0,
    explanation: "CORRETO! Em locais comuns onde as pessoas passam apenas por poucos segundos, os sensores de presença infravermelhos acendem a luz quando detectam movimento e apagam automaticamente após tempo pré-determinado, cortando horas de desperdício."
  },
  {
    id: 51,
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "O que é 'Iluminação Natural Zenital' na arquitetura e como ela contribui para a economia de energia?",
    options: [
      "Lâmpadas especiais instaladas debaixo dos pisos das salas.",
      "Aberturas zenitais, claraboias ou sheds no telhado que captam luz natural do sol durante todo o dia, dispensando lâmpadas artificiais.",
      "Iluminação produzida por fungos bioluminescentes no jardim.",
      "Uso de lanternas a pilha penduradas no teto dos quartos."
    ],
    correct: 1,
    explanation: "CORRETO! A iluminação zenital utiliza a luz solar que incide verticalmente pelo teto por meio de claraboias e tubos solares, iluminando galpões, salas e corredores naturalmente durante o horário diurno sem gastar 1 kWh."
  },
  {
    id: 52,
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "Lâmpadas tubulares fluorescentes antigas muito usadas em escolas e comércios podem ser substituídas vantajosamente por:",
    options: [
      "Lâmpadas tubulares de LED (T8 LED), que dispensam reatores magnéticos que consumiam energia extra.",
      "Lampiões a querosene pendurados nas janelas.",
      "Lâmpadas incandescentes de 100W em série.",
      "Espelhos reflexivos que giram com o vento."
    ],
    correct: 0,
    explanation: "CORRETO! As lâmpadas tubulares de LED substituem diretamente as antigas fluorescentes de 40W por modelos de 18W a 20W, além de eliminarem o reator eletromagnético, que sozinho desperdiçava de 5W a 15W em calor contínuo!"
  },
  {
    id: 53,
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "O que a 'temperatura de cor' de uma lâmpada (medida em Kelvin, ex: 2700K vs 6500K) representa?",
    options: [
      "A temperatura física que a lâmpada atinge na mão quando esquenta.",
      "A tonalidade da luz emitida: tons amarelados/quentes (~2700K) ou tons brancos-azulados/frios (~6500K).",
      "A quantidade de calorias que a lâmpada queima por hora de uso.",
      "O valor da tarifa que será cobrado da concessionária."
    ],
    correct: 1,
    explanation: "CORRETO! A temperatura de cor não é o calor do bulbo! Ela indica a tonalidade visual: luz quente (amarela, relaxante, ~2.700K) recomendada para quartos e salas, e luz fria (branca/azulada, estimulante, ~6.500K) indicada para escritórios, cozinhas e escolas."
  },

  // ==========================================
  // CATEGORIA 6: SELO PROCEL, SEGURANÇA E AUDITORIA
  // ==========================================
  {
    id: 54,
    category: "Selo Procel e Segurança",
    badge: "Selo Procel",
    question: "O que significa o 'Selo Procel de Economia de Energia' presente em eletrodomésticos no Brasil?",
    options: [
      "Que o aparelho é importado de outro país com desconto alfandegário.",
      "Que o produto foi testado em laboratório e apresenta os melhores níveis de eficiência energética dentro de sua categoria (nota 'A').",
      "Que o aparelho só pode ser ligado aos finais de semana e feriados.",
      "Que a fabricante do eletrodoméstico não paga impostos federais."
    ],
    correct: 1,
    explanation: "CORRETO! Criado pelo Programa Nacional de Conservação de Energia Elétrica (Procel), o selo indica ao consumidor quais produtos consomem menos energia dentro de sua categoria, orientando compras inteligentes e econômicas."
  },
  {
    id: 55,
    category: "Selo Procel e Segurança",
    badge: "Selo Procel",
    question: "O que a Etiqueta Nacional de Conservação de Energia (ENCE) do INMETRO exibe na frente dos eletrodomésticos?",
    options: [
      "Uma escala colorida de classificação de 'A' (mais eficiente) até letras menores como 'E' ou 'F', além do consumo médio estimado em kWh/mês.",
      "O número de telefone de todos os técnicos autorizados da cidade.",
      "A lista com os nomes de todos os operários que montaram o produto.",
      "A data limite em que o aparelho deve ser jogado no lixo."
    ],
    correct: 0,
    explanation: "CORRETO! A etiqueta do INMETRO/Procel padroniza a informação com uma escala de letras e cores e informa o consumo mensal estimado em kWh sob condições padrão de uso, permitindo comparar modelos concorrentes antes de comprar."
  },
  {
    id: 56,
    category: "Selo Procel e Segurança",
    badge: "Segurança Elétrica",
    question: "O que acontece em uma residência quando os fios elétricos instalados nas paredes são finos demais para a corrente que passa neles?",
    options: [
      "A energia viaja mais rápido porque o canal é mais estreito.",
      "Os fios esquentam por sobrecarga (Efeito Joule), provocando desperdício invisível de energia na conta e alto risco de curto e incêndio.",
      "A conta de luz fica mais barata porque cabe menos eletricidade no cano.",
      "O relógio de luz gira para trás para compensar a resistência."
    ],
    correct: 1,
    explanation: "CORRETO! Fios subdimensionados geram aquecimento por resistência elétrica elevada. Esse calor é energia elétrica da sua conta sendo jogada fora nas paredes, além de degradar o isolamento de PVC e causar incêndios graves!"
  },
  {
    id: 57,
    category: "Selo Procel e Segurança",
    badge: "Segurança Elétrica",
    question: "Qual é a função do 'fio condutor de proteção' (popularmente chamado de Fio Terra, cor verde ou verde-amarela)?",
    options: [
      "Aumentar a voltagem das tomadas de 110V para 220V.",
      "Desviar com segurança qualquer fuga acidental de corrente elétrica para o solo, evitando choques elétricos perigosos nos usuários.",
      "Conectar o aparelho diretamente com o satélite de internet.",
      "Eliminar a necessidade de disjuntores no quadro elétrico."
    ],
    correct: 1,
    explanation: "CORRETO! Se um fio desencapado encostar na carcaça metálica de uma lavadora ou micro-ondas, o Fio Terra escoa a corrente para a haste enterrada no solo, desarmando o disjuntor e salvando vidas contra choques elétricos fatais."
  },
  {
    id: 58,
    category: "Selo Procel e Segurança",
    badge: "Segurança Elétrica",
    question: "Qual é o papel fundamental do disjuntor termomagnético dentro do quadro de distribuição da residência?",
    options: [
      "Garantir que a energia nunca acabe durante tempestades.",
      "Desarmar e interromper automaticamente a passagem de corrente elétrica caso ocorra uma sobrecarga perigosa ou um curto-circuito.",
      "Medir a quantidade de quilowatts que cada morador individual gasta por dia.",
      "Aumentar a potência dos chuveiros quando a água estiver muito fria."
    ],
    correct: 1,
    explanation: "CORRETO! O disjuntor é o 'guardião' do circuito elétrico: quando a corrente ultrapassa o limite seguro do cabo, ele desarma mecanicamente por efeito térmico ou magnético, impedindo que a fiação queime."
  },
  {
    id: 59,
    category: "Selo Procel e Segurança",
    badge: "Auditoria Escolar",
    question: "O que caracteriza uma 'Auditoria Energética Doméstica' realizada por estudantes como a Turma 802?",
    options: [
      "Comprar ferramentas de engenharia pesada para quebrar as paredes da casa.",
      "Mapear todos os aparelhos da casa, calcular seus consumos, identificar hábitos de desperdício e propor um plano de ação para a família.",
      "Desconectar a casa da fiação da rua e viver sem nenhuma luz.",
      "Entregar multas em dinheiro para os pais quando esquecerem a lâmpada acesa."
    ],
    correct: 1,
    explanation: "FATO DO PROJETO! Os 'Auditores da Energia' aprendem a calcular o consumo dos equipamentos, identificar mitos e verdades, interpretar a conta de luz e engajar a família em hábitos conscientes que geram economia real."
  },
  {
    id: 60,
    category: "Selo Procel e Segurança",
    badge: "Auditoria Escolar",
    question: "Por que pequenas atitudes cotidianas somadas (como desligar o stand-by de réguas, banhos de 5 min e lâmpadas de LED) fazem tanta diferença?",
    options: [
      "Porque o consumo de energia elétrica é cumulativo: pequenos desperdícios multiplicados por 30 dias e por milhões de lares afetam a conta, o clima e o país inteiro.",
      "Não fazem diferença nenhuma, apenas grandes indústrias devem se preocupar com energia.",
      "Porque a concessionária desconta metade da conta de quem usa lâmpada apagada.",
      "Porque o Sol para de brilhar se a sociedade desperdiçar energia demais."
    ],
    correct: 0,
    explanation: "PARABÉNS AUDITOR! A energia elétrica gerada não é ilimitada. Quando cada família da Turma 802 elimina desperdícios, poupamos os rios, evitamos a queima de combustíveis fósseis poluentes, reduzimos as contas e preservamos o futuro do planeta!"
  }
];

// Funções utilitárias para seleção de perguntas
function getQuestionsByMode(mode, category = null) {
  let list = [...QUIZ_QUESTIONS];

  if (category && category !== 'all') {
    list = list.filter(q => q.category === category);
  }

  // Embaralhar aleatoriamente
  const shuffled = list.sort(() => Math.random() - 0.5);

  if (mode === 'maratona50') {
    return shuffled.slice(0, 50);
  } else if (mode === 'completo60') {
    return shuffled;
  } else if (mode === 'rapido15') {
    return shuffled.slice(0, 15);
  } else if (mode === 'mitos') {
    return shuffled.filter(q => q.category === 'Mitos e Verdades');
  } else if (mode === 'conta') {
    return shuffled.filter(q => q.category === 'Anatomia da Conta' || q.category === 'Bandeiras Tarifárias');
  }

  return shuffled;
}

// Export para escopo global no navegador e Node.js
if (typeof window !== 'undefined') {
  window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
  window.getQuestionsByMode = getQuestionsByMode;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUIZ_QUESTIONS, getQuestionsByMode };
}
