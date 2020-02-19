"user strict";

function fizzbuzz(input) {
    if (input % 15 === 0) {
        console.log("fizzbuzz")
    } else if (input % 5 === 0) {
        console.log("buzz")
    } else if (input % 3 === 0) {
        console.log("fizz");
    }
} fizzbuzz(15);


////Anonymous Functions///


var increment = function(x) {
    return x + 1;
};

var square = increment(3);

console.log(increment(4));
console.log(increment(4)+ square);



///Arguments and Parameters///


function sum(a, b) {
    var result = a + b; // technically the `result` variable is not necessary
    return result;      // instead we could just return a + b directly
}

var x = 3;
var seven = sum(x, 4);

console.log(sum(2,5));
console.log(sum(x = 3, + seven));


///Global Variables///

// declare a global variable
var globalVar = "Look, I'm Global!";

// define the sayHello function
function sayHello() {
    // globalVar is accessible here since the sayHello function scope is a sub-scope of the global scope
    alert(globalVar);
}

sayHello();

///////

var foodCart = "Tenko Ramen, here!";
function hello(){
    alert (foodCart);
}
hello();


//////////LOCAL VARIABLES///////

var globalVar = "Look, I'm Global!"; // declare a global variable

function scopeExample() {
    var localVar = "Look, I'm Local!"; // declare a local variable
    alert(localVar); // localVar is accessible here
    alert(globalVar); // globalVar is accessible here
}

scopeExample();

//////

var vendingMachine = "Please take your snack.";

function snacks() {
    var receipt = "Here is your change.";
    alert(receipt);
    alert(vendingMachine);
}
snacks();

//////////// VARIABLE SUBSCOPES////


var x = 300;
var y = 100;

function scopeExample() {
    var x = 1;
    var y = 2;
    console.log('x: ' + x + ' y: ' + y); // x: 1 y: 2
    return x + y;
}

console.log('x: ' + x + ' y: ' + y); // x: 300 y: 100
// var returnValue = scopeExample();
console.log(scopeExample());


/////// IIFE Immediately-Invoked Function Expression//////

// // define a function and immediately invoke (i.e. call) it
// (function () {
//     var iffeVar = "I'm local to the IIFE.";
// })();
//
// alert(iffeVar); // undefined
/////////// ASK ABOUT IFFE//////


///////HOISTING////

'use strict';

sayHello1(); // Greetings from sayHello1.
// sayHello2(); // Uncaught TypeError: Property 'sayHello2' of object [object Object] is not a function

// declare a function in the global scope
function sayHello1 () {
    alert('Greetings from sayHello1.');
}

// assign a function to a variable named sayHello2
var sayHello2 = function () {
    alert('Greetings from sayHello2.');
};
sayHello2();

/////////////////////////////FUNCTIONS EXERCISE //////////////////////

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */


function sayHello(name){
    return "hello, " + name;
}
console.log(sayHello("codeup!"));



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */


var helloMessage = sayHello("Danielie");
console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = sayHello("Danielie");
console.log(myName);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(number){
    return (number % 2 === 0);

}
console.log(isTwo(3));
console.log(isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercentage, billTotal){
    return (tipPercentage * billTotal);
}

console.log(calculateTip(0.25 , 25.50));


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

function calculateTip(tipPercentage, billTotal){
    return (tipPercentage * billTotal);
}

var billTotal = parseFloat(prompt("What is the total of you bill?"));
var tipPercentage = parseFloat(prompt('What percentage would you like to tip?'));

alert ("Your tip is: " + calculateTip(tipPercentage, billTotal));


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(prePrice, discPercen){
    return (prePrice - (discPercen * prePrice));
}
var prePrice = 500;
var discPercen = .20;

console.log(applyDiscount(prePrice, discPercen));






