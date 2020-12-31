const DEBUG = false;

let r = 100;
let t = 0;

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  background(255);
}

function draw() {
  background(255);
  //  fill(255,255,255,40);
  //rect(0,0,width,height);
  translate(width/2, height/2); // centre on the centre
  stroke(127,127,127,50);
  fill(255,0,0);
  noFill();
  DEBUG && circle (0,0,200);
  for (let angle = t; angle < t+TAU; angle+=PI/2) {
    x = r * sin(angle);
    y = r * cos(angle);
    stroke(127,127,127,70);
    noFill();
    DEBUG && circle(x,y,r);
    for (let angle1 = angle+t; angle1 < angle+t+TAU; angle1+=PI/2) {
      const x1 = x + r * sin(angle1);
      const y1 = y + r * cos(angle1);
      stroke(127,0,0,200);
      noFill();
      DEBUG && circle(x,y,10);
      DEBUG && circle(x1,y1,r*0.5);
      for (let angle2 = angle1+t; angle2 < angle+angle1+t+TAU; angle2+=PI/2) {
        const x2 = x1 + r * sin(angle2);
        const y2 = y1 + r * cos(angle2);
        stroke(0,127,0,70);
        noStroke();
        fill(255*sin(angle2),255*cos(angle2),0,255);
        DEBUG && circle(x1,y1,10);
        circle(x2,y2,r*0.5*sin(angle2));
        
      }
    }
    
  }
  t+=0.001;
}