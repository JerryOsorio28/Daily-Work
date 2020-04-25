function countSignals(frequencies, filterRanges) {
    //array to keep a track of frequencies that passed all filters
    let freqs = []
    // a counter to check if frequency passed all filters
    let count = 0
    // double for loop to compare values on arrays
    for(let i = 0; i < frequencies.length; i++){
      for(let j = 0; j < filterRanges.length; j++){
        if(frequencies[i] >= filterRanges[j][0] && frequencies[i] <= filterRanges[j][1]){
          count++
        }
        // console.log(filterRanges.length)
        if(count === filterRanges.length){
          freqs.push(frequencies[i])
        }
      }
      count = 0
    }
    return freqs
}
countSignals([8,15,14,16,21],[[10,17],[13,15],[13,17]])