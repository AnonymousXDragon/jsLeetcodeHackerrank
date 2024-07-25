var reverseString = function(s) {
    let str = s.join('').split('').reverse()

    for (let x=0; x < str.length; x++){
        s.splice(x,1,str[x])
    }
    
    return s
};


console.log(reverseString(["h","e","l","l","o"]))