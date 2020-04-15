// You are given  queries in the form of 'x', 'y', and 'z' representing the respective positions for cats 'A' and 'B', and for mouse 'C'. 
// Complete the function 'catAndMouse' to return the appropriate answer to each query, which will be printed on a new line.

// If cat  catches the mouse first, print Cat A.
// If cat  catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

// For example, cat 'A' is at position x=2 and cat B is at y=5. If mouse 'C' is at position z=4, it is 2 units from cat 'A' and 1 unit from cat 'B'.
// Cat 'B' will catch the mouse.

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    // variable that holds the cat's both distances from the mouse (arr)
    let distances = []
    // we use the sign method to always push positive values to the arr, if the result value of the substraction is a positive value, we push it, otherwise we switch variables before substraction.
    if(Math.sign(z - x) === 1){
      distances.push(z - x)
    } else {
      distances.push(x - z)
    }
    if(Math.sign(z - y) === 1){
      distances.push(z - y)
    } else {
      distances.push(y - z)
    }
    // condition that checks if arr[0] < arr[1]..
    if(distances[0] < distances[1]){
      // if it is, we want to return 'Cat A'
      return 'Cat A'
    }
    // else if arr[0] === arr[1]..
    else if (distances[0] === distances[1]){
      // return 'Mouse C'
      return 'Mouse C'
    // otherwise, return 'Cat B'
    } else {
      return 'Cat B'
    }
  
  }
catAndMouse(1, 2, 3) //should return 'Cat B'
catAndMouse(1, 3, 2) // should return 'Mouse C'