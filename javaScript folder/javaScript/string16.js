function text_truncate(input, position, sub) {
  let str = input;
  if (position != null) {
    if (sub != null) {
      return str.slice(0, position) + sub;
    } else {
      return str.slice(0, position) + ' ....'
    }
  } else {
    return str;
  }
}
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.', 19))
console.log(text_truncate('We are doing JS string exercises', 15, '!!'))
