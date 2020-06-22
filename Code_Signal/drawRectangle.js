// You are implementing a command-line version of the Paint app. Since the command line doesn't support colors, you are using different characters to represent pixels. 
// Your current goal is to support rectangle x1 y1 x2 y2 operation, which draws a rectangle that has an upper left corner at (x1, y1) and a lower right corner at (x2, y2). 
// Here the x-axis points from left to right, and the y-axis points from top to bottom.

// Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. 
// For the details about how rectangles are painted, see the example.

function drawRectangle(canvas, rectangle) {
    // we can set our asterisks with the coordinates already provided

    // top left asterisk
    canvas[rectangle[0]][rectangle[1]] = '*'
    // top right asterisk
    canvas[rectangle[0]][rectangle[2]] = '*'
    // bottom left asterisk
    canvas[rectangle[0] + rectangle[3] - 1][rectangle[1]] = '*'
    // bottom right asterisk
    canvas[rectangle[2] - 1][rectangle[3] + 1] = '*'

    // then, we need to iterate over the canvas with a double for loop to draw the lines
    for(let i = 0; i < canvas.length; i++){
      for(let j = 0; j < canvas[i].length; j++){
        // if in the current iteration we match the coordinates in the rectangle, we will replace them with asterisks.
        if(i === rectangle[0] && j > rectangle[1] && j < rectangle[2]){
          canvas[i][j] = '-'
        }
        if(i === rectangle[2] - 1 && j > rectangle[1] && j < rectangle[2]){
          canvas[i][j] = '-'
        }
        if( i > rectangle[0] && i < rectangle[3] && j === rectangle[0]){
          canvas[i][j] = '|'
        }
        if( i > rectangle[0] && i < rectangle[3] && j === rectangle[2]){
          canvas[i][j] = '|'
        }
      }
    }
    return canvas
}
// -----------------------------------------------
drawRectangle([
["a","a","a","a","a","a","a","a"], 
["a","a","a","a","a","a","a","a"], 
["a","a","a","a","a","a","a","a"], 
["b","b","b","b","b","b","b","b"]],
[0, 0, 1, 1])

//OUTPUT SHOULD BE...
// [["*","*","a","a","a","a","a","a"], 
//  ["*","*","a","a","a","a","a","a"], 
//  ["a","a","a","a","a","a","a","a"], 
//  ["b","b","b","b","b","b","b","b"]]
