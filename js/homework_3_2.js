/*Написать программу, которая должна за минимальное количество
попыток отгадать задуманное пользователем число от 0 до 100*/
const MAX_COUNT_ATTEMPT = 10;
let min = 0;
let max = 100;
let attempts = 0;
for (let i=attempts; i<MAX_COUNT_ATTEMPT; i++) {
   attempts++;
   let n = min + (max-min) / 2;
   let answer = confirm(`Ваше число ${n}?`);
   if (answer) {
      break
   } else {
      let answer2 = confirm(`Ваше число больше ${n}?`);
      if (answer2) {
         min=n;
      } else {
         max=n;
      }
   }
}
alert(`Я угадал за ${attempts} попыток`);