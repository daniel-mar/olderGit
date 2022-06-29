// NON RECURSIVE
// fibonacci = (targetIndex) => {

//     const sequence = [ 0n, 1n ];

//     for(let i = 2; i < targetIndex + 1; i++) {
//         const next = sequence[ i - 2 ] + sequence[ i - 1 ];
//         sequence.push( next )
//         console.log(sequence)
//     }
//     return sequence[targetIndex];
// }



/** Recursive Fibonacci
 * Time Complexity : O(n^2) - Quadratic 
 */
// fibonacci = (n) => {
//     // base case
//     if(n < 2) return n;

//     return fibonacci(n - 1) + fibonacci(n - 2);
// };


/** Top-down with Memoization
 * When we solve the sub-problem's with recursion we cache the results
 * To not be solving it repeatedly if called multiple times.
 * Instead, we can return the saved result with 
 * *** MEMOIZATION - Dynamic Programming solution. ***
 * We can use an array to store already solved subproblems
 * instead of storing them to the call stack.
 * Setting default values and when making a recursive call, checking
 * to see if the value is in the map. If it is, return the value of the map.
 * 
 * We do not want to repeat the same task, but it continues to iterate
 * recursively, slightly slower than tabulation
 */
// const fibonacci = (n) => {
//     // store our solved subproblems
//     const memoize = [];
    
//     // create an inner function to store our subproblems recursively.
//     function fib(n) {
//         console.log(`n is: ${n} and cache is: ${memoize}`)
//         if( n < 2) return n;
        
//         // check if we already solved this subproblem, return 
//         // the result from our cache.
//         // and will return up the call stack
//         if(memoize[n]) return memoize[n];
        
//         // others it will add the value 
//         memoize[n] = fib(n-1) + fib(n-2);
        
//         // console.log(memoize)
//         return memoize[n]
//     }
//     return fib(n);
// };


/** Bottom-up with Tabulation
 * - Opposite of top-down * NO RECURSION
 * Solving all related sub-problems first.
 * Rather than mapping our already solved sub-problems
 * We solve the top problem first
 * Understanding that every Fibonacci number is
 * the sum of the two preceding numbers, we can use this to populate
 * our table
 * Time and Space: O(n) - do 1 calculation at most 1 time for each value of N
 * Pulling / storing data from the array/map/object is constant time
 * We start by setting default values of 0, 1 and start the for loop at
 * the index position after.
 * Using the array to look for the previous values and setting the next
 * indices accordingly with n 
 */
const fibonacci = (n) => {
    const dp = [0,1];

    for(let i=2; i<=n; i++) {
        // starts at dp[2] = dp[i-1] = (1) + dp[i-2] = (0) 
        dp[i] = dp[i - 1] + dp[i - 2];
        // will add dp[2] = 1 and continue this opporation until n is reached
        console.log(dp)
    }
    return dp[n];
};




console.log(fibonacci(6))
