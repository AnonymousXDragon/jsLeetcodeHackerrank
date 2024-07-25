let binarySearch = function binarySearch (arr,target,low,high){
    if (high >= low){

        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === target){
            return mid
        }
        if (arr[mid] > target){
            return binarySearch(arr,target,low,mid-1)
        } else {
            return binarySearch(arr,target,mid+1,high)
        }

    }

    return -1
}


var searchInsert = function(nums, target) {
    let result = binarySearch(nums,target,0,nums.length-1);

    let sorted_index = 0;
    if ( result === -1){
        let new_arr = [...nums,target];
        new_arr.sort((a,b) => a - b).filter((val,index) => {
            if ( val === target){
                sorted_index = index
            }
        });
        
        return sorted_index
    }
    return result
};


let nums = [3,5,7,9,10];
let target = 8;

console.log(searchInsert(nums,target));