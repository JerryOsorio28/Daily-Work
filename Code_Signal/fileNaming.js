// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, 
// the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.
// Return an array of names that will be given to the files.
// ---------
// Example
// ---------
// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

function fileNaming(names) {
    // we can have a variable that keeps a track of the elements that has already been seen as we iterate
    let seen = {}
    // we need a loop to iterate over the array
    for(let i = 0; i < names.length; i++){
        // as we iterate we check if the current element exists in the obj of seen
        if(seen[names[i]]){
            // if it exists, we add a number next to it and check if with the number exists..
            let subStr = names[i]
            let number = 1
            // we continue adding a number up until the number added next to it doesnt exists in the seen obj, and we add it to the obj.
            while(true){
                let additionStr = `(${number})`
                subStr += additionStr
                if(seen[subStr]){
                    number++
                    subStr = names[i]
                } else {
                    seen[subStr] = subStr
                    break
                }
            }
        } else {
            seen[names[i]] = names[i]
        }
    }
    return Object.keys(seen)
}
