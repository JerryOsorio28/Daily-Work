function appendAndDelete(s, t, k) {
  // check if both 's' and 't' have the same length, if they do, we check if the length is less then or equal to 'k' divided by 2, if they are, we can safely assume that we can empty the string 's' and add all the characters of 't' to 's', and return 'true'.
  if(s.length === t.length && s.length <= k / 2){
    return 'Yes'
  }

  // if the above steps does not apply, we need to split into individual chars both strings, then with a loop, compare each current char on both strings, if they are not the same, remove the remaining chars on 's', while keeping a track of how many chars were removed. We can also remove from 't', the characters that are the same.
  s = s.split('')
  t = t.split('')
  let newS = ''
 
  for(let i = 0; i < s.length; i++){
    if(s[i] === t[i]){
      newS += s[i]
    } else {
      break
    }
  }
  k = k - (s.length - newS.length)

  // At this point, we add the remaining characters of 't' to 's', as long as the length of 't' is less then or equal to 'k'.
  for(let i = newS.length; i < t.length; i++){
    newS += t[i]
    k -= 1
  }
  
  
  
  if(k < 0){
    return 'No'
  } else {
    return 'Yes'
  }

}
// appendAndDelete('ashley', 'ash', 2) //Yes
// appendAndDelete('hackerhappy', 'hackerrank', 9) //Yes
// appendAndDelete('aba', 'aba', 7) //Yes
appendAndDelete('y', 'yu', 2) //No
// appendAndDelete('zzzzz','zzzzzzz', 4) // Yes