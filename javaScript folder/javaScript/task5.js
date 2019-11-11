var num=025468;
var str = num.toString();
let arr = [];
for(let i=0; i<str.length; i++)
  {
    if((str[i] % 2 === 0) && (str[i-1] % 2 === 0))
     {
      arr.push( '-' , str[i]);
     }
    else
     {
      arr.push(str[i]);
     }
  }
console.log(arr.join(''));
