// Array

// Array Declaration
const arr1 = [1,2,3,4,5]
const arr2 = ["shaktiman" , "spiderman"]
const arr3 = new Array(10,20,30,40)

// Acessing elements of Array
console.log(arr1[0])
console.log(arr2[0])
console.log(arr3[0])

// Methods in Array
arr1.push(9)      // add new element at the end of array
arr1.pop()        // remove existing element from the end of array
arr1.unshift(100) // add new element at the start of array
arr1.shift()      // remove existing element from the start of array
console.log(arr1);
console.log(arr1.includes(9))

const arr4 = arr1.join()      // converts array into string type
console.log(arr4)

// Slice and Splice
const newArray = arr1.slice(1,3)
console.log(newArray)

const newArray2 = arr1.splice(1,3)
console.log(arr1)
console.log(newArray2)
// The main difference between slice() and splice()
// slice() copies a portion of an array without modifying the original, 
// while splice() modifies the original array by adding or removing elements at a specified position. 