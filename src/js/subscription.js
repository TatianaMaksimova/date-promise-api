import '../css/work-common.css';
import BSN from 'bootstrap.native';

const refs = {
  modal: document.getElementById('exampleModal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#exampleModal');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Максимальное кол-во открытий модалки или подписался');
    return;
  }

  setTimeout(() => {
    console.log('Открываем модалку');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}

// ----------------setInterval()-------------------

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Нужно остановить интервал');
//     clearInterval(intervalId);
//     return;
//   }

//   console.log('Подпишись на рассылку! - ' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);
