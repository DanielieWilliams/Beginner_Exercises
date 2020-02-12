//   1. Create a file named for_loops.js inside the js directory and link it to your loops.html file.
//
// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
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
//
//

// function showMultiplicationTable(number){
//     for(var i = 1; i < 10; i ++)
//         console.log('7 x ' +i + " =", + number * i);
// } showMultiplicationTable(7);


// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:


// for(var i = 20; i <= 29; i ++) {
//     var randomNumber = Math.floor(Math.random() *201) + 10;
//
//     if (randomNumber === 0) {
//         console.log(randomNumber + " is even");
//     }
//     if (randomNumber  % 2 === 0) {
//         console.log(randomNumber + " is even");
//     } else {
//         console.log(randomNumber + " is odd.");
//     }
// }


// 4. Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


// MAYBE THIS ONE. WORKING ON GETTING IT TO LOOK LIKE A TRIANGLE//
// var totalNumberOfRows = 9;

// for (var i = 0; i <=9; i++) {
//     for (var j = 1; j <= i; j++) {
//         arr.push(j);
//         console.log(j);
//     }
//     console.log("\n");
// }


// FOUND A SOLUTION ON STACK OVERFLOW BUT NOW NEED TO FIGURE OUT HOW TO MAKE REPEATING NUMBERS

// var triangle = '';
//
// for(var row =1; row <= 7; row++)
//     triangle += '1' .repeat(row) + '\n';
//
// console.log(triangle);

// 5.
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

// for (var i = 100; i > 0; i -= 5) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }



