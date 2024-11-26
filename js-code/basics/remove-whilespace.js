// remove all whitespace charcters from string

// const inputString = "  Interview, Happy "
// console.log(removeWhiteSpace(string))

// output: Interview, Happy

function removeWhiteSpace(str){
    const result = str.replace(/\s/g,"");
    return result;
}

// Explaination 
// \s matches whitespace char - including spaces, tabs , lines
// g flas used to global serach
// replace  all occurance 