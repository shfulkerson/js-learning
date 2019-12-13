/**
 * Place your header here
 */
//In math we learn several operators. These are things like + - * and /
//Javascript uses operators in much the same way

let assignment = "= is the assignment operator. We have discussed it previously.";
console.log(assignment);

console.log("There are several arithmetic operators in javascript");

let addition = 5 + 4.3;
console.log("Addition: 5 + 4.3 = " + addition);
let subtraction = 3484 - 62;
console.log("Addition: 3484 - 62 = " + subtraction);
let division = 4096 / 512;
console.log("Addition: 4096 / 512 = " + division);
let multiplication = 89 * 4850.67;
console.log("Addition: 89 * 4850.67 = " + multiplication);

//The last three arithmetic operators are really cool special cases
//The increment operator adds 1 to the value of the variable and assigns that back into the original variable
let incrementMe = 8;
incrementMe++;
console.log("8++ = " + incrementMe);
//The decrement operator subtracts 1 from the value of the variable and assigns that back into the original variable
let decrementMe = 512;
decrementMe--;
console.log("512-- = " + decrementMe);
//The final arithmetic operator is modulus. It calculate the remainder when two numbers are divided
//Lets look at a few examples
let remainder = 12 % 5; //we will use 1 variable and update the value
console.log("The remainder of 12 / 5 is " + remainder);
remainder = 10 % 5;
console.log("The remainder of 10 / 5 is " + remainder);
remainder = 14 % 3;
console.log("The remainder of 14 / 3 is " + remainder);
remainder = 14 % 4;
console.log("The remainder of 14 / 4 is " + remainder);
remainder = 64 % 3;
console.log("The remainder of 64 / 3 is " + remainder);
