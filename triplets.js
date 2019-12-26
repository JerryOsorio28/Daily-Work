function compareTriplets(a, b) {
    //track scores with a counter for each team
    let team1 = 0
    let team2 = 0
    //we need to iterate over both arrays to compare indexes values
    for(let i = 0; i < a.length; i++){
      //check which team has the biggest score
      if(a[i] < b[i]){
        //increase count
        team2 += 1
      } else if(a[i] > b[i]) {
        //increase count
        team1 += 1
      }
    }
    //return both teams scores     
    return [team1, team2]
}

compareTriplets([5,6,7], [3,6,10])