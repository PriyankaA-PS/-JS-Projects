// Remove duplicate elemets in the array

// output: console.log(removeDuplicated([1,2,2,3,4,4]));
//  [1,2,3,4]

//1. for loop

function removeDuplicated(arr){
    let uinqueArr = [];

    for(let i=0; i < arr.length; i++){
        if(uinqueArr.indexOf(arr[i] === -1)){
            uinqueArr.push(arr[i]);
        }
    }
    return uinqueArr;
}


//2. using Set and Spread operator

// A javascript setis a collection of unique elements
// each value can once occur in a set
// these values can be any types - primities/ objects

// parsing an array to new Set()
// can use add()

function removeDuplicated(arr){
    return [...new Set(arr)];
}