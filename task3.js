function isSortedAndHow(arr) {
    const str = arr.join('');
    const asc = arr.sort((a, b) => a - b).join('');
    const dsc = arr.sort((a, b) => b - a).join('');
    if (str === asc) {
      return 'yes, ascending';
    } else if (str === dsc) {
      return 'yes, descending';
    } else {
      return 'no';
    }
  }
  console.log(isSortedAndHow([1, 2]));  
  console.log( isSortedAndHow([15,7, 3,-8]));  
  console.log(isSortedAndHow([4,2,30])); 