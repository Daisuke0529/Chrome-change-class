let element1 = document.createElement("script"); 
element1.src = "https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js";
let target1 = document.querySelector("head"); 
target1.appendChild(element1);


let element2 = document.createElement("script"); 
element2.src = "sketch.js";
let target2 = document.querySelector("head"); 
target2.appendChild(element2);
