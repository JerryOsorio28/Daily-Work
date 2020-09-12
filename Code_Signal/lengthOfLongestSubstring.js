var lengthOfLongestSubstring = function(s) {
  // var that holds the substring value
  // obj that holds all characters in substring as keys
  // var that holds the longest subtring
  // we need a loop to iterate over the str
    //  if the length of the substring is greater than 1, we remove last character from the right side.
    // otherwise, we copy again the substring to be equal to the string, an we start removing from left side instead.
    // check if current character in iteration exists in obj...
      // if it does, we want to break, empty our obj and reset the iterator
      // else, we want to add that character to the obj
};
lengthOfLongestSubstring("abcabcbb")