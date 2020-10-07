// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. 
// The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

function chessKnight(cell) {
  // we need a var that keeps a track of the valid moves
  let validMoves = 0
  // we need an arr that holds all the letters
  let arrLetters = ['a', 'b','c','d','e','f','g','h']
  // we need an arr that holds all the numbers
  let arrNums = [1,2,3,4,5,6,7,8]
  // let moves = 
  let param = 'd5'
  
  function helper (){
    let validMove = true
    for(let i = 0; i < arrLetters.length; i++){
      if(arrLetters[i] === param[0]){
        arrLetters[i+2] === undefined ? validMove = false : null 
      }
      if(arrNums[i] === param[1]){
        arrLetters[i+1] === undefined ? validMove = false : null
      }
    }
    return validMove
  }
  
  helper() === true ? validMoves++ : null
  console.log(validMoves)
}

