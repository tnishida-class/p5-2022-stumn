// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",32,15);
}

function balloon(t,S,p){
  textSize(S);
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  fill(61, 48, 74); 
  triangle(50+w/3,50+h+p*2,50+w/4,80+h+p*2,50+3*w/4,50+h+p*2);
  rect(50, 50, w + p * 2, h + p * 2,15);
  fill(82, 171, 85);
  text(t, p+50, h+p+50); 
}
