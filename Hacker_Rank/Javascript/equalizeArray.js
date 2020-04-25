// This function takes in an array that contains a collection of numbers.
// We need to balance the array to have only the same numbers and return the elements count that were removed.
// Example: 
// arr = [3,1,2,3,3]
// expected output = 2
// Explanation: The output is 2 since balancing the arr with the value 1 or 2, would remove [3,2,3,3] or [3,1,3,3], that's 4 elements removed,
// to balance it out with the least count of numbers removed, we used 3, removing only [1,2], which is only 2 elements, so it returns 2.

function equalizeArray(arr) {
    // create an obj that will hold the arr nums as keys, and their repetition as values
    let obj = {}
    // for loop to create obj
    for(let i = 0; i < arr.length; i++){
      // condition that checks if num is in obj, if it is...
      if(obj[arr[i]]){
        // increase counter
        obj[arr[i]] += 1
      // otherwise, we add it to the obj
      } else {
        obj[arr[i]] = 1
      }
    }
    // we can grab the values of the obj in a var
    let objValues = Object.values(obj)
    // we can grab the keys of the obj in a var also
    let objKeys = Object.keys(obj)
    // counter to keep a track of the deleted values
    let counter = 0
    // keeps a track of wether the counter has increase or not
    let prev = counter
    // we can grab the max value of that arr
    let maxIndex = objValues.indexOf(Math.max(...objValues))
    // we can iterate over the arr and..
    for(let i = 0; i < arr.length; i++){
      //  delete anything that is not the max
      if(arr[i] !== Number(objKeys[maxIndex])){
        arr.splice(i, 1)
        // increase counter
        counter++
      }
      // if prev is not equal to counter, counter has changed..
      if(prev !== counter){
        // so we decrease i by 1
        i -= 1
        // set prev to be counter again
        prev = counter
      }
    }
    // return counter
    return counter
}
equalizeArray([3,1,2,3,3])
