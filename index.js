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

//variable is automatically assigned 'undefined'
let firstName;
console.log('First Name: ', firstName); //First Name: undefined

//variable explicitly assigned 'null'
let lastName = null;
console.log('Last Name: ', lastName); //Last Name: null

//typeof null
console.log(typeof null); //object

console.log(typeof null === 'object'); //true

// null and default parameter values
// *******************************************

//function with default parameter value
function parameterFunction(user = 'Unknown') {
  return `The user is ${user}.`;
}

console.log(parameterFunction(null)); //The user is null.
console.log(parameterFunction('Lilan')); //The user is Lilan.

//null and garbage collection
// **********************************************

let newObj = { name: 'Sherpa' };

//Assign the variable newObj to null to make { name: 'Sherpa' } available for gargabe collection;
newObj = null;

// { name = 'Sherpa' } can be garbage collected.

// Multiple references:
// ********************************************

//First reference to { isAlive: true };
let objOne = { isAlive: true };

//Second reference to { isAlive: true };
let objTwo = objOne;

//Remove all references to { isAlive: true }
//so the object can be garbage collected:
objOne = null;
objTwo = null;

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
// *****************************************************

console.log(JSON.stringify({ name: undefined, age: null })); //{"age":null}

// Getting the data type of undefined:
console.log(typeof undefined); //undefined

console.log(typeof null); //object
console.log(typeof NaN); //number --?

console.log(typeof ''); //string

let arr1 = ['a', 2];
console.log(typeof arr1); //object

let obj1 = { name: undefined, age: null };
console.log(typeof obj1); //object

//undefined and default parameters values
// ***********************************************

// A function with default parameter value
function myFunction(name = 'Someone') {
  return name.toUpperCase();
}

//call myFunction withut any argument (parameter being undefined)
console.log(myFunction()); //Someone

//call myFunction with argument (parameter being defined)
console.log(myFunction('Paul')); //Paul

//undefined and destructuring assignment
// *********************************************

const nameArray = ['Andrew', 'John', 'Jasmine'];

//use destructuring assignment to assign values from nameArray
const [player1, player2, player3, player4 = "Don't know", player5] = nameArray;

//Get the values of variables
console.log(player1); //Andrew

console.log(player3); //Jasmine

//player4 will be undefined because the array has only 3 items.
//This will trigger default value "Don't know"
console.log(player4); //Don't know

//player5 doesn't exist in the array and default value is also not provided.
console.log(player5); //undefined

//Simple checks for undefined and null in JavaScript
// ***************************************************

//Check if value is null
const varOne = null;

console.log(varOne === null); //true
console.log(varOne === undefined); //false

console.log(typeof varOne === 'object' && !varOne); //true

//Check if value is undefined;
let varTwo;

console.log(varTwo === undefined); //true;
console.log(varTwo === null); //false

console.log(typeof varTwo === 'undefined' && !varTwo); //true
console.log(typeof varTwo === 'object' && !varTwo); //false

// *************************************************************
// In JavaScript, what's the difference between a variable that is: null, undefined and undeclared?
// By Abdullah Numan
// https://dev.to/anewman15/in-javascript-whats-the-difference-between-a-variable-that-is-null-undefined-and-undeclared-j1f
// *************************************************************

// 'null' and 'undefined' are JS primitives and they differ from each other in terms of their types and what values they represent.
// Type of a 'null' value is 'object', whereas an 'undefined' variable is of 'undefined' type.
// 'null' represents the presence of a value, but an intentional absence of an object (therefore, of type 'object'), while an 'undefined' variable points to absence of any value.
// 'null' has to be assigned to a variable. In contrast, 'undefined' is set automatically at declaration, and can also be assigned explicitly.

// Any undeclared variable is evaluated in the code throws 'ReferenceError'. But its type is actually 'undefined'.

// console.log(x); //Uncaught ReferenceError: x is not defined

console.log(typeof x); //undefined
//Notice how typeof x doesn't throw an error, because x is not being evaluated here.

//Checking for Them
// ******************************

//Falsiness
// ----------------

// 'null' and 'undefined' represent an absence of some value types. So, they are termed as 'falsy', as opposed to a 'truthy' value.

let y;
if (y) {
  console.log(`Hi, this is ${y}.`);
} else {
  console.log('y:', y); //y: undefined
}

y = null;
if (y) {
  console.log(`Hi, this is ${y}.`);
} else {
  console.log(`Now I'm ${y}.`); //Now I'm null.
}

y = 'Miraj';
if (y) {
  console.log(`Hi, this is ${y}.`); // Hi, this is Miraj.
} else {
  console.log(`Now I'm ${y}.`); //Now I'm null.
}

// This is because the standard equality operator, ==, is ambiguous in deciding between the two. It returns true for any of these two values.

let m;
if (m == null) {
  console.log(`Hi, this is ${m}.`); //Hi, this is undefined.
} else {
  console.log(m);
}

m = null;
if (m == undefined) {
  console.log(`Hi, this is ${m}.`); //Hi, this is null.
} else {
  console.log(m);
}

//Notice, how x == null returns true for x = undefined and x == undefined returns true for x = null. It's out of mind.

console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(null != undefined); //false
console.log(null !== undefined); //true

//Undeclared
// Undeclared variables in the global scope can be checked without throwing a ReferenceError with :
if ('n' in window) {
  console.log('Hi');
} else {
  console.log(`Hi, n doesn't live here.`); //Hi, n doesn't live here.
}

// ?????...............
