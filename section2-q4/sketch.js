// キューバ国旗
function setup() {
  const blue = color(	0, 42, 143);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 5; 

  for(let i = 0; i < 5; i++){
    if(i%2==0){
      fill(blue);
    }
    else{
      fill(255);
    }
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(207, 20, 43);
  triangle(0,0,0,height,width/2,height/2);

  fill(255);
  star(width/5, height/2, 30);
}
function star(cx, cy, r){
  let n = 5;
  beginShape();
  for(var i = 0; i < n; i++){
    let theta = TWO_PI * i * 2 / n - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
