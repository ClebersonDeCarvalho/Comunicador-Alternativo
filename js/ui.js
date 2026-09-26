import { SYMBOLS } from './data.js';
import { SymbolCard } from './components/symbolCard.js';
import { PhraseToken } from './components/phraseToken.js';

const grid = document.getElementById('symbolsGrid');
const tokensList = document.getElementById('phraseTokens');
const btnSpeak = document.getElementById('btnSpeak');
const btnClear = document.getElementById('btnClearAll');

export function renderGrid(activeCategory, onSymbolClick) {
  const filtered = activeCategory === 'all'
    ? SYMBOLS
    : SYMBOLS.filter(s => s.category === activeCategory);

  grid.innerHTML = '';

  filtered.forEach((sym, i) => {
    const card = SymbolCard(sym, i, (sym, cardEl) => {
      cardEl.style.transform = 'scale(0.88)';
      setTimeout(() => {
        cardEl.style.transform = '';
      }, 160);
      onSymbolClick(sym);
    });
    grid.appendChild(card);
  });
}

export function renderPhrase(phrase, onRemove) {
  tokensList.innerHTML = '';

  if (phrase.length === 0) {
    const emptyMessage = document.createElement('span');
    emptyMessage.className = 'empty-message';
    emptyMessage.textContent = 'Toque nas palavras abaixo para montar sua frase...';
    tokensList.appendChild(emptyMessage);
    btnSpeak.disabled = true;
    btnClear.classList.add('empty');
    return;
  }

  btnSpeak.disabled = false;
  btnClear.classList.remove('empty');

  phrase.forEach((item, index) => {
    tokensList.appendChild(PhraseToken(item, index, onRemove));
  });

  tokensList.scrollLeft = tokensList.scrollWidth;
}

export function renderCategories(activeCategory) {
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === activeCategory);
  });
}

export function setSpeakingState(speaking) {
  btnSpeak.classList.toggle('is-speaking', speaking);
}
