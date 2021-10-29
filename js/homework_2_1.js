/* Ввести с помощью функции prompt любое число и вывести в уведомление в таком формате:
      1 день
      2 дня
      5 дней
      17 дней
      35 дней
      1532 дня.  */ 

let days = prompt('Введите число', 0);
days = Number(days);
let oneDay = days % 100;
oneDay = Number(oneDay);

if (isNaN(days)) {
   alert('Не числовое значение');
} else if (oneDay >= 0 && oneDay <= 20) {
   if (oneDay == 1) {
      alert(`${days} день`);
   } else if (oneDay == 0 || oneDay >= 5 && oneDay <= 20) {
      alert(`${days} дней`);
   } else if (oneDay >= 2 && oneDay <= 4) {
      alert(`${days} дня`);
   }
}
else { let oneDay = days % 10;
   if (oneDay >= 2 && oneDay <= 4) {
      alert(`${days} дня`);
   } else if (oneDay == 1) {
      alert(`${days} день`);
   } else if (oneDay == 0 || oneDay >= 5 && oneDay <= 9) {
      alert(`${days} дней`);
   }
}
