//Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. 
//During his last hike he took exactly 'n' steps. For every step he took, he noted if it was an uphill,'U', or a downhill, 'D' step. 
//Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude.

//For example, if Gary's path is, 8 = [DDUUUUDD] he first enters a valley 2 units deep. 
//Then he climbs out an up onto a mountain 2 units high. Finally, he returns to sea level and ends his hike, so he entered to 1 valley only.

//Create a function that would count how many valleys Gary got into!
function countingValleys(n, s) {
    //make a variable to track uphill steps
    let uphillSteps = []
    //make a variable to track downhill steps
    let downhillSteps = []
    //make a counter that tracks valleys walked
    let valleys = 0 
    // variable that checks when we are in a valley
    let valleyChecker = false
    //we iterate over the steps
    for(let i = 0; i <= n; i++){
      //we check if the value equals U or D, and push to arrays respectively
      if(s[i] === 'U'){
        uphillSteps.push(s[i])
      }
      else if(s[i] === 'D'){
        downhillSteps.push(s[i])
      }
      // we check if the length of downhill is greater than uphill, if it is, 
      if(uphillSteps.length < downhillSteps.length){
        //we check first if we are already in a valley
        if(valleyChecker !== true){
        //if we are not, increase the counter of valleys by 1
          valleys++
        }
        // else indicate that we have entered a valley
        valleyChecker = true
      }
      // check if both lengths are the same, if it is, we are at sea lvl
      if(uphillSteps.length === downhillSteps.length){
        // it means we have gotten out of the valley
        valleyChecker = false
      }
    }
    // if the length of uphill is the same as downhill, we return valleys counter
    return valleys
  }