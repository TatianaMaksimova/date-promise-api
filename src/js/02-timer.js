// Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты. Такой таймер может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т.д.

// Добавь минимальное оформление элементов интерфейса.

// Используй библиотеку flatpickr для того чтобы позволить пользователю кроссбраузерно выбрать конечную дату и время в одном элементе интерфейса.

import '../css/common.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  daysValue: document.querySelector('span[data-days]'),
  hoursValue: document.querySelector('span[data-hours]'),
  minutesValue: document.querySelector('span[data-minutes]'),
  secondsValue: document.querySelector('span[data-seconds]'),
};

const INTERVAL = 1000;
let intervalID = null;
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // refs.startBtn.disabled = true;

    if (selectedDates[0] < new Date()) {
      return Notify.warning('Please choose a date in the future');
    }

    clearInterval(intervalID);
    refs.startBtn.disabled = false;

    function onTimerStarts() {
      intervalID = setInterval(() => {
        const deltaTime = selectedDates[0] - new Date();

        if (deltaTime < 1000) {
          clearInterval(intervalID);
        }

        const theLastTime = convertMs(deltaTime);
        updateTime(theLastTime);
      }, INTERVAL);
    }
    refs.startBtn.addEventListener('click', onTimerStarts);

    // console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}

function updateTime({ days, hours, minutes, seconds }) {
  refs.daysValue.textContent = `${days}`;
  refs.hoursValue.textContent = `${hours}`;
  refs.minutesValue.textContent = `${minutes}`;
  refs.secondsValue.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  // padStart();
  return `${value}`.padStart(2, '0');
}
