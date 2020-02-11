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









