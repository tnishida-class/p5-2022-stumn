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
  let size = count ;  
  count = (count+1) % cycle ;
  if(keyIsDown(UP_ARROW)){ count = (count + 3 ) % cycle; }
  if(keyIsDown(DOWN_ARROW)){ count = (count - 3 ) % cycle; } 
  let green = 100 - count;
  fill(252,green,3);
  noStroke();
  ellipse(width / 2, height / 2, size );
// サイズが大きくなるにつれて、血流量が増えると思ったので、色が赤くなっていくように書いてみました。
} 





