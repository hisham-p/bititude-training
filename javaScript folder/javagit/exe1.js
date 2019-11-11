// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.




function prime(num) {

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function array(n) {
  let arr = [2];
  for (let i = 3; i <= n; i++) {
    if (prime(i)) {
      arr.push(i);
    }
  }
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum = sum + arr[j];
  }
  return sum;
}
console.log(array(17));
