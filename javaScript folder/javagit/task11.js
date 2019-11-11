// Write a JavaScript program that accept two integers and display the larger.
let a = [5,6];
for(i=0;i<a.length ; i++)
{
  if(a[i] > a [i+1])
  {
    console.log(a[i] + ' is larger than ' + a[i+1])
  }else if(a[i+1] > a [i]){
    console.log(a[i+1] +' is larger than ' + a[i] );
  }
}
