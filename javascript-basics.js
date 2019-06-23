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

 /****************************
 * Basic operators
 */
let year, ageCat, ageSam
 year = 2019
 ageSam = 30
 ageCat = 32
 let yearSam = year - 30
 let yearCat = year - 32
 
 console.log(yearSam)


 // Logical operators
let catOlder = ageCat > ageSam;
console.log(catOlder)

// typeof operator
console.log(typeof catOlder) // returns boolean
console.log(typeof ageSam) // return number


 /****************************
 * Operator precedence
 */

 let now = 2019;
 let yearSam = 30;
 let fullAge = 18;

 let isFullAge = now - yearSam >= fullAge // -, then >=, then =

 // multiple assignments
 let x, y;

 x = y = (3+5) * 4 - 6; // assignment operator works right to left


  /****************************
 * If / else statements
 */

 let firstName = 'Sam';
 let civilStatus = 'single';

 if (civilStatus === 'married') {
   console.log(`${firstName} + is married`)
 } else {
   console.log(`${firstName} is not married`)
 }