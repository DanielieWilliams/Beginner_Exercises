"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "hello, " + name + "!";

}

console.log(sayHello("Danielie"));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

function sayHello("argument"); {
    var helloMessage();
    console.log helloMessage;


    //copied from David's walk through

    var helloMessage = sayHello("Fortuna");

    console.log(helloMessage);

}


 // var argument =  "yourName";
 //
 //    console.log(sayHello(argument));







/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName (parameter)
{
    var myName = "Danielie Williams";

    function 'sayHello' ();

    console.log(sayHello(DanielieWilliams));
}
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
 * different result every time you refresh the page if you are using the random
 * number)
 *
 *
 *
 */
    function isTwo(num) {
    return (2 === number);
}

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

//COPIED FROM DAVIDS WALK THROUGH//

function calculateTip(tipPercentage, bill) {
    return bill * tipPercentage;
}
console.log(calculaeTip ("from a $ meal"))






/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


//COPIED FROM DAVIDS WALK THROUGH//

var billBeforeTip = parseFloat("What was you bill amount?"));
var tipPerc = parseFloat("What percentage would you like to tip?");
alert ("For a bill of $" + billBeforeTip.toFixed(2) + "add a tip percentage of" + (tipPercentage + 100) + %, you would add a tip of $" +;
calculateTip(tipPerc, billBeforeTip).toFixed("2");


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.c
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

//COPIED FROM DAVIDS WALK THROUGH//

function applyDiscount = parameter(price, discountPerc);{
return price - (price * priceDisc);
}