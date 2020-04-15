// x's equals the position of the kangaroos
// v's equals the distance the kangaroos can jump
// The function should check if at a certain point the kangaroos are going to be at the same spot at the same time at a certain point, if they do, return yes, otherwise return no. 

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    //while loop to run that will keep a track of wether the fastest kangaroo is in the front, if it is, it will break.
    while (true) {
      // if condition is met
      if(x1 < x2 && v1 <= v2 || x1 > x2 && v1 >= v2){
        // break the loop
          break
      }
      // another condition that check's if v1 == v2, if it is
      if(x1 == x2){
        console.log(`They met at position ${x1}`)
        // returns yes
        return 'YES'
      // else...
      } else {
        // we move the kangaroo by summing it's current position + the distance of the jump 
        x1 += v1
        x2 += v2
      }
    }
    // return no
    return 'NO'
  }
  
  kangaroo(0,3,4,2) //Should return 'YES'