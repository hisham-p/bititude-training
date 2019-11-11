var num = 1025468;
let arr = [];
while(num > 0){
arr.push(digit);
num = (num -digit) / 10;
}
for(let i=0;i < arr.length ;i++)
{
if(arr[i] % 2 === 0 && arr[i+1] % 2 ===0){
arr.splice(i,0 ,'-')
}
}
