function capitalize(input)
{
let str = input;
let nstr = str.charAt(0).toUpperCase() + str.slice(1);
return nstr;
}
console.log(capitalize('js string exercises'));
