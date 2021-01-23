let fact;
let bg; // background colour

/*

colors

burnt umber 8a3324
raw umber 826644
yellow ochre c69d06
yellow cadmium deep fff600
titanium buff f0dc82
mars black 424746

*/

//let colors = ["#8a3324","#826644","#c69d06","#fff600","#f0dc82","#424746"]

function setup() {
    let cnv = createCanvas(500, 600);
    cnv.parent('sketch');

    let colors = [
        color(0x8a, 0x33, 0x24),
        color(0x82, 0x66, 0x44),
        color(0xc6, 0x9d, 0x06),
        color(0xff, 0xf6, 0x00),
        color(0xf0, 0xdc, 0x82),
        //color(0x42, 0x47, 0x46)
    ]

    let f = colors[floor(random(colors.length))];
    bg = colors[floor(random(colors.length))];
    bg = color('#424746');
    background(bg);

    fact = new Todesfabrik(100, 30, 350, f);
}

function draw() {

    fact.render();
    
    let x = fact.x;
    let y = fact.y;
    let w = fact.w;
    let h = fact.h;

    fact.distort(x,y+280,w,h,0.1,0.9);

    


}


