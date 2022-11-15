// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
  noStroke();
  background(160, 192, 255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let A, x, y, z, vx, vy;
const vyMax = 30;

function mouseClicked(){
  A = mouseX
  z = mouseY;
}

function draw(){
  x += vx;
  y += vy;
  vy = constrain(vy, -vyMax, vyMax);

  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || y > height){ vy = -1 * vy; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

  if(keyIsDown(LEFT_ARROW)){ x = x-5 }
  if(keyIsDown(RIGHT_ARROW)){ x = x+5 }
  if(keyIsDown(UP_ARROW)){ y = y-5 }
  if(keyIsDown(DOWN_ARROW)){ y = y+5 }
  ellipse(x, y, 20, 20);

  let size = count;
  let R = random(0,256);  
  count = (count+1) % cycle;
  fill(z,A,R);
  ellipse(A,z,size);
}

