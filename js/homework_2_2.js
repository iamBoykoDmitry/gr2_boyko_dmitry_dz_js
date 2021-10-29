/*Машина проехала N км без поворотов. Диаметр колеса машины составляет D дюймов.
Сколько оборотов сделало каждое колесо, и сколько оборотов сделали все колеса вместе?
Значение N и D нужно ввести с помощью функции prompt.
Ошибки по вводу значений вывести в консоль.
Результат вывести с помощью функции alert.*/

let D = prompt('Введите диаметр', 0);
D = Number(D); // 1 дюйм = 2.54 см
let N = prompt('Введите расстояние', 0);
N = Number(N);

let turnover = (N * 100000)/(D * 3.14 * 2.54);
turnover = Number (turnover);

let turnover_all = turnover * 4;
turnover_all = Number (turnover_all);

if (isNaN(N)) {
   console.error('Не числовое значение');
} else if (N < 0) {
   console.error('Отрицательное значение');
} else {
   alert(`${turnover} оборотов сделало каждое колесо`);
   turnover = Number (turnover);
}
if (isNaN(D)) {
   console.error('Не числовое значение');
} else if (D <= 0) {
   console.error('Отрицательное значение');
} else {
   alert(`${turnover_all} оборотов сделали все колеса вместе`);
   turnover_all = Number (turnover_all);
}
