class Player {
  constructor(name, opponentGameboard) {
    this.name = name;
    this.opponentGameboard = opponentGameboard;
    this.moves = [];
  }

  // Method to choose coordinates and make an attack
  makeMoveManual(x, y) {
    const moveKey = `${x}-${y}`;

    // Check if the move is legal (not attacking the same coordinate twice)
    if (this.moves.includes(moveKey)) {
      return false; // Move is not legal
    }
    // Attack the opponent's game board
    this.opponentGameboard.receiveAttack(x, y);
    this.moves.push(moveKey);
    return true; //Move is legal
  }

  makeMoveAuto() {
    const boardSize = this.opponentGameboard.boardSize;
    const x = Math.floor(Math.random() * boardSize);
    const y = Math.floor(Math.random() * boardSize);
    this.makeMoveManual(x, y);
  }
}

module.exports = Player;
