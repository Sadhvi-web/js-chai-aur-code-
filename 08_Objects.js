// Object literals
// Create a JavaScript Object
const JsUser = {
    name:"Sadhvi",
    "full name" : "Sadhu Kri",
    age:20,
    email:"Sadhvi@google.com",
    location:"India",
    isLoggedIn:false,
    lastLoginDays:["Saturday","Sunday"]
}


// access object
// Method 1
console.log(JsUser.email);      // We generally use this
// Method 2
console.log(JsUser["email"]);   // we use this when in some special cases when we use to acces like"full name".
// console.log(JsUser."full name"); This gives an error
console.log(JsUser["full name"]);


// Question interviewer ask ek symbol lena hai uko define karna hai , usko keys ki tarah act karna hai aur usko print karwana hai
const mySym = Symbol('key1')
const JsUser2 = {
    // mySym : "myKey1"     // this is wrong
    [mySym]:"myKey1",
    email:"babu1234@yuiu.com"
}

// console.log(JsUser2.mySym);
// console.log(typeof JsUser2.mySym);     // In this datatype shows string but we want Symbol
console.log(JsUser2[mySym]);    // This is the correct way of printing 
console.log(JsUser2);



// Changing values
JsUser.email = "Sadhu456@chatgpt.com"
console.log(JsUser)

// Freeze function used to lock the value from being change
Object.freeze(JsUser2)
JsUser2.email = "kumari456@chatgpt.com"  // this value will not assign to email as the object is freezed
console.log(JsUser2);

// Function in objects
JsUser.greetings = function(){
    console.log("hello JS User");
    console.log(`hello JS User,${this.name}`);
}

console.log(JsUser.greetings);
console.log(JsUser.greetings());