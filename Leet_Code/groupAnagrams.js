// Given an array of strings, group anagrams together.
// input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// expected output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

function groupAnagrams (strs) {
    //obj variable
    let obj = {}
    // array output
    let arr = [] 
    
    // we sort the copy
    let strsCopy = [...strs]
    for(let i = 0; i < strsCopy.length; i++){
      strsCopy[i] = strsCopy[i].split('').sort().join('')
    }
    
    //we need to iterate over the sorted arr
    for(let i = 0; i < strs.length; i++){
      //we check if the words does not exists as key in the dictionary, if not we add the sorted value as key and the original word as value inside of an array
      if(!obj[strsCopy[i]]){
        obj[strsCopy[i]] = [strs[i]]
        // otherwise we add the word as value to exisisting key
      } else {
        obj[strsCopy[i]].push(strs[i])
      }
    }
    return Object.values(obj)
    
    };
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    