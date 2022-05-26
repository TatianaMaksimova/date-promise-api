import '../css/work-common.css';

// практически всегда при работе с датами используют библиотеку. День, неделя, месяц, год - библиотека: date-fns
// Для таймера библиотека не нужна.
// UNIX время: 1 января 1970 00:00 - точка отсчета

// 1. Создание времени

// const date = new Date(326364634);
// console.log(date);
// console.dir(date);
// console.log(date.getMonth());
// console.log(date.getTime());

// const date1 = new Date().getTime();
// Создает целый объект с методами

const date1 = Date.now();
// не создает экземпляр, создает текущее значение времени в мсек. Мы не создаем объекты как в случае с 'new Date()';
// console.log('date1', date1);

setTimeout(() => {
  //   const date2 = new Date().getTime();
  const date2 = Date.now();
  //   console.log('date1', date1);
  //   console.log('date2', date2);

  //   console.log(date2 - date1);
}, 3000);
