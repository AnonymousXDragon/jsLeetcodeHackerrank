let arr =[-2, 0, 3, -5, 2, -1];

for (let x = 1; x < arr.length ; x++){
    arr[x] = arr[x] + arr[x-1]
}


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
