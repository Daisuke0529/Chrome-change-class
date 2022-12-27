let button = document.createElement("button"); 
button.id="refresh";
button.onclick=buttonclick;
let a =document.createElement("a");
a.textContent = "3:大山悠輔";
let audio = document.createElement("audio");
audio.id="oyama";
const music = chrome.runtime.getURL("oyama.mp3");
audio.src= music;  
let h1 = document.querySelector("h1");
button.appendChild(a); 
button.appendChild(audio);
h1.appendChild(button); 

// audio.controls = true;
audio.loop=true;
audio.preload=true;



let count=0;
function buttonclick(){
    alert('悠然と振り構えたバットに　我らの夢を乗せて　スタンドへはじき返せ　栄光つかむその日まで');
    count+=1;
    audio.controls = true;
    // audio.muted=true;
    audio.autoplay=true;
    if(count>2){
        a.href="https://www.youtube.com/watch?v=Jb1_rM-qHzY&t=289s";
        button.appendChild(a);
        h1.appendChild(button); 
    }
}