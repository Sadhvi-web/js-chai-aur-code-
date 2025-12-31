// Dates
let myDates = new Date()
console.log(myDates);
console.log(myDates.toDateString());
console.log(myDates.toISOString());
console.log(myDates.toJSON());
console.log(myDates.toLocaleDateString());
console.log(myDates.toLocaleString());
console.log(myDates.toString());
console.log(typeof(myDates));           //Date is of Object Type

let newDate = new Date(2004 , 3 , 20)
console.log(newDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)  // Time in milli sec
console.log(Math.floor(Date.now() / 1000))  // Time in milli sec
