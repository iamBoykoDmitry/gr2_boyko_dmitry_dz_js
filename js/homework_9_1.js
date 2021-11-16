/*Написать код, который будет выполнять 5 действия на странице index.html:
1. Создать 100 квадратов голубого цвета размером 70*70 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
3. Вывести на каждом квадрате его порядковый номер.
4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать 
   треугольником цветом хаки и любые 5 сделать желтым.
5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды от предыдущего, 
первое действие также должно иметь задержку 2 секунды. Сделать на jQuery */

$(document).ready(function() {
   function spring() {
      for(i = 1; i <= 100; i++) {
         let month = $('<div style="width: 70px; height: 70px; margin: 10px; background-color: blue;"></div>');
         document.body.prepend(month[0]);
      }
   }
   setTimeout(spring, 2000);
   function summer() {
      $('div').css({
         width: '100px', 
         height: '100px',
         height: '100px',
         backgroundColor: 'purple',
         margin: '15px',
      })
   }
   setTimeout(summer, 4000);
   function septemberFirst() {
      $('div').css({
         fontSize: '25px',
      })
      $('div').each(function(n) {
         $(this).append(n + 1);
      });
   }
   setTimeout(septemberFirst, 6000);
   function autumn() {
      $('div').each(function(i) {
         if (i <= 6) {
            $(this).css({
               background: 'yellow',
            });
         }
         if((i+1) % 3 === 0) {
            if ((i+1) % 15 === 0) {
               $(this).css({
                  background: 'linear-gradient(to right bottom, transparent 49%, rgb(99, 114, 72) 50%) left / 50.25% 100% no-repeat, linear-gradient(to left bottom, transparent 49%, rgb(99, 114, 72) 50%) right / 50.25% 100% no-repeat',
               });
            } else {
               $(this).css ({
                  background: 'red',
                  width: '100px',
                  height: '100px',
               });
            }
         }   
      });
   }
   setTimeout(autumn, 8000);
   function winter() {
      for(i = ($('div').length - 1); i >= 0; i--) {
         if((i + 1) % 3 === 0) {
            if((i + 1) % 15 === 0) {
               continue;
            } else{
               $('div')[i].remove();
            }
         }
      }
   }
   setTimeout(winter, 10000);
});
