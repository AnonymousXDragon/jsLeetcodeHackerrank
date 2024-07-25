// rotate left
let rotate = function rotate(d,arr){
    let arr_cpy = [...arr];
    let sli = arr_cpy.slice(d);
    let newA = sli.concat(arr_cpy.slice(0,d));
    return newA
}