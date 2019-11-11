function count(input , search){
  let str = input.split(' ');
  let bin = [];
 for(let i=0 ;i < str.length ;i++){
   if(search === str[i].toLowerCase() )
   {
     bin.push(str[i]);
   }
 }
     return 'The word  "' + search + '"  repeats "' + bin.length + '" times in the string';  
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));

