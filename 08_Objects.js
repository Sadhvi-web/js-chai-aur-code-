// Object literals
// Create a JavaScript Object Using Object Literal
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


// Constructor in object
// Creation Using new Object() Constructor
// const tinderUser = new Object()      // This is a single ton object
const tinderUser = {}                   // This is not a singleton object
tinderUser.name = "Sadhvi",
tinderUser.age = 20,
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    Userfullname : {
        firstName : "Sadhvi",
        lastName : "Kumari"
    }
}
console.log(regularUser);
console.log(regularUser.Userfullname);
console.log(regularUser.Userfullname.firstName);
console.log(regularUser.Userfullname.lastName);

// Merging Objects
const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {40:"d",50:"e"}

// const obj3 = Object.assign({},obj1,obj2)     //we wont use this
const obj3 = {...obj1,...obj2}                  // We will use this
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
