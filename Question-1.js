//Q1
console.log( [] == []);

// output : false
// non-primitive / reference data types - array - locates in different location
// the == opeartor will compare by its reference not by values
// as these two arrays locates in different locations.

//Q2

y = 10
var x = 1 + y;
console.log(x);

// output : 11
// y does not have var/let/const
// Java Script engine takes this as global object as property and refereed as golbal variable

// Q3

function data(){
    let a = b = 5;
}
data()
console.log("b: ",b + " and "+ "a: ", a);

// output : b: 5 and a : undefined

