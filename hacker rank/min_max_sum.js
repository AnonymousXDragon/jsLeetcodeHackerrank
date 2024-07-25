function findMin(arr){
    return Math.min(...arr)
};

function findMax(arr){
    return Math.max(...arr)
};

function take(arr){
    let arr1 = []
    for(let x=0; x < arr.length; x++){
        let idx = x;
        let total = 0;
        let arr2 = arr.filter(val => val !== arr[idx])
        if  (arr2.length === 0){
            let val = arr[idx] * (arr.length - 1)
            console.log(val)
            arr1.push(val)
            break;
        }

        for (let j=0; j < arr2.length; j++){
            total += arr2[j]
        }
        
        arr1.push(total)
    }
    return arr1
}

function minMax(arr){
    let arr1 = [];
    arr1.push(findMax(arr));
    arr1.push(findMin(arr));
    
    console.log(arr1.join(' '))
}

// let x = [1,2,3,4,5]
x = [5,5,5,5,5];
// for (let i of x){
//     console.log(x.filter(val => val != i))
// }
let solution = take(x);
console.log(solution)
console.log(findMin(solution))
console.log(findMax(solution))

/*

    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
    Then print the respective minimum and maximum values as a single line of two space-separated long integers.

    example:
        arr = [1,3,5,7,9];
        minimum_sum is 1 + 3 + 5 + 7 = 16;
        maximum_sum is 3 + 5 + 7 + 9 = 24;
    
    steps:
        1.Sum everything except 1, the sum is
            2 + 3 + 4 + 5 = 14;
        
        2.Sum everything except 2, the sum is
            1 + 3 + 4 + 5 = 13;

        3.Sum everything except 3, the sum is
            1 + 2 + 4 + 5 = 12;
        4.Sum everything except 4, the sum is
            1 + 2 + 3 + 5 = 11;
        5.Sum everything except 5, the sum is 
            1 + 2 + 3 + 4 = 10;
*/          