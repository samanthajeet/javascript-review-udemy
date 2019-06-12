/****************************
 * Variable and data types
 */

let firstName = 'Sam';
console.log(firstName);

let lastName = 'Jeet';
let age = 30;

let fullAge = true;
console.log(fullAge);

let job;
console.log(job);

job = 'web developer'
console.log(job);

/****************************
 * Variable mutation and type coercion
 */

 let firstName = 'Celine';
 let age = 50;

 console.log(firstName + ' ' + age); // converts age into string - stype coercion

 let job, isMarried;
 job = 'super star';
 isMarried = false;

 console.log(`${firstName} is a ${age} year old ${job}. Is she married? ${isMarried}`) //booleans will also be type coerced

 // Variable mutation

 age = 'thirty'; //variable is already defined so need for let
 job = 'scuba diver'

 let age = prompt('what is her age?') // will take user input and set variable to it
 console.log(age)