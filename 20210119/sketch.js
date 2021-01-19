
// let xoff2 = 1000;
let slider;
let start = 0;
let c;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0,0.1,0.05,0)

}

function draw() {

 

  rate = slider.value();
  background(51);
  stroke(255);
  noStroke();


  mountain();

  start += rate;


  // noLoop();
}

function mountain() {
  fill(113, 232, 211);
  beginShape();
  let xoff = start;
  for (let x = 0; x < width + 1; x++) {
    // stroke(255);
    noStroke();
    //let y = random(height);
    let y = noise(xoff) * height / 2;
    vertex(x, y);

    xoff += rate;
  }
  vertex(width, height);
  vertex(0, height);
  endShape();
}

