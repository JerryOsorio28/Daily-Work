// HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly 5 people on social media.

// On the first day, half of those  people `floor(5 / 2) = 2` like the advertisement and each shares it with 3 of their friends. 
// At the beginning of the second day, `floor(5 / 2) = 2 * 3 = 6` people receive the advertisement.

// Each day, (floor(recipients / 2)) of the recipients like the advertisement and will share it with 3 friends on the following day. 
// Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.

// -- Example --

// Day Shared Liked Cumulative
// 1      5     2       2
// 2      6     3       5
// 3      9     4       9
// 4     12     6      15
// 5     18     9      24
// --------------------------------
// The cumulative number of likes is 24.

function viralAdvertising(n) {
    // We need to keep a track of a couple of things...
    // ads shared in the current day, starting at 5.
    let sharedAds = 5
    // the amount of people that liked the ad by the end of 'n' day.
    let totalLikes = 0
    // we need a for loop to iterate up until 'n'
    for(let i= 1; i <= n; i++){
      // this keeps a track of the amount of people that liked the ad in the current day, to do so, we divide by 2 the shared ad in the current day.
      let audienceReached = Math.floor(sharedAds / 2)
      // to keep a track of how many people will be sharing the ad the next day, we multiply the total amount of people that liked the ad times 3, since each person will share it to 3 people each.
      totalLikes += audienceReached
      sharedAds = audienceReached * 3
    }
    return totalLikes
}