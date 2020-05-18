// John Watson knows of an operation called a right circular rotation on an array of integers. 
// One rotation operation moves the last array element to the first position and shifts all remaining elements right one. 
// To test Sherlock's abilities, Watson provides Sherlock with an array of integers. 
// Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

// For each array, perform a number of right circular rotations and return the value of the element at a given index.

// For example, array a=[3,4,5], number of rotations, k=2 and indices to check, m=[1,2].
// First we perform the two rotations:
// [3,4,5] -> [5,3,4] -> [4,5,3]

// Now return the values from the zero-based indices 1 and 2 as indicated in the 'm' array.
// a[1] = 5
// a[2] = 3

function circularArrayRotation(a, k, queries) {
    // We need to take care of rotating the given array first, then we will iterate over the queries and print the indexes respectively.
    // We can rotate the arr with a loop that will run as long as it's less than k.
    for(let i = 0; i < k; i++){
      // inside of the loop we will remove the last element in the arr and add it to the beginning of the arr for every iteration.
      a.unshift(a.pop())
    }
    // after the for loop is done, we will make another for loop that will print the indexes of the rotated arr.
    return queries.map(num => a[num])
}