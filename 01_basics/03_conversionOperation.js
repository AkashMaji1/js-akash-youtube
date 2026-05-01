let score= "69"
console.log(typeof score); //string
let valueInNumber= Number(score) 
console.log(valueInNumber); //69
console.log(typeof valueInNumber); //number

let name="Akash"
console.log(typeof (name)); //string
console.log(typeof Number(name)); //NaN (Not a Number)
console.log(name); //name
console.log(isNaN(Number(name))); //true 

// "33"=> 33
// "33abc" => NaN
// "abc33" => NaN
// "abc" => NaN
// " " => 0

let maji="akash"
let booleanMaji= Boolean(maji) 
//in JavaScript, any non-empty string (even "akash") is "truthy," so it becomes true.
console.log(booleanMaji); //true
console.log(typeof booleanMaji); //boolean

//1 => true , 0 => false
//-1 => true
console.log(Boolean(-1)); // true 
//" " => false
//"non_empty" => true



