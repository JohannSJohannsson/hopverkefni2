import { empty, el } from './helpers';

const lectures = '../lectures.json?slug=';

const program = (() => {
  let haus;

  function displayItems(content, title, smalltext) {
    const titleElement = document.createElement('header__title');
    titleElement.appendChild(document.createTextNode(title));
    content.appendChild(titleElement);

    const smalltextElement = document.createElement('header__smalltext');
    smalltextElement.appendChild(document.createTextNode(smalltext));
    content.appendChild(smalltextElement);

    /* container */
    const container = haus.querySelector('.header');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(content);
  }

  function displayHeader(headerList) {
    const [{
      title, category,
    }] = headerList;
    const content = document.createElement('header__content');
    displayItems(content, title, category);
  }
  function fetchData(number) {
    fetch(`${lectures}${number}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Villa kom upp');
      })
      .then((data) => {
        displayHeader(data.header);
      });
  }

  function init(_haus) {
    haus = _haus;

    const form = haus.querySelector('form');
    form.addEventListener('submit', /* fall */);
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const haus = document.querySelector('.header');
  program.init(haus);
});
