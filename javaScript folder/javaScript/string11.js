function camelize(input)
{
let str = input.split(' ');
for(let i=0 ; i < str.length ; i++)
{
  str[i] = str[i][0].toUpperCase() + str[i].substr(1);
}
return str.join('') ;
}
console.log(camelize("JavaScript Exercises")); 
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises"));
