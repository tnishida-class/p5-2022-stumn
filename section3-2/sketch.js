// テキスト「アニメーションの基本」
let x, y, vx, vy;
const g = 1; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
}
function draw(){
  background(5, 39, 94);
  ellipse(x, y, 30);
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}



// function draw(){
//   background(160, 192, 255);
//   square(x, y, 50);
//   x += vx;
//   y += vy;
//   vy += g; // 重力は「速度の変化量」
//   vy = constrain(vy, -vyMax, vyMax); // 速度が大きくなりすぎないように調整
//   if(y < 0 || y > height){ vy = -1 * vy; }
//   y = constrain(y, 0, height);
//   // 跳ね返りは「速度 × -1」
//   if(x < 0 || x > width){ vx = -1.1 * vx; }
//   if(y < 0 || y > height){ vy = -1.1 * vy; }
//   // x座標, y座標を画面内に戻しておく
//   x = constrain(x, 0, width);
//   y = constrain(y, 0, height);
// }

// function draw(){
//   background(160, 192, 255);
//   ellipse(x, y, 20, 20);
//   x += vx;
//   y += vy;

//   // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
//   vy = constrain(vy + g, -vyMax, vyMax);

//   // 端の処理パターン (1) 反対側から出てくる
//   // if(x > width){ x = 0; }
//   // else if(x < 0){ x = width; }
//   // if(y > height){ y = 0; }
//   // if(y < 0){ y = height; }

// 　// 端の処理パターン (2) 跳ね返る
//   if(x < 0 || x > width){ vx = -1 * vx; }
//   if(y > height){ vy = -1 * vy; }
//   x = constrain(x, 0, width);
//   y = constrain(y, 0, height);
// }

// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }
