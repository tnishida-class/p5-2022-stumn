// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  // 格子模様
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)% 2 == 1){
        fill(100);
      }
      else{
        fill(256);
      }
      rect(i*8,j*8,8,8);
    }
  }
  for(let c=0; c<8; c++){
    for(let d=0; d<8; d++){
      if((c+d)%2 == 1){
        if(d<3){
          fill(256,0,0);  
        }
        if(d>4){
          fill(0);
        }
        if((d==3)||(d==4)){
          noFill();
        }
      } 
      else{
        noFill();
      }
     
      ellipse(c*8+4,d*8+4,7);
    }
  }
}
