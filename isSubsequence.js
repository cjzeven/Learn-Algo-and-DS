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

function isSubsequenceRecursive(str1, str2) {
    if (str1.length < 1) return true;
    if (str2.length < 1) return false;
    if (str1[0] === str2[0]) return isSubsequenceRecursive(str1.slice(1), str2.slice(1));
    return isSubsequenceRecursive(str1, str2.slice(1));
}

// console.log(isSubsequenceRecursive('hello', 'hello world'));
// console.log(isSubsequenceRecursive('sing', 'sting'));
// console.log(isSubsequenceRecursive('abc', 'abracadabra'));
// console.log(isSubsequenceRecursive('abc', 'acb'));
// console.log(isSubsequenceRecursive('aaa', "Madam, I'm Adam"));
// console.log(isSubsequenceRecursive('Thqckbrwnfxjmpdvrthlzydg', "The quick brown fox jumped over the lazy dog"));