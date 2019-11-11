// Write a JavaScript function to chop a string into chunks of a given length. Go to the editor
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

function string_chop(input, n) {
  let str = input.split('');
  let string= [];
  if(n != null)
  {
  for(let i=0; i < str.length ; i++){
  let demo = str.splice(i,n);
  string.push(demo.join(''));
  i--;
  }
  }else{
  string.push(str.join(''));
  }
  return string;
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));
