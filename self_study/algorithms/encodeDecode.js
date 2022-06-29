//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok

const encode = (str) => {
    //create an empty string to return later
    var newStr = ""
    //use an outer for loop to increment through the string
    for (let i = 0; i < str.length; i++) {
        var counter = 1;
        while (str[i + 1] && str[i] == str[i + 1]) {
            //use an inner while loop to check for consecutive values. as long as the next consecutive value is equal, add to a counter and increment i in the outer for loop
            counter++;
            i++;
        }
        //concat the new string with str[i] and the counter
        newStr += str[i] + counter;

    }
    return newStr;
}

// console.log(encode("aaabbcccc"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
    var newStr = ""
    // will iterate through the string
    for (let i = 0; i < str.length; i++) {
        var counter = "";
        var tempChar = str[i];
        // while iterating through the for loop, if you can continue to parse
        // meaning you have numbers instead of letters, add those to the counter
        // until you can't parse anymore, then you can continue 
        while (parseInt(str[i + 1]) || str[i + 1] == 0) {
            console.log(`${str[i+1]}`)
            counter += str[i + 1];
            i++;
        }
        for (let i = 0; i < parseInt(counter); i++) {
            newStr += tempChar;
        }
    }
    return newStr;
}

console.log(decode("a3b2c4"));
console.log(decode("t2h10j4"));
console.log(decode("t2h14j4"));

// console.log(parseInt("432"));
// console.log(parseInt2("432"));