import { empty } from './helpers';

export default class Buttons {
  createButtoncolor() {
    const button = document.querySelector('button');
    let nidri = false;
    button.addEventListener('mousedown', (event) => {
      if (event.button === 0) {
        if (nidri === false) {
          button.setAttribute('style', 'background-color: #2d2');
          nidri = true;
        } else if (nidri === true) {
          button.setAttribute('style', 'background-color: #ccc');
          nidri = false;
        }
      }
      console.log(nidri);
    });
  }

  load() {
    empty(this.container);
  }
}
