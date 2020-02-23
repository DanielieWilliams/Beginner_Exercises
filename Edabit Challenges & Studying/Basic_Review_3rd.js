"user strict";

// 1. What is an array in Javascript?

// An array is a data structure that holds an ordered list of items. Each slot in a JavaScript array can hold any type of data.

//
//     2. What is an object in Javascript?

//     An object is a grouping of data and functionality. Data items contained in an object are referred to as properties, and functions on an object are referred to as methods.
//
//     3. What is the difference between an array and an object?

    // An array is a list of items usually written in a function and/or after a variable. Objects contain properties and methods. An object would be your variable.
//
//     4. What is a property? A method?

//Use dot notations to create properties. i.e car.make = "Maserati"; Assign a model property i.e car.model can be assigned with array notation, too. A method is like an action after an alert. Such as ("Honk! Honk!"); You create methods on Objects. i.e
// car.honk = function() {
// alert("method goes here!");


//5. Why are loops useful when dealing with arrays?

 //Because if you need to find a certain item in an array, you can use a loop and other things to check like, array.length. You can also use loops to iterate everything in an array and have less syntax errors.
//
//     6. What is an index?
//      They are data inside an array and are numbered beginning with zero.


//     7. What is the difference between dot and bracket notation?
//      Dot notations create objects. Bracket notations access an element in an array. i.e console.log(numbers[0]);
//
//
//
//     ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.

   function filterNumbers(){
        var filterNumbers = ["fred", false, 5, 3];
        var splicedNumbers = filterNumbers.splice("fred", 2);
        return filterNumbers.sort();
    }
    console.log(filterNumbers(["fred", false, 5, 3]));




    // ```js
    //     filterNumbers(["fred", false, 5, 3]) //[3, 5]
    // // ```

// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
//
//     ```js
//
//
//     //Example Input:
//
//        [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 7
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 4
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 10
//          }
//      ];
//    ```
//     ```js
//     //Example output
//      [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 8
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 5
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 11
//          }
//      ];
//    ```

// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false
//
//     ```js
//             // Example input
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
//             ]
//       ```
//
//     ```js
//             // Example output:
//              [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: false // changed to false
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false // stays the same
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: false // changed to false
//                  }
//              ]
//     ```
//
// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//     ```js
//          //Example Input:
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
//     ```
//
//     ```js
//        // Example Output (before refactor): 2
//
//
//         // Example Output (after 1st refactor):
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//
//         // Example Output (after 2nd refactor):
//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
//
//     ```
//
// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
//     ```js
//         //     Example Input:
//
//          var breads  = [
//              "white",
//              "wheat",
//              "rhy",
//              "white"
//          ];
//
//          var fillings = [
//              "pb&j",
//              "ham",
//              "cheese steak",
//              "tuna"
//          ];
//
//          makeSandwichObjects(breads, fillings) // example call to the function
//     ```
//     ```js
//         // Example Output:
//            [
//              {
//                  bread: "white",
//                  filling: "pb&j"
//              },
//              {
//                  bread: "wheat",
//                  filling: "ham"
//              },
//              {
//                  bread: "rhy",
//                  filling: "cheese steak"
//              },
//              {
//                  bread: "white",
//                  filling: "tuna"
//              }
// ]