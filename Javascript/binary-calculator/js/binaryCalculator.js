function results(){
    let display = document.getElementById('res').innerHTML
    
    if(display.includes('+')){
        let str = display.split('+')
        let first = str[0]
        let firstLength = first.length - 1
        let second = str[1]
        let secondLength = second.length - 1 

        let firstResult = 0
        let secondResult = 0
        // IN ORDER FOR US TO CONVERT BINARY NUMBERS TO NORMAL NUMBERS, WE NEED TO MULTIPLY EACH NUMBER BY 2 TO THE POWER OF THE LENGTH OF THE NUMBER'S - 1,
        // AND ULTIMATELY SUMMING ALL NUMBERS.
        // EXAMPLE: 11011
        // 1 * 2**4 + 1 * 2**3 + 0 * 2**2 + 1 * 2**1 + 1 * 2**0 //THIS RESULTS TO 27 

        for(let i = firstLength, j = 0; i >= 0; i--, j++){
          firstResult += first[j] * Math.pow(2, i)
        }
        // WE DO THE SAME FOR THE OTHER HALF OF THE INPUT
        for(let i = secondLength, j = 0; i >= 0; i--, j++){
          secondResult += second[j] * Math.pow(2, i)
        }
        // AND WE SUM THE 2 TOGETHER, RESULTING IN 35
        let finalResult = firstResult + secondResult

        // ALGORITHM TO CONVERT THE GIVEN NUMBER INTO IT'S BINARY VERSION
        let arr = []
        
        while (finalResult !== 0){
            let result = finalResult % 2
            arr.push(result)
            finalResult = Math.floor(finalResult / 2)
        }
        let binaryNum = arr.reverse().join('')

        document.getElementById('res').innerHTML = binaryNum.toString()
    }
    else if(display.includes('*')){
        let str = display.split('*')

        let first = str[0]
        let firstLength = first.length - 1

        let second = str[1]
        let secondLength = second.length - 1 

        let firstResult = 0
        let secondResult = 0

        for(let i = firstLength, j = 0; i >= 0; i--, j++){
          firstResult += first[j] * Math.pow(2, i)
        }

        for(let i = secondLength, j = 0; i >= 0; i--, j++){
          secondResult += second[j] * Math.pow(2, i)
        }
        let finalResult = firstResult * secondResult
        
        let arr = []
        
        while (finalResult !== 0){
            let result = finalResult % 2
            arr.push(result)
            finalResult = Math.floor(finalResult / 2)
        }
        let binaryNum = arr.reverse().join('')
        document.getElementById('res').innerHTML = binaryNum.toString()
    }
    else if(display.includes('/')){
        let str = display.split('/')

        let first = str[0]
        let firstLength = first.length - 1

        let second = str[1]
        let secondLength = second.length - 1 

        let firstResult = 0
        let secondResult = 0

        for(let i = firstLength, j = 0; i >= 0; i--, j++){
          firstResult += first[j] * Math.pow(2, i)
        }

        for(let i = secondLength, j = 0; i >= 0; i--, j++){
          secondResult += second[j] * Math.pow(2, i)
        }
        let finalResult = Math.floor(firstResult / secondResult)
        
        let arr = []
        
        while (finalResult !== 0){
            let result = finalResult % 2
            arr.push(result)
            finalResult = Math.floor(finalResult / 2)
        }
        let binaryNum = arr.reverse().join('')
        document.getElementById('res').innerHTML = binaryNum.toString()
    }
    else if(display.includes('-')){
        let str = display.split('-')

        let first = str[0]
        let firstLength = first.length - 1

        let second = str[1]
        let secondLength = second.length - 1 

        let firstResult = 0
        let secondResult = 0

        for(let i = firstLength, j = 0; i >= 0; i--, j++){
          firstResult += first[j] * Math.pow(2, i)
        }

        for(let i = secondLength, j = 0; i >= 0; i--, j++){
          secondResult += second[j] * Math.pow(2, i)
        }
        let finalResult = Math.floor(firstResult - secondResult)
        
        let arr = []
        
        while (finalResult !== 0){
            let result = finalResult % 2
            arr.push(result)
            finalResult = Math.floor(finalResult / 2)
        }
        let binaryNum = arr.reverse().join('')
        document.getElementById('res').innerHTML = binaryNum.toString()
    }
}

function zeros(){
    let display = document.getElementById('res')
    display.innerHTML = display.innerHTML + 0
}

function clearDisplay(){
    let display = document.getElementById('res')
    display.innerHTML = ''
}

function ones(){
    let display = document.getElementById('res')
    display.innerHTML = display.innerHTML + 1
}

function minus(){
    let display = document.getElementById('res')
    display.innerHTML = display.innerHTML + '-'
}

function sum(){
    let display = document.getElementById('res')
    display.innerHTML = display.innerHTML + '+'
}

function div(){
    let display = document.getElementById('res')
    display.innerHTML = display.innerHTML + '/'
}

function mult(){
    let display = document.getElementById('res')
    display.innerHTML = display.innerHTML + '*'
}