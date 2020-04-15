// Lilah has a string, 's', of lowercase English letters that she repeated infinitely many times.
// Given an integer, 'n', find and print the number of letter a's in the first 'n' letters of Lilah's infinite string.
// For example, if the string s = 'abcac' and n = 10, the substring we consider is 'abcacabcac', the first 10 characters of her infinite string. 
// There are 4 occurrences of a in the substring, so we return 4.

function repeatedString(s, n) {
    let anotherArr = []
    let counter = 0
  
    // loops over the string and as long as j is not n
    for(let i = 0, j = 0; j < n; i++, j++){
      // we check if we reached the end of the string and reset i to 0
      if(i === s.length){
        i = 0
      }
      // we constanly push each character to the array until j is n
      anotherArr.push(s[i])
    }
  
    // loops over the arr and checks any letter 'a' instances and increases count by 1
    for(let letter in anotherArr){
      if(anotherArr[letter] === 'a'){
        counter++
      }
    }
    return counter
  }
  
repeatedString('abcac', 10)