/**
 * Place your heading here
 */

//let is a new (as of ES6) keyword to declare a variable
//at first blush, it would seem that var and let function identically
//the major difference is the "scope" of the variable (this is not the only difference)
//var creates a global variable and let creates a block scope variable
//Let's see if we can clear this up with some examples

console.log(varVariable);   //OUTPUT from the following 3 lines:
var varVariable = 32;       //undefined
console.log(varVariable);   //32
//even though the variable varVariable isn't declared until the line after the
//first console log, this doesn't create an error because var declares the
//variable globally

//Uncomment the following line when you are ready to test let
//console.log(letVariable);
let letVariable = 64;
console.log(letVariable);
//Once you uncomment line 19 and run the program, you will recieve an error
//

/**
 * place your code here
 * Expectations: write a code snippet which creates four variables using the keyword "let" and prints them
 * to the console
 */
