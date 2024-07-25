
/// worst time complexity O(k*n)

var productExceptSelf = function(nums) {

    let ans = []
    let cpy = [...nums]
    for(let x=0; x < nums.length; x++){
        cpy.splice(x,1);
        ans.push(cpy.reduce((acc,val) => acc * val))
        cpy = [...nums]
    }
    
    return ans

};


// worst time complexity O(3n)
var productExceptSelf = function(nums) {
    
    let ans = []
    for(let x=0; x < nums.length; x++){
        ans[x] = nums.filter((val,ind) => ind != x).reduce((acc,val) => acc * val)
    }
    
    return ans
};
