//given a string of words(with spaces),
//return an array of words
//spaces are considered the separation between words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]

// const stringToWordArray = (str) => {
//     let temp = ""
//     let arr = []
//     for (let i = 0; i < str.length; i++) {
//         temp += str[i]

//         if(str[i + 1] === " ") {
//             if(str[i] === " ") {
//                 i++
//             } else {
//                 arr.push(temp)
//                 temp = ""
//                 i++
//             }
//         }
//     }
//     return arr
// }


const stringToWordArray = (str) => {
    const wordArray = []
    var word = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            if (word.length > 0) {
                wordArray.push(word)
                word = "" //We're resetting the string
            }
        }
        else {
            word += str[i]
        }
        // console.log(str[i]);
    }
    if (word.length > 0) {
        wordArray.push(word)
    }
    return wordArray
}

console.log(stringToWordArray("Did I shine my shoes today?"));
// console.log(stringToWordArray("Did I shine my shoes today?      "));
// console.log(stringToWordArray("two             words"));

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {
    let tempArr = stringToWordArray(str);
    let output = "";
    for (var i = tempArr.length - 1; i >= 0; i--) {
        output += tempArr[i] + " ";
    }
    return output;
}

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));