let element = document.createElement("button"); // <button></button> ができる
element.textContent = "Push Me!";               // <button>Push Me!</button> ができる
let target = document.querySelector("#create_and_append"); // 追加したい要素を見つけてくる
target.appendChild(element); // 追加する
