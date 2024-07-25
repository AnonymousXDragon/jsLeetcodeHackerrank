function memoize(fn) {
    
    let store = new Map()
    return function(...args) {
        let sum = [...args].join('-');
        if ( store.has(sum) ){
            return store.get(sum)
        } else {
            store.set(sum,fn(...args))
            return store.get(sum)
        }
    }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
 });
 
console.log(memoizedFn(2, 3))// 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1 