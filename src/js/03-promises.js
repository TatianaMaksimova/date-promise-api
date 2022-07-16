import '../css/common.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  submitBtn: document.querySelector('button'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

refs.submitBtn.addEventListener('click', onClickBtn);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполняется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.

function onClickBtn(e) {
  e.preventDefault();

  for (let position = 1; position <= refs.amount.value; position += 1) {
    createPromise(position, refs.delay.value)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        }, refs.delay.value);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        }, refs.delay.value);
      });
  }
}

//  ✅
//  ❌
