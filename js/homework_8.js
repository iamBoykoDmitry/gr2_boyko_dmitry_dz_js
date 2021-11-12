/*Написать код, который будет выполнять 4 действия на странице index.html:
1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
4. Удалить все квадраты, и сделать фон страницы черным.
Каждое действие должно выполниться через 3 секунды от предыдущего, 
первое действие также должно иметь задержку 3 секунды.*/

function create_spring() {
   for(i = 1; i <= 10; i++) {
   let a1 = document.createElement('div');
   a1.setAttribute('style', 'background: blue; width: 50px; height: 50px; margin: 5px');
   document.body.prepend(a1);
   }
}
setTimeout(create_spring, 3000);

function create_summer() {
   let a2 = document.getElementsByTagName('div');
   for(i = 0; i < a2.length; i++) {
   a2[i].setAttribute('style', 'background: green; width: 100px; height: 100px; margin: 5px');
   }
}
setTimeout(create_summer, 6000);

function create_autumn() {
   let a3 = document.getElementsByTagName('div');
   for(i = 0; i < a3.length; i++) {
   if(i === 2 || i === 5 || i === 8) {
      a3[i].setAttribute('style', 'background: red; width: 100px; height: 100px; margin: 5px');
   } else {
      a3[i].setAttribute('style', 'background: yellow; width: 100px; height: 100px; margin: 5px');
   }
   }
}
setTimeout(create_autumn, 9000);

function create_winter() {
   let a4 = document.getElementsByTagName('div');
   for (let i = (a4.length - 1); i >= 0; i--) {
      a4[i].remove();
         console.log(i);
   }
   document.body.style.backgroundColor = 'black';
}
setTimeout(create_winter, 12000);