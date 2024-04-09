/*Создайте блок кода внутри функции и объявите переменную с именем x с использованием var, let и const. 
Попытайтесь обратиться к этой переменной как внутри, так и вне блока. 
Какие переменные видны снаружи блока, а какие нет?*/

function checkScope() {
  {
    var x_var = "var";
    let x_let = "let";
    const x_const = "const";

    // Переменные, которые видны в блоке:
    console.log(x_var);
    console.log(x_let);
    console.log(x_const);
  }

  // Переменные, которые видны вне блока:
  console.log(x_var);

  // Переменные, которые не видны вне блока:
  console.log(x_let);
  console.log(x_const);
}

checkScope();
