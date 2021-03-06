const DEBUG = false;
/**
 * function f(x) { 
    DRAW(x); 
    f(1 * x / 4); 
    f(2 * x / 4); 
    f(3 * x / 4); 
}
 * 
 */

let r = 100;
let t;



function setup() {
    let can = createCanvas(400, 400);
    can.parent("canvas");
      t = 0;
    // frameRate(20);

    background(220);
}

function draw() {

    stroke(0);
    translate(width / 2, height / 2);

    
    fill(0);
    //   beginShape();

    // console.log(t);
    for (let i = 5; i < 12; i+=1) {
        stroke(i*6, i*4, 255);
        fill(i*6, i*4, 255);
        // for (let t = 0; t < 10 * PI; t += 0.01) {
            // vertex(r * mcos(t, i), r * msin(t, i));
            // ellipse(r * mcos(t, i), r * msin(t, i), 2);
            // text(i,r * mcos(t, i), r * msin(t, i));
            
            ellipse(r * mcos(t, i), r * msin(t, i), 1);
        // }
    }

    //   render(radius, t);

    // noLoop();
    t+=0.01;
}

function render(r, t) {

    // console.log("render called with ("+r+","+t+")");
    //   stroke(color("red"));


    stroke(0, 0, 0, 20);
    noFill();
    //   beginShape();
    for (let t = 0; t < 10 * PI.length; t += 0.01) {

        for (let i = 1; i < 40; i++) {
            // vertex(r * mcos(t, i), r * msin(t, i));
            ellipse(r * mcos(t, i), r * msin(t, i), 2);
        }
    }

    //   endShape(CLOSE);


}

// function keyPressed() {
//   saveCanvas("Maclaurin", "png");
// }

function facttest(c) {
    // call factorial function c times
    console.log("calling fact(10) " + c + " times");
    console.time("fact");
    fact(10);
    console.timeEnd("fact");
    console.log("calling fact(10) " + c + " times");
}

function msin(x, terms) {
    let result = 0;

    for (let k = 0; k < terms; k++) {
        result += (pow(-1, k) * pow(x, ((2 * k) + 1))) / fact(2 * k + 1)

        // -1^k . x ^ 2k+1 / 2k+1 !
    }
    return result;
}

function _msin(x, terms) {
    let result = 0;

    switch (terms) {
        case 1:
            // first approx = x
            result = x;
            break;
        case 2:
            result = x - (pow(x, 3) / fact(3));
            break;
        case 3:
            result = x - (pow(x, 3) / fact(3)) + (pow(x, 5) / fact(5));
            break;
        default:
            log("no result for " + terms + " terms");
    }

    return (result);
}

function mcos(x, terms) {
    let result = 0;

    for (let k = 0; k < terms; k++) {
        result += (pow(-1, k) * pow(x, 2 * k)) / fact(2 * k)

        // -1^k . x ^ 2k / 2k !
    }
    return result;
}

function _mcos(x, terms) {
    let result = 0;

    switch (terms) {
        case 1:
            // first approx = x
            result = 1;
            break;
        case 2:
            result = 1 - (pow(x, 2) / fact(2));
            break;
        case 3:
            result = 1 - (pow(x, 2) / fact(2)) + (pow(x, 4) / fact(4));
            break;
        default:
            log("no result for " + terms + " terms");
        // first approx = 1

        // second approx = 1 - x^2/2!
    }
    return (result);
}

function fact(n) {
    // really needs memoization!
    if (n == 1 || n == 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}