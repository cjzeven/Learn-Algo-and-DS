function averagePair(arr, avg){
    if (arr.length < 1) {
        return false;
    }
    
    let totalAvg = avg * 2;
    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
        let total = arr[i] + arr[j];
        
        if (total === totalAvg) {
            return true;
        }
        
        let iNeed = totalAvg - arr[i];
        if (iNeed > arr[j]) {
            i += 1;
        } else {
            j -= 1;
        }
    }
    
    return false;
    
  }

  console.log(averagePair([1,3,3,5,6,7,19,21,22], 8));
//   console.log(averagePair([1,2,3], 2.5));
//   console.log(averagePair([-1,0,3,4,5,6], 4.5));
//   console.log(averagePair([4,2], 4));