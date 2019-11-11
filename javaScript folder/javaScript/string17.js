function string_chop(input, n) {
  let str = input;
  let string= [];
  string.push(str.slice(0,n));
  return string.join(' ');
}
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));
