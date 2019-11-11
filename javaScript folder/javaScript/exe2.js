function uniteUnique(a,b,c){
  let arr = a.concat(b.concat(c));
  console.log(arr);
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

