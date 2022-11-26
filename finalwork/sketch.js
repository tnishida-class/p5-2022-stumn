// 最終課題を制作しよう
let balls;
let c;
let COLOR =["#c3f7f3", "#c3f7e2", "#c3f7cf", "#cff7c3", "#e0f7c3", "#f5f7c3"];

function setup(){
  createCanvas(windowWidth, windowHeight);
  tairutoohuro();
  c = 0;
  oyunoiro();
  balls = [];
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function tairutoohuro(){
  for(let i = 0; i < 50; i++){
    for(let j = 0; j < 50; j++){
      if((i+j)%2==1){
        fill(185, 210, 237);
      }
      else{
        fill(206, 222, 240);
      }
      strokeWeight(1);
      rect(i*30,j*30,30,30);
    }
  }
  let A = 30;
  fill(255);
  rect(-A+(width/4),-A+(height/4),2*A+(width/2),2*A+(height/2),20);
}

function oyunoiro(){   
  fill(COLOR[c]);
  rect(width/4,height/4,width/2,height/2,20);
}

function nageire(){
  push();
  fill(247, 190, 20);
  noStroke();
  ellipse(width/2,height/2,50,50);
  pop();
  return true;
}

function isInside(b){
  return b.x > width/4+25 && b.x < 3*width/4-25 && b.y > height/4+25 && b.y < 3*height/4-25;
}

function awawa(){
  tairutoohuro(); 
  oyunoiro();
  fill(COLOR[5]);   
  // strokeWeight(0.3);
  if(balls.length <= 20){
    c = 0;
    strokeWeight(0.3);
  }
  if(balls.length <= 40){
    c = 1;
    strokeWeight(0.3);
  }
  else if(balls.length <= 60){
    c = 2;
    strokeWeight(0.2);
  }
  else if(balls.length <= 80){
    c = 3;
    strokeWeight(0.1);
  }
  else if(balls.length <= 100){
    c = 4;
    strokeWeight(0.05);
  }
  else if(balls.length <= 110){
    c = 5;
    strokeWeight(0);   
  }
  else if(balls.length > 110){
    strokeWeight(0);
    noLoop();
  }
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    push();
    ellipse(b.x, b.y, b.size);
    pop();
    b.x += b.vx;
    b.y += b.vy;
  }
  let b = { 
    x: windowWidth/2,
    y: windowHeight/2, 
    size: random(10,40), 
    vx: random(-2,2), 
    vy: random(-2,2)
  };
  balls.push(b);
  balls = balls.filter(isInside);
}

function draw(){
  // if(keyIsPressed){
  //   if(key == " "){
  //     nageire();
  //     setTimeout(awawa,2000);
  //   }
  // }

  if(keyIsPressed){
    if(key == " "){
      nageire();
    }
  }
  setTimeout(awawa,2000);
}
  