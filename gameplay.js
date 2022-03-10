function computerPlay() {
    let compchoice = Math.floor((Math.random() * 3) +1);
    if (compchoice == 1) {
        return "ROCK"
    } else if (compchoice ==2) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}


function playerPlay() {
    let playerchoice = prompt("Rock, Paper or Scissors")
    return playerchoice
}




function playRound(playerselection, computerselection) {
    if ((playerselection == 'ROCK') && (computerselection == 'PAPER')) {
        console.log("Computer Wins with Paper")
    } else if ((playerselection == "ROCK") && (computerselection == 'SCISSORS')) {
        console.log("Computer loses with Scissors, You WIN!")
    } else if ((playerselection == 'PAPER') && (computerselection == 'ROCK')) {
        console.log("Computer loses with Rock, YOU WIN!")
    } else if ((playerselection == 'PAPER') && (computerselection == 'SCISSORS')) {
        console.log("Computer wins with scissors")
    } else if ((playerselection == 'SCISSORS') && (computerselection == 'ROCK')) {
        console.log("Computer wins with rock")
    } else if ((playerselection == 'SCISSORS') && (computerselection == 'PAPER')) {
        console.log("Computer loses with paper, you WIN!")
    } else {
        console.log("Game is a draw" + playerselection)
    }
}



function game() {
    computerPlay()
    const playerselection = playerPlay()
    const computerselection = computerPlay()
    playRound(playerselection, computerselection)
}