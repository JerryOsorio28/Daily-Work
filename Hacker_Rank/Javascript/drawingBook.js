// Brie’s Drawing teacher asks her class to open their books to a page number. Brie can either start turning pages from the front of the book or from the back of the book. 
// She always turns pages one at a time. When she opens the book, page 1 is always on the right side.

// When she flips page 1, she sees pages 2 and 3. Each page except the last page will always be printed on both sides. 
// The last page may only be printed on the front, given the length of the book. If the book is 'n' pages long, and she wants to turn to page 'p',
//  what is the minimum number of pages she will turn? She can start at the beginning or the end of the book.
// print the minimum number of pages Brie must turn in order to arrive at page 'p'.

function pageCount(n, p) {
    // var that holds the subtraction of n minus p
    let result = n - p
    // var that holds an arr representing the book
    let book = []
    // var that represent the pages flipped
    let pagesFlipped = 0
  
    // if result is greater than p, we start from the from of the book, so we set the book arr to [0, 1]
    if(result >= p){
      book = [0, 1]
      // we can use a while loop that checks as long as the book arr does not have the page we are looking for..
      while(!book.includes(p)){
        // we flip the pages by increasing both indexes by 2
        book[0] += 2
        book[1] += 2
        // and we increase the pages flipped by 1
        pagesFlipped++
      }
    // else if the result is smaller, we start from the back, so we set the book to the following...
    } else if(result < p){
      // if the number of pages is even, we set the number to the left
      if(n % 2 === 0){
        book = [n, n + 1]
      // if uneven, we set it to the right
      } else {
        book = [n - 1, n]
      }
      // we can use a while loop that checks as long as the book arr does not have the page we are looking for..
      while(!book.includes(p)){
        // we flip the pages by decreasing both indexes by 2
        book[0] -= 2
        book[1] -= 2
        // and we increase the pages flipped by 1
        pagesFlipped++
      }
    }
    // once while loop is done, we return pagesFlipped
    return pagesFlipped
  }
  
  pageCount(6, 2) //should return 1