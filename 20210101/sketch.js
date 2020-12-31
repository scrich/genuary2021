let r = 100;
let t = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width/2, height/2); // centre on the centre
  stroke(127,127,127,50);
  fill(255,0,0);
  noFill();
  circle (0,0,200);
  for (let angle = 0; angle < TAU; angle+=PI/3) {// add another bit on to the increment
    let x = r * sin(angle+t);
    let y = r * cos(angle+t);
    noFill();
    circle(x,y,100);
    for (let angle1 = angle; angle1 < TAU+angle; angle1+=PI/3) {
      let x1 = x + r*sin(angle1);
      let y1 = y + r*cos(angle1);
      fill(0,255,0);
      circle(x1, y1,10);
      line(x,y,x1,y1);
      noFill();
      stroke(127,127,127,100);
      circle(x1,y1,50);
      for (let angle2 = angle1; angle2 < TAU+angle1; angle2+=PI/3) {
        let x2 = x1 + 0.5*r*sin(angle2);
        let y2 = y1 + 0.5*r*cos(angle2);
        fill(255,0,0);
        circle(x2, y2,10);
        line(x1,y1,x2,y2);
        noFill();
        stroke(127,127,127,50);
        
      }
    }
  }
  t+=0.005
}
