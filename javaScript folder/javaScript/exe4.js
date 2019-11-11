function smallestCommons(arr) {
  let max, min, para1, para2 , flag;
  let array1 = [];
  let array2 = [];
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
    para1 = max;
    para2 = min;
  } else if (arr[1] > arr[0]) {
    max = arr[1];
    min = arr[0];
    para1 = max;
    para2 = min;
  }

  let limit = min;
  let lmax = max;
  for (let j = 1; j <= max; j++) {
    limit = limit * lmax;
    lmax--;
  }
  
  for (let i = max; i <= limit; i+=para1) {
    for (let j = min; j < max; j++) {
      if (i % j === 0) {
          flag = 1;     
      }
      else{
        flag = 0;
        break;
      }
    }
   if(flag === 1)
    {
      console.log(i);
      break;
      
    }
  }
  }
smallestCommons([1,5]);
