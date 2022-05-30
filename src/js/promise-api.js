import '../css/work-common.css';

// const promise = new Promise((resolve, reject) => {
//   const canFulfilles = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfilles) {
//       resolve('Промис выполнился успешно (fulfilled)');
//     }

//     reject('Промис выполнился с ошибкой (rejected)');
//   }, 2000);
// });

// then(onSuccess, onError);
// console.log(`✅ ${result}`);
// console.log(`❌ ${error}`);

// promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log(result);
// }

// function onRejected(error) {
//   console.log(error);
// }

// =================Цепочки промисов (chaining)=============
// =================Promise.prototype.catch(error)==========
// =================Promise.prototype.finally()=============

// promise
//   .then(result => {
//     console.log(result);

//     return 3;
//   })
//   .then(x => {
//     console.log(x);

//     return 20;
//   })
//   .then(y => {
//     console.log(y);
//   });

// ============================================
// promise
//   .then(onFulfilled, onRejected)
//   .then(
//     x => {
//       console.log(x);

//       throw new Error('ошибка во втором then');

//       return 20;
//     },
//     error => console.log(error),
//   )
//   .then(
//     y => console.log(y),
//     error => console.log(error),
//   );

// ===============================================

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);
//     // throw new Error('ошибка во втором then');
//     return 20;
//   })
//   .then(y => console.log(y))
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду выполнен в любом случае'));

// ! В then выносим только успешное выполнение промиса, а неуспешное в catch, в конце цепочки.
