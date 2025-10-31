// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100);
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){
    line(0, height * i / n, width, height * i / n); 
  }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let px, py;
  for(let i = 0; i < scores.length; i++){
    let x = dx*i+width/(2*n);
    let y = height*scores[i]/100;
    ellipse(x,height-y,10);
    if(i>=1){
      px = dx*(i-1)+width/(2*n);
      py = height*scores[i-1]/100;
    }
    line(px,height-py,x,height-y);
  }
}
