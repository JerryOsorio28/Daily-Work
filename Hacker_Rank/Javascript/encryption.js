// An English text needs to be encrypted using the following encryption scheme.
// First, the spaces are removed from the text. Let  be the length of this text.
// -----------
// -----------
// Example
// s = 'if man was meant to stay on the ground god would have given us roots'

// After removing spaces, the string is 54 characters long. √54 is between 7 and 8, so it is written in the form of a grid with 7 rows and 8 columns.
// -----------
// ifmanwas  
// meanttos          
// tayonthe  
// groundgo  
// dwouldha  
// vegivenu  
// sroots
// -----------
// If multiple grids satisfy the above conditions, choose the one with the minimum area.
// The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

// Complete the encryption function below.
function encryption(s) {
  // eliminate whitespace from our string
  s = s.split(' ').join('')
  // variable that holds the number of columns
  var columns = Math.ceil(Math.sqrt(s.length))
  // variable that holds the array of substrings with rows and columns
  let arr = rowsAndColumns(s, columns)
  // variable that holds the encoded string
  let encodedStr = ''
  // variables to iterate over our grid of sub strings  
  let iIndex = 0
  let jIndex = 0
  let subStr = ''
  
  while(jIndex <= columns - 1 && iIndex <= arr.length - 1){
    let char = arr[iIndex][jIndex]
    if(char == undefined){
      iIndex = 0
      jIndex++
      subStr = ' ' + subStr
      encodedStr += subStr
      subStr = ''
      continue
    }
    subStr += char
    iIndex++
    if(iIndex >= arr.length){
      iIndex = 0
      jIndex++
      if(encodedStr.length > 0){
        subStr = ' ' + subStr
      }
      encodedStr += subStr
      subStr = ''
    }
  }
  return encodedStr
}
// function that creates the rows and columns dynamically
function rowsAndColumns(subString, columns){
  let arr = []
  let subStr = ''

  for(let i = 0; i < subString.length; i++){
    if(subStr.length < columns){
      subStr += subString[i]
    } else {
      arr.push(subStr)
      subStr = ''
      subStr += subString[i]
    }
    if(i == subString.length - 1){
      arr.push(subStr)
    }
  }
  return arr
}