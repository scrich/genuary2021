let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(255);
  // ambientLight(255);
  directionalLight(255, 255, 0, 1, 1, 0);
  // pointLight(0,0,255,200,0,0);
  rectMode(CENTER);
  noStroke();
  // fill(200,100,50);
  // normalMaterial();
  // ambientMaterial(255,255,255);
  specularMaterial(255, 255, 255);
  // translate(mouseX-width/2, mouseY-height/2);

  // translate(width/2, height/2);
  rotateX(angle);
  rotateY(angle * 2);
  rotateZ(angle / 2);

  for (let c = -1; c < 1; c++) {
    for (let d = -1; d < 1; d++) {

      push();
      translate(d * 60, 0, c * 60);

      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          for (let z = 0; z < 5; z++) {
            push();
            translate(x*sin(angle) * 10, y*cos(angle) * 20, z * 10);
            cylinder(2, 17);
            pop();
          }
        }
      }
      pop();
    }
  }

  angle += 0.01;
}
