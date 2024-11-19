// Hash map

// const arr = [2, 4, 7, 11, 15];

// const target = 9;

// Sample Output: [2, 7]

// if not in the array return empty string

function findSumOfTwoNumbers(arr, target){
    const numMap = {};

    for (let i=0; i<=arr.length ; i++){
        const num = str[i];
        const complement = target - num;
        if(numMap[complement] !== undefined){
            return [complement, num];
        }
        //If the complement isn't found, store the current number num in numMap with its index i as the value
        numMap[num] = i;   // update character/ position in numMap
    }

    return [];
}

