"user strict;"


// In this challenge, you must verify the equality of two different
// given parameters: a and b.
//
//     Both the value and the type of parameters need to be
//     tested in order to have an matching equality. The possible types of the given parameters are:
//
// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
//
// What have you learnt so far that will permit you to do two different checks (value and type) with a single statement?
//
//     Implement a function that returns true if the parameters are equal, and false if they are different.

function checkEquality(isPassword, userInput) {
    return isPassword === userInput;
}

// console.log(checkEquality("a", "b"));

// Create a function that takes two numbers as arguments
// and return their sum.

function addition(a, b) {
    return a + b;
}

//
// console.log (addition("I and Love ", "And You"));


// Something which is not true is false, but something which is not not true is true!
// Create a function where given n number of “not”, evaluate whether it’s true or false.
//     Examples
//
// notNotNot(1, true) ➞ false
// // Not truenotNotNot(2, false) ➞ false
// // Not not falsenotNotNot(6, true) ➞ true
// // Not not not not not not true
//
// Notes
// Even though this challenge can be easily solved through the use of an if | else block, you might want to solve it through the use of a Boolean Logic Operator or a Bitwise Operator, taking the opportunity to become acquainted with these methods (check the Resources tab to find specific links).

function isNotTrue(inputA, inputB, inputC) {
    return (inputA % 6 === 1) && (inputB % 7 === 1) && (inputC % 2 === 0);
}

//
console.log(isNotTrue(1, 7, 2));


//Truthy or Falsy?
//A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:

// false
// null
// undefined
// 0
// NaN
// ""
//
// In JavaScript, an empty object and an empty array are both considered "truthy," but an empty string is considered false when evaluated as a Boolean (this behavior is what we call "falsey").
//
// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.


function isTruthy(input) {
    var x = Boolean(input);
    if (x == true) {
        return 1;
    } else {
        return 0;
    }
}

// console.log(isTruthy("2"));


// Ternary Functions ? : (if and else can be used)//


function truthyFalsey(input) {
    return (Boolean(input > 0));
}

// console.log(isTruthy("2"));


function truthyFalsy(x) {
    return x ? 1 : 0;
}


function isOdd(input) {
    return input % 2 === 1;
}



//EXTERNAL JS AT HOME COPYING AND PASTING SCENARIOS AND DOING AGAIN TO MAKE SURE I HAVE IT DOWN//

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var littleMerm = Number (prompt("How many days do you want to rent littleMerm?"));
var brotherBear = Number (prompt("How many days do you want to rent brotherBear?"));
var Hercules = Number (prompt("How many days do you want to rent Hercules"));

alert ("This is Your Total:" + (littleMerm + brotherBear + Hercules) * 3);




// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


var googlePay = Number (prompt("How much do you get paid per hour at Google?"));
var amazonPay = Number (prompt("How much do you get paid per hour at Amazon?"));
var facebookPay = Number(prompt("How much do you get paid for hour at Facebook?"));
var totalPay = Number (alert("This is Your Total Pay for the Week:" + (googlePay + amazonPay + facebookPay)));

var googleHours = Number (prompt("How many hours did you work at Google this week?"));
var amazonHours = Number (prompt("How many hours did you work a Amazon this week?"));
var facebookHours = Number (prompt("How many hours did you work at Facebook this week?"));
var  totalHours = Number (alert("These are Your Total Hours for the Week:" + (googleHours + amazonHours + facebookHours)));


alert ("This is Your Salary for the Week:"+ (totalPay * totalHours));
//unfinished for the moment//






// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of product





