function string_chop(input, n) {
  let str = input;
  let string= [];
  if(n != null)
  {
  let m=0;
  // let p=n;
  for(let i=0; i < n ; i++){
  string.push(str.slice(0,n));
  m = n;
    n =
  // n=n+p;
  }
  }else{
  string.push(str);
  }
  return string;
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));
