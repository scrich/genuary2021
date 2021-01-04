const DEBUG = false;
let s=[];


function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  strokeJoin(ROUND);
  s.push(new Sas(50,50,100,color("red")));
  s.push(new Sas(200,50,100, color("green")));
  s.push(new Sas(50,200,100, color("blue")));
  
}

function draw() {
  background(220);  
  for (const sas of s) {
    sas.render();
  }
}

class Sas {
  constructor(x,y, size, col) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.p = random(size);
    this.col1 = col;
  }

  

  render() {
    let points = [
      {x:0,y:0},
      {x:this.p,y:0},
      {x:this.size-this.p, y: this.size},
      {x:0, y:this.size}
    ];
    
    strokeWeight(4);
    // strokeJoin(ROUND);
    push();
    translate(this.x,this.y);
    fill(this.col1);
    beginShape()
    for (let point of points) {
      vertex(point.x, point.y);
    }
    endShape(CLOSE);

    fill(0);
    for (let point of points) {
      // circle(point.x, point.y, this.size/20);
    }
    
    
    line(this.p,0,this.size-this.p,this.size);
    pop();
  }
}

function compCol(col) {
  
}