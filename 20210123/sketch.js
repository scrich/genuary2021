let shape = [];

/*

colors

burnt umber 8a3324
raw umber 826644
yellow ochre c69d06
yellow cadmium deep fff600
titanium buff f0dc82
mars black 424746

*/

let colors = ["#8a3324","#826644","#c69d06","#fff600","#f0dc82","#424746"]

function setup() {
  createCanvas(500, 500);
  fill(colors[floor(random(5))])
  background(colors[floor(random(5))]);

  for (let c = 0; c < 10; c++) {
  for (let d = 0; d < 10; d++) {
    shape.push(new Roof_e(50*d, c*50, 50, floor(random(4)),floor(random(5))));
  }
}


}

function draw() {
  

  for (s of shape) {
  s.render();
  }

  // beginShape();
  // vertex(100, 300);
  // vertex(300, 100);
  // vertex(300, 300);
  // endShape(CLOSE);

  // r = 50;
  // cx = 200, cy = 200;
  // beginShape();
  // for (t = 0; t < TAU; t += 0.1) {
  //   vertex(cx + r * sin(t), cy + r * cos(t));
  // }
  // endShape(CLOSE);
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

class Roof2 {
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
    beginContour();
    for (let t = 0; t < TAU; t += 0.1) {
      vertex(this.cx + this.r * sin(t), this.cy + this.r * cos(t));
    }
    endContour(CLOSE);
    endShape(CLOSE);

  }
}

class Roof3 {
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
    beginContour();
    for (let t = TAU; t > 0; t -= 0.1) {
      vertex(this.cx + this.r * sin(t), this.cy + this.r * cos(t));
    }
    endContour(CLOSE);
    endShape(CLOSE);

  }
}

class Roof4 {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.cx = x + w*.7;
    this.cy = y + w*.7;
    this.r = w/6;
  }

  render() {
    stroke(0);
    beginShape();
    vertex(this.x, this.y + this.w);
    vertex(this.x + this.w, this.y);
    vertex(this.x + this.w, this.y + this.w);
    beginContour();
    for (let t = 0; t < TAU; t += 0.1) {
      vertex(this.cx + this.r * sin(t), this.cy + this.r * cos(t));
    }
    endContour(CLOSE);
    endShape(CLOSE);

  }
}

class Roof_c {
  constructor(x, y, w, cx_, cy_) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.cx = x + w*cx_;
    this.cy = y + w*cy_;
    this.r = w/6;
  }

  render() {
    stroke(0);
    beginShape();
    vertex(this.x, this.y + this.w);
    vertex(this.x + this.w, this.y);
    vertex(this.x + this.w, this.y + this.w);
    beginContour();
    for (let t = 0; t < TAU; t += 0.1) {
      vertex(this.cx + this.r * sin(t), this.cy + this.r * cos(t));
    }
    endContour(CLOSE);
    endShape(CLOSE);

  }
}

class Roof_d {
  constructor(x, y, w, cx_, cy_, dir) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.cx = x + w*cx_;
    this.cy = y + w*cy_;
    this.r = w/6;
    this.dir = dir;
  }

  render() {
    stroke(0);
    beginShape();
    // some funky logical exclusion of one condition
     (this.dir !=1) && vertex(this.x, this.y) ;
     (this.dir !=2) && vertex(this.x + this.w, this.y) ;
     (this.dir !=3) && vertex(this.x + this.w, this.y + this.w) ;
     (this.dir !=4) && vertex(this.x, this.y + this.w) ;
    beginContour();
    for (let t = 0; t < TAU; t += 0.1) {
      vertex(this.cx + this.r * sin(t), this.cy + this.r * cos(t));
    }
    endContour(CLOSE);
    endShape(CLOSE);

  }
}

class Roof_e {
  constructor(x, y, w, dir, circ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.cx = x + w/2;
    this.cy = y + w/2;
    this.r = w/6;
    this.dir = dir;
    this.circ = circ; //0 to 4
    // 0 is central then
    // 1 2
    // 3 4 
    this.cx = this.cx + 0.2*w*(circ==2 || circ==3) - 0.2*w*(circ==1 || circ==4);
    
    this.cy = this.cy + 0.2*w*(circ==3 || circ ==4) - 0.2*w*(circ==1 || circ==2);
  }

  render() {
    stroke(0);
    noStroke();
    
    beginShape();
    // some funky logical exclusion of one condition
     (this.dir !=1) && vertex(this.x, this.y) ;
     (this.dir !=2) && vertex(this.x + this.w, this.y) ;
     (this.dir !=3) && vertex(this.x + this.w, this.y + this.w) ;
     (this.dir !=4) && vertex(this.x, this.y + this.w) ;
    beginContour();
    for (let t = 0; t < TAU; t += 0.1) {
      vertex(this.cx + this.r * sin(t), this.cy + this.r * cos(t));
    }
    endContour(CLOSE);
    endShape(CLOSE);

  }
}

