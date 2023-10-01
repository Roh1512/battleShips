export default friendlyBoard;
function friendlyBoard() {
  const friendlyBoardDiv = document.createElement("div");
  friendlyBoardDiv.classList.add("friendlyBoard");

  const gameHeading = document.createElement("h1");
  gameHeading.textContent = "BATTLESHIP";
  gameHeading.classList.add("gameHeading");

  const instructionText = document.createElement("p");
  instructionText.setAttribute("id", "instructionText");
  instructionText.classList.add("instructionText");
  instructionText.textContent = "Place your ship";

  const orientationBtn = document.createElement("button");
  orientationBtn.setAttribute("id", "orientationBtn");
  orientationBtn.classList.add("orientationBtn");
  orientationBtn.textContent = "X Axis";

  const boardParentDiv = document.createElement("div");
  boardParentDiv.setAttribute("id", "boardParentDiv");
  boardParentDiv.classList.add("boardParentDiv");

  //cells

  friendlyBoardDiv.appendChild(gameHeading);
  friendlyBoardDiv.appendChild(instructionText);
  friendlyBoardDiv.appendChild(orientationBtn);
  return friendlyBoardDiv;
}
