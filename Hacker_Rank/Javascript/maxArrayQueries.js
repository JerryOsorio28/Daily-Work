function maxArrayQueries(n, queries) {
  let initArr = []
  // tracks the current max number
  let max = 0
  // we create our initial arr with 0
  for(let i = 0; i < n; i++){
    initArr.push(0)
  }

  // we iterate over the queries with 2 loops, first iterating over subarrays
  for(let i = 0; i < queries.length; i++){
    // second initializing j as what the values 
    for(let j = queries[i][0] - 1; j <= queries[i][1] - 1; j++){
      // with splice, we refer to what's on index j in the initArr, and instead of replacing it, we sum it together with what's on the current sub array as k
      let sum = initArr[j] + queries[i][2]
      initArr.splice(j, 1, sum)
      // to save some runtime, instead of returning Math.max() on the initArr, as we iterate we keep a track of the max value as we update it.
      if(max < sum){
        max = sum
      }
    }
  }
  // we return the max value
  return max
}
