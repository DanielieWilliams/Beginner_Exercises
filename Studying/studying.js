"user strict;"

//TEN FUNCTIONS ASSESSMENT AT HOME//



// 1. Define a function named `isTrue` that takes in any input and returns true if the input provided is exactly equal to `true` in value and data type.


function isTrue(input){
    return input === true;
}
// console.log (isTrue([1,2]));


// 2. Define a function named `isFalse` that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.
//

function isFalse(value){
    return value === false;
}
// console.log (isFalse(false));

// 3. Define a function named `not` that takes in any input and returns the boolean opposite of the provided input.

function not(anyInput){
    return !anyInput
}
// console.log(not(false));

// 4. Define a function named `addOne` that takes in a single input. If the input is a number or a numeric string, return the value plus one.



function addOne(singleInput) {
    return parseFloat (singleInput) + 1;
}

// console.log(addOne("banana"));


// 5. Define a function named `isEven` that takes in a single input. If the input is an even number or a string containing an even number, return `true`. Any other input should return false for the output.


function isEven(singleInput){
    return singleInput % 2 === 0;
}

// console.log (isEven(-2));



// 6. Define a function named `isIdentical` that takes in two input arguments. If each input is equal both in data type and in value, then return `true`. If the values are not the same data type or not the same value, return `false`.

function isIdentical(donkeyA, elephantB){
    return donkeyA === elephantB;

}
// console.log(isIdentical(false, false));


// 7. Define a function named `isEqual` that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.

function isEqual(donkeyA, donkeyB){
    return donkeyA == donkeyB;
}
// console.log(isEqual("java", "javascript"));



// 8. Define a function named `or` that takes in two input arguments. The output returned should be the result of an `or` operation on both inputs.

function or(meats, vegetables) {
    return meats || vegetables;
}

// console.log(or(false, true));


// 9. Define a function named `and` that takes in two input arguments and returns the result of a logical `and` operation of both inputs.

function and(inputA, inputB){
    return inputA && inputB;
}
// console.log(and(true, false));

// 10. Define a function named `concat` that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.


 function concat(inputA, inputB){
    return inputA.toString() + inputB.toString();
 }

   // console.log(concat("I And Love" , " And You" ));




//EXTERNAL JS AT HOME COPYING AND PASTING SCENARIOS AND DOING AGAIN TO MAKE SURE I HAVE IT DOWN//

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

// var littleMerm = Number (prompt("How many days do you want to rent littleMerm?"));
// var brotherBear = Number (prompt("How many days do you want to rent brotherBear?"));
// var Hercules = Number (prompt("How many days do you want to rent Hercules"));
//
// alert ("This is Your Total:" + (littleMerm + brotherBear + Hercules) * 3);






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














// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.