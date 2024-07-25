// using hash map and priority queue


function dequeue(list){
    let max_pr;
    let idx = 0;
    for (let x = 0; x < list.length; x++){
        // console.log(list[x])
        max_pr = list[x][1]
        idx = x
        for (let y=x+1; y < list.length; y++){
            if ( list[y][1] > max_pr){
                // console.log(max_pr)
                max_pr = list[y][1]
                idx = y;
            }
        }
        
        break
    }
    
    val = list[idx][0]
    
    while (idx < list.length){
        // let temp = list[idx]
        list[idx] = list[idx + 1]
        // list[idx+1] = temp;
        idx += 1;
    }
    
    list.pop()
    return val
}



var topKFrequent = function(nums, k) {
    let mp = new Map();
    nums = nums.sort((a,b) => a - b)
    let result = []
    
    for (let x=0; x < nums.length; x++){
        if ( mp.has(nums[x])) {
            mp.set(nums[x],mp.get(nums[x])+1)
        } else {
            mp.set(nums[x], 1)
        }
    }
    
    let list = [...mp]
    
    for (let i = 0; i < k ; i++){
       result.push(dequeue(list))
    }
    
    
    return result
}