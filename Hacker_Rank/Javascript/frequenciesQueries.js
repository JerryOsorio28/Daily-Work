function frequencyQueries(queries) {
    // obj to keep a track of repeated nums
    let obj = {}
    // one array for the numbers collection
    let collection = []
    // another array that will keep a track of the outputs
    let output = []
    // loop over the queries
    for(let i = 0; i < queries.length; i++){
        // condition that checks if queries[i][0] equals 1..
        if(queries[i][0] == 1){
            // add queries[i][1] to the collection
            collection.push(queries[i][1])
        }
        // else if queries[i][0] equals 2...
        else if(queries[i][0] == 2){
            // loop to check if collection includes queries[i][1]..
            for(let j = 0; j < collection.length; j++){
                // if it includes it, delete it
                if(collection[j] == queries[i][1]){
                  collection.splice(j, 1)
                  break
                }
            }
        }
        // else if queries[i][0] equals 3...
        else if(queries[i][0] == 3){
            // for loop to create obj from collection..
            for(let j = 0; j < collection.length; j++){
              // if collection[j] is in the obj...
              if(obj[collection[j]]){
                // we increase the counter by 1
                obj[collection[j]] += 1
              // otherwise we add the element to the obj
              } else{
                obj[collection[j]] = 1
              }
            }
            // at this point we can grab the values of the obj on a var
            let objValues = Object.values(obj)
            let count = 0
            // for loop to iterate over the obj values..
            for(let j = 0; j < objValues.length; j++){
              // check if objValues[j] equals queries[i][1]...
              if(objValues[j] == queries[i][1]){
                  // if it is, we add 1 to the output arr
                  output.push(1)
                  // we increase count by 1 since we found a match
                  count++
                  // we reset obj to an empty {}
                  obj = {}
                  break
              }
            }
            // if count is 0, it means there wasn't a match
            if(count === 0){
                // so we add 0
                output.push(0)
                // we reset obj to an empty {}
                obj = {}
            }
            // and reset count to 0
            count = 0
        }
    }
    // return output arr
    return output
  }
  frequencyQueries([[1,1],[3,3],[2,2],[3,-1],[1,1],[1,1],[2,1],[1,2],[3,2]])
  