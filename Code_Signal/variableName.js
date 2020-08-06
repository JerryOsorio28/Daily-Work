// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
// Check if the given string is a correct variable name.
// --------
// Example
// --------
// For name = "var_1__Int", the output should be `true`,
// For name = "qq-q", the output should be `false`,
// For name = "2w2", the output should be `false`.

function variableName(name) {
    if(name[0].match(/[0-9]/) || /\s/g.test(name)){
        return false
    } else if (name[0].match(/[a-z]/i) || name[0] === '_' && name.length > 1){
        for(let i = 1; i < name.length; i++){
            if(name[i].match(/[a-z]/i) || name[i] === '_' || name[i].match(/[0-9]/)){
            } else {
                return false
            }
        }
    } else {
        return false
    }
    return true
}
