
let shape = [];
let front = [];
let back = [];
// let colors = [];
let bg; // background colour
let fl; // fill colour

/*

colors

burnt umber 8a3324
raw umber 826644
yellow ochre c69d06
yellow cadmium deep fff600
titanium buff f0dc82
mars black 424746

*/

//let colors = [color("#8a3324"), color("#826644"), color("#c69d06"), color("#fff600"), color("#f0dc82"), color("#424746")]

function setup() {
    let cnv = createCanvas(480, 480);
    cnv.class("reduced");
    cnv.parent('sketch');
    blendMode(BLEND);
    
    // let colors = [
    //     color(0x8a, 0x33, 0x24), 
    //     color(0x82, 0x66, 0x44), 
    //     color(0xc6, 0x9d, 0x06), 
    //     color(0xff, 0xf6, 0x00), 
    //     color(0xf0, 0xdc, 0x82), 
    //     color(0x42, 0x47, 0x46)]
    console.log(colors);
    fl = colors[floor(random(colors.length))];
    bg = colors[floor(random(colors.length))];
    fill(fl);
    background(bg);

    for (let c = 0; c < 3; c++) {
        for (let d = 0; d < 3; d++) {
            let f = colors[floor(random(5))];
            back.push(new Roof_e(
                -120+ 240 * d, 
                -120+ c * 240, 
                240, 
                floor(random(4)), 
                floor(random(5)),
                f
                )
            );
        }
    }

    for (let c = 0; c < 2; c++) {
        for (let d = 0; d < 2; d++) {
            let f = colors[floor(random(5))];
            front.push(new Roof_e(
                240 * d, 
                c * 240, 
                240, 
                floor(random(4)), 
                floor(random(5)),
                f
                // color("green")
                )
            );
        }
    }
}

function draw() {

    for (s of back) {
        s.render();
    }

    for (s of front) {
        s.render();
    }

    noLoop();

   
}

function keyTyped() {
    switch(key) {
        case 's':
            blendMode(SCREEN);
            break;
        case 'm':
            blendMode(MULTIPLY);
            break;
        case 'b':
            blendMode(BLEND);
            break;
        case 'a':
            blendMode(ADD);
            break;
        case 'd':
            blendMode(DARKEST);
            break;
        case 'f':
            blendMode(DIFFERENCE);
            break;
        case 'e':
            blendMode(EXCLUSION);
            break;
        case 'l':
            blendMode(LIGHTEST);
            break;
        case 'r':
            blendMode(REPLACE);
            break;
        case 'o':
            blendMode(OVERLAY);
            break;
        case 'g':
            blendMode(DODGE);
            break;
        case 'u':
            blendMode(BURN);
            break;
        case 'z':
            blendMode(HARD_LIGHT);
            break;
        case 'x':
            blendMode(SOFT_LIGHT);
            break;
    }
   
    clear();
    background(bg);
    redraw();
    return false; // prevent default
  }

/*

b BLEND - linear interpolation of colours: C = A\*factor + B. This is the default blending mode.
a ADD - sum of A and B
d DARKEST - only the darkest colour succeeds: C = min(A\*factor, B).
l LIGHTEST - only the lightest colour succeeds: C = max(A\*factor, B).
f DIFFERENCE - subtract colors from underlying image.
e EXCLUSION - similar to DIFFERENCE, but less extreme.
m MULTIPLY - multiply the colors, result will always be darker.
s SCREEN - opposite multiply, uses inverse values of the colors.
r REPLACE - the pixels entirely replace the others and don't utilize alpha (transparency) values.
[not used] REMOVE - removes pixels from B with the alpha strength of A.
o OVERLAY - mix of MULTIPLY and SCREEN . Multiplies dark values, and screens light values. (2D)
z HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower. (2D)
x SOFT_LIGHT - mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh. (2D)
g DODGE - lightens light tones and increases contrast, ignores darks. (2D)
u BURN - darker areas are applied, increasing contrast, ignores lights. (2D)*/