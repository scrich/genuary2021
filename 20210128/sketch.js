const DEBUG = false;

var wave;
// var context  = new AudioContext();
let button;
let playing;
let env;

function setup() {
  let can = createCanvas(100, 100);
  can.parent("canvas");
  playing = true;

  button = createButton("play/pause");
  button.mousePressed(playpause);

  env = new p5.Env();
  env.setADSR(1,2,0.3,3);
  env.setRange(0.8,0);


  wave = new p5.Oscillator();
  wave.setType('sawtooth');
  wave.start();
  wave.amp(env);
  wave.freq(220);




}

function playpause() {
  env.play();
  // console.log("playpause");
  // console.log(playing);
  // if (!playing) {
  //   console.log(playing);
  //   wave.amp(0.25,1);
  //   playing = true;
  // } else {
  //   console.log(playing);
  //   playing = false;
  //   wave.amp(0,1);
  //   console.log(playing);
  // }
}

function draw() {
  if (playing) {
    background(color("black"));
  } else {
    background(color("red"));
  }
  wave.freq(mouseY);
  textAlign(CENTER, CENTER);
  text(getAudioContext().state, width / 2, height / 2);
}

function mousePressed() {
  userStartAudio();
}