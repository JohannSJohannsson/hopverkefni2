import { empty } from './helpers';

export default class Buttons {
  load() {
    empty(this.container);
  }

  createButtoncolor() {
    const values = JSON.parse('{"HTML":false, "CSS":false, "JavaScript":false}');
    const btnContainer = document.querySelector('.section__button');
    const btns = btnContainer.querySelectorAll('button');
    for (let i = 0; i < btns.length; i += 1) {
      const btnid = btns[i].getAttribute('id');
      btns[i].addEventListener('click', () => {
        if (values[btnid] === false) {
          console.log(values[btnid]);
          btns[i].classList.add('active');
          values[btnid] = true;
          // AddClass(btnid, 'show');
        } else if (values[btnid] === true) {
          console.log(values[btnid]);
          btns[i].classList.remove('active');
          values[btnid] = false;
          // RemoveClass(btnid, 'show');
        }
      });
    }
  }
}
