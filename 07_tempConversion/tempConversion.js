const convertToCelsius = function (f) {
  let c = ((f - 32) * 5) / 9;
  if (c === Math.floor(c)) {
    return Number(c);
  } else {
    return Number(c.toFixed(1));
  }
};

const convertToFahrenheit = function (c) {
  let f = c * (9 / 5) + 32;
  if (f === Math.floor(c)) {
    return Number(f);
  } else {
    return Number(f.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
