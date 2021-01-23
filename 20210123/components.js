let shape = [];
let bg; // background colour

/*

colors

burnt umber 8a3324
raw umber 826644
yellow ochre c69d06
yellow cadmium deep fff600
titanium buff f0dc82
mars black 424746

*/

//let colors = ["#8a3324","#826644","#c69d06","#fff600","#f0dc82","#424746"]

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.parent('sketch');

  let colors = [
    color(0x8a, 0x33, 0x24), 
    color(0x82, 0x66, 0x44), 
    color(0xc6, 0x9d, 0x06), 
    color(0xff, 0xf6, 0x00), 
    color(0xf0, 0xdc, 0x82), 
    color(0x42, 0x47, 0x46)]

  let f = colors[floor(random(colors.length))];
  bg = colors[floor(random(colors.length))];
background(bg);

  for (let c = 4; c >= 0; c--){
  for (let d = 0; d < 4; d++) {
    let f = colors[floor(random(colors.length))];
    shape.push(new Todesfabrik(c*random(80,120),d*random(80,120),350, f));
  }
}


}

function draw() {
  

  for (s of shape) {
  s.render();
  }

 noLoop();
}

class Roof1 {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.cx = x + w / 2;
    this.cy = y + w / 2;
    this.r = w/4;
  }

  render() {
    stroke(0);
    beginShape();
    vertex(this.x, this.y + this.w);
    vertex(this.x + this.w, this.y);
    vertex(this.x + this.w, this.y + this.w);
    endShape(CLOSE);

    beginShape();
    for (let t = 0; t < TAU; t += 0.1) {
      vertex(this.cx + this.r * sin(t), this.cy + this.r * cos(t));
    }
    endShape(CLOSE);
  }
}

