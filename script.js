// Variables 
// Declare and initializing the variable
const myName = "Justin"; // const variables cant be reassigned
let myAge = 28 // let variables can be reassigned

myAge = 30; // Reassigning existing variable

console.log(myName);

// Number Data Type
let n = 123;
/**
 * Integer: numbers without a decimal point
 * Floating Point: numbers with a decimal point
 * 
 * Number Operations:
 * - * (multiplication)
 * - / (division)
 * - + (addition)
 * - - (subtraction)
 *
 * Special Numeric Values:
 * - NaN (Not a Number)
 *   - result of an invalid mathematical operation
 * - Infinity
 *   - value greater than any number 
 * - Negative Infinity
 */

// String is a piece of text surrounded by quotes.
let string = "Hello, World!";
alert( `Hello, ${myName}!` ); // Hello, John!
/**
 * Double quotes are used for strings.
 * Single quotes can also be used.
 * Backticks are used for template literals. (alert)
 */

// Boolean only has 2 values: true and false.

// Null value represents the intentional absence of any object value.

// Undefined value represents a variable that has been declared but not assigned a value.

// Object type are like variables but can store multiple values or complex entities.

// Symbol types are unique and immutable values that can be used as object keys.

// Typeof operator returns the type of a variable or expression.

/** Conditionals
 *  - if statement
 *  - else statement
 *  - else if statement
 *  - switch statement
 *    switch(expression) {
        case x:
            // code block
            break;
        case y:
            // code block
            break;
        default:
            // code block
        }

        The switch expression is evaluated once.
        The value of the expression is compared with the values of each case.
        If there is a match, the associated block of code is executed.
        If there is no match, no code is executed.
 */ 

// Functions 

function favoriteAnimal(animal) { // animal is a function parameter
    return animal + " is my favorite animal!" // animal here is the argument passed to the function aka goat
}

console.log(favoriteAnimal('Goat')) // Passing 'Goat' as an argument to the function

// Arrays
const array = []; // Initializing empty array
const arrayTwo = [1, 2, 3]; // Initializing array with values
const nestedArray = [[1, 2], [3, 4], [5, 6]]; // Initializing nested array

console.log(arrayTwo[2]); // Accessing the third element of the array
console.log(arrayTwo.length); // Getting the length of the array

arrayTwo.push(4); // Adding an element to the end of the array
array.push(["a", "b", "c"]); // Creating an array inside another array
array.push(1, 2, 3); // Adding multiple elements to the array
console.log(array);
console.log("Nested Array: ", nestedArray);
console.log(nestedArray[1][0]); // Accessing an element from the nested array, second array first element

arrayTwo[1] = 5; // Reassigning the second element of arrayTwo
console.log(arrayTwo);

// Manipulating the DOM
/**
 * the DOM (Document Object Model) is a programming interface for web documents.
 * It represents the structure of a document as a tree of objects.
 * The DOM allows programming languages to interact with the content, structure, and style of a document.
 *
 * Live html code is converted into a DOM tree.
 */
element.querySelector() // This is a method used to select elements from the DOM.
element.querySelectorAll() // This is a method used to select all elements that match a specific CSS selector.
/** - Returns all elements in a NodeList.
 * - NodeList is a collection of nodes that can be accessed by index.
 * - NodeList is not an array, but it can be converted to an array using Array.from() or the spread operator.
 */

const div = document.createElement('div'); // Creating a new div element in memory not in the DOM
parentElement.appendChild(div); // Adding the new div element to the DOM as a last child
parentElement.removeChild(div); // Removing the div element from the DOM
// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");

// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");

// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";

// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";

// Events
/**
 * Interactivity events that happen on the website
 * 
 * <!-- the HTML file -->
 * <button id="btn">Click Me</button>
 *
 * // the JavaScript file
 * const btn = document.querySelector("#btn");
 * 
 * btn.onclick = () => alert("Hello World");
 * 
 * OR
 *
 * // the JavaScript file
 * const btn = document.querySelector("#btn");
 * btn.addEventListener("click", () => {
 *   alert("Hello World");
 * });
 *
 * OR
 * 
 * btn.addEventListener("click", alertFunction);
 */