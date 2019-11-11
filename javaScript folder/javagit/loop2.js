// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor
// Sample numbers : 3, -7, 2
// Output : The sign is -

function sign(a,b,c){
 let array = [];
 array.push(a,b,c)
let product = 1;
for(let i=0;i<array.length;i++){
product = product * array[i];
}
if(product < 0)
alert('The sign is -');
}
sign(3,-7,2);
