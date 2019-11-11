//  Write a JavaScript function to capitalize the first letter of a string. Go to the editor
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

function capitalize(input)
{
let str = input;
let nstr = str.charAt(0).toUpperCase() + str.slice(1);
return nstr;
}
console.log(capitalize('js string exercises'));
