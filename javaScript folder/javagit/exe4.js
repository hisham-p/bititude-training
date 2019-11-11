// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
// smallestCommons([1,5]);


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
