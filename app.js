const type=document.querySelector(".last-text")   
const typing=()=>{
    setTimeout(() => {
        type.textContent="Web Developer";
    }, 0);
    setTimeout(() => {
        type.textContent="SQl"; 
    }, 4000);
    setTimeout(() => {
        type.textContent="Java"; 
    }, 8000);  
}
typing()
setInterval(typing,12000) 