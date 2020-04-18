function makeAnagrams(a, b) {
    // we split both strings to be able to remove letters by index
    a = a.split('')
    b = b.split('')
    // counter that keeps a track on wether we have found an anagram letter or not
    let counter = 0
    // variable that will only update when counter has been updated
    let prev = 0
    // for loops to iterate over both strings
    for(let i = 0; i <= a.length; i++){
        for(let j = 0; j <= b.length; j++){
            // if we find a matching value..
            if(a[i] === b[j]){
                // we remove it by index on both string
                a.splice(i, 1)
                b.splice(j, 1)
                // and increase a counter since we found a pair
                counter++
                break
            }
            // we check if in the current iteration we found a matching pair, if we did..
            if(counter > prev){
                // we update prev with counter
                prev = counter
                // and reset i to start the loop from the beggining
                i = 0
            }
        }
    }
    // and the end, since we removed the matching ones, we return the sum of remaining length of a and b
    return a.length + b.length
}
