// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. 
// The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

function chessKnight(cell) {
    let objLetters = {'a': 1, 'b': 2,'c': 3,'d': 4,'e': 5,'f': 6,'g': 7,'h': 8}
    let objNums = {'1': 1, '2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8}
    let moves = {
    '1': {
        'i': -2,
        'j': 1
    },
    '2': {
        'i': -1,
        'j': 2
    },
    '3': {
        'i': -1,
        'j': -2
    },
    '4': {
        'i': -2,
        'j': -1
    },
    '5': {
        'i': 1,
        'j': -2
    },
    '6': {
        'i': 2,
        'j': -1
    },
    '7': {
        'i': 1,
        'j': 2
    },
    '8': {
        'i': 2,
        'j': 1
    },
    }

    let reg = /^[1-8]$/
    let validMoves = 0
    
    for(let i = 1; i <= 8; i++){
        let lettersSum = objLetters[cell[0]] + moves[i].i
        let numSum = objNums[cell[1]] + moves[i].j
        if(reg.test(lettersSum) === true && reg.test(numSum) === true){
            validMoves++
        }
    }
    return validMoves
    
}

