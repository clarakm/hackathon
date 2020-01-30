console.log('chrome ext');

//highlights all p tags
const paragraphs = document.getElementsByTagName('p');
for (let p of paragraphs) {
    p.style['background-color'] = '#d6fff1'
}



// let changeColor= document.getElementsByTagName('div');
        
//     for (let b of changeColor) {
//             b.style['background-color'] = 'black'
//         }
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inhale').addEventListener('click', inhaleExhale, false)
    function inhaleExhale() {
        document.getElementById('inhale').innerHTML = "Exhale!";
        console.log('inahle')
    }

}, false)



