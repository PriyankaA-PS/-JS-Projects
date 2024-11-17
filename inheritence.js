/*
 * Quick example on how to use the new class feature of ES6
 * instead of the prototype-based object-oriented programming
 */

class Person{
    constructor(name){
        this.name = name;

    }

    hello(){
        console.log(`Hello + ${this.name} + you are a person`)
    }
}


class Worker extends Person{
    constructor(name, job){
        super(name);
        this.job = job;
    }

    hello(){
        console.log(`Hello + ${this.name} + you are a Developer.`)
    }
}

// class defination ends here

var person = new Person("Rohan") // creating an new instance as object for class
var devloper = new Worker("Paul");

person.hello();  
devloper.hello();

// output: Rohan you are a Person
//         Paul you are a Developer

