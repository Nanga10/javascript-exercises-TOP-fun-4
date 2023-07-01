const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

const multiply = function (...args) {
  let product = 1;
  for (const arg of args) {
    if (typeof arg === "number") {
      product *= arg;
    }
  }
  return product;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
