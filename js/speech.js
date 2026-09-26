export function speak(text, { onStart, onEnd } = {}) {
  if (!window.speechSynthesis) {
    alert('Seu navegador não suporta síntese de voz.');
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 1.15;
  utterance.pitch = 1.0;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const ptVoice = voices.find(v => v.lang.startsWith('pt'));
  if (ptVoice) utterance.voice = ptVoice;

  utterance.onstart = () => onStart?.();
  utterance.onend = () => onEnd?.();
  utterance.onerror = () => onEnd?.();

  window.speechSynthesis.speak(utterance);
}

export function cancelSpeech() {
  window.speechSynthesis?.cancel();
}

export function preloadVoices() {
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }
}
