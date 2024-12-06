let textBox= document.querySelector('#username');
textBox.addEventListener('keyup',function(){
    let msgEle= document.querySelector('#msg');
    msgEle.innerText = textBox.value;
})