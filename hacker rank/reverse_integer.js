/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let char = '';
    let new_str = '';
    let str = x.toString().split('').reverse().join('');
    
    if ( parseInt(str) >= 0x7FFFFFFF ) {
        return 0
    }

    if ( str.match(/[^\w\*]/) ) {
        char = str.match(/[^\w\*]/)[0];
        new_str = str.split('').filter((val) => val != char).join('')
    } else {
        return str
    }
    
    return parseInt(char + new_str)
};


/*

Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21



*/