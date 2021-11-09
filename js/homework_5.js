/*Написать функцию count_symbol( symbol, string ), которая подсчитает 
количество указанного символа symbol, в строке string. 
Функция должна быть регистронезависимой и вернуть число*/

let string = prompt('Введите ваш текст для подсчета');
let symbol = prompt('Введите символ');
string = string.toLowerCase();
symbol = symbol.toLowerCase();
function count_symbol( symbol, string) {
   let result = 0;
   for (i = 0; i < string.length; i++) {
      if (string[i] === symbol) {
         result++;
      }
   }
   return result;
}
console.log (count_symbol( symbol, string));

/*Напишите функцию get_string_length(str), которая в качестве аргумента 
принимает строку str и возвращает её длину, предварительно удалив из строки все 
пробелы (для решения данной задачи обязательно использовать цикл).*/

function get_string_length(str) {
   let without_space = '';
   for(i = 0; i < str.length; i++) {
      if(str[i] !== ' ') {
         without_space += str[i];
      }
   }
   return without_space.length;
}
let strin = 'hello my dear friend =)';
console.log(get_string_length(strin));

/*Напишите функцию up_first(str), которая возвращает строку str с заглавным первым символом, 
остальные символы должны быть в нижнем регистре (пример: up_first("иванов"), 
должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")*/

function up_first(str) {
	let firstChar = str.slice(0, 1).toUpperCase();
   let anotherChars = str.slice(1).toLowerCase();
return firstChar + anotherChars;
}
	console.log(up_first('иванов'));

/*Напишите функцию search_string(search, string), которая будет проверять наличие 
подстроки search в строке string. Функция должна вернуть булев тип и быть 
регистронезависимой (использовать метод indexOf)*/

let string1 = prompt('Введите предложение');
string1 = string1.toLowerCase();
let search = prompt('Введите значение');
search = search.toLowerCase();
function search_string1() {
if (string1.indexOf(search) !== -1) {
      return alert(true);
   } else {
      return alert(false);
   }
}
console.log(search_string1());

/*Напишите функцию truncate(str, maxlength), которая проверяет длину строки str, и если 
она превосходит maxlength – заменяет конец str на "...",
так чтобы ее длина стала равна maxlength.*/

let str = prompt("Введите строку");
function truncate(str, maxlength) {
   if (str.length >= maxlength) {
      let slice = str.slice(0, maxlength - 3);
      str = slice + '...';
   }
   return str;
}
console.log(truncate(str, 10));

/*Напишите функцию get_type_file( file_name ), которая получает расширение файла 
в заданном имени файла file_name (пример: get_type_file("readme.txt"), 
функция должна вернуть ".txt")*/

let file_name = prompt("Введите название файла");
function get_type_file(file_name) {
   let index = 0;
   for (i = 0; i < file_name.length; i++) {
      if (file_name[i] === '.') {
         index = i;
      }
   }
   return file_name.slice(index, file_name.length);
}
console.log(get_type_file(file_name));

/*Напишите функцию get_short_fio(full_fio), которая преобразует полное ФИО full_fio в краткое. 
Например: get_short_fio("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."*/

let full = prompt(`Введите ваше ФИО`);
function get_short_fio(full_fio) {
   let str = full_fio.split(' ');
   let short_fio = str [0] + ' ' + str[1].charAt(0) + '. ' + str[2].charAt(0) + '.';
   return alert(short_fio);
}
console.log(get_short_fio(full));

/*Напишите функцию get_order(string), которая отсортирует все слова в заданном 
предложении string в алфавитном порядке. Например: get_order("ноты акустика гитара"), 
функция должна вернуть "акустика гитара ноты"*/
/*
function get_order(string) {
   let str_array = string.split ();
   let sort_array = [];
   for (i = 0; i < str_array; i++) {
      switch (str_array[i].charAt(0)) {
         case 
      }
   }
}
*/
//Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.

let array = [11, 12, 3, 4, 900, 20, 10, 25, 60, 112];
function get_random(arr) {
   let max = arr.length - 1;
   return arr[Math.floor(Math.random() * (max))];
}
console.log('Случайное число', get_random(array));

//Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.

let array = [11, 12, 3, 4, 900, 20, 10, 25, 60, 112];
function get_max(arr) {
   arr.sort((b, a) => a - b);
   return arr[0];
}
let res = get_max(array);
console.log('Максимальное значение', res);

/*Задача на синтаксис объектов. Напишите код, по строке на каждое действие.
•  Создайте пустой объект user.
•  Добавьте свойство name со значением Вася.
•  Добавьте свойство surname со значением Петров.
•  Поменяйте значение name на Сергей.
•  Удалите свойство name из объекта.*/

function Task1() {
   let user = {
      name: "Вася",
      surname: "Петров",
   }
   user.name = "Cергей";
   delete user.name;
   return user;
}
console.log(Task1());

/*Создайте функцию is_empty(obj), которая возвращает true, если в объекте 
нет свойств и false – если хоть одно свойство есть.
Например:
var schedule = {};
isEmpty(schedule) ; // должно вернуть true
schedule["8:30"] = "подъём";
isEmpty(schedule) ; //должно вернуть false*/

/*Есть объект points с оценками. Напишите код, который выведет сумму всех оценок. 
var points = {
"Вася": 200,
"Петя": 300,
"Даша": 250,
"Андрей": 150,
"Сергей": 450,
};
Найти имена тех, кто получает минимальную и максимальную оценку.*/