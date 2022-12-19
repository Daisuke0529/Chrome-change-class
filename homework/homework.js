let element1 = document.createElement("button"); // <button></button> ができる
element1.textContent = "Push Me!";               // <button>Push Me!</button> ができる
let target1 = document.querySelector("#green"); // 追加したい要素を見つけてくる
target1.appendChild(element1); // 追加する


let element2 = document.createElement("button"); // <button></button> ができる
element2.textContent = "Push Me!";               // <button>Push Me!</button> ができる
let target2 = document.querySelector("#page-header-headings"); // 追加したい要素を見つけてくる
target2.appendChild(element2); // 追加する
