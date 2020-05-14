/*
Fungsi charCounter harus mengembalikan sebuah object yang merepresentasikan
jumlah karakter yang muncul di kalimat tersebut.
Misal huruf "H" atau "h" (abaikan kapital). Muncul sebanyak 1x
Huruf "l" muncul sebanyak 3x
Dst...

contoh:
    - charCounter("Hello world!")
hasil:
{
  d: 1,
  e: 1,
  h: 1,
  l: 3,
  o: 2,
  r: 1,
  w: 1
}
*/

function charCounter(sentences) {
    function isAlphaNum(char) {
        return /[a-z0-9A-Z]/.test(char);
    }
    
    let result = {};
    
    for (let char of sentences) {
        if (isAlphaNum(char)) {
            let letter = char.toLowerCase();
            result[letter] = ++result[letter] || 1;
        }
    }

    return result;
}

console.log(charCounter("Hello world!"));