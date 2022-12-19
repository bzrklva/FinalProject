
const readMoreBtn=document.querySelector('.rdm');
const text=document.querySelector('.text');
readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show_more');
if(readMoreBtn.innerText==='Read more'){
    readMoreBtn.innerText='Read less'
}
else  { readMoreBtn.innerText='Read more'}
})