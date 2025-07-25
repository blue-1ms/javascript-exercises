const sumAll = function(min, max) {

    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
    const temp = min;
    min = max;
    max = temp;
    }
    // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
