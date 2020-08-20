// Given two cells on the standard chess board, determine whether they have the same color or not.
// -------------
// Example
// -------------
// For cell1 = "A1" and cell2 = "C3", the output should be `true`.


function chessBoardCellColor(cell1, cell2) {
    let grid = []
    let bool;
    let obj = {
        'A': 7,
        'B': 6,
        'C': 5,
        'D': 4,
        'E': 3,
        'F': 2,
        'G': 1,
        'H': 0
    } 
    
    // Build the 2d array grid, with true and false values representing the color of the cell
    for(let i = 0; i < 8; i++){
        let subArr = []
        if(i % 2 === 0){
          bool = true
        } else {
          bool = false  
        }
        for(let j = 0; j < 8; j++){
            subArr.push(bool)
            if(bool === true){
              bool = false  
            } else {
              bool = true
            }
        }
        grid.push(subArr)
    }
    // then, we can check which value the cell holds, if both are true or both are false, return true, otherwise return false.
    if(grid[obj[cell1[0]]][cell1[1] - 1] === true && grid[obj[cell2[0]]][cell2[1] - 1] === true || grid[obj[cell1[0]]][cell1[1] - 1] === false && grid[obj[cell2[0]]][cell2[1] - 1] === false){
        return true
    } else {
        return false
    }
}
chessBoardCellColor('A1', 'H3')