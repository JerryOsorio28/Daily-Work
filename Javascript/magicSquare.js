// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    // a variable that holds all the potential arrays
    let allArr = []
    // a variable helps moving through columns
    let columns = 1
    // empty arr that will hold the values columns values
    let subArr = []
  
    // this nested for loop will iterate times the length of the matrix to the power of 2 - 2, giving us the length of the sub arrays rows and columns, excluding the diagonal ones.
    for(let a = 0; a < Math.pow(s.length, 2) - 2; a++){
      for(let b = s.length - 1; b >= 0; b--){
        // checks if sub arr already exists in allArr, to avoid duplicates
        if(!allArr.includes(s[b])){
          allArr.push(s[b])
        }
        // grabs the values of the current column and pushes them to the subArr
        for(let c = s[b].length - columns; c >= 0; c--){
          subArr.push(s[b][c])
          break
        }
      }
      // checks the length of the subArr to avoid potential empty arrays, and pushes them to allArr
      if(subArr.length > 0){
        allArr.push(subArr)
        // we reinitialize the subArr to be empty and we move through the columns by increasing it by 1
        subArr = []
        columns++
      }
    }
  
    // this for loop handles the diagonal arrays, since on a matrix, there is only to diagonal lines, we initialize it with to empty sub arrays.
    let diagonalArr = [[], []]
    for(let i = 0, j = s[i].length - 1; i < s.length; i++, j--){
      // here we push the respective values as we iterate, moving with i from top left, down to bottom right, as well as with j, from top right to bottom left.
      diagonalArr[0].push(s[i][i])
      diagonalArr[1].push(s[i][j])
    }
    // lastly we push the diagonal arrays, and we now have all the potential arrays
    allArr.push(diagonalArr[0])
    allArr.push(diagonalArr[1])
                    
    console.log(allArr)
  
    // have a counter to keep a track of how many numbers are changed
    let otherObj = {}
    let middle = allArr.length / 2 - 1
    let pointer = 0
    // this for loops create an object with the current position as keys, and does keys hold another object with rows and columns, and each row and column has an array with 2 things, the array for the rows and columns on index 0, and on index 1 the reduced value from does arrays.
    for(let i = 0; i < allArr.length; i++){
      otherObj[i] = {'row': null, 'column': null}
      if(i < middle){
        otherObj[i]['row'] = [allArr[i], allArr[i].reduce((a, b) => a + b)]
      }
    }
    
    for(let i = 0; i < allArr.length; i++){
      if ( i >= middle && i < allArr.length - 2){
        otherObj[pointer]['column'] = [allArr[i], allArr[i].reduce((a, b) => a + b)]
        pointer++
      }
    }
    // vvvvv----------------------------------------------------------------------vvvv MISSING CODE LEFT
    // for loop to iterate over the otherObj
      // a condition that checks if the sum of the current row and column are not equal to the max value and, if the sum of both hold the same values..
        // if the condition is true, we want to subtract the max value with the sum, and add the difference to the current position in s[i].
  
    console.log('otherObj', otherObj)
  
  }
  formingMagicSquare([[5, 3, 4],
                      [1, 5, 8],
                      [6, 4, 2]])