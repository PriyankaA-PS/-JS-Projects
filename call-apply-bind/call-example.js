//Example 1

const person ={
    fullName: function(){
        return this.firstName + " " + this.lastName; 
    }
}

const person1= {
    firstName: "Lily",
    LastName: "Bloom"
}

const person2={
    firstName: "Blair",
    LastName: "waldroof"
}

person.fullName.call(person1);

// output : Lily Bloom


// Example 2, call with arguments

const human = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const humanBeing = {
    firstName:"John",
    lastName: "Doe"
  }
  
  human.fullName.call(humanBeing, "Oslo", "Norway");

