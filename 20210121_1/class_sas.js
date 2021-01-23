class Sas {
  constructor(x, y, size, col) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.pNoise = new NoiseLoop(random(80, 100), size * 0.1, size * 0.9);
    this.p = this.pNoise.value(0);
    this.col1 = color(col);
    this.col2 = color(compCol(col));
    this.rotate = floor(random(2));
    // this.rotate = 0;
    this.state = "ADULT";
    this.split_amount = 1;
    // this.ysize = this.size;
  }


  update(t) {
    this.p = this.pNoise.value(t);
    if (this.state == "SPLITTING") {
      if (this.split_amount>0) {
      this.split_amount -= 0.01;
      } else {
        //this.state = "UNSPLITTING";
      }
    }
    if (this.state == "UNSPLITTING") {
      if (this.split_amount < 1) {
      this.split_amount += 0.01;
      } else {
        //this.state = "SPLITTING";
      }
    }
  }

  render() {
    // this.joined();
    this.split(this.p * this.split_amount,this.size* this.split_amount);
  }

  split(split_amount, ysize) {
    let points = [
      { x: 0, y: 0 },
      { x: split_amount, y: 0 },
      { x: this.size - this.p, y: ysize },
      { x: 0, y: ysize }
    ];
    curveTightness(0)
    strokeWeight(this.size / 25);
    // strokeJoin(ROUND);
    push();
      translate(this.x, this.y);
      push();
        // translate(this.size * 0.15, this.size * 0.15);
        // scale(0.7);
          if (this.rotate == 1) {
            translate(this.size, 0);
            rotate(PI / 2);
          }

          // draw square side
          this.drawSide(points, this.col1, true);

          // draw curve side
          push();
            translate(this.size, this.size);
            rotate(PI);

            this.drawSide(points, this.col2, true);

          pop();
        pop();
      pop();
  }

  

  joined() {
    let points = [
      { x: 0, y: 0 },
      { x: this.p, y: 0 },
      { x: this.size - this.p, y: this.size },
      { x: 0, y: this.size }
    ];
    curveTightness(0)
    strokeWeight(this.size / 25);
    // strokeJoin(ROUND);
    push();
      translate(this.x, this.y);
      push();
        // translate(this.size * 0.15, this.size * 0.15);
        // scale(0.7);
          if (this.rotate == 1) {
            translate(this.size, 0);
            rotate(PI / 2);
          }

          // draw square side
          this.drawSide(points, this.col1, true);

          // draw curve side
          push();
            translate(this.size, this.size);
            rotate(PI);

            this.drawSide(points, this.col2, true);

          pop();
        pop();
      pop();
  }

  drawSide(points, col, bCurved) {
    fill(col);
    beginShape();
    
    for (let point of points) {
      bCurved ? curveVertex(point.x, point.y) : vertex(point.x, point.y);
    }

    endShape(CLOSE);

    // this.drawCircles(this.p / 2, this.size / 4);
    this.drawCircles(points[1].x/2, this.size/4);
  }

  drawCircles(edgepoint, len) {
    fill(255);
    stroke(0);
    strokeWeight(this.size / 25);

    line(edgepoint, 0, edgepoint, len);
    ellipse(edgepoint, 0, this.size / 5);
    ellipse(edgepoint, 0, this.size / 11);
    ellipse(edgepoint, len, this.size / 5);
    ellipse(edgepoint, len, this.size / 11);
  }
}

function compCol(hexstring) {
  return "#" + (parseInt(hexstring.slice(1,), 16) ^ 0xffffff).toString(16).padStart(6, "0")
}