var groupAnagrams = function(strs) {
    let dict = new Map();
    
    for (const str of strs){
        let key = str.split('').sort().join('');
        if (dict.has(key)){
            dict.get(key).push(str)
        } else {
            dict.set(key,[str])
        }
    }
    
    return [...dict.values()]
};


let strs = ["eat","tea","tan","ate","nat","bat"]
// strs = ["","b",""]
// [["b"],["",""]]

console.log(groupAnagrams(strs))
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]