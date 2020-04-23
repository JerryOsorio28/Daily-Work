// Create a function that takes 2 arrays as parameters, one called 'dictionary' and the other 'query', both containing a collection of strings.
// Your function should return an array with a colleciton of integers that represent that anagrams that were found in between both arrays. 

// Example:
dictionary = ["hack", "a", "rank", "khac", "ackh", "kran", "rankhacker", "a", "ab", "ba"] 
query = ["a", "nark", "bs", "hack"]
// Expected output = [2, 2, 0, 3]
// Explanation: query['a'] has 2 anagrams inside dictionary, same as query['nark'] has also 2, query['bs'] has 0 and query['hack'] has 3.

function stringAnagram(dictionary, query) {
    let obj = {}
    // Sort both dictionary and query
    for(let i = 0; i < dictionary.length; i++){
      dictionary[i] = dictionary[i].split('').sort().join('')
    }
    for(let i = 0; i < query.length; i++){
      query[i] = query[i].split('').sort().join('')
      obj[query[i]] = 0
    }
    
    // array that needs to be returned
    let anagramsCount = []
    // we need a double for loop to iterate over both arrays
    for(let i = 0; i < dictionary.length; i++){
      // as long as the value is not undefined, we increase the value by 1, this avoid having NaN as values in our obj 
      if(obj[dictionary[i]] !== undefined){
        obj[dictionary[i]] += 1
      }
    }
    return Object.values(obj)
}
stringAnagram(dictionary, query) //should return [2,2,0,3]