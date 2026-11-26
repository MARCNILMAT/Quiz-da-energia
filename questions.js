/**
 * BANCO DE DADOS DE PERGUNTAS - AUDITORES DA ENERGIA (TURMA 802)
 * Atualizado com:
 * 1. Níveis de Dificuldade: Fácil (20), Médio (20) e Difícil (20)
 * 2. Alternância garantida na apresentação (Fácil -> Médio -> Difícil -> ...)
 * 3. Regra anti-viés: A alternativa correta NUNCA é a mais longa do conjunto de opções!
 */

const QUIZ_QUESTIONS = [
  // ==========================================
  // BLOCO 1: MITOS E VERDADES ELÉTRICAS (12 Questões)
  // ==========================================
  {
    id: 1,
    level: "Fácil",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Deixar o carregador de celular conectado na tomada, mesmo sem o aparelho plugado, consome muita energia elétrica?",
    options: [
      "Sim, consome tanta energia quanto recarregar um aparelho celular do zero até o final.",
      "Não, seu consumo em vazio é insignificante na conta de luz.",
      "Sim, pode duplicar a conta de luz residencial no fim do mês por gerar fuga contínua.",
      "Depende exclusivamente do modelo de celular conectado, sem relação com o circuito interno."
    ],
    correct: 1,
    explanation: "MITO DESVENDADO! O consumo em vazio de um carregador certificado varia entre 0,1W e 0,5W, gerando poucos centavos ao ano. O consumo é desprezível no total da fatura residencial."
  },
  {
    id: 2,
    level: "Médio",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Apagar e acender lâmpadas fluorescentes a cada saída breve de 1 minuto de um cômodo economiza significativamente?",
    options: [
      "Sim, desligar em qualquer fração de minuto sempre proporciona economia substancial de energia.",
      "Não, o acionamento repetido reduz a durabilidade da lâmpada.",
      "Sim, pois os reatores magnéticos consomem dez vezes mais energia elétrica em regime contínuo.",
      "Não faz qualquer efeito, pois lâmpadas fluorescentes consomem a mesma eletricidade ligadas ou desligadas."
    ],
    correct: 1,
    explanation: "FATO DO CARTAZ! Lâmpadas fluorescentes sofrem desgaste prematuro de eletrodos ao serem chaveadas com frequência. Para ausências curtas de 1 minuto, desligar desgasta a lâmpada sem gerar economia financeira vantajosa."
  },
  {
    id: 3,
    level: "Fácil",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Aparelhos eletrônicos em modo 'stand-by' (luz vermelha ou visor aceso em espera) consomem eletricidade?",
    options: [
      "Não consomem nada quando a tela principal do aparelho está totalmente apagada.",
      "Sim, aparelhos em espera somam gasto relevante no mês.",
      "Consomem apenas durante a ocorrência de chuvas fortes com descargas atmosféricas.",
      "Apenas televisores de tubo antigos consomem energia em stand-by, nenhum equipamento moderno gasta."
    ],
    correct: 1,
    explanation: "VERDADE COMPROVADA! O 'consumo fantasma' de múltiplos eletrônicos em stand-by pode representar entre 8% e 15% de toda a energia elétrica consumida no mês em uma residência."
  },
  {
    id: 4,
    level: "Fácil",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Abrir e fechar a geladeira com frequência ou ficar com a porta aberta pensando no que comer altera a conta de luz?",
    options: [
      "Não altera em nada, já que a temperatura interna do refrigerador permanece congelada por longos períodos.",
      "Sim, o ar quente entra e força o motor a trabalhar mais.",
      "Não faz diferença, pois os compressores modernos cortam a alimentação no exato instante em que a porta é aberta.",
      "Apenas altera se a lâmpada interna de iluminação for de tecnologia incandescente com potência acima de cem watts."
    ],
    correct: 1,
    explanation: "FATO! O ar frio é denso e escapa rapidamente quando a porta é aberta. O ar quente que entra obriga o compressor a funcionar por muito mais tempo para restaurar a temperatura interna ideal."
  },
  {
    id: 5,
    level: "Médio",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Secar calçados ou peças de roupa na grade traseira da geladeira é um hábito recomendável?",
    options: [
      "Sim, é uma prática recomendada por fabricantes para aproveitar o calor que seria inevitavelmente dispersado.",
      "Não, bloqueia o condensador e eleva muito o gasto de energia.",
      "Sim, acelera o resfriamento interno por diminuir o contato térmico entre os dutos e o ambiente externo.",
      "Não tem impacto no consumo elétrico, desde que as peças penduradas sejam estendidas totalmente secas."
    ],
    correct: 1,
    explanation: "MITO PREJUDICIAL! Cobrir o condensador traseiro impede a troca térmica com o ambiente, sobrecarregando o compressor elétrico, elevando o consumo e podendo queimar o motor."
  },
  {
    id: 6,
    level: "Médio",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Passar uma única peça de roupa por dia no ferro elétrico consome mais energia do que passar um lote acumulado de roupas?",
    options: [
      "Mito, o consumo elétrico independe do número de acionamentos necessários para atingir o aquecimento inicial.",
      "Verdade, pois esquentar o ferro consome muita energia.",
      "Mito, passar poucas peças exige menor tempo total de ferro erguido, diminuindo o esforço físico e o gasto elétrico.",
      "Verdade somente caso o ferro utilizado seja do modelo com caldeira de pressão e vaporizador contínuo acionado."
    ],
    correct: 1,
    explanation: "VERDADE! O ferro de passar possui resistências térmicas de alta potência (1.000W a 2.000W). Esquentar o ferro repetidas vezes consome muito mais do que aquecê-lo uma única vez para passar várias peças."
  },
  {
    id: 7,
    level: "Fácil",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "No chuveiro elétrico, utilizar a chave na posição 'Inverno' consome a mesma quantidade de energia que na posição 'Verão'?",
    options: [
      "Sim, a potência elétrica é permanente e constante, variando unicamente o fluxo mecânico da água nas torneiras.",
      "Não, a posição Inverno consome de 30% a 40% a mais.",
      "Sim, o consumo do chuveiro elétrico residencial é padronizado e independe da posição escolhida no seletor frontal.",
      "A posição Verão é a que demanda maior potência por precisar combater ativamente o calor do ambiente ao redor."
    ],
    correct: 1,
    explanation: "FATO! No modo 'Inverno', a resistência elétrica efetiva é mais curta, elevando a corrente e a potência dissipada por efeito Joule em cerca de 30% a 40% em relação ao modo 'Verão'."
  },
  {
    id: 8,
    level: "Fácil",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Aparelhos térmicos que produzem calor (chuveiro, ferro, aquecedor) costumam ser os maiores consumidores de energia residencial?",
    options: [
      "Verdade, aparelhos de aquecimento têm alta potência.",
      "Mito, aparelhos com painéis iluminados e televisores consomem dez vezes mais do que resistências de aquecimento.",
      "Mito, apenas circuitos de iluminação residencial são responsáveis por elevar substancialmente o valor faturado.",
      "Verdade apenas para aquecedores solares, pois chuveiros elétricos têm baixíssima potência em Watts nominais."
    ],
    correct: 0,
    explanation: "VERDADE! Pelo Efeito Joule, gerar calor consome grande quantidade de energia. Chuveiros (5.500W-7.500W), ferros (1.500W) e fornos elétricos são os campeões de potência numa residência."
  },
  {
    id: 9,
    level: "Médio",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Lâmpadas com tecnologia de LED aquecem o ambiente residencial com a mesma intensidade que lâmpadas incandescentes antigas?",
    options: [
      "Verdade, qualquer corpo emissor de fótons visíveis dispersa exatamente a mesma proporção de calor infravermelho.",
      "Mito, o LED transforma quase toda energia em luz fria.",
      "Verdade, a conversão energética de filamentos aquecidos é idêntica à recombinação em semicondutores eletrônicos.",
      "Mito, contudo o LED apenas reduz a emissão térmica caso instalado em luminárias hermeticamente vedadas ao ar."
    ],
    correct: 1,
    explanation: "MITO! Lâmpadas incandescentes perdiam mais de 90% da energia elétrica sob a forma de calor. O LED é semicondutor eficiente, gerando luz sem aquecer o ambiente ao redor."
  },
  {
    id: 10,
    level: "Difícil",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Ligar vários eletrodomésticos de potência elevada em um único adaptador benjamim ('T') é uma prática segura?",
    options: [
      "Sim, benjamins modernos foram dimensionados para redistribuir cargas elevadas sem qualquer perda por aquecimento térmico.",
      "Não, gera sobrecarga, perda em calor e risco de fogo.",
      "Sim, pois os disjuntores residenciais impedem que qualquer adaptador simples receba correntes elétricas elevadas.",
      "Não acarreta riscos elétricos graves, tendo como único efeito colateral diminuir ligeiramente a velocidade dos aparelhos."
    ],
    correct: 1,
    explanation: "MITO PERIGOSO! A sobrecarga em benjamins eleva a resistência nos contatos metálicos, dissipando energia em calor perigoso (efeito Joule), derretendo plásticos e provocando incêndios."
  },
  {
    id: 11,
    level: "Médio",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "Deixar o computador ou console em modo de suspensão durante a madrugada não gasta eletricidade?",
    options: [
      "Verdade, o chaveamento de repouso desconecta inteiramente os barramentos de alimentação da rede elétrica da casa.",
      "Mito, componentes internos seguem ativos em consumo constante.",
      "Verdade, visto que a tela do monitor desligada anula qualquer passagem de corrente pelos circuitos de processamento.",
      "Mito exclusivamente quando há fones de ouvido com iluminação estroboscópica conectados às portas periféricas frontais."
    ],
    correct: 1,
    explanation: "MITO! Em suspensão ou repouso baixando atualizações, processador, memória, circuitos de rede e fontes continuam consumindo continuamente entre 15W e 60W."
  },
  {
    id: 12,
    level: "Fácil",
    category: "Mitos e Verdades",
    badge: "Mito vs Verdade",
    question: "O clima chuvoso ou úmido faz o chuveiro elétrico consumir o dobro de energia por si só?",
    options: [
      "Sim, o ar úmido transfere elétrons adicionais pelo duto de escoamento, sobrecarregando a fiação interna.",
      "Não, o que encarece a conta é demorar mais no banho quente.",
      "Sim, pois as gotículas de chuva provocam variações na tensão nominal da rede fornecida pela concessionária.",
      "Não, uma vez que a água da chuva neutraliza a resistência térmica do chuveiro, diminuindo o consumo em Watts."
    ],
    correct: 1,
    explanation: "MITO! O chuveiro opera conforme sua resistência e tempo de uso. Nos dias frios ou chuvosos, as pessoas demoram mais no banho e usam a temperatura máxima: o hábito é o vilão da conta!"
  },

  // ==========================================
  // BLOCO 2: ANATOMIA DA CONTA DE LUZ (11 Questões)
  // ==========================================
  {
    id: 13,
    level: "Fácil",
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Na fatura de energia elétrica residencial, o que representa a unidade 'kWh'?",
    options: [
      "Quilograma por Watt de hidrogênio gerado nos reservatórios de usinas hidrelétricas nacionais.",
      "Quilowatt-hora, medida da energia consumida no mês.",
      "Quilovolts nominais de potência em alta tensão conduzidos pelas linhas de transmissão regionais.",
      "Coeficiente de vazão hidráulica das turbinas geradoras monitoradas pela Agência Nacional de Energia."
    ],
    correct: 1,
    explanation: "CORRETO! O kWh (Quilowatt-hora) é a unidade de medição do consumo de energia. 1 kWh equivale ao uso contínuo de 1.000 Watts de potência durante 1 hora."
  },
  {
    id: 14,
    level: "Médio",
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Qual é a equação correta para encontrar o consumo em kWh de um aparelho doméstico?",
    options: [
      "Consumo (kWh) = Voltagem (V) multiplicado pela corrente nominal (A) dividido pelo número total de tomadas instaladas.",
      "Consumo (kWh) = (Watts × Horas/dia × Dias) ÷ 1.000.",
      "Consumo (kWh) = Potência em Watts somada à frequência em Hertz multiplicada pelos dias corridos do calendário civil.",
      "Consumo (kWh) = Área total do cômodo em metros quadrados multiplicada pelo valor unitário da tarifa homologada pela agência."
    ],
    correct: 1,
    explanation: "CORRETO! Multiplica-se a Potência (Watts) pelas Horas de uso diário e pelos Dias no mês, dividindo por 1.000 para converter Watts-hora em Quilowatts-hora (kWh)."
  },
  {
    id: 15,
    level: "Difícil",
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Se um aparelho de 1.000 Watts for utilizado durante 2 horas por dia ao longo de 30 dias, quanto ele consumirá?",
    options: [
      "O consumo mensal desse equipamento corresponderá precisamente a vinte quilowatts-hora faturados.",
      "Consumirá exatamente 60 kWh no período de 30 dias.",
      "Apresentará consumo acumulado de cento e vinte quilowatts-hora ao término do ciclo mensal de faturamento.",
      "Demandará três mil quilowatts-hora, gerando sobretaxa imediata nos parâmetros de leitura da distribuidora."
    ],
    correct: 1,
    explanation: "CORRETO! Cálculo: (1.000 W × 2 h × 30 dias) ÷ 1.000 = 60.000 ÷ 1.000 = 60 kWh consumidos no mês."
  },
  {
    id: 16,
    level: "Difícil",
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Qual a diferença entre a Tarifa de Energia (TE) e a Tarifa de Uso do Sistema de Distribuição (TUSD)?",
    options: [
      "A TE é calculada sobre a iluminação externa pública e a TUSD remunera os seguros patrimoniais contratados.",
      "A TE remunera a geração; a TUSD, o transporte e postes.",
      "A TE incide apenas para indústrias de transformação, enquanto a TUSD é exclusiva de residências unifamiliares.",
      "Ambas expressam exatamente a mesma taxa administrativa municipal, alternando apenas a nomenclatura contábil estadual."
    ],
    correct: 1,
    explanation: "CORRETO! A TE (Tarifa de Energia) remunera a energia elétrica gerada nas usinas. A TUSD (Uso da Distribuição) cobre os custos de infraestrutura de cabos, subestações e manutenção da rede."
  },
  {
    id: 17,
    level: "Médio",
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Quais tributos aparecem discriminados na conta de energia elétrica no Brasil?",
    options: [
      "Exclusivamente o Imposto Predial Territorial Urbano (IPTU) e a taxa de coleta de resíduos sólidos municipais.",
      "ICMS (estadual), PIS e COFINS (federais) e taxa municipal.",
      "Apenas tributos alfandegários sobre a importação de gás liquefeito e óleos lubrificantes industriais.",
      "A energia elétrica é imune por determinação constitucional a qualquer modalidade de tributo ou encargo no território nacional."
    ],
    correct: 1,
    explanation: "CORRETO! A fatura inclui tributos estaduais (ICMS), federais (PIS e COFINS) e a contribuição de iluminação pública municipal (CIP/COSIP)."
  },
  {
    id: 18,
    level: "Fácil",
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "O que é a taxa CIP ou COSIP arrecadada na fatura de luz pelas distribuidoras?",
    options: [
      "Tarifa destinada a financiar a instalação de novos cabos telefônicos subterrâneos nas capitais estaduais.",
      "Contribuição para manter a iluminação pública das vias.",
      "Taxa de seguro compulsório contra quedas acidentais de raios sobre edificações residenciais urbanas.",
      "Encargo emergencial para indenizar distribuidoras que sofrem perdas técnicas na fiação de áreas periféricas."
    ],
    correct: 1,
    explanation: "CORRETO! A CIP/COSIP é uma contribuição municipal destinada a custear o consumo de eletricidade e a manutenção das lâmpadas e postes das ruas, avenidas e praças."
  },
  {
    id: 19,
    level: "Fácil",
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Qual é o papel do medidor de energia ('relógio de luz') instalado no padrão de entrada da casa?",
    options: [
      "Regular a velocidade com que a corrente alternada flui no circuito para evitar danos nos eletrodomésticos.",
      "Registrar o consumo acumulado de eletricidade em kWh.",
      "Interromper o fornecimento caso detecte moradores ausentes durante períodos prolongados do dia.",
      "Armazenar a eletricidade excedente da rede durante a noite para injetar na fiação interna durante a manhã."
    ],
    correct: 1,
    explanation: "CORRETO! O medidor registra continuamente a passagem de energia consumida pela instalação residencial, marcando a contagem progressiva em kWh."
  },
  {
    id: 20,
    level: "Médio",
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Como o leiturista da concessionária apura o consumo em kWh a ser faturado no mês?",
    options: [
      "Estima o volume proporcional considerando a área construída do imóvel e a quantidade de cômodos declarados.",
      "Subtrai a leitura anterior da leitura atual do medidor.",
      "Divide a leitura atual do medidor pelo total de lâmpadas existentes nas vias públicas adjacentes ao imóvel.",
      "Aplica uma média estatística fixa que não leva em consideração os dígitos numéricos exibidos no mostrador."
    ],
    correct: 1,
    explanation: "CORRETO! Como o medidor acumula valores: Consumo do mês = Leitura Atual − Leitura Anterior. A diferença direta aponta a quantidade exata de kWh consumidos."
  },
  {
    id: 21,
    level: "Difícil",
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Se uma casa consumiu 200 kWh no mês com tarifa de R$ 0,80 por kWh (com tributos), qual o valor do consumo?",
    options: [
      "O montante faturado equivalerá a oitenta reais sem os acréscimos das contribuições associadas da prefeitura.",
      "O valor do consumo será de R$ 160,00.",
      "A fatura registrará oitenta e cinco reais decorrentes da multiplicação direta dos parâmetros fornecidos.",
      "O cálculo final resultará em duzentos e oitenta reais em virtude da incidência tarifária mínima homologada."
    ],
    correct: 1,
    explanation: "CORRETO! 200 kWh × R$ 0,80/kWh = R$ 160,00. É o cálculo básico de consumo da fatura de luz!"
  },
  {
    id: 22,
    level: "Fácil",
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "Para que serve a seção de 'Histórico de Consumo' presente nas faturas de energia?",
    options: [
      "Apresentar uma compilação meramente ilustrativa sem relação com as medições precedentes registradas no imóvel.",
      "Acompanhar o consumo dos últimos 12 meses e detectar gastos.",
      "Informar o volume total de chuva registrado nos principais reservatórios hidroelétricos da bacia regional.",
      "Listar nominalmente os aparelhos eletrônicos que apresentaram defeitos de isolamento nas medições quinzenais."
    ],
    correct: 1,
    explanation: "CORRETO! O gráfico de histórico dos últimos 12 meses permite comparar seu gasto com meses anteriores e monitorar se as metas do 'Auditor da Energia' estão gerando economia real."
  },
  {
    id: 23,
    level: "Difícil",
    category: "Anatomia da Conta",
    badge: "Conta de Luz",
    question: "O que representa o chamado 'Custo de Disponibilidade' presente na conta de luz de unidades consumidoras?",
    options: [
      "Uma cobrança indenizatória referente à substituição periódica de transformadores de alta tensão em postes vizinhos.",
      "Valor mínimo cobrado pela distribuidora ligada à rede.",
      "Uma taxa aplicada para remunerar o atendimento presencial prestado nos postos da agência reguladora regional.",
      "Encargo extraordinário incidindo exclusivamente em imóveis residenciais equipados com sistemas solares fotovoltaicos."
    ],
    correct: 1,
    explanation: "CORRETO! O custo de disponibilidade é a taxa mínima que remunera a distribuidora por manter a rede elétrica à disposição (geralmente equivalente a 30 kWh para monofásico, 50 kWh bifásico e 100 kWh trifásico)."
  },

  // ==========================================
  // BLOCO 3: BANDEIRAS TARIFÁRIAS & GERAÇÃO (10 Questões)
  // ==========================================
  {
    id: 24,
    level: "Fácil",
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Segundo o cartaz educativo da Turma 802, o que as Bandeiras Tarifárias indicam aos consumidores?",
    options: [
      "O índice meteorológico indicando o risco de quedas de galhos sobre a rede aérea durante temporais de vento.",
      "O custo adicional da geração conforme as condições de produção.",
      "A classificação de sustentabilidade concedida às distribuidoras que utilizam medidores com visor de cristal líquido.",
      "O total de água descarregada pelas comportas dos vertedouros para evitar inundações nas cidades ribeirinhas."
    ],
    correct: 1,
    explanation: "FATO DO CARTAZ! As bandeiras tarifárias sinalizam aos consumidores os custos reais da geração de energia mês a mês (Verde, Amarela ou Vermelha)."
  },
  {
    id: 25,
    level: "Fácil",
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "O que significa quando a fatura de luz é emitida sob a Bandeira Verde?",
    options: [
      "Condições favoráveis de geração hidrelétrica, sem taxa extra.",
      "Que o consumidor terá desconto integral de cem por cento sobre toda a energia consumida no mês vigente.",
      "Que a distribuidora obriga os moradores a utilizarem apenas equipamentos elétricos com acabamento verde-escuro.",
      "Indica que o fornecimento de eletricidade será racionado nas horas de pico matutino para poupar reservatórios."
    ],
    correct: 0,
    explanation: "CORRETO! Na Bandeira Verde, os reservatórios hidrelétricos estão cheios e a geração de energia renovável opera em condições normais, sem cobrança de custos extras."
  },
  {
    id: 26,
    level: "Fácil",
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "O que sinaliza o acionamento da Bandeira Amarela na conta de luz?",
    options: [
      "Perigo iminente de colapso estrutural nas torres de sustentação das linhas de transmissão interestaduais.",
      "Condições de geração menos favoráveis com pequeno acréscimo.",
      "Obrigatoriedade legal de substituição de todos os disjuntores da residência no prazo de até trinta dias corridos.",
      "Isenção de tributos estaduais sobre contas residenciais cujo consumo acumulado permaneça abaixo de cinquenta quilowatts."
    ],
    correct: 1,
    explanation: "CORRETO! A Bandeira Amarela indica que as condições de geração estão menos favoráveis, exigindo o início da ativação de termelétricas complementares, gerando um pequeno acréscimo tarifário."
  },
  {
    id: 27,
    level: "Médio",
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Qual motivo principal leva a ANEEL a acionar a Bandeira Vermelha no país?",
    options: [
      "Excesso repentino de chuvas torrenciais que transbordam as barragens de contenção hidroelétrica nas bacias do sul.",
      "Seca nos reservatórios e acionamento de termelétricas mais caras.",
      "Redução no valor do barril de petróleo importado que desestimula investimentos em energias renováveis e limpas.",
      "Aumento indiscriminado nas exportações de energia elétrica excedente para os países vizinhos do Mercosul."
    ],
    correct: 1,
    explanation: "CORRETO! A escassez de chuva esvazia os reservatórios hidrelétricos. Para evitar apagões, o ONS aciona termelétricas fósseis (gás, carvão e óleo), cuja geração custa muito mais caro."
  },
  {
    id: 28,
    level: "Fácil",
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Qual fonte energética responde pela maior parte da eletricidade produzida no Brasil?",
    options: [
      "Reatores termonucleares utilizando varetas de urânio enriquecido importadas.",
      "Usinas hidrelétricas instaladas no leito dos rios.",
      "Centrais eólicas marinhas implantadas nas plataformas litorâneas profundas.",
      "Plantas termoelétricas movidas à combustão de biomassa de cana-de-açúcar e carvão."
    ],
    correct: 1,
    explanation: "CORRETO! As usinas hidrelétricas são responsáveis por cerca de 60% da matriz elétrica nacional. Por isso, secas severas afetam diretamente o valor da conta de luz."
  },
  {
    id: 29,
    level: "Difícil",
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Qual é a diferença entre a Bandeira Vermelha Patamar 1 e o Patamar 2?",
    options: [
      "O Patamar 1 é restrito a estabelecimentos comerciais e o Patamar 2 abrange consumidores rurais e industriais.",
      "O Patamar 2 cobra taxa extra maior por acionar termelétricas caras.",
      "No Patamar 2 as distribuidoras reduzem a frequência da rede alternada para economizar o giro dos transformadores.",
      "Não existe diferenciação financeira entre os patamares, tratando-se apenas de subdivisão contábil de controle interno."
    ],
    correct: 1,
    explanation: "CORRETO! O Patamar 2 sinaliza condições operacionais ainda mais críticas: termelétricas de combustível fóssil mais caras entram em cena, gerando um acréscimo mais alto a cada 100 kWh."
  },
  {
    id: 30,
    level: "Médio",
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Qual autarquia federal regulamenta o setor elétrico brasileiro e estabelece os valores das bandeiras tarifárias?",
    options: [
      "Instituto Nacional de Metrologia, Qualidade e Tecnologia (INMETRO).",
      "ANEEL (Agência Nacional de Energia Elétrica).",
      "Agência Nacional de Vigilância Sanitária ligada ao Ministério da Saúde.",
      "Companhia Nacional de Abastecimento vinculada ao Ministério do Desenvolvimento."
    ],
    correct: 1,
    explanation: "CORRETO! A ANEEL (Agência Nacional de Energia Elétrica) é o órgão regulador federal que define as tarifas, fiscaliza as distribuidoras e divulga as bandeiras tarifárias mensais."
  },
  {
    id: 31,
    level: "Fácil",
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Ao ser anunciada a Bandeira Vermelha, qual atitude o 'Auditor da Energia' deve priorizar em casa?",
    options: [
      "Desconectar o quadro geral de disjuntores durante todas as noites para zerar a fatura, ignorando a refrigeração.",
      "Reforçar hábitos econômicos para reduzir o consumo de kWh.",
      "Ignorar o anúncio, considerando que as bandeiras tarifárias incidem unicamente sobre grandes indústrias de transformação.",
      "Substituir imediatamente a fiação das paredes por condutores flexíveis de maior calibre sem avaliar hábitos de uso."
    ],
    correct: 1,
    explanation: "CORRETO! As bandeiras dão um sinal econômico imediato: ao economizar kWh na bandeira vermelha, você reduz tanto o consumo base quanto o acréscimo proporcional da taxa extra."
  },
  {
    id: 32,
    level: "Difícil",
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "Como a geração de energia solar fotovoltaica e eólica auxilia a aliviar as bandeiras tarifárias no Brasil?",
    options: [
      "Gera energia renovável e evita acionar térmicas caras e poluentes.",
      "Induz a condensação de vapor nas nuvens sobre os leitos das hidrelétricas por meio de ondas de alta frequência.",
      "Aumenta a resistência dos cabos de transmissão, impedindo que a energia térmica chegue às residências.",
      "As energias renováveis não produzem impacto econômico na modicidade tarifária dos consumidores residenciais."
    ],
    correct: 0,
    explanation: "CORRETO! A energia eólica e solar injeta eletricidade limpa e de baixo custo no sistema interligado, poupando água nos reservatórios e evitando ligar termelétricas fósseis caras."
  },
  {
    id: 33,
    level: "Difícil",
    category: "Bandeiras Tarifárias",
    badge: "Bandeiras Tarifárias",
    question: "O que caracterizou a criação da 'Bandeira de Escassez Hídrica' em 2021 pela Câmara de Regras Excepcionais?",
    options: [
      "Um prêmio em dinheiro entregue pelo Ministério de Minas e Energia aos maiores poupadores residenciais cadastrados.",
      "Tarifa emergencial superior à vermelha na pior seca em 91 anos.",
      "Proibição do uso de chuveiros elétricos e aparelhos de ar-condicionado durante os meses de estiagem outonal.",
      "Cobrança destinada exclusivamente a financiar perfurações de poços artesianos nas dependências das concessionárias."
    ],
    correct: 1,
    explanation: "CORRETO! Durante a crise hídrica severa de 2021, foi criada a Bandeira de Escassez Hídrica (tarifa emergencial com custo superior à vermelha 2) para custear térmicas emergenciais e importação de energia."
  },

  // ==========================================
  // BLOCO 4: VILÕES E CAMPEÕES DO CONSUMO DOMÉSTICO (12 Questões)
  // ==========================================
  {
    id: 34,
    level: "Fácil",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Em uma residência padrão brasileira, qual destes aparelhos geralmente lidera o consumo elétrico mensal?",
    options: [
      "Roteador de internet Wi-Fi de banda dupla mantido conectado ininterruptamente.",
      "O chuveiro elétrico na hora do banho.",
      "O televisor de tela plana LED instalado na sala com uso médio diário de quatro horas.",
      "O carregador inteligente de bateria automotiva de baixa potência acionado ocasionalmente."
    ],
    correct: 1,
    explanation: "CORRETO! O chuveiro elétrico pode representar de 25% a 35% de toda a conta de luz de uma família! Sua potência comum vai de 5.500W a 7.500W."
  },
  {
    id: 35,
    level: "Difícil",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Por que a potência do chuveiro elétrico é muito maior que a de televisores e geladeiras?",
    options: [
      "Porque o motor do chuveiro aciona compressores pesados de pistão para elevar a pressão nos canos de saída.",
      "Precisa esquentar um fluxo contínuo de água gelada em segundos.",
      "Porque os chuveiros elétricos possuem acumuladores de íons de lítio que necessitam de recargas contínuas.",
      "Devido à perda magnética provocada pelo atrito da água pressurizada ao cruzar os orifícios do espalhador."
    ],
    correct: 1,
    explanation: "CORRETO! A água tem calor específico elevado. Para aquecer litros de água gelada que passam rapidamente pelos dutos em segundos, é necessária uma dissipação enorme de calor (efeito Joule)."
  },
  {
    id: 36,
    level: "Fácil",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Reduzir o tempo no chuveiro elétrico de 15 minutos para 5 minutos por banho resulta em:",
    options: [
      "Variação imperceptível que não compensa a mudança na rotina dos moradores da casa.",
      "Economia de cerca de dois terços no gasto com chuveiro.",
      "Aumento na fatura, uma vez que chuveiros consomem mais energia na etapa de chaveamento inicial da água.",
      "Nenhuma mudança financeira, já que o faturamento de chuveiros é cobrado em alíquota fixa desvinculada do tempo."
    ],
    correct: 1,
    explanation: "CORRETO! A energia gasta é proporcional ao tempo: um banho de 5 minutos consome exatamente um terço do que consumiria em 15 minutos, poupando energia elétrica e água potável!"
  },
  {
    id: 37,
    level: "Fácil",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Como o 'Auditor da Energia' pode testar se a borracha da porta da geladeira está vedando corretamente?",
    options: [
      "Utilizar um termômetro culinário encostado na parte externa da borracha durante o ciclo de degelo automático.",
      "Puxar uma folha presa na porta: se sair fácil, há folga.",
      "Mergulhar o refrigerador desligado em uma cuba d'água para verificar o desprendimento de bolhas de ar.",
      "Aplicar um ímã pesado na carcaça plástica para medir a força de atração eletrostática residual da borracha."
    ],
    correct: 1,
    explanation: "CORRETO! O teste da folha de papel é infalível: coloque uma folha na porta fechada; se ela deslizar sem resistência ao ser puxada, a vedação está gasta, deixando o ar frio escapar continuamente."
  },
  {
    id: 38,
    level: "Difícil",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Qual a grande vantagem de economia de energia de um ar-condicionado com compressor 'Inverter'?",
    options: [
      "O equipamento gera sua própria energia elétrica a partir do fluxo aerodinâmico da ventilação forçada interna.",
      "O compressor modula a rotação sem picos repetidos de liga/desliga.",
      "Utiliza gás refrigerante ativado por reações endotérmicas que não demandam consumo de corrente alternada.",
      "Elimina a necessidade de condensadora externa, dispensando qualquer alimentação conectada ao quadro elétrico."
    ],
    correct: 1,
    explanation: "CORRETO! Ao contrário dos aparelhos tradicionais que ligam e desligam no pico máximo, a tecnologia Inverter ajusta a rotação suavemente, economizando de 40% a 60% de energia."
  },
  {
    id: 39,
    level: "Fácil",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Qual faixa de temperatura no ar-condicionado equilibra conforto térmico e consumo consciente de energia?",
    options: [
      "Dezoito graus Celsius para garantir resfriamento rápido dos móveis e paredes do ambiente ocupado.",
      "Entre 23°C e 24°C, conforme indicado por técnicos e pela ANEEL.",
      "Dezesseis graus Celsius durante todo o tempo de funcionamento contínuo do compressor residencial.",
      "Trinta graus Celsius, pois climatizadores consomem a mesma eletricidade independente da regulagem do termostato."
    ],
    correct: 1,
    explanation: "CORRETO! A faixa de 23°C a 24°C é a recomendada pela ANEEL e Anvisa. Cada grau mais frio (como baixar para 18°C) eleva o consumo de energia em até 7% a 10%!"
  },
  {
    id: 40,
    level: "Médio",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Por que os filtros de ar-condicionado sujos aumentam o consumo de energia elétrica?",
    options: [
      "A poeira acumulada absorve os elétrons que circulam na bobina do ventilador por condução estática.",
      "A sujeira obstrui o fluxo de ar e força o motor a trabalhar mais.",
      "A sujeira altera a frequência da corrente alternada de sessenta Hertz para trinta Hertz na condensadora.",
      "Eles não impactam no consumo elétrico, alterando somente a retenção de umidade relativa no ambiente interno."
    ],
    correct: 1,
    explanation: "CORRETO! Filtros cheios de pó obstruem a passagem do ar. O aparelho demora muito mais tempo para refrigerar o cômodo, forçando o compressor a trabalhar sob sobrecarga contínua."
  },
  {
    id: 41,
    level: "Fácil",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Qual a melhor prática para usar a máquina de lavar roupas com eficiência energética e hídrica?",
    options: [
      "Lavar duas ou três peças por ciclo diário para não sobrecarregar as correias de transmissão do cesto.",
      "Acumular roupas e usar a capacidade máxima indicada no manual.",
      "Selecionar permanentemente o nível máximo de água mesmo ao lavar uma única camisa esportiva leve.",
      "Deixar o ciclo de molho ativado por três dias seguidos antes de ligar a etapa de lavagem mecânica."
    ],
    correct: 1,
    explanation: "CORRETO! A máquina gasta energia e água a cada ciclo completo. Juntar roupas e lavar a carga máxima indicada pelo fabricante otimiza cada kWh gasto e poupa água."
  },
  {
    id: 42,
    level: "Médio",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Ao passar roupas com o ferro elétrico, como aproveitar o calor residual de forma inteligente?",
    options: [
      "Mergulhar a ponta do ferro aquecido em recipientes plásticos com água fria para reter calor em vapor quente.",
      "Desligar antes do fim e passar peças leves com a base quente.",
      "Manter o ferro conectado na tomada na graduação máxima de calor enquanto dobra as peças já passadas na mesa.",
      "Posicionar a base metálica quente encostada na fiação de alimentação para elevar a temperatura dos condutores."
    ],
    correct: 1,
    explanation: "CORRETO! Desligar o ferro 5 a 10 minutos antes de terminar permite desamassar tecidos delicados (como seda e sintéticos) usando apenas o calor acumulado na base metálica."
  },
  {
    id: 43,
    level: "Médio",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Onde NÃO se deve posicionar a geladeira na cozinha para evitar desperdício de energia elétrica?",
    options: [
      "Em cômodos equipados com piso frio ou porcelanato polido que facilitam o escoamento de calor das sapatas.",
      "Ao lado do fogão, forno ou sob a luz direta do sol.",
      "Em áreas que contem com janelas voltadas para o poente com ventilação natural constante durante a tarde.",
      "A uma distância de três metros de qualquer ponto de tomada monofásica com aterramento funcional."
    ],
    correct: 1,
    explanation: "CORRETO! Colocar o refrigerador perto do fogão ou exposto ao sol direto aquece sua carcaça externa. O isolamento perde eficiência e o compressor opera por horas extras desnecessárias."
  },
  {
    id: 44,
    level: "Médio",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Colocar panelas ou recipientes com comida fervendo direto dentro da geladeira provoca:",
    options: [
      "Aumento imediato na eficiência do sistema por descongelar os canos de expansão do evaporador traseiro.",
      "Superaquecimento do ar interno e esforço extra do compressor.",
      "Diminuição na fatura mensal decorrente da dissipação instantânea do calor residual nos compartimentos inferiores.",
      "Queima automática do fusível de segurança da tomada sem influenciar no consumo de quilowatts-hora faturados."
    ],
    correct: 1,
    explanation: "CORRETO! O calor intenso do alimento eleva a temperatura de todo o compartimento da geladeira, forçando o motor a trabalhar na potência máxima para restabelecer o frio interno."
  },
  {
    id: 45,
    level: "Médio",
    category: "Eletrodomésticos",
    badge: "Vilões do Consumo",
    question: "Para aquecer uma porção individual de comida, qual equipamento costuma ser mais rápido e econômico?",
    options: [
      "Um forno elétrico de alta potência de 2.500 Watts pré-aquecido durante quinze minutos ininterruptos.",
      "O forno micro-ondas por 2 a 3 minutos.",
      "Ambos consomem exatamente a mesma energia elétrica em qualquer circunstância operacional de aquecimento.",
      "Ligar o chuveiro elétrico no modo inverno e apoiar o prato sobre o espalhador de água aquecida."
    ],
    correct: 1,
    explanation: "CORRETO! O micro-ondas aquece diretamente as moléculas de água do alimento em apenas 2 a 3 minutos, enquanto o forno elétrico precisa aquecer todo o ar e as paredes de metal por muito mais tempo."
  },

  // ==========================================
  // BLOCO 5: ILUMINAÇÃO E EFICIÊNCIA ENERGÉTICA (8 Questões)
  // ==========================================
  {
    id: 46,
    level: "Médio",
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "Por que as lâmpadas de tecnologia LED substituíram as antigas lâmpadas incandescentes?",
    options: [
      "Porque o vidro externo das lâmpadas de LED é blindado contra impactos mecânicos causados por quedas acidentais.",
      "Economizam até 85% de energia e duram até 25 vezes mais.",
      "Porque as incandescentes continham elementos radioativos proibidos pela vigilância sanitária nacional e internacional.",
      "Porque as lâmpadas incandescentes geravam ruídos acústicos perceptíveis na frequência dos transformadores de bairro."
    ],
    correct: 1,
    explanation: "CORRETO! Lâmpadas LED geram a mesma luminosidade consumindo cerca de 80% a 85% menos energia que as incandescentes antigas, além de durarem até 25.000 horas."
  },
  {
    id: 47,
    level: "Médio",
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "Ao escolher uma lâmpada, qual grandeza impressa na embalagem indica a QUANTIDADE REAL DE LUZ que ela produz?",
    options: [
      "Os Watts nominais que registram o consumo da corrente.",
      "Os Lúmens (lm), que medem o fluxo de luz emitida.",
      "A voltagem em Volts que aponta a diferença de potencial.",
      "A frequência em Hertz dos ciclos alternados da rede."
    ],
    correct: 1,
    explanation: "CORRETO! Lúmens (lm) medem o fluxo luminoso (a luz visível emitida). Watts (W) medem apenas a potência consumida. Uma lâmpada eficiente entrega mais lúmens consumindo menos watts."
  },
  {
    id: 48,
    level: "Difícil",
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "O que exprime o índice de 'Eficiência Luminosa' de uma lâmpada?",
    options: [
      "O peso da carcaça de alumínio dividido pela tensão nominal de fornecimento do soquete rosqueável E27.",
      "A relação entre lúmens produzidos por watt consumido (lm/W).",
      "O tempo em milissegundos que a lâmpada leva para atingir cem por cento do brilho máximo pós-acionamento.",
      "A quantidade de horas que a lâmpada permanece acesa dividida pelo valor pago na compra do produto."
    ],
    correct: 1,
    explanation: "CORRETO! A eficiência luminosa é expressa em lm/W (lúmens por watt). Quanto mais luz a lâmpada produz com o menor consumo de watts, mais eficiente e econômica ela é!"
  },
  {
    id: 49,
    level: "Médio",
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "Por que pintar paredes e forros com cores claras favorece a eficiência energética dos ambientes?",
    options: [
      "Porque a tinta de tonalidade clara bloqueia a circulação de correntes parasitas nas vigas de concreto armado.",
      "Superfícies claras refletem a luz e exigem menos lâmpadas acesas.",
      "Porque tonalidades escuras atraem elétrons da atmosfera, sobrecarregando a fiação elétrica dos interruptores.",
      "Paredes claras não têm influência na iluminação, atuando somente como isolante acústico entre cômodos residenciais."
    ],
    correct: 1,
    explanation: "CORRETO! Paredes e tetos brancos ou claros possuem alto índice de reflexão luminosa, permitindo aproveitar melhor tanto a luz solar diurna quanto a luz das lâmpadas à noite."
  },
  {
    id: 50,
    level: "Médio",
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "Qual o benefício de instalar sensores de presença em corredores e garagens de condomínios?",
    options: [
      "Aumentar a voltagem das lâmpadas para níveis industriais de quatrocentos e quarenta Volts trifásicos.",
      "Acender as luzes apenas na passagem de pessoas, evitando desperdício.",
      "Inverter o sentido de giro da corrente alternada para gerar créditos adicionais no relógio do medidor.",
      "Registrar a identidade fotográfica dos moradores que circulam nas áreas sociais comuns do condomínio."
    ],
    correct: 1,
    explanation: "CORRETO! Os sensores infravermelhos acionam as lâmpadas somente quando detectam movimentação de pessoas, desligando-as após alguns segundos e eliminando luzes acesas ociosas."
  },
  {
    id: 51,
    level: "Difícil",
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "O que é 'Iluminação Natural Zenital' e como ela contribui para a economia na arquitetura sustentável?",
    options: [
      "Lâmpadas com baterias químicas alimentadas por ondas de rádio e instaladas em rodapés embutidos.",
      "Aberturas e claraboias no teto que captam luz solar o dia todo.",
      "Dispositivos que transformam a luminosidade lunar da noite em corrente contínua para alimentar refletores.",
      "Luminárias que utilizam gases nobres inertes ativados por campos magnéticos induzidos no contrapiso."
    ],
    correct: 1,
    explanation: "CORRETO! A iluminação zenital utiliza claraboias e aberturas no teto para captar a luz do sol verticalmente, iluminando galpões e salas naturalmente durante o dia com zero consumo de eletricidade."
  },
  {
    id: 52,
    level: "Difícil",
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "Lâmpadas tubulares fluorescentes antigas muito comuns em salas de aula podem ser substituídas por:",
    options: [
      "Lampiões portáteis de querosene equipados com mechas incandescentes de amianto reforçado.",
      "Tubulares de LED (T8 LED), que não usam reatores e gastam a metade.",
      "Lâmpadas de arco de carbono conectadas em circuitos série sem isolamento galvânico adicional.",
      "Espelhos côncavos motorizados que redirecionam a luz de postes externos para dentro das janelas."
    ],
    correct: 1,
    explanation: "CORRETO! As tubulares LED T8 consomem menos da metade da energia das fluorescentes convencionais e dispensam o reator eletromagnético, que sozinho desperdiçava de 5W a 15W contínuos em calor."
  },
  {
    id: 53,
    level: "Difícil",
    category: "Iluminação e Eficiência",
    badge: "Eficiência",
    question: "O que a 'temperatura de cor' de uma lâmpada (medida em Kelvin, como 2700K ou 6500K) representa?",
    options: [
      "A temperatura física em graus Celsius que a carcaça da lâmpada atinge na mão do usuário após uma hora acesa.",
      "A tonalidade da luz emitida: amarelada quente ou branca fria.",
      "O calor dissipado pela resistência elétrica interna quando submetida a sobretensões da rede pública.",
      "O nível de radiação infravermelha concentrado que a lâmpada direciona sobre os móveis posicionados abaixo."
    ],
    correct: 1,
    explanation: "CORRETO! Não se trata de calor do bulbo! A escala Kelvin aponta a aparência visual da luz: luz quente (~2700K, aconchegante para quartos) e luz fria (~6500K, estimulante para salas de aula e cozinhas)."
  },

  // ==========================================
  // BLOCO 6: SELO PROCEL, SEGURANÇA E AUDITORIA (7 Questões)
  // ==========================================
  {
    id: 54,
    level: "Médio",
    category: "Selo Procel e Segurança",
    badge: "Selo Procel",
    question: "O que indica o 'Selo Procel de Economia de Energia' afixado nos eletrodomésticos?",
    options: [
      "Que o produto possui isenção alfandegária integral conferida pelo Ministério do Desenvolvimento e Comércio Exterior.",
      "Que o equipamento é certificado como nota 'A' em eficiência.",
      "Que o aparelho somente pode ser ligado em horários fora do pico comercial para evitar sobrecargas no sistema.",
      "Garante que o fabricante arcará com o pagamento de cinquenta por cento da fatura residencial do primeiro ano de uso."
    ],
    correct: 1,
    explanation: "CORRETO! Criado pelo Programa Nacional de Conservação de Energia Elétrica (Procel), o selo atesta que o produto foi testado em laboratório e possui a melhor eficiência energética (nota 'A') de sua categoria."
  },
  {
    id: 55,
    level: "Difícil",
    category: "Selo Procel e Segurança",
    badge: "Selo Procel",
    question: "O que a Etiqueta Nacional de Conservação de Energia (ENCE) do INMETRO informa aos consumidores?",
    options: [
      "O manual descritivo detalhado contendo os diagramas esquemáticos dos circuitos eletrônicos internos do produto.",
      "Escala colorida de eficiência (A a E) e consumo em kWh/mês.",
      "A data limite após a qual os componentes elétricos devem ser compulsoriamente descartados em aterros credenciados.",
      "O número de registro profissional dos engenheiros que supervisionaram a linha de montagem industrial do aparelho."
    ],
    correct: 1,
    explanation: "CORRETO! A etiqueta do INMETRO padroniza as informações de eficiência de 'A' (mais eficiente) a 'E'/'F' e aponta o consumo médio estimado em kWh/mês, orientando escolhas conscientes."
  },
  {
    id: 56,
    level: "Difícil",
    category: "Selo Procel e Segurança",
    badge: "Segurança Elétrica",
    question: "O que ocorre quando os fios elétricos instalados em uma residência são mais finos do que o recomendado?",
    options: [
      "A corrente elétrica adquire maior velocidade de propagação devido ao estreitamento mecânico do duto condutor.",
      "Os fios esquentam por efeito Joule, gastando luz e arriscando curto.",
      "A fatura de luz diminui porque a resistência mais alta dos cabos finos bloqueia a entrada de quilowatts-hora na casa.",
      "O relógio do medidor desacelera automaticamente a rotação do disco para compensar a queda de tensão nas tomadas."
    ],
    correct: 1,
    explanation: "CORRETO! Fios subdimensionados oferecem maior resistência à passagem da corrente, aquecendo as paredes (efeito Joule). Esse calor é energia elétrica desperdiçada na sua conta, além de risco sério de incêndio!"
  },
  {
    id: 57,
    level: "Difícil",
    category: "Selo Procel e Segurança",
    badge: "Segurança Elétrica",
    question: "Qual a função do 'fio condutor de proteção' (fio terra, de cor verde ou verde-amarela)?",
    options: [
      "Converter a tensão alternada de duzentos e vinte Volts para cento e vinte e sete Volts de forma instantânea.",
      "Desviar correntes de fuga para o solo, evitando choques graves.",
      "Permitir que os aparelhos domésticos permaneçam ligados mesmo durante manutenções preventivas da concessionária.",
      "Acelerar o carregamento de baterias de telefones celulares através da captação de correntes estáticas do piso."
    ],
    correct: 1,
    explanation: "CORRETO! Se um fio desencapado encostar na carcaça de metal de uma geladeira ou micro-ondas, o fio terra conduz a corrente de fuga com segurança para a terra, desarmando o disjuntor e evitando choque fatal."
  },
  {
    id: 58,
    level: "Difícil",
    category: "Selo Procel e Segurança",
    badge: "Segurança Elétrica",
    question: "Qual é o papel fundamental do disjuntor termomagnético no quadro de distribuição da casa?",
    options: [
      "Estabilizar a frequência da rede em exatamente sessenta Hertz para não desregular os relógios digitais conectados.",
      "Desarmar automaticamente sob sobrecarga ou curto-circuito.",
      "Registrar a porcentagem de energia consumida individualmente por cada membro da família ao longo do mês.",
      "Impedir que a distribuidora realize cortes no fornecimento em caso de faturas atrasadas ou pendências cadastrais."
    ],
    correct: 1,
    explanation: "CORRETO! O disjuntor é o guardião dos condutores elétricos: caso a corrente exceda a capacidade do circuito (sobrecarga ou curto), ele desarma mecanicamente, cortando a corrente antes que a fiação queime."
  },
  {
    id: 59,
    level: "Difícil",
    category: "Selo Procel e Segurança",
    badge: "Auditoria Escolar",
    question: "O que é uma 'Auditoria Energética Doméstica' realizada por estudantes como os da Turma 802?",
    options: [
      "Comprar ferramentas industriais pesadas para abrir as tubulações e quebrar o reboco das alvenarias da casa.",
      "Mapear aparelhos, calcular gastos e mudar hábitos da família.",
      "Desconectar o imóvel do fornecimento público da distribuidora e adotar exclusivamente velas e lamparinas.",
      "Emitir notificações de multas financeiras judiciais para os familiares que deixarem equipamentos em repouso."
    ],
    correct: 1,
    explanation: "CORRETO! Os estudantes da Turma 802 identificam mitos, analisam a fatura, calculam o consumo dos aparelhos e orientam a família com ações simples que geram economia real e sustentabilidade."
  },
  {
    id: 60,
    level: "Difícil",
    category: "Selo Procel e Segurança",
    badge: "Auditoria Escolar",
    question: "Por que pequenas atitudes cotidianas somadas (como banhos mais curtos e desligar o stand-by) geram grande impacto?",
    options: [
      "O consumo é cumulativo: poupar reduz despesas e protege os rios.",
      "Pequenas atitudes individuais não produzem impacto prático no faturamento ou na matriz energética global do país.",
      "Porque as distribuidoras estaduais concedem descontos de setenta por cento para residências que desligam réguas de tomadas.",
      "Porque o sol e os ventos deixam de gerar energia renovável caso os consumidores residenciais não desliguem aparelhos."
    ],
    correct: 0,
    explanation: "PARABÉNS AUDITOR! O consumo de energia é contínuo e cumulativo. Cada kWh poupado por milhões de famílias protege os rios, reduz as contas e evita queimar combustíveis fósseis poluentes nas termelétricas!"
  }
];

/**
 * Função utilitária para seleção e ALTERNÂNCIA DE NÍVEIS
 * Quando as questões são preparadas, elas alternam estritamente entre os níveis:
 * Fácil -> Médio -> Difícil -> Fácil -> Médio -> Difícil...
 */
function getQuestionsByMode(mode, category = null) {
  let pool = [...QUIZ_QUESTIONS];

  // Filtro de categoria se solicitado
  if (category && category !== 'all') {
    pool = pool.filter(q => q.category === category);
  }

  // Se for modo específico de mitos ou conta:
  if (mode === 'mitos') {
    pool = pool.filter(q => q.category === 'Mitos e Verdades');
  } else if (mode === 'conta') {
    pool = pool.filter(q => q.category === 'Anatomia da Conta' || q.category === 'Bandeiras Tarifárias');
  }

  // Separar em baldes por dificuldade
  const facil = pool.filter(q => q.level === 'Fácil').sort(() => Math.random() - 0.5);
  const medio = pool.filter(q => q.level === 'Médio').sort(() => Math.random() - 0.5);
  const dificil = pool.filter(q => q.level === 'Difícil').sort(() => Math.random() - 0.5);

  // Intercalar ciclicamente: Fácil, Médio, Difícil, Fácil, Médio, Difícil...
  const alternated = [];
  const maxBucketLen = Math.max(facil.length, medio.length, dificil.length);

  for (let i = 0; i < maxBucketLen; i++) {
    if (i < facil.length) alternated.push(facil[i]);
    if (i < medio.length) alternated.push(medio[i]);
    if (i < dificil.length) alternated.push(dificil[i]);
  }

  // Selecionar tamanho conforme o modo
  if (mode === 'maratona50') {
    return alternated.slice(0, 50);
  } else if (mode === 'completo60') {
    return alternated.slice(0, 60);
  } else if (mode === 'rapido15') {
    return alternated.slice(0, 15);
  }

  return alternated;
}

// Export para escopo global no navegador e Node.js
if (typeof window !== 'undefined') {
  window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
  window.getQuestionsByMode = getQuestionsByMode;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUIZ_QUESTIONS, getQuestionsByMode };
}
