// some method
// array method
// provides a callback function
// checks to each element of an array
// returns true - and stops - if the function returns true for one of the array elements.
// returns false - if all the elements array fails to meet the criteria
// not execute  if the array is empty
// does not change the original array

const hasNegativeNumber = [1, 2, 3, -4, 5].some((item) => {
	return item < 0;
})

console.log(hasNegativeNumber);

// output : true

const hasNegativeNumbers = [-1, 2, 3, -4, 5].some((item) => {
	return item < 0;
})

console.log(hasNegativeNumbers);

// output : true