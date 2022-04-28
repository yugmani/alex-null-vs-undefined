// Import stylesheets
import './style.css';

// -------------------------------------
// ************ N U L L ****************
// -------------------------------------

//Testing for loose equality
console.log(null == undefined); //true

//Testing for strict equality
console.log(null === undefined); //false

//Other examples of loose equality
console.log(null == 0); //false
console.log(null == 0n); //false

console.log(null == null); //true

console.log(null == false); //false

console.log(null == NaN); //false

console.log(null == ''); //false

//Other examples of strict equality
console.log(null === 0); //false

console.log(null === 0n); //false

console.log(null === null); //true

console.log(null === undefined); //false

console.log(null === false); //false

console.log(null === NaN); //false

console.log(null === ''); //false

// ----------------------------------------
// ************ U N D E F I N E D *********
// ----------------------------------------

//Declare a variable without assigning it a value
let fruits;

//Log the value of "fruits";
console.log(fruits); //undefined

//Declaring a varible as undefined
let name = undefined;
console.log(name); //undefined

//non-existing array elements,
let people = ['Jack', 'Aaron'];
console.log(people[0]); //Jack
console.log(people[2]); //undefined

let myArray = [];
console.log(myArray[0]); //undefined

//non-existing object properties
const book = {
  title: 'Zero to One',
  author: ['Peter Thiel', 'Blake Masters'],
  publicationDate: 'Sep 18, 2014',
};

//accessing existing prroperties
console.log(book.title); //Zero to One

//accessing non-existing properties
console.log(book.genre); //undefined

let myObj = {};
console.log(myObj.prop); //undefined
