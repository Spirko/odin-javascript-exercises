const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {	
  return a-b;
};

const sum = function(args) {
  let result = 0;
  for (a of args) {
    result += parseInt(a);
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for(let i of arr) result *= parseInt(i);
  return result;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	result = 1;
  for(let i=1; i<=parseInt(a); i++) result *= i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
