function calculate(num) {
  let result = num;

  function add(num2) {
    result += num2;
    return this;
  }

  function multiply(num2) {
    result *= num2;
    return this;
  }

  function getResult() {
    return result;
  }

  return {
    add,
    multiply,
    result: getResult,
  };
}

const res = calculate(3).add(2).multiply(2).result();
console.log(res); // 10



function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}
console.log( sum(1)(2)(3) );
alert( sum(1)(2)(3) ); // 3
