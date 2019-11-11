function uncamelize(input, n) {
  let str = input.split('');
  let nstr = [];
  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    if (temp === str[i].toLowerCase()) {
      nstr.push(str[i]);
    } else if (temp === str[i].toUpperCase()) {
      nstr.push(n);
      str[i] = str[i].toLowerCase();
      nstr.push(str[i]);
    }
  }
  return nstr.join('');
}
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld', '-'));
console.log(uncamelize('helloWorld', '_'));
