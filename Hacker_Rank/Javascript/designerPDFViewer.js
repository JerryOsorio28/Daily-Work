// In this challenge, you will be given a list of letter heights in the alphabet and a string. 
// Using the letter heights given, determine the area of the rectangle highlight in 'mm^2' assuming all letters are '1mm' wide.

// For example, the highlighted word = 'torn'. Assume the heights of the letters are t = 2, 0 = 1, r = 1 and n = 1. 
// The tallest letter is 2 high and there are 4 letters. The hightlighted area will be 2 * 4 = '8mm^2' so the answer is .

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    // our alphabet
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // an object that hold the key/value pairs for our alphabet
    let object = {}
    // loop to create our key/value pairs object
    for(let i = 0; i <= h.length; i++){
      // we assign each letter to each number in the object
      object[alphabet[i]] = h[i]
    }
    
    // arr that holds the heights of the letters
    let heights = []
    // for loop that will iterate over the string
    for(let i = 0; i <= word.length; i++){
      // we will push their heights to the heights arr
      if(object[word[i]]){
        heights.push(object[word[i]])
      }
    }
    // grab the tallest letter
    let tallest = Math.max(...heights)
    // return tallest letter * 1 * length of the string
    return tallest * 1 * word.length  
  }
  designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba') //should return 28
//   designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc') //should return 9