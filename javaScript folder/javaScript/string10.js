function swapcase(input) {
  let str = input.split('');
  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    if (temp === str[i].toLowerCase()) {
      str[i] = temp.toUpperCase()
    } else if (temp === str[i].toUpperCase()) {
      str[i] = temp.toLowerCase();
    }
  }
  return str.join('');
}
console.log(swapcase('AaBbc'));
