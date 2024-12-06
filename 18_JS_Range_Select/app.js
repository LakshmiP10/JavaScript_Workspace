let rangeEl = document.querySelector('#range');
let amountEl = document.querySelector('#amount');
rangeEl.addEventListener('input',function(){
    amountEl.innerText = rangeEl.value ;
})