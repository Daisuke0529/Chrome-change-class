
let element2 = document.createElement("button"); // <button></button> ができる
element2.textContent = "Push Me!";               // <button>Push Me!</button> ができる
let target2 = document.querySelector("#site-news-forum"); // 追加したい要素を見つけてくる
target2.appendChild(element2); // 追加するyui_3_17_2_1_1671470841257_30




let es = document.querySelectorAll(".tree_item");
for(let i = 0; i < es.length; i++){
  let e = es[i];
  if(e && e.textContent.includes("前期")){
    e.style.display = 'none';
  }
  if(e && e.textContent.includes("第1クォーター")){
    e.style.display = 'none';
  }
  if(e && e.textContent.includes("第2クォーター")){
    e.style.display = 'none';
  }
}

let element1 = document.createElement("script"); // <button></button> ができる 
element1.src = "https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js";         // <button>Push Me!</button> ができる
let target1 = document1.querySelector("head"); // 追加したい要素を見つけてくる
target1.appendChild(element1);

let element3 = document.createElement("script"); // <button></button> ができる 
element3.src = "https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js";         // <button>Push Me!</button> ができる
let target3 = document3.querySelector("head"); // 追加したい要素を見つけてくる
target3.appendChild(element3);



function draw(){
    background(245,245,220);
    fill(255);
    strokeWeight(3);
    ellipse(width/2,height/2,15);
}