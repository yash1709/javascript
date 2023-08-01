// Printing some text on Console Tab :
// 1) console.log("Hello world");
// 2) alert("Hello World");
// 3) 34 + 897
// 4) 34 * 34 =
// 5) 84 / 2 =
// and many more.....


// 1. Ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("this is document write");


// 2. Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("This is warning");
// console.error("This is an error");


// 3. JavaScript Variables
// What are Variables? - Containers to store data values

/*
multi 
line 
commment
*/

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);


// firstContainer
// <div id=​"firstContainer" class=​"container">​…​</div>

// firstContainer.innerHTML = "Hello yash"
// 'Hello yash'

// firstContainer.innerHTML = "<b> hello yash , what r u doinng ? </b> "
// ' <b> Hello yash , what r u doinng ? </b> '

// document.getElementsByTagName('h1')
// HTMLCollection [h1]
/* 0 : h1
 length: 1
 [[Prototype]]: HTMLCollection   */

// document.getElementsByTagName("h1")
/* 0 : h1
 length: 1
 [[Prototype]]: HTMLCollection   */

// document.getElementsByTagName("h1")[0]
// <h1>​Welcome to this JavaScript Tutorial​</h1>

// document.getElementsByTagName("h1")[0].style.fontSize = "99px"

// document.getElementsByTagName("h1")[0].style.background = "red"

// document.getElementsByTagName("h1")[0].style.visibility = "hidden"

// document.getElementsByTagName("h1")[0].style.display = "none"

// console.clear();

// console.assert(4==6)
// Assertion failed: console.assert
// undefined ===> successful

// console.assert(4==(6-2))
// undefined



// 4. Data types in JavaScript
// Numbers
var num1 = 455;
var num2 = 56.76;
// console.log(num1);

// String
var str1 = "This is a string";
var str2 = 'This is also a string';
// console.log(str1);
// console.log(str2);

// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2, "bablu", 4, 5]
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);




// 5. Operators in JavaScript
// Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operators :

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);





// 6. Functions in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);





// 7. Conditionals in JavaScript
var age = 41;
// Single if statement :
if (age > 18) {
    // console.log('You can drink rasna water');
}

// if - else statement
if (age > 18) {
    // console.log('You can drink rasna water');
}
else {
    // console.log('You cannot drink rasna water');
}

age = 25;
// if-else Ladder
/*
if (age > 32) {
    console.log("You are not a kid");
}
else if (age > 26) {
    console.log("Bachhe nahi rahe");
}
else if (age > 22) {
    console.log("Yes Bachhe nahi rahe");
}
else if (age > 18) {
    console.log("18 Bachhe nahi rahe");
}
else {
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/





// 8. LOOPS in JavaScript
// FOR loop
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break;
//         // continue;
//     }
//     console.log(arr[i]);
// }


// forEach Function
// arr.forEach(function (element) {
//     console.log(element);
// })

// Constant Function
// const ac = 0;
// ac++;
// ac = ac + 1;


let j = 0;
// While Loop
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// Do-while Loop
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);






// 9. Array Methods in JavaScript
let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
// const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);
//  myArr.toString();
//  myArr.sort();





// 10. String Methods in JavaScript
let myLovelyString = "YB is a good boy good good YB okay";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1, 17));
d = myLovelyString.replace("YB", "Shera");
d = d.replace("good", "bad");
// console.log(d, myLovelyString);






// 11. new Date()
let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());





// document
// #document

// document.location
// Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/index.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}

// document.getElementById('click').click()
// undefined

// document.getElementById('click').style.border = 'blue'
// 'blue'

// document.getElementById('click').style.border = '3px solid blue'
// '3px solid blue'







// 12. DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);

// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);


let tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created paragraph.";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
/* removeChild(element); ---> removes an element        */






// location
// Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/index.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}

// document.title
// 'JavaScript Tutorial'

// document.URL
// 'http://127.0.0.1:5500/index.html'

// document.scripts
// HTMLCollection(2) [script, script]
// 0: script
// 1: script
// length: 2
// [[Prototype]]: HTMLCollection

// document.links
// HTMLCollection []

// document.images
// HTMLCollection []

// document.domain
// '127.0.0.1'






// 13. Selecting using Query
sel = document.querySelector('.container');
// console.log(sel);
sel = document.querySelectorAll('.container');
// console.log(sel);





// 14. function clicked()
// {
//     console.log('The button was clicked')
// }
// window.onload = function () {
//     console.log('The docuument was loaded')
// }



// 15. Events in Javascript
/*
firstcontainer.addEventListener('click', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked <?b>"
    console.log("Clicked on Container")
})
*/


/*
firstContainer.addEventListener('mouseover', function () {
    console.log("Mouse on container")
})
*/


/*
firstContainer.addEventListener('mouseout', function () {
    console.log("Mouse out of container")
})
*/


/*
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})


firstContainer.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
    console.log("Mouse down when clicked on Container");
})
*/





// 16. Arrow Functions
function sum(a, b) {
    return a + b;
}
sum = (a, b) => {
    return a + b;
}


logKaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired </b>"
    console.log("I am your log...");
}



// 17. SetTimeout and Setinterval
clr = setTimeout(logKaro, 5000);
clr = setInterval(logKaro, 2000);
// Use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout




// 18. Javascript localstorage
localStorage.setItem('name', 'harry')
localStorage
localStorage.getItem('name')
localStorage.removeItem('name')
localStorage.clear();



// 19. JSON
obj = { name: "yash", length: 1, a: { this: "that" } }
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed = JSON.parse({ "name": "yash", "length": "1", "a": { "this": "that" } })


