let passwordBox = document.querySelector("#password1");
let checkBox = document.querySelector("#checkbox1");
checkBox.addEventListener("change", function () {
  let typeAttribute = passwordBox.getAttribute("type");
  //    console.log(typeAttribute);
  if (typeAttribute === "password") {
    passwordBox.setAttribute("type", "text");
  } else {
    passwordBox.setAttribute("type", "password");
  }
});
