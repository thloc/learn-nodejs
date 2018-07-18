/* 
 * #1. A variable: A variable is a “named storage” for data.
 */

let hello = 'This is a message.';
let message = hello; // copy 'Hello world' from hello into message
console.log(hello); // Hello world!
console.log(message); // Hello world!

// Use the "let" keyword.
let val;
val = 'Hello World'; // store the string

// Declare multiple variables.
let user = 'ABC',
    age = 23;

// "var" instead of "let".
var number = 1;

/*
 * #2. Constants: To declare a constant (unchanging) variable.
 */

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";


// For example:
let a = true;
let b = false;
let c;
console.log(a && b); // true and false      --> false
console.log(a || 0); // true or 0           --> true
console.log(b || 0); // false or 0          --> 0 
console.log(a && c); // true and undefined  --> undefined
