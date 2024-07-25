var once = function(fn) {
    
    let bool = 0
	return function(...args){
        let res = fn(...args)
        if ( bool < 1){
            bool += 1;
            return res
        }
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

onceFn(1,2,3); // 6
onceFn(2,3,6); // returns undefined without calling fn
