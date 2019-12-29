//A function that sums all the values in a array 
function aVeryBigSum(ar) {
    //the reduce method sums the values inside of an array
    return ar.reduce((acc, curr) => acc + curr)
}