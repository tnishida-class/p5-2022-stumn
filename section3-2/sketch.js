// テキスト「アニメーションの基本」
let x, y, vx, vy;
const g = 0.5;
const vyMax = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 4;
  y = height / 4;
  vx = 2;
  vy = 2;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

function gold_fish(a,b,c){
  fill(245, 141, 66);
  noStroke();
  triangle(a,b,a,b+c,a+c,b+c/2);
  rect(a+c,b,c,c);
  triangle(a+2*c,b,a+2*c,b+c,a+3*c,b+c/2);
  push();
  fill(0);
  ellipse(a+c*5/2,b+c/2,c/10);
  pop();
}

function poi(){
  fill(255);
  strokeWeight(10);
  stroke(250, 165, 226);
  ellipse(width/2,height/2,300);
  push();
  fill(250, 165, 226);
  rect(width/2-20,height/2+150,40,150);
  pop();
}

let C = 50;

function draw(){
  background(160, 192, 255);
  poi();
  gold_fish(x,y,C);
  x += vx;
  y += vy; 
  vy += g;

  if(x < 0 || x > width-3*C){ vx = -1* vx; }
  if(y < 0 || y > height-C){ vy = -1 * vy; }

  let d = dist(width/2,height/2,x+C*3/2,y)
  if(d<150){
    if((y+C/2)<height/2){
      y -= 4;
    }
    if((y+C/2)>=height/2){
      y += 4;
    }
  }

  vy = constrain(vy, -vyMax, vyMax); 
  if(y < 0 || y > height){ vy = -1 * vy; }

  if(keyIsDown(LEFT_ARROW)){ x = x-5 }
  if(keyIsDown(RIGHT_ARROW)){ x = x+5 }
  if(keyIsDown(UP_ARROW)){ y = y-5 }
  if(keyIsDown(DOWN_ARROW)){ y = y+5 }

  if(key == " "){ y = y-8}
}

// 金魚がポイの上を飛び跳ねていることから連想して作りました。
// ポイ以外の所でも飛び跳ねますし、なんなら重力に引っ張られていますから、不思議な世界線だと思ってください。
// しかし本能的に、ポイの近くでは逃げようとしているみたいです。（というように作りました。）