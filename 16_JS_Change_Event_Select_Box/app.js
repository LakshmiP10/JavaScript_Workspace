let selectLangEl = document.querySelector("#select-lang");
selectLangEl.addEventListener("change", function () {
  let languageSelected = document.querySelector("#lang-option");
  languageSelected.innerText = selectLangEl.value;
});
