//The idea behind this one is to print a simple staircase...
//If n would be 5, it hould look something like this..
//                                  #
//                                 ##
//                                ###
//                               ####
//                              #####

// Complete the staircase function below.
function staircase(n) {
    //variable that holds the symbols string
    let symbol = '#'
    //counter equivalent to n
    let counter = n
    //variable that holds that spaces string
    let spaces = Array(n).join(' ') + '#'
    //variable that checks if there's spaces in symbol string
    let checker = spaces.includes(' ')
    //while loop that works as long as there's spaces inside string
    while(checker && counter > 0){
      //makes a new array with counter amount of spaces + symbol
      spaces = Array(counter).join(' ') + symbol
      //adds a symbol to the string
      symbol = symbol + '#'
      //decreases the counter
      counter -= 1
      //prints the stairs
      console.log(spaces)
    }
  }