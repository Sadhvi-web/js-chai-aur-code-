// Numbers
const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 12.3456
console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
// console.log(hundreds.toLocaleString()) Gives output in US Dollar
console.log(hundreds.toLocaleString("en-IN"))
console.log("\n")

// -----------------------------------------
// Maths
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.67));
console.log(Math.PI);
console.log(Math.sqrt(49));
console.log(Math.min(4,6,3,77,0,-9));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+1);

// to print random value between 10 to 20
min = 10
max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);
