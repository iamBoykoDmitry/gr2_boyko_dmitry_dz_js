//Напишите функцию get_min( arr ), которая находит минимальное значение в заданном массиве.

let array = [11, 12, 3, 4, 9, 20, 10, 25, 60, 112];
function get_min(arr) {
   arr.sort((a, b) => a - b);
   return arr[0];
}
let res = get_min(array);
console.log('Минимальное значение', res);

//Создайте массив с четными числами в диапазоне от 500 до 888 включительно.

let start = prompt(`Начало`);
let end = prompt(`Конец`);
function plus_numbers(start, end) {
   let array = [];
   for (let i = start; i <= end; i++) {
      if(i % 2 === 0) {
         array.push(i);
      }
   }  
   console.log(array);
}
let result = plus_numbers(start, end);

/*Необходимо написать функцию, которая принимает слово в виде строки, 
функция будет возвращать слово с буквами в обратном порядке, 
например в функцию передаем слово “ТЕЛЕФОН”, на выходе имеем слово «НОФЕЛЕТ».*/

let str = prompt(`Введите текст`);
function string_toarray(str) {
   return str.split("").reverse().join("");
}
let result2 = string_toarray(str);
alert(result2);

