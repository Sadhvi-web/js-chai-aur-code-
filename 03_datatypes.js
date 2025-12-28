"use strict";  //Purpose: Treat old JS code as modern JS

// alert("hello")  // We are using Node.js not browser
console.log("hello")

// Documentation Sources
// Two official docs:
// MDN (Mozilla Developer Network) - Beginner friendly s
// TC39/ECMAScript - Official specification 

// Datatypes
let name = "Sadhvi"
let age = 21
let isLoggedIn = true
let state
let nullVar = null
let id = Symbol('123')

console.table([name,age,isLoggedIn,state,nullVar,id])

// typeOf Operator
console.log(typeof(name))   // String
console.log(typeof(null))  // Object