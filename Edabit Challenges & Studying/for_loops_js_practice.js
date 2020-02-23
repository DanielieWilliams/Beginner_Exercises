"user strict";

// 1. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

// For Loop -> initializes -> checks the condition -> if its true it goes to the body --> increment. ---> if false, then done.

function showMultiplicationTable(number){
    for (var i = 1; i < 11;  i++)
    console.log('7 x ' +i + " =", + number * i);
}showMultiplicationTable(7);


// 2. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

for (var i = 20; i <= 29; i++) {
    var randomNumber = Math.floor(Math.random() * 201) + 10;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }
}


// 3. Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

//When creating triangle outputs, replacing variable i with "row" helps with confusion. Use .toString and .repeat to repeat the row. //

for (var row = 1; row <= 9; row++){
    console.log(row.toString().repeat(row));
}

///For Console Logging Outer Loops//

for(var outer = 1; outer < 10; outer++){
    console.log("outer loop");
    var output ="";


for(var inner = 1; inner <= outer; inner++){
    console.log("inside inner loop");
    output += outer;
}
console.log(output);
}


// Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// For Loop -> initializes -> checks the condition -> if its true it goes to the body --> increment. ---> if false, then done

for (var i = 100; i >= 5; i -= 5){
    console.log(i);
}




























