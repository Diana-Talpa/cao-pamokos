/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę, kuri turi 2 savybes ir 4 metodus.

Savybės: du skaičiai, kuriuos reikės panaudoti nurodytuose metoduose.

Metodai:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */



const num1 = 15;
const num2 = 20;

function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

const sumResult = sum(num1, num2);
const subtractionResult = subtraction(num1, num2);
const multiplicationResult = multiplication(num1, num2);
const divisionResult = division(num1, num2);

console.log('Sum:', sumResult);
console.log('Subtraction:', subtractionResult);
console.log('Multiplication:', multiplicationResult);
console.log('Division:', divisionResult);
