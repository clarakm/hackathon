document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('title').addEventListener('click',
    onclick, false)
    //e.preventDefault();
    function onclick() {
        alert('Take a breather!')
    }
}, false)

function onsub() {
    chrome.windows.create({url: "redirect.html", type:"popup"});
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click',
    countdown, false)
    //e.preventDefault();
    // function onsub() {
    //     chrome.windows.create({url: "redirect.html", type:"popup"});
    //     let num = document.getElementById('time').value;
    // console.log(typeof num);
    // 
    // let newNum = parseInt(num) * 1000;
    // console.log(typeof newNum)
    // setTimeout(function() {alert ('bye')}, newNum);
    //}
}, false)

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inhale').addEventListener('click',
    countdown, false)
    
    // function startBreathe() {
    //     let changeColor= document.getElementById('inhale');
    //     changeColor.innerHTML = "EXHALE";
    //     console.log("test")
    //     let change2 = document.getElementById
       
       
    // }
    
}, false)

chrome.browserAction.onClicked.addListener(function() {
    chrome.windows.create({'url': 'redirect.html','type': 'popup'}, function(window) {
        console.log('hello');
    });
});

// let remind = document.getElementById('submit');
// remind.addEventListener('click', function () {
//     alert('it me!')
// });

//countdown
function countdown() {
    let timeleft = 10;
    let downloadTimer = setInterval(function(){
    document.getElementById("countdown").innerHTML = "00 : " + timeleft;
    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        onsub();
        //document.getElementById("countdown").innerHTML = "Finished"
    }
    }, 1000);
}




function myfunc() { 
    //console.log(document.getElementById('time').value);
    let num = document.getElementById('time').value;
    console.log(typeof num);
    //alert('hi')
    let newNum = parseInt(num) * 1000;
    console.log(typeof newNum)
    setTimeout(function() {alert ('bye')}, newNum);
    
}


