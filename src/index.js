import List from './lib/list';
import Lectures from './lib/lectures';
import Buttons from './lib/button';
import Footer from './lib/fotur';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    const lectures = new Lectures();
    lectures.load();
    const footer = new Footer();
    footer.createFooterbutton();
  } else {
    const list = new List();
    const button = new Buttons();
    button.createButtonFunction();
    list.load();
  }
});
