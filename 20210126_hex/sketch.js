const DEBUG = true;
let scl = 40;
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
let rot;
let t;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// use a hexagonal grid, centred at zero

let floormap = new Map;

function setup() {
    let can = createCanvas(400, 400);
    can.parent("canvas");
    angleMode(DEGREES);
    spacing = 1 / (sin(30));
    floormap.set([1, 0], 1);
    current = [0, 0];
    rows = floor(0.7 * height / scl);
    qols = floor(1.2 * width / scl);
    hexes = make2DArray(qols, rows);
    heal_rate = 0.01;
    slider = createSlider(0, 1, 0, 0.01);
    slider.parent("r");
    labelr = createP("");
    labelr.parent("r");
    // frameRate(20);


    for (let q = 0; q < qols; q += 2) {
        for (let r = 0; r < rows; r += 2) {
            hexes[q][r] = new Hex(q, r, scl);
        }
    }
    for (let q = 1; q < qols; q += 2) {
        for (let r = 1; r < rows; r += 2) {
            hexes[q][r] = new Hex(q, r, scl);
        }
    }

    // hexes[10][6].infect();
    rot = 0;
    t = 0;
}

function draw() {
    background(127);

    // translate(width / 5, height / 5);
    // rot = slider.value();
    labelr.html(t);
    // translate(0.5*scl,scl);

    // for (const hex of hexes) {
    //     for (const h of hex) {
    //        if (h) {
    //            h.render_iso(rot); 
    //        }
    //     }
    // }

    for (let q = 0; q < qols; q += 2) {
        for (let r = 0; r < rows; r += 2) {
            hexes[q][r].render_iso(180 * easeInOutQuint(abs(sin(t))));
        }
    }
    for (let q = 1; q < qols; q += 2) {
        for (let r = 1; r < rows; r += 2) {
            hexes[q][r].render_iso(120 * easeInOutQuint(abs(sin(t))));
        }
    }


    t+=0.2;
    t=t%180;
    
    
    // noLoop();
}

function easeInOutSine(x) {
    return -(sin(PI * x) - 1) / 2;
}


function easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
}

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}



