

let start = 0;


function setup() {
  can = createCanvas(400, 400);
  can.parent("canvas");
  // slider = createSlider(0,0.1,0.05,0)

}

function draw() {

 

  // rate = slider.value();
  rate = 0.01;
  background(51);

  for (let i = 100; i < height; i+=8) {
    let power =8*(height-i)/350;
    mountain(i,100,power, map(i,0,height,0,255));
  }
  start += rate*4;
}

function mountain(y0, amp, speed, col) {

  fill(col);
  noStroke();
  beginShape();
  let xoff = start;
  for (let x = 0; x < width + 1; x++) {
    let y = y0 +-amp + amp*noise(xoff,y0);
    vertex(x, y);
    xoff += rate*speed;
  }
  vertex(width, height);
  vertex(0, height);
  endShape();
}

