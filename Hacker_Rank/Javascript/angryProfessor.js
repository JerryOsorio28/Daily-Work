// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, he decides to cancel class if fewer than some number of students are present when class starts.

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.

// Function has 2 parameters, 'k' will be an interger that represent the threshold of amount of students that wil be required for the class not to be cancelled, and 'a' which will be an array of integers representing the time of arrival for each student, if the intergers are less or equal than 0, it means they arrived earlier or on time to class, integers greater than 0 represent the students who arrived late.

// Example..
// k = 3
// a = [-1,3,-2,4,2]

// In the example above, 2 students arrived early or on time, threshold amount of students required is 3, so class is cancelled. If k = 2, than the threshold was met, so class continues. 

function angryProfessor(k, a) {
    let onTimeStudents = 0
    // we need to iterate over the arrival time (a) array and check if each value is less or equal to, or greater than 0, to determine if students arrived in time or not.
    // we need to setup a counter that will keep a track of the students who arrived early or on time.
    for(let student in a){
        if(a[student] <= 0){
            onTimeStudents++
        }
    }
    // then we need to compare the amount of students that arrived early or on time to class with the threshold required amount of students to determine if the class is cancelled or not.
    if(onTimeStudents >= k){
        return 'NO'
    } else {
        return 'YES'
    }
}