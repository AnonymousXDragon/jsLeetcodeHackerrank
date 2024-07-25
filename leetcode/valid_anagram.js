let validAnagram = function(s,t){
    if (s.length !== t.length){
        return false
    }
    
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    
    if (s === t){
        return true
    }
    
    return false
}



let s = "anagram";
let t = "nagaram";

console.log(s.length)
console.log(t.length)

// let s = "ab";
// let t = "ba"

// let s = 'a'
// let t = "ab"

s = "car"
t = "rat"