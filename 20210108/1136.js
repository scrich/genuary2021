const DEBUG = false;
let t;
let scale;
let alpha = 255;



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
    strokeCap(SQUARE);

    noStroke();
    fill(color(colors[floor(random(colors.length))]));

    // draw two reference points

    let point1 = { x: width/2, y: height/2 };
    let point2 = { x: mouseX, y: mouseY };

    referencepoint(point1);
    referencepoint(point2);

    /**
     * draw a line between the points, r away from them
     * work out the line between the points
     * it's the hypotonuse of a rectangle
     * short side is scale * 8
     * rotation angle pt
     * cos = a/h
     * pt = acos(a/h)
     */

    let p1p2 = createVector(point2.x - point1.x, point2.y - point1.y);
    // drawVector(point1, p1p2);

    let h = p1p2.mag();
    let a = scale * 4; // 4 because we have 3 lines + centre circles
    pt = acos(a/h);

    // get the vector for the end of the containing rectangle
    let p1p2perp = p1p2.copy().rotate(-pt);
    p1p2perp.setMag(scale);
    //drawVector(point1, p1p2perp);

    
    // let p2p1 = createVector(point1.x - point2.x, point1.y - point2.y);
    // p2p1.setMag(scale * 3);
    
    
    //drawVector(point2, p2p1);

    // take perpendicular
    // let p2p1perp = p2p1.copy().rotate(3 * PI / 2);

    // let p2p1perp = p2p1.copy().rotate(-pt);
    let p2p1perp = createVector(
        point1.x - point2.x, point1.y - point2.y
        ).rotate(-pt);
    p2p1perp.setMag(scale);
 

    // // now work out the REAL direction
    // p2p1perp.setMag(scale * 5);
    // p1p2perp.setMag(scale * 1);

    // // now go back the other way
    // p2p1perp.setMag(scale * 1);
    // p1p2perp.setMag(scale * 5);

    // set a thick pen
    strokeWeight(scale);
    // circles around points

    // red
    col1 = color(255,0,0);
    col1.setAlpha(alpha);

    stroke (col1);
    // set the scale
    p1p2perp.setMag(scale * 1);
    p2p1perp.setMag(scale * 3);

    arcsandlines(point1, p1p2perp, point2, p2p1perp);

    // green

    // realp1p2perp.setMag(scale * 2);
    // realp2p1perp.setMag(scale * 2);
    p1p2perp.setMag(scale * 2);
    p2p1perp.setMag(scale * 2);
    
    col2 = color(0, 255, 0);
    col2.setAlpha(alpha);

    stroke (col2);
    // stroke(0, 255, 0,100);

    arcsandlines(point1, p1p2perp, point2, p2p1perp);

    // blue
    
    col3 = color(0, 0, 255);
    col3.setAlpha(alpha);

    stroke (col3);
    // realp1p2perp.setMag(scale * 3);
    // realp2p1perp.setMag(scale * 1);
    p1p2perp.setMag(scale * 3);
    p2p1perp.setMag(scale * 1);

    arcsandlines(point1, p1p2perp, point2, p2p1perp);

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