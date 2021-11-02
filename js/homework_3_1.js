/*Последовательно ввести 2 числа.
На отрезке из введенных чисел подсчитать количество чисел кратных 6 и сумму этих чисел.
Вывести ответ одним уведомлением.*/

let D1 = prompt('Введите первое число', '0');
D1 = Number(D1);
let D2 = prompt('Введите второе число', '0');
D2 = Number(D2);
let result = 0;
let count = 0;
if (isNaN(D1) || isNaN(D2)) {
   alert('Введите число'); 
   } else if (D2>D1) {
      for (let n = D1; n <= D2; n++) {
         if (n % 6 === 0 && n!== 0) {
            count = count + 1;
            result = result + n;
         }
      }
   } else if (D1>D2) {
      for (let n = D2; n <= D1; n++) {
         if (n % 6 === 0 && n!== 0) {
            count = count + 1;
            result = result + n;
         }
      }
   }
alert(`Сумма этих чисел: ${result}, количество чисел кратных 6: ${count}`);