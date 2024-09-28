"use strict"
function printPrimes(limit) {
    for (let num = 2; num <= limit; num++) {
      let isPrime = true;
      
    
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;  
        }
      }
  
      if (isPrime) {
        console.log(num);  
      }
    }
  }
  
  
  const input = 90;
  printPrimes(input);  
  