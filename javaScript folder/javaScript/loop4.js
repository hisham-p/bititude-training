//  Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

function largest(array){
  array.sort();
  return array[array.length-1];
}
console.log(largest([-5, -2, -6, 0, -1]));
