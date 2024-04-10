/*Напишите функцию, которая использует async/await для загрузки данных с удаленного
сервера (например, с помощью API) и возвращает полученный результат */

const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Data upload error!");
    const products = await response.json();
    return products;
    return;
  } catch (error) {
    console.error("Error", error.message);
    throw error;
  }
};

const url = "https://fakestoreapi.com/products?limit=5";

getData(url)
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("End"));
