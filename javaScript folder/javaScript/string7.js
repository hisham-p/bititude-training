function string_parameterize(input)
{
let str = input.toLowerCase();
let newstr = str.split(' ').join('-')
return newstr;
}
console.log(string_parameterize("Robin Singh from USA"));
