/* eslint-disable func-names */
import { empty } from './helpers';

function add(data) {
  for (let i = 0; i < data.lectures.length; i += 1) {
    const row = document.querySelector('.lectures__row');
    const col = document.createElement('div');
    // eslint-disable-next-line no-useless-concat
    col.setAttribute('class', `lectures__col ${data.lectures[i].category}` + ' valid');
    const link = document.createElement('a');
    link.setAttribute('href', `fyrirlestur.html?slug=${data.lectures[i].slug}`);
    const image = document.createElement('div');
    image.setAttribute('class', 'lectures__image');
    const img = document.createElement('img');
    if (data.lectures[i].thumbnail) {
      img.setAttribute('src', data.lectures[i].thumbnail);
      img.setAttribute('alt', data.lectures[i].title);
    }

    const banner = document.createElement('div');
    banner.setAttribute('class', 'lectures__banner');
    const chapter = document.createElement('p');
    chapter.setAttribute('class', 'lectures__chapter');
    const cat = document.createTextNode(data.lectures[i].category);
    chapter.appendChild(cat);
    const title = document.createElement('h2');
    title.setAttribute('class', 'lectures__title');
    const tit = document.createTextNode(data.lectures[i].title);
    title.appendChild(tit);
    row.appendChild(col);
    col.appendChild(link);
    link.appendChild(image);
    image.appendChild(img);
    link.appendChild(banner);
    banner.appendChild(chapter);
    banner.appendChild(title);

    const checkmerki = localStorage.getItem('check');

    const splitt = checkmerki.split(',');
    for (let x = 0; x < splitt.length; x += 1) {
      if (splitt[x] === data.lectures[i].slug) {
        const merki = document.createElement('p');
        merki.setAttribute('class', 'merki');
        const merkiTxt = document.createTextNode('CHECK');
        merki.appendChild(merkiTxt);
        banner.appendChild(merki);
      }
    }
  }
}

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.url = '../lectures.json';
    this.loadLectures();
  }

  loadLectures() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const myArr = JSON.parse(this.responseText);
        add(myArr);
      }
    };
    xhttp.open('GET', this.url, true);
    xhttp.send();
  }

  load() {
    empty(this.container);
    this.loadLectures();
  }
}
