// Maria plays college basketball and wants to go pro. 
// Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. 
// Points scored in the first game establish her record for the season, and she begins counting from there.

// For example, assume her scores for the season are represented in the array scores=[12,24,10,24].
// The function for the above example should return an array showing her [best record, worst record], in this case is [1, 0] since she only broke her
// best record once.
// Another example is scores=[10, 5, 20, 20, 4, 5, 2, 25, 1], for this one, the function should return [2,4] since she broke her best record twice, and got 
// a worst record than the previous one 4 times.

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    // we need a counter to track her worst record
    let worstRecordCount = 0
    // we need a counter to track her best record
    let bestRecordCount = 0
    // variable that track her worst record
    let worstRecord = scores[0]
    // variable that track her best record
    let bestRecord = scores[0]
    // we need to iterate over the scores..
    for(let score in scores){
      // a condition that checks if her current score is greater than her best record
      if(scores[score] > bestRecord){
        // increase best record by 1
        bestRecordCount++
        // reseting best record to greater best record
        bestRecord = scores[score]
      // a condition that checks if her current score is less than her worst record
      } else if (scores[score] < worstRecord){
      // increase her worst record by 1
        worstRecordCount++
        // reseting worst record to an even worst record
        worstRecord = scores[score]
      }
    }
    // return her best and worst record in array
    return [bestRecordCount, worstRecordCount]
  
  }
  
  breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]) //this should return [2,4]
                                                  // 2 amount of times she broke her max record
                                                  // 4 amount of times she broke her worst record (by making it worst)