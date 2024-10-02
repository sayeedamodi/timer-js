const timedisplay = document.querySelector("#timedisplay");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resetbtn = document.querySelector("#resetbtn");

let starttime = 0;
let elapsedtime = 0;
let currentime = 0;
let pause = true;
let intervalId;
let hrs = 0;
let mins = 0 ;
let secs = 0;

startbtn.addEventListener("click",() => {
    if(pause){
          pause = false;
          starttime = Date.now()- elapsedtime;
          console.log(starttime);
          intervalId = setInterval(updateTime, 75);
    }
});


pausebtn.addEventListener("click", ()=> {
    if(!pause){
        pause = true;
        elapsedtime = Date.now() - starttime;
        clearInterval(intervalId);
    }
});


resetbtn.addEventListener("click", ()=> {
    pause = true;
    starttime = 0;
    elapsedtime = 0;
    currentime = 0;
    hrs = 0 ;
    mins = 0 ;
    secs = 0 ;
    timedisplay.textContent = "00:00:00";
    clearInterval(intervalId);

});

function updateTime(){
    console.log(starttime);
    elapsedtime = Date.now() - starttime ;
    secs = Math.floor((elapsedtime/1000) % 60);
    mins = Math.floor((elapsedtime/(1000 * 60)) % 60);
    hrs = Math.floor((elapsedtime/(1000 * 60 * 60))%60);

    secs = pad(secs);
    mins = pad(mins);
    hrs  = pad(hrs);

    timedisplay.textContent = `${hrs}:${mins}:${secs}`;
    
    function pad (unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
} 