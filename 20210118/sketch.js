const { Noise } = require("../../../.vscode/extensions/samplavigne.p5-vscode-1.2.4/p5types");

const DEBUG = false;



function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  
}

function draw() {
  background(220);  
}

class Thingy {
  constructor() {
    this.x = new NoiseLoop(0.1, 0.1* width, 0.9*width);
    this.y = new NoiseLoop(0.4, 10, height/4);
    this.h = new NoiseLoop(0.8, )
  }
}