//  Write a JavaScript function to parameterize a string. Go to the editor
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

function string_parameterize(input)
{
let str = input.toLowerCase();
let newstr = str.split(' ').join('-')
return newstr;
}
console.log(string_parameterize("Robin Singh from USA"));
