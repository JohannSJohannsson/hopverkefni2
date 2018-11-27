<<<<<<< HEAD
=======
// eslint-disable-next-line import/prefer-default-export
>>>>>>> 60c63589d7aee4c3e89209a60c461e182b953cb6
export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
<<<<<<< HEAD

export function el(name, ...children) {
  const element = document.createElement(name);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }

  return element;
}
=======
>>>>>>> 60c63589d7aee4c3e89209a60c461e182b953cb6
