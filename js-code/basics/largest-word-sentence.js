// find the largest word in the sentence

// output: console.log(findLargestWord("I love JavaScript"))

function findLargestWord(str){
    const word = str.split(" ");
    let longestWord = "";

    for(word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

// output: JavaScript