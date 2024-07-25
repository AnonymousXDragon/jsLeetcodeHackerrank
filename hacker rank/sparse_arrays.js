let makeTable = function tableMake(q_arr){
  let arr = [];
  
  for(let x of q_arr){
    arr.push(0);
  };
  
  return arr
};


function matchingStrings(stringList, queries) {
    // Write your code here
    let count = makeTable(queries);
    
    for (let x=0; x <= queries.length; x++){
        for(let y=0; y <= stringList.length; y++){
            if ( stringList[y] === queries[x]){
                count[x] += 1;
            }      
        }
    }
    
    return count.slice(0,queries.length)
}


/*
    SAMPLE CASE

    let stringList = ['ab','ab','abc'];
    let queries = ['ab','abc','bc'];

    let stringList = ['def','de','fgh'];
    let queries = ['de','lmn',"fgh"];

*/