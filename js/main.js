import { BANKS } from './bank.js';
// ── State ─────────────────────────────────────────────────────────────────
let cat = 'easy';
let queue = [];
let wordLimit = 10;       // 出題数
let missedItems = [];     // 間違えた問題を蓄積
let idx = 0;
let startTime = null;
let timerRaf = null;
let wrongCount = 0;
let correctCount = 0;
let totalCharsTyped = 0;
let sessionStartTime = null;
let allCorrect = 0;
let bestWpm = 0;
let hintShown = false;
let sessionWpms = [];
let sessionAccs = [];

// ── DOM ───────────────────────────────────────────────────────────────────
const card        = document.getElementById('card');
const cardCat     = document.getElementById('cardCat');
const cardHint    = document.getElementById('cardHint');
const cardSub     = document.getElementById('cardSub');
const charDisplay = document.getElementById('charDisplay');
const answer      = document.getElementById('answer');
const progFill    = document.getElementById('progFill');
const progLabel   = document.getElementById('progLabel');
const sWpm        = document.getElementById('sWpm');
const sAcc        = document.getElementById('sAcc');
const sTime       = document.getElementById('sTime');
const toast       = document.getElementById('toast');
const complete    = document.getElementById('complete');
// const complete    = document.getElementById('showSpell');
const showSpell = document.getElementById('showSpell');
let showSpellValue = parseFloat(showSpell.value);
const revealBadge = document.getElementById('revealBadge');
const autoHintWrap    = document.getElementById('autoHintWrap');
const autoHintLabel   = document.getElementById('autoHintLabel');
const countdownRing   = document.getElementById('countdownRing');
const countdownArc    = document.getElementById('countdownArc');
const CIRCUMFERENCE   = 50.27; // 2π×8

//スペル常時表示モードの切替

showSpell.addEventListener("input", function () {
  showSpellValue = parseFloat(document.getElementById('showSpell').value);
  if (showSpellValue > 0.5 ){ revealChars(true); }
});


  // ── Category switch ───────────────────────────────────────────────────────
document.getElementById('catRow').addEventListener('click', e => {
  const btn = e.target.closest('.cat-pill');
  if (!btn) return;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  cat = btn.dataset.cat;
  initSession();
});

// ── Word-count slider ─────────────────────────────────────────────────────
const countSlider = document.getElementById('countSlider');
const countVal    = document.getElementById('countVal');
const countHint   = document.getElementById('countHint').querySelector('#totalWords');

function updateSliderMax(total) {
  countSlider.max = total;
  countSlider.value = Math.min(parseInt(countSlider.value), total);
  wordLimit = parseInt(countSlider.value);
  countVal.textContent  = wordLimit;
  countHint.textContent = total;
}
countSlider.addEventListener('input', () => {
  wordLimit = parseInt(countSlider.value);
  countVal.textContent = wordLimit;
  initSession();
});

function initSession() {
  let items;
  if (cat === 'mix') {
    items = Object.values(BANKS).flatMap(b => shuffle([...b.items]).slice(0, 5));
  } else {
    items = [...BANKS[cat].items];
  }
  // スライダー最大値をカテゴリ総数に合わせる
  updateSliderMax(items.length);
  // シャッフルして wordLimit 件に絞る
  queue = shuffle(items).slice(0, wordLimit);
  idx = 0; wrongCount = 0; correctCount = 0; totalCharsTyped = 0;
  missedItems = [];
  sessionWpms = []; sessionAccs = [];
  startTime = null; sessionStartTime = null;
  cancelAnimationFrame(timerRaf);
  clearAutoHint();
  sWpm.textContent = '—'; sAcc.textContent = '—'; sTime.textContent = '0.0s';
  answer.value = ''; answer.className = '';
  hintShown = false;
  complete.classList.remove('show');
  document.getElementById('reviewPanel').innerHTML = '';
  updateProgress();
  showCard(true);
  answer.focus();
}

// ── Show card ─────────────────────────────────────────────────────────────
// ── Split every word into two parts ──────────────────────────────────────
// Priority: 1) explicit hyphen  2) split table  3) midpoint
function showCard(initial = false) {
  if (idx >= queue.length) { showComplete(); return; }
  const item = queue[idx];

  // Category label
  let catLabel = '—';
  for (const [k, v] of Object.entries(BANKS)) {
    if (v.items.some(i => i.en === item.en)) { catLabel = v.label; break; }
  }

  cardCat.textContent = catLabel;
  cardHint.textContent = item.ja;
  cardHint.className = 'card-hint' + (item.ja.length > 8 ? ' small' : '');
  cardSub.textContent = '';
  cardSub.classList.remove('revealed');
  hideHint();
  hintShown = false;

  // char display: blurred until Ctrl+Shift
  charDisplay.classList.remove('revealed');
  autoHintWrap.style.display = '';
  startAutoHint();

  renderCharDisplay('');
  if (showSpellValue > 0.5) {
    missedItems.push(item);
  }
  if (!initial) {
    card.classList.add('fly-in');
    card.addEventListener('animationend', () => card.classList.remove('fly-in'), { once: true });
  }
  card.classList.remove('correct-glow', 'shake');
}

// ── Auto-hint countdown (5s) ──────────────────────────────────────────────
let autoHintTimer  = null;
let autoHintRaf    = null;
let autoHintStart  = null;
const AUTO_HINT_MS = 3000; //3秒後ヒントを表示

function startAutoHint() {
  clearAutoHint();
  if (showSpellValue > 0.5 ){ revealChars(true); }
  autoHintStart = Date.now();
  countdownRing.classList.remove('done');
  autoHintLabel.textContent = '3秒後にヒントを表示…';
  autoHintLabel.style.color = '';

  const tick = () => {
    const elapsed = Date.now() - autoHintStart;
    const ratio   = Math.min(elapsed / AUTO_HINT_MS, 1);
    countdownArc.style.strokeDashoffset = CIRCUMFERENCE * (1 - ratio);
    if (ratio < 1) {
      autoHintRaf = requestAnimationFrame(tick);
    } else {
      countdownRing.classList.add('done');
      autoHintLabel.textContent = '💡 ヒントを表示しました';
      autoHintLabel.style.color = 'var(--green)';
      if (!cardSub.textContent) cardSub.textContent = '💡 ' + (queue[idx]?.hint ?? '');
      cardSub.classList.add('revealed');
    
      if (queue[idx] && !missedItems.find(m => m.en === queue[idx].en)) missedItems.push(queue[idx]);
    }
  };
  autoHintRaf = requestAnimationFrame(tick);
}

function clearAutoHint() {
  clearTimeout(autoHintTimer);
  cancelAnimationFrame(autoHintRaf);
  autoHintStart = null;
  countdownArc.style.strokeDashoffset = CIRCUMFERENCE;
  countdownRing.classList.remove('done');
  autoHintLabel.textContent = '3秒後にヒントを表示…';
  autoHintLabel.style.color = '';
}


// ── Char display ──────────────────────────────────────────────────────────
function renderCharDisplay(typed) {
  const item = queue[idx];
  const target = item ? item.en : '';
  charDisplay.innerHTML = '';
  target.split('').forEach((ch, i) => {
    const span = document.createElement('span');
    span.className = 'ch';
    span.textContent = ch === ' ' ? '\u00a0' : ch;
    if (i < typed.length) {
      span.classList.add(typed[i] === ch ? 'hit' : 'miss');
    } else if (i === typed.length) {
      span.classList.add('cursor');
    }
    charDisplay.appendChild(span);
  });
}

// ── Input handler ─────────────────────────────────────────────────────────
answer.addEventListener('input', () => {
  if (idx >= queue.length) return;
  const typed = answer.value;
  if (!startTime && typed.length > 0) {
    startTime = Date.now();
    if (!sessionStartTime) sessionStartTime = startTime;
    runTimer();
    clearAutoHint(); // stop countdown once typing starts
    autoHintWrap.style.display = 'none';
  }
  renderCharDisplay(typed);

  const target = queue[idx].en;
  const hasError = typed.split('').some((c, i) => c !== target[i]);
  answer.classList.toggle('state-wrong', hasError && typed.length > 0);
  answer.classList.remove('state-right');

  // Live WPM
  if (startTime && typed.length > 0) {
    const elMin = (Date.now() - startTime) / 60000;
    const wpm = Math.round((typed.length / 5) / elMin);
    if (wpm < 999) sWpm.textContent = wpm;
    const wrong = typed.split('').filter((c,i)=>c!==target[i]).length;
    sAcc.textContent = Math.round(((typed.length - wrong) / typed.length) * 100) + '%';
  }
});

answer.addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); checkAnswer(); return;}
  if (e.key === 'Control' && !e.shiftKey) { showHint(); updateHintBadge(true); }
  if (e.key === 'Shift' && e.ctrlKey)     { revealChars(true); }
  if (e.key === 'Control' && e.shiftKey)  { revealChars(true); }
});
answer.addEventListener('keyup', e => {
  if (e.key === 'Shift')   { revealChars(false); }
  if (e.key === 'Control') { revealChars(false); hideHint(); updateHintBadge(false); }
});

function revealChars(show) {
  charDisplay.classList.toggle('revealed', show);
  const badge = document.getElementById('revealBadge');
  badge.classList.toggle('active', show);
  badge.innerHTML = show
    ? '<span class="key">Ctrl</span><span style="color:var(--muted);font-size:10px">+</span><span class="key">Shift</span> 表示中…'
    : '<span class="key">Ctrl</span><span style="color:var(--muted);font-size:10px">+</span><span class="key">Shift</span> で答え';
}

function updateHintBadge(show) {
  const badge = document.getElementById('hintBadge');
  badge.classList.toggle('active', show);
  badge.innerHTML = show
    ? '<span class="key">Ctrl</span> 表示中…'
    : '<span class="key">Ctrl</span> でヒント';
}

// ── Check answer ──────────────────────────────────────────────────────────
function checkAnswer() {
  if (idx >= queue.length) return;
  const typed  = answer.value.trim();
  const item   = queue[idx];
  const target = item.en;
  if (!typed) return;

  if (typed === target) {
    // Correct
    const elapsed = (Date.now() - (startTime ?? Date.now())) / 60000 || 0.001;
    const wpm = Math.round((target.length / 5) / elapsed);
    sessionWpms.push(wpm);
    sessionAccs.push(100);
    correctCount++;
    allCorrect++;
    if (wpm > bestWpm) { bestWpm = wpm; document.getElementById('bestWpm').textContent = wpm; }
    document.getElementById('totalCorrect').textContent = allCorrect;

    clearAutoHint();

    answer.classList.add('state-right');
    card.classList.add('correct-glow');
    showToast('✓ 正解！', 'green');

    setTimeout(() => {
      card.classList.add('fly-out-right');
      setTimeout(() => {
        card.classList.remove('fly-out-right', 'correct-glow');
        idx++;
        startTime = null; cancelAnimationFrame(timerRaf);
        answer.value = ''; answer.className = '';
        updateProgress();
        showCard();
        answer.focus();
      }, 360);
    }, 220);

  } else {
    // Wrong — 間違えた問題を記録（同一問題は1回のみ）
    if (!missedItems.find(m => m.en === item.en)) {
      missedItems.push(item);
    }
    wrongCount++;
    sessionAccs.push(Math.round((typed.split('').filter((c,i)=>c===target[i]).length / target.length) * 100));
    card.classList.add('shake');
    card.addEventListener('animationend', () => card.classList.remove('shake'), { once: true });
    showToast('✗ もう一度！ → ' + target, 'red');
    answer.classList.add('state-wrong');
    setTimeout(() => { answer.value = ''; answer.className = ''; renderCharDisplay(''); }, 600);
  }
}

// ── Timer RAF ─────────────────────────────────────────────────────────────
function runTimer() {
  const tick = () => {
    if (!startTime) return;
    sTime.textContent = ((Date.now() - startTime) / 1000).toFixed(1) + 's';
    timerRaf = requestAnimationFrame(tick);
  };
  timerRaf = requestAnimationFrame(tick);
}

// ── Progress ──────────────────────────────────────────────────────────────
function updateProgress() {
  const pct = queue.length ? (idx / queue.length) * 100 : 0;
  progFill.style.width = pct + '%';
  progLabel.textContent = idx + ' / ' + queue.length;
}

// ── Hint (hold to reveal) ─────────────────────────────────────────────────
const hintBtn = document.getElementById('hintBtn');

function showHint() {
  if (idx >= queue.length) return;
  // set text first time it's requested
  if (!cardSub.textContent) cardSub.textContent = '💡 ' + queue[idx].hint;
  cardSub.classList.add('revealed');
  hintBtn.style.borderColor = 'var(--yellow)';
  hintBtn.style.color = '#b8860b';

  if (!missedItems.find(m => m.en === queue[idx].en)) missedItems.push(queue[idx])
}
function hideHint() {
  cardSub.classList.remove('revealed');
  hintBtn.style.borderColor = '';
  hintBtn.style.color = '';
}

hintBtn.addEventListener('mousedown', e => { e.preventDefault(); showHint(); updateHintBadge(true); });
hintBtn.addEventListener('mouseup',   () => { hideHint(); updateHintBadge(false); });
hintBtn.addEventListener('mouseleave',() => { hideHint(); updateHintBadge(false); });
hintBtn.addEventListener('touchstart', e => { e.preventDefault(); showHint(); updateHintBadge(true); }, { passive: false });
hintBtn.addEventListener('touchend',   () => { hideHint(); updateHintBadge(false); });
hintBtn.addEventListener('touchcancel',() => { hideHint(); updateHintBadge(false); });

// ── Skip ──────────────────────────────────────────────────────────────────
// document.getElementById('skipBtn').addEventListener('click', () => {
//   if (idx >= queue.length) return;
//   cancelAnimationFrame(timerRaf);
//   clearAutoHint();
//   startTime = null;
//   card.classList.add('fly-out-wrong');
//   setTimeout(() => {
//     card.classList.remove('fly-out-wrong');
//     idx++;
//     answer.value = ''; answer.className = '';
//     updateProgress();
//     showCard();
//     answer.focus();
//   }, 360);
// });

// document.getElementById('nextSetBtn').addEventListener('click', initSession);
document.getElementById('restartBtn').addEventListener('click', () => {
  complete.classList.remove('show');
  initSession();
});

// ── Complete ──────────────────────────────────────────────────────────────
function showComplete() {
  cancelAnimationFrame(timerRaf);
  const avgWpm = sessionWpms.length ? Math.round(sessionWpms.reduce((a,b)=>a+b,0)/sessionWpms.length) : 0;
  const avgAcc = sessionAccs.length ? Math.round(sessionAccs.reduce((a,b)=>a+b,0)/sessionAccs.length) : 0;
  const totalSec = sessionStartTime ? ((Date.now() - sessionStartTime)/1000).toFixed(1) : '0.0';

  document.getElementById('compWpm').textContent  = avgWpm;
  document.getElementById('compAcc').textContent  = avgAcc + '%';
  document.getElementById('compTime').textContent = totalSec + 's';

  let emoji = '🎉', title = 'セット完了！', rankText = '', rankColor = '';
  if (avgAcc >= 95 && avgWpm >= 40) { emoji='🏆'; title='パーフェクト！'; rankText='完全無欠webデザイナー'; rankColor='#FFD166'; }
  else if (avgAcc >= 90) { emoji='✨'; title='よくできました！'; rankText='もしかしてプロ？'; rankColor='#06D6A0'; }
  else if (avgAcc >= 80) { emoji='👍'; title='いい調子！'; rankText='右肩上がり'; rankColor='#4361EE'; }
  else { emoji='💪'; title='よく頑張りました！'; rankText='駆け出しwebデザイナー'; rankColor='#EF476F'; }

  document.getElementById('compEmoji').textContent = emoji;
  document.getElementById('compTitle').textContent = title;
  document.getElementById('compSub').textContent   = `正解 ${correctCount} / ${queue.length} 問`;
  const rankEl = document.getElementById('compRank');
  rankEl.textContent = rankText;
  rankEl.style.background = rankColor + '22';
  rankEl.style.color = rankColor;
  rankEl.style.border = '2px solid ' + rankColor;

  complete.classList.add('show');

  // ── 間違い解説パネル ──
  const panel = document.getElementById('reviewPanel');
  panel.innerHTML = '';
  if (missedItems.length === 0) return;

  // セクションタイトル
  const secTitle = document.createElement('div');
  secTitle.className = 'review-section-title';
  secTitle.textContent = `📝 まちがえた/ヒントを見た単語の解説（${missedItems.length}件）`;
  panel.appendChild(secTitle);

  missedItems.forEach(item => renderReviewCard(item, panel));
}

// ── 解説カード描画 ────────────────────────────────────────────────────────
function renderReviewCard(item, panel) {
  const card = document.createElement('div');
  card.className = 'review-card';

  // ── ヘッダー ──
  card.innerHTML = `
    <div class="rc-head">
      <div class="rc-miss-badge">⚠</div>
      <div>
        <div class="rc-word">${item.en}</div>
        <div class="rc-ja">${item.ja}</div>
      </div>
    </div>
    <div class="rc-body" id="rcbody-${item.en.replace(/[^a-z0-9]/gi,'_')}"></div>
  `;
  panel.appendChild(card);

  const body = card.querySelector('.rc-body');
  const exp  = item.exp;

  // exp が文字列 → シンプル表示（後方互換）
  if (!exp || typeof exp === 'string') {
    body.innerHTML = `
      <div class="rc-block">
        <div class="rc-block-label"><span class="licon">📖</span> 解説</div>
        <div class="rc-etymology">${exp ?? item.hint ?? '（解説なし）'}</div>
      </div>`;
    return;
  }

  // ── 形態素ブロック ──
  if (exp.morphemes && exp.morphemes.length) {
    const colors = ['m-blue','m-green','m-red','m-yellow','m-purple'];
    let html = '<div class="rc-morphemes">';
    exp.morphemes.forEach((m, i) => {
      if (i > 0) html += '<div class="rc-morph-sep">+</div>';
      const c = colors[i % colors.length];
      html += `<div class="rc-morph ${c}">
        <div class="rc-morph-text">${m.text}</div>
        <div class="rc-morph-meaning">${m.meaning}</div>
      </div>`;
    });
    html += '</div>';
    body.innerHTML += `
      <div class="rc-block">
        <div class="rc-block-label"><span class="licon">🔤</span> 語の成り立ち</div>
        ${html}
      </div>`;
  }

  // ── 語源・意味説明 ──
  if (exp.etymology) {
    body.innerHTML += `
      <div class="rc-block">
        <div class="rc-block-label"><span class="licon">📖</span> 意味・解説</div>
        <div class="rc-etymology">${exp.etymology}</div>
      </div>`;
  }

  // ── コードスニペット ──
  if (exp.code) {
    const codeHtml = exp.code
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/\n/g,'<br>')
      .replace(/ /g,'&nbsp;');
    body.innerHTML += `
      <div class="rc-block">
        <div class="rc-block-label"><span class="licon">💻</span> コード例</div>
        <div class="rc-code">${codeHtml}</div>
      </div>`;
  }

  // ── 覚え方メモ ──
  if (exp.memo) {
    body.innerHTML += `
      <div class="rc-block">
        <div class="rc-block-label"><span class="licon">💡</span> 覚え方のポイント</div>
        <div class="rc-memo">${exp.memo}</div>
      </div>`;
  }
}

// ── Toast ─────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg, type = '') {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.className = 'toast show ' + type;
  toastTimer = setTimeout(() => { toast.className = 'toast'; }, 1600);
}

// ── Shuffle ───────────────────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

// ── Start ─────────────────────────────────────────────────────────────────
initSession();