arrow function never bounds to this keyowrd
Arrow functions don't have their own bindings to this , arguments , or super

1. this - Traditional functions can dynamically bind this based on how they are called (call, apply, bind, or the object they are called on). Arrow functions eliminate this dynamic behavior, reducing confusion and errors in nested functions.

2. Arrow functions do not have their own super binding. They inherit super from the enclosing context.
   super is typically used in classes to refer to methods or properties of the parent class.

3. Can NOT Use new keyword with arrow function



where we should not use arrow function
arrow function =>{....}

1. Event Handlers
2. Object Methods

2. example to Object Methods
const person = {
    points: 23,
    score : ()=>{
        return this.points++;
    },
}

person.score()
const updatePoints = console.log(peron.points);

// output: 23

arrow function "this" is not bund to anything


const person = {
    points: 23,
    score: function(){
        return pints ++
    }
}

person.score()
const updatePoints = console.log(peron.points);

// output: 24


