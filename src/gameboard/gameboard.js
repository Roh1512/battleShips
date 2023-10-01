class Gameboard {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.grid = Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(null)); //2D array of null
    this.visited = [];
    this.ships = [];
    this.missedAttacks = [];
  }
  placeShip(ship, x, y) {
    if (x < 0 || x >= this.boardSize || y < 0 || y >= this.boardSize) {
      throw new Error("Invalid ship placement: out of bounds.");
    }

    if (ship.orientation === "horizontal") {
      if (y + ship.length > this.boardSize) {
        throw new Error("Invalid ship placement: exceeds board boundaries.");
      }
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x][y + i]) {
          throw new Error("Invalid ship placement: overlapping ships.");
        }
        this.grid[x][y + i] = ship;
      }
    } else if (ship.orientation === "vertical") {
      if (x + ship.length > this.boardSize) {
        throw new Error("Invalid ship placement: exceeds board boundaries.");
      }
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x + i][y]) {
          throw new Error("Invalid ship placement: overlapping ships.");
        }
        this.grid[x + i][y] = ship;
      }
    } else {
      throw new Error("Invalid ship orientation.");
    }
    ship.position = [x, y];
    this.ships.push(ship);
  }

  placeShipRandom(ship) {
    const orientationIndicator = Math.floor(Math.random() * 2);
    if (orientationIndicator === 0) {
      ship.setOrientation("horizontal");
    } else {
      ship.setOrientation("vertical");
    }
    while (true) {
      // Generate random coordinates
      const x = Math.floor(Math.random() * this.boardSize);
      const y = Math.floor(Math.random() * this.boardSize);

      try {
        // Attempt to place the ship at the random coordinates
        this.placeShip(ship, x, y);
        // If successful, break the loop
        break;
      } catch (error) {
        // If an error occurs (e.g., out of bounds or overlapping), continue the loop and try again
        continue;
      }
    }
  }

  receiveAttack(x, y) {
    if (x < 0 || x >= this.boardSize || y < 0 || y >= this.boardSize) {
      throw new Error("Invalid attack coordinates: out of bounds.");
    }
    if (this.visited.includes(`${x}-${y}`)) {
      throw new Error("Invalid attack coordinates: already visited.");
    } else if (this.missedAttacks.includes(`${x}-${y}`)) {
      throw new Error("Invalid attack coordinates: missed attack");
    } else if (this.grid[x][y] === null) {
      this.missedAttacks.push(`${x}-${y}`);
      this.visited.push(`${x}-${y}`);
    } else {
      const ship = this.grid[x][y];
      const shipPos = ship.position;
      const shipOrientation = ship.isHorizondal();
      if (shipOrientation === true) {
        const hitPos = y - shipPos[1];
        ship.hit(hitPos);
      } else if (shipOrientation === false) {
        const hitPos = x - shipPos[0];
        ship.hit(hitPos);
      }
      this.visited.push(`${x}-${y}`);
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

module.exports = Gameboard;
