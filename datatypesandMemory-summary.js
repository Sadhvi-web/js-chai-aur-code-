// Data types has two types:

// Primitive Datatypes
// 7 categories of primitive datatype : String , Number , Boolean , Null , Undefined , Symbol , BigInt
// Examples:
let name = "Sadhvi"
let age = 21
let isValued = false
let nullVar = null
let star;
let score = Symbol("123")
let num = 123456789n

console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(isValued))
console.log(typeof(nullVar))
console.log(typeof(star))
console.log(typeof(score))
console.log(typeof(num))
console.log("\n")


// Non-Primitive Datatypes / Reference Datatypes
// 3 types of refernece Datatypes : Array , Objects , Functions
// Examples:
const heroes = ["Shaktiman","veer","chotabheem"];
let myObj ={
    name:"anand",
    age:19
};
const myFunction = function(){
    console.log("Hello World")
}

console.log(Array.isArray(heroes))
console.log(myObj)
console.log(typeof(myObj))
myFunction();
console.log(typeof(myFunction))

// ------------------------------------------------------
// Memory are of two types:
// 