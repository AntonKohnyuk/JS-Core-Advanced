/* Создайте класс под названием «Человек» со свойствами имени, возраста и страны.
Включите метод для отображения сведений о человеке. 
Создайте два экземпляра класса «Человек» и отобразите их сведения. */

class Human {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  showInfo() {
    console.log(
      `Information:\nname: ${this.name} \nage: ${this.age}\ncountry: ${this.country}\n`
    );
  }
}

const person_1 = new Human("Polina", 23, "Belarus");
const person_2 = new Human("Andrew", 35, "Poland");

person_1.showInfo();
person_2.showInfo();
