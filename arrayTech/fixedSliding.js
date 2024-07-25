

function fixedSliding(arr,k){
    
    let curr_arr = arr.slice(0,k);
    let current_s = curr_arr.reduce((acc,val) => acc + val,0);
    let sum = [current_s];
    
    let loops = arr.length - k + 1;
    for(let x=1; x < loops; x++){
        current_s -= arr[x-1];
        current_s += arr[x+k-1];
        
        sum.push(current_s)
    }
    
    return sum
}

let arr = [1,2,3,4,5,6]
let k = 3;