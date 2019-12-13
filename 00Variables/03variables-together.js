/**
 * Place your heading here
 */

//In this program we will create some variables using var, let, and const
//We will then use those variables to update some HTML elements

//var variable assigned to a string:
var message = "We like variables. This text was created in a javascript file";

//let variable assigned to a number:
let theAnswer = 42;

//2 const variables to which are assigned html elements
//those elements are accessed by their html ids using the document object and the getElementById method
const messageElement = document.getElementById('message');
const answerElement = document.getElementById('answer');

messageElement.innerHTML = message;
answerElement.innerHTML = theAnswer;

/**
 * place your code here
 * Expectations: write a code snippet which creates four variables using the keyword "let" and prints them
 * to the console
 */
