let textBox= document.querySelector('#username');
textBox.addEventListener('keyup',function(){
    //alert('Keyup event triggered')
    let msgElement= document.querySelector('#msg');
    msgElement.innerText = textBox.value;
})