//In this challenge, we had an input that represented a string of the normal time in this format hh:mm:ss,
//we needed to converted from normal hours to military hours, example / 03:56:03PM should return 15:56:03
function timeConversion(s) {
    //variable that holds the hours
    let hours = s[0] + s[1]
    //variable that holds minutes && seconds.
    let minutesAndSeconds = s[2]+s[3]+s[4]+s[5]+s[6]+s[7]
    //variable that holds wether is before or after noon.
    let time = s[8]+s[9]
    //checks if it's am or pm
    if(time === 'AM'){
      if(hours == 12){
        return '00' + minutesAndSeconds
      } else {
        return hours + minutesAndSeconds
      }
    } else {
      if(hours == 12){
        return hours + minutesAndSeconds
      }
      //re-sets hours to be equal to hours + 12, we convert it from string, to number, to string.
      hours = [parseFloat(hours) + 12].toString(hours)
      if(hours == 24){
        return '00' + minutesAndSeconds
      } else {
        return hours + minutesAndSeconds
      }
    }
  }