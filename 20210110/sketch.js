const DEBUG = false;



function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  
}

function draw() {
  background(51);  
  stroke(255);
  noFill();

  branch({x:200, y:350}, 100,0);

}

function branch(root, len, angle) {
  
  if (len < 1) return;
  strokeWeight(len/10);
  push();
  translate (root.x, root.y);
  rotate(angle);
  line(0,0, 0,-len)
  
  branch({x:0, y:-len}, len*0.5, PI/3);
  branch({x:0, y:-len*0.75}, len*0.5, -PI/3);
  // branch({x:0, y:-len}, len*0.5, PI/3);
  // branch({x:0, y:-len}, len*0.5, -PI/3);
  pop();
  

}