// return the number of vowels in a string

// console.log(checkVowels("Hello World!"))

// output: 3

function checkVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for(let char of str.toLoweCase()){
       if(vowels.includes(char)){
        count++;
       }
    }
    return count;
}

// The includes() method returns true if a string contains a specified string.

// Otherwise it returns false.

// The includes() method is case sensitive.