// Write a JavaScript function to convert a string in abbreviated form. Go to the editor
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

function abbrev_name(input) {
  let arr = input.split('');
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === ' '){
      i++;
      arr.splice(i+1)
    }
  }
  return arr.join('') + '.';
}
  console.log(abbrev_name("Robin Singh"));
