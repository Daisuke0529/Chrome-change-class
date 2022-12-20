
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
  if(e && e.textContent.includes("第１クォーター")){
    e.style.display = 'none';
  }
}
