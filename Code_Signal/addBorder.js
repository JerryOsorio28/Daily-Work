// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// --------
// Example
// --------
// For picture = ["abc",
//                "ded"] the output should be ["*****",
//                                             "*abc*",
//                                             "*ded*",
//                                             "*****"]

function addBorder(picture) {
let asterisks = ''

for(let i = 0; i < picture[0].length + 2; i++){
asterisks += '*'
}

picture.unshift(asterisks)
picture.push(asterisks)
asterisks = ''

for(let i = 1; i < picture.length - 1; i++){
picture[i] = picture[i].split('')
picture[i].unshift('*')
picture[i].push('*')
picture[i] = picture[i].join('')
}

return picture
}