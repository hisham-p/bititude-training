function protect_email(input){
let str = input;
let new1 = str.split("@");
let new2 = new1[0].replace(new1[0],'.....');
return new1[0][0] + new1[0][1] + new1[0][2] +new2+'@'+ new1[1];
}
console.log(protect_email("robin_singh@example.com"));
