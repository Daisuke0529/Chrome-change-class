let element1 = document.createElement("button"); 
element1.classList.add("refresh");
let element2 =document.createElement("a");
element2.href="https://www.youtube.com/watch?v=Jb1_rM-qHzY&t=263s";
element2.textContent = "Refresh!";            
let target = document.querySelector("h1"); 
element1.appendChild(element2);
target.appendChild(element1); 




