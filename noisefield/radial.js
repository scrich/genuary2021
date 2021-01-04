SHOW_NOISEFIELD = false;

let inc = 0.1;
let scl = 4; //scale

let fr; // for displaying frameRate

let particles = [];
let numParticles = 100;
let zoff;

let flowfield_sq;
let colors;


function setup() {
    createCanvas(400, 400);
    background("#d3d3d3");
    angleMode(RADIANS);
    cols = floor(width / scl);
    rows = floor(height / scl);
    segs = 60;
    layers = 30;
    fr = createP('');
    zoff = 0;

    flowfield = make2DArray(segs, layers);

    for (let i = 0; i < numParticles; i++) {
        particles[i] = new Particle();
    }

    // colors = {"white":color(255,250,250), "iris":color(53,164,212), "muscles":color(0,0,127,30), "black":color(25,25,25)};
    // colors = {"white":color(255,250,250), "iris":color(117, 95, 14), "muscles":color(204, 170, 47,30), "black":color(25,25,25)};
    // colors = {"white":color(255,250,250), "iris":color(15, 135, 131), "muscles":color(11, 54, 52,30), "black":color(25,25,25)};
    colors = {"white":color(255,250,250), "iris":color(77, 41, 7), "muscles":color(153, 84, 18,30), "black":color(25,25,25)};

    noStroke();
    fill(colors.white);
    circle(width/2, height/2, layers*scl*2.5);
    fill(colors.iris);
    circle(width/2, height/2, layers*scl*2+1);
}

function draw() {
    SHOW_NOISEFIELD && background(220);

    let yoff = 0;

    for (let seg = 0; seg < segs; seg++) {
    // for (let seg = 0; seg < 15; seg++) {
        let seg_angle = (2*PI * seg/segs);
        // console.log("seg " + seg);
        // console.log(seg_angle)
        let xoff = 0;
        for (let layer = 0; layer < layers; layer++) {
            // cols will be radial coordinate

            //let index = x + y * cols;

            let angle = seg_angle -PI/2 +(noise(xoff, yoff, zoff)*PI) ; // should average to seg_angle
            let v = p5.Vector.fromAngle(angle); // make this relative to the angle
            v.setMag(0.2);
            
            flowfield[seg][layer] = v;
            xoff += inc;
            if (SHOW_NOISEFIELD) {
                stroke(0, 50);
                strokeWeight(1);
                push();
                translate(width/2, height/2);
                translate((layer)*scl*cos(seg_angle), (layer)*scl*sin(seg_angle));
                rotate(v.heading());
                circle(0,0,4);
                line(0, 0, scl, 0);

                pop()
            }

        }
        yoff += inc;

        zoff += 0.0005;
    }

    for (let i = 0; i < particles.length; i++) {
        // console.log("particle "+i);
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].show(colors.muscles);
        particles[i].edges();
    }

    fr.html(floor(frameRate()));


    fill(colors.black);
    circle(width/2, height/2, layers*scl*0.5);
    fill(colors.white);
    circle(width/2+4*scl, height/2-4*scl, 20);

// noLoop()
}

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}