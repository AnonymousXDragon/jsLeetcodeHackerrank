var compose = function(functions) {
    
    let funcs = functions.reverse()
	return function(x) {
        funcs.forEach((val,ind) => {
            x = val(x)
        })
        return x
    }
};

let functions = [x => x + 1, x => x * x, x => 2 * x];
functions = [x => 10 * x, x => 10 * x, x => 10 * x];
let x = 4

let inc = compose(functions);

console.log(inc(1))
// console.log(inc(x))
// console.log(inc(x))