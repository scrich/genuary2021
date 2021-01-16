const DEBUG = false;

const scl = 60;
let noCircles;
let circles = [];
let f; // frames


function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  ellipseMode(CENTER);
  f=0;

  // setup circles

  for (let i = scl; i < width; i+=scl) {
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    circles.push(new myCircle(0,0,i/2,0,random(0.01,0.03)*plusOrMinus))
  }
  
  stroke(color("lightgray"));
  strokeWeight(100);
  noFill();
  
  ellipse(width/2,height/2,width+scl*1.6)
}

function draw() {
  background(220);  
  stroke(color("lightgray"));
  strokeWeight(100);
  noFill();
  
  ellipse(width/2,height/2,width+scl*1.6)
  noCircles = width/scl;
translate(width/2, height/2);
noFill();

for (const c of circles) {
  c.render();
  c.update();
}

f++

  
}

class myCircle {
  constructor(x,y,r,angle,speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.t = angle;
    this.speed = speed;
    this.pos = createVector(this.x+this.r*cos(this.t), this.y+this.r*sin(this.t));
    this.pos.setMag(r);
    // this.c = new myCircle(
    //   this.x+this.r*cos(this.t), this.y+this.r*sin(this.t))
  }

  update() {
    this.t+=this.speed;
    this.pos.rotate()
  }

  render() {
    stroke(127);
    strokeWeight(1);
    noFill();
    ellipse(this.x, this.y, this.r*2);
    fill(0);
    ellipse(this.x+this.r*cos(this.t), this.y+this.r*sin(this.t),4);
    ellipse(this.pos.x, this.pos.y, 10);
  }
}