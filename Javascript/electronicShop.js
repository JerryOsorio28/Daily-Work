// Monica wants to buy a keyboard and a USB drive from her favorite electronics store.
// Suppose she has 'b = 60' to spend. Three types of keyboards cost keyboards = [40, 50, 60]. Two USB drives cost drives = [5,8,12]. 
// She could purchase a $40 keyboard + $12 USB drive = $52, or a $50 keyboard + $8 USB drive = $58. 
// She chooses the latter. She can't buy more than  items so she can't spend exactly $60.
// return her money she can spend buying 2 items (one from each), maximizing her budget, or return -1 if she does not have enough budget to buy 2 items

function getMoneySpent(keyboards, drives, b) {
    // var that holds all the potential prices
    let allPrices = []
    // double for loop to push the sum of all potential prices to arr
    for(let i = 0; i < keyboards.length; i++){
      for(let j = 0; j < drives.length; j++){
        let totalPrice = keyboards[i] + drives[j]
      // before we push, we want to only push the only prices that are below budget
        if(totalPrice <= b){
          allPrices.push(totalPrice)
        }
      }
    }
    // a condition that checks if the arr is not empty...
    // if it is not, we can return the max value from the arr
    if(allPrices.length === 0){
      return -1
    // otherwise we return -1 since, it is out of budget
    } else {
      return Math.max(...allPrices)
    }
  }

  getMoneySpent([3, 1], [5, 2, 8], 10)