/*Напишите функцию get_tomorrow(), которая возвращает завтрашнее число в формате 26 ноября 2019г*/

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function get_tomorrow() {
   let arr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
   let tomorrow  = new Date(Math.trunc(new Date().getTime() + DAY));
   tomorrow = tomorrow.getDate() + ' ' + arr[tomorrow.getMonth()]  + ' ' + tomorrow.getFullYear();
   return tomorrow;
}
console.log(get_tomorrow());

/*  Написать функцию, которая находит разницу в днях между двумя заданными датами.
Например, заданные даты «20/01/2010» и «15/01/2010», функция должна вернуть число 5. Разницу в днях необходимо считать по модулю.*/
function get_difference(date1, date2) {

   if (date1 instanceof Date || date2 instanceof Date) {
      return Math.abs((date1.getTime() - date2.getTime()) / DAY );
   } else {
      return null;
   }
}
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

let star_date = '20/01/2010';
let finish_date = '15/01/2010';
let date1 = star_date.split("/").reverse().join('-');
let date2 = finish_date.split("/").reverse().join('-');

console.log(date1, date2);
console.log(get_difference(new Date(date1), new Date(date2)));

/*Напишите функцию get_count_work_days(date1, date2), которая будет считать количество рабочих дней между двумя заданными датами.*/
function get_count_work_days(date1, date2) {

   if (date1 instanceof Date && date2 instanceof Date) {
      let index = Math.abs((date1.getTime() - date2.getTime()) / DAY );
      let count = 0;
      for (let i = 0; i < index; i++) {
         date1 = new Date(date1).getTime() + DAY;
         let day_number = new Date(date1).getDay();
         if (day_number >= 1 && day_number <=5) {
               count++;
         }
      }
      return count;
   } else {
      return null;
   }
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

let star_date = '20/01/2010';
let finish_date = '15/01/2015';
let date1 = star_date.split("/").reverse().join('-');
let date2 = finish_date.split("/").reverse().join('-');

console.log(get_count_work_days(new Date(date1), new Date(date2)));

/*Напишите функцию get_count_days(date), которая будет считать количество дней до Нового года от date,
если оно задано, иначе посчитать количество дней от текущей даты*/
function get_count_days(date = new Date()) {

   if (date instanceof Date) {
      let new_year = new Date(new Date().getFullYear(), 11, 32);
      return Math.trunc((new_year.getTime() - date.getTime()) / DAY);
      }
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

let star_date = '20/01/2010';
let date1 = star_date.split("/").reverse().join('-');
console.log(get_count_days(new Date(date1)));


/*  Напишите функцию get_day(date), которая возвращает день недели от заданной даты. Например: get_day(’27-11-1988’) должно вернуть «воскресенье»*/
function get_day(date) {
   if (date instanceof Date) {
      let days_arr = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
      return days_arr[date.getDay()];
   }
}
let star_date = '07/11/2021';
let date1 = star_date.split("/").reverse().join('-');
console.log(get_day(new Date(date1)));