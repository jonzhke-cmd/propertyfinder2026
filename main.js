class TotoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'toto-generator');

    const heading = document.createElement('h2');
    heading.textContent = 'Your Lucky Numbers:';

    const numbersContainer = document.createElement('div');
    numbersContainer.setAttribute('class', 'numbers');

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';

    button.addEventListener('click', () => {
      this.generateNumbers(numbersContainer);
    });

    shadow.appendChild(heading);
    shadow.appendChild(numbersContainer);
    shadow.appendChild(button);

    this.generateNumbers(numbersContainer);
  }

  generateNumbers(container) {
    container.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 49) + 1);
    }

    for (const number of [...numbers].sort((a, b) => a - b)) {
      const numberElement = document.createElement('div');
      numberElement.setAttribute('class', 'number');
      numberElement.textContent = number;
      container.appendChild(numberElement);
    }
  }
}

customElements.define('toto-generator', TotoGenerator);
