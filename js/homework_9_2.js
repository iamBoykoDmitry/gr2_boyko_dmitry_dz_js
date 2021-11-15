/*Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника. Сделать на jQuery */

$(document).ready(function() {
   console.log(document.body);
   let rectangleSecond = $('<div style="width: 200px; height: 100px; margin: 15px; background-color: red;"></div>');
   document.body.prepend(rectangleSecond[0]);
   let rectangleFirst = $('<div style="width: 300px; height: 150px; margin: 15px; background-color: blue;"></div>');
   document.body.prepend(rectangleFirst[0]);

   $(rectangleSecond).on('mouseover', function(event) {
      console.log('размер этого прямоугольника: 200 х 100')
   });
   $(rectangleFirst).on('mouseover', function(event) {
      console.log('размер этого прямоугольника: 300 х 150')
   });

   $(rectangleSecond).on('click', function(event) {
      alert(' цвет этого прямоугольника: красный')
   });
   $(rectangleFirst).on('click', function(event) {
      alert(' цвет этого прямоугольника: синий')
   });
});

