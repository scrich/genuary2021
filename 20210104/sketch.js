const DEBUG = false;
let s=[];

/**
 * colors - https://paletton.com/#uid=75A1f0kllll01sMaHp3vZhC+YdT
 * 
 * A6373F
 * AA8E39
 * 343477
 * 3C8D2F
 * 
 */

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  strokeJoin(ROUND);
  s.push(new Sas(50,50,100,"#A6373F"));
  s.push(new Sas(250,50,100, "#AA8E39"));
  s.push(new Sas(50,250,100, "#343477"));
  s.push(new Sas(250,250,100, "#3C8D2F"));
  
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
    this.p = random(size*0.2, size*0.8);
    this.col1 = color(col);
    this.col2 = color(compCol(col));
    this.rotate = floor(random(2));
  }

  

  render() {
    let points = [
      {x:0,y:0},
      {x:this.p,y:0},
      {x:this.size-this.p, y: this.size},
      {x:0, y:this.size}
    ];
    curveTightness(0)
    strokeWeight(4);
    // strokeJoin(ROUND);
    push();
    translate(this.x,this.y);
    
    if (this.rotate==1) {
    translate(this.size,0);
    rotate(PI/2);
    }

      fill(this.col1);
      beginShape()
      for (let point of points) {
        vertex(point.x, point.y);
      }
      endShape(CLOSE);

      fill(255);
      stroke(0);
      strokeWeight(4);

      line(this.p/2,0,this.p/2,this.size/4);
      circle(this.p/2,0,this.size/10);
      circle(this.p/2,this.size/4, this.size/5);
      circle(this.p/2,this.size/4, this.size/11);

      
      for (let point of points) {
        // circle(point.x, point.y, this.size/10);
      }
           
      strokeWeight(4);
      //line(this.p,0,this.size-this.p,this.size);
      push();
      translate(this.size, this.size);
      rotate(PI);
      fill(this.col2);
      beginShape()
      for (let point of points) {
        curveVertex(point.x, point.y);
      }
      endShape(CLOSE);

      fill(255);
      stroke(0);
      strokeWeight(4);

      line(this.p/2,0,this.p/2,this.size/3);
      circle(this.p/2,0,this.size/10);
      circle(this.p/2,this.size/3, this.size/5);
      circle(this.p/2,this.size/3, this.size/11);
      

      
           
      //line(this.p,0,this.size-this.p,this.size);
      for (let point of points) {
        // circle(point.x, point.y, this.size/10);
      }
      pop();
    pop();
  }
}

function compCol(hexstring) {
  return "#"+(parseInt(hexstring.slice(1,),16) ^ 0xffffff).toString(16).padStart(6,"0")
}