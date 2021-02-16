let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}
let target = generateTarget()


const compareGuesses = (humanScore, computerScore, target) => {
 
  let humanAbs = Math.abs(humanScore - target)
  let computerAbs = Math.abs(computerScore - target)

  console.log(target)
  console.log(humanAbs)
  console.log(computerAbs)
  
  if(humanAbs === computerAbs) {
    return true
  }else if(humanAbs < computerAbs){
    return true
  }else if(humanAbs > computerAbs) {
    return false
  }
}
const updateScore = (winner) => {
  if(winner === 'human'){
    humanScore += 1
  }else{
    computerScore += 1
  }
}
const advanceRound = () => {
  currentRoundNumber += 1
}