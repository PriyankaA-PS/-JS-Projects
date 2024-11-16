// reduce 
// The reduce method iterates through an array and accumulates a single result (in this case, an object).
// array.reduce(acc, currentvalue{ .... }, initalValue);

// Problem - Parse the array and return an object that contains the number of times each string occured in the array

var arr1 = ["apple", "orange", "apple", "pear", "orange"];

function getParsedArr(arr) {
    return arr.reduce((acc, currentvalue) => {
        acc[currentvalue] = (acc[currentvalue] + 1) || 1;
        return acc;
    }, {});
}
console.log(getParsedArr(arr1));

// Explaination
// case 1: acc["apple"] = (undefined + 1) => NaN falls to 1 means it takes || 1
// acc["apple"] = 1
// return - {"apple" : 1}

//case 2 : acc["orange"] = (undefined + 1) => NaN falls to 1 means it takes || 1
// return - {"apple" : 1, "orange" : 1}

// case 3 : acc["pple"] = (1 + 1) => 2
// return - {"apple" : 2, "orange" : 1}