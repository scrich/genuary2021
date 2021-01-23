const DEBUG = false;
let t;
let scale;



function setup() {
  let can = createCanvas(400,400);
  can.parent("canvas");
  t = 0;
  scale = 20;
  // colors = ["#A6373F", "#AA8E39", "#343477", "#3C8D2F", "#59c8c0", "#5571c6", "#cbcb88", "#c372d0"]
  // colors = ["#6d08a1", "#f15400", "#009f6f", "#edf100"]
  colors = ["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"];


}

function draw() {
  background(0);
  stroke(0);
  noFill();
  strokeWeight(1);

  noStroke();
  fill(color(colors[floor(random(colors.length))]));

  console.log("starting rect");
  for (let i = 0; i < width; i+=scale) {
    console.log(i);
    for (let j = 0; j < height; j+=scale * 2) {
      fill(color(colors[floor(random(colors.length))]));
      console.log(j);
      rect(i, j, scale, scale * 2);
      log(i,j);
    }
  }
  console.log("ending rect");

  translate(width/2, height/2);
  circle(0,0, 10);

  strokeCap(SQUARE);
   noFill();

  for (let layer = 0; layer < 0.5*width/scale; layer++) {
    let r = (2 * layer * scale) + scale;
    console.log(layer, r);
    let c = TAU * r;
    let factor = 0.5;
    let offset = random()*(factor * scale * TAU)/r
    
    /**
     * length of arc l
     * 
     * arclen = r * angle/TAU  
     * arclen * TAU = r * angle
     * angle  = (arclen * TAU ) / r
     */
    for (let angle = offset; angle < TAU+offset; angle += (factor * scale * TAU)/r) {
      stroke(color(colors[floor(random(colors.length))]));
      strokeWeight(scale);

      arc(0,0, r, r, angle, angle + (factor * scale * TAU)/r);

    }
    // stroke(0);
    // strokeWeight(1);
    // circle(0,0, r);
  }
  t += 0.01;
  noLoop();
}