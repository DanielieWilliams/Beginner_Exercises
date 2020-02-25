"user strict";

// // 1. What is an array in Javascript?
//
// // An array is a data structure that holds an ordered list of items. Each slot in a JavaScript array can hold any type of data.
//
// //
// //     2. What is an object in Javascript?
//
// //     An object is a grouping of data and functionality. Data items contained in an object are referred to as properties, and functions on an object are referred to as methods.
// //
// //     3. What is the difference between an array and an object?
//
//     // An array is a list of items usually written in a function and/or after a variable. Objects contain properties and methods. An object would be your variable.
// //
// //     4. What is a property? A method?
//
// //Use dot notations to create properties. i.e car.make = "Maserati"; Assign a model property i.e car.model can be assigned with array notation, too. A method is like an action after an alert. Such as ("Honk! Honk!"); You create methods on Objects. i.e
// // car.honk = function() {
// // alert("method goes here!");
//
//
// //5. Why are loops useful when dealing with arrays?
//
//  //Because if you need to find a certain item in an array, you can use a loop and other things to check like, array.length. You can also use loops to iterate everything in an array and have less syntax errors.
// //
// //     6. What is an index?
// //      They are data inside an array and are numbered beginning with zero.
//
//
// //     7. What is the difference between dot and bracket notation?
// //      Dot notations create objects. Bracket notations access an element in an array. i.e console.log(numbers[0]);
// //
// //
// //
// //     ## Practice Problems
// // 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//
//    function filterNumbers(array){
//         var bucket = [];
//         var splicedNumbers = filterNumbers.splice("", 2);
//         return filterNumbers.sort();
//     }
//     console.log(filterNumbers(["ted", false, 10, true, 2, false, 1]));
//
//
// console.log(filterNumbers(["fred", true, 5, 3]));
// console.log(filterNumbers([100, 1000000, false, "red", true, 50, 500000, 3]));
//
//    /////ANOTHER WAY///
//
// function filterNumbers(array) {
//     var bucket = [];
//     var arraySort = array.sort();
//     arraySort.forEach(function (number)
//     {
//         if (!isNaN(parseFloat(number))) {
//             bucket.push(number)
//         }
//     });
//     return bucket.sort();
//
// }
// console.log(filterNumbers(["fred", true, 10, 5, 3]));
//
//
// //////Method if 10 gets thrown in there//
//
// function filterNumbers(array) {
//     var bucket = [];
//     var arraySort = array.sort((a, b) => a - b);
//     arraySort.forEach(function (number)
//     {
//         if (!isNaN(parseFloat(number))) {
//             bucket.push(number)
//         }
//     });
//
//     return bucket
// }
// console.log(filterNumbers(["fred", 10, "happiness" , true, 5, 3]));
//
//
//
// // ```js
//     //     filterNumbers(["fred", false, 5, 3]) //[3, 5]
//     // // ```
//
// // 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
//
//                 var dogsList = [
//
//                 {
//                     name: "Biscotti",
//                     breed: "Lab",
//                     age: 2
//                 },
//                 {
//                     name: "Gnocchi",
//                     breed: "Miniature Schnauzer",
//                     age: 3
//                 },
//                 {
//                     name: "Brewsy",
//                     breed: "Mastif",
//                     age: 10
//
//
//                 }
//                 ];
//
//                     function getOlder(dogArray) {
//                         var bucket = [];
//                         dogArray.forEach(function (dogs) {
//                            return (dogs.age += 1)
//
//
//                         });
//                         return dogsList;
//                     }
//                     console.log(getOlder(dogsList));
//
//
//
//
//
//    // js
//    // //  //Example output
//    // //   [
//    // //      {
//    // //           name: "Biscotti",
//    // //           breed: "Lab",
//    // //           age: 3
//    // //       },
//    // //       {
//    // //           name: "Gnocchi",
//    // //           breed: "Miniature Schnauzer",
//    // //           age: 4
//    // //       },
//    // //       {
//    // //           name: "Brewsky",
//    // //           breed: "Mastif",
//    // //           age: 11
//    // //       }
//    // //   ];
//    // // ```
//
//
//
//
// // 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false
// //
// //     ```js
// //             // Example input
//
//
//
//             var carList =
//
//             [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: true
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: true
//                  }
// ];
//
//                 function washCars(cars){
//                 cars.forEach(function(car) {
//                     return (car.isDirty = false)
//
//
//                 });
//                 return carList;
//                 }
//             console.log(washCars(carList));
//
//
//                 //        // Example output:
// //              [
// //                  {
// //                      make: 'Volvo',
// //                      color: 'red',
// //                      year: 1996,
// //                      isDirty: false // changed to false
// //                  },
// //                  {
// //                      make: 'Toyota',
// //                      color: 'black',
// //                      year: 2004,
// //                      isDirty: false // stays the same
// //                  },
// //                  {
// //                      make: 'Ford',
// //                      color: 'white',
// //                      year: 2007,
// //                      isDirty: false // changed to false
// //                  }
// //              ]
// //     ```
// //
// // 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
// //     ```js
// //          //Example Input:
//
//             var adminsList =
//
//           [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              },
//              {
//                  isAdmin: false,
//                  email: 'user3@email.com'
//              }
//          ];
//
//
//                         function adminList(adminArray) {
//                             var adminCount = 0;
//
//                             adminArray.forEach(function (admin) {
//                                 if(admin.isAdmin) {
//                                     adminCount += 1;
//                                 }
//                             });
//                             return adminCount;
//                         }
//                         // console.log(adminList(adminsList));
//
//
//                 function adminList(adminArray) {
//                     var bucket = [];
//
//                     adminArray.forEach(function (admin) {
//                         if (admin.isAdmin === true) {
//                             bucket.push(admin);
//                         }
//                     });
//                     return bucket;
//                 }
//                 console.log(adminList(adminsList));
//
//
//
// //     ```
// //
// //     ```js
// //        // Example Output (before refactor): 2
// //
// //
// //         // Example Output (after 1st refactor):
// //         [
// //             'user1@email.com',
// //             'user2@email.com'
// //         ]
// //
// //
// //         // Example Output (after 2nd refactor):
// //         [
// //              {
// //                  isAdmin: true,
// //                  email: 'user1@email.com'
// //              },
// //              {
// //                  isAdmin: true,
// //                  email: 'user2@email.com'
// //              }
// //          ]
// //
// //     ```
// //
// // 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
// ///Using a For Loop will be simple for this one. Because you have to pull index 1, 2, etc. You need an iterator, a bracket 1, bracket 2, etc.//
//
// ///A single way to approach a sandwich object:
//
//         //     Example Input:
//
//          var breadList  = [
//              "white",
//              "wheat",
//              "rhy",
//              "white"
//          ];
//
//          var fillingList = [
//              "pb&j",
//              "ham",
//              "cheese steak",
//              "tuna"
//          ];
//
// function makeSandwichObjects(breads, fillings) {
//     var bucket = [];
//
//     for (var i = 0; i < breads.length; i++) {
//         var sandwichObject = {
//             bread: breads[i],
//             filling: fillings[i]
//         };
//         bucket.push(sandwichObject);
//     }
//     return bucket;
// }
//     console.log(makeSandwichObjects(breadList, fillingList));
//
//
// //          makeSandwichObjects(breads, fillings) // example call to the function
// //     ```
// //     ```js
// //         // Example Output:
// //            [
// //              {
// //                  bread: "white",
// //                  filling: "pb&j"
// //              },
// //              {
// //                  bread: "wheat",
// //                  filling: "ham"
// //              },
// //              {
// //                  bread: "rhy",
// //                  filling: "cheese steak"
// //              },
// //              {
// //                  bread: "white",
// //                  filling: "tuna"
// //              }
// // ]

// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"


///using a for Loop ^^^///

    function keepYellow(yellowArray) {
        var bucket = [];

        for (var i = 0; i < yellowArray.length; i++) {
            if (yellowArray[i] === "yellow") {
                bucket.push(yellowArray[i]);
            }
        }

        return bucket;
    }

    console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));

// ///
// /the following functions will be useful for solving more complicated functions! These were taken from previous exercises! You will also notice that I use some concepts from es6, although it is not absolutely necessary, it usually results in simpler and/or more eloquent functions.
//
// // Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.

    function isNegative(num) {
    return num < 0;
}

// Write a function named `isTen` that accepts a number and returns a boolean

function isTen(num) {
    return num === 10;
}

// Write a function named `double` that accepts a number and returns the number
// doubled.

function double(num) {
    return (num * 2);
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// write a function named remove3s that accepts and array of numbers and returns an array with all of the same numbers except for 3

function remove3s(arr) {
    let bucket = [];
    arr.forEach(function (num) {
        if (num !==3) {
            bucket.push(num);
        }
    })
    return bucket
}

console.log(remove3s([1, 3, 3, 3, 3, 3, 4, 5, 6, 7, 7]));

// write a function named sumAll that returns the sum of all numbers in an array

function sumAll(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseFloat(arr[i]);
        total += arr[i];
    }
    return total;
}

console.log(sumAll([1, 3, 3]));

// once we have the sum of all numbers in an array we can use it for further math problems.


// write a function named countEvens that accepts an array of nuyms and returns the number of even numbers in the array.

function countEvens(arr) {
    var evenCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount += 1;
        }
    }
    return evenCount
}
console.log(countEvens([1, 1, 2, 2, 2]));


// Write a function named totalSales that accepts an array of employee objects. Each object has a 'name' property and a 'sale' property. Return the total sales

function totalSales(arr) {
    var totalSales = 0;
    for (var i = 0; i < arr.length; i++) {
        var empSales = parseFloat(arr[i].sales);
        totalSales += empSales;
    }
    return totalSales
}


//write a function named AsAndBs that accepts a string and returns a count of how many a's and b's is contains

function AsAndBs(str) {
    var letterCount = 0;
    var string = str.toString();
    string = string.toLowerCase();
    for (var i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) === "a" || string.charAt(i) === "b") {
            letterCount += 1;
            console.log(string);
        }
    }
    return letterCount;
}

console.log(AsAndBs("banana"))


// Write a function called StringLength that returns the length of a string, if the input is not a string, return false

function StringLength(str) {
    return str.length;
}

console.log(StringLength("doggo"))

//write a function that accepts a string and returns an object with the original string, the length of the string, as well as the number of a's and b's


function analyzeWord(str) {
    var word = {};
    word.word = str;
    word.numberOfLetters = StringLength(str);
    word.numberOfAsAndBs = AsAndBs(str);
    return word
}

console.log(analyzeWord("dog"))


// Write a function thataccepts an array or strings and returns an array of those words analyzaed similarly

function analyzeAllWords(arr) {
    var analyzeWords = [];

    for (var i = 0; i < arr.length; i++) {
        analyzeWords.push(analyzeWord(arr[i]));
    }
    return analyzeWords
}
console.log(analyzeAllWords(['dog', 'banana', 'mississippi']));

