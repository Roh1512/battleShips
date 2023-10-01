const Player = require("./Player");
const Gameboard = require("../gameboard/gameboard");

describe("Player", () => {
  let player;
  let gameboard;
  beforeAll(() => {
    gameboard = new Gameboard(8);
  });
  beforeEach(() => {
    player = new Player("Player_1", gameboard);
  });

  test("should create a Player instance", () => {
    expect(player).toBeInstanceOf(Player);
  });

  test("should make a legal move", () => {
    const result = player.makeMoveManual(1, 2);
    expect(result).toBe(true);
  });

  test("should prevent making an illegal move (attacking the same coordinate twice)", () => {
    // Make a legal move
    player.makeMoveManual(3, 4);
    // Attempt to make the same move again and expect it to return false
    const result = player.makeMoveManual(3, 4);
    expect(result).toBe(false);
  });
});
