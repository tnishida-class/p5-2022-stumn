// チェッカー
function setup() {
  createCanvas(200, 200);
  background(196);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      rect(i*25,j*25,10,10);
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
