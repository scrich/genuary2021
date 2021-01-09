const DEBUG = false;
let gap;
let t;
let sliderg;
let slidergreen;
let sliderblue
let angle;
let labelgap;
  let labelgreen;
  let labelblue;
  let col1,col2,col3;


function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  sliderg = createSlider(1,20,3,0.1);
  sliderg.parent("gap");
  slidergreen = createSlider(-4,4,0,0.01);
  slidergreen.parent("green");
  sliderblue = createSlider(-4,4,0,0.01);
  sliderblue.parent("blue");
  angle=0;
  
  labelgap = createP("");
  labelgap.parent("gap");

  labelgreen = createP("");
  labelgreen.parent("green");

  labelblue = createP("");
  labelblue.parent("blue");

  col1 = color(255,0,0);
  col2 = color(0,255,0);
  col3 = color(0,0,255);

}

function draw() {
  background(0);  
  
  gap=sliderg.value();
  
  t1 = slidergreen.value();
  t2 = sliderblue.value();

  labelgap.html(gap)
  labelgreen.html(t1);
  labelblue.html(t2);

  translate(width/2, height/2);

  stroke(col1);
  strokeWeight(1);

  drawGrid();

  
  push();
  stroke(col2);
  rotate(t1);
  drawGrid()
  pop();

  push();
  stroke(col3);
  rotate(t2);
  drawGrid()
  pop();

  // now draw on top
  
  stroke(0);
  strokeWeight(40);
  strokeCap(SQUARE);
  noFill();

  //arc(0,0, 200, 200, 0+angle, PI+angle);
 

  angle +=0.01;

}

function drawGrid() {
  for (let i = -width; i < width; i += gap) {
    line(i, -height, i, height);
  }
}
