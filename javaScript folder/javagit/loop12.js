//  Write a JavaScript program to sum the multiples of 3 and 5 under 1000


function sumOfMultiples(num1, num2) {
  let product1 = 0,
    product2 = 0;
  let sum1 = 0,
    sum2 = 0;
  for (let j = 1; j < 1000; j++) {
    product1 += num1;
    sum1 += product1;
    product2 += num2;
    sum2 += product2;
  }
  return sum1 + sum2;
}
console.log(sumOfMultiples(3, 5));
