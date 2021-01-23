
let shape = [];
let front = [];
let back = [];

/*

clare colors

Teal 008080
orange ffa500, 
cobalt 0047ab, 
ghost white f8f8ff, 
royal fuscia ca2c92, 
emerald 50c878
vampire black 080808

burnt umber 8a3324
raw umber 826644
yellow ochre c69d06
yellow cadmium deep fff600
titanium buff f0dc82
mars black 424746



*/

/*let colors = [
    color("#008080"), 
    color("#ffa500"), 
    color("#0047ab"), 
    color("#f8f8ff"), 
    color("#ca2c92"), 
    color("#50c878"),
    color("#080808")
]
*/

function setup() {
    let cnv = createCanvas(480, 480);
    cnv.class("reduced");
    
    let colors = [
        color("#008080"), 
        color("#ffa500"), 
        color("#0047ab"), 
        color("#f8f8ff"), 
        color("#ca2c92"), 
        color("#50c878"),
        color("#080808")
    ]

    fill(colors[floor(random(7))])
    background(colors[floor(random(7))]);

    for (let c = 0; c < 4; c++) {
        for (let d = 0; d < 4; d++) {
            let f = colors[floor(random(5))];
            back.push(new Roof_e(
                120 * d, 
                c * 120, 
                120, 
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

    // for (s of back) {
    //     s.render();
    // }

    for (s of front) {
        s.render();
    }

    noLoop();
}


