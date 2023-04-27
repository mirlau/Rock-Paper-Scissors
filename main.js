const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};

 // Play game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  
  console.log(playerChoice, computerChoice, winner)
    }

// Gets computes choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    } else if(rand <= 0.67){
        return 'paper';
    } else {
        return 'scissors';
    }
    }

    // Get game winner
    function getWinner(player, computer) {
    if (player === computer) {
      return 'draw';
    } else if (player === 'rock') {
      if (computer === 'paper') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (player === 'paper') {
      if (computer === 'scissors') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (player === 'scissors') {
      if (computer === 'rock') {
        return 'computer';
      } else {
        return 'player';
      }
    }
  }

function showWinner(winner, computerChoice) {
    if(winner === 'player') {
        scoreboard.player++
        result.innerHTML = `
        <h1 class="text-win">You Win!<h/1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose<strong>${computerChoice}</strong></p>
        `;
    } else if(winner === 'computer') {
        scoreboard.computer++
        result.innerHTML = `
        <h1 class="text-lose">You Lose!<h/1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose<strong>${computerChoice}</strong></p>
        `;  
    } else {
        result.innerHTML = `
        <h1>It's a draw!<h/1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose<strong>${computerChoice}</strong></p>
        `;  
    }
    // Show score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
}
   
 // Event listeners
 choices.forEach(choice => choice.addEventListener('click', play));