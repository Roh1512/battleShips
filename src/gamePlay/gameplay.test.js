const Gameplay = require("./gameplay");
describe("Gameplay", () => {
  let gameplay;
  beforeEach(() => {
    gameplay = new Gameplay();
  });
  test("Setting name of the player", () => {
    gameplay.setPlayerName = "Abu";
    console.log(gameplay.player);
  });
});
