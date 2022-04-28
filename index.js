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
// **********************************************
let fruits;

//Log the value of "fruits";
console.log(fruits); //undefined

//Declaring a varible as undefined
let name = undefined;
console.log(name); //undefined

//non-existing array elements,
// ********************************************
let people = ['Jack', 'Aaron'];
console.log(people[0]); //Jack
console.log(people[2]); //undefined

let myArray = [];
console.log(myArray[0]); //undefined

//non-existing object properties
// ********************************************
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

//function that doesn’t explicitly return anything
// *************************************************

//a function that has no return statement
function noReturn(a, b) {
  let sum = a + b;
}

console.log('No return: ', noReturn(2, 3)); //No return: undefined

//a function that has return statement but there is nothing that follows it
function emptyReturn() {
  let name = 'Danny';
  return;
}

console.log('empty return: ', emptyReturn());
//empty return: undefined

//function that has return statement and there is something that follows it.
function someReturn() {
  return 'Hello!';
}

console.log(someReturn()); //Hello!

//undefined is not valid in JSON, null is.
console.log(JSON.stringify({ name: undefined, age: null })); //{"age":null}

// Getting the data type of undefined:
console.log(typeof undefined); //undefined

console.log(typeof null); //object
console.log(typeof NaN);  //number --?

console.log(typeof "");   //string

let arr1 = ["a", 2]
console.log(typeof arr1); //object

let obj1 = { name: undefined, age: null }
console.log(typeof obj1);   //object

