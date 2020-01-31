document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('title').addEventListener('click',
    onclick, false)
    function onclick() {
        alert('Take a breather!')
    }
}, false)

function onsub() {
    chrome.windows.create({url: "redirect.html", type:"popup"});
}

function onStretch() {
    chrome.windows.create({url: "stretch.html", type:"popup"});
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click',
    countdown, false)
}, false)

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inhale').addEventListener('click',
    onsub, false)   
}, false)

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('stretch').addEventListener('click',
    onStretch, false)
}, false)



function countdown() {
    // converts to secon
    let num = document.getElementById('time').value;
    let newNum = parseInt(num);
    let timeleft = newNum - 1;
    let secondsLeft = 59;
    let downloadTimer = setInterval(function(){
        // if(secondsLeft < 60)
    document.getElementById("countdown").innerHTML =  timeleft + ": " + secondsLeft;
    if(secondsLeft === 0) {
        timeleft -= 1;
        secondsLeft = 59;
    }
    secondsLeft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        onsub();
        //document.getElementById("countdown").innerHTML = "Finished"
    }
    }, 1000);
}




