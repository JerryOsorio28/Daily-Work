// You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, 
// you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. 
// After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.
// Assuming that your hunch is correct, decode the message.
// ---------
// Example
// ---------
// For code = "010010000110010101101100011011000110111100100001", the output should be "Hello!".
// The first 8 characters of the code are 01001000, which is 72 in the binary numeral system. 72 stands for H in the ASCII-table, so the first letter is H.
// Other letters can be obtained in the same manner.

function messageFromBinaryCode(code) {
  // we can split the string in the params every 8 characters to have an array to work with.
  let binaryArr = code.match(/.{8}/g)
  // we can have a variable that holds the string being decipher from the binary code
  let message = ''
  // we would then iterate over the arr and use our helper to convert the binary code to decimal numbers, then refer to the ascii code to determine what character represents, and lastly we want to concatenate the ascii character found to the string.
  for(let binary in binaryArr){
    let character = String.fromCharCode(binaryToDecimal(binaryArr[binary]))
    message += character
  }

  return message
}

function binaryToDecimal(binaryCode){
// variable that represents the decimal value
let decimalNum = 0
// to convert binary to decimal, first we would hold the values that represent each position in our binary number inside of an object
let binaryValues = {
  '0': 128,
  '1': 64,
  '2': 32,
  '3': 16,
  '4': 8,
  '5': 4,
  '6': 2,
  '7': 1
}
// then we iterate over the binary code and check if the current element is a 1, if it is, we check the value in the object, and we sum it up.
for(let i = 0; i < binaryCode.length; i++){
  if(binaryCode[i] == 1){
    decimalNum += binaryValues[i] 
  }
}

return decimalNum
}
