const DEBUG = false;

let steps = [];
let t;
let cps;
let cpe;
let next;
let current;
let bp;
const COLORS =  ["#A6373F", "#AA8E39", "#343477", "#3C8D2F", "#59c8c0", "#5571c6","#cbcb88","#c372d0"]

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  t=0;
  bp = {x:0, y:0};
  next = {x:20,y:20};
  current = {x:0, y:0};
}

function draw() {
  // background(220);  

  stroke(color(COLORS[floor(random(COLORS.length))]));
  translate(width/2, height/2);
  

  

  cps = {x:-20, y:0};
  cpe = {x:20, y:40};

  bp.x = next.x-current.x;
  bp.y = next.y-current.y;
  // bp = {x:10,y:10};
  
  // curve
  // curvehere(cps, current, next, cpe);
  // bezierhere(current,next, bp);
  linehere(current,next, bp);


  next.x = current.x
  next.y = current.y;

  current.x = current.x + random(-20,20);
  current.y = current.y + random(-20,20);

  // control points
  // pointhere(cps);
  // pointhere(cpe);
  // pointhere(bp);

  // noLoop();
  
}

function bezierhere(start,end,bp) {
  strokeWeight(10);
  strokeCap(SQUARE);
  noFill();
  bezier(
    start.x, start.y,
    bp.x,  bp.y,
    bp.x,  bp.y,
    end.x, end.y
    );
}

function linehere(start,end,) {
  strokeWeight(10);
  strokeCap(SQUARE);
  noFill();
  curve(
    start.x, start.y,
    start.x, start.y,
    end.x, end.y,
    end.x, end.y
    );
}

function curvehere(cps,start,end,cpe) {
  strokeWeight(10);
  strokeCap(SQUARE);
  noFill();
  curve(
    cps.x, cps.y,
    start.x, start.y,
    end.x, end.y,
    cpe.x, cpe.y
    );
}

function pointhere(point) {
  stroke(0);
  strokeWeight(1);
  ellipse(point.x, point.y, 5);
}