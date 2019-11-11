// Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th. Go to the editor
// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"

function humanize_format(n) {
  if (n % 10 === 1) {
    return n + 'st';
  } else if (n % 10 === 2) {
    return n + 'nd';
  } else if (n % 10 === 3) {
    return n + 'rd'
  } else {
    return n + 'th';
  }
}
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));;
