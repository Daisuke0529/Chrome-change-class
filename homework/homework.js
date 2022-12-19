let element = document.createElement("button"); // <button></button> ができる
element.textContent = "Push Me!";               // <button>Push Me!</button> ができる
let target = document.querySelector("#yui_3_17_2_1_1671467138280_30"); // 追加したい要素を見つけてくる
target.appendChild(element); // 追加する
