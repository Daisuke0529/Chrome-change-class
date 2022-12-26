let button = document.createElement("button"); 
button.id="refresh";
button.onclick=buttonclick;
let a =document.createElement("a");
a.textContent = "3:大山悠輔";
let audio = document.createElement("audio");
audio.id="oyama";
let source= document.createElement("source"); 
source.src= "oyama.mp3";  
source.type="audio/mp3"
let h1 = document.querySelector("h1");
audio.appendChild(source);
button.appendChild(a); 
button.appendChild(audio);
h1.appendChild(button); 

const music = new Audio('oyama.mp3');
// music.play();
var promise = document.querySelector('audio').play();

if (promise !== undefined) {
promise.then(_ => {
    // Autoplay started!
}).catch(error => {
    // Autoplay was prevented.
    // Show a "Play" button so that user can start playback.
});
}

let count=0;
function buttonclick(){
    alert('悠然と振り構えたバットに　我らの夢を乗せて　スタンドへはじき返せ　栄光つかむその日まで');
    count+=1;
    // music.play();
    // music.volume = 0.5;
    // music.loop = true;
    if(count>2){
        a.href="https://www.youtube.com/watch?v=Jb1_rM-qHzY&t=289s";
        button.appendChild(a);
        h1.appendChild(button); 
    }
}

refresh.addEventListener('click', function(){
    music.play();
    if(music.muted){
        music.muted = false;
    }
    music.loop = true;
  });