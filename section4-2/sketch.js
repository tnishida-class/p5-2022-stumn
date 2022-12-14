//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function isInside(b){
  return b.x > 0 && b.x < width && b.y > 0 && b.y < height;
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  let b = { 
    x: windowWidth/2, 
    y: windowHeight/2, 
    size: random(20,100), 
    vx: random(-5,5), 
    vy: random(-5,5)
  };
  balls.push(b);
  balls = balls.filter(isInside);
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    let b = { 
      x: mouseX, 
      y: mouseY, 
      size: random(20,100), 
      vx: dx, 
      vy: dy 
    };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
