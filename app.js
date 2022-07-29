
// *****   Normal Function *****
// const sayHello = function() {
  //console.log('Hello');
//}

// ***               First Arrow Function              ***
//const sayHello = () => {
  //console.log('Hello');
//}

// ***               Second Arrow Function              ***
// One line function that does not need braces
//const sayHello = () => console.log('Hello');

// sayHello();

// ***              Same thing with return               ***
//const sayHello = () => 'Hello';
//console.log(sayHello());

// ***        Same thing with return  2  Two lines       ***
// const sayHello = function() {
  // return 'Hello';
// }
//console.log(sayHello());

// ***         The same doen't work with object literals   ***
//const sayHello = () => { msg: 'Hello'}
//console.log(sayHello());

//   We get : Undefined                                     ***
//   { msg: 'Hello' } is interpreted as the function body.  ***

// ***        The verion that works: returns objects       ***
//const sayHello = () => ({msg: 'Hello'});
//console.log(sayHello());

//***     When we have parameters  ***
// const sayHello = (name) => console.log(`Hello ${name}`)

// Single Parameter does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`)

// ***              Two parameters            ***
//const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
//sayHello('Brad', 'Traversy');

// ***           Use Arrow Functions as callbacks              ***

//             ** Creating an array of users ** 
// const users = ['Nathan', 'John', 'William'];
// const nameLengths = users.map(function(name){
 // return name.length;
// });
// console.log(nameLengths);
// ** The function returns the lengths of each name on the array

// ***               Using Arrow Functions             ***
//const users = ['Nathan', 'John', 'William'];
//const nameLengths = users.map((name) => {
 // return name.length;
// });
// console.log(nameLengths);

// ***            Shortest Arrow Function            ***
const users = ['Nathan', 'John', 'William'];
const nameLengths = users.map(name => name.length); 
console.log(nameLengths);



