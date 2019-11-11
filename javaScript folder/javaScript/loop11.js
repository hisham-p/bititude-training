// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

function gcd (num1 ,num2)
{
  while(num1 != num2 )
  {
    if(num1 > num2)
    {
      num1 -= num2;
    }
    else{
      num2-=num1
    }
  }
  return num1;
}
console.log(gcd(8,12));
