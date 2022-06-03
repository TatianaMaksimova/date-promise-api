import '../css/common.css';

// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

const TIME_DELAY = 1000;
let intervalID = null;

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', onChangeColor);
refs.stopBtn.addEventListener('click', onStopChange);

function onChangeColor() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  intervalID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, TIME_DELAY);
}

function onStopChange(e) {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(intervalID);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
