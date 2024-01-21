var timerInMs =0;
var timer;


document.getElementById("start").addEventListener("click", startTimer)

document.getElementById("pause").addEventListener("click", pauseTimer)

document.getElementById("reset").addEventListener("click", resetTimer)

function startTimer(){
    timer=setInterval(()=>{
        timerInMs+=10;
        updateTime(timerInMs);
    },10)//10ms sec 
}


function pauseTimer(){
    clearInterval(timer); 
}

function resetTimer(){
    clearInterval(timer)
    timerInMs=0;
    updateTime(timerInMs);
}

function updateTime(timerInMs){
    const sec = Math.floor(timerInMs / 1000); //Second
    const min=Math.floor(timerInMs/60000); //Minute
    const ms=(timerInMs %1000)/10; //Ms
    

    document.getElementById("min").innerText=min<10 ? "0"+min%60 :min%60;
    document.getElementById("sec").innerText=sec<10 ? "0"+sec%60 :sec%60;
    document.getElementById("ms").innerText=ms;
}
















