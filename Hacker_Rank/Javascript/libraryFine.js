// Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). 
// The fee structure is as follows:

// If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine=0).
// If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine=15 hackos x (the number of days late).
// If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine=500 hackos x (the number of months late).
// If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10,000.
// Charges are based only on the least precise measure of lateness. For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018,
//  that is a year late and the fine would be 10,000.

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // I would start off comparing the years...
    // if the year it was returned is greater than the due date year, return 10,000.
    if(y1 > y2){
        return 10000
    // else if the year is equal to the due date year...
    } else if(y1 === y2){
        // we check if the month is greater than the due date month..
        if(m1 > m2){
            // we check if the day it was returned is greater or equal than the due date day, and also if the year it was returned is greater than the due date year.
            if(d1 >= d2 && y1 > y2){
                // if it is, we return 10,000..
                return 10000
            // otherwise, it has not been more than a year so... 
            } else {
                // we subtract the returned month minus the due date month..
                let result = Math.abs(m1 - m2)
                // and we return the multiplication of the result times 500.
                return 500 * result
            }
        // else if the month is returned is less than the due date month, we return 0.
        } else if(m1 < m2){
            return 0
        }
        // if the day is greater than the due date day...
        if(d1 > d2){
            // we subtract the returned day minus the due date day..
            let result = Math.abs(d1 - d2)
            // and return the result times 15.
            return 15 * result
        }
    }
    // if none of this returns anything, there might be an edge case that it was not returned late, so we still need to return 0.
    return 0
}