//A function that sums all the values from top-left to bottom-right, and from top-right to bottom-left
//and returns the number difference between them by substracting both values
function diagonalDifference(arr) {
    //keeps a track of arrays length
    let arr_length = arr[0].length;
    //holds values summed from top-left to bottom-right
    let leftSum = 0;
    //holds values summed from top-right to bottom-left
    let rightSum = 0;
    //for loop that iterates from both top-left and top-right , and wors its way down
    for(let i = 0, j = arr_length - 1; i < arr_length; i++, j--){
      leftSum += arr[i][i];
      rightSum += arr[i][j];
    }
      //subtracts both values
      let difference = leftSum - rightSum
      //returns the absolute number(for negative values)
      return Math.abs(difference);
  }
  