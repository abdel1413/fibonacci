function rockPaperScissors(player1, player2) {
  if(player1 ===player2) return "Tie"
  if(
    (player1 ==="Rock" && player2 === "Scissors")
    || (player1 === "Paper" && player2 ==="Rock")
    || (player1 === "Scissors"&& player2 === "Paper")){
      return "Player 1 wins"
    }
  return "Player 2 wins";
}


rockPaperScissors("Rock", "Rock")   // should return "Tie"
rockPaperScissors("Rock", "Paper")  // should return "Player 2 wins"
rockPaperScissors("Rock", "Scissors") // should return "Player 1 wins"
rockPaperScissors("Paper", "Rock")   // should return "Player 1 wins"
rockPaperScissors("Paper", "Scissors") // should return "Player 2 wins"
rockPaperScissors("Scissors", "Paper") // should return "Player 1 wins"
rockPaperScissors("Scissors", "Rock")  // should return "Player 2 wins"