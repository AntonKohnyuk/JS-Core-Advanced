/*Напишите функцию, которая многократно выполняет заданную операцию через фиксированный интервал, 
используя setInterval(). */

const doSomething = (action = "work") => {
  console.log(`i do something... ${action}`);
};

const timer = setInterval(doSomething, 1000);
