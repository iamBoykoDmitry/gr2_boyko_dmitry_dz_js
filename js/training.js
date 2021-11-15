/*let my_line = prompt('введите линию');
let my_column = prompt('столб');
if ( my_line % 2 == my_column % 2) {
   alert( 'black');
} else {
   alert('white');
}
let res = ( my_line % 2 == my_column % 2) ? ( 'BLACK') : ('БЕЛОЕ')*/

let daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for (i = 0; i < daysOfMonth.length; i++) {
   console.log(daysOfMonth[i]);
}
let namesOfMonth = ['jan', 'Feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
for (i = 0; i < daysOfMonth.length; i++) {
   console.log(`${namesOfMonth[i]} - ${daysOfMonth[i]}`);
}
let myMonth = 'apr';
let myDay = 8;
let index = 0;
let resultDay = 8;
for (i = 0; i < daysOfMonth.length; i++) {
   if (myMonth === namesOfMonth[i]){
      index = i;
   }
}
for (i = 0; i < index; i++) {
   resultDay += daysOfMonth[i]; 
}
console.log(resultDay);


function color (string, symbol) {
   let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
   let number = 0;
   for (i = 0; i < letter.length; i++) {
      if(string === letter[i]) {
         number = i + 1;
      }
   }
   if(number % 2 === symbol % 2) {
      console.log(`${string} ${symbol} - black`)
   } else {
      console.log(`${string} ${symbol} - white`)
   }
}
color('f', 7);