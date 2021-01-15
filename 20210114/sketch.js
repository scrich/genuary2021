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
  sketch_scale = 80;
  colors = ["#A6373F", "#AA8E39", "#343477", "#3C8D2F", "#59c8c0", "#5571c6", "#cbcb88", "#c372d0"]

  for (let x = 0; x < width; x += sketch_scale) {
    console.log(x);
    for (let y = 0; y < height; y += sketch_scale) {
      s.push(new Sas(x, y, sketch_scale, colors[floor(random(colors.length))]));
    }
  }


  // s.push(new Sas(80,80,160,"#A6373F"));
  // s.push(new Sas(250,50,100, "#AA8E39"));
  // s.push(new Sas(50,250,100, "#343477"));
  // s.push(new Sas(250,250,100, "#3C8D2F"));

}

function draw() {
  background(220);

  for (const sas of s) {
    sas.update(t);
    sas.render();
    if (frameCount % 400 == 200) {
      sas.state = "UNSPLITTING";
    }
    if (frameCount % 400 == 0) {
      sas.state = "SPLITTING";
    }
  }



  t+=0.0001;
}

