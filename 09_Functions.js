// Functions in javascript
function saymyName () {
    console.log('S');
    console.log('A');
    console.log('D');
    console.log('H');
    console.log('V');
    console.log('I'); 
}
saymyName()



function addTwoNos(num1 , num2) {
    console.log(num1+num2);  
}
// addTwoNos(10,20)
const result = addTwoNos(10,20)
console.log("Result : ",result);



function addTwoNos2(num1 , num2) {
    return num1 + num2 
}
const result2 = addTwoNos2(10,50)
console.log("Result : ",result2);


function loginUserName(username){
    if (username === undefined) {
        console.log("Please enetr usename");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserName('Sadhvi'));
console.log(loginUserName());


function Calculateprice(...num1){
    return num1
}
console.log(Calculateprice(200,300,400,2000));



const user = {
    name : 'Sadhvi',
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}.`); 
}
handleObject(user);



const myArray = [200,100,500,900]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));
