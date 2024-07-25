var romanToInt = function(s) {
  let arr = s.split('')
  let sum = 0;
  let roman = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  }
  
  for (let x = 0; x < arr.length ; x++){
      if ( roman[arr[x]] < roman[arr[x+1]] ){
          sum -= roman[arr[x]]
      } else {
          sum += roman[arr[x]]
      }
  }
  
  return sum
};


/*

Input: s = "III"
Output: 3
Explanation: III = 3.


Input: s = "LVIII"
Output: 58
Explanation: L = 50, V = 5, III = 3.

*/

/*

    1.Split the Roman Numeral string into Roman Symbols (character).
    2.Convert each symbol of Roman Numerals into the value it represents.
    3.Take symbol one by one from starting from index 0: 
        1.If current value of symbol is greater than or equal to the value of next symbol, then add this value to the running total.
        2.else subtract this value by adding the value of next symbol to the running total.

*/

