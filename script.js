// script.js
// let container;
let container=document.querySelector(".scroller");
let leftarrow=document.getElementsByName("leftarrow");
let rightarrow=document.getElementsByName("rightarrow");
container.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    container.scrollLeft+=evt.deltaY;
});

function scrollleft() {
    let scroller = document.querySelector(".scroller");
    scroller.scrollLeft -= 900; 
}

function scrollright() {
    let scroller = document.querySelector(".scroller");
    scroller.scrollLeft += 900; 
}

