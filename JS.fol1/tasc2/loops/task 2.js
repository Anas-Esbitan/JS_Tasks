"use strict"
function fibonacciSequence(limit) {
    let a = 0, b = 1;
    console.log(a); 
    
    for (let i = 1; b <= limit; i++) {
      console.log(b);  
      let next = a + b
      a = b;
      b = next;
    }
  }
  
  const input = 10;
  fibonacciSequence(input);  // Output: 0 1 1 2 3 5 8
  