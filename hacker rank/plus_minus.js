function plusMinus(arr){
    let plus = [];
    let minus = [];
    let zeros = []
    
    let total = []
    for(let x=0; x < arr.length; x++){
        if (arr[x] < 0){
            minus.push(arr[x])
        } else if (arr[x] === 0) {
            zeros.push(arr[x])
        } else {
            plus.push(arr[x])
        }
    }
    
    total.push(plus.length / arr.length);
    total.push(minus.length / arr.length);
    total.push(zeros.length / arr.length);
    
    for (let x of total){
        console.log(x)
    }
}

let arr = [1,1,0,-1,-1];
console.log(plusMinus(arr));


/*
    Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
    Print the decimal value of each fraction on a new line with places after the decimal.

    arr = [1,1,0,-1,-1];
    n = 5;

    calculate total number of positives , negatives , zeros
    in an array.

    and divide it with n

*/