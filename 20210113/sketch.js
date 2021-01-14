const DEBUG = false;

let x;
let y;
let size;
let t;
let r;

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  background(color("lightgray"));  
  fill(255);
  noStroke();
  ellipse(width/2,height/2,width);
  t=0;
  x=10;
  y=20;
  size=11;
  r=1;

}

function draw() {
  // background(51);  
  translate(width/2,height/2);
  
  // noStroke();
  fill(0);
  //console.log(size*noise(size,t));
  x = x*noise(x,t)*sin(t)
  size = 12*(abs(noise(size,t)*noise(t))%5);
  //console.log(size);
  ellipse(r*sin(t), r*cos(t),size*noise(size,t));
  // t+=0.005;
  // t+=-0.06 + 0.05*noise(t,size);
  t+=0.005*noise(t,size);
  r+=-0.6+noise(r,t);
  //console.log(size);
}