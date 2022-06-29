/** Professional Visitor planning on visiting houses along a street. 
 * Each ouse has a certain amount of money stashed, only constraint stopping
 * you from visiting each of them is: that adjacent houses have security
 * systems connected and it will automatically spoil the surprise parties,
 * IF two adjacent houses were visited into on the same night.
 * 
 * GIVEN a list of non-negative integers representing the amount of money
 * each house. Determine the maximum amount of money you can obtain
 * by visiting tonight without spoiling the surprise.
 * 
 * example: [1,2,3,1] // output: 4
 * Explanation: Visit house 1 (money = 1) and then visit house 3 (money = 3)
 * Total amount you can obtain from visits = 1 + 3 = 4
 * 
 * example 2: [2,7,9,3,1] // output: 12
 */

// Dyanamic Programming
const visit = (nums) => {
    if(!nums.length) return 0; // no homes on the street
    if(nums.length === 1) return nums[0] // can visit only 1 house
    // Will compare the two indices and return the highest value
    if(nums.length === 2) return Math.max(nums[0], nums[1]);

    for(let i = 2; i<nums.length;i++) {
        // we manipulate the nums array and use .max to store the value at nums[i]
        // it would start at nums[0] + nums[2] OR nums[-1] || 0 + nums[2]
        // notice how when -1 is index, it defaults to 0. and allows nums[2] to be selected
        nums[i] = Math.max(nums[i-2] + nums[i], (nums[i-3] || 0) + nums[i]);
        console.log(nums[i])
        console.log(nums)
    }
    return Math.max(nums[nums.length - 1], nums[nums.length - 2])
}

let homes = [1,2,3,1] // expected: 4
let homes2 = [1,2,1,3,2,1,2] // expected: 7

// console.log(visit(homes))
console.log(visit(homes2))
