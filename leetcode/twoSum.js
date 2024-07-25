var twoSum = function(nums, target) {

    let arr = [];
    for(let x = 0; x < nums.length; x++){
        let y = x + 1;
        
        while ( y < nums.length ){
            if ( (nums[x] + nums[y]) === target){
                arr.push(...[x,y])
                return arr
            }
            y += 1
        }
    }
};

let arr = [3,2,3];
