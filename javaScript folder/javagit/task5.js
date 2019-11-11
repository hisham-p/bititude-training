// 5. Write a JavaScript program which accept a number as input and insert dashes(-) between each two even numbers.For example
// if you accept 025468 the output should be 0 - 254 - 6 - 8.


let num = '025468';
let str = num.toString()
arr=str.split('');
console.log(arr);
for (let i =  arr.length; i > 0; i--) {
  if (arr[i] % 2 === 0 && arr[i-1] % 2 === 0) {
   arr.splice(i,0 ,'-')
  }
}
console.log(arr.join(''));
