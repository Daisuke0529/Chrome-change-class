let rank=document.querySelectorAll(".bb-rankTable__row");

let rank_s =[];
let rank_p =[];
let rank_f =[];
let rank_op=[];

function df(ranking){
    for(let i=0;i<ranking.length;i++){
        if(ranking[i] &&ranking[i].textContent.includes("阪神")){
            break;
        }
        ranking[i].style.display = 'none';
    }
}

if(rank.length==12){df(rank);}
else{
    for(let i=0;i<rank.length;i++){
        if(i<6){rank_s.push(rank[i]);}
        if(6<=i&&i<12){rank_p.push(rank[i]);}
        if(12<=i&&i<24){rank_f.push(rank[i]);}
        if(24<=i&&i<36){rank_op.push(rank[i]);}
    }
    if(rank_s[1] &&rank_s[1].textContent.includes("阪神")||rank_s[1].textContent.includes("DeNA")||rank_s[1].textContent.includes("広島")||rank_s[1].textContent.includes("中日")||rank_s[1].textContent.includes("ヤクルト")||rank_s[1].textContent.includes("巨人")){
        df(rank_s);
    }
    if(rank_p[1] &&rank_p[1].textContent.includes("阪神")||rank_p[1].textContent.includes("DeNA")||rank_p[1].textContent.includes("広島")||rank_p[1].textContent.includes("中日")||rank_p[1].textContent.includes("ヤクルト")||rank_p[1].textContent.includes("巨人")){
        df(rank_p);
    }
    df(rank_f);
    df(rank_op);

}

