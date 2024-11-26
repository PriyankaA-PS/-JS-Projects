// Rest parameter
// Rest parameter allows a function to accepts infinite number of arguments in an array
// represented as in ...dots

// explame 1 shows the smaple to use the Rest parmeter
 function fun(a,b){
    return a+b;
 }
 console.log(fun(1,2));   // 3
 console.log(fun(1,2,3)); //3 (but i need as 6)

 // so rest parameter come into the picture

 function fun(...input){
    let sum =0;
    for(let num of input){
         sum += num;
    }
    return sum;
 }
 console.log(fun(1,2));   // 3
 console.log(fun(1,2,3, 4,5)); //15


 // Sapiens interview question

 function foo(sum, ...params){
    return " "+ (sum) * params.length;
 }

 console.log(foo(100, "hello", "world", "ES6 Rocks!", true, 7));  

 // output : 500

 // explaination:
 // sum = 100
 // Rest of the arguments passed to the function are collected into an array params.
 // params = ["hello", "world", "ES6 Rocks!", true, 7]; // 5
