// we need a condition that checks if first element is not a tree (-1), if it is not, we want to then compare it with the other numbers that are NOT -1 to sort it.
// ----------------
// EXAMPLE
// ----------------
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  // we need 2 loops to compare each value in the array as we iterate
  for(let i = 0; i < a.length - 1; i++){
    for(let j = i + 1; j < a.length; j++){
      if(a[i] !== -1){
        if(a[i] > a[j] && a[j] !== -1){
          let temp = a[j]
          a[j] = a[i]
          a[i] = temp
        }
      } else {
        continue
      }
    }
  }
  return a
}