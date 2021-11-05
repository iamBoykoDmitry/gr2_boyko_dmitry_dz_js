/*Написать функцию count_symbol( symbol, string ), которая подсчитает 
количество указанного символа symbol, в строке string. 
Функция должна быть регистронезависимой и вернуть число*/

let string = prompt('Введите ваш текст для подсчета');
let symbol = prompt('Введите символ');
let result = 0;
string = string.toLowerCase();
symbol = symbol.toLowerCase();
function count_symbol(symbol, string) {
   for (let i = 0; i< string.length; i++) {
      if (string[i] === symbol) {
         result++;
      }
   }
   return result;
}
count_symbol(symbol, string);
console.log(string);
console.log(symbol);
console.log(result);

/*Напишите функцию get_string_length(str), которая в качестве аргумента 
принимает строку str и возвращает её длину, предварительно удалив из строки все 
пробелы (для решения данной задачи обязательно использовать цикл).*/

/*Напишите функцию up_first(str), которая возвращает строку str с заглавным первым символом, 
остальные символы должны быть в нижнем регистре (пример: up_first("иванов"), 
должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")*/

function up_first(str) {
   let str;
		let n1 = str[0].toUpperCase(); 
		for (let i = 1; i < str.length; i++) {
			n1 += str[i].toLowerCase();
			} console.log(n1)
	return(n1);
}
	console.log(up_first('иванов'));

/*Напишите функцию search_string(search, string), которая будет проверять наличие 
подстроки search в строке string. Функция должна вернуть булев тип и быть 
регистронезависимой (использовать метод indexOf)*/

let string = prompt('Введите предложение');
let search = prompt('Введите значение');
function search_string() {
if (string.indexOf(search) !== -1) {
      return alert(true);
   } else {
      return alert(false);
   }
}
console.log(search_string());

/*Напишите функцию truncate(str, maxlength), которая проверяет длину строки str, и если 
она превосходит maxlength – заменяет конец str на "...",
так чтобы ее длина стала равна maxlength.*/

/*Напишите функцию get_type_file( file_name ), которая получает расширение файла 
в заданном имени файла file_name (пример: get_type_file("readme.txt"), 
функция должна вернуть ".txt")*/

/*Напишите функцию get_short_fio(full_fio), которая преобразует полное ФИО full_fio в краткое. 
Например: get_short_fio("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."*/

let full = prompt(`Введите ваше ФИО`);
function get_short_fio(full_fio) {
   let str = full.split(' ');
   let short_fio = str [0] + ' ' + str[1].charAt(0) + '. ' + str[2].charAt(0) + '.';
   return alert(short_fio);
}
   console.log(get_short_fio());
   
/*Напишите функцию get_order(string), которая отсортирует все слова в заданном 
предложении string в алфавитном порядке. Например: get_order("ноты акустика гитара"), 
функция должна вернуть "акустика гитара ноты"*/

//Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.

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