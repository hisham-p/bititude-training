// Write a JavaScript function to uncamelize a string. Go to the editor
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "helloworld"
// "hello-world"
// "hello_world"

function uncamelize(input, n) {
  let str = input.split('')
  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] === str[i].toUpperCase()) {
      str.splice(i, 0, n);
    }
   
  }
  return str.join('');
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld', '-'));
console.log(uncamelize('helloWorld', '_'));
