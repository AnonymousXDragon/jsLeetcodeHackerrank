
// Extending & Contracting

function dynamicSliding(arr,target){
    let minlength = 0;
    let start = 0;
    let end = 0;
    let currentSum = 0;
    
    while ( end < arr.length ){
        currentSum += arr[end]
        end += 1;
        
        while ( start < end && currentSum >= target){
            currentSum -= arr[start]
            minlength = end-start
            start += 1
        }   
    }
    
    return minlength
}


let arr = [1,2,3,4,5,6]
console.log(dynamicSliding(arr,7))
