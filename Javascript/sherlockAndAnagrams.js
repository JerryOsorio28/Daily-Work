// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. 
// Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

// For example s='mom', the list of all anagrammatic pairs is [m,m], [mo, om] at positions [[0], [2]], [[0, 1], [1, 2]] respectively.
// Find all the anagrams that you can do with all the sub arrays that you could find in the given string

function subAnagrams (s) {
    // variable that holds all the possible subarrays
    let allSubArrays = []
    // variable that holds a copy of the original string
    let strCopy = s
    // variable that holds the anagrams in an object
    let anagrams = {}
    // while the length of the copy of the string > 0...
    while(strCopy.length > 0){
      // variable initialized as an empty string
      let str = ''
      // we iterate over the string
      for(let letter in strCopy){
      // we add the current value to the string
      str += strCopy[letter]
      // we push the value to the possible sub arrays
      allSubArrays.push(str)
  
      //a condition that checks if result is equal to the length of the copy of the string, we remove the first element in the string
      }
      strCopy = strCopy.substring(1)
    }
  
    // for loop to iterate over the potential arrays and sort them
    for(let subArr in allSubArrays){
      allSubArrays[subArr] = allSubArrays[subArr].split('').sort().join('')
    }
    
    let counter = 0
    // double for loop to iterate over the sub arrays
    for(let i = 0; i <= allSubArrays.length; i++){
      for(let j = i + 1; j <= allSubArrays.length; j++){
        // we compare if any sub arrays at this point are the same..
        if(allSubArrays[i] === allSubArrays[j]){
          // if it is, means we found an anagram so we increase counter by 1
          counter++
        }
      }
    }
    return counter 
  }
  subAnagrams('kkkk') // should return 10
  subAnagrams('ifailuhkqq') // should return 3
  subAnagrams('abba') // should return 4