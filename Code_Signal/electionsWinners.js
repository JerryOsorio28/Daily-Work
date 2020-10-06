// Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, 
// find the number of candidates who still have a chance to win the election. The winner of the election must secure strictly more votes than any other candidate. 
// If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.
// -------------
// Example
// -------------
// For votes = [2, 3, 5, 2] and k = 3, the output should be 2.

// The first candidate got 2 votes. Even if all of the remaining 3 candidates vote for him, he will still have only 5 votes, i.e. the same number as the third candidate, 
// so there will be no winner.

// The second candidate can win if all the remaining candidates vote for him (3 + 3 = 6 > 5).

// The third candidate can win even if none of the remaining candidates vote for him. For example, if each of the remaining voters cast their votes for each of his opponents,
// he will still be the winner (the votes array will thus be [3, 4, 5, 3]).

// The last candidate can't win no matter what (for the same reason as the first candidate).
// Thus, only 2 candidates can win (the second and the third), which is the answer.

function electionsWinners(votes, k) {
    // first we can grab the element with the highest value in the arr
    let max = Math.max(...votes)
    // variable that keeps a track  of wether the max value is repeated
    let maxSeen = false
    // we remove from the arr the max value
    votes.splice(votes.indexOf(max), 1)
    // var that counts the potential candidates that can win, initialized to 1 since at least one can win if no tie.
    let potentialWinners = 1
    
    // loop to iterate over the arr..
    for(let candidate in votes){
        // we check if we see another max value in the arr
        if(k === 0 && votes[candidate] === max){
            maxSeen = true
        }
        // we check if there is another max value on the arr, because if it is, and there is not votes remaining, it's a tie so we return 0.
        if(maxSeen === true && k === 0){
            return 0
        }
        // we sum the current element with k and check if the sum is greater than the max value..
        if(votes[candidate] + k > max){
            // we found a candidate that can potentially win, so we increase the count by 1.
            potentialWinners++
        }
    }
    return potentialWinners
}