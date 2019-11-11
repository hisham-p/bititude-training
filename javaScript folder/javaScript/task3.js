function last(arr , n)
{
  let array = arr.reverse().splice(0 , n);
  return array.reverse();
}
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));

