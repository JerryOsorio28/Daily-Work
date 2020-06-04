// For inputString = "aabaa", the output should becheckPalindrome(inputString) = true;
// For inputString = "abac", the output should be checkPalindrome(inputString) = false;
// For inputString = "a", the output should be checkPalindrome(inputString) = true.

function checkPalindrome(inputString) {
  // we reverse the string and we check if it reads the same, if it does, it's a palindrome! So we return 'true'.
  let reversedStr = inputString.split('').reverse().join('')
  
  if(reversedStr === inputString){
      return true
  } else {
      return false
  }
}