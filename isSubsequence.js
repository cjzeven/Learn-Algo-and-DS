function isSubsequence(str1, str2) {  
  let arr = [...str1, ...str2];
  
  let i = 0;
  let k = str1.length;
  let j = k - 1;
  
  while(k < arr.length) {
      if (arr[i] === arr[k]) {
        if (i === j) {
            return true;
        }
        i += 1;
      }
      k += 1;
  }

  return false;
  
}

console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('abc', 'abracadabra'));
// console.log(isSubsequence('abc', 'acb'));
// console.log(isSubsequence('aaa', "Madam, I'm Adam"));
// console.log(isSubsequence('Thqckbrwnfxjmpdvrthlzydg', "The quick brown fox jumped over the lazy dog"));