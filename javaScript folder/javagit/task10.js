// Write a JavaScript program to compute the sum and product of an array of integers.

let arr = [1,2,3,4,5]
let sum = 0;
let mul = 1;
for(let i=0 ;i< arr.length ; i++)
{
  sum = sum + arr[i];
  mul = mul * arr[i];
}
console.log('sum is ' + sum + ' and product is ' + mul )

