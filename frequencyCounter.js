/*
Tulis sebuah fungsi "same", yang dapat menerima 2 array.
Fungsi harus mengembalikan true, jika setiap nilai di dalam array pertama mempunyai
hasil kuadrat yang nilainya sama dengan nilai yang ada di array kedua.
Frekuensi dari setiap nilai juga harus sama.

same([1,2,3], [4,1,9]) // true 
    - karena 1 kuadrat adalah 1. 1 terdapat di array kedua. 
    - 2 kuadrat adalah 4. 4 terdapat di array kedua.
    - begitu juga dengan 3 kuadrat yaitu 9. 9 terdapat di array kedua

same([1,2,3], [1,9]) // false

same([1,2,1], [4,4,1]) // false 
    - karena frekuensinya tidak sama

*/

function same(arrayOne, arrayTwo) {  
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    }
  
    function createMapFromArray(array) {
      let map = {};
      for (let val of array) {
        map[val] = ++map[val] || 1;
      }
      return map;
    }
  
    // buat arrayTwo jadi oject map
    let map = createMapFromArray(arrayTwo);
  
    // looping arrayOne
    for (let val of arrayOne) {
        // cari nilai squared dari val
      let squared = val ** 2;
      // cari hasil squared di map.
      if (map[squared] && map[squared] > 1) {
          // jika ada, dan valuenya > 1. maka valuenya - 1
          map[squared] -= 1;
      } else if (map[squared] && map[squared] === 1) {
          // jika ada, dan valuenya == 1. maka remove
        delete map[squared];
      } else {
          // jika tidak ada, return false
          return false;
      }
    }
  
      return true;
    
}
  
console.log(same([1,2,3,2], [9,1,4,4]));