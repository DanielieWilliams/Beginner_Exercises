//6. BREAK AND CONTINUE//


// Break and Continue
//
// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:
//
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49


// for(var i = 1; i <= 50; i ++) {
//     var randomNumber = Math.floor(Math.random() * 50) + 1;
//         { if (i === 50)
//         console.log("Yikes! Skipping number :" + "27");
//         break;
//              if ( i === 50)
//             continue;
//             }
//         console.log("Here is an odd number : " + randomNumber);
//         }


//WALKTHROUGH FROM VIVIAN//

// do{ var userNumber=Number(prompt("Please enter a number between 1 and 50"));
//
//     if(userNumber < 1 || userNumber > 50){
//         alert(userNumber + "is not between 1 and 50, please enter again");
//     }else if (userNumber % 2 === 0){
//         alert(userNumber("Is not odd, please enter again"));
//     }else if ( isNan(userNumber)){
//         alert(userNumber ("is not a number! Please enter again."));
//     }else{
//     }alert("Congrats, you picked the correct number!");
//     break;
//
//     }while (true);
//
//     for(var i = 1; i <= 50; i ++) {
//
//     if (i % 2 === 0) {
//         continue;
//     }
//     if (i === userNumber) {
//         console.log("Yikes! Skipping number :" + "27");
//     } else {
//         console.log("Here is an odd number : " + i);
//     }
// }

//SECOND WALK THROUGH

// for(var i = 1; i <= 50; i +=2) {
//         { if (i === 50)
//         console.log("Yikes! Skipping number :" + "50");
//         continue;
//
//             }
//         console.log("Here is an odd number : " + randomNumber);
//         }


