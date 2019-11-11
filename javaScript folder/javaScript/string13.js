function repeat(input , n){
let str = input;
let nstr = str;
for(let i=1; i < n; i++)
{
  nstr = nstr + str ;
}
return nstr;
}
console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));
