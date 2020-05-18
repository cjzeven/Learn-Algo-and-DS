// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
   //1,2,3,4,5,6,7,8,9,10
   if (num <= 1) return 1;
   return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(10));
console.log(recursiveRange(6));
