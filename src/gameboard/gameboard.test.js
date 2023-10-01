const Gameboard = require("./gameboard");
const Ship = require("../shipClass/ship");

describe("Gameboard", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard(8); //// Adjust the board size as needed
  });

  test("Should place ships on the board(Horizondal)", () => {
    const ship = new Ship(4);
    ship.orientation = "horizontal";
    gameboard.placeShip(ship, 2, 3);
    expect(gameboard.grid[2][3]).toBe(ship);
    expect(gameboard.grid[2][4]).toBe(ship);
    expect(gameboard.grid[2][5]).toBe(ship);
    expect(gameboard.grid[2][6]).toBe(ship);
  });

  test("Should place ships on the board(Vertical)", () => {
    const ship = new Ship(3);
    ship.setOrientation("vertical");
    gameboard.placeShip(ship, 1, 3);
    expect(gameboard.grid[1][3]).toBe(ship);
    expect(gameboard.grid[2][3]).toBe(ship);
    expect(gameboard.grid[3][3]).toBe(ship);
  });

  test("Should not place ships on the board is orientation is invalid", () => {
    const ship = new Ship(4);
    ship.orientation = "straight";
    expect(() => gameboard.placeShip(ship, 2, 3)).toThrowError();
  });

  test("should not place ships outside the board", () => {
    const ship = new Ship(4);
    expect(() => gameboard.placeShip(ship, 7, 7)).toThrow();
    expect(() => gameboard.placeShip(ship, 7, 7)).toThrow();
  });

  test("should record a missed attack", () => {
    gameboard.receiveAttack(1, 1);
    expect(gameboard.missedAttacks).toContainEqual("1-1");
    gameboard.receiveAttack(1, 2);
    expect(gameboard.missedAttacks).toContainEqual("1-2");
  });

  test("should record a hit attack - (Horizondal ship)", () => {
    const ship = new Ship(3);
    gameboard.placeShip(ship, 2, 3);
    gameboard.receiveAttack(2, 3);
    expect(ship.hits).toEqual([true, false, false]);
    gameboard.receiveAttack(2, 5);
    expect(ship.hits).toEqual([true, false, true]);
    gameboard.receiveAttack(2, 4);
    expect(ship.hits).toEqual([true, true, true]);
  });

  test("should record a hit attack - (Vertical ship)", () => {
    const ship = new Ship(3);
    ship.setOrientation("vertical");
    gameboard.placeShip(ship, 1, 3);

    gameboard.receiveAttack(1, 3);
    expect(ship.hits).toEqual([true, false, false]);
    gameboard.receiveAttack(3, 3);
    expect(ship.hits).toEqual([true, false, true]);
    gameboard.receiveAttack(2, 3);
    expect(ship.hits).toEqual([true, true, true]);
  });

  test("Should report whether all ships are sunk", () => {
    const ship1 = new Ship(2);
    const ship2 = new Ship(3);
    ship2.setOrientation("vertical");
    gameboard.placeShip(ship1, 0, 0);
    gameboard.placeShip(ship2, 2, 2);

    gameboard.receiveAttack(0, 0); //Attack ship1
    gameboard.receiveAttack(0, 1); //Attack ship1
    gameboard.receiveAttack(2, 2); //Attack ship2
    gameboard.receiveAttack(3, 2); //Attack ship2
    gameboard.receiveAttack(4, 2); //Attack ship2

    expect(gameboard.allShipsSunk()).toBe(true);
  });

  test("Should track all attacks as visited coordinates", () => {
    const ship = new Ship(3);
    gameboard.placeShip(ship, 1, 1);
    gameboard.receiveAttack(2, 2);
    gameboard.receiveAttack(3, 3);
    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(1, 2);
    expect(gameboard.visited).toEqual(["2-2", "3-3", "1-1", "1-2"]);
    expect(gameboard.missedAttacks).toEqual(["2-2", "3-3"]);
  });

  it("should record a hit attack and update ship hits", () => {
    const ship = new Ship(3);
    gameboard.placeShip(ship, 2, 3);
    gameboard.receiveAttack(2, 3);
    expect(ship.hits).toEqual([true, false, false]);
    gameboard.receiveAttack(2, 4);
    expect(ship.hits).toEqual([true, true, false]);
  });
});
