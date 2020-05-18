function findLongestSubstring(str) {
    if (str.length < 1) {
        return 0;
    }

    let obj = {};
    let length = 0;
    let i = 0;
    let j = 0;

    function storeLength(tempLength) {
        if (length === 0 || tempLength > length) {
            length = tempLength;
        }
    }

    while (str[i] && str[j]) {
        if (i === j) {
            obj[str[i]] = i;
            j++;
        } else {
            if (obj[str[j]] >= 0 && obj[str[j]] >= i) {
                storeLength(j - i);
                i = obj[str[j]] + 1;
                obj[str[j]] = j;
                j++
            } else {
                obj[str[j]] = j;
                j++;
                // if we react end of the string, we calculate the length again
                if (!str[j]) storeLength(j - i);
            }
        }
    }

    return length;
}

// console.log(findLongestSubstring('rithmschool'));
// console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
// console.log(findLongestSubstring('bbbbbb'));
// console.log(findLongestSubstring('longestsubstring'));
// console.log(findLongestSubstring('thisishowwedoit'));
