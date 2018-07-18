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

