const name = "Sadhvi"
const repoCount = 24

// console.log(name + repoCount)   This is old Method
console.log(`My name is ${name} and my repo count is ${repoCount}`) // This is modern syntax
// Advantages over +:
// More readable 
// Chain methods: ${name.toUpperCase()}
// Backend standard

console.log(`Name : ${name.toUpperCase()}`)

const gameName = new String("Sadhvi")
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)

// Substring Extraction
// Key: slice() supports negative indices, substring() doesn't 

console.log(gameName.substring(0,5))
console.log(gameName.slice(0,4))
console.log(gameName.slice(-2,5))

// trim and replace function
const newString = "    Sadhvi    "
console.log(newString.trim())  // removes white spaces

console.log(newString.replace(" ","*"))
console.log(newString.replaceAll(" ","*"))