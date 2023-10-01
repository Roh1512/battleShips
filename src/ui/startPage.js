export default startPage;
function startPage() {
  const startPageDiv = document.createElement("div");
  startPageDiv.classList.add("startPageDiv");
  startPageDiv.id = "startPageDiv";
  /* startPageDiv.classList.add("hide"); */

  //Game heading
  const gameHeading = document.createElement("h1");
  gameHeading.textContent = "BATTLESHIP";
  gameHeading.id = "gameHeading";
  gameHeading.classList.add("gameHeading");

  //Start form element
  const startForm = document.createElement("form");
  startForm.setAttribute("id", "startForm");
  startForm.classList.add("startForm");
  //Name input element
  const userName = document.createElement("input");
  userName.setAttribute("type", "text");
  userName.setAttribute("id", "userName");
  userName.setAttribute("placeholder", "Enter Name");
  userName.setAttribute("required", "");
  userName.classList.add("userName");
  //Submit button
  const startGameBtn = document.createElement("button");
  startGameBtn.textContent = "START GAME";
  startGameBtn.setAttribute("type", "submit");
  startGameBtn.classList.add("startGameBtn");
  startGameBtn.setAttribute("id", "startGameBtn");
  startForm.appendChild(userName);
  startForm.appendChild(startGameBtn);

  startPageDiv.appendChild(gameHeading);
  startPageDiv.appendChild(startForm);
  return startPageDiv;
}
