1. all functions are object methods

example:
const person ={
    firstName : "Kiran",
    lastName : "Bedi",
    fullName: function(){
        return this.firstName + " " + this.lastName
    }

}

explaination:
 this?
********this.firstName means firstName Property of person object ******************

what is this?
1. this keyword refers to an object.

The this keyword refers to different objects depending on how it is used:

1. In an object method, this refers to the object
2. alone, this refers to global object
3. In function, this refers to global object
4. In a function, in a strict mode, this refers to undefined
5. In a event, this refers to the element that recieved the event.
6. Methods like call(), apply(), bind() , thid refers to any object


**** we cannot change the value of this as this is not a variable