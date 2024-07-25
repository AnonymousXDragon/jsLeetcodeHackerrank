
let nums = [1,7,3,6,5,6]
// nums = [2,1,-1]
// nums = [1,2,3]
var pivotIndex = function(nums) {
    let arr = []
    
    total_sum = nums.reduce((acc,val) => acc + val)

    let start = 0;
    let rightSum = total_sum
    let leftSum = 0;
    
    for (let x = 0;  x < nums.length; x++){
        
        
        if ( leftSum === rightSum - leftSum -  nums[x]){
            return x
        }
        
        leftSum += nums[x]
    }
    
    return -1
};

console.log(pivotIndex(nums))