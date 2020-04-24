// Problem 1 B
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

var sum_to_n = function(n) {
    // your code here
  var array = []
  for (var i = 1; i <= n; i++) {
    array.push(i);
  }

  sumofarray = function(arr){
  return arr.reduce(function(a,b){
    return a + b
  }, 0);
  }
  return sumofarray(array)
};
