const palindromes = function (string) {
  string = string.toLowerCase();
  string = string.replace(/[^a-zA-Z0-9]/g, "");
  const reversedString = string.split("").reverse().join("");
  if (string == reversedString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
