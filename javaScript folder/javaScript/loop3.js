// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

function sort(a,b,c){
let array = [];
array.push(a,b,c);
return array.sort().reverse().join(',');
}
console.log(sort(0,-1,4));
