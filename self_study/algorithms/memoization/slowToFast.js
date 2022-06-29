const slowFunc = (num) => {
    for (let i = 0; i <= num; i++) {
        if(i === num) {
            return i;
        }
    }
};

// console.time();
// console.log(slowFunc(10800000))
// console.timeEnd();


const memoize = (fn) => {
    const cache = {};
    // rest parameter to input any number of arguments we want.
    return function(...args) {
        // which if argument is in the cache, otherwise perform computation
        if(cache[args]) {
            return cache[args]
        }
        const result = fn(...args)
        cache[args] = result;
    };
}

const fastFunc = memoize(slowFunc);
console.time()
console.log(fastFunc(10800000))
console.timeEnd();
console.time()
console.log(fastFunc(10800000))
console.timeEnd();
