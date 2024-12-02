let h1Tag = document.querySelector('#msg-1');
let printWishMessage = function(message,color){
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor=color;
    h1Tag.style.color='white';
    h1Tag.style.padding='10px';
    h1Tag.style.boxShadow='0 0 10px black';
 }