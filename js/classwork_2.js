/*Написать код, который будет выполнять 5 действия на странице index.html:
1. Создать 100 квадратов голубого цвета размером 70*70 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
3. Вывести на каждом квадрате его порядковый номер.
4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником 
цветом хаки и любые 5 сделать желтым.
5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.

Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.
*/

function create_spring() {
   for(i = 1; i <= 100; i++) {
   let a1 = document.createElement('div');
   a1.setAttribute('style', 'background: blue; width: 70px; height: 70px; margin: 10px;');
   a1.innerText = i; 
   a1.style.fontSize = '25px';
   document.body.append(a1);
   }
}
setTimeout(create_spring, 2000);

function create_summer() {
   let a1 = document.getElementsByTagName('div');
   for(i = 0; i < a1.length; i++) {
   a1[i].setAttribute('style', 'background: purple; width: 100px; height: 100px; margin: 10px; font-size: 40px;');
   }
}
setTimeout(create_summer, 4000);

function create_autumn() {
   let a1 = document.getElementsByTagName('div');
   for(i = 0; i < a1.length; i++) {
      if (i <= 6) {
         a1[i].setAttribute('style', 'background: yellow; width: 100px; height: 100px; margin: 10px; font-size: 40px;');
      }
   if((i+1) % 3 === 0) {
      if ((i+1) % 15 === 0) {
         a1[i].setAttribute('style', 'width: 0px; height: 0px; border: 50px solid transparent; border-bottom: 70px solid #78866b; margin: 10px; font-size: 40px;');
      } else {
         a1[i].setAttribute('style', 'background: red; width: 100px; height: 100px; margin: 10px; font-size: 40px;');
      }
   } 
   }
   
}
setTimeout(create_autumn, 6000);

function create_winter() {
   let a1 = document.getElementsByTagName('div');
   for(i = (a1.length - 1); i >= 0; i--) {
      if((i + 1) % 3 === 0) {
         if((i + 1) % 15 === 0) {
            continue;
         } else {
      a1[i].remove();
         }
      }
   }
}
setTimeout(create_winter, 8000);