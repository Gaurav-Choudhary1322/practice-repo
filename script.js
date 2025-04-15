// All the functions are written here
function bubbles(){
    var bubbles =''; 
for(var i=0; i<180; i++){
    var bubbleValue = Math.floor(Math.random()*10);

    bubbles +=  `<div class="bubble">${bubbleValue}</div>`;
}
document.querySelector('#bottom-game-box').innerHTML=bubbles;

}
function runtimer(){
    let timer = 60;
    let reset =setInterval(()=>{
    if(timer>0){
    timer--;
    document.querySelector('#timer-container').innerHTML = timer;
    }
    else{
       clearInterval(reset);
    }
    },1000);

}


// other code of game



// All the function calls are written here
bubbles();



