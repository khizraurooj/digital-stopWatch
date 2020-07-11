var min = 0;
var sec = 0;
var milisec = 0;
var mainHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var milisecHeading = document.getElementById("milisec")
var interval;

function timer(){
    milisec++
    milisecHeading.innerHTML = milisec;
    if(milisec >= 100){
        sec++
        secHeading.innerHTML = sec
        milisec = 0;
    } 
    else if(min >= 60){
        min++
       mainHeading.innerHTML = min
       sec = 0;
    }
        
    
        
  
} 
function start(){
    interval = setInterval(timer,10)
}
function pause(){
    clearInterval(interval)
} 
function reset(){
    min = 0;
    sec= 0;
    milisec = 0;
    mainHeading.innerHTML = min
    secHeading.innerHTML = sec
    milisec.innerHTML = milisec
    stop()

}
         
