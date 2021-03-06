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

//function that doesn???t explicitly return anything
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
