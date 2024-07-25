var searchRange = function(nums, target) {
    let arr = []

    if ( nums.length > 0){
        let bool = false;
        for (let x = 0; x < nums.length; x++){
            if (nums[x] === target){
                bool = true;
                arr.push(x);
            }
        }

        if ( bool === true && arr.length === 1) {
            let temp = arr[0];
            arr[0+1] = temp;
            return arr
        }

        if ( bool === true) return [arr[0],arr[arr.length-1]] ;
        return [-1,-1]

    }  else {
        return [-1,-1]
    }

};



// let arr = [5,7,7,8,8,10];
// let arr = [1]
let arr = [3,3,3]

console.log(searchRange(arr,3))