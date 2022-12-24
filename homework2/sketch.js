
let time;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0, 'fixed');
  time=0;
}

function draw(){
    background('rgba(245,245,220,0)');
    textSize(100);
    fill(255,255,0);
    textAlign(CENTER);
    text("行けてるで",width/2,height/2);
    if(time%10==0&&time<2000){console.log(time);}
    time+=1;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


