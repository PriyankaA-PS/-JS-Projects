let product = [
    {
        id: "a",
        name: "vanilla"
    },
     {
        id: "b",
        name: "chocolate"
    }
];

let productId = product.map((item)=> {
    return item.id;
})

console.log(productId);

// output : ["a", "b"]


//--------------------------------------------------------------------------------------------//

/* Problem-2

The map() mehod's syntax is as below

let newArr = oldArr.map((val, index, arr) => {
  // return element to new Array
});

newArr — the new array that is returned
oldArr — the array to run the map function on
val — the current value being processed
index — the current index of the value being processed
arr — the original array

Create an object from a given array and the given array is as below 
[1,2,3,4];

*/

var oldArr = [
    {
    first_name:"Colin",
    last_name:"Toh"
},
{
    first_name:"Addy",
    last_name:"Osmani"
},
{
    first_name:"Yehuda",
    last_name:"Katz"
}];

//let newArr = [];

oldArr.map((item) =>{
    item.full_name = [item.first_name, item.last_name].join(' ');
return item;
});

console.log(oldArr);

// output : 
// Array(3) [ {…}, {…}, {…} ]
// ​
// 0: Object { first_name: "Colin", last_name: "Toh", full_name: "Colin Toh" }
// ​
// 1: Object { first_name: "Addy", last_name: "Osmani", full_name: "Addy Osmani" }
// ​
// 2: Object { first_name: "Yehuda", last_name: "Katz", full_name: "Yehuda Katz" }
// ​
// length: 3