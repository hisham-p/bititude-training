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
  for (let i = 3; i < n; i += 2) {
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
console.log(array(15));
