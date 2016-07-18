window.Euler = (function () {
  var exports = {};
  var privy = 20;
  
  //Problem #2
  exports.largestPrimeFactor = function  (n) {
    var currentNumber = n;
    var largestFactor = n;
    for ( var k = 1; k < n; k++) {
    if( k * k > n) return largestFactor
      if (currentNumber % k === 0) {
        currentNumber /= k;
        largestFactor = k;
      };
    };
  };
  
  //Problem #3
  function fib (n) {
    var phi = (1 + Math.sqrt(5)) /2;
    var result = Math.pow(phi, n) - Math.pow((1 - phi), n);
    result = result / Math.sqrt(5);
    return result;
  };
  
  exports.evenFibSum = function evenFibSum () {
    var sum = 0;
    var k = 3;
    while(fib(k) < 4000000) {
      sum += fib(k);
      k += 3;
    };
    return sum
  };
  
  return exports
  
})();
