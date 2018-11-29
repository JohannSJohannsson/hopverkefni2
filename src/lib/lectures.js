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
        let content2 = '';
        let cdlist = '';
        let cid = '';
        let cattr = '';
        let caption = '';
        let video = '';
        let txt = '';
        switch (content[x].type) {
          case 'youtube':
            content1 = document.createElement('div');
            content1.setAttribute('class', 'iframe__container');
            video = document.createElement('iframe');
            video.setAttribute('class', 'iframe__video');
            video.setAttribute('frameborder', 0);
            video.setAttribute('allowfullscreen', 0);
            video.setAttribute('src', content[x].data);
            content1.appendChild(video);
            break;
          case 'text':
            content1 = document.createElement('div');
            content1.setAttribute('class', 'efni__texti');
            txt = (content[x].data).split('\n');
            console.log(txt);
            for(let j = 0; j < txt.length; j += 1) {
              if(txt[j].length > 0) {
                content2 = document.createElement('p');
                content2.setAttribute('class', 'texti');
                content1.appendChild(content2);
                cid = document.createTextNode(txt[j]);
                content2.appendChild(cid);
              }
            }

            break;
          case 'quote':
            content1 = document.createElement('blockquote');
            content1.setAttribute('class', 'efni__bquote');
            cid = document.createTextNode(content[x].data);
            if (content[x].attribute) {
              cattr = document.createElement('cite');
              cattr.setAttribute('class', 'efni__bquote__cite')
              content1.appendChild(cid);
              content1.appendChild(document.createElement('br'))
              content1.appendChild(cattr);
              cattr.appendChild(document.createTextNode(content[x].attribute));
            } else {
              content1.appendChild(cid);
            }
            break;
          case 'heading':
            content1 = document.createElement('h2');
            content1.setAttribute('class', 'efni__heading')
            cid = document.createTextNode(content[x].data);
            content1.appendChild(cid);
            break;
          case 'list':
            content1 = document.createElement('ul');
            content1.setAttribute('class', 'efni__list')
            for (let l = 0; l < content[x].data.length; l += 1) {
              cdlist = document.createElement('li');
              cdlist.setAttribute('class', 'efni__list__link')
              const cd = document.createTextNode(content[x].data[l]);
              cdlist.appendChild(cd);
              content1.appendChild(cdlist);
            }
            break;
          case 'image':
            content1 = document.createElement('div');
            content1.setAttribute('class', 'efni__img')
            content2 = document.createElement('img');
            content2.setAttribute('src', content[x].data);
            content1.appendChild(content2);
            if (content[x].caption) {
              caption = document.createElement('figcaption');
              caption.setAttribute('class', 'efni__img__caption')
              content1.appendChild(caption);
              caption.appendChild(document.createTextNode(content[x].caption));
            }

            break;
          case 'code':
            content1 = document.createElement('code');
            content1.setAttribute('class', 'efni__code')
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
