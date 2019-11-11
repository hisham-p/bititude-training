// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Note
// You can return the array with its elements in any order.

// ```diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);```




function diffArray(a, b) {
  let arr = a.concat(b);
  let newarr = [];
  let final = [];
  let finalArray = [];
  let finalArray1 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      final.push(arr[i]);
    } else {
      newarr.push(arr[i]);
    }
  }
  //  console.log(final);
  for (let j = 0; j < final.length; j++) {

    if (final[j] != newarr[j]) {
      finalArray.push(final[j])
    }
  }
  return finalArray;
  
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
