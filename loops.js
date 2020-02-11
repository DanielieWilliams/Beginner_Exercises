"use strict";
console.log("Hello from loops js");

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log(90);
console.log(91);
console.log(92);
console.log(93);
console.log(94);
console.log(95);
console.log(96);
console.log(97);
console.log(98);
console.log(99);
console.log(100);
/*********************************************
 *                   WHILE LOOPS
 *********************************************/
// A while loop will run WHILE a certain condition is true
// while (condition) {
//  code runs.
// }
​
//TODO TOGETHER: Create a while loop that counts up to 10 (non-inclusive) by 1
// (0, 1, 2...9)
​
​
​
//TODO TOGETHER: Create a while loop that counts down from 20 to 0 (inclusive) by 1
// (20, 19, 18...0)
​
​
​
//TODO TOGETHER: Create a while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)
​
​
​
//TODO: Create a while loop that counts to 100 (inclusive) in increments of ten:
// (10...20...30...)
​
​
​
//TODO: Create a while loop that counts down from 50 to 1 (inclusive) in increments of 1:
// (50, 49, 48, 47, 46 .... 1)
​
​
/*********************************************
 *               DO-WHILE LOOPS
 *********************************************/
// A do/while loop will run at least once.
​
// do {
//  Code to be run.
// } while (condition)
​
​
// var i = 10;
//
// while (i < 10) {
// 	console.log('while loop iteration #' + i);
// 	i++;
// }
​
​
// TODO TOGETHER: Why doesnt the example above run?
​
​
// TODO TOGETHER: Refactor the example above using a do-while loop. What behavior do we notice?
​
​
//TODO TOGETHER: Create a do-while loop that asks the user to confirm: "Would you like to exit?" What difference do you notice?
​
//TODO TOGETHER: Create a do-while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)
​
​
//TODO: Create a do-while loop that prompts the user for a color and continues to prompt until the string passed is "blue"
​
​
/*********************************************
 *               FOR LOOPS
 *********************************************/
// For loops: Loops that are designed to run a given number of times.
​
// for (/*initialization*/; /*condition*/; /*increment*/) {
// 	// body
// }
​
//TODO TOGETHER: Explore basic for loop syntax
​
​
// TODO TOGETHER: Write a for loop that loops through numbers 0 - 5 (inclusive);
​
​
// TODO TOGETHER: Why are loops beneficial?
​
​
// TODO TOGETHER: Console.log each color from the array randomColors
//  var randomColors = ["red","orange","yellow","blue","green"]
​
​
// for (var i = 0; i < randomColors.length; i++){
// 	console.log(randomColors[i]);;
// }
​
​
​
// TODO TOGETHER: Using a for loop, log all even numbers 0 - 100;
​
​
// TODO: Using a for loop, log all numbers divisible by 5, from 0 - 100;
​
​
// TODO: Using a for loop, complete the FizzBuzz challenge:
//  Your program should count up to 100.
//  For numbers divisible by 3, log "Fizz"
//  For numbers divisible by 5, log "Buzz"
//  If divisible by 3 and 5, log "FizzBuzz"
//  All other cases, just log the number.
​
​
​
/*********************************************
 *              BREAKS & CONTINUES
 *********************************************/
// We can get a loop to stop using break;
​
// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
// 	console.log('Loop counter is: ' + i);
//
// 	if (i === numberToStopAt) {
// 		console.log('We have reached the stopping point: break!');
// 		// use the break keyword to exit from the while loop
// 		break;
// 		// nothing after the break will get processed
// 		console.log('You will never see this line.');
// 	}
// }
​
​
// We can get an iteration to skip using continue;
// for (var i = 1; i < 100; i++) {
//
// 	if (i % 2 !== 0) {
// 		// skipping all odd numbers;
// 		continue;
// 	}
//
// 	console.log('Here is a lovely even number: ' + i);
// }
Collapse



