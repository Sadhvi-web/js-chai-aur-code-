// Destructuring in objects
const course = {
    coursename : "JS in hindi",
    courseprice : 2000,
    coursechannel : "Chai aur code"
}

// console.log(course.coursename);      //Instead of using this long way we hacve to do destructuring
const {coursename} = course
console.log(coursename);
const {coursename:Cname} = course
console.log(Cname);

// JSON (JavaScript Object Notation) API
// {
//     "name" : "Chai aur code",
//     "price" : "Rs19,999",
// }