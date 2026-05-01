// constant declaration
const accountId=12345
// variables declaration
let accountEmail="akashmaji6092@gmail.com"
var accountPassword="9842"
var accountCity="Kolkata"
let accountState;

accountEmail="newemail@gmail.com"
accountPassword="newpassword"
accountCity="newcity"   


console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope.
*/

console.table([accountEmail,accountPassword,accountCity,accountState])
