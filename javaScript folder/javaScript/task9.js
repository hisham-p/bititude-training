 let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  let array = [];
for (let i=0 ;i < arr.length ; i++)
{ 
  let row = 'row';
  let n = i;
  let num = n.toString();
  array.push(row.concat(num));
  for (let j=0 ;j < arr[i].length ; j++)
  {
    array.push(arr[i][j].toString());
  }
}
console.log(array);
