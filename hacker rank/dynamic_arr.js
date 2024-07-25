let init_arr = function init_arr(arr,n,query){
    
    let lastAnswer = 0;
    let result = [];
    
    let y = null;
    for(let i=0; i < query.length; i++){
        let idx = 0;

            
        if (query[i][0] === 1){
            
            idx = (query[i][1] ^ lastAnswer) % n;
            y = query[i][2];
            arr[idx].push(y);
            
        } else {

            idx = (query[i][1] ^ lastAnswer) % n;

            y = query[i][2];

            lastAnswer = arr[idx][y % arr[idx].length];
            result.push(lastAnswer);
        }
        
    }
    return result
    
}



function dynamicArray(n, queries) {
    let arr = [];

    for(let x=0; x < n; x++){
        arr.push([]);
    }

    return init_arr(arr,n,queries)
}
