function setup() {
  createCanvas(128,128);
}

function draw() {
  background(10);
  strokeWeight(4);
  fill(94, 185, 84);
  square(30, 20, 75, 20, 15, 10, 5);
  fill(178, 100, 162);
  triangle(116,10,116,120,12,120);
  fill(255);
  textSize(32);
  textFont("serif");
  text("24", 68, 100);
}
