//  Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

function capitalize_Words(input)
{
let str = input.split(' ');
for(let i=0 ; i < str.length ; i++)
{
  str[i] = str[i][0].toUpperCase() + str[i].substr(1);
}
return str.join(' ') ;
}
console.log(capitalize_Words('js string exercises'));
