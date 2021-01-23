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

let radius = 40;
let t;


function setup() {
    let can = createCanvas(400, 400);
    can.parent("canvas");
    t = 0;

    background(220);
}

function draw() {

    stroke(0);
    for (let i = 0; i < width; i += radius) {
        for (let j = 0; j < height; j += radius) {


            push();
            translate(i, j);

            render(radius, t);
            pop();
        }
    }

    t += 0.01;

    // noLoop();
}

function render(r, t) {

    // console.log("render called with ("+r+","+t+")");
    stroke(color("red"));
    ellipse(r * cos(t), r * sin(t), 2);

    // if (r > 30) {
    //   render ((1 * radius / 4),t); 
    //   render ((2 * radius / 4),t); 
    //   render ((3 * radius / 4),t); 

    // }

    stroke(color("green"));
    ellipse(r * mcos(t, 1), r * msin(t, 1), 2);

    stroke(color("blue"));
    ellipse(r * mcos(t, 2), r * msin(t, 2), 2);

    stroke(color("orange"));
    ellipse(r * mcos(t, 3), r * msin(t, 3), 2);
}

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

    // second approx = x - x^3/3!
    return (result);
}

function mcos(x, terms) {
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