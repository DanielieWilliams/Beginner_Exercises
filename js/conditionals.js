"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// var numberOfItems = Number(prompt("How many items are you buying?"));
// var offerIsValid = confirm(prompt("Is the offer valid?"));
// var isPremiumMember = confirm(prompt("Are you a premium member?"));
//
// var discountAppliedStatus = offerIsValid  &&  (isPremiumMember || numberOfItems > 2);
// alert("Can use discount:" + discountAppliedStatus);


var number = Number(prompt("Would you like to enter a number?"));
var numberInput = confirm(prompt("Enter number here."));
var numberIsEven = confirm(prompt("Number is even."));
var numberIsOdd = confirm(prompt("Number is odd"));
var isNotANumber = confirm(prompt("What you entered is not a number"));


// REFRACTOR INTO A FUNCTION //

function number(

4
)
;
{
    var number
    ("1 - 100");
}
if numberInput = ("even");
{
    alert("Number Is Even!");
}
else
if numberInput("odd");
alert("Number Is Odd!");
{
    if numberInput = ("100");
}
{
    alert("Number is even.");
}
}
defaultStatus: isNotANumber("Not a number.");


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color);
{
    var color
    (blue);
}
else
if analyzeColor("blue");
{
    return ("Blue is the color of the sky");
}
else
if analyzeColor("red");
{
    return ("Strawberry is "
    red
    "); {
}
else
if analyzeColor("Cyan");
{
    return ("I don't know anything about Cyan");
}
else
{
    defaultStatus: analyzeColor("None of these colors");
}

console.log("Displaying colors of things.");


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */










/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(total);
{
    var luckyNumber
    (0 - 5);
}
if (luckyNumber === 0) ;
return ("no discount");
} else
if (takesInRandomNumber === 1) ;
{
    return ("10% discount");
    {
    }
else
    if (takesInRandomNumber === 2) ;
    return ("25% discount");
    {
    else
        if (takesInRandomNumber === 3) ;
        return ("35% discount");
    else
        if (takesInRandomNumber === 4) ;
        return ("45% discount");
    else
        if (takesInRandomNumber 5
    )
        ;
        return ("You'll get it all for free!");
    }


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);


//---------------------------------------CASEY WALK THROUGH----------------------------------------//

    console.log("hello from conditionals lec.js!");

​

// ================ REAL WORLD SCENARIO ================

// If a user is an admin,show a specific navbar

// If weather is rainy, show rain icon

// If number of lives is 0, game is over

​

​

// ================ IF STATEMENT SYNTAX ================

​

// if(condition){

// code here runs if condition evaluates to true

// }


​

// ================ IF STATEMENT EXAMPLES ================

//TODO Together: Show a specific navbar if user is admin
    var isAdmin = true;
    if (isAdmin) {
        // Display a specific navbar
        console.log("Displaying Admin Navbar");

    }

//TODO Together: Send a 20% off coupon if its users birthday
    var isBirthday = true;
    if (isBirthday) {
        //send 20% coupon//
        console.log("Sending Coupon");
    }
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
    var isRainy = true; //or false
    alert("It's Raining");


//TODO Together: Write an if statement that alerts the user whether or not they have enough
// money to buy a new item. Assume there are no hidden fees or taxes.

​var currentBalance = 1000;
    var itemCost = 500;

    if (currentBalance > itemCost) {
        alert("You can buy.");
    }

​
//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
    var numberOfLives = 3;
    if numberOfLives = 0;
    alert("Sorry Game Over");


//COPIED FROM CASEY //
    var numberOfLives = 3;
    if (numberOfLives === 0) ;
    {
        alert("Sorry Game Over");
    }

//^^ we can also use a <= sign //


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

    var ifSnowing = true;
    alert("It's Snowing!");

// COPIED FROM CASEY//

    var isSnowing = false;
    if (isSnowing) ;
    alert('It\s Snowing!');
}

//BETTER WAY TO WRITE THIS //

var weather = "snowing;"
if (weather === "snowing") {
    "alert ('It\s Snowing!');

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

​var numberInput = 1 < 10;
    var

        ​
//COPIED FROM CASEY//

    var number = 11;
    if (number > 10) {
        alert("number is greater than 10");
    }
​

​

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.

​//COPIED//

    function greaterThan10(number);
    if (number > 10) {
        alert("number is greater than 10");
    }

    console.log(greaterThan10)
)
;
​

​





​

// =============== IF / ELSE SYNTAX ================

​

// if(condition){

//     // code here runs if condition evaluates to true

// } else {

//     // code here runs if condition evaluates to false

// }

​//RANDOM NOTES for IF/ELSE EXAMPLES //

var light = "yellow";
if (light === "green") ;
{
    alert("Go ahead, you're clear!");
    {
    else
        {
            alert("You might want to think about slowing.");
        }




​

// =============== IF / ELSE STATEMENT EXAMPLES ================

//TODO Together: Show a specific navbar if user is admin, else show a different navbar
        var isAdmin = true;
        if (isAdmin) {
            //Display a specific navbar //
            console.log("Displaying Admin navbar");

        } else {
            console.log("Displaying regular navbar");

        }


        //TODO Together: Write an if statement that alerts "It's raining" if
        // isRainy is true, else return "have a nice day!"

    ​
var isRainy = true;
        if (isRaining) {
            alert("It's Raining, have a nice day");
        }
    }
​
var isRainy = false;
    if (isRaining) {
        alert("Have a Nice Day.")
    }

​

​

//TODO: Write an if statement that alerts "Sorry, game over" if
// numberOfLives is 0, else alert "Next Level!"

    var ifNumberOfLives = 1;
    if (numberOfLives > 1) ;

    alert("Sorry Game Over!");


    //COPIED FROM CASEY
    var numberOfLives = 1;
    if (numberOfLives === 0) ;
    {
        alert("Sorry Game Over!");
    }
else
    {
        alert("Next Level!");
    }


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to
// "snowing", else alert "Check back later for more details!"

    var snowing = true;
    {
        if (snowing) ;
        alert('It\s Snowing!');
    }

else
    {
        var snowing = false;
        alert('Come back later for more details!');
    }

//COPIED FROM CASEY//
    var weather = "snowing";
    if (weather === "snowing") {
        alert('It\s Snowing');

    } else {
        alert('Come back later for more details.');
    }


//TODO: Write an if statement that alerts true if numberInput is greater than 10,
// else alert "the number is less than 10"
    var numberOfInput = 15;
    if (numberOfInput < 10) ;
    {
        alert("true!");
    }
else
    {
        alert("Number is less than 10!");
    }


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns
// "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

​function checkIfGameIsOver(numberOfLives);
    {
        if (numberOfLives === = 0) ;
        return ("Sorry game over!");
    }
else
    {
        return ("Next Level!");

    }
    //COPIED FROM CASEY//
    console.log(checkIfGameIsOver(2));


​

​

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
    //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// ​var isRainy = true;
//     if(isRaining) {
//         alert("It's Raining, have a nice day");}
// }
// ​
// var isRainy = false;
// if(isRaining) {
//     alert("Have a Nice Day.")
// }

    function isRainy(raining);
    {
        if (isRainy = true) ;
        alert('It\s Raining!');
    }
else
    {
        function isRainy(raining);
        {
            alert('Have a Nice Day!');
        }


// SHOULD WE DELETE STUFF EXAMPLE

    ​
//EXAMPLES FOR ELSE IF//

        var day = "Wednesday";
        if (day === "Thursday") {
            alert("Thai food it is");
        }
    }
​   else
    if (day === "Friday") {
        alert("Pizza Time!");
        {
        else
            {
                alert("Guess we will have Esquire.");
            }


            //////Ternary Operator //////

            var traffic = "go";
            if (traffic === "go") {
                alert("Go");
            else
                {
                    alert("Stop!");
                }

​

            ​

//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert
// "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

            ​

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============

// if(condition1){

//     // code here runs if condition evaluates to true

// }else if (condition2){

//     // code here runs if condition1 is false *and* condition2 evaluates to true

// }else {

//     // code here gets executed if condition1 nor condition2 evaluate to true

// }

            ​



            ​

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================

//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to
// "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

            ​  //////Ternary Operator //////

                // var traffic = "go";
                // if(traffic === "go") {
                //     alert("Go");
                // else{
                //         alert("Stop!");
                //     }
                //

                var weather = "raining";
                if (weather === "snowing") {
                    alert("It's Snowing!")
                } else if (weather === "raining") {
                }
                alert("Its Raining!");
                {
                else
                }
                alert("Have a nice day!");
            }


            function checkWeather(weather);
            {
                if (weather === "snowing")
                    }
            return "It's Snowing!";
            {

            }
        else
            if (weather === "raining") {
                return "It's raining!";
            } else {
                return "Have a nice day!";
            }

            console.log(checkWeather(weather
        :
            "cloudy"
        ))
            ;
            alert(checkWeather(weather
        :
            "meatballs"
        ))
            ;


//TODO Together: refactor the above statement as a function

        ​

// Together: PIZZA PREFERENCE EXAMPLE

        ​var pizzaPreference = (prompt(message
        :
            "What ind of piza do you like?"
        ))
            ;
            console.log("User pizza input: " + pizzaPreference);
            if (pizzaPreference === "pineapple and hot sauce") {
                alert("What a coincidence, I love that, too.");
            } else if (pizzaPreference === "cheese") ;
            {
                alert("Just plain cheese..")
            }
        else
            if (pizzaPreference === "scottadito") ;
            {
                alert("Real Italian")
            }
        else
            {
                alert(pizzaPreference + "is my favorite, lets order some");
            }


// var pizzaPreference = prompt("What kind of pizza do you like?");

// console.log("User pizza input: " + pizzaPreference);

//

// if (pizzaPreference === "pineapple and hot sauce") {

//     alert("What a coincidence, that's my favorite!");

// } else if (pizzaPreference === "cheese") {

//     alert("Just plain cheese? Okay...");

// }  else if (pizzaPreference === "ham"){

//     alert("Ham is easy to spell and awesome!");

// } else {

//     alert(pizzaPreference + " isn't my favorite, but let's order some!");

// }

        ​

        ​

        ​

        ​

//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called,
// it should return a message informing the user what to do when approaching that color light at an intersection.

            //     function checkWeather(weather);
            //     {
            //         if (weather === "snowing")
            //             }
            //     return "It's Snowing!";
            //     {
            //
            //     }
            // else
            //     if (weather === "raining") {
            //         return "It's raining!";
            //     } else {
            //         return "Have a nice day!";
            //     }
            //
            //     console.log(checkWeather(weather));
            // :
            //     "cloudy"
            // ))
            //     ;
            //     alert(checkWeather(weather
            // :
            //     "meatballs"
            // ))
            //     ;


        ​function trafficLight(

            "red"
        )
            ;
            {
                if trafficLight === "red")
}
return "Press break pedal to stop.";
}
else
{
    if (traffic === "green")
        return "Go!";
}
else
{
    return "Slow down.";
}
console.log("trafficLight" + pizzaPreference);



​

​

​

​

​

// ================ NESTED STATEMENTS ===============

//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are.
// If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are
// 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not
// have a permit, they are not eligble for a license.

​//user  < 15 = not eligible
//user > 15 = are eligible

var userAge = 17;
var hasPermit = true;

if (userAge < 15) {
    alert("You are not eligible for a permit");
} else {


    //all possibilities
    //check for user age

}
if (userAge === 15) {
    alert("You are eligible for a learns permit");
} else if ((userAge >= 16) && hasPermit) {
}   //older than or equal to 16 and has a permit//
alert("You can have a drivers license")
{
}
else
if ((userAge >= 16) && !hasPermit) {
    alert("You are not elibile for a license.")
}



​// ================ TERNARY STATEMENT ================

​
    {
    }
//TODO Together: Regular way

​

// var message;

// var success = true;

//

// if (success) {

//     message = "Operation was successful.";

// } else {

//     message = "Oops, something went wrong.";

// }

// console.log(message);

​

​

// var success = true;

// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";

// console.log(message)

​

​

//TODO: Refactor the following conditional as a ternary

​

// var weather = "sunny";

// var weatherMessage;

​

// if(weather === "rainy"){

//    weatherMessage = "It's raining!";

// } else {

//     weatherMessage = "Have a nice day!";

// }

​

//WRITE YOUR TERNARY STATEMENT HERE!

var weatherMessage = prompt("Is the weather sunny?");
if (weatherMessage === "sunny") {
    alert("Weather Is Sunny")
} else {
    if (weatherMessage === "rainy") {
        alert("Weather is Rainy")
    } else {
        weatherMessage = "Have a nice day"
    }

​

​

// =============== SWITCH STATEMENT ================

    //NOTES//


//TODO Together:

​

var pizzaPreference = prompt("What kind of pizza do you like?");


    switch (pizzaPreference) {

        case "pineapple and hot sauce":
            alert("What a coincidence, that's my favorite!");

            break;

        case "cheese":
            alert("Just plain cheese? Okay...");

            break;

        default:
            alert(pizzaPreference + " isn't my favorite, but let's order some!");

            break;

    }

    console.log("User pizza input: " + pizzaPreference);

​

​

//TODO: Write a switch statement that evaluates weather as the condition. Check for
// "rainy", "sunny", "snow", and a default case.

​var weather = prompt("What's the weather like outside in Paonia?");

    switch (weather) {
        case "rainy":
            alert("I love the rainy weather!");
            break;
        case "sunny":
            alert("As long as it's not above 80 degrees, I'm good");
            break;
        case "snowing":
            alert("I love snow and would love to live in the small town of Paonia");
            break;
        default:
            alert(weather + "is not my favorite weather.");
            break;
    }


​

//TODO: Rewrite the intersection function from earlier as a switch statement.


    var trafficLight = prompt("What light do you see as you approach traffic light?");

    switch (trafficLight) {
        case "red":
            alert("Press the break pedal to stop");
            break;
        case "green":
            alert("Keep on truckin");
            break;
        default:
            alert(trafficLight + "otherwise, slow down to a stop.");
            break;
    }

​

​

// ================ REVERSE ENGINEERING =================

// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output

​

​

// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

​

​

// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

​

​

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html










