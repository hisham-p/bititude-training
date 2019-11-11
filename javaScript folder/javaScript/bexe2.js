function uniteUnique(a,b,c){
  let arr = a.concat(b.concat(c));
  // console.log(arr);
  let newarr = [];
  let popArr = [];
  let newpop = [];
  let finalArray =  [];
  for(let i=0 ; i < arr.length ;i++)
  {
    if(arr.indexOf(arr[i]) === i){
 newarr.push(arr[i]);
    }else{
      popArr.push(arr[i]);
    }
  }
  return newarr;
  for(let m=0 ; m < popArr.length ;m++)
  {
    if(popArr.indexOf(popArr[m]) === m){
      newpop.push(arr[m]);
    }
  }



//   for(let j=0 ; j < newarr.length;j++)
//   {
//     for(let k = j ; k< popArr.length ; k++){
//       if(newarr.indexOf(newarr[j]) === popArr[k]){

//       }else{
//         finalArray.push(newarr[j]);
//       }
//     }
//   }
// //  return finalArray;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4 ], [2, 1]));

