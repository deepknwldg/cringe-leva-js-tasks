function isSortedAndHow(array) {
    var last = array[0]
    var result = 'no'
    var newResult = NaN
    for (let i = 1; i <= array.length-1; i++) {
      if (last >= array[i]){
        newResult = 'yes, descending'
      } else {
        newResult = 'yes, ascending'
      }
      if (result != 'no' & result != newResult){
        result = 'no'
        break;
      }
      result = newResult
    }
    return result
  }
  
  console.log(isSortedAndHow([1, 2, 3]));  
  console.log(isSortedAndHow([15, 7, 3,-8]));  
  console.log(isSortedAndHow([4, 2, 30])); 
  