// palindrome means is a word that reads the same backwards and forwards

// console.log(isPalindrome("racecar"))
// output: true

function isPalindrome(word){
    const strReverse = word.split("").reverse().join("");

    return word === strReverse;             // its in the form of true/ false
}