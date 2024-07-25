var reduce = function(nums, fn, init) {
    
    nums.forEach((val,ind) => {
        console.log(init)
        init = fn(init,val);
    });
    
    return init
};

function fn(init,val){
    return init + val;
}

let arr = [1,2,3,4]

console.log(reduce(arr,fn,100))