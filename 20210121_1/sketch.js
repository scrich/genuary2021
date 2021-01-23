const DEBUG = false;
let s = [];
let t = 0;
let sketch_scale;
let colors = [];

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
  // let can = createCanvas(displayWidth, displayHeight);
  can.parent("canvas");
  strokeJoin(ROUND);
  sketch_scale = 400;
  colors = ["#A6373F", "#AA8E39", "#343477", "#3C8D2F", "#59c8c0", "#5571c6", "#cbcb88", "#c372d0"]

  make_sas(width*0.75);

}

function make_sas(size) {
  if (size < 30) {
    return;
  }
  s.push(new Sas((width-size)/2, (height - size)/2, size, colors[floor(random(colors.length))]));
  
  make_sas(3*size/4);
  make_sas(2*size/4);
  make_sas(1*size/4);
}

function draw() {
  background(220);

  
  for (const sas of s) {
    sas.update(t);
    sas.render();
    // if (frameCount % 400 == 200) {
    //   sas.state = "UNSPLITTING";
    // }
    // if (frameCount % 400 == 0) {
    //   sas.state = "SPLITTING";
    // }
  }



  t+=0.0001;
}

