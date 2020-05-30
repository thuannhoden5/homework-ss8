const stop = document.getElementById('Stop');
const start = document.getElementById('Start');
const coutdown = document.getElementById('coutdown');
const inputNumber = document.getElementById('inputNumber');

function minus () {
    if(coutdown.textContent>0){
        coutdown.textContent=`${coutdown.textContent}`;
        coutdown.textContent--;
        
    }else if(coutdown.textContent=='stopped'){
        
        clearInterval(minus);      
    }
    else {
        coutdown.textContent='Time up'
    }
}
start.addEventListener ('click',()=>{
    coutdown.textContent=inputNumber.value;
    setInterval(minus,1000)
})
stop.addEventListener('click',()=>{
    coutdown.textContent='stopped';
})