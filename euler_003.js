// Problem 3
// =========
// 
// The prime factors of 13195 are 5, 7, 13 and 29.
// 
// What is the largest prime factor of the number 600851475143?


//divide the number by the i, go through and change the number!
var largestPFac = function(number){
  'use strict';
  var num = number;
  var pFacs = [];
  var i = 1;
  while(i < num){
    if(num % i === 0){
      num /= i;
      pFacs.push(i);
    }
    i++; 
  }
  return num;
};

// TODO: return your answer for this prompt.
return largestPFac(600851475143);
