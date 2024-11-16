// forEach 
// perfroma an opeartion to an each element of an array without returning a new array
// return value - undefined
// usage - logging, external state
// does not impact original array
// Purpose : Perform side effects

const numbers = [1, 2, 3, 4];
var result = numbers.forEach(num => console.log(num ** 2));
console.log(result);
// output : undefined
console.log(numbers);
//output : [1, 2, 3, 4]

// map
//Perfroms with each element of an array and returns with the new array with performed elements
// Usage: when u need to store the result
// original array unchanged

// Syntax
//let newArr = oldArr.map((val, index, arr) => {
  // return element to new Array
// });


// newArr — the new array that is returned
// oldArr — the array to run the map function on
// val — the current value being processed, required
// index — the current index of the value being processed
// arr — the original array


var squared = numbers.map( num => num ** 2);
console.log(squared);
// output : [1, 4, 9, 16]
console.log(numbers);
// output: [1, 2, 3, 4]

