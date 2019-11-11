// .Write a JavaScript program which accept a string as input and swap the
// case ofeach character.For example
// if you input 'The Quick Brown Fox'
// the output should be 'tHE qUICK bROWN fOX'.

let word = 'The Quick Brown Fox';
let arr = word.split('');
for(let i=0 ; i < arr.length ; i++)
{
  if(arr[i] === arr[i].toLowerCase())
  {
    arr[i] = arr[i].toUpperCase();
  }else{
    arr[i] = arr[i].toLowerCase();
  }
}
console.log(arr.join(''));
