/* Ætluðum að hafa virkni fætis hér, en náðum ekki á tíma svo hún er í fyrirlestur.html */
export default class Footer {
  createFooterbutton() {
    const url = `${window.location.search}`;
    const slug = url.substring(1);
    const takki = document.querySelector('.klara');
    const clist = [];
    let exist = false;
    let graenn = false;

    takki.addEventListener('click', () => {
      const text = document.getElementById('green').firstChild;
      text.data = text.data === 'Klára fyrirlestur' ? '✓ Fyrirlestur kláraður' : 'Klára fyrirlestur';
      if (graenn === false) {
        takki.classList.add('graenn');
        graenn = true;
      } else if (graenn === true) {
        takki.classList.remove('graenn');
        graenn = false;
      }
      const OldCheck = localStorage.getItem('check');
      localStorage.setItem('check', JSON.stringify(clist));

      const checkList = JSON.parse(localStorage.getItem('check'));
      const s = slug.split('=');
      checkList.push(`${OldCheck},${s[1]}`);

      localStorage.setItem('check', checkList);

      const splitt = OldCheck.split(',');
      for (let x = 0; x < splitt.length; x += 1) {
        if (splitt[x] === s[1]) {
          exist = true;
        } else {
          exist = false;
        }
      }
      if (exist) {
        checkList.push(OldCheck);
      } else {
        // empty
      }
    });
  }
}
