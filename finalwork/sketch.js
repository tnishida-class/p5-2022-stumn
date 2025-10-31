// 最終課題を制作しよう
let balls;
let c;
let COLOR =["#c3f7f3", "#c3f7e2", "#c3f7cf", "#cff7c3", "#e0f7c3", "#f5f7c3"];
let shouldAwawa;

function setup(){
  createCanvas(windowWidth, windowHeight);
  tairutoohuro();
  setsumei();
  c = 0;
  oyunoiro();
  balls = [];
  shouldAwawa = false;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// タイルとお風呂を描く
function tairutoohuro(){
  // タイル
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
  // お風呂
  let A = 30;
  fill(255);
  rect(-A+(width/4),-A+(height/4),2*A+(width/2),2*A+(height/2),20);
}

// 説明のテキストを書く
function setsumei(){
  push();
  // タイトルの箱
  fill(255);
  noStroke();
  rect(10,height/20,300,50,20);
  // タイトルテキスト
  fill(66, 135, 245);
  textSize(28);
  text(" 炭酸バスボール🛁🫧 ",15,height/9);
  //press the space key
  textSize(35);
  fill(245, 147, 108);
  textAlign(CENTER);
  text(" Press space key to throw! ", width/2 , height-52);
  pop();
}

// お湯を描く（色の配列cは冒頭で宣言）
function oyunoiro(){   
  fill(COLOR[c]);
  rect(width/4,height/4,width/2,height/2,20);
}

// バスボールを投げ入れる
function nageire(){
  push();
  fill(245, 211, 108);
  noStroke();
  ellipse(width/2,height/2,50,50);
  pop();
  return true;
}

// 発生した泡がお風呂から出ないようにする
function isInside(b){
  return b.x > width/4+25 && b.x < 3*width/4-25 && b.y > height/4+25 && b.y < 3*height/4-25;
}

// 泡を発生させる
function awawa(){
  // 泡が動いた軌跡が残らないように毎回背景を描画する
  tairutoohuro(); 
  oyunoiro();
  // お湯の色を変化させる
  fill(COLOR[5]);   
  if(balls.length <= 20){
    c = 0;
    strokeWeight(0.3);
  }
  else if(balls.length <= 40){
    c = 1;
    strokeWeight(0.3);
  }
  else if(balls.length <= 60){
    c = 2;
    strokeWeight(0.2);
  }
  else if(balls.length <= 90){
    c = 3;
    strokeWeight(0.1);
  }
  else if(balls.length <= 110){
    c = 4;
    strokeWeight(0.05);
  }
  else if(balls.length <= 120 ){
    c = 5;
    strokeWeight(0); 
  }
  else if(balls.length > 120 ){
    c = 5;
    strokeWeight(0);
    noLoop();
  }
  // 泡（ボール）を設定
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
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
  // 泡がお風呂から出ないように設定
  balls = balls.filter(isInside);
}

function draw(){
  // spaceキーでバスボール投げ入れ
  if(keyIsPressed){
    if(key == " "){
      nageire();
    }
  }
  // shouldAwawaがtrueのときawawaを起動
  if(shouldAwawa){
    awawa();
  }
}

// spaceキーが押されたら1500秒後にstartAwawaを起動
function keyPressed(){
  if(key = " "){
    setTimeout(startAwawa,1500);
  }
}

// shouldAwawaをtrueにする
function startAwawa(){
  shouldAwawa = true;
}