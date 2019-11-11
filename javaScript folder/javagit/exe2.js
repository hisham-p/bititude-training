// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// ```uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);```

function uniteUnique(a,b,c){
  let arr = a.concat(b.concat(c));
  // console.log(arr);
  let newarr = [];
  for(let i=0 ; i < arr.length ;i++)
  {
    if(arr.indexOf(arr[i]) === i){
 newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4 ], [2, 1]));

