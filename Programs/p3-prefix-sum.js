// running sum in the array or prefix sum 

// using for loop

function runSum(array){
    let sum = 0;
    let result = [];

    for(let num of array){
        sum += num;
        result.push(sum);
    }
    return result;
}

const input = [-1, -2, -3, 4];
const output = runSum(input);
console.log(output);

// 2nd way of using map 
// here map acts as new array and also push method

function prefixSum(arr){
    let sum2 = 0;
    return arr.map(num => sum2+= num)

}

const input2 = [10, 20, 30, 40];
const output2 = prefixSum(input2);
console.log(output2);