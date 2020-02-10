"user strict";

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

console.log(concat("I And Love" , " And You" ));




