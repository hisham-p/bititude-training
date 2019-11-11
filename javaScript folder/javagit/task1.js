// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
function array(input)
{
 return Array.isArray(input);
}
console.log(array('w3resource'));
console.log(array([1, 2, 4, 0]));

