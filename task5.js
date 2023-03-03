function whatNumberIsIt (n) {
   return `Input number is ${n == Number.POSITIVE_INFINITY ? `Number.POSITIVE_INFINITY` : n == Number.NEGATIVE_INFINITY ? `Number.NEGATIVE_INFINITY` :
            n == Number.MAX_VALUE ? `Number.MAX_VALUE` :
            n == Number.MIN_VALUE ? `Number.MIN_VALUE` :
            Number.isNaN(n)? `Number.NaN`: n }`
}

console.log(whatNumberIsIt(1/0))
console.log(whatNumberIsIt(100))
console.log(whatNumberIsIt(1.7976931348623157e+308))
console.log(whatNumberIsIt(5e-324))
console.log(whatNumberIsIt(-Number.MAX_VALUE*2))
console.log(whatNumberIsIt(NaN))
console.log(whatNumberIsIt(Infinity+1))
