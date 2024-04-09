/*Напишите функцию, которая принимает число в качестве параметра и выдает
пользовательскую ошибку, если число не является целым числом. */

const validateInteger = (number) => {
  if (!Number.isInteger(number)) throw new Error("Number must be integer!");
  return true;
};

try {
  console.log(validateInteger(12412));
  console.log(validateInteger(1245.568));
} catch (error) {
  console.error("Error:", error.message);
}
