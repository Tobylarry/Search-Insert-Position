/**

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0; r = nums.length;
    while(l < r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid] == target){
            return mid;
        }
        
        if(nums[mid] > target){
            r = mid;
        }
        else{
            l = mid + 1;
        }
    }
    return l;
};
