// Write a JavaScript program to find the armstrong numbers of 3 digits.Go to the editor
// Note: An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.For example, 371 is an Armstrong number since 3 ** 3 + 7 ** 3 + 1 ** 3 = 371.

function armstrong(num) {
  let square = 0;
  let array = [],
    n;
  let temp = num;
  for (i = 0; i < 3; i++) {
    n = num % 10;
    array.push(n);
    num = Math.floor(num / 10);
  }
  array.reverse();
  for (let i = 0; i < array.length; i++) {
    square = square + (array[i] * array[i] * array[i])
  }
  if (temp === square) {
    return 'Number is Amstrong'
  } else {
    return 'Number not armstrong';
  }
}
console.log(armstrong(153));
