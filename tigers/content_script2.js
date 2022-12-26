let element1 = document.createElement("button"); 
element1.classList.add("refresh");
element1.onclick=buttonclick;
let element2 =document.createElement("a");
// element2.href="https://www.youtube.com/watch?v=Jb1_rM-qHzY&t=263s";
element2.textContent = "3:大山悠輔";            
let target = document.querySelector("h1"); 
element1.appendChild(element2);
target.appendChild(element1); 

let count=0;
const music = new Audio('大山悠輔　応援歌.mp3');
function buttonclick(){
    alert('悠然と振り構えたバットに　我らの夢を乗せて　スタンドへはじき返せ　栄光つかむその日まで');
    count+=1;
    music.play();
    music.volume = 0.5;
    music.loop = true;
    if(count>2){
        element2.href="https://www.youtube.com/watch?v=Jb1_rM-qHzY&t=289s";
        element1.appendChild(element2);
        target.appendChild(element1); 
    }
}
