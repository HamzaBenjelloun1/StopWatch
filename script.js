var hours=00;
var minutes=00;
var seconds=00;
var tens=00;
var appendHours = document.getElementById('hours');
var appendMinutes = document.getElementById('minutes');
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var interval;

function startTimer(){
    tens++;

    if(tens<9){
        appendTens.innerHTML="0"+tens;        
    }
    if(tens>9){
        appendTens.innerHTML = tens;
    }
    if(tens>99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0 ; 
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
    if(seconds>59){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds=0;
        appendSeconds.innerHTML="0" + 0 ;
    }
    if(minutes>9){
        appendMinutes.innerHTML = minutes;
    }
    if(minutes>59){
        hours++;
        appendHours.innerHTML = "0" + hours;
        minutes=0;
        appendMinutes.innerHTML="0" + 0 ;
    }
    if(Hours>9){
        appendHours.innerHTML = hours;
    }
}

buttonStart.onclick =  function(){
    interval = setInterval(startTimer)
};

buttonStop.onclick = function(){
    clearInterval(interval);
};

buttonReset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
}
