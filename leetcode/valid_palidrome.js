

/// Hint: remove alpha numerals and characters from string and compare


var isPalindrome = function(s) {
    let s1 = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    console.log(s1)
    let check_str2 = s1.split('').reverse().join('')
    console.log(check_str2)
    
    return s1 === check_str2
};


console.log(isPalindrome("race a car"))

// A man, a plan, a canal: Panama