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

////////////CONDITIONALS////////

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */

var enteredNumber = confirm('Would you like to enter a number?');
var enteredNumber = parseFloat(prompt("Please enter number"));

if (isNaN(enteredNumber)){
    alert("Sorry, try again by entering a number.");

}if (enteredNumber % 2 === 0) {
    alert("Number is even");
}else if (enteredNumber % 2 === 1) {
    alert("Number is odd");
}if (enteredNumber + 100){
    alert("Your Number plus 100 is: " + (enteredNumber + 100));
}if (enteredNumber >= 0) {
    alert("Your number is positive");
}if (enteredNumber < 0)
    alert("Your number is negative");

/////Refactor above code using functions////
/// enteredNumber
///isNaN ///"alert"
///isEven ///isOdd
//isPos //isNeg

function refactorNumbers(number) {


    confirm('Would you like to enter a number?');
    var enteredNumber = parseFloat(prompt("Please enter number"));

    if (isNaN(enteredNumber)) {
        alert("Sorry, try again by entering a number.");

    }
    if (enteredNumber % 2 === 0) {
        alert("Number is even");
    } else if (enteredNumber % 2 === 1) {
        alert("Number is odd");
    }
    if (enteredNumber + 100) {
        alert("Your Number plus 100 is: " + (enteredNumber + 100));
    }
    if (enteredNumber >= 0) {
        alert("Your number is positive");
    }
    if (enteredNumber < 0)
        alert("Your number is negative");
}
refactorNumbers();


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(input) {
    if (input === 'blue') {
        return ("Blue is the color of the sky");
    } else if (input === 'red') {
        return ("Strawberries are red");
    }else if (input === 'cyan') {
        return ("I don't know anything about cyan");
    } else {
        return ("This is not a color analysis");
    }
}
console.log(analyzeColor('purple'));
console.log(analyzeColor('red'));
console.log(analyzeColor('blue'));
console.log(analyzeColor('cyan'));

///////// ^^^^ Creating a function and returning a message and then console logging to test the string passed. I learned that using Alert Message for this particular problem and also console logging after each if else statement wasn’t correct because although it worked, it showed up as undefined. So truly creating the basic function syntax in this particular problem doesn’t show up as undefined. Using return gives you your results without undefined.///////


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var analyzeColor = prompt("Please pick a color.");

switch(analyzeColor){
    case "blue":
        alert("Blue is the color of the sky");
        break;
    case "red":
        alert("Strawberries are red");
        break;
    case "cyan":
        alert("I don't know anything about cyan");
    default:
        alert("This is not a color analysis.");
        break;
}






/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);