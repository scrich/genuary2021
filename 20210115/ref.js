const DEBUG = true;
let scl = 20;
let spacing;
let current;
let next;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// use a hexagonal grid, centred at zero

let floormap = new Map;

function setup() {
    let can = createCanvas(400, 400);
    can.parent("ref");
    angleMode(DEGREES);
    spacing = 1 / (sin(30));
    floormap.set([1, 0], 1);
    current = [0,0];

}

function draw() {
    background(127);

    translate(width / 2, height / 2);

    for (let q = -6; q < 6; q+=2) {
        for (let r = -6; r < 6; r+=2) {
            drawHex(q, r, scl);
        }
    }
    for (let q = -5; q < 6; q+=2) {
        for (let r = -5; r < 6; r+=2) {
            drawHex(q, r, scl);
        }
    }

    // drawHex(1,1,scale);
    // drawHex(1,3,scale);
    // drawHex(3,1,scale);
    noLoop();
}

function drawHex(q, r, size) {
    // q - column
    // r - row

    /**
     * draw the centre
     * could just have circles in a hexagonal grid
     * - don't need to draw as hexagons
     */

    let x = q *           size * sqrt(3)/2;
    let y = (2*r) * size * 3      /4;

    console.log(q, q % 2);

    noFill();
    stroke(255);

    beginShape();
    for (let t = 0; t < 360; t += 60) {
        vertex(x + size * sin(t), y + size * cos(t));
    }
    endShape(CLOSE);

    text(q + ", " + r, x - size*.6, y);
}

function move(dir, current) {
    // e, se, sw, w, nw, and ne

    let q = current[0];
    let r = current[1];
    let nexttile;

    switch (dir) {
        case "e":
            q += 2;
            break;
        case "se":
            q += 1;
            break;
        case "sw":

            break;
        case "w":

            break;
        case "nw":

            break;
        case "ne":

            break;
    }
    return nexttile;
}