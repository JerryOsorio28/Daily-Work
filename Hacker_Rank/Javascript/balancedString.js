function balancedBrackets(string) {

    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let bool = false
  
    for(let letter in letters){
      if(string.includes(letters[letter])){
        bool = true
        break
      }
    }
    
    let newStr = ''
  
    if(bool === true){
      for(let i = 0; i < string.length; i++){
        if(string[i] === '{' || string[i] === '}'){
          newStr += string[i]
        }
        else if( string[i] === '[' || string[i] === ']'){
          newStr += string[i]
        }
        else if(string[i] === '(' || string[i] === ')'){
          newStr += string[i]
        }
        else if(string[i] === '|' && string[i + 1] === '|'){
          newStr += string[i]
          newStr += '|'
          i++
        } 
      }
    } else {
      newStr = string
    }
  
    let obj = {'squareBrackets': ['closed', 0], 'curlyBrackets': ['closed', 0], 'parenthesis': ['closed', 0], 'pipes': ['closed', 0]}
  
    let counter = 1
  
    for(let i = 0; i < newStr.length; i++){
      if(newStr[i] === '{'){
        if(obj['curlyBrackets'][0] === 'closed'){
          obj['curlyBrackets'][0] = 'open'
          obj['curlyBrackets'][1] = counter
          counter++
        } else {
          obj['curlyBrackets'][0] = '2 open'
        }
      }
      else if( newStr[i] === '}'){
        if(obj['squareBrackets'][1] > obj['curlyBrackets'][1] || obj['parenthesis'][1] > obj['curlyBrackets'][1] || obj['pipes'][1] > obj['curlyBrackets'][1] && obj['curlyBrackets'][1] === 0){
          return false
        } else if(obj['curlyBrackets'][0] === '2 open'){
          obj['curlyBrackets'][0] = 'open'
        } else if(obj['curlyBrackets'][0] === 'open')
          obj['curlyBrackets'][0] = 'closed'
          obj['curlyBrackets'][1] = 0
      }
      else if(newStr[i] === '('){
        obj['parenthesis'][0] = 'open'
        obj['parenthesis'][1] = counter
        counter++
      }
      else if(newStr[i] === ')'){
        if(obj['squareBrackets'][1] > obj['parenthesis'][1] || obj['curlyBrackets'][1] > obj['parenthesis'][1] || obj['pipes'][1] > obj['parenthesis'][1] && obj['parenthesis'][1] === 0){
          return false
        } else {
          obj['parenthesis'][0] = 'closed'
          obj['parenthesis'][1] = 0
        }
      }
      else if(newStr[i] === '['){
        obj['squareBrackets'][0] = 'open'
        obj['squareBrackets'][1] = counter
        counter++
      }
      else if( newStr[i] === ']'){
        if(obj['curlyBrackets'][1] > obj['squareBrackets'][1] || obj['parenthesis'][1] > obj['squareBrackets'][1] || obj['pipes'][1] > obj['squareBrackets'][1] && obj['squareBrackets'][1] === 0){
          return false
        } else {
          obj['squareBrackets'][0] = 'closed'
          obj['squareBrackets'][1] = 0
        }
      }
      else if(newStr[i] === '|' && newStr[i + 1] === '|' && obj['pipes'][0] === 'closed'){
        obj['pipes'][0] = 'open'
        obj['pipes'][1] = counter
        counter++
        i++
      }
      else if(newStr[i] === '|' && newStr[i + 1] === '|'){
        if(obj['curlyBrackets'][1] > obj['pipes'][1] || obj['parenthesis'][1] > obj['pipes'][1] || obj['squareBrackets'][1] > obj['pipes'][1] && obj['pipes'][1] === 0){
          return false
        } else {
          obj['pipes'][0] = 'closed'
          obj['pipes'][1] = 0
          i++
        }
      }
      else if(newStr[i + 1] !== '|'){
        return false
      }
    }
  
    if(obj['squareBrackets'][0] === 'open' || obj['parenthesis'][0] === 'open' || obj['curlyBrackets'][0] === 'open' || obj['pipes'][0] === 'open'){
      return false
    } else {
      return true
    }
  }
  balancedBrackets('[My (name) ||is Jerry|| and {I} like coding!]') //true
  // balancedBrackets('[|]|') //false
  // balancedBrackets('{{||[]||}}') //true
  // balancedBrackets('This is t(he la[st random sentence I will be writing |and| I am going to stop mid-sent]') //false