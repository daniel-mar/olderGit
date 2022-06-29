//create a function that accepts a string representing an int
//in binary notation, and returns the int
//you do not need to use parseInt
//should return integer >= 0

//given "1010101", return 85
//given "100011", return 35

const binToDec = (str) => {
    let temp = 0;
    // traverse string input
    for (let i = 0; i < str.length; i++) {
        // 
        console.log(`${str[str.length-(i+1)]} `)
        if (str[str.length - (i + 1)] === '1') {
            console.log(`${i} if statement`)
            temp += 2 ** i;
        }
    }
    return temp;
}

console.log(binToDec("1010101")); // 85
// console.log(binToDec("100011")); // 35
// console.log(binToDec("100")); // 4
// console.log(binToDec("1000")); // 8
// console.log(binToDec("1111")); //15
// console.log(binToDec("110101011")); // 427
// console.log(binToDec("1111111111")); // 1023

//if you have the time, do the opposite! Take in a decimal number and return a
//string with the binary data
const decToBin = (num) => {
    let bin = 0;
    // remainder
    let rem, i = 1, step = 1;
    while (num != 0) {
        rem = num % 2;
        console.log(
            `Step ${step++}: ${num}/2, Remainder = ${rem}, Quotient = ${parseInt(num / 2)}`
        );
        num = parseInt(num / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin
}

// console.log(decToBin(85));
// console.log(decToBin(420));
// console.log(decToBin(11));
// console.log(decToBin(181));