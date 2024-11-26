// reverse the string

// 1. using for loop

function reverseString(str){
    let reverse = "";

    for(let i= str.length-1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
}

// 2. string methods

function shortHandReserveString(str){
    return str.split("").reverse().join("");
}