import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.url = '../lectures.json';
    this.loadLectures();
  }

  loadLectures() {
    fetch(this.url).then(res => res.json()).then((data) => {
      // Work with JSON data here
      console.log(data); /*eslint-disable-line*/ 
      this.add(data);
    }).catch((err) => {
      console.log('error'); /*eslint-disable-line*/
    });
  }

  add(data) {
    for (let i = 0; i < data.lectures.length; i += 1) {
      const row = document.querySelector('.lectures__row');
      const col = document.createElement('div');
      col.setAttribute('class', 'lectures__col');
      const link = document.createElement('a');
      link.setAttribute('href', 'fyrirlestur.html');
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
    }
  }

  load() {
    empty(this.container);
    this.loadLectures();
  }
}
