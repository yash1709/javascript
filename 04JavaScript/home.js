// How to write a comment line

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

// prompt('what is ur age ?');


// Manipulate DOM with Javascript
// It's just a fancy way of saying chnage HTML with javascript.

// var age = prompt('what is ur age ?');
// document.getElementById('someText').innerHTML = age;



// Numbers in Javascipt
var num1 = 10;
num1++;   /* Increment num1 by 1 */
num1--;   /* Decrement num1 by 1 */
num1 += 20;     /* Increment/Decrement by any number you want */
console.log(num1);
/* Divide / , multiply * , remainder %   */






/* Functions
1. Create a Function
2. Call the function
*/

// Create
function fun() {
    alert('this is a function');
}

// Call
// fun();





/* Let's cretae a function that take in a name and 
says Hello followed by your name 

For example :-

Name : "Yash"
Return : "Hello Yash"

*/

function greeting() {
    var name = prompt('What is your name ?');
    var result = 'Hello' + '' + name;       /* String Concatenation */
    console.log(result);
}

// greeting();






// How do arguments work in funvtions ?
// How do we add 2 numbers together in a funstion ?

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(25, 45);






// Loops in Javascript
// While loops

var num = 0;

while (num < 100) {
    num += 1;
    // console.log(num);
}


// For loop
for (let num = 0; num <= 100; num++) {
    // console.log(num);
}





// Data Types in Javascript
let yourAge = 18;   // number
let yourName = 'Yash';  // string
let name = { first: 'Yawsh', last: 'Shera' };   // object
let truth = false;  // boolean
let groceries = ['apple', 'banana', 'oranges'];    // array
let random;     // undefined 
let nothing = null;     // value null





// Strings in Javascript
let fruit = 'banana';
let moreFruits = 'banana\napple';

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));   /* split by a comma */





// Array
let fruits = ['banana', 'apple', 'orange', 'pineapple'];
fruits = new Array('banana', 'apple', 'orange', 'pineaple');

console.log(fruits[2]);

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// array common methods
console.log('to string', fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(), fruits);  // remove last item
console.log(fruits.push('blackberry'), fruits);  // appends
console.log(fruits[4]);

fruits[fruits.length] = 'new fruit';    // same as push
console.log(fruits);

fruits.shift(); // remove first element to an array
console.log(fruits);

fruits.unshift('kiwi'); // add first element to an array
console.log(fruits);


let vegetables = ['tomato', 'potato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);    // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());



let someNumbers = [4, 15, 3, 14, 54, 334, 325, 2];
console.log(someNumbers.sort(function (a, b) { return a - b }));
console.log(someNumbers.sort(function (a, b) { return b - a }));





let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);








// Objects in Javascript
let student = {
    first: 'Yash',
    last: 'Baheti',
    age: 20,
    height: 180,
    studentInfo: function () {
        return this.first + ' ' + this.last;
    }
};

console.log(student.first);
console.log(student.last);

student.age++;
console.log(student.age);

console.log(student.studentInfo());





// Conditionals , Control flows (if else)
// 18-35 is my target demographic
// && AND
// || OR
/*
var age = prompt('what is your age ?');

if ((age >= 18) && (age <= 35)) {
    put = 'target done';
    console.log(put);
}
else {
    put = 'not my audience';
    console.log(put);
}
*/





// Switch Statements
// differentiate between weekday vs weekend
// day 0 ---> Sunday ---> weekend
// day 1 ---> Monday ---> weekday
// day 2 ---> Tuesday ---> weekday
// .
// .
// .
// .
// day 6 ---> Saturday ---> weekend

switch (2) {
    case 0:
        text = 'weekend';
        break;

    case 5:
        text = 'weekend';
        break;

    case 6:
        text = 'weekend';
        break;

    default:
        text = 'weekday';
}

console.log(text);


