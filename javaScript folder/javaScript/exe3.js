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
   console.log(final);
  for (let j = 0; j < final.length; j++) {

    if (final[j] != newarr[j]) {
      finalArray.push(final[j])
    }
  }
  return finalArray;
  
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
