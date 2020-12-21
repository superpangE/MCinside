import { getLabel, getButton, getContainer } from '../common.js';

const GoodButton = (id) => {
  const Goodclick = async () => {
    const response = await fetch('http://localhost:3000/check', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        BoardId: id,
      }),
    });
    const data = await response.json();
    if (data.status == true) {
      let good = document.getElementsByClassName('good_click')[0].textContent;
      document.getElementsByClassName('good_click')[0].textContent = ++good;
    } else alert('login plz');
  };
  const Badclick = async () => {
    const response = await fetch('http://localhost:3000/check', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        BoardId: id,
      }),
    });
    const data = await response.json();
    if (data.status == true) {
      let bad = document.getElementsByClassName('bad_click')[0].textContent;
      document.getElementsByClassName('bad_click')[0].textContent = ++bad;
    } else alert('login plz');
  };

  const MainContainer = getContainer(null, 'btn_wrap');

  const SelectWrap = getContainer(null, 'select_wrap');
  const BottomWrap = getContainer(null, 'bottom_wrap');

  const GoodClick = getLabel('good_click', 0);
  const GoodBtn = getButton('good_button', '개념');
  const BadBtn = getButton('bad_button', '비추');
  const BadClick = getLabel('bad_click', 0);

  const AddHit = getButton('add_hit', '힛추');
  const ShareBtn = getButton('share_btn', '공유');
  const ReportBtn = getButton('report_btn', '신고');

  BottomWrap.insertAdjacentElement('beforeend', AddHit);
  BottomWrap.insertAdjacentElement('beforeend', ShareBtn);
  BottomWrap.insertAdjacentElement('beforeend', ReportBtn);

  SelectWrap.insertAdjacentElement('beforeend', GoodClick);
  SelectWrap.insertAdjacentElement('beforeend', GoodBtn);
  SelectWrap.insertAdjacentElement('beforeend', BadBtn);
  SelectWrap.insertAdjacentElement('beforeend', BadClick);

  MainContainer.insertAdjacentElement('beforeend', SelectWrap);
  MainContainer.insertAdjacentElement('beforeend', BottomWrap);

  GoodBtn.addEventListener('click', Goodclick);
  BadBtn.addEventListener('click', Badclick);

  return MainContainer;
};
export default GoodButton;
