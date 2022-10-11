function setup(){
  for(let i = 1; i <= 10; i++){
    noFill();
    strokeWeight(1);
    if(i<=5){
      stroke(0,0,255)
    }
    else{
      stroke(255,0,0)
    }
    ellipse(50,50,i*10);
  }
}
