// Convert Array to Object

// 1. Using Spread Operator
let arr = ["The Bold Type", "Gossip Girl", "4 More Shorts Please"]

let obj = {...arr}
console.log(obj);

// 2. Reduce method

let obj2 = arr.reduce((acc, currentValue,index)=>{
    acc[index] = currentValue;
    return acc;
},{}); 

console.log(obj2);