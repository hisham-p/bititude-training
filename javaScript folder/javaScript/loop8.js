function happyNumber(num) {
  let sum = 0;
  while (num != 0) {
    n = num % 10;
    num = (num - n) / 10;
    sum += (n * n);
  }
  snum = sum;
  if (snum === 1) {
    l
    count ++;
    return 'Number is happy number';
  }else if(snum === num){
    return 0;
  } else if(snum > 1){
       happyNumber(snum);
  }  
}
console.log(happyNumber(10));
// 1, 7, 10, 13, 19, 23, 28, 31, 
//32, 44, 49, 68, 70, 79, 82, 86, 
// 91, 94, 97, 100
