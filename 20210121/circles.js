const DEBUG = false;
/**
 * function f(x) { 
    DRAW(x); 
    f(1 * x / 4); 
    f(2 * x / 4); 
    f(3 * x / 4); 
}
 * 
 */

let radius = 200;
let sw = 20;
let t;
let colors;

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  t=0;
  colors = ["#A6373F", "#AA8E39", "#343477", "#3C8D2F", "#59c8c0", "#5571c6", "#cbcb88", "#c372d0"];
    rectMode(CENTER);
  
  background(220);
}

function draw() {

  stroke(0);
//   translate(width / 2, height / 2);


render(width*2,sw);

t+=0.01;

  noLoop();
}

function render(x) {
  
    r = x
    if (r<30) {
        return;
    }
    push();
    translate(width/2,height/2);
    rotate(noise(r)*PI);
    noStroke();
    let fillCol = color(colors[floor(random(colors.length))]);
    fillCol.setAlpha(100);
    fill(fillCol);
  rect(0,0,r*noise(r),r*noise(r*r));
  rect(0,0,r*noise(r),r);
  rect(0,0,r,r*noise(r));
//   rect(0,0,r/2,r/2);
//   rect(r*noise(r),0,r,r);
pop();

  if (r > 10) {
    render ((1 * r / 4)); 
    render ((2 * r / 4)); 
    render ((3 * r / 4)); 

  }

}
