// Each cell in a 2D grid contains either a wall ('W') or an enemy ('E'), or is empty ('0'). Bombs can destroy enemies, 
// but walls are too strong to be destroyed. A bomb placed in an empty cell destroys all enemies in the same row and column, but the destruction stops once it hits a wall.

// Return the maximum number of enemies you can destroy using one bomb.

function bomber(field) {
    // we need a counter to keep a track of how many enemies can be potentially destroyed
    let enemiesDestroyed = 0
    // we might need a variable to keep a track of the max enemies that can be destroyed
    let maxEnemiesDestroyed = 0
    // we will need a double loop to iterate over rows and columns
    for(let i = 0; i < field.length; i++){
        for(let j = 0; j < field[i].length; j++){
            // we need a condition to check if the current room in the iteration is empty, if it is, we can place the bomb there.
            if(field[i][j] == 0){
            // once we have found the room to place the bomb, we need to check all cardinal points and see how many enemies we can destroy from our current location.    
                let verticalChecked = false
                let horizontalChecked = false
                let verticalIndex = 0
                let horizontalIndex = - 1
                
                while(horizontalIndex <= field[i].length - 1){
                  if(field[verticalChecked === false ? verticalIndex : i][verticalChecked === false ? j : horizontalIndex] === 'E'){
                      enemiesDestroyed++
                  } else if(field[verticalChecked === false ? verticalIndex : i][verticalChecked === false ? j : horizontalIndex] === 'W'){
                    if(verticalChecked === true){
                      horizontalChecked = true
                    }
                    verticalChecked = true
                    if(verticalChecked === true && horizontalChecked === true){
                      break  
                    }
                  }
                  if(verticalIndex >= field.length - 1){
                    verticalChecked = true
                  }
                  if(verticalChecked === false){
                      verticalIndex++
                  } else {
                      horizontalIndex++
                  }
                }
                if(enemiesDestroyed > maxEnemiesDestroyed){
                  maxEnemiesDestroyed = enemiesDestroyed 
                }
                enemiesDestroyed = 0
            }

        }
    }
    // once the loops are done, we return the max value of enemies destroyed.
    return maxEnemiesDestroyed
}