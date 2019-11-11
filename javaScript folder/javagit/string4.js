//  Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

function truncate_string(input , n)
{
  let arr=input.split('');
  return arr.splice(0,n).join('');
}
console.log(truncate_string("Robin Singh",4));
