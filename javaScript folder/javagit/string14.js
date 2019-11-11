//  Write a JavaScript function to insert a string within a string at a particular position (default is 1).Go to the editor
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

function insert(input, n, m) {
  let str = input;
  if (n != null) {
    if (m != null) {
      return str.slice(0, m) + n + str.slice(m);
    } else {
      return n + str.slice(m);
    }
  } else {
    return str;
  }
}
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.', 'JavaScript '));
console.log(insert('We are doing some exercises', 'JavaScript ', 18));
