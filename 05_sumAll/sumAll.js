const sumAll = function (a, b) {
  let total = 0;

  if (
    a < 0 ||
    b < 0 ||
    typeof a === "string" ||
    typeof b === "string" ||
    a instanceof Array ||
    b instanceof Array
  ) {
    errMessage = "ERROR";
    console.log(errMessage);
    return errMessage;
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      total += i;
    }
    console.log(total);
    return total;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      total += i; // total = total + i
    }
    console.log(total);
    return total;
  } else {
    return 0;
  }
};

sumAll(-10, 4);
// Do not edit below this line
module.exports = sumAll;
