const DEBUG = false;
let r;

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  r = new NoiseLoop(4,20,100);
  
}

function draw() {
  background(220);  

  /** 
   * head - a spiral
   */
  translate(width/2, height/2);
  noFill();
  strokeWeight(3);
  beginShape();
  for (let t = 0; t < TAU; t+=0.01) {
    let angle = t*5; // go round three times
    let rad = r.value(t);
    const x = rad * sin(angle);
    const y = rad * cos(angle);
    vertex(x,y);
  }
  endShape(CLOSE);
 
}