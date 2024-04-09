/*Напишите функцию для сравнения двух объектов, чтобы определить, 
содержит ли первый из них эквивалентные значения свойств по сравнению со вторым*/

/*Заметка
из-за отсутсвтвия более детального пояснения задачи, реализовал следующую функцию:
    Функция сравнивает на эквивалентность только те свойства, 
    которые есть в каждом объекте.*/

const compareObjectProperties = (obj_a, obj_b) => {
  for (let key in obj_a) {
    if (!(key in obj_b) || obj_a[key] === obj_b[key]) continue;
    return false;
  }
  return true;
};

// true
console.log(
  compareObjectProperties(
    {
      a: "1",
      b: 2,
    },
    {
      a: "1",
      b: 2,
    }
  )
);

//false
console.log(
  compareObjectProperties(
    {
      a: "1",
      b: 2,
    },
    {
      a: "1",
      b: 3,
    }
  )
);
