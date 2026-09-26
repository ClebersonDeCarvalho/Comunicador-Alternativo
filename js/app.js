import { preloadVoices, speak } from './speech.js';
import { renderGrid, renderPhrase, renderCategories, setSpeakingState } from './ui.js';

let activeCategory = 'all';
let phrase = [];

function addToPhrase(sym) {
  speak(sym.label);
  phrase.push({ ...sym });
  renderPhrase(phrase, removeFromPhrase);
}

function removeFromPhrase(index) {
  phrase.splice(index, 1);
  renderPhrase(phrase, removeFromPhrase);
}

function clearPhrase() {
  phrase = [];
  renderPhrase(phrase, removeFromPhrase);
}

function setCategory(cat) {
  activeCategory = cat;
  renderCategories(activeCategory);
  renderGrid(activeCategory, addToPhrase);
}

function speakPhrase() {
  if (phrase.length === 0) return;
  const text = phrase.map(p => p.label).join(' ');
  speak(text, {
    onStart: () => setSpeakingState(true),
    onEnd: () => setSpeakingState(false)
  });
}

document.getElementById('btnSpeak').addEventListener('click', speakPhrase);
document.getElementById('btnClearAll').addEventListener('click', clearPhrase);
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => setCategory(btn.dataset.category));
});

preloadVoices();
renderGrid(activeCategory, addToPhrase);
renderPhrase(phrase, removeFromPhrase);
renderCategories(activeCategory);
