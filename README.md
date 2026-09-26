# Comunicador Alternativo

Autores: Ana Luiza Batistel Scorsim, Cleberson de Carvalho e Maria Luiza Fica Borges.

Um aplicativo web acessível de **Comunicação Alternativa e Aumentativa (CAA)** desenvolvido para facilitar a comunicação e a autonomia de pessoas não verbais ou com dificuldades na fala.

---

## O que faz?

- **Seleção visual intuitiva**: Apresenta símbolos organizados por categorias coloridas (*Sim/Não*, *Alimentos*, *Sentimentos* e *Ações*).
- **Montagem de frases**: Ao clicar ou tocar em um pictograma, a palavra é falada em voz alta e adicionada à barra de frases.
- **Leitura em voz alta**: O botão **Falar** vocaliza a frase completa montada pelo usuário.
- **Gerenciamento da frase**: Permite remover palavras individualmente ou limpar toda a frase com o botão de lixeira.
- **Navegação facilitada**: Filtre os cartões rapidamente pelas abas de categorias.

---

## Para que serve?

Serve como ferramenta de apoio à comunicação para pessoas com necessidades complexas de comunicação, incluindo:
- Pessoas no espectro autista (TEA);
- Pessoas com paralisia cerebral, síndrome de Down ou afasia;
- Pessoas em recuperação de AVC ou com traqueostomia;
- Crianças em fase de desenvolvimento ou com atraso de fala.

O comunicador permite expressar respostas rápidas, vontades, sensações e necessidades do cotidiano de forma prática, inclusiva e independente.

---

## Onde salva as informações?

- **Memória de execução (RAM)**: As frases e seleções são gerenciadas no estado interno da aplicação durante a sessão no navegador.
- **Privacidade total**: Nenhuma informação pessoal ou frase montada é enviada para servidores ou bancos de dados externos.
- **Ao recarregar ou fechar**: A frase atual é reiniciada limpa, pronta para um novo uso.

---

## Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura acessível com tags semânticas e atributos ARIA para leitores de tela.
- **CSS3 Moderno**: 
  - Variáveis CSS (*Custom Properties*) para personalização rápida de cores;
  - Flexbox e CSS Grid para alinhamento e grade de símbolos;
  - Media queries e layout fluido 100% responsivo para celulares, tablets e computadores;
  - Animações e transições suaves ao toque.
- **JavaScript Vanilla (ES6+ Modules)**: Código limpo, componentizado e modularizado sem necessidade de frameworks ou dependências externas pesadas.
- **Web Speech API (`SpeechSynthesis`)**: Recurso nativo dos navegadores para síntese e pronúncia por voz em português (*pt-BR*).
- **Font Awesome 6**: Ícones para os botões e categorias.
- **Google Fonts (Nunito)**: Tipografia arredondada, amigável e legível.
- **SVGRepo**: Ilustrações vetoriais leves em SVG para representar os pictogramas.

---

## Como executar

Basta abrir o arquivo `index.html` em qualquer navegador moderno ou executá-lo através de um servidor local (como Live Server no VS Code). O aplicativo é totalmente compatível com dispositivos móveis (smartphones e tablets).
