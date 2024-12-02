let h1Tag = document.querySelector("#msg-1");
let printWishMessage = function (message, color) {
  h1Tag.innerText = message;
  h1Tag.style.backgroundColor = color;
  h1Tag.style.boxShadow = "0 0 10px black";
  h1Tag.style.padding = "10px";
};

let gmButton = document.querySelector("#gm-btn");
gmButton.addEventListener("click", function () {
  printWishMessage("Good Morning", "limegreen");
});

let gaButton = document.querySelector("#ga-btn");
gaButton.addEventListener("click", function () {
  printWishMessage("Good Afternoon", "orangered");
});

let geButton = document.querySelector("#ge-btn");
geButton.addEventListener("click", function () {
  printWishMessage("Good Evening", "purple");
});

let gnButton = document.querySelector("#gn-btn");
gnButton.addEventListener("click", function () {
  printWishMessage("Good Night", "black");
});
