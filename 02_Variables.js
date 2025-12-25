const accountId = 123654
let accountEmail = "acc@gmail.com"
var accountPassword = 12345
accountCity = "Jaipur"

// accountId  = 2
// console.log(accountId)  Not Allowed to change const thing

accountEmail = "hchc@gmail.com"
accountPassword = "abcabc"
accountCity = "Bengaluru"

console.table([accountEmail,accountPassword,accountCity])
// In modern JavaScript (ES6+), you should use let and const instead of var due to the issues with var's scoping, hoisting, and re-declaration behaviors, which can lead to unpredictable results and bugs. 