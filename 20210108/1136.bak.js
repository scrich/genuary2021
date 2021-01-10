const DEBUG = false;
let t;
let scale;



function setup() {
    let can = createCanvas(400, 400);
    can.parent("canvas");
    t = 0;
    scale = 20;
    // colors = ["#A6373F", "#AA8E39", "#343477", "#3C8D2F", "#59c8c0", "#5571c6", "#cbcb88", "#c372d0"]
    colors = ["#6d08a1", "#f15400", "#009f6f", "#edf100"]

}

function draw() {
    background(220);
    stroke(0);
    noFill();
    strokeWeight(1);

    noStroke();
    fill(color(colors[floor(random(colors.length))]));

    // draw two reference points

    let point1 = { x: 100, y: 100 };
    //  let point2 = {x:300,y:200};
    let point2 = { x: mouseX, y: mouseY };

    referencepoint(point1);
    referencepoint(point2);

    // draw a line between the points, r away from them
    // work out the line between the points


    let p1p2 = createVector(point2.x - point1.x, point2.y - point1.y);
    // p1p2.setMag(scale * 3);
    drawVector(point1, p1p2);

    // take perpendicular
    let p1p2perp = p1p2.copy().rotate(3 * PI / 2);
    p1p2perp.setMag(scale);
    //drawVector(point1, p1p2perp);

    let p2p1 = createVector(point1.x - point2.x, point1.y - point2.y);
    p2p1.setMag(scale * 3);
    //drawVector(point2, p2p1);

    // take perpendicular
    let p2p1perp = p2p1.copy().rotate(3 * PI / 2);
    p2p1perp.setMag(scale);
    //drawVector(point2, p2p1perp);


    // now work out the REAL direction
    p2p1perp.setMag(scale * 5);
    p1p2perp.setMag(scale * 1);

    realp1p2 = createVector(
        point2.x + p2p1perp.x - point1.x + p1p2perp.x,
        point2.y + p2p1perp.y - point1.y + p1p2perp.y
    );
    // realp1p2.setMag(scale);
    drawVector(point1, realp1p2);
    

    let realp1p2perp = realp1p2.copy().rotate(3 * PI / 2);
    realp1p2perp.setMag(scale);
    drawVector(point1, realp1p2perp);

    // now go back the other way
    p2p1perp.setMag(scale * 1);
    p1p2perp.setMag(scale * 5);
    let realp2p1 = createVector(
        point1.x + p1p2perp.x - point2.x + p2p1perp.x,
        point1.y + p1p2perp.y - point2.y + p2p1perp.y
        );
    // realp2p1.setMag(scale * 3);
    drawVector(point2, realp2p1);

    // take perpendicular
    let realp2p1perp = realp2p1.copy().rotate(3 * PI / 2);
    realp2p1perp.setMag(scale);
    drawVector(point2, realp2p1perp);


    // now we have the REAL directions

    strokeWeight(scale);
    // circles around points

    // red
    stroke(255, 0, 0,100);

    realp1p2perp.setMag(scale * 1);
    realp2p1perp.setMag(scale * 3);
    //drawVector(point2, realp2p1perp);

    arcsandlines(point1, realp1p2perp, point2, realp2p1perp);


    // green

    realp1p2perp.setMag(scale * 2);
    realp2p1perp.setMag(scale * 2);

    stroke(0, 255, 0,100);

    arcsandlines(point1, realp1p2perp, point2, realp2p1perp);

    // blue
    stroke(0, 0, 255,100);

    realp1p2perp.setMag(scale * 3);
    realp2p1perp.setMag(scale * 1);

    arcsandlines(point1, realp1p2perp, point2, realp2p1perp);
    //  arc(point1.x, point1.y,scale*6, scale*6, PI, p1p2perp.heading());
    //  arc(point2.x, point2.y,scale*2, scale*2, 0, TAU);
    //  line(point1.x+scale*3,point1.y, point2.x-scale*1, point2.y);


    // drawVector(point1, p1p2);
    // drawVector(point2, p2p1);

}

function arcsandlines(point1, p1p2perp, point2, p2p1perp) {
    arc(
        point1.x, point1.y,
        // scale * 2, scale * 2,
        p1p2perp.mag() * 2, p1p2perp.mag() * 2,
        PI, p1p2perp.heading()
    );
    arc(point2.x, point2.y,
        p2p1perp.mag() * 2, p2p1perp.mag() * 2,
        0, p2p1perp.heading()
    );
    line(
        point1.x + p1p2perp.x, point1.y + p1p2perp.y,
        point2.x + p2p1perp.x, point2.y + p2p1perp.y
    );
}

function referencepoint(loc) {
    stroke(0);
    noFill();
    circle(loc.x, loc.y, 10);
}

function drawVector(origin, vector) {
    push();
    translate(origin.x, origin.y);

    stroke(0);
    strokeWeight(2);
    noFill();
    circle(0, 0, 10);
    // drawv = vector.copy();
    // drawv.setMag(scale);
    line(0, 0, vector.x, vector.y);
    pop();
}