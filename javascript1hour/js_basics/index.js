
let firstName ='miki';
let lastName='zhao';
console.log(firstName,lastName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let name ='myyyy'; // String Literal (primitives/value type)
console.log(name);
let age = 29;  // Number Literal
let isApproved = false; // Boolean Literal
let middleName = undefined;  //undefined is a value of this var also a value type
let selectedColor = null;

// ctrl+l clean browser console
// Referencfe Types:  object / array / function

let person = {
    name:  'Lin',
    age: 29
};
// Dot Notation
person.name = 'Wang';

// Bracket Notation
//let selection = 'name';
//person[selection] = 'HEE';
person['name'] = 'HEE';

console.log(person);
console.log(person.name);

let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors[0]);

// function greet() {
//   console.log('Hello There!!!');
// }

// greet();


// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
  }

greet('John','Smith');
//greet('May');


//  Calculating a value
function square(number){
    return number * number;
}

//let number = square(2);
// console.log(number);
console.log('the square of '+ 2 + ' = ' + square(2));
console.log(square(2));


