

//Every student receives a grade in the inclusive range from 0 to 100.
//Any grade less than 40 is a failing grade.

//Sam is a professor at the university and likes to round each student's grade according to these rules:
//If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
//If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
//For example, grade = 84 will be rounded to 85 but grade = 29 will not be rounded because the rounding would result in a number that is less than 40.


function gradingStudents(grades) {
    let counter = 0;
    //we iterate over grades array to access values and we do the following...
    for(let i = 0; i < grades.length; i++){
      //while counter is less than grades[i], increase counter by 5
      while(counter < grades[i]){
        counter += 5
      } 
      //if counter is greater than grades[i], set a variable that holds the substraction of counter and grades[i]
      if(counter > grades[i]) {
        let result = counter - grades[i]
        //a condition that checks if the result is less than 3...
        if(result < 3){
          //we check if counter is less than 40, if it is, we set grades[i] = counter and reset counter to 0.
          if(counter >= 40){
            grades[i] = counter
            counter = 0
          } else {
            counter = 0
          }
        //else if it is not less than 3, we just reset the counter to 0.
        } else {
          counter = 0
        }
      } else {
        counter = 0
      }
    }
    return grades
}

gradingStudents([7,27,23,65,43,0,82,0])