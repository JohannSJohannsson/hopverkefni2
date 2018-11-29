/* eslint-disable no-loop-func */
function AddClass(element) {
  const k = document.querySelectorAll(`.${element}`);
  for (let i = 0; i < k.length; i += 1) {
    k[i].classList.add('valid');
  }
}

function RemoveClass(element) {
  const k = document.querySelectorAll(`.${element}`);
  for (let i = 0; i < k.length; i += 1) {
    k[i].classList.remove('valid');
  }
}

function AddToAll() {
  const k = document.querySelectorAll('.lectures__col');
  for (let i = 0; i < k.length; i += 1) {
    k[i].classList.add('valid');
  }
}

function RemoveFromAll() {
  const k = document.querySelectorAll('.lectures__col');
  for (let i = 0; i < k.length; i += 1) {
    k[i].classList.remove('valid');
  }
}

export default class Buttons {
  createButtonFunction() {
    const values = JSON.parse('{"html":false, "css":false, "javascript":false}');
    const btnContainer = document.querySelector('.section__button');
    const btns = btnContainer.querySelectorAll('button');
    let clicks = 0;
    for (let i = 0; i < btns.length; i += 1) {
      const btnid = btns[i].getAttribute('id');
      btns[i].addEventListener('click', () => {
        clicks += 1;
        if (clicks === 1) {
          RemoveFromAll();
        }
        if (values[btnid] === false) {
          btns[i].classList.add('active');
          values[btnid] = true;
          AddClass(btnid);
        } else if (values[btnid] === true) {
          btns[i].classList.remove('active');
          values[btnid] = false;
          RemoveClass(btnid);
          if (values.html === false && values.css === false && values.javascript === false) {
            AddToAll();
            clicks = 0;
          }
        }
      });
    }
  }
}
