const Ship = require("./ship");
describe("Ship", () => {
  test("it should be able to create a ship", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.hits).toEqual([false, false, false]);
  });
  test("it should be able to mark a position as hit", () => {
    const ship = new Ship(4);
    ship.hit(2);
    expect(ship.hits).toEqual([false, false, true, false]);
    ship.hit(0);
    expect(ship.hits).toEqual([true, false, true, false]);
  });
  test("It should not allow hitting an invalid position", () => {
    const ship = new Ship(2);
    expect(() => ship.hit(2)).toThrow(Error);
    expect(() => ship.hit(3)).toThrow("Invalid position to hit.");
  });
  test("it should determine if the ship is sunk", () => {
    const ship = new Ship(3);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(false);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
  });
});
