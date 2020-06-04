// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. 
// Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1.
//  He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
// -------------
// Example
// -------------
// For statues = [6, 2, 3, 8], the output should be 3, since Ratiorg needs statues of sizes 4, 5 and 7.

function makeArrayConsecutive2(statues) {                                                         
  let sortedStatues = statues.sort((a, b) => a > b ? 1 : a < b ? -1 : 0)
  let counter = 0
  for(let i = sortedStatues[0]; i < sortedStatues[sortedStatues.length - 1]; i++){
      if(!sortedStatues.includes(i)){
          counter++
      }
  }
  return counter
}  