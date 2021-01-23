class Sas {
  constructor(x,y, size, col, col2) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.pNoise = new NoiseLoop(random(80,100),size*0.1, size*0.9);
    this.p = this.pNoise.value(0);
    this.col1 = color(col);
    this.col2 = color(col2);
    this.rotate = floor(random(2));
  }


  update(t) {
      this.p = this.pNoise.value(t);
  }

  render() {
    let points = [
      {x:0,y:0},
      {x:this.p,y:0},
      {x:this.size-this.p, y: this.size},
      {x:0, y:this.size}
    ];
    curveTightness(0)
    strokeWeight(this.size/25);
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
      strokeWeight(this.size/25);

      line(this.p/2,0,this.p/2,this.size/4);
      circle(this.p/2,0,this.size/10);
      circle(this.p/2,this.size/4, this.size/5);
      circle(this.p/2,this.size/4, this.size/11);

      
      for (let point of points) {
        // circle(point.x, point.y, this.size/10);
      }
           
      strokeWeight(this.size/25);
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
      strokeWeight(this.size/25);

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