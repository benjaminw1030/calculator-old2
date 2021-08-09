function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

alert("The sum is: " + add(number1, number2).toString() + ".");
alert("The difference is: " + subtract(number1, number2).toString() + ".");
alert("The product is: " + multiply(number1, number2).toString() + ".");
alert("The quotient is: " + divide(number1, number2).toString() + ".");