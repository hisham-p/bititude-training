// Write a JavaScript function to count the occurrence of a substring in a string. Go to the editor
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1

function count(input, search) {
  let n = input.toLowerCase();
  search.toLowerCase();
  let str = n.split(' ');
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (search === str[i]) {
      count ++;
    }
  }
  return 'The word' + search + "  repeats " + count + ' times in the string';
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false));
