
// Aerith is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. 
// Her character must jump from cloud to cloud until it reaches the start again.

// To play, Aerith is given an array of clouds, `c` and an energy level `e = 100`. She starts from c[0] and uses 1 unit of energy to make a jump of size `k` to cloud c[(i + k % n)]. 
// If Aerith lands on a thundercloud, c[i] = 1, her energy `e` decreases by 2 additional units. The game ends when Aerith lands back on cloud 0.
// Given the values of `n`, `k`, and the configuration of the clouds as an array `c`, can you determine the final value of `e` after the game ends?

// For example, give `c=[0,0,1,0]` and `k = 2`, the indices of her path are `0 -> 2 -> 0`. Her energy level reduces by 1 for each jump to 98. She landed on one thunderhead at an additional cost of 2 energy units. 
// Her final energy level is 96.

function jumpingOnClouds(c, k) {
  // we need to iterate over the sequence of clouds and, everytime she jumps, we need to subtract 1 energy of her energy count, which is 100, and then determine if where she stepped was a thundercloud, if it was, if also subtract an aditional 2 energy.
  let energy = 100
  let index = 0
  // this 'indicator' var will let us know in the code if we have already iterated the arr
  let indicator = false

  while(true){
    // we first check if the jump can even be made, make sure our current index is not out of bounds, if it is, we subtract the 'step' we need to take, minus the length of the
    // array, that will give us the index where we need to be, so we set our current index to be the substraction of step minus the length of the array.
    let step = index + k
    if(step > c.length - 1){
      step -= c.length 
      index = step
      // since we stepped out of bounds in the array, we set the indicator to true.
      indicator = true
    }
    // we check if the indicator is NOT true, to move 'k' amount times.
    if(indicator !== true){
      index += k  
    }
    // we set the indicator again back to false, in case we have iterated entirely the array already.
    indicator = false
    // regardless of the jump, 1 energy is always consumed.
    energy--
    // here we check if when the jump was made, if it landed on a thundercloud or not, if it did, another 2 energy is consumed.
    if(c[index] === 1){
        energy -= 2
    }
    // this is our basecase to break the while, which is a condition that checks if the current position is at index 0, if it is we break.
    if(index === 0){
      break  
    }
  }
  return energy
}