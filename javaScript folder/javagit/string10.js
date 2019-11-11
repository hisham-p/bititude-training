// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

function swapcase(word) {
  let str = word.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      str[i] = str[i].toUpperCase();
    } else {
      str[i] = str[i].toLowerCase();
    }
  }
  return str.join('');
}
console.log(swapcase('AaBbc'));
