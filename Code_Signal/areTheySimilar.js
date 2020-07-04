// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.

function areSimilar(a, b) {
    let aCopy = [...a]
    let bCopy = [...b]
    
    const checkArrays = (a, b) => {
        for(let i = 0; i < a.length; i++){
            if(a[i] !== b[i]){
                return
            }
        }
        return true
    }
    if(checkArrays(aCopy, bCopy) === true){
        return true
    }
    
    for(let i = 0; i < aCopy.length; i++){
        for(let j =  i + 1; j < aCopy.length; j++){
            let temp = aCopy[j]
            aCopy[j] = aCopy[i]
            aCopy[i] = temp
            
            if(checkArrays(aCopy, bCopy) === true){
                return true
            } else {
                aCopy = [...a]
            }
        }
    }
    return false
}