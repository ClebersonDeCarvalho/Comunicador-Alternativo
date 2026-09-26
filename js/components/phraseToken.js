export function PhraseToken(item, index, onRemove) {
  const token = document.createElement('div');
  token.className = `token cat-${item.category}`;
  token.setAttribute('aria-label', item.label);

  const img = document.createElement('img');
  img.src = item.icon;
  img.alt = item.label;
  img.className = 'token-image';
  img.draggable = false;

  const text = document.createElement('span');
  text.textContent = item.label;

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.setAttribute('aria-label', `Remover ${item.label}`);
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  removeBtn.addEventListener('click', () => onRemove(index));

  token.appendChild(img);
  token.appendChild(text);
  token.appendChild(removeBtn);
  return token;
}
