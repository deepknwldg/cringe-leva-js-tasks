function isAllPossibilities(x){
    return !x.length
      ? false
      : x
        .sort((a, b) => a - b)
        .every((x, i) => x === i);
  } 
  
  console.log(isAllPossibilities([ 0,1,2,3 ]));
  console.log(isAllPossibilities([ 1,2,3,4 ]));