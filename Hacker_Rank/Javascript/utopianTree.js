function utopianTree(n) {
  // this variable represents the current height of the tree 
  let height = 1
  // this loop will go over the cycles that passed, starting at 1 since 0 does not affect the height of the tree 
  for(let i = 1; i <= n; i++){
      // we can safely assume that during cycles, starting i at 1 if 'i' is an uneven number, it's spring, so we can multiply the height times 2, if 'i' is an even number, it means it's summer, so we increase the height by 1.
      if(i % 2 === 0){
          height += 1
      } 
      else if(i % 2 !== 0){
          height *= 2
      }
  }
  return height
}