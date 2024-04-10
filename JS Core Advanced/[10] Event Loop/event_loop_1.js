/*Напишите функцию, которая принимает callback функцию и вызывает ее после
задержки в 2 секунды. */

function delayedCallback(callbackFunction) {
  setTimeout(callbackFunction, 2000);
}

const doSomethingFunction = () => {
  console.log("Do something...");
};

delayedCallback(doSomethingFunction);
