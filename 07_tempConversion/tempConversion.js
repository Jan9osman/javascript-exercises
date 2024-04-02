const convertToCelsius = function(tempInFarenheit) {
  let tempInCelsuis = (tempInFarenheit - 32) * (5/9);
  return Math.round(tempInCelsuis * 10) / 10

};

const convertToFahrenheit = function(tempInCelsuis) {
  let tempInFarenheit = (tempInCelsuis * (9/5)) + 32;
  return Math.round(tempInFarenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
