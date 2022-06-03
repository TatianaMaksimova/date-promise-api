import '../css/work-common.css';

const horses = ['Secretariat', 'Eclipse', 'West Australian', 'Flying Fox', 'Seabiscuit'];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateWinnerField('');
  updateProgressField('🤖 Заезд начался, ставки не принимаются!');
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}
      времени`);
    updateResultsTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField('📝 Заезд окончен, принимаются ставки.');
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

// console.log('%c 🤖 Заезд начался, ставки не принимаются!', 'color: red; font-size: 14px;');

// const promises = horses.map(horse => run(horse)); //// выше короткая запись

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */

// =========================Самая быстрая лошадь:
// Promise.race(promises).then(({ horse, time }) => {
//   console.log(
//     `%c 🎉 Победил ${horse}, финишировав за ${time}
//     времени`,
//     'color: green; font-size: 14px;',
//   );
// });
// 1
// 2
// 3
// 4

/*
 * Promise.all([]) для ожидания всех промисов
 */

// Promise.all(promises).then(() => {
//   console.log('%c 📝 Заезд окончен, принимаются ставки.', 'color: blue; font-size: 14px;');
// });

// run('qwe').then(x => console.log(x));

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2500, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
