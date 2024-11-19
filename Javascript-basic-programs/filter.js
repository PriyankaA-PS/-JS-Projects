// Filter method in array
// Filter - created a new array which store the elements that passed the given function
// It does not take empty function
// It doesn't change the original array

let number = [1, 2, 3, 4, 5]
let evenNumbers = numbers.filter((item)=> (item % 2 === 0));
console.log(evenNumbers);

// output : [2, 4]

// Problem 2:- Filter objects with tags javascript

var persons = [
    {id : 1, 
    name : "John",
    tags : "javascript"
    }, 
    {id : 2, name : "Alice", tags : "javascript"}, 
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
  ];

  let rags = persons.filter((item) => item.tags === "javascript" )
 
  let pix = persons.filter((item) => (item.tags.indexOf("javascript")> -1));
  console.log(rags);
//Output
//   Rags----- 
// Array(3) [ {…}, {…}, {…} ]
// ​
// 0: Object { id: 1, name: "John", tags: "javascript" }
// ​
// 1: Object { id: 2, name: "Alice", tags: "javascript" }
// ​
// 2: Object { id: 4, name: "Adam", tags: "javascript" }
// ​
//length: 3
  console.log(pix);
  // OutPut
  /*
  ix-------- 
Array(3) [ {…}, {…}, {…} ]
​
0: Object { id: 1, name: "John", tags: "javascript" }
​
1: Object { id: 2, name: "Alice", tags: "javascript" }
​
2: Object { id: 4, name: "Adam", tags: "javascript" }
​
length: 3
  */
  

  
  