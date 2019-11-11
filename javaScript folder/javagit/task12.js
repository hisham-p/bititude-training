// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

Sample numbers : 3, -7, 2
let arr = [ 3, -7, 2 ];
let product = 1;
for(let i=0;i<arr.length ;i++)
{
  product *= arr[i]
}
if(product < 0){
  alert('The product has sign -')
}else{
  alert('The product has sign +')
}
