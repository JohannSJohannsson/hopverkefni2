/* eslint-disable func-names */
import { empty } from './helpers';

export default class Lectures {
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
        console.log(myArr.lectures);
        createHeader(myArr); /* eslint-disable-line */
        createMain(myArr);  /* eslint-disable-line */
      }
    };
    xhttp.open('GET', this.url, true);
    xhttp.send();
  }


  load() {
    empty(this.container);
  }
}

function createHeader(data) {
  const params = new URLSearchParams(document.location.search);
  const slug = params.get('slug');

  for (let i = 0; i < data.lectures.length; i += 1) {
    if (slug === data.lectures[i].slug) {
      const header = document.querySelector('.header');
      const content = document.querySelector('.header__content');
      if (data.lectures[i].image) {
        header.setAttribute('style', `background-image: url(../${data.lectures[i].image})`);
      } else {
        header.setAttribute('style', 'background-color: #999');
      }
      const smalltext = document.createElement('p');
      smalltext.setAttribute('class', 'header__smalltext');
      const smltxt = document.createTextNode(data.lectures[i].category);
      smalltext.appendChild(smltxt);
      const title = document.createElement('h2');
      const ttle = document.createTextNode(data.lectures[i].title);
      title.setAttribute('class', 'header__title');
      title.appendChild(ttle);
      content.appendChild(smalltext);
      content.appendChild(title);
    }
  }
}

function createMain(data) {
  const params = new URLSearchParams(document.location.search);
  const slug = params.get('slug');

  for (let i = 0; i < data.lectures.length; i += 1) {
    if (slug === data.lectures[i].slug) {
      const efni = document.querySelector('.efni');
      for (let x = 0; i < data.lectures.length; x += 1) {
        const content = data.lectures[i].content; /* eslint-disable-line */
        let content1 = '';
        let cdlist = '';
        let cid = '';
        let video = '';
        switch (content[x].type) {
          case 'youtube':
            content1 = document.createElement('div');
            content1.setAttribute('class', 'iframe__container');
            video = document.createElement('iframe');
            video.setAttribute('frameborder', 0);
            video.setAttribute('allowfullscreen', 0);
            video.setAttribute('src', content[x].data);
            content1.appendChild(video);
            break;
          case 'text':
            content1 = document.createElement('p');
            cid = document.createTextNode(content[x].data);
            content1.appendChild(cid);
            break;
          case 'quote':
            content1 = document.createElement('blockquote');
            cid = document.createTextNode(content[x].data);
            content1.appendChild(cid);
            break;
          case 'heading':
            content1 = document.createElement('h2');
            cid = document.createTextNode(content[x].data);
            content1.appendChild(cid);
            break;
          case 'list':
            content1 = document.createElement('ul');
            for (let l = 0; l < content[x].data.length; l += 1) {
              cdlist = document.createElement('li');
              const cd = document.createTextNode(content[x].data[l]);
              cdlist.appendChild(cd);
              content1.appendChild(cdlist);
            }
            break;
          case 'image':
            content1 = document.createElement('img');
            content1.setAttribute('src', content[x].data);

            break;
          case 'code':
            content1 = document.createElement('code');
            cid = document.createTextNode(content[x].data);
            content1.appendChild(cid);
            break;
          default:
        }
        efni.appendChild(content1);
      }
    }
  }
}
