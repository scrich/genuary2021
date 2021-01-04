SHOW_NOISEFIELD = true;

let inc = 0.1;
let scl = 10; //scale

let fr; // for displaying frameRate

let particles = [];
let numParticles = 500;
let zoff;

let flowfield;


function setup() {
  createCanvas(400, 400);
  background(255);
  cols = floor(width/scl);
  rows = floor(height/scl);
  fr = createP('');
  zoff = 0;

  flowfield = new Array(cols*rows);

  for (let i=0; i < numParticles; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  SHOW_NOISEFIELD && background(220);
  
  let yoff = 0;
  
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {

      let index = x + y * cols;
      let angle = noise(xoff, yoff,zoff) * TWO_PI* 2;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.2);
      flowfield[index] = v;
      xoff += inc;
      if (SHOW_NOISEFIELD) {
      stroke(0,50);
      strokeWeight(1);
      push();
      translate(x*scl, y*scl);
      rotate(v.heading());
      line(0,0,scl,0);

      pop()
      }

    }
    yoff += inc;

    zoff += 0.00005;
  }

  for(let  i=0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }

  fr.html(floor(frameRate()));



}
