
let shape = [];
let front = [];
let back = [];

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
    let cnv = createCanvas(4800, 4800);
    cnv.class("reduced");
    
    // let colors = [color("#8a3324"), color("#826644"), color("#c69d06"), color("#fff600"), color("#f0dc82"), color("#424746")]

    fill(colors[floor(random(5))])
    background(colors[floor(random(5))]);

    for (let c = 0; c < 4; c++) {
        for (let d = 0; d < 4; d++) {
            let f = colors[floor(random(5))];
            back.push(new Roof_e(
                1200 * d, 
                c * 1200, 
                1200, 
                floor(random(4)), 
                floor(random(5)),
                f
                // color("green")
                )
            );
        }
    }

    for (let c = 0; c < 2; c++) {
        for (let d = 0; d < 2; d++) {
            let f = colors[floor(random(5))];
            front.push(new Roof_e(
                2400 * d, 
                c * 2400, 
                2400, 
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


