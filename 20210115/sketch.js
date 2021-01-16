const DEBUG = true;
let scl = 8;
let spacing;
let current;
let next;
let rows;
let qols;
let hexes;
let heal_rate;
let R;
let slider;
let labelr;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// use a hexagonal grid, centred at zero

let floormap = new Map;

function setup() {
    let can = createCanvas(400, 400);
    can.parent("canvas");
    angleMode(DEGREES);
    spacing = 1 / (sin(30));
    floormap.set([1, 0], 1);
    current = [0,0];
    rows = floor(0.7*height/scl);
    qols = floor(1.2*width/scl);
    hexes = make2DArray(qols, rows);
    heal_rate = 0.01;
    slider = createSlider(0,5,1,0.01);
    slider.parent("r");
    labelr = createP("");
    labelr.parent("r");
    // frameRate(20);


    for (let q = 0; q < qols; q+=2) {
        for (let r = 0; r < rows; r+=2) {
            hexes[q][r] = new Hex(q,r,scl);
        }
    }
    for (let q = 1; q < qols; q+=2) {
        for (let r = 1; r < rows; r+=2) {
            hexes[q][r] = new Hex(q,r,scl);
        }
    }

    hexes[10][6].infect();
}

function draw() {
    background(127);

    // translate(width / 5, height / 5);
    R = slider.value();
    labelr.html(R);
    // translate(0.5*scl,scl);

    for (const hex of hexes) {
        for (const h of hex) {
           if (h) {
               h.render();         // don't render if it's empty 
               h.heal();

               // assess risk
            //    console.log(h);
               h.check_neighbours();
               // infect or heal AFTER all calculations
                // if (frameCount % 10 == 0) {
               h.assess_risk();
                // }
            //    h.update();
           }
        }
        
    }

    // noLoop();
}

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }



function keyPressed() {
    let q = floor(qols/2);
    let r = floor(rows/2);
    console.log(q,r);
    if ((q+r)%2 == 1) {r++}
    console.log(q,r);
    hexes[q][r].infect();
}