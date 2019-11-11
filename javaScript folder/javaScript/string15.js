function humanize_format(n) {
  if (n % 10 === 1) {
    return n + 'st';
  } else if (n % 10 === 2) {
    return n + 'nd';
  } else if (n % 10 === 3) {
    return n + 'rd'
  } else {
    return n + 'th';
  }
}
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
