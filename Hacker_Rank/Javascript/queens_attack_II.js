function queensAttack(n, k, r_q, c_q, obstacles) {
  // variable that holds the total moves of the queen.
  let totalMoves = 0
  // variable that holds the queens move count.
  let queenMoveCount = 0
  // variable that holds queen's row location.
  let rowQueenCopy = r_q
  // variable that holds queen's column location.
  let colQueenCopy = c_q
  // variable that holds the queen's coords.
  let queenCords = []
  // variable that holds the obstacles and their locations.
  let obstaclesObj = {}

  // we need to pass the obstacles locations to the obstacles obj for faster access to locations.
  for(let i = 0; i < obstacles.length; i++){
    obstaclesObj[obstacles[i]] = `${obstacles[i]}`
  }
  console.log(obstaclesObj)
  // we check if we can move left from the queen's location by substracting queen's column by 1.
  // we check if there are no obstacles, if there isn't, we increase our queens move count by 1.. if there is, we sum both counts and we reset the queens move count and the queen's location.
  while(true){
    colQueenCopy--
    queenCords = [rowQueenCopy, colQueenCopy]

    if(obstaclesObj[queenCords] == `${queenCords}` || colQueenCopy < 1){
      totalMoves += queenMoveCount
      queenMoveCount = 0
      rowQueenCopy = r_q
      colQueenCopy = c_q
      queenCords = [rowQueenCopy, colQueenCopy]
      break
    } else {
      queenMoveCount++
    }
  }

  // we check if we can move down from the queen's location by substracting queen's row by 1.
  // we check if there are no obstacles, if there isn't, we increase our queens move count by 1.. if there is, we sum both counts and we reset the queens move count and the queen's location.
  while(true){
    rowQueenCopy--
    queenCords = [rowQueenCopy, colQueenCopy]
    // we check if there are no obstacles, if there isn't, we increase our queens move count by 1.. if there is, we sum both counts and we reset the queens move count and the queen's location.
    if(obstaclesObj[queenCords] == `${queenCords}` || rowQueenCopy < 1){
      totalMoves += queenMoveCount
      queenMoveCount = 0
      rowQueenCopy = r_q
      colQueenCopy = c_q
      queenCords = [rowQueenCopy, colQueenCopy]
      break
    } else {
      queenMoveCount++
    }
  }
  // we check if we can move right from the queen's location by substracting the size of the board minus the queen's column location.
  // we check if there are no obstacles, if there isn't, we increase our queens move count by 1.. if there is, we sum both counts and we reset the queens move count and the queen's location.
  // console.log('totalMoves', totalMoves)
  while(true){
    colQueenCopy++
    queenCords = [rowQueenCopy, colQueenCopy]
    // we check if there are no obstacles, if there isn't, we increase our queens move count by 1.. if there is, we sum both counts and we reset the queens move count and the queen's location.
    if(obstaclesObj[queenCords] == `${queenCords}` || colQueenCopy > n){
      totalMoves += queenMoveCount
      queenMoveCount = 0
      rowQueenCopy = r_q
      colQueenCopy = c_q
      queenCords = [rowQueenCopy, colQueenCopy]
      break
    } else {
      queenMoveCount++
    }
  }
  // we check if we can move up from the queen's location by substracting the size of the board minus the queen's row location.
  // we check if there are no obstacles, if there isn't, we increase our queens move count by 1.. if there is, we sum both counts and we reset the queens move count and the queen's location.
    while(true){
    rowQueenCopy++
    queenCords = [rowQueenCopy, colQueenCopy]
    // we check if there are no obstacles, if there isn't, we increase our queens move count by 1.. if there is, we sum both counts and we reset the queens move count and the queen's location.
    if(obstaclesObj[queenCords] == `${queenCords}` || rowQueenCopy > n){
      totalMoves += queenMoveCount
      queenMoveCount = 0
      rowQueenCopy = r_q
      colQueenCopy = c_q
      queenCords = [rowQueenCopy, colQueenCopy]
      break
    } else {
      queenMoveCount++
    }
  }
  // we check if we can move down / left diag from the queen's location by..
    // checking if queens row location is greater than 1 AND queens column > 1, if it is we substract 1 from each the queen's column/row location and increase queens move count by 1..
    while(true){
      rowQueenCopy--
      colQueenCopy--
      queenCords = [rowQueenCopy, colQueenCopy]
      console.log(queenCords)

      if(obstaclesObj[queenCords] == `${queenCords}` || rowQueenCopy < 1 || colQueenCopy < 1){
        totalMoves += queenMoveCount
        queenMoveCount = 0
        rowQueenCopy = r_q
        colQueenCopy = c_q
        queenCords = [rowQueenCopy, colQueenCopy]
        break
      } else {
        queenMoveCount++
      }
    }
  // we check if we can move up / right diag from the queen's location by..
    // checking if queens row location is less than board size AND column location is less than board size, if it is we sum 1 from each the queen's column/row location and increase queens move count by 1..
    // otherwise we reset the queens location, sum both counts and reset queens move count.
    while(true){
      rowQueenCopy++
      colQueenCopy++
      queenCords = [rowQueenCopy, colQueenCopy]

      if(obstaclesObj[queenCords] == `${queenCords}` || rowQueenCopy > n || colQueenCopy > n){
        totalMoves += queenMoveCount
        queenMoveCount = 0
        rowQueenCopy = r_q
        colQueenCopy = c_q
        queenCords = [rowQueenCopy, colQueenCopy]
        break
      } else {
        queenMoveCount++
      }
    }

  // we check if we can move down / right diag from the queen's location by..
    // checking if queens row location is greater than 1 AND column location is less than board size, if it is we substract 1 from row's location and we increase column's location by 1, we also increase queens move count by 1..
    // otherwise we reset the queens location, sum both counts and reset queens move count.
    while(true){
      rowQueenCopy--
      colQueenCopy++
      queenCords = [rowQueenCopy, colQueenCopy]

      if(obstaclesObj[queenCords] == `${queenCords}` || rowQueenCopy < 1 || colQueenCopy > n){
        totalMoves += queenMoveCount
        queenMoveCount = 0
        rowQueenCopy = r_q
        colQueenCopy = c_q
        queenCords = [rowQueenCopy, colQueenCopy]
        break
      } else {
        queenMoveCount++
      }
    }
  
  // we check if we can move up / left diag from the queen's location by..
    // checking if queens row location is less than board size AND column location is greater than 1, if it is we sum 1 from row location and substract 1 from column location, we also increase queens move count by 1..
    // otherwise we reset the queens location, sum both counts and reset queens move count.
    while(true){
      rowQueenCopy++
      colQueenCopy--
      queenCords = [rowQueenCopy, colQueenCopy]

      if(obstaclesObj[queenCords] == `${queenCords}` || rowQueenCopy > n || colQueenCopy < 1){
        totalMoves += queenMoveCount
        queenMoveCount = 0
        rowQueenCopy = r_q
        colQueenCopy = c_q
        queenCords = [rowQueenCopy, colQueenCopy]
        break
      } else {
        queenMoveCount++
      }
    }
    
    return totalMoves
}
// queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]])
// queensAttack(4, 0, 4, 4, [])
queensAttack(8, 0, 4, 4, [[3,5]])