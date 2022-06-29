//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
// const dedupe = (str) => {

//     // plenty of built ins, with a function inside
//     return str
//     .split('')
//     .filter((item, pos, self) => {
//         return self.indexOf(item) == pos;
//     })
//     .join('');

// }

const dedupe = (str) => {

    // plenty of built ins, with a function inside
    let string = str.split('').filter((item, pos, self) => {
            return self.indexOf(item) == pos;
        })
        string.join('');
        return string
}

console.log(dedupe("Snaps! crackles! pops!"));
// console.log(dedupe("Did I shine my shoes today?"));
// console.log(dedupe("scoop dedupe!"));
// console.log(dedupe("This is freaking insane because I live in Cincinnati but I want to live in Mississippi with my family!"));
// console.log(dedupe("Sweet potato"));