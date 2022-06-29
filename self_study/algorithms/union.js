//doesn't quite work if the lengthse are very different
const union = (leftArr, rightArr) => {
    const newArr = [];
    let count = 0;

    for (let lefti = 0; lefti < leftArr.length; lefti++) {
        for (let righti = count; righti < rightArr.length; righti++) {
            if (leftArr[lefti] === rightArr[righti]) {
                newArr.push(leftArr[lefti]);
                count = righti + 1;
                break;
            }
            if (leftArr[lefti] < rightArr[righti]) {
                newArr.push(leftArr[lefti]);
                break;
            }
            else {
                newArr.push(rightArr[righti]);
                count = righti + 1;
                lefti--;
                break;
            }
        }
        console.log(newArr);
    }
    return newArr;
}


const intersect = (arrLeft, arrRight) => {
    let newarray = [];
    // copy data within array
    let temparray = [...arrRight];
    for (let i = 0; i < arrLeft.length; i++) {
        // check to see if temparray includes the value in arrLeft
        if (temparray.includes(arrLeft[i])) {
            // indexOf gives the location of the value the we found to be in both arrays
            // + 1 chops off the value that we already checked
            temparray = temparray.slice(temparray.indexOf(arrLeft[i]) + 1);
            // pushing in value to newarray
            newarray.push(arrLeft[i]);
        }
    }
    return newarray;
}

// Working
// const union = (arrLeft, arrRight) => {
//     let newLeft = [...arrLeft];
//     let newRight = [...arrRight];
//     let interArr = intersect(newLeft, newRight);

//     for (i = 0; i < interArr.length; i++) {
//         let indexRight = newRight.indexOf(interArr[i]);
//         newRight.splice(indexRight, 1);
//     }

//     // console.log(newLeft)
//     // console.log(newRight)

//     for (i = 0; i < newLeft.length; i++) {
//         if (newLeft[i] > newRight[0]) {
//             newLeft.splice(i, 0, newRight.shift())
//             i--;
//         } else if (i == newLeft.length - 1 && newRight.length > 0) {
//             newLeft.push(newRight.shift())
//         }

//     }

//     return newLeft;
// }

// console.log(union([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(union([1, 2, 2, 2, 7, 9, 10, 200, 1000], [2, 2, 6, 6, 7]));
// console.log(union([1,5,9],[2,6,10]));