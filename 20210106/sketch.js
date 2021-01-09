const DEBUG = false;
let vertices = []
let xi, yi, t;
let inc = 0.001;

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  strokeJoin(ROUND);
  curveTightness(0);
  xi = 400;
  yi = 800;
  t = 0;
  colors = ["#A6373F", "#AA8E39", "#343477", "#3C8D2F", "#59c8c0", "#5571c6", "#cbcb88", "#c372d0"]

}

function draw() {


  background(220);
  for (let j = 1; j < 4; j++) {
    for (let i = 0; i < 3; i++) {
      vertices[i] = pickapoint(xi * i * j, yi * i * j, t);
    }
    tri(vertices, colors[j % colors.length]);
  }

  // if (frameCount < 120) {
  //   saveCanvas("tri", "png");
  // }

  t += inc;
   
}

function tri(v, col) {
  // triangle too small - return
  if (pow(v[1].x - v[0].x, 2) + pow(v[1].x - v[2].x, 2) < 300 || pow(v[1].y - v[0].y, 2) + pow(v[1].y - v[2].y, 2) < 100) return;

  fill(color(col));
  stroke(0);
  beginShape()
  for (const corner of v) {
    vertex(corner.x, corner.y);
    // circle(corner.x, corner.y, 10);
  }
  endShape(CLOSE);
  let midpoints = [
    { x: (v[0].x + v[1].x) / 2, y: (v[0].y + v[1].y) / 2 },
    { x: (v[1].x + v[2].x) / 2, y: (v[1].y + v[2].y) / 2 },
    { x: (v[2].x + v[0].x) / 2, y: (v[2].y + v[0].y) / 2 }];
  let tri0 = [
    { x: (v[0].x + v[1].x) / 2, y: (v[0].y + v[1].y) / 2 },
    { x: v[0].x,                y: v[0].y },
    { x: (v[2].x + v[0].x) / 2, y: (v[2].y + v[0].y) / 2 }
  ];
  let tri1 = [
    { x: (v[0].x + v[1].x) / 2, y: (v[0].y + v[1].y) / 2 },
    { x: (v[1].x + v[2].x) / 2, y: (v[1].y + v[2].y) / 2 },
    { x: v[1].x,                y: v[1].y }
  ];
  let tri2 = [
    { x: v[2].x, y: v[2].y },
    { x: (v[1].x + v[2].x) / 2, y: (v[1].y + v[2].y) / 2 },
    { x: (v[2].x + v[0].x) / 2, y: (v[2].y + v[0].y) / 2 }
  ];
  // recursively call this function
  tri(midpoints, compCol(col));
  tri(tri0,col);
  // tri(tri1, col);
  tri(tri2, col);
}

function pickapoint(xi, yi, t) {
  return { x: noise(xi, t) * width, y: noise(yi, t) * height };
}

function compCol(hexstring) {
  return "#" + (parseInt(hexstring.slice(1,), 16) ^ 0xffffff).toString(16).padStart(6, "0")
}