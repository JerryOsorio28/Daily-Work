// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// For example, there are n=7  socks with colors ar = [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. 
// There are three odd socks left, one of each color. The number of pairs is 2.

// we need to make a function that returns the number of pairs in a array
function sockMerchant(n, ar) {
    //sort arr
    let sorted = ar.sort()
    //counts how many pairs
    let counter = 0;
    //iterate over arr
    for(let i = 0; i < n - 1; i++){
    //check if the current index value is equal to the next,if it is increase counter
      if(sorted[i] === sorted[i + 1]){
        //increase counter
        counter++;
        //since the next index have been checked, we move on to the next index
        i++;
      }
    }
    //return counter
    return counter
  }