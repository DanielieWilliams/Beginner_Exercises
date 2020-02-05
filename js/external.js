"use strict";

alert ("Welcome to my Website!");

var userInput = prompt('What is your favorite color?');
console.log('The user entered:' + White);
alert("Great! My favorite color is White, too.");

// //FIRST SCENARIO
// var userInput = prompt('How much are nine Disney movies at $3 a movie?');
// console.log(typeOf  + );
// console.log(typeOf userPrompt);'var price = (3 * 9); price; 27;
// alert("Yes, 27 is he answer.");


//copied this First Scenario from Andy Ball since I wasn't in class for this demonstrated answer//

var brotherBear = Number(prompt('How many days do you want to rent Brother Bear for?'));
var littleMerm = Number(prompt( 'How many days do you want to rent Little Mermaid for?'));
var hercules = Number(prompt(  'How many days do you want to rent Hercules?'));
var totalCost = ((brotherBear + littleMerm + hercules)*3);
alert ("Your total rental cost is $" + totalCost);


//SECOND SCENARIO

var google = Number (prompt( 'What is the sum of your paycheck from Google?'));
var amazon = Number(prompt('What is the sum of your paycheck from Amazon?'));
var facebook = Number(prompt(  'What is the sum of your paycheck from Facebook?'));
var sum = ((google + amazon + facebook)*3);
alert ("Your total salary for the month is $" + sum);

//SECOND SCENARIO HOURS FOR JOB copied from VIVIAN

var googleHours = Number (prompt( 'What were your hours at Google?'));
var amazonHours = Number (prompt( 'What were your hours at  Amazon?'));
var facebookHOurs = Number (prompt( 'What were your hours at Facebook?'));



// SECOND SCENARIO my original start:
// var userInput = prompt('What is the sum of my 3 paychecks?');
// console.log(typeOf userPrompt);' var payment =  (3 * 1130); payment;
// alert("Yes, the answer is $3,390.");




//THIRD SCENARIO (halfway solved (after viewing Vivian's way))
var currentSchedule = Number(prompt('What days do you not have class?'));
var classSchedule = Number(prompt(  'Is there a timeframe you are not in class?'));
var availability = ((currentSchedule + classSchedule));
alert ("Your currentSchedule + classSchedule" + availability);


//THIRD SCENARIO copied from VIVIAN
var classIsNotFull = confirm("Class is not full")
var noScheduleConflicts = confirm("Schedules do not conflict");

var studentEnrolledStatus =  classIsNotFull && noScheduleConflicts;
alert("Student can enroll: " + studentEnrolledStatus);



//FOURTH SCENARIO (unsolved)
// var premiumMem = userInput(prompt( 'Are you a Premium Member?'));
// var  regularMem = userInput(prompt(  'Are you a Regular Member?'));
// var  offer1 = userInput(prompt(  'How many product offers do you have?'));
// var  offer2 = userInput(prompt(  'Please enter product offer expiration date.'));
// var  = ((premiumMem + offer1 + offer2);
// alert ("" + );


//FOURTH SCENARIO copied from Vivan

var numberOfItems = Number(prompt("How many items are you buying?"));
var offerIsValid = confirm(prompt("Is the offer valid?"));
var isPremiumMember = confirm(prompt("Are you a premium member?"));

var discountAppliedStatus = offerIsValid  &&  (isPremiumMember || numberOfItems > 2);
alert("Can use discount:" + discountAppliedStatus);




