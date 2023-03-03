function whatNumberIsIt (n) {
   var result = ''
   switch(n) {
      case  Number.POSITIVE_INFINITY:
        result = 'Number.POSITIVE_INFINITY'
        break;
      case  Number.NEGATIVE_INFINITY:
        result = 'Number.NEGATIVE_INFINITY'
        break;
      case Number.MAX_VALUE:
        result = 'Number.MAX_VALUE'
        break;
      case  Number.MIN_VALUE:
        result = 'Number.MIN_VALUE'
        break;
      default:
        result = n
        break;
    }
    return `Input number is ${result}`
}

console.log(whatNumberIsIt(1/0))
console.log(whatNumberIsIt(100))
console.log(whatNumberIsIt(1.7976931348623157e+308))
console.log(whatNumberIsIt(5e-324))
console.log(whatNumberIsIt(-Number.MAX_VALUE*2))
console.log(whatNumberIsIt(NaN))
console.log(whatNumberIsIt(Infinity+1))
