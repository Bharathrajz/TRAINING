//^ var let const

// var a = 10;
// a = 30;//! re-initializaion is possible
// console.log(a);

// let b = 20;
// b = 30;//! re-initialization is possible
// console.log(b);

// const c = 20;
// c = 30;//! re-initialization is not possible
// console.log(b);

// var a = 10;
// var a = 30;//! re-declaration is possible
// console.log(a);

// let b = 20;
// let b = 30;//! re-declaration is not possible
// console.log(b);

// const c = 30;//! re-declaration is not possible
// const c = 20;
// console.log(b);

//^ Primitive and Non-Primitive Types

//* Primitive Types 
//& String

let str1 = "Double Quotes"
console.log(str1)
console.log(typeof(str1))

let str2 = "Single Quotes"
console.log(str2)
console.log(typeof(str2))

let str3 = "Double Quotes"
console.log(str3)
console.log(typeof(str3))

//& Number 

 let num1 = 10;
 console.log(num1);

//& boolean
 
let bool = true;
console.log(bool);
//& Undefined
let a;
console.log(a , typeof(a));
//& null
let b = null;
console.log(b , typeof(b));