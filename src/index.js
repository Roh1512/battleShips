import "./style.css";
import startPage from "./ui/startPage";
import endPage from "./ui/endPage";
import friendlyBoard from "./friendlyBoard";

const body = document.querySelector("body");
body.appendChild(friendlyBoard());
/* body.appendChild(startPage()); */
/* body.appendChild(endPage()); */
