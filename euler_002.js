// Problem 2
// =========
// 
// Each new term in the Fibonacci sequence is generated by adding the
// previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 
//                   1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// 
// Find the sum of all the even-valued terms in the sequence which do not
// exceed four million.

var fibSum = function(){
  'use strict';
  var num1 = 0;
  var num2 = 1;
  var sum = 0;
  var nextNum = 0;
  while(nextNum <= 4000000){
    nextNum = num2 + num1;
    num1 = num2;
    num2 = nextNum;
    if(nextNum%2 === 0){
      sum += nextNum;
    }
  }
  return sum;
};

// TODO: return your answer for this prompt.
return fibSum();
