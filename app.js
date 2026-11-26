/**
 * AUDITORES DA ENERGIA - TURMA 802
 * Game Engine, Audio Synthesizer (Web Audio API), Timer & UI Controller
 */

class EnergyQuizApp {
  constructor() {
    this.soundEnabled = true;
    this.audioCtx = null;

    // Estado do Jogo
    this.currentMode = 'maratona50';
    this.activeQuestions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.combo = 0;
    this.answersHistory = []; // Armazena { question, selectedOption, isCorrect, timeSpent }
    
    // Timer
    this.timerEnabled = false;
    this.timerInterval = null;
    this.timeLeft = 30;
    this.timerDuration = 30;

    // Inicialização
    this.initAudio();
    this.bindEvents();
    this.initCalculator();
  }

  // ==========================================
  // SISTEMA DE ÁUDIO (Web Audio API)
  // Sem arquivos externos, 100% autônomo
  // ==========================================
  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn("Web Audio API não suportada neste navegador.");
    }
  }

  resumeAudioContext() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playSound(type) {
    if (!this.soundEnabled || !this.audioCtx) return;
    this.resumeAudioContext();

    const now = this.audioCtx.currentTime;

    if (type === 'click') {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.04);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.04);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'correct') {
      // Duplo tom alegre ascendente (Dó5 -> Sol5)
      [523.25, 783.99].forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.2, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.25);
      });
    } else if (type === 'wrong') {
      // Tom grave descendente de erro
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.25);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'fanfare') {
      // Fanfarra de vitória (Dó-Mi-Sol-Dó)
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        const startTime = now + idx * 0.12;
        const duration = (idx === 3) ? 0.6 : 0.2;
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.25, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
      });
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    const icon = document.getElementById('soundIcon');
    if (icon) {
      icon.textContent = this.soundEnabled ? '🔊' : '🔇';
    }
    if (this.soundEnabled) this.playSound('click');
  }

  // ==========================================
  // NAVEGAÇÃO DE TELAS
  // ==========================================
  showView(viewId) {
    ['welcomeScreen', 'quizScreen', 'resultsScreen'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = (id === viewId) ? 'block' : 'none';
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goHome() {
    this.stopTimer();
    this.showView('welcomeScreen');
  }

  confirmQuit() {
    if (confirm("Deseja realmente sair da partida atual? O progresso não salvo será perdido.")) {
      this.goHome();
    }
  }

  // ==========================================
  // INÍCIO DO QUIZ
  // ==========================================
  startQuiz(mode, category = null) {
    this.playSound('click');
    this.currentMode = mode;
    this.timerEnabled = document.getElementById('timerToggle')?.checked || false;

    // Buscar perguntas conforme o modo escolhido
    this.activeQuestions = getQuestionsByMode(mode, category);

    if (!this.activeQuestions || this.activeQuestions.length === 0) {
      alert("Nenhuma pergunta encontrada para esta categoria.");
      return;
    }

    this.currentIndex = 0;
    this.score = 0;
    this.combo = 0;
    this.answersHistory = [];

    // Mostrar tela de Quiz
    this.showView('quizScreen');
    this.renderQuestion();
  }

  startCategoryQuiz() {
    const sel = document.getElementById('categorySelector');
    const category = sel ? sel.value : null;
    this.startQuiz('categoria', category);
  }

  // ==========================================
  // RENDERIZAÇÃO DA QUESTÃO
  // ==========================================
  renderQuestion() {
    const q = this.activeQuestions[this.currentIndex];
    if (!q) {
      this.finishQuiz();
      return;
    }

    // Atualizar Metadados e Contadores
    document.getElementById('questionCategoryText').textContent = q.category;
    document.getElementById('questionCounter').textContent = `${this.currentIndex + 1} / ${this.activeQuestions.length}`;
    document.getElementById('currentScore').textContent = this.score;

    // Atualizar Badge de Nível de Dificuldade
    const levelBadge = document.getElementById('questionLevelBadge');
    const levelText = document.getElementById('questionLevelText');
    const levelIcon = document.getElementById('questionLevelIcon');
    if (levelBadge && levelText) {
      levelText.textContent = q.level;
      levelBadge.className = 'quiz-badge diff-badge';
      if (q.level === 'Fácil') {
        levelBadge.classList.add('facil');
        if (levelIcon) levelIcon.textContent = '🟢';
      } else if (q.level === 'Médio') {
        levelBadge.classList.add('medio');
        if (levelIcon) levelIcon.textContent = '🟡';
      } else {
        levelBadge.classList.add('dificil');
        if (levelIcon) levelIcon.textContent = '🔴';
      }
    }

    // Barra de Progresso
    const progressPercent = ((this.currentIndex) / this.activeQuestions.length) * 100;
    document.getElementById('progressFill').style.width = `${progressPercent}%`;

    // Atualizar Combo
    const comboBadge = document.getElementById('comboBadge');
    if (this.combo >= 2) {
      comboBadge.style.display = 'flex';
      document.getElementById('comboText').textContent = `🔥 Combo x${this.combo}`;
    } else {
      comboBadge.style.display = 'none';
    }

    // Enunciado
    document.getElementById('questionText').textContent = q.question;

    // Limpar e renderizar opções
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-text">${optText}</span>
      `;
      btn.onclick = () => this.selectOption(idx);
      optionsContainer.appendChild(btn);
    });

    // Ocultar feedback e botão próximo
    const feedbackBox = document.getElementById('feedbackBox');
    feedbackBox.style.display = 'none';
    feedbackBox.className = 'feedback-box';

    const nextBtn = document.getElementById('nextQuestionBtn');
    nextBtn.style.display = 'none';

    // Iniciar Timer se ativado
    this.startTimer();
  }

  // ==========================================
  // CONTROLE DO TIMER
  // ==========================================
  startTimer() {
    this.stopTimer();
    const timerBadge = document.getElementById('timerBadge');

    if (!this.timerEnabled) {
      timerBadge.style.display = 'none';
      return;
    }

    timerBadge.style.display = 'flex';
    this.timeLeft = this.timerDuration;
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      if (this.timeLeft <= 0) {
        this.stopTimer();
        this.handleTimeout();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerDisplay() {
    const timerEl = document.getElementById('timerCountdown');
    if (timerEl) {
      timerEl.textContent = `${this.timeLeft}s`;
      if (this.timeLeft <= 5) {
        timerEl.style.color = '#ef4444';
      } else {
        timerEl.style.color = '#38bdf8';
      }
    }
  }

  handleTimeout() {
    // Se esgotar o tempo, conta como erro automático (-1)
    this.selectOption(-1, true);
  }

  // ==========================================
  // SELEÇÃO E AVALIAÇÃO DA RESPOSTA
  // ==========================================
  selectOption(selectedIndex, isTimeout = false) {
    this.stopTimer();
    const q = this.activeQuestions[this.currentIndex];
    const isCorrect = (selectedIndex === q.correct);

    // Desabilitar todos os botões de opção
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    // Atualizar pontuação e combo conforme o nível
    if (isCorrect) {
      this.combo++;
      const basePoints = (q.level === 'Difícil') ? 200 : (q.level === 'Médio') ? 150 : 100;
      const comboBonus = (this.combo > 1) ? (this.combo * 15) : 0;
      const timeBonus = this.timerEnabled ? Math.max(0, this.timeLeft * 2) : 0;
      const pointsEarned = basePoints + comboBonus + timeBonus;
      this.score += pointsEarned;
      this.playSound('correct');
    } else {
      this.combo = 0;
      this.playSound('wrong');
    }

    // Salvar no histórico de respostas
    this.answersHistory.push({
      question: q,
      selectedIndex: selectedIndex,
      isCorrect: isCorrect,
      isTimeout: isTimeout
    });

    // Exibir Caixa de Feedback Pedagógico
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackExplanation = document.getElementById('feedbackExplanation');

    feedbackBox.style.display = 'block';

    if (isCorrect) {
      feedbackBox.className = 'feedback-box correct';
      feedbackIcon.textContent = '✅';
      feedbackTitle.textContent = 'Excelente! Resposta Correta!';
    } else if (isTimeout) {
      feedbackBox.className = 'feedback-box wrong';
      feedbackIcon.textContent = '⏱️';
      feedbackTitle.textContent = 'Tempo Esgotado!';
    } else {
      feedbackBox.className = 'feedback-box wrong';
      feedbackIcon.textContent = '❌';
      feedbackTitle.textContent = 'Resposta Incorreta!';
    }

    feedbackExplanation.innerHTML = `<strong>Fato Educativo:</strong> ${q.explanation}`;

    // Mostrar botão de próxima questão
    const nextBtn = document.getElementById('nextQuestionBtn');
    nextBtn.style.display = 'inline-flex';
    nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  nextQuestion() {
    this.playSound('click');
    this.currentIndex++;
    if (this.currentIndex < this.activeQuestions.length) {
      this.renderQuestion();
    } else {
      this.finishQuiz();
    }
  }

  // ==========================================
  // FINALIZAÇÃO E TELA DE RESULTADOS
  // ==========================================
  finishQuiz() {
    this.stopTimer();
    this.showView('resultsScreen');

    const totalQuestions = this.answersHistory.length;
    const correctCount = this.answersHistory.filter(a => a.isCorrect).length;
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    // Atualizar Métricas na Tela
    document.getElementById('resCorrectCount').textContent = `${correctCount} / ${totalQuestions}`;
    document.getElementById('resAccuracyPercent').textContent = `${accuracy}%`;
    document.getElementById('resTotalPoints').textContent = this.score;

    // Avaliação de Rank
    let rankTitle = "Auditor Estagiário em Treinamento";
    let rankSubtitle = "Continue estudando os mitos e a anatomia da conta para melhorar seu resultado!";
    let rankIcon = "🌱";

    if (accuracy >= 90) {
      rankTitle = "Auditor Mestre da Energia - Turma 802";
      rankSubtitle = "Desempenho lendário! Você domina mitos elétricos, cálculos de kWh e bandeiras tarifárias!";
      rankIcon = "🏆";
      this.playSound('fanfare');
    } else if (accuracy >= 75) {
      rankTitle = "Auditor Sênior de Eficiência";
      rankSubtitle = "Ótimo aproveitamento! Você já pode guiar sua família e escola rumo à economia de energia!";
      rankIcon = "⭐";
      this.playSound('fanfare');
    } else if (accuracy >= 60) {
      rankTitle = "Auditor Pleno da Energia";
      rankSubtitle = "Bom resultado! Com alguns ajustes nas pegadinhas de stand-by e tarifas, você chega ao topo!";
      rankIcon = "⚡";
    } else if (accuracy >= 40) {
      rankTitle = "Auditor Júnior";
      rankSubtitle = "Conhecimento básico alcançado! Revise os pontos fracos e tente novamente a maratona.";
      rankIcon = "🔍";
    }

    document.getElementById('resultsRankIcon').textContent = rankIcon;
    document.getElementById('resultsRankTitle').textContent = rankTitle;
    document.getElementById('resultsRankSubtitle').textContent = rankSubtitle;

    // Renderizar Detalhamentos
    this.renderLevelBreakdown();
    this.renderCategoryBreakdown();
  }

  renderLevelBreakdown() {
    const container = document.getElementById('levelBreakdownContainer');
    if (!container) return;
    container.innerHTML = '';

    const levelsOrder = ['Fácil', 'Médio', 'Difícil'];
    const levelIcons = { 'Fácil': '🟢', 'Médio': '🟡', 'Difícil': '🔴' };
    const levelColors = { 'Fácil': '#10b981', 'Médio': '#f59e0b', 'Difícil': '#ef4444' };

    const levelsMap = {
      'Fácil': { total: 0, correct: 0 },
      'Médio': { total: 0, correct: 0 },
      'Difícil': { total: 0, correct: 0 }
    };

    this.answersHistory.forEach(item => {
      const lvl = item.question.level || 'Médio';
      if (levelsMap[lvl]) {
        levelsMap[lvl].total++;
        if (item.isCorrect) levelsMap[lvl].correct++;
      }
    });

    levelsOrder.forEach(lvl => {
      const data = levelsMap[lvl];
      if (data.total === 0) return;
      const pct = Math.round((data.correct / data.total) * 100);

      const card = document.createElement('div');
      card.className = 'level-card';
      card.innerHTML = `
        <div class="level-card-header">
          <span>${levelIcons[lvl]} ${lvl}</span>
          <span style="color: ${levelColors[lvl]};">${data.correct}/${data.total} (${pct}%)</span>
        </div>
        <div class="breakdown-bar">
          <div class="breakdown-progress" style="width: ${pct}%; background: ${levelColors[lvl]};"></div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderCategoryBreakdown() {
    const container = document.getElementById('categoryBreakdownContainer');
    container.innerHTML = '';

    // Agrupar respostas por categoria
    const categoriesMap = {};
    this.answersHistory.forEach(item => {
      const cat = item.question.category;
      if (!categoriesMap[cat]) {
        categoriesMap[cat] = { total: 0, correct: 0 };
      }
      categoriesMap[cat].total++;
      if (item.isCorrect) categoriesMap[cat].correct++;
    });

    Object.keys(categoriesMap).forEach(cat => {
      const data = categoriesMap[cat];
      const pct = Math.round((data.correct / data.total) * 100);

      const itemDiv = document.createElement('div');
      itemDiv.className = 'breakdown-item';
      itemDiv.innerHTML = `
        <div class="breakdown-info">
          <span>${cat}</span>
          <span>${data.correct}/${data.total} (${pct}%)</span>
        </div>
        <div class="breakdown-bar">
          <div class="breakdown-progress" style="width: ${pct}%; background: ${pct >= 70 ? '#10b981' : pct >= 40 ? '#f59e0b' : '#ef4444'};"></div>
        </div>
      `;
      container.appendChild(itemDiv);
    });
  }

  // ==========================================
  // CERTIFICADO OFICIAL
  // ==========================================
  generateCertificate() {
    this.playSound('click');

    let studentName = document.getElementById('playerNameInput')?.value.trim();
    if (!studentName) {
      studentName = prompt("Digite seu nome completo para emissão do Certificado Oficial:", "Estudante Auditor(a)") || "Estudante Auditor(a)";
    }

    const totalQuestions = this.answersHistory.length;
    const correctCount = this.answersHistory.filter(a => a.isCorrect).length;
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    document.getElementById('certStudentName').textContent = studentName;
    document.getElementById('certScoreInfo').textContent = `${accuracy}% DE APROVEITAMENTO (${correctCount}/${totalQuestions} ACERTOS)`;

    // Data formatada
    const now = new Date();
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    document.getElementById('certDateDisplay').textContent = `${now.getDate()} de ${meses[now.getMonth()]} de ${now.getFullYear()}`;

    this.openModal('certificateModal');
  }

  // ==========================================
  // REVISÃO DE QUESTÕES
  // ==========================================
  openReviewModal() {
    this.playSound('click');
    const container = document.getElementById('reviewQuestionsList');
    container.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    this.answersHistory.forEach((item, idx) => {
      const q = item.question;
      const card = document.createElement('div');
      card.className = 'card';
      card.style.padding = '16px';
      card.style.marginBottom = '8px';
      card.style.borderLeft = item.isCorrect ? '5px solid #10b981' : '5px solid #ef4444';

      let optionsHtml = '';
      q.options.forEach((opt, optIdx) => {
        let style = 'padding: 6px 12px; margin-bottom: 4px; border-radius: 6px; font-size: 0.9rem;';
        if (optIdx === q.correct) {
          style += 'background: rgba(16, 185, 129, 0.2); color: #34d399; font-weight: bold;';
        } else if (optIdx === item.selectedIndex && !item.isCorrect) {
          style += 'background: rgba(239, 68, 68, 0.2); color: #f87171; text-decoration: line-through;';
        } else {
          style += 'color: #94a3b8;';
        }
        optionsHtml += `<div style="${style}"><strong>${letters[optIdx]})</strong> ${opt}</div>`;
      });

      const levelLabel = (q.level === 'Fácil') ? '🟢 Fácil' : (q.level === 'Médio') ? '🟡 Médio' : '🔴 Difícil';

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <strong style="color: #60a5fa;">Questão ${idx + 1} • ${q.category} <span style="font-size: 0.8rem; opacity: 0.9; margin-left: 6px;">[${levelLabel}]</span></strong>
          <span style="font-weight: bold; color: ${item.isCorrect ? '#34d399' : '#f87171'};">
            ${item.isCorrect ? '✅ Acertou' : item.isTimeout ? '⏱️ Esgotou' : '❌ Errou'}
          </span>
        </div>
        <p style="margin-bottom: 12px; font-weight: 600;">${q.question}</p>
        <div style="margin-bottom: 12px;">${optionsHtml}</div>
        <div style="font-size: 0.85rem; color: #cbd5e1; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;">
          <strong>Explicação:</strong> ${q.explanation}
        </div>
      `;

      container.appendChild(card);
    });

    this.openModal('reviewModal');
  }

  // ==========================================
  // MODAIS & UTILITÁRIOS
  // ==========================================
  openModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.style.display = 'flex';
  }

  closeModal(modalId) {
    this.playSound('click');
    const m = document.getElementById(modalId);
    if (m) m.style.display = 'none';
  }

  openPosterModal() {
    this.playSound('click');
    this.openModal('posterModal');
  }

  openCalcModal() {
    this.playSound('click');
    this.openModal('calcModal');
  }

  bindEvents() {
    // Fechar modais ao clicar no fundo
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.style.display = 'none';
        }
      });
    });
  }

  // ==========================================
  // CALCULADORA DE ECONOMIA DINÂMICA
  // ==========================================
  initCalculator() {
    const showerWatts = document.getElementById('calcShowerWatts');
    const showerMinutes = document.getElementById('calcShowerMinutes');
    const showerPeople = document.getElementById('calcShowerPeople');
    const tariff = document.getElementById('calcTariff');

    const updateShower = () => {
      const w = parseFloat(showerWatts?.value) || 5500;
      const m = parseFloat(showerMinutes?.value) || 15;
      const p = parseFloat(showerPeople?.value) || 4;
      const t = parseFloat(tariff?.value) || 0.95;

      // Horas no mês = (minutos * pessoas * 30) / 60
      const totalHours = (m * p * 30) / 60;
      const kwh = (w * totalHours) / 1000;
      const totalCost = kwh * t;

      // Economia se reduzir para 5 min
      const ecoHours = (5 * p * 30) / 60;
      const ecoKwh = (w * ecoHours) / 1000;
      const ecoCost = ecoKwh * t;
      const saved = totalCost - ecoCost;

      const valEl = document.getElementById('calcShowerValue');
      const tipEl = document.getElementById('calcShowerTip');

      if (valEl) valEl.textContent = `R$ ${totalCost.toFixed(2).replace('.', ',')}`;
      if (tipEl) {
        tipEl.textContent = `Se reduzirem para 5 min por banho, a conta do chuveiro cai para R$ ${ecoCost.toFixed(2).replace('.', ',')} (economia de R$ ${saved.toFixed(2).replace('.', ',')}/mês ou R$ ${(saved * 12).toFixed(2).replace('.', ',')}/ano)!`;
      }
    };

    [showerWatts, showerMinutes, showerPeople, tariff].forEach(input => {
      if (input) input.addEventListener('input', updateShower);
    });

    // Calculadora Troca de Lâmpadas
    const lampQty = document.getElementById('calcLampQty');
    const lampHours = document.getElementById('calcLampHours');

    const updateLamps = () => {
      const q = parseFloat(lampQty?.value) || 6;
      const h = parseFloat(lampHours?.value) || 5;
      const t = parseFloat(tariff?.value) || 0.95;

      // Economia por lâmpada: 60W - 9W = 51W poupados
      const wattsSaved = 51;
      const monthlyKwhSaved = (q * wattsSaved * h * 30) / 1000;
      const yearlySavedCost = monthlyKwhSaved * t * 12;

      const ecoEl = document.getElementById('calcLampEconomy');
      if (ecoEl) ecoEl.textContent = `R$ ${yearlySavedCost.toFixed(2).replace('.', ',')} / ano`;
    };

    [lampQty, lampHours, tariff].forEach(input => {
      if (input) input.addEventListener('input', updateLamps);
    });

    updateShower();
    updateLamps();
  }
}

// Instanciar aplicativo no carregamento
let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new EnergyQuizApp();
  window.app = app;
});
