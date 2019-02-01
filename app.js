// CREATE VARIBLES FOR HTML ELEMENTS
const scr = document.querySelector(".screen");
let ip = document.getElementById("str");
const btn = document.querySelector(".btn");
const clr = document.querySelector(".clr");
const rnd = document.querySelector(".rndm");
// EVENT LISTENERS
btn.addEventListener("click", reverseMe);
clr.addEventListener("click", clearMe);

// REVERSE FUNCTION
function reverseMe() {
  var cd = ip.value
    .split(" ")
    .reverse()
    .join(" ");
  scr.innerHTML = cd;
}
// CLEAR FUNCTION
function clearMe() {
  scr.innerHTML = "";
  ip.value = "";
}
