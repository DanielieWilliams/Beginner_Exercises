// "use strict";

// var planets = [
//     'Mercury',
//     'Venus',
//     'Earth',
//     'Mars',
//     'Jupiter',
//     'Saturn',
//     'Uranus',
//     'Neptune'
// ];
//
// /**
//  * TODO:
//  * Read each console log below, and write some javascript code to perform
//  * the step that it describes
//  */


var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus',
    'Neptune'];
console.log(planets);

//Adding Sun to beginning of string//
planets.unshift('Sun');
console.log(planets);



planets.push('Pluto');
console.log('Adding "Pluto" to the end of the planets array.');
console.log(planets);



planets.shift('Sun');
console.log('Removing "The Sun" from the beginning of the planets array.');
console.log(planets);



planets.pop('Pluto');
console.log('Removing "Pluto" from the end of the planets array.');
console.log(planets);




var index = planets.indexOf('Earth');
console.log('Finding and logging the index of "Earth" in the planets array.');
index = planets.indexOf('Earth');
console.log(index);

console.log(planets);
console.log("Reversing the order of the planets array.");
planets.reverse();




planets.sort();
console.log("Sorting the planets array.");
console.log(planets);



// // })();












