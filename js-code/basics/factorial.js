// Factorial of a number

// console.log(factorialOfNumber(5))
// output: 120

// 1. Iterative method

function factorialOfNumber(n){
    if (n < 0){
        console.log("Factiorial is not defined for negative numbers");
    }
    
    let result = 1;
    for(let i=1; i<=n; i++){
        result *= i;
    }
    return result;
}

// 2. Recursive method 
// function calling itself again and again

function factorialOfNumber(num){
    if(n < 0){
        console.log("Factiorial is not defined for negative numbers");
    }

    if( n === 0 || n === 1){
        return 1;  // Base case 0! and 1! are 1
    }
    return n * factorialOfNumber(n-1);   //Recursive call
}


// Explaination

// 1. Base Case for Factorial
/* In mathematics, it's defined that:
0!=1and1!=1
0!=1and1!=1

This is a special rule and serves as the base case for recursion when calculating factorials */

/* factorialRecursive(3) 
= 3 * factorialRecursive(2)
= 3 * (2 * factorialRecursive(1))
= 3 * (2 * 1)  // Base case triggered when n = 1
= 6
*/
