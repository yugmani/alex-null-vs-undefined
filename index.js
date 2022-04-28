// Import stylesheets
import './style.css';

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
