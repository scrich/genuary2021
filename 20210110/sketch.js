const DEBUG = false;
let angle=0;
let slidera;
let sliderl;
let sliderr;
let left, right;

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  slidera = createSlider(-0.1, 0.1, 0,0.001);
  sliderl = createSlider(0, 1, 0.6,0.01);
  sliderr = createSlider(0, 1, 0.84,0.01);
  
}

function draw() {
  background(51);  
  stroke(255,255,255,255);
  noFill();

  inc = slidera.value();
  left = sliderl.value();
  right = sliderr.value();
  
  branch({x:200, y:300}, 50,angle,1);
  angle +=inc;
  
}

function branch(root, len, angle, dir) {
  
  if (len < 5) return;
  strokeWeight(len/5);
  // noStroke();
  fill("#A6373F");
  noFill();
  push();
  translate (root.x, root.y);
  rotate(angle);

  // line(0,0,tilt,-len);
  curve(len*dir,0,0,0,0,-len,len*dir,len*dir);

  branch({x:0, y:-len}, len*left,-angle,dir*-1);
  branch({x:0, y:-len}, len*right,angle, dir);
  // branch({x:0, y:0}, len*left,-angle,dir*-1);
  
  // line(0,0, 0,-len)
  
  // branch({x:0, y:-len}, len*0.5, PI/3);
  // branch({x:0, y:-len*0.75}, len*0.5, -PI/3);
  // branch({x:0, y:-len}, len*0.5, PI/3);
  // branch({x:0, y:-len}, len*0.5, -PI/3);

  
  // branch({x:8,y:-len*0.6},len*0.6,PI/2);
  

  // console.log(-.1*len,0);
  // branch({x:tilt,y:-len},len*0.5,-PI/2);
  // branch({x:tilt,y:-len},len*0.5,PI/4);


  
  pop();
  

}