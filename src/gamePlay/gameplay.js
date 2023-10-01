const Gameboard = require("../gameboard/gameboard");
const Ship = require("../shipClass/ship");
const Player = require("../player/Player");
class Gameplay {
  constructor() {
    this.friendlyBoard = new Gameboard(10);
    this.enemyBoard = new Gameboard(10);
    this.player;
    this.enemy = new Player("Enemy", this.friendlyBoard);
    this.carrier = new Ship(5);
    this.destroyer = new Ship(5);
    this.cruiser = new Ship(4);
    this.submarine = new Ship(3);
    this.patrolBoat = new Ship(2);
    this.x;
    this.y;
  }
  set setPlayerName(name) {
    if (name !== "") {
      this.player = new Player(name, this.enemyBoard);
    } else {
      throw new Error("Require a name to start the game.");
    }
  }

  setCoordinates(x, y) {
    this.x = x;
    this.y = y;
  }

  placeCarrier() {
    this.friendlyBoard.placeShip(this.carrier, this.x, this.y);
  }
  placeDestroyer() {
    this.friendlyBoard.placeShip(this.destroyer, this.x, this.y);
  }
  placeCruiser() {
    this.friendlyBoard.placeShip(this.cruiser, this.x, this.y);
  }
  placeSubmarine() {
    this.friendlyBoard.placeShip(this.submarine, this.x, this.y);
  }
  placePatrolboat() {
    this.friendlyBoard.placeShip(this.patrolBoat, this.x, this.y);
  }

  placeShipsRandomly() {
    this.enemyBoard.placeShipRandom(this.carrier);
    this.enemyBoard.placeShipRandom(this.destroyer);
    this.enemyBoard.placeShipRandom(this.cruiser);
    this.enemyBoard.placeShipRandom(this.submarine);
    this.enemyBoard.placeShipRandom(this.patrolBoat);
  }
  getWinner() {
    if (
      this.friendlyBoard.allShipsSunk() === true &&
      this.enemyBoard.allShipsSunk() === false
    ) {
      this.player;
    } else if (
      this.friendlyBoard.allShipsSunk() === false &&
      this.enemyBoard.allShipsSunk() === true
    ) {
      this.enemy;
    }
  }
}

module.exports = Gameplay;
