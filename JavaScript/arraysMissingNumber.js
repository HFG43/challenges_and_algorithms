// **Missing Number**

// Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, *return the only number in the range that is missing from the array.*

// **Example 1:**

// ```
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// ```
// Get max Number
// sort and get the lenght -1 item
// Generate espected Array
// Compare spected with given

function missingNumber (nums){
  let maxValue = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > maxValue){
      maxValue = nums[i];
    }
  }
     
  let expectedArr = 0;
  for (let y = 0; y <= maxValue; y++){
    if(!nums.includes(y)){
      expectedArr = y;
    }
  } 
  return expectedArr;
}
    
let result = missingNumber([3,0,1]);
console.log(result);