const removeFromArray = function (arr, ...args) {
  //...args - rest parameter allows a function to accept an indefinite number of arguments as an array
  arr = arr.filter((item) => !args.includes(item)); //!forDeletion
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

/**
 * let index = arr.indexOf(value);
  arr.splice(index, 1); // index of value you wish to remove, how many values to remove for specified index value
  return arr;
 */
