/// prefix sum pattern



var NumArray = function(nums) {
    this.nums = nums
};


NumArray.prototype.sumRange = function(left, right) {
    
    if ( left <= right){
        if ( left === 0 ){
            return this.nums[right]
        } else {
            return this.nums[right] - this.nums[left-1]
        }
    }

    return this.nums[left]
};











// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

/*



Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

*/