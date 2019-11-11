// let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//  arr1.sort();
// let arr2 = [];
//  for(let i=0 ; i <arr1.length ;i++)
// {
//   if(arr1[i] === 'a')
//   {
//     arr2.push(arr1[i]);
//   }
// }
// console.log('a ( '+ arr2.length + ' times )' );

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let count = 0;
let n, temp;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j])
      n++;
    if (count < n) {
      count = n;
      temp = arr[i];
    }
  }
  n = 0;
}
console.log(temp + " ( " + count + " times ) ");
