const convertToCelsius = function(temp) {
  //(x - 32) * (5/9)
  let x = (((temp - 32) * 50) / 90);
  let rounded = Math.round(x * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(temp) {
  //(x * (5/9)) + 32
  let x = ((temp * 90) / 50) + 32;
  let rounded = Math.round(x * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
