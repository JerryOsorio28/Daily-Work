function pickingNumbers(a) {
    //have an array that holds absolute values less or equal than 1.
    let absoluteArr = []
    // array holding sub arrays
    let subArr = []
    
    let counter = 0
    // for loop i...
    for(let i = 0; i < a.length; i++){
      // for loop j...
      for(let j = i + 1; j < a.length; j++){
        // we check if sub array is greater than 0, if it is we push sub array to array
        if(subArr.length > 0){
          absoluteArr.push(subArr)
        }
        subArr = []
        //we check if a[i] < a[j], if it is...
        if(a[i] < a[j]){
          // we check if a[j] - a[i] is less or equal than 1 && a[j] !== a[i]...
          if(a[j] - a[i] <= 1){
            // third loop that will scan the original arr and push to sub arr all values equal to a[j] and a[i]
            for(let y = counter; y < absoluteArr.length; y++){
              if(!absoluteArr[y].includes(a[i])){
                for(let z = 0; z < a.length; z++){
                  if(a[z] === a[j] || a[z] === a[i]){
                    subArr.push(a[z])
                  }
                }
                counter++
                continue
              }
            }
            if(absoluteArr.length === 0){
              for(let z = 0; z < a.length; z++){
                if(a[z] === a[j] || a[z] === a[i]){
                  subArr.push(a[z])
                }
              }            
            }
          }
        // otherwise we check if a[i] - a[j] is less or equal than 1 && a[i] !== a[j]...
        } else if (a[i] > a[j]) {
          if(a[i] - a[j] <= 1){
            // third loop that will scan the original arr and push to sub arr all values equal to a[j] and a[i]
            for(let y = counter; y < absoluteArr.length; y++){
              if(!absoluteArr[y].includes(a[i])){
                for(let z = 0; z < a.length; z++){
                  if(a[z] === a[j] || a[z] === a[i]){
                    subArr.push(a[z])
                  }
                }
                counter++
                continue
              }
            }
            if(absoluteArr.length === 0){
              for(let z = 0; z < a.length; z++){
                if(a[z] === a[j] || a[z] === a[i]){
                  subArr.push(a[z])
                }
              }            
            }
          }
        }
      }
    }
    console.log('absolute arr', absoluteArr)
    // variable with the longest arr
    let longestArr = []
    // iterate over sub arrays and check if sub arr length is greater than longest arr..
    for(let i = 0; i < absoluteArr.length; i++){
      // if it is, we update the longest arr
      if(absoluteArr[i].length > longestArr.length){
        longestArr = absoluteArr[i]
      }
    }
    console.log('longest arr', longestArr)
    // then we return the longest arr length
    return longestArr.length
  }
  
  pickingNumbers([1,1,2,2,4,4,5,5,5]) //5 - [4,4,5,5,5]
  // pickingNumbers([4, 6, 5, 3, 3, 1]) //3 - [4,3,3]