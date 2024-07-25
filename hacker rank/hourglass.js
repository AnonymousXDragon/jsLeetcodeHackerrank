// mine

function hourglassSum(arr) {
    // Write your code here
    let xx = [...arr]
    let store = []
    for (let x=0; x < xx?.length; x++){
        console.log("x",x)
        // let total = 0;
        for(let y=0; y < xx[x]?.length; y++){
            let temp_arr1 = xx[x]?.slice(y,y+3)
            let temp_arr2 = xx[x+2]?.slice(y,y+3)
            let total = 0;
            // console.log("y",y)
            if (temp_arr1?.length === 3 && temp_arr2?.length === 3){
                // console.log("1",temp_arr1)
                // console.log("2",xx[x+1][y+1])
                // console.log("3",temp_arr2)
                // console.log("..............")
                total = temp_arr1.reduce((prev,val) => prev + val ,0)
                // console.log(total)
                total += xx[x+1][y+1]
                total +=  temp_arr2.reduce((prev,val) => prev + val,0)
                // console.log("total is",total);
                // console.log("******************88")
                store.push(total)
            };
        }
        // console.log("=============end===================")
    }
    return Math.max(...store)
}


// other 
/*

    n = 6
    m = []
    for i in range(n):
        m.append(list(map(int, input().split()[:n])))
        
    def sum_glass(m, i, j):
        """Assumes hour-glass is in bounds of m!"""
        return sum(m[i][j:j+3]) + m[i+1][j+1] + sum(m[i+2][j:j+3])

    best = float("-inf")
    for i in range(4):
        for j in range(4):
            s = sum_glass(m, i, j)
            if s > best:
                best = s
                
    print (best)


*/