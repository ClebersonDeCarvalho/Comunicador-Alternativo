export function SymbolCard(sym, index, onClick) {
  const card = document.createElement('button');
  card.className = `symbol-card cat-${sym.category}`;
  card.id = `sym-${sym.id}`;
  card.setAttribute('aria-label', sym.label);
  card.style.animationDelay = `${index * 0.025}s`;

  const img = document.createElement('img');
  img.src = sym.icon;
  img.alt = sym.label;
  img.className = 'symbol-image';
  img.draggable = false;

  const text = document.createElement('span');
  text.textContent = sym.label;
  text.className = 'symbol-text';

  card.appendChild(img);
  card.appendChild(text);
  card.addEventListener('click', () => onClick(sym, card));
  return card;
}
