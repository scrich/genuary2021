const DEBUG = false;
let s=[];
let t=0;
let scale;
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
  let can = createCanvas(410, 410);
  // let can = createCanvas(displayWidth, displayHeight);
  can.parent("canvas");
  strokeJoin(ROUND);
  scale = 80;
  colors = ["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"];
  // colors =  ["#A6373F", "#AA8E39", ""#343477"", "#3C8D2F", "#59c8c0", "#5571c6","#cbcb88","#c372d0"]

  for (let x = 10; x < width; x+=scale) {
    console.log(x);
    for (let y = 10; y < height; y+=scale) {
      s.push(new Sas(x, y, scale*0.8, colors[floor(random(colors.length))],colors[floor(random(colors.length))]));
    }
  }
  // frameRate(2);
  // s.push(new Sas(50,50,70,"#A6373F"));
  // s.push(new Sas(250,50,100, "#AA8E39"));
  // s.push(new Sas(50,250,100, "#343477"));
  // s.push(new Sas(250,250,100, "#3C8D2F"));
  
}

function draw() {
  background(0);  
  // s=[];
  // s.push(new Sas(50,50,100,"#A6373F"));
  // s.push(new Sas(250,50,100, "#AA8E39"));
  // s.push(new Sas(50,250,100, "#343477"));
  // s.push(new Sas(250,250,100, "#3C8D2F"));
  for (const sas of s) {
    sas.update(t);
    sas.render();
  }

  t+=0.001;
}

