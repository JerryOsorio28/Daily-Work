// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.
// ------------------
// EXAMPLE
// ------------------
// For inputString = "foo(bar)baz", the output should be "foorabbaz"
// For inputString = "foo(bar(baz))blim", the output should be "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".


function reverseInParentheses(inputString) {
  // we iterate over the input string with a loop
  // we check if the current element is an opening parentheses '(', if it is, we want to store in a variable the values that wraps the parentheses.
  // if there is another nested parentheses, we want to reverse the innermost parentheses first, so we store the values that wraps the inner parentheses instead.
  // once in a variable, we can reverse the value and replace the original value with the reversed value.
  inputString = inputString.split('')
  let word = ''
  // we need a while loop that checks if there is any existing parentheses in the input, and breaks if there's not
  while(inputString.includes('(')){
    for(let i = 0; i < inputString.length; i++){
      if(inputString[i] === '('){
        // we initialized the range var to 2 since we are counting the word we are cocatinating plus the 2 parentheses. 
        let range = 2
        for(let j = i + 1; inputString[j] !== ')'; j++){
          word += inputString[j]
          range++
          // when we found a '(' as we iterate to concatenate the word we find ANOTHER '(', we start all over again because we want to take care of the innermost word first. 
          if(inputString[j] === '('){
            i = j
            word = ''
            range = 2
          }
        }
        // once we have the innermost word, we reverse it, remove the original word and replace it with the reversed one.
        word = word.split('').reverse().join('')
        inputString.splice(i, range)
        inputString.splice(i, 0, ...word)
        word = ''
        range = 2
        break
      }
    }
  }
  return inputString.join('')
}