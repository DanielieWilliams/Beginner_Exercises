"user strict";

// Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

var i = 1;

while( i < 65536){
    console.log(i *= 2);
}


//While Loop Iteration Example//
var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}
/// while loop iteration #0
// while loop iteration #1 and so on//


// 3. An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.

var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);
do {

    var conesBought = Math.floor(Math.random() * 5) + 1;
    console.log(conesBought);

        if (conesBought > allCones) {
            console.log("I don't have enough");

        } else {
            allCones -= conesBought;
            console.log("I have " + allCones + "cones left.");
            }
        }
        while (allCones > 0);
        console.log("I've sold out. Please come back tomorrow.");




// //Algorithm//
// randomNumber 50 - 100 = conesToSell
// generate 1-5 = conesBought
// console.log = amt of cones sold


// ///DO WHILE EXAMPLE///
//         var i = 99;
//
//         do {
//             console.log('while loop iteration #' + i);
//             i++;
//         } while (i < 99);
//     }
//     }

//write a function name bananaLength that returns the length of a string, if the input is not a string, return false

function bananaLength(str){
    return str.length;
}
console.log(bananaLength("strawberries"));











