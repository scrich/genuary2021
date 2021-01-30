const DEBUG = false;
let flock = [];
let sliderAlign, sliderCohesion, sliderSeparation;
let wave;


function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");

  rectMode(CENTER);

  for (let i = 0; i < 30; i++) {
    flock.push(new Gen_boid());
  }
  sliderAlign = createSlider(0,5,1,0.1);
  sliderAlign.parent("align");
  labelAlign = createP("");
  labelAlign.parent("align");
  

  sliderCohesion = createSlider(0,5,1,0.1);
  sliderCohesion.parent("cohesion");
  labelCohesion = createP("");
  labelCohesion.parent("cohesion");

  sliderSeparation = createSlider(0,5,2,0.1);
  sliderSeparation.parent("separation");
  labelSeparation = createP("");
  labelSeparation.parent("separation");

  for (let boid of flock) {
    boid.startsing();
  }

  // frameRate(1);
}

function draw() {
  background(0);

  labelAlign.html(sliderAlign.value());
  labelCohesion.html(sliderCohesion.value());
  labelSeparation.html(sliderSeparation.value());

  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
    boid.sing();
  }
}

function mousePressed() {
  userStartAudio();
}