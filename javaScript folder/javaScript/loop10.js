//  Write a JavaScript program to construct the following pattern, using a nested for loop.

// *
// * *
// * * *
// * * * *
// * * * * *
let loop = ' ' , star = "*";
for (let i = 1; i <= 5; i++) {
  for (let j = i; j <=i; j++) {
   loop = loop + star;
  }
  console.log(loop); 
}
