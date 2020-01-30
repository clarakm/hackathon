document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('title').addEventListener('click',
    onclick, false)
    //e.preventDefault();
    function onclick() {
        alert('Take a breather!')
    }
}, false)

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click',
    onsub, false)
    //e.preventDefault();
    function onsub() {
        let num = document.getElementById('time').value;
    console.log(typeof num);
    //alert('hi')
    let newNum = parseInt(num) * 1000;
    console.log(typeof newNum)
    setTimeout(function() {alert ('bye')}, newNum);
    }
}, false)

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('breathe').addEventListener('click',
//     startBreathe, false)
    
//     function startBreathe() {
//         let changeColor= document.getElementsByTagName('body');
//         for (let b of changeColor) {
//             b.style['background-color'] = 'black'
//         }
       
       
//     }
// }, false)



function myfunc() { 
    //console.log(document.getElementById('time').value);
    let num = document.getElementById('time').value;
    console.log(typeof num);
    //alert('hi')
    let newNum = parseInt(num) * 1000;
    console.log(typeof newNum)
    setTimeout(function() {alert ('bye')}, newNum);
    
}






// let time = setInterval(myTimer, 1000);
// function myTimer() {
//     let d = new Date();
//     document.getElementById("counter").innerHTML = d.toLocaleTimeString();
// }

