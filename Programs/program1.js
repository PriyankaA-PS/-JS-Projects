// *Objective:**
/*Develop a program that generates an array of random integers and computes the frequency of each integer in the array.
 
**Requirements:**
 
1. **Array Generation:**
   - Implement a function `generateArray(length)` that:
     - Takes an integer `length` as input.
     - Returns an array of the specified length.
     - Each element in the array is a random integer between 0 and 9 (inclusive).
 
2. **Frequency Calculation:**
   - Implement a function `frequency(a)` that:
     - Takes an array `a` as input.
     - Returns an object where each key is a unique integer from the array and its value is the frequency of that integer in the array.
 
3. **Example Execution:**
   - Generate an array of 5 random integers.
   - Calculate the frequency of each integer in the generated array.
   - Print the generated array.
   - Print the frequency object.
 
**Expected Output:**
- The generated array should be an array of 5 random integers.
- The frequency object should contain keys representing the integers in the array, and values representing their corresponding frequencies.
 
**Example:**
 
Suppose the generated array is `[2, 3, 3, 1, 2]`.
 
The frequency object should be:
```json
{
  "1": 1,
  "2": 2,
  "3": 2
}
```
 
**Constraints:**
- The length of the array should be a positive integer.
- The random integers should be between 0 and 9, inclusive.
 
*/

const generateArray = (length) =>
    new Array(length).fill(0).map((item)=> Math.floor(Math.random() * 10));

const frequency = (a) =>
    a.reduce((acc, item)=>{
return {...acc, [item]: 1 + (acc[item] || 0)}
    },{});

    try{
 const arr = generateArray(5);
 const freqObj = frequency(arr);
 console.log(arr);
 console.log(freqObj);
    }
    catch(error){
        console.error(error.message);
    }

