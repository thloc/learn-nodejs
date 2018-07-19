let array1 = [5, 6, 7];
let array2 = [1, 2, 3];
let array3 = [];

// Array Methods.
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());     // --> Banana,Orange,Apple,Mango
console.log(fruits.join(" * "));    // --> Banana * Orange * Apple * Mango

fruits.pop();
console.log(fruits);    // -> ['Banana', 'Orange', 'Apple'] . Removes the last array element.

fruits.push("Kiwi");
console.log(fruits);     // -> ['Banana', 'Orange', 'Apple', 'Kiwi'] . Adds a new element (at the end).

fruits.shift();
console.log(fruits);     // -> ['Orange', 'Apple', 'Kiwi'] . Removes the first array element.

fruits.unshift("Lemon");
console.log(fruits);     // -> ['Orange', 'Apple', 'Kiwi'] . Adds a new element to an array (at the beginning).

// Changing Elements:
var fruits02 = ["Banana", "Orange", "Apple", "Mango"];
fruits02[0] = "Kiwi";

// Deleting Elements:
delete fruits02[0];     // Changes the first element in fruits02 to "undefined"

// Splicing an Array:
fruits02.splice(2, 0, "Lemon", "Kiwi"); // Add new items to an array 
fruits.splice(0, 1);                    // Removes the first element of fruits

// Merging (Concatenating) Arrays:
var arr1 = ["Cecilie", "Lone"];
var name = arr1.concat(["Emil", "Tobias", "Linus"]);

// Slicing an Array:
var fruits03 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits03.slice(3);     // -> ['Apple', 'Mango']

// Sorting an Array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); // Sorts the elements of fruits

let arrNum = [ 3, 6, 1, 8, 2, 10];
console.log(arrNum.sort((a, b) => a - b));
console.log(arrNum.reverse());

// Array iteration methods operate on every array item
let numbers = [1, 4, 2, 6, 8];
numbers.forEach((value, index, array) => console.log(value));

// Creates a new array by performing a function on each array element
let arr = [1, 4, 2, 16, 18];
let doubleArr = arr.map(e => e * e);
console.log(doubleArr);

// Creates a new array with array elements that passes a test
let over15 = arr.filter(e => e > 15);
console.log(over15);

// Runs a function on each array element to produce (reduce it to) a single value
let sum = arr.reduce((total, value, index, array) => total + value);
console.log(sum);

// Method check if all array values pass a test
let over18 = arr.every(e => e > 18);
console.log(over18);    // --> false

// Method check if some array values pass a test
let allOver18 = arr.some(e => e > 18);
console.log(allOver18); // --> false

// Search an array for an element value and returns its position
let search = arr.indexOf(16);
console.log(search);

// Method returns the value of the first array element that passes a test function
let first = arr.find(e => e > 18);
console.log(first);
