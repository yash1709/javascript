// document.getElementById("count-el").innerText = 5

// let count = 0
// count = count + 1;
// console.log(count);

// intialise the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// chnage the count-el in the HTML to reflect the new count


let count = 0

let countEl = document.getElementById("count-el");
console.log(countEl);

function increment() {
    count += 1;
    // countEl.innerText = count;
    countEl.textContent = count;
}


// Create a function , save () , which logs out the count when its called

let saveEl = document.getElementById("save-el");
// 1. Grab the save-el paragraph and store it in a variable called saveEl
// 2. Create a variable that contains both the count and the dash separator
// 3. Render the variable in the saveEl using innerText
// Make sure to not delete the existing content of the paragraph

function save() {
    let countStr = count + " - ";
    // saveEl.innerText += countStr;
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}


console.log("Let's count people on the subway!");



/*

// Create a function
// 1. Setting up the car race

function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

countdown();


// GO !
// Players are running the race
// Race is finished !!!

// Get ready for a new race




// 2. Cretae a function that increments the lapsCompleted variable with one
// Run it three times

let lapsCompleted = 0;

function incrementLap() {
    lapsCompleted = lapsCompleted + 1;
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted);


*/

/*

// String Concatenate Example
console.log(4 + 5);          // 9
console.log("2" + "4");      // 24
console.log("5" + 1);        // 51
console.log(100 + "100");    // 100100

*/