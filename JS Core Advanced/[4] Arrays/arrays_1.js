/*Напишите функцию, которая принимает массив с числами 
и увеличивает каждое число из массива на 10 процентов. */

const increaseArrayElements = (numericArray) =>
  numericArray.map((el) => {
    let [int, fractional = ""] = el.toString().split(".");

    int = (int * 11) / 10;
    fractional = fractional
      ? (fractional * 11) / 10 ** (fractional.length + 1)
      : 0;
    return (int + fractional).toFixed(
      fractional.toString().length > 1 ? fractional.toString().length - 2 : 1
    );
  });

//["14.3", "2.2", "3.66663", "4.4", "5.5"];
console.log(increaseArrayElements([13, 2, 3.3333, 4, 5]));
