export default endPage;
function endPage() {
  const endPageBody = document.createElement("div");
  endPageBody.classList.add("endPageBody");
  const endPageDiv = document.createElement("div");
  endPageDiv.classList.add("endPageDiv");
  endPageDiv.setAttribute("id", "endPageDiv");

  /* const winner = some function */

  const winnerText = document.createElement("p");
  winnerText.setAttribute("id", "winnerText");
  winnerText.textContent = "WINNER IS SOMEONE";
  winnerText.classList.add("winnerText");

  const quitButton = document.createElement("button");
  quitButton.textContent = "QUIT";
  quitButton.classList.add("endPageBtn");
  quitButton.classList.add("quitBtn");
  quitButton.setAttribute("id", "quitBtn");

  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "PLAY AGAIN";
  playAgainButton.classList.add("endPageBtn");
  playAgainButton.classList.add("playAgainBtn");
  playAgainButton.setAttribute("id", "playAgainBtn");

  endPageDiv.appendChild(winnerText);
  endPageDiv.appendChild(quitButton);
  endPageDiv.appendChild(playAgainButton);

  endPageBody.appendChild(endPageDiv);
  return endPageBody;
}
