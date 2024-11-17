// HASH MAP - 
// Usage : string manipulation, counting occurrences of elements in an array, maintaining a cache of data that can be quickly retrieved using keys
// eg : {'a' : 0, 'b' : 1};
// Data Structure - allows you t keep key-value pair
// key - can be array/ object and value of any data- type
// {} - An object (used as a hash map) that stores characters as keys and their last seen index as values.
// example - { 'a' : 1}

// Problem 1 - string manipulation
// input - 'abcabcbb'

function findLongestSubString(str){
    let maxLength = 0;
    let start = 0;
    const charMap = {}; // Hashmap

    for (let i=0; i<=str.length; i++){
        const currentChar = str[i];

        if(charMap[currentChar] >= start){  // check for duplication
            start = charMap[currentChar] + 1;
        }

        charMap[currentChar] = 1 ; //Update or add the current character's position in charMap to its latest index (i).
        // like { 'a' : 0}

        maxLength = Math.max(maxLength, i-start + 1);
    }
    return maxLength;
}

// output : 3


// Problem 2 : in the array 
// input - [1, 2, 3, 2, 1, 3, 4, 4, 5];

let arr = [1, 2, 3, 2, 1, 3, 4, 4, 5];

let countMap = {};

arr.forEach((element) =>{
    if(countMap[element] === undefined){
        countMap[element] = 1 ;      // assigning the value
    }
    else{
        count[element]++;
    }
});

// log the count of each element
for (let key in countMap){
    console.log(`Element ${key} occurs ${countMap[key]} times`);
}

// output:
//Element 1 occurs 2 times 
// Element 2 occurs 2 times
// Element 3 occurs 2 times
// Element 4 occurs 2 times
// Element 5 occurs 1 times

// problem - 3 

let array = [[1,2, 3], [2,3,4], [3,4,5]]

let obj = {};

array.forEach( innerArray =>{
    innerArray.forEach((element)=>{
        if(obj[element] === undefined){
            obj[element] = 1; // update 
        }
        else{
            obj[element]++;
        }
    });
});

// lOg the count
for( key in obj){
    console.log(`Element ${key} occurs ${obj[key]} times`);
}

// output:
// Element 1 occurs 1 times debugger eval code:18:11
// Element 2 occurs 2 times debugger eval code:18:11
// Element 3 occurs 3 times debugger eval code:18:11
// Element 4 occurs 2 times debugger eval code:18:11
// Element 5 occurs 1 times

