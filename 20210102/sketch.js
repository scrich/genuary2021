const DEBUG = false;

let elements = 31;
let layers = 66;
let rmax = 100;
let grid; // 2d array for previous iterations
let next=[]; // 1d array for the first row

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  grid = make2DArray(layers, elements);
  frameRate(5);

  //initialise first layer
  for (let i = 0; i < grid[0].length; i++) {
    grid[0][i] = 0;
  }
  grid[0][0]=1;

}
/**
 * we need an array of numbers for all the rows that fit on the screen
 * let's say 10 layers
 * 
 * then loop - look another triple nested loop!
 */

function draw() {
  background(0);
  
  translate(width / 2, height / 3);
  
  // render the current grid
  for (let i=0; i<layers; i++) {
    let r = 5+i*i/10; //radius
    for (let j = 0; j < elements; j++) {
      let t = (j / elements) * TAU
      //console.log(i,t);
      const x = r * sin(t);
      const y = r * cos(t);
      fill(225 * grid[i][j],grid[i][j],0,150); // map this instead so it's less stark
      stroke(0);
      noStroke();
      circle(x, y, TAU * r / elements);
      // work out perimeter = TAU * r
    }
  }
  // calculate the next iteration

  next = applyRule(grid[0].slice());

  // shift layers downwards
  grid.unshift(next);
  grid.pop();
   // cycles the grid
  // but we will insert a new first row
  //

  // calculate new first layer
  //numbers.unshift(numbers.pop());
  // noLoop();  
}

function keyTyped() {
  if (key=="0") {
    saveCanvas("rule30", "jpg");
  }
  if (key == "o") {
    frameRate(frameRate()+1);
  }
  if (key == "k") {
    frameRate(frameRate()-1);
  }
}

function applyRule (arr) {
  // must work with a COPY of row 1!
  // simple rule to start with
  let next = [];
  for (let i = 0; i < arr.length; i++) {
    let p,q,r;
    // q is our cell, p is to the left, r is to the right
    if (i==0) {
      p = arr[arr.length-1];
    } else {
      p = arr[i-1];
    }
    if (i==arr.length-1) {
      r=arr[0];
    } else {
      r=arr[i+1];
    }
    q = arr[i];
    
    next[i] = rule30(p,q,r);
  }
  return next;
}

function rule30(p,q,r) {
  // p XOR (q OR r);
  // they must all be binary
  return p^(q|r);
  }

function applyRule_shift (arr) {
  // simple rule to start with
  arr.unshift(arr.pop());
  return arr;
}




function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}