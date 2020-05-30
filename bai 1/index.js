const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const content = document.getElementById('content');
let i=0;
plus.addEventListener('click',()=>{
    content.textContent=`${i++}`;
})
minus.addEventListener('click',()=>{
    content.textContent=`${i--}`;
})