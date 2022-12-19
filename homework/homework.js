// let element = document.createElement("button"); // <button></button> ができる
// element.textContent = "Push Me!";               // <button>Push Me!</button> ができる
// let target = document.querySelector("#yui_3_17_2_1_1671467138280_30"); // 追加したい要素を見つけてくる
// target.appendChild(element); // 追加する


function f(n){
    let cs = n.childNodes;
    for(let i = 0; i < cs.length; i++){
      let c = cs[i];
      if(c.nodeType == Node.TEXT_NODE){
        c.textContent = c.textContent.replace(/前期/g, "大山");
      }
      else{
        f(c);
      }
    }
  }
  
  f(document.body); // document.body は HTML の文章全体を示す要素