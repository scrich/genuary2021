const DEBUG = false;

let x,y;
let tx,ty,r;

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  
  x = 1;
  y = 1;
  // tx = width/2;
  // ty = height/2;
  tx = ty = 0;
  r = PI/12;

  noFill();
  blendMode(DIFFERENCE);
  background(255);
}

function draw() {
  // background(220);  

  stroke(frameCount%255, frameCount%127, frameCount%64);
  fill(128+frameCount%64, 64+frameCount%127, frameCount%255);

  translate(tx,ty);
  rotate(r);
  arc(0,0,x,y,0,PI/2, OPEN);

  r+=0.1;
  tx+=0.1;
  ty+=0.1;
  x+=0.08;
  y+=0.05;
  
}