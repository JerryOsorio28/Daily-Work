// Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. 
// Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. 
// You must determine if his calculation is correct.

// For example, assume the bill has the following prices: bill=[2,4,6]. Anna declines to eat item  k=bill[2], which costs 6. 
// If Brian calculates the bill correctly, Anna will pay (2 + 4) / 2 = 3. If he includes the cost of bill[2], he will calculate (2+ 4+ 6) / 2 = 6.
//  In the second case, he should refund 3 to Anna. If the amount it's correct, print 'Bon Appetit'.

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    // remove the item by index she refuses to pay
    bill.splice(k, 1)
    // reduce the array to a single number and divide that by 2
    let newBill = bill.reduce((a, b) => a + b) / 2
    // compare the result with what brian charged her...
    if(newBill === b){
      // if it is the same, we print 'Bon Appetit'
      console.log('Bon Appetit')
      //else, we want to return the price difference or overcharge
    } else {
      console.log(b - newBill)
    }
  }