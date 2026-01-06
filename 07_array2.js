const pogo = ["Chota Bheem","Chutki","Raju","Jaggu"]
const CN = ["Oggy" , "Olivia","Jack","Bob"]

// pogo.push(CN)
// console.log(pogo);

// Concate two arrays
// let newChannel = pogo.concat(CN)
// console.log(newChannel)

// spread function
let newChannel = [...pogo,...CN]
console.log(newChannel)

// flat function
const variable = [1,2,3,[4,5],6,[7,8,[9]]]
const real_variable = variable.flat(Infinity)
console.log(real_variable);
