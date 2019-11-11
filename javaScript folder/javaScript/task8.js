let word = 'The Quick Brown Fox';
let arr = [];
for(let i=0 ; i < word.length ; i++)
{
  let temp = word[i];
  if(temp === word[i].toLowerCase())
  {
    let push1 =temp.toUpperCase()
    arr.push(push1);
}else if (temp === word[i].toUpperCase())
{
  let push1 =temp.toLowerCase();
    arr.push(push1);
}
}
console.log(arr.join(''));
