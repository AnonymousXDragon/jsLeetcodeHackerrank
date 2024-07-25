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





// for O(log n) time complexity, sort the array first.