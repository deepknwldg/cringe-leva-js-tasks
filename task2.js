function time(distance,boatSpeed,stream){
    const [dir, delta] = stream.split(' ');
    const speed = boatSpeed + ((dir[0] === 'U') ? -delta : +delta);
    return Math.round((distance / speed) * 100.0)/100.0;
}

console.log(time(24,10,"Downstream 2"))
console.log(time(24,14,"Upstream 2"))
console.log(time(54,28,"Downstream 3"))