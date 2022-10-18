// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  ellipse(width / 2, height / 2, count );
  noStroke();
  fill(256,0,0); 
  if(keyIsDown(UP_ARROW)){ count = (count + 3) % cycle; }
  if(keyIsDown(DOWN_ARROW)){ count = (count - 3 ) % cycle; } 
} 
