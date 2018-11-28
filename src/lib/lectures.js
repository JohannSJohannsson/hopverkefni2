/*eslint-disable*/
import { empty } from './helpers';

export default class Lectures {
    constructor() {
      this.container = document.querySelector('.list');
      this.url = '../lectures.json';
      this.loadLectures();
    }
  
    loadLectures() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var myArr = JSON.parse(this.responseText);
              console.log(myArr['lectures']);
              createContent(myArr);
          }
      };
      xhttp.open("GET", this.url, true);
      xhttp.send();
      
  }
  
  
    load() {
      empty(this.container);
    }
  }

function createContent(data) {
    const params = new URLSearchParams(document.location.search);
    const slug = params.get('slug');

    for (let i in data.lectures) {
      if (slug == data.lectures[i].slug) {
        const header = document.querySelector('.header');
        const content = document.querySelector('.header__content');
        if (data.lectures[i].image) {
            header.setAttribute('style', `background-image: url(../${  data['lectures'][i].image  })`);
        }
        else {
            header.setAttribute('style', `background-color: #999`);
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