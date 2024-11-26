// find the largest number in an array

// cosnole.log(findLargestNumber([2, 4, 6, 9, 3]))
// output: 9


//1. for loop

function findLargestNumber(arr){
    let largeNumber = a[0];

    for(let i = 1; i<=arr.length; i++){
        if(arr[i] > largeNumber){
            largeNumber = arr[i];
        }
    }
    return largeNumber;
}

//2.math.max
 const numbers = [3, 5, 7, 2, 8, -1, 4];
const largestNumber = Math.max(...numbers);