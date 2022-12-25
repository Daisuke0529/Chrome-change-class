let rank_s =[];
let rank_p =[];
let rank_f =[];
let rank_op=[];

let rank=document.querySelectorAll(".bb-rankTable__row");
for(let i=0;i<rank.length;i++){
    if(i<6){rank_s.push(rank[i]);}
    if(i<12){rank_s.push(rank[i]);}
    if(i<24){rank_f.push(rank[i]);}
    if(i<36){rank_op.push(rank[i]);}
}

if(rank_s[i] &&rank_s[i].textContent.includes("セリーグ")){
    for(let i = 0; i < rank_s.length; i++){
        if(rank_s[i] &&rank_s[i].textContent.includes("阪神")){
            break;
        }
        rank_s[i].style.display = 'none';
    }
}
if(rank_p[i] &&rank_p[i].textContent.includes("セリーグ")){
    for(let i = 0; i < rank_p.length; i++){
        if(rank_[i] &&rank_p[i].textContent.includes("阪神")){
            break;
        }
        rank_p[i].style.display = 'none';
    }
}
for(let i = 0; i < rank_f.length; i++){
    if(rank_f[i] &&rank_f[i].textContent.includes("阪神")){
        break;
    }
    rank_f[i].style.display = 'none';
}
for(let i = 0; i < rank_op.length; i++){
    if(rank_op[i] &&rank_op[i].textContent.includes("阪神")){
        break;
    }
    rank_op[i].style.display = 'none';
}