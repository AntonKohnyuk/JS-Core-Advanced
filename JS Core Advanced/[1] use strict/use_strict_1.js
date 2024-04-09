/* Напишите функцию для расчета факториала числа. 
 Функция должна принимать число вкачестве аргумента и возвращать его факториал. 
 Учтите использование строгого режима*/

"use strict";

function factorial(number) {
  if (number <= 1) return 1;

  return number * factorial(number - 1);
}

console.log(factorial(20));
