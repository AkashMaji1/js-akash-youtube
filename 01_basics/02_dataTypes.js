"use strict"; //treat all cjs code  as newer version

//alert (3+3) //we are using nodejs ,not browser
 
let  age =21
let state=null
let city=undefined


// number => 2 to the power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value that represents nothing
//undefined => variable declared but no value assigned
//symbol => unique identifier

//object

console.log(typeof age);
console.log(typeof state); // null=>object type

//********************************DataTypes***********************************
//1. primitive:
//7Types=> string, Number, Boolean, Null, undefined, symbol, BigInt

//2.Reference(Non premitive) : 
// Arrays,Objects,Function
const heros=[ "spiderman", "Iron Man", "Thor"]
let myObj={
 name:"akash",
  age: 22,
}
const myFunction = function(){
 console.log("hello world")
}

//+++++++++++++++++++++++++++++++Stack & Heap memory+++++++++++++++++++++++++++++
//stack(primitive)
let a = 10;
let b = a;   // copy of value
b = 20;
console.log(a); // 10
console.log(b); // 20

//Heap (Non-primitive)
let obj1 = {
  name: "Akash"
};
let obj2 = obj1;  // reference copy
obj2.name = "Rahul";

console.log(obj1.name); // Rahul
console.log(obj2.name); // Rahul




