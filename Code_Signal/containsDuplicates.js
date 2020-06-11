// Given an array of integers, write a function that determines whether the array contains any duplicates. 
// Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

function containsDuplicates(a) {
    a = a.sort()
    
    for(let i = 0; i < a.length - 1; i++){
        if(a[i] === a[i+1]){
            return true
        }
    }
    return false
}