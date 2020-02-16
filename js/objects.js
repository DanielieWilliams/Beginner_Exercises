// (function() {
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an object with firstName and lastName properties that are strings
//      * with your first and last name. Store this object in a variable named
//      * `person`.
//      *
//      * Example:
//      *  > console.log(person.firstName) // "Rick"
//      *  > console.log(person.lastName) // "Sanchez"
//      */
//
//
    var person = {};
    person.firstName = "Rick";
    person.lastName = "Sanchez";
    console.log(person.firstName + "", person.lastName);
//



//      * TODO:
//      * Add a sayHello method to the person object that returns a greeting using
//      * the firstName and lastName properties.
//      * console.log the returned message to check your work
//      *
//      * Example
//      * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//      */


    var person= {};
    person.firstName = "Rick";
    person.lastName = "Sanchez";

    person.sayHello = function(){
    console.log("Hello from " + this.firstName + "", this.lastName + "!");
    };
    person.sayHello();




    //     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to
//      * more than $200. If a shopper spends more than $200, they get a 12%
//      * discount. Write a JS program, using conditionals, that logs to the
//      * browser, how much Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */
//
        var shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];


         shoppers.forEach(function(payment) {
            if (payment.amount >= 200) {
                return console.log("You get a $" + payment.amount * .12 + " " + "discount. " + "Your Total is Now: " + "$" + ((payment.amount) - (payment.amount * .12)  ));
            } else (payment.amount < 200);
            {
                return console.log("Sorry, you don't get a discount on this transaction.");

            }
        });






/// < $200 get a 12% discount
//// use conditionals /// Ryan needs to pay/// George needs to pay/// Cam//
///Ryan $250 ////George $320 /// Cameron $180///
////name of person
////amount
///amount before discount
///////discount
///// amount after discount
//// User foreach loop to iterate through array
////console.log the messages for each person //////




//     /** TODO:
//      * Create an array of objects that represent books and store it in a
//      * variable named `books`. Each object should have a title and an author
//      * property. The author property should be an object with properties
//      * `firstName` and `lastName`. Be creative and add at least 5 books to the
//      * array
//      *
//      * Example:
//      * > console.log(books[0].title) // "The Salmon of Doubt"
//      * > console.log(books[0].author.firstName) // "Douglas"
//      * > console.log(books[0].author.lastName) // "Adams"
//      */
//
//
var books = [
    {
        title: "The Challenges of Coding with a Disability ",
        author: {
            firstName: "Marie ",
            lastName: "Williams",

        }
    },
    {
        title: "Cooking Up Code ",
        author: {
            firstName: "Chef Euler ",
            lastName: "Gauss",


        }
    },
    {
        title: "Arrays of Sunshine ",
        author: {
            firstName: "Byron ",
            lastName: "Lovelace",

        }
    },
    {

        title: "We Coded With A Code That Was More Than Code ",
        author: {
            firstName: "Edgar Allan ",
            lastName: "Poe",
        }
    },
    {

        title: "Bicycles and Code ",
        author: {
            firstName: "The Gaussian ",
            lastName: "Group",

        }
    },

];



    console.log("Here are 5 Books that would be good for personal development as a developer");
    books.forEach(function(book, index, arr)
    { console.log(books);


    // console.log(books[0].title + books[0].author.firstName + books[0].author.lastName);
    // console.log(books[1].title + books[1].author.firstName + books[1].author.lastName);
    // console.log(books[2].title + books[2].author.firstName + books[2].author.lastName);
    // console.log(books[3].title + books[3].author.firstName + books[3].author.lastName);
    // console.log(books[4].title + books[4].author.firstName + books[4].author.lastName);


// });






//     /**
//      * TODO:
//      * Loop through the books array and output the following information about
//      * each book:
//      * - the book number (use the index of the book in the array)
//      * - the book title
//      * - author's full name (first name + last name)
//      *
//      * Example Console Output:
//      *
//      *      Book # 1
//      *      Title: The Salmon of Doubt
//      *      Author: Douglas Adams
//      *      ---
//      *      Book # 2
//      *      Title: Walkaway
//      *      Author: Cory Doctorow
//      *      ---
//      *      Book # 3
//      *      Title: A Brief History of Time
//      *      Author: Stephen Hawking
//      *      ---
//      *      ...
//      */
//
//
//
//
// var books = [
//     {
//         Title: "The Challenges of Coding with a Disability ",
//         Author: {
//             firstName: "Marie ",
//             lastName: "Williams",
//
//         }
//     },
//     {
//         Title: "Cooking Up Code ",
//         Author: {
//             firstName: "Chef Euler ",
//             lastName: "Gauss",
//
//
//         }
//     },
//     {
//         Title: "Arrays of Sunshine ",
//         Author: {
//             firstName: "Byron ",
//             lastName: "Lovelace",
//
//         }
//     },
//     {
//
//         Title: "We Coded With A Code That Was More Than Code ",
//         Author: {
//             firstName: "Edgar Allan ",
//             lastName: "Poe",
//         }
//     },
//     {
//
//         Title: "Bicycles and Code ",
//         Author: {
//             firstName: "The Gaussian ",
//             lastName: "Group",
//
//         }
//     },
//
// ];
//
// books.indexOf(books);
//
// console.log(books[0].title + books[0].author.firstName + books[0].author.lastName);
// console.log(books[1].title + books[1].author.firstName + books[1].author.lastName);
// console.log(books[2].title + books[2].author.firstName + books[2].author.lastName);
// console.log(books[3].title + books[3].author.firstName + books[3].author.lastName);
// console.log(books[4].title + books[4].author.firstName + books[4].author.lastName);








//     /**
//      * Bonus:
//      * - Create a function named `createBook` that accepts a title and author
//      *   name and returns a book object with the properties described
//      *   previously. Refactor your code that creates the books array to instead
//      *   use your function.
//      * - Create a function named `showBookInfo` that accepts a book object and
//      *   outputs the information described above. Refactor your loop to use your
//      *   `showBookInfo` function.
//      */
//
})();

