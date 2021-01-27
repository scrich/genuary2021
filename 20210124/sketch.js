const DEBUG = false;

let lines = [];
let slider;
let w;

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  slider = createSlider(0, 900, 10, 1);
  w = 0;

  let imax = 125;

  for (let i = 0; i < imax; i++) {
    lines.push(new MyLine(
      (i / imax) * width,
      0,
      width,
      (i / imax) * height)
    );

    lines.push(new MyLine(
      width,
      (i / imax) * height,
      ((imax - i) / imax) * width,
      height)
    );
    lines.push(new MyLine(
      ((imax - i) / imax) * width,
      height,
      0,
      ((imax - i) / imax) * height
    )
    );
    lines.push(new MyLine(
      0,
      ((imax - i) / imax) * height,
      (i / imax) * width,
      0
    )
    );
  }
  // for (let i = 250; i > 0; i--) {
  //   const l = new MyLine(0,0,width/i,height); 
  //   lines.push(l);
  // }

}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(DIFFERENCE);

  stroke(255);
  strokeWeight(slider.value());

  // strokeWeight(w);
  


    for (const l of lines) {
      line(l.start.x, l.start.y, l.end.x, l.end.y);
    }
  
    // if (w>900) {
    //   w = 0;
    // } else {
    //   w++;
    // }
}

class MyLine {
  constructor(x1, y1, x2, y2) {
    // console.log(x1);
    this.start = { x: x1, y: y1 };
    this.end = { x: x2, y: y2 };
  }
}
